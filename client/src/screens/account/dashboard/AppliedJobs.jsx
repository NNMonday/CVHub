import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import DashboardLayout from "../../../layouts/DashboardLayout";

const AppliedJobs = () => {
  const jobs = [
    {
      title: "Networking Engineer",
      type: "Remote",
      location: "Washington",
      salary: "$50k-80k/month",
      date: "Feb 2, 2019 19:28",
      status: "Active",
      action: "View Details",
    },
    {
      title: "Product Designer",
      type: "Full Time",
      location: "Dhaka",
      salary: "$50k-80k/month",
      date: "Dec 7, 2019 23:26",
      status: "Active",
      action: "View Details",
    },
    {
      title: "Junior Graphic Designer",
      type: "Temporary",
      location: "Brazil",
      salary: "$50k-80k/month",
      date: "Feb 2, 2019 19:28",
      status: "Active",
      action: "View Details",
    },
    {
      title: "Visual Designer",
      type: "Contract Base",
      location: "Wisconsin",
      salary: "$50k-80k/month",
      date: "Dec 7, 2019 23:26",
      status: "Active",
      action: "View Details",
    },
    {
      title: "Marketing Officer",
      type: "Full Time",
      location: "United States",
      salary: "$50k-80k/month",
      date: "Dec 4, 2019 21:42",
      status: "Active",
      action: "View Details",
    },
    {
      title: "UI/UX Designer",
      type: "Full Time",
      location: "North Dakota",
      salary: "$50k-80k/month",
      date: "Dec 30, 2019 07:52",
      status: "Active",
      action: "View Details",
    },
    {
      title: "Software Engineer",
      type: "Full Time",
      location: "New York",
      salary: "$50k-80k/month",
      date: "Dec 30, 2019 05:18",
      status: "Active",
      action: "View Details",
    },
    {
      title: "Front End Developer",
      type: "Full Time",
      location: "Michigan",
      salary: "$50k-80k/month",
      date: "Mar 20, 2019 23:14",
      status: "Active",
      action: "View Details",
    },
  ];

  return (
    <DashboardLayout>
      {/* <Container>
        <h2>Applied Jobs (589)</h2>
        {jobs.map((job, index) => (
          <Card key={index} className="mb-2 job-card">
            <Card.Body className="d-flex align-items-center justify-content-between">
              <Row className="w-100">
                <Col md={6} className="d-flex align-items-center">
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/cvhub-cfde1.appspot.com/o/logoPlaceholder.png?alt=media&token=517be915-1732-476b-a0c7-1f6554bef134`}
                    alt="logo"
                    className="mr-3"
                  />
                  <div>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {job.type} | {job.location} | {job.salary}
                    </Card.Text>
                  </div>
                </Col>
                <Col md={3} className="d-flex align-items-center">
                  <Card.Text>{job.date}</Card.Text>
                </Col>
                <Col md={1} className="d-flex align-items-center">
                  <Card.Text className="text-success">{job.status}</Card.Text>
                </Col>
                <Col
                  md={2}
                  className="d-flex align-items-center justify-content-end"
                >
                  <Button variant="primary">{job.action}</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Container> */}
    </DashboardLayout>
  );
};

export default AppliedJobs;
