import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Col, Container, Row } from "react-bootstrap";
import Illustration from "../assets/Illustration.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationDot,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import Job from "../components/Job";

export default function Homepage() {
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
            <Link to={"/find/job"} className="ms-auto btn btn-primary">
              Find job
            </Link>
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
