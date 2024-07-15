import React from "react";

import {
  Col,
  Container,
  Row,
  // Button,
  // Form,
  // Modal,
  // Table,
  Nav,
} from "react-bootstrap";
import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faBriefcase,
  faBookmark,
  // faUser,
  // faFileInvoiceDollar,
  // faBuilding,
  faCog,
  faSignOutAlt,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Job from "../components/Job";
import { NavLink } from "react-router-dom";

export default function FavoriteJobs() {
  const data = {
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

  const favoriteJobsCount = data.jobs.length;

  return (
    <MainLayout>
      <Container fluid>
        <Row>
          <Col md={3} className="bg-light sidebar">
            <div
              className="d-flex flex-column vh-100 p-3 bg-light"
              style={{ width: "250px" }}
            >
              <h4 className="mb-4">CANDIDATE DASHBOARD</h4>
              <Nav className="flex-column">
                <NavLink
                  to="/candidatedashboard"
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center mb-2 ${
                      isActive ? "active" : "text-dark"
                    }`
                  }
                >
                  <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
                  Overview
                </NavLink>
                <NavLink
                  to="/appliedjobs"
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center mb-2 ${
                      isActive ? "active" : "text-dark"
                    }`
                  }
                >
                  <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                  Applied Jobs
                </NavLink>
                <NavLink
                  to="/favoritejobs"
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center mb-2 ${
                      isActive ? "active" : "text-dark"
                    }`
                  }
                >
                  <FontAwesomeIcon icon={faBookmark} className="me-2" />
                  Favorite Jobs
                </NavLink>
                <NavLink
                  to="/jobalerts"
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center mb-2 ${
                      isActive ? "active" : "text-dark"
                    }`
                  }
                >
                  <FontAwesomeIcon icon={faBell} className="me-2" />
                  Job Alert
                </NavLink>
                <NavLink
                  to="/settingpersonal"
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center mb-2 ${
                      isActive ? "active" : "text-dark"
                    }`
                  }
                >
                  <FontAwesomeIcon icon={faCog} className="me-2" />
                  Settings
                </NavLink>
                <NavLink
                  to="/logout"
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center mt-auto ${
                      isActive ? "active" : "text-dark"
                    }`
                  }
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                  Log-out
                </NavLink>
              </Nav>
            </div>
          </Col>
          <Col md={9}>
            <h3>Favorite Job ({favoriteJobsCount})</h3>

            <div>
              {data.jobs.map((j) => (
                <Job key={j.jobId} {...j} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}

export const getFavoriteJobsCount = () => {
  const data = {
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
  return data.jobs.length;
};
