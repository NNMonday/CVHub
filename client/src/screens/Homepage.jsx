import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import Illustration from "../assets/Illustration.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import {
  faArrowRight,
  faLocationDot,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Job from "../components/Job.jsx"
import { Link } from "react-router-dom";
import PerformRequest from "../utilities/PerformRequest.js";
import { useEffect, useState, useCallback } from "react";




export default function Homepage() {
  
  const searchValue = useSelector((state) => state.search.searchKey);
  const [jobsList, setJobList] = useState([]);
  const fetchJobs = async (jobTitle, location) => {
    try {
      const searchJobValue = await OriginalRequest(
        `jobs/search?name=${jobTitle}&locationName=${location}`,
        'GET'
      );
      if (searchJobValue) {
        setJobList(searchJobValue.data);
      }
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  useEffect(() => {
    if (searchValue.jobTitle || searchValue.location) {
      fetchJobs(searchValue.jobTitle, searchValue.location);
    }
  }, [searchValue.jobTitle, searchValue.location]);

  const handleInputChange = (field, value) => {
  };

  const handleSearch = () => {
    fetchJobs(searchValue.jobTitle, searchValue.location);
  };

  const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await OriginalRequest(
          'jobs/getAllJobs',
          'GET'
        );
        if (data) {
          console.log('jobs fetched:', data);
          setJobs(data);
          console.log(data);
        }
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };
    fetchJobs();
  }, [OriginalRequest]);



  const [jobFie, setJobFie] = useState([]);
  useEffect(() => {
    const fetchJobByFieldId = async () => {
      try {
        const response = await OriginalRequest('jobs/field', 'GET');
        const data = response.data;

        if (Array.isArray(data)) {
          console.log('Jobs fetched:', data);
          setJobFie(data);
        } else {
          console.error('Data fetched is not an array:', data);
          setJobFie([]);
        }
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
        setJobFie([]);
      }
    };
    fetchJobByFieldId();
  }, []);


  const data = {
    figures: [
      {
        name: "Live Jobs",
        quantity: 175324,
      },
      {
        name: "Companies",
        quantity: 87354,
      },
      {
        name: "Candidates",
        quantity: 3847154,
      },
      {
        name: "New Jobs",
        quantity: 7532,
      },
    ],


  };
  const Badge = ({ h5, span, type = "" }) => (
    <Col sm={3} className="figure">
      <div
        className="bg-white p-3 d-flex align-items-center"
        style={{ borderRadius: "9px" }}
      >
        <div
          className="p-3 figure-icon-container"
          style={{
            width: "30%",
            backgroundColor: "#E7F0FA",
            borderRadius: "10px",
          }}
        >
          <FontAwesomeIcon icon={faUsers} className="w-100 h-100" />
        </div>
        <div className="ms-3 d-flex flex-column">
          <span className="h5">{h5}</span>
          <span className="text-secondary">
            {span} {type === "category" && "Open positions"}
          </span>
        </div>
      </div>
    </Col>
  );


  const Banner = () => (
    <Container
      fluid
      className="bg-secondary-subtle"
      style={{ padding: "70px 200px" }}
    >
      <Row>
        <Col sm={6}>
          <h1>Find a job that suits your interest & skills.</h1>
          <p className="text-secondary my-4">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </p>
          <div className="d-flex bg-white w-100 align-items-center p-3" style={{ borderColor: '#E4E5E8', borderRadius: '10px' }}>
            <div className="d-flex align-items-center" style={{ width: '40%' }}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="me-3" />
              <input
                type="text"
                placeholder="Job title"
                className="border-0 h-100 custom-input"
                value={searchValue.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)} // Sử dụng handleInputChange để xử lý sự kiện onChange
              />
            </div>
            <div className="border border-1 mx-3" style={{ height: '20px' }}></div>
            <div className="d-flex align-items-center w-25">
              <FontAwesomeIcon icon={faLocationDot} className="me-3" />
              <input
                type="text"
                placeholder="Your location"
                className="border-0 h-100 custom-input"
                value={searchValue.location}
                onChange={(e) => handleInputChange('location', e.target.value)} // Sử dụng handleInputChange để xử lý sự kiện onChange
              />
            </div>
            <Button variant="primary" className="ms-auto" onClick={handleSearch}>
              Find job
            </Button>
          </div>
        </Col>
        <Col sm={6} className="text-center">
          <img src={Illustration} className="w-75" alt="Illustration" />
        </Col>
      </Row>
      {/* get job with fields ở đây */}
      <Row className="gx-3">
        {data.figures.map((f, i) => (
          <Badge h5={f.quantity} span={f.name} key={i} />
        ))}
      </Row>
    </Container>
  );
  return (
    <MainLayout>
      <Banner />

      <Container fluid style={{ padding: "70px 200px" }}>
        <Row>
          <Col className="d-flex justify-content-between align-items-center mb-3">
            <h3>Popular fields</h3>
            <div className="border py-2 px-3" style={{ borderRadius: "5px" }}>
              <span className="text-primary">
                View All <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          {jobFie.slice(0, 8).map((c, i) => (
            <Badge key={i} h5={c.fields_name} span={c.job_count} type="category" />
          ))}
        </Row>
      </Container>
      <hr />


      {/* //jobs here */}
      <Container fluid style={{ padding: "70px 200px" }}>
        <Row>
          <Col className="d-flex justify-content-between align-items-center mb-4">
            <h3>Featured jobs</h3>
            <div className="border py-2 px-3" style={{ borderRadius: '5px' }}>
              <Link to="/viewAllJob" className="text-primary" style={{ textDecoration: 'none' }}>
                View All <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          {jobs.slice(0, 5).map((j, i) => (
            <Job key={i} {...j} />
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
}
