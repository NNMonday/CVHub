import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Auth from "../assets/Auth.png";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PerformRequest from "../utilities/PerformRequest.js";
import { login } from "../redux/auth.js";

import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { OriginalRequest } = PerformRequest();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      const data = await OriginalRequest("auth/login", "POST", loginData);
      if (data) {
        dispatch(login(data));

        navigate("/"); // navigate first login after sign up new account
      }
    } catch (error) {
      console.log("Error during login:", error.message);
    }
  };

  return (
    <Container fluid className="p-0">
      <Row>
        <Col sm={6}>
          <div className="px-5 mx-5 pt-5 position-relative h-100 w-100">
            <Link to={"/"}>
              <img src={Logo} className="position-absolute" alt="logo" />
            </Link>
            <div className="h-100 w-100 d-flex align-items-center">
              <Form className="w-100" onSubmit={handleSubmit}>
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
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Sign In <FontAwesomeIcon icon={faArrowRight} />
                </Button>

                <div className="my-2 w-100 align-items-center text-center">
                  <span className="text-secondary">or</span>
                </div>
                <Link to="/forgot-password">
                  <Button variant="link" className="w-100 mt-3">
                    Forgot Password <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Link>
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
