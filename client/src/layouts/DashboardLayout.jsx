import React from "react";
import MainLayout from "./MainLayout";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faBookmark,
  faBriefcase,
  faGear,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function DashboardLayout({ children }) {
  return (
    <MainLayout>
      <Container
        className="border"
        fluid
        style={{ padding: "0 200px", minHeight: "100vh" }}
      >
        <Row>
          <Col
            sm={3}
            style={{ borderRight: "1px solid #E4E5E8" }}
            className="pt-3 pe-0 dashboard"
          >
            <p style={{ fontSize: "smaller" }}>CANDIDATE DASHBOARD</p>
            <NavLink
              className="dashboard-navlink-default d-block px-3 py-2"
              to={"/account/dashboard/overview"}
            >
              <FontAwesomeIcon icon={faLayerGroup} className="me-2" /> Overview
            </NavLink>
            <NavLink
              className="dashboard-navlink-default d-block px-3 py-2"
              to={"/account/dashboard/applied"}
            >
              <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Applied
              Jobs
            </NavLink>
            <NavLink
              className="dashboard-navlink-default d-block px-3 py-2"
              to={"/account/dashboard/favorite"}
            >
              <FontAwesomeIcon icon={faBookmark} className="me-2" /> Favorite
              Jobs
            </NavLink>
            <NavLink
              className="dashboard-navlink-default d-block px-3 py-2"
              to={"/account/dashboard/setting/personal"}
            >
              <FontAwesomeIcon icon={faGear} className="me-2" /> Settings
            </NavLink>
          </Col>
          <Col sm={9} className="pt-5 ps-4 setting">
            {children}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
