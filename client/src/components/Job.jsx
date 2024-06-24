import React from "react";
import { faBookmark, faCalendar } from "@fortawesome/free-regular-svg-icons";
import logoPlaceholder from "../assets/logoPlaceholder.png";
import { getDistanceFromToday } from "../utilities/ReuseFns";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Job({ name, work_status, location, salary, deadline }) {
  return (
    <Col
      sm={12}
      className="d-flex p-4 border align-items-center mb-3 job-container"
      style={{ borderRadius: "10px" }}
    >
      <div className="d-flex flex-grow-1">
        <div
          style={{
            width: "7%",
            borderRadius: "6px",
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
            <Link className="text-decoration-none fw-bolder fs-5 job-name">
              {name}
            </Link>
            <span
              className="text-primary fw-bold bg-primary-subtle py-1 px-2 ms-3"
              style={{ borderRadius: "15px" }}
            >
              {work_status}
            </span>
          </div>
          <div className="text-secondary">
            <span>
              <FontAwesomeIcon className="me-1" icon={faLocationDot} />{" "}
              {location}
            </span>
            <span>
              <FontAwesomeIcon className="me-1 ms-3" icon={faDollarSign} />
              {salary} VNĐ
            </span>
            <span>
              <FontAwesomeIcon className="me-1 ms-3" icon={faCalendar} />
              {getDistanceFromToday(deadline)} Days Remaining
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div
          className="py-2 px-3 me-2 save-container"
          style={{
            borderRadius: "6px",
          }}
        >
          <FontAwesomeIcon icon={faBookmark} />
        </div>
        <div
          className="d-flex align-items-center py-1 px-3 apply-container"
          style={{ backgroundColor: "#E7F0FA", borderRadius: "6px" }}
        >
          <span className="fw-bold">
            Apply Now
            <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
          </span>
        </div>
      </div>
    </Col>
  );
}
