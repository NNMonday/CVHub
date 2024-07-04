import React, { useState } from 'react';
import BookmarkButton from './BookmarkButton';
import logoPlaceholder from "../assets/logoPlaceholder.png";
import { Button, Card, Col, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBirthdayCake,
  faBold,
  faBriefcase,
  faDollarSign,
  faDownload,
  faEnvelope,
  faGlobe,
  faGraduationCap,
  faItalic,
  faLink,
  faListOl,
  faListUl,
  faLocationDot,
  faMapMarker,
  faMapMarkerAlt,
  faPhone,
  faRing,
  faStrikethrough,
  faUnderline,
  faVenusMars,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faBuilding, faCalendar, faClock, faFileAlt, faFlag } from "@fortawesome/free-regular-svg-icons";

const Job = (props) => {
  const { name, location,experience, job, jobId, userId,biogrphy, description, education, dateOfBirth,notionality,marialStatus,gender,fName,website,phone,emailAddress,locationDetail } = props;
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Col
        sm={12}
        className="d-flex p-4 border align-items-center mb-3 job-container"
        style={{ borderRadius: '10px' }}
      >
        <div className="d-flex flex-grow-1">
          <div
            style={{
              width: '7%',
              borderRadius: '6px',
            }}
            className="overflow-hidden"
          >
            <img
              src={logoPlaceholder}
              alt="logoPlaceholder"
              className="w-100 h-100"
            />
          </div>
          <div className="ms-3 d-flex flex-column justify-content-between">
            <div>
              <Link to="#" className="text-decoration-none fw-bolder fs-5 job-name">
                {name}
              </Link>
            </div>
            <div className="text-secondary">
              <span >
                {job}
              </span>
            </div>
            <div className="text-secondary">
              <span>
                <FontAwesomeIcon className="me-1" icon={faLocationDot} /> {location}
              </span>
              <span>
                <FontAwesomeIcon className="me-1 ms-3" icon={faDollarSign} /> {experience} experience
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <BookmarkButton jobId={jobId} userId={userId} />
          <div
            className="d-flex align-items-center py-1 px-3 apply-container"
            style={{ backgroundColor: '#E7F0FA', borderRadius: '6px', cursor: 'pointer' }}
            onClick={handleShow}
          >
            <span className="fw-bold">
              View Profile
              <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
            </span>
          </div>
        </div>
      </Col>

      <Modal show={showModal} onHide={handleClose} size="xl">
  <Modal.Body className="p-4">
    <Container fluid>
      <Row className="mb-4">
        <Col xs={12}>
          <div className="d-flex align-items-center">
            <div style={{ width: '60px', height: '60px', borderRadius: '6px' }} className="overflow-hidden me-3">
              <img src={logoPlaceholder} alt="logoPlaceholder" className="w-100 h-100 object-fit-cover" />
            </div>
            <div className="flex-grow-1">
              <Link to="#" className="text-decoration-none fw-bolder fs-5 job-name">{name}</Link>
              <div className="text-secondary">{job}</div>
            </div>
            <div className="d-flex">
              <BookmarkButton jobId={jobId} userId={userId} className="me-2" />
              <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Send Mail
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={7}>
          <section className="mb-4">
            <div dangerouslySetInnerHTML={{ __html: biogrphy }} />
          </section>
          
          <section className="mb-4 py-4" style={{ borderTop: "1px solid #dee2e6", borderBottom: "1px solid #dee2e6" }}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </section>
          
          <section>
            <h5 className="mb-3">Follow me on Social Media</h5>
            <div className="d-flex flex-wrap gap-2">
              <Button variant="primary">
                <FontAwesomeIcon icon={faFacebook} className="me-2" /> Facebook
              </Button>
              <Button variant="info">
                <FontAwesomeIcon icon={faTwitter} className="me-2" /> Twitter
              </Button>
              <Button variant="danger">
                <FontAwesomeIcon icon={faPinterest} className="me-2" /> Pinterest
              </Button>
            </div>
          </section>
        </Col>

        <Col md={5}>
          <Card className="mb-4">
            <Card.Body>
              <h5 className="mb-3">Personal Information</h5>
              <Row xs={2} className="g-3">
                {[
                  { icon: faBirthdayCake, title: "DATE OF BIRTH", value: dateOfBirth },
                  { icon: faFlag, title: "NATIONALITY", value: notionality },
                  { icon: faRing, title: "MARITAL STATUS", value: marialStatus },
                  { icon: faVenusMars, title: "GENDER", value: gender },
                  { icon: faBriefcase, title: "EXPERIENCE", value: experience },
                  { icon: faGraduationCap, title: "EDUCATION", value: education },
                ].map((item, idx) => (
                  <Col key={idx}>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={item.icon} className="text-primary me-2" />
                      <div>
                        <div className="text-muted small">{item.title}</div>
                        <div className="fw-bold">{item.value}</div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <h5 className="mb-3">Download My Resume</h5>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faFileAlt} className="text-primary me-3" size="2x" />
                <div className="flex-grow-1">
                  <div>{fName}</div>
                  <div className="text-muted">PDF</div>
                </div>
                <Button variant="outline-primary">
                  <FontAwesomeIcon icon={faDownload} />
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h5 className="mb-3">Contact Information</h5>
              {[
                { icon: faGlobe, title: "WEBSITE", value: website },
                { icon: faMapMarkerAlt, title: "LOCATION", value: location },
                { icon: faPhone, title: "PHONE", value: phone },
                { icon: faEnvelope, title: "EMAIL ADDRESS", value: emailAddress },
              ].map((item, idx) => (
                <div key={idx} className="mb-3">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={item.icon} className="text-primary me-2" />
                    <div>
                      <div className="text-muted small">{item.title}</div>
                      <div>{item.value}</div>
                    </div>
                  </div>
                  {idx === 1 && locationDetail && (
                    <div className="ms-4 text-muted small mt-1">{locationDetail}</div>
                  )}
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Modal.Body>
</Modal>
    </>
  );
};

export default Job;