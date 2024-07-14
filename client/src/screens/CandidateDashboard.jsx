import React, { useState } from "react";

import { Button, Col, Container, Row, Form, Modal, Nav, Table, Card } from "react-bootstrap";
import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faUser, faBriefcase, faBookmark, faFileInvoiceDollar, faBuilding, faCog, faSignOutAlt, faBell } from '@fortawesome/free-solid-svg-icons';
import Job from "../components/Job";
import FavoriteJobs, { getFavoriteJobsCount } from "./FavoriteJobs";
import { getAlertJobsCount } from "./JobAlerts";
import { NavLink } from "react-router-dom";

export default function CandidateDashboard() {
  const favoriteJobsCount = getFavoriteJobsCount();
  const alertJobsCount = getAlertJobsCount();


  const data = {
    jobs: [
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
        date:"Feb 2,2024 19:30",
        statuss:"Active"
      },
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
        date:"Feb 2,2024 19:30",
        statuss:"Active"
      },
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
        date:"Feb 2,2024 19:30",
        statuss:"Active"
      },
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
        date:"Feb 2,2024 19:30",
        statuss:"Active"
      },
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
        date:"Feb 2,2024 19:30",
        statuss:"Active"
      },
    ],
  };


  
  const AppliedJobsCard = ({ jobCount,appliedjobs,color,icon }) => {
    
    return (
      <Card className="p-3 d-flex flex-row align-items-center" style={{ backgroundColor: color, borderRadius: '10px' }}>
        <div className="flex-grow-1">
          <h3>{jobCount}</h3>
          <p className="">{appliedjobs}</p>
        </div>
        <div style={{ width: '40px', height: '40px', backgroundColor: '#fff', borderRadius: '10px' }} className="d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={icon} className="me-2"/>
        </div>
      </Card>
    );
  };
  
  const appliedJobsCount = data.jobs.length;
    return (
      <MainLayout>
  <Container fluid>
        <Row>
        <Col md={3} className="bg-light sidebar">
      <div className="d-flex flex-column vh-100 p-3 bg-light" style={{ width: '250px' }}>
        <h4 className="mb-4">CANDIDATE DASHBOARD</h4>
        <Nav className="flex-column">
          <NavLink to="/candidatedashboard" className={({ isActive }) => `nav-link d-flex align-items-center mb-2 ${isActive ? 'active' : 'text-dark'}`}>
            <FontAwesomeIcon icon={faLayerGroup} className="me-2" />
            Overview
          </NavLink>
          <NavLink to="/appliedjobs" className={({ isActive }) => `nav-link d-flex align-items-center mb-2 ${isActive ? 'active' : 'text-dark'}`}>
            <FontAwesomeIcon icon={faBriefcase} className="me-2" />
            Applied Jobs
          </NavLink>
          <NavLink to="/favoritejobs" className={({ isActive }) => `nav-link d-flex align-items-center mb-2 ${isActive ? 'active' : 'text-dark'}`}>
            <FontAwesomeIcon icon={faBookmark} className="me-2" />
            Favorite Jobs
          </NavLink>
          <NavLink to="/jobalerts" className={({ isActive }) => `nav-link d-flex align-items-center mb-2 ${isActive ? 'active' : 'text-dark'}`}>
            <FontAwesomeIcon icon={faBell} className="me-2"/>
            Job Alert
          </NavLink>
          <NavLink to="/settingpersonal" className={({ isActive }) => `nav-link d-flex align-items-center mb-2 ${isActive ? 'active' : 'text-dark'}`}>
            <FontAwesomeIcon icon={faCog} className="me-2" />
            Settings
          </NavLink>
          <NavLink to="/logout" className={({ isActive }) => `nav-link d-flex align-items-center mt-auto ${isActive ? 'active' : 'text-dark'}`}>
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
            Log-out
          </NavLink>
        </Nav>
      </div>
    </Col>
          <Col md={9}>
          <Row className="my-4">
        <Col  md={4}>
          <AppliedJobsCard jobCount={appliedJobsCount} appliedjobs="Applied jobs" color={'#E7F0FA'} icon={faBriefcase} />
        </Col>
        <Col  md={4}>
          <AppliedJobsCard jobCount={favoriteJobsCount} appliedjobs="Favorite jobs" color={'#FFF6E6'} icon={faBookmark}/>
        </Col>
        <Col  md={4}>
          <AppliedJobsCard jobCount={alertJobsCount} appliedjobs="Jobs Alerts" color={'#E7F6EA'} icon={faBell} />
        </Col>
      </Row>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th style={{ paddingRight: "130px" }}>Jobs</th>
              <th>Date Applied</th>
              <th style={{ paddingRight: "8px" }}>Status</th>
              <th>Action</th>
            </tr>
          </thead>
        </Table>
        <div>
          {data.jobs.map((j) => (
            <Job key={j.jobId} {...j} />
          ))}
        </div>
      </Col>
        </Row>
        
      </Container>
      </MainLayout>
    );


  }