import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  faEllipsis,
  faFileLines,
  faGear,
  faGlobe,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import Dropzone from "../../../assets/Dropzone.png";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Setting({ type }) {
  return (
    <DashboardLayout>
      <h3>Setting</h3>
      <div className="mt-3" style={{ borderBottom: "1px solid #767f8c" }}>
        <NavLink
          to={"/account/setting/personal"}
          className="setting-navlink-default px-3 py-2 d-inline-block"
        >
          <span>
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Personal
          </span>
        </NavLink>
        <NavLink
          to={"/account/setting/profile"}
          className="setting-navlink-default px-3 py-2 d-inline-block"
        >
          <span>
            <FontAwesomeIcon icon={faCircleUser} className="me-2" />
            Profile
          </span>
        </NavLink>
        <NavLink
          to={"/account/setting/profile"}
          className="setting-navlink-default px-3 py-2 d-inline-block"
        >
          <span>
            <FontAwesomeIcon icon={faGlobe} className="me-2" />
            Social Links
          </span>
        </NavLink>
        <NavLink
          to={"/account/setting/profile"}
          className="setting-navlink-default px-3 py-2 d-inline-block"
        >
          <span>
            <FontAwesomeIcon icon={faGear} className="me-2" />
            Account Setting
          </span>
        </NavLink>
      </div>
      <div className="mt-4">
        <Form>
          <h4>Basic Information</h4>
          <Row>
            <Col sm={4}>
              <p>Profile Picture</p>
              <img src={Dropzone} alt="dropzone" />
            </Col>
            <Col sm={8}>
              <Row className="mb-3">
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>Full name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>Title/headline</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={6}>
                  <Form.Label>Experience</Form.Label>
                  <Form.Select>
                    <option value="">Select...</option>
                  </Form.Select>
                </Col>

                <Col sm={6}>
                  <Form.Label>Education</Form.Label>
                  <Form.Select>
                    <option value="">Select...</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Label>Personal Website</Form.Label>
                    <Form.Control placeholder="Website url..." />
                  </Form.Group>
                  <Button className="mt-3">Save Changes</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <h4>Your Cv/Resume</h4>
        <Container fluid className="mt-4">
          <Row className="g-2">
            <Col sm={4}>
              <div
                className="d-flex px-3 py-2 border align-items-center h-100"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#F1F2F4",
                }}
              >
                <div className="h-50">
                  <FontAwesomeIcon
                    icon={faFileLines}
                    className="h-100 text-primary"
                  />
                </div>
                <div className="ms-3 flex-grow-1">
                  <div>
                    <span className="fw-bold">Professional Resume</span>
                  </div>
                  <div>
                    <span>3.5 MB</span>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </div>
            </Col>

            <Col sm={4}>
              <div
                className="d-flex px-3 py-2 align-items-center h-100 add-cv"
                style={{
                  borderRadius: "10px",
                }}
              >
                <div className="h-50">
                  <FontAwesomeIcon icon={faPlus} className="text-primary" />
                </div>
                <div className="ms-3 flex-grow-1">
                  <div>
                    <span className="fw-bold">Add Cv/Resume</span>
                  </div>
                  <div>
                    <span>Browse file or drop here, only pdf</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </DashboardLayout>
  );
}
