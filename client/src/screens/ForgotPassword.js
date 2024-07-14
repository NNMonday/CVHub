import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import PerformRequest from "../utilities/PerformRequest";
import Logo from "../assets/Logo.png";
import Auth from "../assets/Auth.png";

const ForgotPassword = () => {
  const { OriginalRequest } = PerformRequest();
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { email };

    try {
      const data = await OriginalRequest(
        "auth/forgot-password",
        "POST",
        requestBody
      );
      setShowMessage(true); // Show success message
    } catch (error) {
      console.error("Error sending reset request:", error.message);
      // Handle error (e.g., show error message to the user)
    }
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        navigate("/login"); // Navigate to login page after 3 seconds
      }, 3000); // Adjust the delay time as needed
      return () => clearTimeout(timer);
    }
  }, [showMessage, navigate]);

  return (
    <Container fluid className="p-0">
      <Row>
        <Col sm={6}>
          <div className="px-5 mx-5 pt-5 position-relative h-100 w-100">
            <img src={Logo} className="position-absolute" alt="logo" />
            <div className="h-100 w-100 d-flex align-items-center">
              <Form className="w-100" onSubmit={handleSubmit}>
                <Form.Group>
                  <div className="d-flex flex-column">
                    <span className="h2">Forgot password</span>
                    <span>
                      Enter your email address and we'll send you a link to
                      reset your password.
                    </span>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Send Request <FontAwesomeIcon icon={faArrowRight} />
                </Button>
                <Link to="/login">
                  <Button variant="link" className="w-100 mt-3">
                    Back To Login <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </Link>
                {showMessage && (
                  <div className="alert alert-success mt-3" role="alert">
                    Password reset email sent successfully. Please check your
                    email.
                  </div>
                )}
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
};

export default ForgotPassword;
