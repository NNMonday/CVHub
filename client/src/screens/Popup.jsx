import React from "react";
import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faBriefcase,
  faBuilding,
  faCalendar,
  faClock,
  faCoffee,
  faGraduationCap,
  faItalic,
  faLayerGroup,
  faLink,
  faListOl,
  faListUl,
  faLocationDot,
  faMagnifyingGlass,
  faMapMarker,
  faMapMarkerAlt,
  faStrikethrough,
  faUnderline,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Job2 from "../components/Job2";
import { Button, Card, Col, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { faFacebook, faFacebookSquare, faInstagramSquare, faPinterest, faTwitter, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";


export default  ApplyJobPopup = ({ show, handleClose }) => {
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