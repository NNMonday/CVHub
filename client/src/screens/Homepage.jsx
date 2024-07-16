import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import Illustration from "../assets/Illustration.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBuilding,
  faCity,
  faCode,
  faLocationDot,
  faMagnifyingGlass,
  faSuitcase,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Job from "../components/Job.jsx";
import { Link } from "react-router-dom";
import PerformRequest from "../utilities/PerformRequest.js";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export default function Homepage() {
  const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await OriginalRequest("jobs/getAllJobs", "GET");
        if (data) {
          setJobs(data);
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const [jobFie, setJobFie] = useState([]);
  useEffect(() => {
    const fetchJobByFieldId = async () => {
      try {
        const response = await OriginalRequest("jobs/field", "GET");
        const data = response.data;
        if (Array.isArray(data)) {
          setJobFie(data);
        } else {
          console.error("Data fetched is not an array:", data);
          setJobFie([]);
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setJobFie([]);
      }
    };
    fetchJobByFieldId();
  }, []);

  const [searchValue, setSearchValue] = useState({
    jobTitle: "",
    location: "",
  });

  const [location, setLocation] = useState([]);
  const [stats, setStats] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const locationRes = await axios.get(
          "http://localhost:9999/api/location/getAllLocation"
        );
        const statsRes = await axios.get(
          "http://localhost:9999/api/stats/homepage"
        );
        setStats(statsRes.data);
        setLocation(locationRes.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const statsIcon = [
    <FontAwesomeIcon icon={faSuitcase} className="w-100 h-100" />,
    <FontAwesomeIcon icon={faCity} className="w-100 h-100" />,
    <FontAwesomeIcon icon={faUsers} className="w-100 h-100" />,
    <FontAwesomeIcon icon={faSuitcase} className="w-100 h-100" />,
  ];

  const Badge = ({ h5, span, type = "", i, icon }) => (
    <Col sm={3} className="figure">
      <div
        className="bg-white p-3 d-flex align-items-center h-100"
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
          {!icon ? statsIcon[i] : <FontAwesomeIcon icon={faCode} />}
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

  return (
    <MainLayout>
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
              <div
                className="d-flex align-items-center"
                style={{ width: "40%" }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="me-3" />
                <input
                  type="text"
                  placeholder="Job title"
                  className="border-0 h-100 custom-input"
                  value={searchValue.jobTitle}
                  onChange={(e) =>
                    setSearchValue({ ...searchValue, jobTitle: e.target.value })
                  }
                />
              </div>
              <div
                className="border border-1 mx-3"
                style={{ height: "20px" }}
              ></div>
              <div className="d-flex w-50 align-items-center">
                <select
                  value={searchValue.location}
                  onChange={(e) =>
                    setSearchValue({ ...searchValue, location: e.target.value })
                  }
                  className="border-0 py-2 px-3 w-50"
                >
                  <option value="" hidden>
                    Select Location
                  </option>
                  {location.map((l) => (
                    <option key={l._id} value={l._id}>
                      {l.location_name}
                    </option>
                  ))}
                </select>
                <div
                  className="border border-1 mx-2"
                  style={{ height: "60%" }}
                ></div>
              </div>
              <Link
                className="ms-auto btn btn-primary"
                to={`/viewAllJob?jobTitle=${searchValue.jobTitle}&location=${searchValue.location}`}
              >
                Find job
              </Link>
            </div>
          </Col>
          <Col sm={6} className="text-center">
            <img src={Illustration} className="w-75" alt="Illustration" />
          </Col>
        </Row>
        {/* get job with fields ở đây */}
        <Row className="gx-3">
          {stats.map((f, i) => (
            <Badge h5={f.count} span={f.title} key={i} i={i} />
          ))}
        </Row>
      </Container>

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
            <Badge
              key={i}
              h5={c.fields_name}
              span={c.job_count}
              type="category"
              icon={c.icon}
            />
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
              <Link
                to="/viewAllJob"
                className="text-primary"
                style={{ textDecoration: "none" }}
              >
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
