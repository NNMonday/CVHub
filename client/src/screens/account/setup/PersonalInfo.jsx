import React from "react";
import AccountSetup from "../../../layouts/AccountSetupLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import Dropzone from "../../../assets/Dropzone.png";
import BannerDropzone from "../../../assets/BannerDropzone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function PersonalInfo() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account/setup/profile");
  };
  return (
    <AccountSetup progress={0}>
      <Form onSubmit={handleSubmit} className="min-vh-100">
        <h4>Logo & Banner Image</h4>
        <Row>
          <Col sm={4}>
            <p>Upload Logo</p>
            <img src={Dropzone} alt="Dropzone" />
          </Col>
          <Col sm={8} className="overflow-hidden">
            <p>Banner Image</p>
            <img
              src={BannerDropzone}
              alt="Banner Dropzone"
              className="w-100 h-100 object-fit-cover"
              style={{ objectPosition: "center" }}
            />
          </Col>
        </Row>
        <hr />
        <Form.Group>
          <Form.Label>Company name</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>About us</Form.Label>
          <Form.Control as={"textarea"} rows={3} />
        </Form.Group>

        <Button className="mt-4" type="submit">
          Save & Next <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Form>
    </AccountSetup>
  );
}
