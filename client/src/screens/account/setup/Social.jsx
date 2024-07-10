import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import AccountSetup from "../../../layouts/AccountSetupLayout";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export default function Social() {
  const { _id } = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [addedSkills, setAddedSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    // Fetch skills from the backend
    const fetchSkills = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}fields/getAllFields`
        );
        setSkills(response.data.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  const addSkill = () => {
    if (!selectedSkill) {
      toast.error("Please select a skill.");
      return;
    }

    const skillObj = skills.find((skill) => skill._id === selectedSkill);
    if (addedSkills.find((skill) => skill._id === selectedSkill)) {
      toast.error("Skill already added.");
    } else {
      setAddedSkills([...addedSkills, skillObj]);
      setSelectedSkill("");
    }
  };

  const removeSkill = (skillId) => {
    setAddedSkills(addedSkills.filter((skill) => skill._id !== skillId));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        skills_id: addedSkills.map((skill) => skill._id),
        experience,
        isSeeking,
      };
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}jobSeeker/${_id}`,
        data
      );
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <AccountSetup progress={50}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="mt-3" sm={12}>
            <Form.Group>
              <Form.Label>Skills</Form.Label>
              <Form.Select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
              >
                <option disabled hidden value="">
                  Select...
                </option>
                {skills.map((skill) => (
                  <option key={skill._id} value={skill._id}>
                    {skill.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button className="mt-2" onClick={addSkill}>
              Add Skill <FontAwesomeIcon icon={faPlusCircle} />
            </Button>
          </Col>
          <Col className="mt-3" sm={12}>
            {addedSkills.map((skill) => (
              <span
                key={skill._id}
                className="badge bg-primary me-2"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                {skill.name}
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="ms-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => removeSkill(skill._id)}
                />
              </span>
            ))}
          </Col>
          <Col className="mt-3" sm={12}>
            <Form.Group>
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Your experience..."
                required
              />
            </Form.Group>
          </Col>
          <Col className="mt-3" sm={12}>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Actively seeking job"
                checked={isSeeking}
                onChange={(e) => setIsSeeking(e.target.checked)}
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
              Next <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Col>
        </Row>
      </Form>
    </AccountSetup>
  );
}
