import React, { useState } from "react";

import {
  Button,
  Col,
  Container,
  Row,
  Form,
  // Modal,
  Nav,
  Card,
  Image,
} from "react-bootstrap";
import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faUser,
  faBriefcase,
  faBookmark,
  // faFileInvoiceDollar,
  // faBuilding,
  faCog,
  faSignOutAlt,
  faBell,
  faUpload,
  // faEdit,
  // faTrash,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function SettingPersonal() {
  const [activeTab, setActiveTab] = useState("personal");
  const [showAddResume, setShowAddResume] = useState(false);

  const handleTabChange = (tab) => setActiveTab(tab);

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
            <h1>Setting</h1>
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link
                  active={activeTab === "personal"}
                  onClick={() => handleTabChange("personal")}
                >
                  <FontAwesomeIcon icon={faUser} /> Personal
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === "profile"}
                  onClick={() => handleTabChange("profile")}
                >
                  <FontAwesomeIcon icon={faUser} /> Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === "socialLinks"}
                  onClick={() => handleTabChange("socialLinks")}
                >
                  <FontAwesomeIcon icon={faLink} /> Social Links
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === "accountSetting"}
                  onClick={() => handleTabChange("accountSetting")}
                >
                  <FontAwesomeIcon icon={faCog} /> Account Setting
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {activeTab === "personal" && (
              <>
                <h2>Basic Information</h2>
                <Form>
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Profile Picture</Form.Label>
                        <div>
                          <Image src="3.png" />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Experience</Form.Label>
                        <Form.Select>
                          <option>Select...</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Tittle/headline</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Educations</Form.Label>
                        <Form.Select>
                          <option>Select...</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Form.Group className="mb-3">
                        <Form.Label>Personal Website</Form.Label>
                        <Form.Control type="url" placeholder="Website url..." />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary">Save Changes</Button>
                </Form>

                <Card className="mb-3">
                  <Card.Body>
                    <Button
                      variant="link"
                      onClick={() => setShowAddResume(true)}
                    >
                      <FontAwesomeIcon icon={faUpload} /> Add Cv/Resume
                    </Button>
                    <small>Browse file or drop here, only pdf</small>
                  </Card.Body>
                </Card>
              </>
            )}

            {showAddResume && (
              <div
                className="modal show"
                style={{ display: "block", position: "initial" }}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Add Cv/Resume</h5>
                      <Button
                        variant="close"
                        onClick={() => setShowAddResume(false)}
                      />
                    </div>
                    <div className="modal-body">
                      <Form>
                        <Form.Group className="mb-3">
                          <Form.Label>Cv/Resume Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Upload your Cv/Resume</Form.Label>
                          <div className="border p-3 text-center">
                            <FontAwesomeIcon icon={faUpload} size="3x" />
                            <p>Browse File or drop here</p>
                            <small>
                              Only PDF format available . Max file size 12 MB.
                            </small>
                          </div>
                        </Form.Group>
                      </Form>
                    </div>
                    <div className="modal-footer">
                      <Button
                        variant="secondary"
                        onClick={() => setShowAddResume(false)}
                      >
                        Cancel
                      </Button>
                      <Button variant="primary">Add Cv/Resume</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
