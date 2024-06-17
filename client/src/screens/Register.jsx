import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Auth from "../assets/Auth.png";
import Logo from "../assets/Logo.png";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import PerformRequest from "../utilities/PerformRequest.js";
import GoogleButton from 'react-google-button';
import { login } from "../redux/auth.js";

export default function Register() {
  const [signUpData, setSignUpData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { OriginalRequest } = PerformRequest();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState(
    "https://res.cloudinary.com/djzdhtdpj/image/upload/v1704269768/tempAvatar_juqb4s.jpg"
  );

  const handleDataChange = (e) => {
    setSignUpData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateSignupData = { ...signUpData };
    updateSignupData.profilePicture = imageSrc;
    try {
      setLoading(true);
      const data = await OriginalRequest(
        `auth/signup`,
        "POST",
        updateSignupData
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const postGoogleAuth = async (token) => {
    try {
      //a reusable fetch function, the body is optional,
      //other parameters are uri, navigate hook, and the method of the reques
      const data = await OriginalRequest("auth/googlelogin", "POST", {
        token: token,
      });
      if (data) {
        dispatch(login(data.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container fluid className="p-0">
      <Row>
        <Col sm={6}>
          <div className="px-5 mx-5 pt-5 position-relative h-100 w-100">
            <img src={Logo} className="position-absolute" alt="logo" />
            <div className="h-100 w-100 d-flex align-items-center">
              <Form
                className="w-100"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <Form.Group className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <span className="h2">Create account</span>
                    <span>
                      Already have account?
                      <Link className="text-decoration-none ms-1" to={"/login"}>
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
                  <Form.Control
                    placeholder="Full Name"
                    type="text"
                    name="fullname"
                    onChange={(e) => {
                    handleDataChange(e);
                  }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    placeholder="Email address"
                    type="text"
                    name="email"
                    onChange={(e) => {
                    handleDataChange(e);
                  }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={(e) => {
                    handleDataChange(e);
                  }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    onChange={(e) => {
                    handleDataChange(e);
                  }}
                  />
                </Form.Group>
                <Button
                  className={`${loading ? "" : "bg-light10"} w-100 mt-3`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Please wait ..." : "Create Account"}
                </Button>
                <div className="my-2 w-100 align-items-center text-center">
                  <span className="text-secondary">or</span>
                </div>
                <div>
                  <GoogleButton
                  onSuccess={(credentialResponse) => {
                    // console.log(credentialResponse?.credential);
                    postGoogleAuth(credentialResponse?.credential);
                  }}
                  onError={() => {
                    toast.error("Something went wrong");
                  }}
                  text="Login with google"
                  size={"large"}
                  width={"395px"} />
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
