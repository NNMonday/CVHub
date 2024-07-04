import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '../style/styles.css';


const Footer = () => {
    return (
        <footer className="bg-light pt-5"  >
            <Container style={{ backgroundColor: '#f0f0f0' }}>
                <Row>
                    <Col md={4}>
                        <h5>
                            <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                            CVHub</h5>
                        <p>Call now: (519) 555-0115</p>
                        <p>6901 Bright St. Cline, Decrease 10234, New York, United States of America</p>
                    </Col>
                    <Col md={2}>
                        <h5>Quick Link</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/about" className="custom-link">About</Link></li>
                            <li><Link to="/contact" className="custom-link">Contact</Link></li>
                            <li><Link to="/pricing" className="custom-link">Pricing</Link></li>
                            <li><Link to="/blog" className="custom-link">Blog</Link></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Candidate</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/browse-jobs" className="custom-link">Browse Jobs</Link></li>
                            <li><Link to="/browse-companies" className="custom-link">Browse Companies</Link></li>
                            <li><Link to="/candidate-dashboard" className="custom-link">Candidate Dashboard</Link></li>
                            <li><Link to="/saved-jobs" className="custom-link">Saved Jobs</Link></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Companies</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/post-job" className="custom-link">Post a Job</Link></li>
                            <li><Link to="/browse-candidates" className="custom-link">Browse Candidates</Link></li>
                            <li><Link to="/company-dashboard" className="custom-link">Companies Dashboard</Link></li>
                            <li><Link to="/applications" className="custom-link">Applications</Link></li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/faqs" className="custom-link">FAQs</Link></li>
                            <li><Link to="/privacy-policy" className="custom-link">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions" className="custom-link">Terms & Conditions</Link></li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row className="text-center">
                    <Col className="d-flex justify-content-between align-items-center">
                        
                        <p>&copy; 2024 CVHub - Job Portal. All rights reserved.</p>
                        <div>
                            <Link to="#" className="me-2"><FaFacebookF /></Link>
                            <Link to="#" className="me-2"><FaTwitter /></Link>
                            <Link to="#"><FaInstagram /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
