import React from "react";
import AccountSetup from "../../../layouts/AccountSetupLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account/setup/finish");
  };
  return (
    <AccountSetup progress={75}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="mt-3">
            <Link
              className="btn btn-secondary me-3"
              to={"/account/setup/profile"}
            >
              Previous
            </Link>
            <Button type="submit">
              Finish Editing <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Col>
        </Row>
      </Form>
    </AccountSetup>
  );
}
