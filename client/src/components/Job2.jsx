import React, { useState } from "react";
import { faBookmark, faBuilding, faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import logoPlaceholder from "../assets/logoPlaceholder.png";
import { Button, Card, Col, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faBold,
  faBriefcase,
  faEnvelope,
  faGraduationCap,
  faItalic,
  faLink,
  faListOl,
  faListUl,
  faMapMarker,
  faPhone,
  faStrikethrough,
  faUnderline,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Job2({name, work_status, link, phoneNumber, mail,description,jobPosted,jobExpire,education,salary,location,jobType,experience }) {

  const [showPopup, setShowPopup] = useState(false);
  return (
    
    <Container sm={12} className="p-4 mb-3 job-container">
    <Row className="d-flex align-items-center">
      <Col xs={1} className="overflow-hidden" style={{ borderRadius: "50%" }}>
        <img src={logoPlaceholder} alt="logoPlaceholder" className="w-100 h-100" style={{ borderRadius: "50%" }} />
      </Col>
      <Col className="d-flex flex-column justify-content-between ms-3">
        <div>
          <Link to="#" className="text-decoration-none fw-bolder fs-5 job-name">{name}</Link>
          <span className="text-primary fw-bold bg-primary-subtle py-1 px-2 ms-3" style={{ borderRadius: "15px" }}>{work_status}</span>
        </div>
        <div className="d-flex align-items-center" style={{ gap: '20px' }}>
          <span>
            <FontAwesomeIcon icon={faLink} style={{ color: 'blue' }} />
            <a href="https://instagram.com" style={{ marginLeft: '8px', color: 'black' }}>{link}</a>
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} style={{ color: 'blue' }} />
            <span style={{ marginLeft: '8px', color: 'black' }}>{phoneNumber}</span>
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'blue' }} />
            <a href="mailto:career@instagram.com" style={{ marginLeft: '8px', color: 'black' }}>{mail}</a>
          </span>
        </div>
      </Col>
      <Col xs="auto" className="d-flex flex-column align-items-start">
  <div className="d-flex mb-2">
    <div className="py-2 px-3 me-2 save-container" style={{ borderRadius: "6px" }}>
      <FontAwesomeIcon icon={faBookmark} />
    </div>
    <Button className="fw-bold" onClick={() => setShowPopup(true)}>
      Apply Now <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
    </Button>
  </div>
  <div className="mt-2">
    <span className="text-muted">Job expire in: <span className="text-danger">{jobExpire}</span></span>
  </div>
  <ApplyJobPopup show={showPopup} handleClose={() => setShowPopup(false)} />
</Col>
    </Row>

    <Row className="mt-4">
      <Col>
      <div dangerouslySetInnerHTML={{ __html: description }} />
        <div>
          <Button variant="primary" style={{ marginRight: '10px' }}>
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </Button>
          <Button variant="info" style={{ marginRight: '10px' }}>
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </Button>
          <Button variant="danger">
            <FontAwesomeIcon icon={faPinterest} /> Pinterest
          </Button>
        </div>
      </Col>

      <Col xs={5}>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Job Overview</Card.Title>
            <Row className="mb-3">
              <Col xs={4} className="mb-3">
                <FontAwesomeIcon icon={faCalendar} size="2x" className="me-2 text-primary" /><br />
                <small>JOB POSTED</small><br />
                <strong>{jobPosted}</strong>
              </Col>
              <Col xs={4} className="mb-3">
                <FontAwesomeIcon icon={faClock} size="2x" className="me-2 text-primary" /><br />
                <small>JOB EXPIRE IN:</small><br />
                <strong>{jobExpire}</strong>
              </Col>
              <Col xs={4} className="mb-3">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" className="me-2 text-primary" /><br />
                <small>EDUCATION</small><br />
                <strong>{education}</strong>
              </Col>
              <Col xs={4} className="mb-3">
                <FontAwesomeIcon icon={faWallet} size="2x" className="me-2 text-primary" /><br />
                <small>SALARY:</small><br />
                <strong>{salary}</strong>
              </Col>
              <Col xs={4} className="mb-3">
                <FontAwesomeIcon icon={faMapMarker} size="2x" className="me-2 text-primary" /><br />
                <small>LOCATION:</small><br />
                <strong>{location}</strong>
              </Col>
              <Col xs={4} className="mb-3">
                <FontAwesomeIcon icon={faBriefcase} size="2x" className="me-2 text-primary" /><br />
                <small>JOB TYPE:</small><br />
                <strong>{jobType}</strong>
              </Col>
              <Col xs={4}>
                <FontAwesomeIcon icon={faBuilding} size="2x" className="me-2 text-primary" /><br />
                <small>EXPERIENCE</small><br />
                <strong>{experience}</strong>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
    

  );
}

const ApplyJobPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Apply Job: Senior UX Designer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Choose Resume</Form.Label>
            <Form.Select>
              <option>Select...</option>
            </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Cover Letter</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={5} 
              placeholder="Write down your biography here. Let the Companies know who you are..."
            />
            <InputGroup className="mt-2">
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faBold} />
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faItalic} />
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faUnderline} />
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faStrikethrough} />
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faLink} />
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faListUl} />
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faListOl} />
              </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
  <Button variant="light" onClick={handleClose}>
    Cancel
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Apply Now <FontAwesomeIcon icon="arrow-right" />
  </Button>
</Modal.Footer>
    </Modal>
  );
};