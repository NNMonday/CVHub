import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Auth from "../assets/Auth.png";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GoogleButton from "react-google-button";

export default function Login() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col sm={6}>
          <div className="px-5 mx-5 pt-5 position-relative h-100 w-100">
            <img src={Logo} className="position-absolute" alt="logo" />

            <div className="h-100 w-100 d-flex align-items-center">
              <Form className="w-100">
                <Form.Group className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <span className="h2">Create account</span>
                    <span>
                      Already have account?
                      <Link className="text-decoration-none" to={"/login"}>
                        Log In
                      </Link>
                    </span>
                  </div>
                  <div>
                    <Form.Select>
                      <option value="">Job Seeker</option>
                      <option value="">Company</option>
                    </Form.Select>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control placeholder="Full Name" type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control placeholder="Email address" type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control placeholder="Password" type="password" />
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    placeholder="Confirm Password"
                    type="password"
                  />
                </Form.Group>
                <Button className="w-100 mt-3" size="lg">
                  Create Account <FontAwesomeIcon icon={faArrowRight} />
                </Button>
                <div className="my-3 w-100 align-items-center text-center">
                  <span className="text-secondary">or</span>
                </div>
                <div>
                  <GoogleButton type="light" className="google-btn" />
                </div>
              </Form>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <img
            src={Auth}
            alt="auth"
            className="w-100"
            style={{ maxHeight: "100vh" }}
          />
        </Col>
      </Row>
    </Container>
  );
}
