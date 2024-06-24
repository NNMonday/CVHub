import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Table, Alert } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons'; // Import icon


const JobPortal = () => {
    return (
        <Container>

            <Row className="mt-4">
                <Col>
                    <h1>Hello, Esther Howard</h1>
                    <p>Here is your daily activities and job alerts</p>
                </Col>
            </Row>
            <Row className="mt-4">
    <Col md={4}>
      <div style={{ backgroundColor: '#add8e6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="text-center p-4 border">
        <div style={{ textAlign: 'left' }}>
          <h2>589</h2>
          <p>Applied jobs</p>
        </div>
        <FontAwesomeIcon icon={faThLarge} style={{ fontSize: '2em' }} />
      </div>
    </Col>
    <Col md={4}>
      <div style={{ backgroundColor: '#ffffe0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="text-center p-4 border">
        <div style={{ textAlign: 'left' }}>
          <h2>238</h2>
          <p>Favorite jobs</p>
        </div>
        <FontAwesomeIcon icon={faThLarge} style={{ fontSize: '2em' }} />
      </div>
    </Col>
    <Col md={4}>
      <div style={{ backgroundColor: '#98fb98', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} className="text-center p-4 border">
        <div style={{ textAlign: 'left' }}>
          <h2>574</h2>
          <p>Job Alerts</p>
        </div>
        <FontAwesomeIcon icon={faThLarge} style={{ fontSize: '2em' }} />
      </div>
    </Col>
  </Row>

            <Row className="mt-4">
                <Col>
                    <Alert
                        variant="danger"
                        style={{
                            backgroundColor: '#ff4c4c', // Màu nền đỏ
                            color: 'white',
                            padding: '30px', // Tăng padding lên 30px
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="Profile"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%', // Để làm ảnh hình tròn
                                    marginRight: '20px',
                                }}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span>Your profile editing is not completed.</span>
                                <span>Your profile editing is not completed.</span>
                            </div>
                        </div>
                        <Button
                            style={{
                                backgroundColor: 'white',
                                color: '#ff4c4c',
                                border: 'none',
                                padding: '10px 20px',
                            }}
                        >
                            <FaEdit className="me-2" />
                            Edit Profile
                        </Button>
                    </Alert>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2>Recently Applied</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Job</th>
                                <th>Date Applied</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Networking Engineer</td>
                                <td>Feb 2, 2019 19:28</td>
                                <td className="text-success">Active</td>
                                <td><Button variant="primary">View Details</Button></td>
                            </tr>
                            <tr>
                                <td>Product Designer</td>
                                <td>Dec 7, 2019 23:26</td>
                                <td className="text-success">Active</td>
                                <td><Button variant="primary">View Details</Button></td>
                            </tr>
                            <tr>
                                <td>Junior Graphic Designer</td>
                                <td>Feb 2, 2019 19:28</td>
                                <td className="text-success">Active</td>
                                <td><Button variant="primary">View Details</Button></td>
                            </tr>
                            <tr>
                                <td>Visual Designer</td>
                                <td>Dec 7, 2019 23:26</td>
                                <td className="text-success">Active</td>
                                <td><Button variant="primary">View Details</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default JobPortal;