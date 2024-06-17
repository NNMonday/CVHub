import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Auth from "../assets/Auth.png";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col sm={6}>
          <div className="px-5 mx-5 pt-5 position-relative h-100 w-100">
            <img src={Logo} className="position-absolute" alt="logo" />

            <div className="h-100 w-100 d-flex align-items-center">
              <Form className="w-100">
                <Form.Group>
                  <div className="d-flex flex-column">
                    <span className="h2">Sign in</span>
                    <span>
                      Don't have account?
                      <Link
                        className="text-decoration-none ms-1"
                        to={"/register"}
                      >
                        Create Account
                      </Link>
                    </span>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control placeholder="Email address" type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control placeholder="Password" type="password" />
                </Form.Group>
                <div className="mt-2" style={{ textAlign: "right" }}>
                  <Link to={"/forgot"} className="text-decoration-none">
                    Forgot password
                  </Link>
                </div>
                <Button className="w-100 mt-3" size="lg">
                  Sign In <FontAwesomeIcon icon={faArrowRight} />
                </Button>
                <div className="my-2 w-100 align-items-center text-center">
                  <span className="text-secondary">or</span>
                </div>
                <div></div>
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
