import React, { useCallback, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Col, Container, Row, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendar, faDollarSign, faLocationDot, faMagnifyingGlass, faUsers, faSort, faAddressBook, faVectorSquare, faVirus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import logoPlaceholder from "../assets/logoPlaceholder.png";
import { Link } from "react-router-dom";
import { getDistanceFromToday } from "../utilities/ReuseFns";
import PerformRequest from "../utilities/PerformRequest.js";
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export default function JobListView() {
    const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);
    const [jobs, setJobs] = useState([]);
    const [workStatuses, setWorkStatuses] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const data = await OriginalRequest('jobs/getAllJobs', 'GET');
                if (data) {
                    console.log('Jobs fetched:', data);
                    setJobs(data);
                }
            } catch (error) {
                console.error('Failed to fetch jobs:', error);
            }
        };
        fetchJobs();
    }, [OriginalRequest]);
    useEffect(() => {
        const fetchWorkSTT = async () => {
            try {
                const data = await OriginalRequest('workstatus/getWorkStatusById', 'GET');
                if (data) {
                    console.log('UworkSTT fetched:', data);
                    setWorkStatuses(data);
                }
            } catch (error) {
                console.error('Failed to fetch jobs:', error);
            }
        };
        fetchWorkSTT();
    }, [OriginalRequest]);

    const Job = (props) => {
        const { name, workstatus_id, location, salary, deadline } = props;
        const workType = workstatus_id?.workStatus_name || "Unknown"
        return(
            <Col sm={12} className="d-flex p-4 border align-items-center mb-3 job-container" style={{ borderRadius: "10px" }}>
            <div className="d-flex flex-grow-1">
                <div style={{ width: "7%", borderRadius: "6px" }} className="overflow-hidden">
                    <img src={logoPlaceholder} alt="logoPlaceholder" className="w-100 h-100" />
                </div>
                <div className="ms-3 d-flex flex-column justify-content-between">
                    <div>
                        <Link className="text-decoration-none fw-bolder fs-5 job-name">{name}</Link>
                        <span className="text-primary fw-bold bg-primary-subtle py-1 px-2 ms-3" style={{ borderRadius: "15px" }}>
                            {workType}
                        </span>
                    </div>
                    <div className="text-secondary">
                        <span><FontAwesomeIcon className="me-1" icon={faLocationDot} /> {location}</span>
                        <span><FontAwesomeIcon className="me-1 ms-3" icon={faDollarSign} /> {salary}</span>
                        <span><FontAwesomeIcon className="me-1 ms-3" icon={faCalendar} /> {getDistanceFromToday(deadline)} Days Remaining</span>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div className="py-2 px-3 me-2 save-container" style={{ borderRadius: "6px" }}>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
                <div className="d-flex align-items-center py-1 px-3 apply-container" style={{ backgroundColor: "#E7F0FA", borderRadius: "6px" }}>
                    <span className="fw-bold">Apply Now <FontAwesomeIcon className="ms-2" icon={faArrowRight} /></span>
                </div>
            </div>
        </Col>
    );
    }
        
    const JobSearch = () => (
        <div className="d-flex flex-column bg-gray w-100 p-3" style={{ backgroundColor: "#CCCCCC", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
            {/* Top row */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h4>FindJob</h4>
                </div>
                <div>
                    <p>Home / FindJobs</p>
                </div>
            </div>

            {/* Job search */}
            <div className="d-flex bg-white align-items-center p-3 mb-3" style={{ borderRadius: "10px", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
                {/* Input for Job title */}
                <div className="d-flex align-items-center" style={{ width: "25%", backgroundColor: "#FFFFFF", padding: "10px", borderRadius: "10px", marginRight: "10px" }}>
                    <FontAwesomeIcon icon={faSearch} className="me-3" />
                    <input
                        type="text"
                        placeholder="Job title"
                        className="border-0 h-100 custom-input"
                        style={{ width: "100%", backgroundColor: "inherit", border: "none", outline: "none" }}
                    />
                </div>
                <div className="border border-1 mx-3" style={{ height: "20px" }}></div>
                {/* Input for location */}
                <div className="d-flex align-items-center" style={{ width: "25%", backgroundColor: "#FFFFFF", padding: "10px", borderRadius: "10px", marginRight: "10px" }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />
                    <input
                        type="text"
                        placeholder="Your location"
                        className="border-0 h-100 custom-input"
                        style={{ width: "100%", backgroundColor: "inherit", border: "none", outline: "none" }}
                    />
                </div>
                <div className="border border-1 mx-3" style={{ height: "20px", backgroundColor: "#FFFFFF" }}></div>
                {/* Category dropdown */}
                <Dropdown className="me-3" style={{ width: "20%", }}>

                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-category">
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
                <Button variant="primary">FindJobs</Button>
            </div>
        </div>
    );

    const FilterBar = () => (
        <div className="d-flex bg-white align-items-center p-3" style={{ borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
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
                        Latest
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Latest 1</Dropdown.Item>
                        <Dropdown.Item href="#">Latest 2</Dropdown.Item>
                        <Dropdown.Item href="#">Latest 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* Items per page dropdown */}
            <div className="me-3">
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-perpage">
                        12 per page
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">6</Dropdown.Item>
                        <Dropdown.Item href="#">12</Dropdown.Item>
                        <Dropdown.Item href="#">24</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* Sort icon button */}
            <div className="ms-auto">
                <Button variant="light">
                    <FontAwesomeIcon icon={faSort} />
                </Button>
                <Button variant="light">
                    <FontAwesomeIcon icon={faVirus} />
                </Button>
            </div>
        </div>
    );
    return (
        <MainLayout>
            {/* <Banner /> */}

            <Container fluid style={{ padding: "70px 200px" }}>
                <JobSearch />
                <FilterBar />
                <Row>
                    <Col className="d-flex justify-content-between align-items-center mb-4">
                        <h3>Job Listings</h3>
                        <Button variant="primary">Advanced Filter</Button>
                    </Col>
                </Row>
                <Row>
                    {jobs.map((j, i) => (
                        <Job key={i} {...j} />
                    ))}
                </Row>
            </Container>
        </MainLayout>
    );
}
