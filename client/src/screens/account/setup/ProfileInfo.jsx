import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import AccountSetup from "../../../layouts/AccountSetupLayout";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ProfileInfo() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account/setup/profile");
  };
  return (
    <AccountSetup progress={25}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="mt-3" sm={4}>
            <Form.Group>
              <Form.Label>Organization Type</Form.Label>
              <Form.Select defaultValue={""}>
                <option disabled hidden value="">
                  Select...
                </option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="mt-3" sm={4}>
            <Form.Group>
              <Form.Label>Industry Type</Form.Label>
              <Form.Select defaultValue={""}>
                <option disabled hidden value="">
                  Select...
                </option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="mt-3" sm={4}>
            <Form.Group>
              <Form.Label>Team Size</Form.Label>
              <Form.Select defaultValue={""}>
                <option disabled hidden value="">
                  Select...
                </option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col className="mt-3" sm={4}>
            <Form.Group>
              <Form.Label>Year of Establishment</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col className="mt-3" sm={4}>
            <Form.Group>
              <Form.Label>Company Webiste</Form.Label>
              <Form.Control type="text" placeholder="Website url..." />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <Form.Group>
              <Form.Label>Company Vision</Form.Label>
              <Form.Control
                as={"textarea"}
                rows={4}
                placeholder="Tell us about your company vision..."
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <Link
              className="btn btn-secondary me-3"
              to={"/account/setup/personal"}
            >
              Previous
            </Link>
            <Button type="submit">
              Save & Next <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Col>
        </Row>
      </Form>
    </AccountSetup>
  );
}
