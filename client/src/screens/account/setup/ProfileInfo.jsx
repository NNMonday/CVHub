import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import AccountSetup from "../../../layouts/AccountSetupLayout";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProfileInfo() {
  const { _id, role_name } = useSelector((state) => state.auth.userInfo);
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [about, setAbout] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [yearOfEstablishment, setYearOfEstablishment] = useState("");
  const [website, setWebsite] = useState("");
  const [companyVision, setCompanyVision] = useState("");
  const [industryTypes, setIndustryTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIndustryTypes = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}fields/getAllFields`
        );
        setIndustryTypes(response.data.data);
      } catch (error) {
        console.error("Error fetching industry types:", error);
        toast.error("Failed to load industry types");
      }
    };
    fetchIndustryTypes();
  }, []);

  const validateForm = () => {
    if (role_name === "Company") {
      if (
        !companyName ||
        !industryType ||
        !teamSize ||
        !yearOfEstablishment ||
        !website
      ) {
        toast.error("Please fill out all required fields.");
        return false;
      }
    } else {
      if (!fullname || !gender || !dob || !about) {
        toast.error("Please fill out all required fields.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const endpoint =
      role_name === "Company"
        ? `${process.env.REACT_APP_BACKEND_URL}company/${_id}`
        : `${process.env.REACT_APP_BACKEND_URL}jobSekker/${_id}`;

    const payload =
      role_name === "Company"
        ? {
            company_name: companyName,
            industry_type: industryType,
            employee_quantity: teamSize,
            year_of_establishment: yearOfEstablishment,
            website,
            company_vision: companyVision,
            user_Id: _id,
          }
        : {
            fullname,
            gender,
            dob,
            about,
            user_Id: _id,
          };

    try {
      await axios.post(endpoint, payload);
      toast.success("Profile information updated successfully!");
      navigate(role_name === "Job Seeker" ? "/account/setup/profile" : "/");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to update profile information.");
    }
  };

  return (
    <AccountSetup progress={25}>
      <Form onSubmit={handleSubmit}>
        {role_name === "Company" ? (
          <>
            <Row>
              <Col className="mt-3" sm={12}>
                <Form.Group>
                  <Form.Label>
                    Organization Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={companyName}
                    required
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col className="mt-3" sm={6}>
                <Form.Group>
                  <Form.Label>Industry Type</Form.Label>
                  <Form.Select
                    value={industryType}
                    onChange={(e) => setIndustryType(e.target.value)}
                  >
                    <option disabled hidden value="">
                      Select...
                    </option>
                    {industryTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col className="mt-3" sm={6}>
                <Form.Group>
                  <Form.Label>Team Size</Form.Label>
                  <Form.Select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                  >
                    <option disabled hidden value="">
                      Select...
                    </option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col className="mt-3" sm={6}>
                <Form.Group>
                  <Form.Label>Year of Establishment</Form.Label>
                  <Form.Control
                    type="date"
                    value={yearOfEstablishment}
                    onChange={(e) => setYearOfEstablishment(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col className="mt-3" sm={6}>
                <Form.Group>
                  <Form.Label>Company Website</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Website url..."
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">
                <Form.Group>
                  <Form.Label>Company Vision</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us about your company vision..."
                    value={companyVision}
                    onChange={(e) => setCompanyVision(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">
                <Link
                  className="btn btn-secondary me-3"
                  to="/account/setup/personal"
                >
                  Previous
                </Link>
                <Button type="submit">
                  Next <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col className="mt-3" sm={12}>
                <Form.Group>
                  <Form.Label>
                    Fullname <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col className="mt-3" sm={6}>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option disabled hidden value="">
                      Select...
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col className="mt-3" sm={6}>
                <Form.Group>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">
                <Form.Group>
                  <Form.Label>About me</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us about yourself..."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">
                <Link
                  className="btn btn-secondary me-3"
                  to="/account/setup/personal"
                >
                  Previous
                </Link>
                <Button type="submit">
                  Next <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Form>
    </AccountSetup>
  );
}
