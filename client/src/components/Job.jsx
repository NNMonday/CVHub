import React from "react";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import logoPlaceholder from "../assets/logoPlaceholder.png";
import { getDistanceFromToday } from "../utilities/ReuseFns";
import { Badge, Col } from "react-bootstrap";
import { Badge, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faCheckCircle,
  faCheckCircle,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookmarkButton from "./BookmarkButton";
import BookmarkButton from "./BookmarkButton";

const Job = (props) => {
  const {
    name,
    workstatus_id,
    location,
    salary,
    deadline,
    jobId,
    userId,
    date,
    statuss,
    avatar,
  } = props;
  const workType = workstatus_id?.workStatus_name || "Unknown";
  return (
    <Col
      sm={12}
      className="d-flex p-4 border align-items-center mb-3 job-container"
      style={{ borderRadius: "10px" }}
      style={{ borderRadius: "10px" }}
    >
      <div className="d-flex flex-grow-1">
        <div
          style={{
            width: "7%",
            borderRadius: "6px",
            width: "7%",
            borderRadius: "6px",
          }}
          className="overflow-hidden"
        >
          <img
            src={avatar || logoPlaceholder}
            alt="logoPlaceholder"
            className="w-100 h-100"
          />
        </div>
        <div className="ms-3 d-flex flex-column justify-content-between">
          <div>
            <Link
              to="#"
              className="text-decoration-none fw-bolder fs-5 job-name"
            >
            <Link
              to="#"
              className="text-decoration-none fw-bolder fs-5 job-name"
            >
              {name}
            </Link>
            <span
              className="text-primary fw-bold bg-primary-subtle py-1 px-2 ms-3"
              style={{ borderRadius: "15px" }}
              style={{ borderRadius: "15px" }}
            >
              {workType}
            </span>
          </div>
          <div className="text-secondary">
            <span>
              <FontAwesomeIcon className="me-1" icon={faLocationDot} />{" "}
              {location}
              <FontAwesomeIcon className="me-1" icon={faLocationDot} />{" "}
              {location}
            </span>
            <span>
              <FontAwesomeIcon className="me-1 ms-3" icon={faDollarSign} />{" "}
              {salary}
              <FontAwesomeIcon className="me-1 ms-3" icon={faDollarSign} />{" "}
              {salary}
            </span>
            <span>
              <FontAwesomeIcon className="me-1 ms-3" icon={faCalendar} />{" "}
              {getDistanceFromToday(deadline)} Days Remaining
              <FontAwesomeIcon className="me-1 ms-3" icon={faCalendar} />{" "}
              {getDistanceFromToday(deadline)} Days Remaining
            </span>
          </div>
        </div>
        <div
          className=" d-flex align-items-center"
          style={{ marginLeft: "150px" }}
        >
          {date && <div className="me-4">{date}</div>}
        </div>
        <div className="ms-auto d-flex align-items-center">
          {statuss && (
            <div className="me-4">
              <Badge bg="success">
                <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                {statuss}
              </Badge>
            </div>
          )}
        </div>
        <div
          className=" d-flex align-items-center"
          style={{ marginLeft: "150px" }}
        >
          {date && <div className="me-4">{date}</div>}
        </div>
        <div className="ms-auto d-flex align-items-center">
          {statuss && (
            <div className="me-4">
              <Badge bg="success">
                <FontAwesomeIcon icon={faCheckCircle} className="me-1" />
                {statuss}
              </Badge>
            </div>
          )}
        </div>
      </div>


      <div className="d-flex">
        <BookmarkButton jobId={jobId} userId={userId} />
        <div
          className="d-flex align-items-center py-1 px-3 apply-container"
          style={{ backgroundColor: "#E7F0FA", borderRadius: "6px" }}
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
};
};
export default Job;

