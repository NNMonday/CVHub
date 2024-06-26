import React from "react";
import MainLayout from "./MainLayout";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
            <Link
              className="dashboard-navlink-default d-block px-3 py-2"
              to={"/account/dashboard/overview"}
            >
              <FontAwesomeIcon icon={faLayerGroup} className="me-2" /> Overview
            </Link>
            <NavLink
              className="dashboard-navlink-default d-block px-3 py-2"
              to={"/account/applied"}
            >
              <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Applied
              Jobs
            </NavLink>
            <NavLink
              className="dashboard-navlink-default d-block px-3 py-2"
              to={"/account/favorite"}
            >
              <FontAwesomeIcon icon={faBookmark} className="me-2" /> Favorite
              Jobs
            </NavLink>
            <Link
              className="dashboard-navlink-default d-block px-3 py-2"
              to={" /account/setting/personal"}
            >
              <FontAwesomeIcon icon={faGear} className="me-2" /> Settings
            
            </Link>
          </Col>
          <Col sm={9} className="pt-5 ps-4 setting">
            {children}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}