import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import AccountSetup from "../../../layouts/AccountSetupLayout";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default function Social() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account/setup/contact");
  };
  return (
    <AccountSetup progress={50}>
      <Form onSubmit={handleSubmit}>
        <Row className="mt-3">
          <Col>
            <label htmlFor="">Social Link 1</label>
            <div className="d-flex mt-2">
              <div
                className="border border-1 d-flex align-items-center flex-grow-1"
                style={{ borderColor: "#E4E5E8" }}
              >
                <select name="" id="" className="border-0 py-2 px-3">
                  <option value="">Facebook</option>
                </select>
                <div className="border border-1 mx-2 h-100"></div>
                <div className="d-inline-block py-2 px-3 flex-grow-1">
                  <input
                    type="text"
                    placeholder="Profile link/url..."
                    className="border-0 h-100 custom-input w-75"
                  />
                </div>
              </div>
              <div className="bg-secondary-subtle ms-2 px-3 d-flex align-items-center rounded">
                <FontAwesomeIcon icon={faCircleXmark} className="" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Button className="w-100" variant="secondary">
              <FontAwesomeIcon icon={faPlusCircle} className="me-2" /> Add New
              Social Link
            </Button>
          </Col>
        </Row>

        <Row>
          <Col className="mt-3">
            <Link
              className="btn btn-secondary me-3"
              to={"/account/setup/profile"}
            >
              Previous
            </Link>
            <Button type="submit">
              Save & Next <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Col>
        </Row>
      </Form>
    </AccountSetup>
  );
}
