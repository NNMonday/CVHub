import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Col, Container, Row, Form, Modal, Nav } from "react-bootstrap";
import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faUser, faBriefcase, faBookmark, faFileInvoiceDollar, faBuilding, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function PostAJob() {
  const [showModal, setShowModal] = useState(false);

  const [jobTitle, setJobTitle] = useState("");
  const [tags, setTags] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [vacancies, setVacancies] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [applyJobOn, setApplyJobOn] = useState("");

  const jobRoles = [
    { value: "developer", label: "Developer" },
    { value: "designer", label: "Designer" },
    { value: "manager", label: "Manager" },
  ];

  const salaryTypes = [
    { value: "monthly", label: "Monthly" },
    { value: "annually", label: "Annually" },
    { value: "hourly", label: "Hourly" },
    { value: "daily", label: "Daily" },
  ];
  const educations = [
    { value: "high-school", label: "High School" },
    { value: "bachelor", label: "Bachelor's Degree" },
    { value: "master", label: "Master's Degree" },
    { value: "phd", label: "PhD" },
  ];
  const experiences = [
    { value: "0-1", label: "0-1 year" },
    { value: "1-2", label: "1-2 years" },
    { value: "2-3", label: "2-3 years" },
    { value: "3-5", label: "3-5 years" },
    { value: "5+", label: "5+ years" },
  ];

  const jobLevels = [
    { value: "entry-level", label: "Entry Level" },
    { value: "mid-level", label: "Mid Level" },
    { value: "senior-level", label: "Senior Level" },
  ];
  const vacanciess = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5+", label: "5+" },
  ];
  const jobTypes = [
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    { value: "contract", label: "Contract" },
    { value: "internship", label: "Internship" },
  ];


  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = {
      jobTitle,
      tags,
      jobRole,
      minSalary,
      maxSalary,
      salaryType,
      education,
      experience,
      jobType,
      vacancies,
      expirationDate,
      jobLevel,
      applyJobOn,
      description,
      responsibilities
    };
    try {
      const response = await axios.post('http://localhost:9999/api/jobs/insertjob', dataToSend);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <MainLayout>
      <Container fluid>
        <Row>
          <Col md={3} className="bg-light sidebar">
            <div className="d-flex flex-column vh-100 p-3 bg-light" style={{ width: '250px' }}>
              <h4 className="mb-4">COMPANIES DASHBOARD</h4>
              <Nav defaultActiveKey="/overview" className="flex-column">
                <Nav.Link href="/overview" className="d-flex align-items-center mb-2 text-dark">
                  <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
                  Overview
                </Nav.Link>
                <Nav.Link href="/profile" className="d-flex align-items-center mb-2 text-dark">
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  Companies Profile
                </Nav.Link>
                <Nav.Link href="/post-job" className="d-flex align-items-center mb-2 text-dark">
                  <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                  Post a Job
                </Nav.Link>
                <Nav.Link href="/my-jobs" className="d-flex align-items-center mb-2 text-dark">
                  <FontAwesomeIcon icon={faBookmark} className="me-2" />
                  My Jobs
                </Nav.Link>
                <Nav.Link href="/saved-candidates" className="d-flex align-items-center mb-2 text-dark">
                  <FontAwesomeIcon icon={faBookmark} className="me-2" />
                  Saved Candidate
                </Nav.Link>
                <Nav.Link href="/plans-billing" className="d-flex align-items-center mb-2 text-dark">
                  <FontAwesomeIcon icon={faFileInvoiceDollar} className="me-2" />
                  Plans & Billing
                </Nav.Link>
                <Nav.Link href="/all-companies" className="d-flex align-items-center mb-2 text-dark">
                  <FontAwesomeIcon icon={faBuilding} className="me-2" />
                  All Companies
                </Nav.Link>
                <Nav.Link href="/settings" className="d-flex align-items-center mb-2 text-dark">
                  <FontAwesomeIcon icon={faCog} className="me-2" />
                  Settings
                </Nav.Link>
                <Nav.Link href="/logout" className="d-flex align-items-center mt-auto text-dark">
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                  Log-out
                </Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col md={9}>
            <h2 className="mb-4">Post a job</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" placeholder="Add job title, role, vacancies etc"
                  value={jobTitle}
                  onChange={(e) => {
                    setJobTitle(e.target.value)
                  }}

                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control type="text" placeholder="Job keyword, tags etc..."
                      value={tags}
                      onChange={(e) => {
                        setTags(e.target.value)
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Job Role</Form.Label>
                    <Form.Select value={jobRole} onChange={(e) => {
                      setJobRole(e.target.value)
                    }}>
                      <option>Select...</option>
                      {jobRoles.map((role) => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Row>
                  <Col md={4}>
                    <Form.Label>Min Salary</Form.Label>
                    <div className="input-group">
                      <Form.Control type="text" placeholder="Minimum salary..." value={minSalary} onChange={(e) => {
                        setMinSalary(e.target.value)
                      }} />
                      <span className="input-group-text">USD</span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <Form.Label>Max Salary</Form.Label>
                    <div className="input-group">
                      <Form.Control type="text" placeholder="Maximum salary..." value={maxSalary} onChange={(e) => {
                        setMaxSalary(e.target.value)
                      }} />
                      <span className="input-group-text">USD</span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <Form.Label>Salary Type</Form.Label>
                    <Form.Select value={salaryType} onChange={(e) => {
                      setSalaryType(e.target.value)
                    }}>
                      <option>Select...</option>
                      {salaryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>

              <h4>Advance Information</h4>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Education</Form.Label>
                    <Form.Select value={education} onChange={(e) => {
                      setEducation(e.target.value)
                    }}>
                      <option>Select...</option>
                      {educations.map((education) => (
                        <option key={education.value} value={education.value}>
                          {education.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Experience</Form.Label>
                    <Form.Select value={experience} onChange={(e) => {
                      setExperience(e.target.value)
                    }}>
                      <option>Select...</option>
                      {experiences.map((experience) => (
                        <option key={experience.value} value={experience.value}>
                          {experience.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Job Type</Form.Label>
                    <Form.Select value={jobType} onChange={(e) => {
                      setJobType(e.target.value)
                    }}>
                      <option>Select...</option>
                      {jobTypes.map((jobType) => (
                        <option key={jobType.value} value={jobType.value}>
                          {jobType.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Vacancies</Form.Label>
                    <Form.Select value={vacancies} onChange={(e) => {
                      setVacancies(e.target.value)
                    }}>
                      <option>Select...</option>
                      {vacanciess.map((vacancy) => (
                        <option key={vacancy.value} value={vacancy.value}>
                          {vacancy.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control type="text" placeholder="DD/MM/YYYY" value={expirationDate} onChange={(e) => {
                      setExpirationDate(e.target.value)
                    }} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Job Level</Form.Label>
                    <Form.Select value={jobLevel} onChange={(e) => {
                      setJobLevel(e.target.value)
                    }}>
                      <option>Select...</option>
                      {jobLevels.map((jobLevel) => (
                        <option key={jobLevel.value} value={jobLevel.value}>
                          {jobLevel.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Apply Job on:</Form.Label>
                <div className="d-flex justify-content-between">
                  <Form.Check
                    type="radio"
                    label={
                      <>
                        <strong>On Jobpilot</strong>
                        <p className="text-muted">Candidate will apply job using jobpilot & all application will show on your dashboard.</p>
                      </>
                    }
                    name="applyJobOn"
                    id="onJobpilot"
                    value="onJobpilot"
                    onChange={(e) => setApplyJobOn(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label={
                      <>
                        <strong>External Platform</strong>
                        <p className="text-muted">Candidate apply job on your website, all application on your own website.</p>
                      </>
                    }
                    name="applyJobOn"
                    id="externalPlatform"
                    value="externalPlatform"
                    onChange={(e) => setApplyJobOn(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label={
                      <>
                        <strong>On Your Email</strong>
                        <p className="text-muted">Candidate apply job on your email address, and all application in your email.</p>
                      </>
                    }
                    name="applyJobOn"
                    id="onYourEmail"
                    value="onYourEmail"
                    onChange={(e) => setApplyJobOn(e.target.value)}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Add your job description..." value={description} onChange={(e) => {
                  setDescription(e.target.value)
                }} />
                <div className="text-editor-buttons mt-2">
                  <Button variant="light" size="sm">B</Button>
                  <Button variant="light" size="sm">I</Button>
                  <Button variant="light" size="sm">U</Button>
                  <Button variant="light" size="sm">S</Button>
                  <Button variant="light" size="sm"><i className="bi bi-link"></i></Button>
                  <Button variant="light" size="sm"><i className="bi bi-list"></i></Button>
                  <Button variant="light" size="sm"><i className="bi bi-list-ol"></i></Button>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Responsibilities</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Add your job responsibilities..." value={responsibilities} onChange={(e) => {
                  setResponsibilities(e.target.value)
                }} />
                <div className="text-editor-buttons mt-2">
                  <Button variant="light" size="sm">B</Button>
                  <Button variant="light" size="sm">I</Button>
                  <Button variant="light" size="sm">U</Button>
                  <Button variant="light" size="sm">S</Button>
                  <Button variant="light" size="sm"><i className="bi bi-link"></i></Button>
                  <Button variant="light" size="sm"><i className="bi bi-list"></i></Button>
                  <Button variant="light" size="sm"><i className="bi bi-list-ol"></i></Button>
                </div>
              </Form.Group>

              <Button variant="primary" type="submit">
                Post Job <i className="bi bi-arrow-right"></i>
              </Button>
            </Form>
          </Col>
        </Row>
        <Modal show={showModal} onHide={() => setShowModal(false)} size="xl" centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <span role="img" aria-label="party popper">🎉</span> Congratulation, Your Job is successfully posted!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>You can manage your form my-jobs section in your dashboard</p>
            <Button variant="primary" onClick={() => setShowModal(false)}>
              View Jobs <i className="bi bi-arrow-right"></i>
            </Button>
          </Modal.Body>
          <h4 style={{ "textAlign": "center" }}>Promote Job: UI/UX Designer</h4>
          <Modal.Footer>

            <p>Fusce commodo, sem non tempor convallis, sapien turpis bibendum turpis, non pharetra nisl velit pulvinar lectus. Suspendisse varius at nisl aliquam.</p>
            <Row>
              <Col md={6}>
                <div className="bg-light p-3 mb-3">
                  <h5>ALWAYS ON THE TOP</h5>
                  <img src="/1.png" alt="Always on top" className="img-fluid mb-3" />
                  <Form.Check
                    type="radio"
                    id="featured-job"
                    label={
                      <>
                        <strong>Featured Your Job</strong>
                        <p>Sed neque diam, lacinia nec dolor et, euismod bibendum turpis. Sed feugiat fauc.</p>
                      </>
                    }
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="bg-light p-3 mb-3">
                  <h5>HIGHLIGHT JOB WITH COLOR</h5>
                  <img src="/2.png" alt="Highlight job" className="img-fluid mb-3" />
                  <Form.Check
                    type="radio"
                    id="highlight-job"
                    label={
                      <>
                        <strong>Highlight Your Job</strong>
                        <p>Sed neque diam, lacinia nec dolor et, euismod bibendum turpis. Sed feugiat fauc.</p>
                      </>
                    }
                  />
                </div>
              </Col>
            </Row>
            <div className="d-flex justify-content-between">
              <Button variant="light" onClick={() => setShowModal(false)}>
                Skip Now
              </Button>
              <Button variant="primary">
                PROMOTE JOB <i className="bi bi-arrow-right"></i>
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </Container>
    </MainLayout>
  );
}