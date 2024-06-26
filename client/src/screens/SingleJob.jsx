import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Job2 from "../components/Job2";
import { Button, Card, Col, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { faFacebook, faFacebookSquare, faInstagramSquare, faPinterest, faTwitter, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";


export default function Singlejob() {
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
      <Container style={{ padding: '10px', }}>

        <Row>
          <Col xs={7} />

          <Col xs={5}  >


            <Card style={{ "bottom": "250px" }}>
              <Card.Body>
                <Row className="align-items-center mb-3">
                  <Col xs="auto">
                    <img src="path_to_instagram_logo.png" alt="Instagram" width="50" height="50" />
                  </Col>
                  <Col>
                    <h5 className="mb-0">Instagram</h5>
                    <small className="text-muted">Social networking service</small>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={5}><small>Founded in:</small></Col>
                  <Col><strong>March 21, 2006</strong></Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={5}><small>Organization type:</small></Col>
                  <Col><strong>Private Company</strong></Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={5}><small>Company size:</small></Col>
                  <Col><strong>120-300 Companies</strong></Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={5}><small>Phone:</small></Col>
                  <Col><strong>(406) 555-0120</strong></Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={5}><small>Email:</small></Col>
                  <Col><strong>twitter@gmail.com</strong></Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={5}><small>Website:</small></Col>
                  <Col><strong>https://twitter.com</strong></Col>
                </Row>
                <div>
                  <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="me-2 text-primary" />
                  <FontAwesomeIcon icon={faTwitterSquare} size="2x" className="me-2 text-info" />
                  <FontAwesomeIcon icon={faInstagramSquare} size="2x" className="me-2 text-danger" />
                  <FontAwesomeIcon icon={faYoutubeSquare} size="2x" className="text-danger" />
                </div>
              </Card.Body>
            </Card>

          </Col>

        </Row>
      </Container>

    </MainLayout>
  );
}


