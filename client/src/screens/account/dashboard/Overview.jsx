import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Table, Alert } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DashboardLayout from "../../../layouts/DashboardLayout.jsx";
import {
  faBriefcase,
  faCalendar,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import logoPlaceholder from "../../../assets/logoPlaceholder.png";
import { Link } from "react-router-dom";
import PerformRequest from "../../../utilities/PerformRequest.js";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

const JobPortal = () => {
  // const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);
  // const [jobSeekers, setJobSeekers] = useState([]);
  // const { jobSeekerId } = useParams();
  // useEffect(() => {
  //     const fetchJobSeekers = async () => {
  //       try {
  //         const data = await OriginalRequest(
  //           `jobSekker/getJobSeekerById${jobSeekerId}`,
  //           'GET'
  //         );
  //         if (data) {
  //           console.log('jobsekker fetched:', data);
  //           setJobSeekers(data);
  //           console.log(data);
  //         }
  //       } catch (error) {
  //         console.error('Failed to fetch jobseekers:', error);
  //       }
  //     };
  //     fetchJobSeekers();
  //   }, [OriginalRequest]);

  return (
    <DashboardLayout>
      <Container>
        <Row className="mt-4">
          <Col>
            <h1 style={{ fontSize: "1.5em" }}>Hello, hahaha</h1>
            <p style={{ fontSize: "0.8em", color: "rgba(0, 0, 0, 0.6)" }}>
              Here is your daily activities and job alerts
            </p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={6}>
            <div
              style={{
                backgroundColor: "#add8e6",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="text-center p-2 border"
            >
              <div style={{ textAlign: "left" }}>
                <h2 style={{ fontSize: "1.5em" }}>589</h2>
                <p style={{ margin: 0 }}>Applied jobs</p>
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ fontSize: "1.5em", color: "#87CEFA" }}
                />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                backgroundColor: "#ffffe0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="text-center p-2 border"
            >
              <div style={{ textAlign: "left" }}>
                <h2 style={{ fontSize: "1.5em" }}>238</h2>
                <p style={{ margin: 0 }}>Favorite jobs</p>
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  style={{ fontSize: "1.5em", color: "#FFA500" }}
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Alert
              variant="danger"
              style={{
                backgroundColor: "#ff4c4c", // Màu nền đỏ
                color: "white",
                padding: "30px", // Tăng padding lên 30px
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://res.cloudinary.com/djzdhtdpj/image/upload/v1704269768/tempAvatar_juqb4s.jpg"
                  alt="Profile"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%", // Để làm ảnh hình tròn
                    marginRight: "20px",
                  }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2 style={{ fontSize: "16px" }}>
                    Your profile editing is not completed.
                  </h2>
                  <span style={{ fontSize: "14px" }}>
                    Complete your profile editing & build your custom Resume
                  </span>
                </div>
              </div>
              <Link
                className="btn"
                style={{
                  backgroundColor: "white",
                  color: "#ff4c4c",
                  border: "none",
                  padding: "10px 20px",
                }}
                to={"/account/setup/personal"}
              >
                <FaEdit className="me-2" />
                Edit Profile
              </Link>
            </Alert>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Row className="">
              <Col>
                <h2>Recently Applied</h2>
              </Col>
              <Col className="text-end">
                <h2>
                  View All <FontAwesomeIcon icon={faAngleRight} />
                </h2>
              </Col>
            </Row>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Job</th>
                  <th>Date Applied</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Col
                      sm={12}
                      className="d-flex p-4 border align-items-center mb-3 job-container"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="d-flex flex-grow-1">
                        <div
                          style={{ width: "7%", borderRadius: "6px" }}
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
                              Networking Engineer
                            </Link>
                            <span
                              className="text-primary fw-bold bg-primary-subtle py-1 px-2 ms-3"
                              style={{ borderRadius: "15px" }}
                            >
                              Full-time
                            </span>
                          </div>
                          <div className="text-secondary">
                            <span>
                              <FontAwesomeIcon
                                className="me-1"
                                icon={faLocationDot}
                              />{" "}
                              New York
                            </span>
                            <span>
                              <FontAwesomeIcon
                                className="me-1 ms-3"
                                icon={faDollarSign}
                              />{" "}
                              $80,000
                            </span>
                            <span>
                              <FontAwesomeIcon
                                className="me-1 ms-3"
                                icon={faCalendar}
                              />{" "}
                              10 Days Remaining
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </td>
                  <td>Feb 2, 2019 19:28</td>
                  <td>
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Col
                      sm={12}
                      className="d-flex p-4 border align-items-center mb-3 job-container"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="d-flex flex-grow-1">
                        <div
                          style={{ width: "7%", borderRadius: "6px" }}
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
                              Product Designer
                            </Link>
                            <span
                              className="text-primary fw-bold bg-primary-subtle py-1 px-2 ms-3"
                              style={{ borderRadius: "15px" }}
                            >
                              Part-time
                            </span>
                          </div>
                          <div className="text-secondary">
                            <span>
                              <FontAwesomeIcon
                                className="me-1"
                                icon={faLocationDot}
                              />{" "}
                              San Francisco
                            </span>
                            <span>
                              <FontAwesomeIcon
                                className="me-1 ms-3"
                                icon={faDollarSign}
                              />{" "}
                              $90,000
                            </span>
                            <span>
                              <FontAwesomeIcon
                                className="me-1 ms-3"
                                icon={faCalendar}
                              />{" "}
                              15 Days Remaining
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </td>
                  <td>Dec 7, 2019 23:26</td>
                  <td>
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Col
                      sm={12}
                      className="d-flex p-4 border align-items-center mb-3 job-container"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="d-flex flex-grow-1">
                        <div
                          style={{ width: "7%", borderRadius: "6px" }}
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
                              Junior Graphic Designer
                            </Link>
                            <span
                              className="text-primary fw-bold bg-primary-subtle py-1 px-2 ms-3"
                              style={{ borderRadius: "15px" }}
                            >
                              Full-time
                            </span>
                          </div>
                          <div className="text-secondary">
                            <span>
                              <FontAwesomeIcon
                                className="me-1"
                                icon={faLocationDot}
                              />{" "}
                              Los Angeles
                            </span>
                            <span>
                              <FontAwesomeIcon
                                className="me-1 ms-3"
                                icon={faDollarSign}
                              />{" "}
                              $70,000
                            </span>
                            <span>
                              <FontAwesomeIcon
                                className="me-1 ms-3"
                                icon={faCalendar}
                              />{" "}
                              5 Days Remaining
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </td>
                  <td>Feb 2, 2019 19:28</td>
                  <td>
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Col
                      sm={12}
                      className="d-flex p-4 border align-items-center mb-3 job-container"
                      style={{ borderRadius: "10px" }}
                    >
                      <div className="d-flex flex-grow-1">
                        <div
                          style={{ width: "7%", borderRadius: "6px" }}
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
                              Visual Designer
                            </Link>
                            <span
                              className="text-primary fw-bold bg-primary-subtle py-1 px-2 ms-3"
                              style={{ borderRadius: "15px" }}
                            >
                              Contract
                            </span>
                          </div>
                          <div className="text-secondary">
                            <span>
                              <FontAwesomeIcon
                                className="me-1"
                                icon={faLocationDot}
                              />{" "}
                              Chicago
                            </span>
                            <span>
                              <FontAwesomeIcon
                                className="me-1 ms-3"
                                icon={faDollarSign}
                              />{" "}
                              $85,000
                            </span>
                            <span>
                              <FontAwesomeIcon
                                className="me-1 ms-3"
                                icon={faCalendar}
                              />{" "}
                              7 Days Remaining
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </td>
                  <td>Dec 7, 2019 23:26</td>
                  <td>
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default JobPortal;
