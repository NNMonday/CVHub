import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import MinimalFooter from "../components/MinimalFooter";
import { useSelector } from "react-redux";

export default function AccountSetup({ progress = 0, children }) {
  const { role_name } = useSelector((state) => state.auth.userInfo.data);
  return (
    <>
      <Container className="pt-3 setup">
        <Row>
          <Col>
            <div className="d-flex justify-content-between px-5">
              <Link to={"/"}>
                <img src={Logo} alt="Logo" />
              </Link>
              {/* <div style={{ minWidth: "300px" }}>
                <div className="text-secondary d-flex justify-content-between">
                  <p>Setup Progress</p>
                  <p>{progress}% Completed</p>
                </div>
                <ProgressBar now={progress} />
              </div> */}
            </div>
          </Col>
        </Row>
        <div className="mx-auto" style={{ maxWidth: "850px" }}>
          <div
            hidden={progress === 100}
            className="mt-3 justify-content-center"
            style={{ borderBottom: "1px solid #767f8c", display: "flex" }}
          >
            <NavLink
              to={"/account/setup/personal"}
              className="setting-navlink-default px-3 py-2 d-inline-block"
            >
              <span>
                <FontAwesomeIcon icon={faUser} className="me-2" />
                General
              </span>
            </NavLink>
            <NavLink
              to={"/account/setup/profile"}
              className="setting-navlink-default px-3 py-2 d-inline-block"
            >
              <span>
                <FontAwesomeIcon icon={faCircleUser} className="me-2" />
                {role_name === "Company" ? "Company Info" : "Personal"}
              </span>
            </NavLink>
            {role_name === "Job Seeker" && (
              <NavLink
                to={"/account/setup/social"}
                className="setting-navlink-default px-3 py-2 d-inline-block"
              >
                <span>
                  <FontAwesomeIcon icon={faGlobe} className="me-2" />
                  {role_name} Info
                </span>
              </NavLink>
            )}
          </div>
          <div className="mt-4">{children}</div>
        </div>
      </Container>
      <MinimalFooter />
    </>
  );
}
