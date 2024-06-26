import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Auth from "../assets/Auth.png";
import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PerformRequest from "../utilities/PerformRequest.js";
import { login } from "../redux/auth.js";
import { GoogleLogin } from "@react-oauth/google";
import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast"
export default function Register() {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role_id: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [roles, setRoles] = useState([]);
  const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState(
    "https://res.cloudinary.com/djzdhtdpj/image/upload/v1704269768/tempAvatar_juqb4s.jpg"
  );
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const data = await OriginalRequest("roles/getAllRoles", "GET");
        if (data) {
          console.log("Roles fetched:", data);
          setRoles(data);
        }
      } catch (error) {
        console.error("Failed to fetch roles:", error);
      }
    };
    fetchRoles();
  }, [OriginalRequest]);

  const handleDataChange = (e) => {
    console.log(e.target.value);
    setSignUpData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.confirmPassword ||
      !signUpData.role_id
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (signUpData.password !== signUpData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const updateSignupData = { ...signUpData, avatar: imageSrc };

    try {
      setLoading(true);
      const checkEmailExistence = await OriginalRequest('auth/check-email', 'POST', {
        email: signUpData.email
      });
      if (checkEmailExistence.exists) {
        toast.error("Email is already taken. Please choose another.");
        setLoading(false);
      } else {
        const response = await OriginalRequest(
          `auth/signup`,
          "POST",
          updateSignupData
        );

        if (response.error) {
          toast.error(response.error);
        } else {
          console.log("Signup response:", response);
          setShowMessage(true);
          toast.success("Sign up successfully! Please check your email to confirm.");
        }
      }




    } catch (error) {
      console.log("Error:", error);
      toast.error("An error occurred during registration.");
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
                    <Form.Select
                      name="role_id"
                      onChange={(e) => {
                        handleDataChange(e);
                      }}
                    >
                      <option value="">Select Role</option>
                      {roles.map((role) => (
                        <option key={role._id} value={role._id}>
                          {role.role_name}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </Form.Group>
                {/* <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    placeholder="Full Name"
                    type="text"
                    name="fullname"
                    required
                    value={signUpData.fullname}
                    onChange={(e) => {
                      handleDataChange(e);
                    }}
                  />
                </Form.Group> */}
                <Form.Group>
                  <Form.Label></Form.Label>
                  <Form.Control
                    placeholder="Email address"
                    type="text"
                    name="email"
                    required
                    value={signUpData.email}
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
                    value={signUpData.password}
                    minLength={6} // Example: Minimum length requirement
                    required
                    maxLength={20}
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
                    value={signUpData.confirmPassword}
                    minLength={6} // Example: Minimum length requirement
                    required
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
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      // console.log(credentialResponse?.credential);
                      postGoogleAuth(credentialResponse?.credential);
                    }}
                    onError={() => {
                      toast.error("Something went wrong");
                    }}
                    text="Login with google"
                    size={"large"}
                    width={"395px"}
                  />
                </div>
                <div>
                  {showMessage && (
                    <div className="alert alert-success mt-3" role="alert">
                      Verification email sent successfully. Please check your
                      email to verify.
                    </div>
                  )}
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
