import React, { useCallback, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Col, Container, Row, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faVirus } from "@fortawesome/free-solid-svg-icons";
import {
  faSearch,
  faMapMarkerAlt,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import PerformRequest from "../utilities/PerformRequest.js";
import Job from "../components/Job.jsx"; // Import Job component here
import { Link, useSearchParams } from "react-router-dom";
import { Typography } from "antd";
import axios from "axios";
const { Text } = Typography;

export default function JobListView() {
  const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);
  const [jobs, setJobs] = useState([]);
  const [sortOrder, setSortOrder] = useState("lastest");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    title: searchParams.get("jobTitle") || "",
    location: searchParams.get("location") || "",
  });

  const [location, setLocation] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const locationRes = await axios.get(
          "http://localhost:9999/api/location/getAllLocation"
        );
        setLocation(locationRes.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Function to handle items per page change
  const handleItemsPerPageChange = (perPage) => {
    setItemsPerPage(perPage);
    setCurrentPage(1);
  };

  // Function to handle sorting of jobs
  const handleSortJobs = (order) => {
    let sortedJobs = [...jobs];
    if (order === "latest") {
      sortedJobs.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    } else if (order === "earliest") {
      sortedJobs.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    }
    setJobs(sortedJobs);
    setSortOrder(order);
  };

  // Effect to fetch jobs on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await OriginalRequest(
          `jobs/getAllJobs?title=${filter.title}&location=${filter.location}`,
          "GET"
        );
        if (data) {
          console.log(data);
          setJobs(data);
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  // Calculate total pages based on items per page
  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calculate current jobs to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  // JSX component for filter bar section
  const FilterBar = () => (
    <div
      className="d-flex bg-white align-items-center p-3"
      style={{ borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
    >
      {/* Name filter dropdown */}
      <div className="me-auto">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-name">
            Select Name
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Name 1</Dropdown.Item>
            <Dropdown.Item href="#">Name 2</Dropdown.Item>
            <Dropdown.Item href="#">Name 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Latest dropdown */}
      <div className="me-3">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-latest">
            {sortOrder === "latest" ? "Latest" : "Earliest"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleSortJobs("latest")}>
              Latest
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleSortJobs("earliest")}>
              Earliest
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Items per page dropdown */}
      <div className="me-3">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-perpage">
            {itemsPerPage} per page
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleItemsPerPageChange(6)}>
              6
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemsPerPageChange(12)}>
              12
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemsPerPageChange(24)}>
              24
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Sort icon button */}
      <div className="ms-auto">
        <Row className="ms-auto">
          <Col xs="auto">
            <Button variant="light">
              <FontAwesomeIcon icon={faThLarge} />
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant="light">
              <FontAwesomeIcon icon={faVirus} />
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );

  return (
    <MainLayout>
      {/* <Banner /> */}

      <Container fluid style={{ padding: "70px 200px" }}>
        <div
          className="d-flex flex-column bg-gray w-100 p-3"
          style={{
            backgroundColor: "#CCCCCC",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          {/* Top row */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h4>Find Job</h4>
            </div>
            <div>
              <Text>
                <Link to="/">Home</Link> /{" "}
                <Link to="/viewAllJob">Find Job</Link>
              </Text>
            </div>
          </div>

          {/* Job search */}
          <div
            className="d-flex bg-white align-items-center p-3 mb-3"
            style={{
              borderRadius: "10px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            {/* Input for Job title */}
            <div
              className="d-flex align-items-center"
              style={{
                width: "25%",
                backgroundColor: "#FFFFFF",
                padding: "10px",
                borderRadius: "10px",
                marginRight: "10px",
              }}
            >
              <FontAwesomeIcon icon={faSearch} className="me-3" />
              <input
                type="text"
                placeholder="Job title"
                className="border-0 h-100 custom-input"
                style={{
                  width: "100%",
                  backgroundColor: "inherit",
                  border: "none",
                  outline: "none",
                }}
                value={filter.title}
                onChange={(e) =>
                  setFilter({ ...filter, title: e.target.value })
                }
              />
            </div>
            <div
              className="border border-1 mx-3"
              style={{ height: "20px" }}
            ></div>
            {/* Input for location */}
            <div
              className="d-flex align-items-center"
              style={{
                width: "25%",
                backgroundColor: "#FFFFFF",
                padding: "10px",
                borderRadius: "10px",
                marginRight: "10px",
              }}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />
              <div className="d-flex w-100 align-items-center">
                <select
                  value={filter.location}
                  onChange={(e) =>
                    setFilter({ ...filter, location: e.target.value })
                  }
                  className="border-0 py-2 px-3 w-50"
                >
                  <option value="" hidden>
                    Select Location
                  </option>
                  {location.map((l) => (
                    <option key={l._id} value={l._id}>
                      {l.location_name}
                    </option>
                  ))}
                </select>
                <div
                  className="border border-1 mx-2"
                  style={{ height: "60%" }}
                ></div>
              </div>
            </div>
            <div
              className="border border-1 mx-3"
              style={{ height: "20px", backgroundColor: "#FFFFFF" }}
            ></div>
            {/* Category dropdown */}
            <Dropdown className="me-3" style={{ width: "20%" }}>
              <Dropdown.Toggle
                variant="outline-secondary"
                id="dropdown-category"
              >
                <FontAwesomeIcon icon={faVectorSquare} className="me-3" />
                Select Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Category 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Category 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* Advanced filter dropdown */}
            <Dropdown className="me-3" style={{ width: "20%" }}>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-filter">
                Advance Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Filter 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Filter 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Filter 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* Find jobs button */}
            <Link
              className="btn btn-primary"
              to={`/viewAllJob?jobTitle=${filter.title}&location=${filter.location}`}
            >
              Find Jobs
            </Link>
          </div>
        </div>
        <FilterBar />
        <Row>
          {currentJobs.map((j, i) => (
            <Job key={i} {...j} />
          ))}
        </Row>
        <div className="mt-3 d-flex justify-content-center">
          {pageNumbers.map((number) => (
            <Button
              key={number}
              variant={number === currentPage ? "primary" : "light"}
              onClick={() => setCurrentPage(number)}
              className="me-1"
            >
              {number}
            </Button>
          ))}
        </div>
      </Container>
    </MainLayout>
  );
}
