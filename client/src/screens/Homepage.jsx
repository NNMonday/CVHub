import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import Illustration from "../assets/Illustration.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendar,
  faDollarSign,
  faLocationDot,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import logoPlaceholder from "../assets/logoPlaceholder.png";
import { Link } from "react-router-dom";
import { getDistanceFromToday } from "../utilities/ReuseFns";
import PerformRequest from "../utilities/PerformRequest.js";
import { useEffect, useState, useCallback } from "react";


export default function Homepage() {
  const  OriginalRequest = useCallback(PerformRequest().OriginalRequest,[]);


  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await OriginalRequest(
          'company/getAllCompanies',
          'GET'
        );
        if (data) {
          console.log('Company fetched:', data);
          setCompanies(data);
        }
      } catch (error) {
        console.error('Failed to fetch company:', error);
      }
    };
    fetchCompanies();
  }, [OriginalRequest]);

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
        }
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };
    fetchJobs();
  }, [OriginalRequest]);


  const [jobSekkers, setJobSekkers] = useState([]);
  useEffect(() => {
    const fetchJobSekkers = async () => {
      try {
        const data = await OriginalRequest(
          'jobSekker/getAllJobs',
          'GET'
        );
        if (data) {
          console.log('jobs fetched:', data);
          setJobSekkers(data);
        }
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      }
    };
    fetchJobSekkers();
  }, [OriginalRequest]);



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
    categories: [
      { name: "Graphics & Design", quantity: "357" },
      { name: "Code & Programming", quantity: "312" },
      { name: "Digital Marketing", quantity: "297" },
      { name: "Video & Animation", quantity: "247" },
      { name: "Music & Audio", quantity: "204" },
      { name: "Account & Finance", quantity: "167" },
      { name: "Health & Care", quantity: "125" },
      { name: "Data & Science", quantity: "57" },
    ],
    jobs: [
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
      },
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
      },
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
      },
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
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

  const Job = ({ name, work_status, location, salary, deadline }) => (
    <Col
      sm={12}
      className="d-flex p-4 border align-items-center mb-3 job-container"
      style={{ borderRadius: "10px" }}
    >
      <div className="d-flex flex-grow-1">
        <div
          style={{
            width: "7%",
            borderRadius: "6px",
          }}
          className="overflow-hidden"
        >
          <img
            src={logoPlaceholder}
            alt="logoPlaceholder"
            className="w-100 h-100"
          />
        </div>
        <div className="ms-3 d-flex flex-column justify-content-between">
          <div>
            <Link className="text-decoration-none fw-bolder fs-5 job-name">
              {name}
            </Link>
            <span
              className="text-primary fw-bold bg-primary-subtle py-1 px-2 ms-3"
              style={{ borderRadius: "15px" }}
            >
              {work_status}
            </span>
          </div>
          <div className="text-secondary">
            <span>
              <FontAwesomeIcon className="me-1" icon={faLocationDot} />{" "}
              {location}
            </span>
            <span>
              <FontAwesomeIcon className="me-1 ms-3" icon={faDollarSign} />
              {salary} VNĐ
            </span>
            <span>
              <FontAwesomeIcon className="me-1 ms-3" icon={faCalendar} />
              {getDistanceFromToday(deadline)} Days Remaining
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div
          className="py-2 px-3 me-2 save-container"
          style={{
            borderRadius: "6px",
          }}
        >
          <FontAwesomeIcon icon={faBookmark} />
        </div>
        <div
          className="d-flex align-items-center py-1 px-3 apply-container"
          style={{ backgroundColor: "#E7F0FA", borderRadius: "6px" }}
        >
          <span className="fw-bold">
            Apply Now
            <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
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
          <div
            className="d-flex bg-white w-100 align-items-center p-3"
            style={{ borderColor: "#E4E5E8", borderRadius: "10px" }}
          >
            <div className="d-flex align-items-center" style={{ width: "40%" }}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="me-3" />
              <input
                type="text"
                placeholder="Job title"
                className="border-0 h-100 custom-input"
              />
            </div>
            <div
              className="border border-1 mx-3"
              style={{ height: "20px" }}
            ></div>
            <div className="d-flex align-items-center w-25">
              <FontAwesomeIcon icon={faLocationDot} className="me-3" />
              <input
                type="text"
                placeholder="Your location"
                className="border-0 h-100 custom-input"
              />
            </div>
            <Button variant="primary" className="ms-auto">
              Find job
            </Button>
          </div>
        </Col>
        <Col sm={6} className="text-center">
          <img src={Illustration} className="w-75" alt="Illustration" />
        </Col>
      </Row>
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
          {data.categories.map((c, i) => (
            <Badge key={i} h5={c.name} span={c.quantity} type="category" />
          ))}
        </Row>
      </Container>
      <hr />


      {/* //jobs here */}
      <Container fluid style={{ padding: "70px 200px" }}>
        <Row>
          <Col className="d-flex justify-content-between align-items-center mb-4">
            <h3>Featured jobs</h3>
            <div className="border py-2 px-3" style={{ borderRadius: "5px" }}>
              <span className="text-primary">
                View All <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          {data.jobs.map((j, i) => (
            <Job key={i} {...j} />
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
}
