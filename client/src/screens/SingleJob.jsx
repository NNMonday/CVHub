import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Job2 from "../components/Job2";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import PerformRequest from "../utilities/PerformRequest.js";
import { useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom';


export default function Singlejob() {
  const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);
  const [job, setJob] = useState([]);
  const { jobId } = useParams();
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await OriginalRequest(`jobs/getJobById/${jobId}`, 'GET');
        if (response && response.data) {
          console.log('Job fetched:', response.data);
          setJob(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch job:', error);
      }
    };

    fetchJob();
  }, [OriginalRequest]);


  const data = {
    jobs: [

      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        link: "Senior UX Designer",
        phoneNumber: "(406) 555-0120",
        mail: "career@instagram.com",
        description: `
<h5>Integer aliquet pretium consequat</h5>
<p>Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue. Donec in suscipit diam. Pellentesque quis justo sit amet arcu commodo sollicitudin. Integer finibus blandit condimentum. Vivamus sit amet ligula ullamcorper, pulvinar ante id, tristique erat. Quisque sit amet aliquam urna. Maecenas blandit felis id massa sodales finibus. Integer bibendum eu nulla eu sollicitudin. Sed lobortis diam tincidunt accumsan faucibus. Quisque blandit augue quis turpis auctor, dapibus euismod ante ultricies. Ut non felis lacinia turpis feugiat euismod at id magna. Sed ut orci arcu. Suspendisse sollicitudin faucibus aliquet.</p>
<p>Nam dapibus consectetur erat in euismod. Cras urna augue, mollis venenatis augue sed, porttitor aliquet nibh. Sed tristique dictum elementum. Nulla imperdiet sit amet quam eget lobortis. Etiam in neque sit amet orci interdum tincidunt.</p>
<h5>Responsibilities</h5>
<ul>
  <li>Quisque semper gravida est et consectetur.</li>
  <li>Curabitur blandit lorem velit, vitae pretium leo placerat eget.</li>
  <li>Morbi mattis in ipsum ac tempus.</li>
  <li>Curabitur eu vehicula libero. Vestibulum sed purus ullamcorper, lobortis lectus nec.</li>
  <li>Vulputate turpis. Quisque ante odio, iaculis a porttitor sit amet.</li>
  <li>Lobortis vel lectus. Nulla at risus ut diam.</li>
  <li>Commodo feugiat. Nullam laoreet, diam placerat dapibus tincidunt.</li>
  <li>Odio metus posuere lorem, id condimentum erat velit nec neque.</li>
  <li>Dui sodales ut. Curabitur tempus augue.</li>
</ul>`,
        jobPosted: "14 June, 2021",
        jobExpire: "14 July, 2021",
        education: "Graduation",
        salary: "$50k-80k/month",
        location: "New York, USA",
        jobType: "Full Time",
        experience: "10-15 Years"
      },
    ],
  };


  return (
    <MainLayout>
      <div style={{ padding: "20px 200px" }} className="bg-secondary-subtle">
        <div className="d-flex" style={{ textAlign: "center" }}>
          <h5 className="fw-bold">Job Detail</h5>
        </div>
      </div>
      <div>
        {data.jobs.map((j) => (
          <Job2 {...j} />
        ))}
      </div>
    </MainLayout>
  );
}


