import React from 'react';
import { Layout, Typography, Row, Col, Card, Button, Divider } from 'antd';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const BrowseCompaniesDetail = () => {
    return (
        <Layout>
            <MainNavbar />
            <Content style={{ padding: '20px', marginTop: '20px' }}>
                <div style={{ background: '#f0f0f0', padding: '10px' }}>
                    <Row justify="space-between" align="middle">
                        <Col>
                            <Text strong>Single Companies</Text>
                        </Col>
                        <Col>
                            <Text>
                                <Link to="/">Home</Link> / <Link to="/browsecompanies">Find Companies</Link> / Single Companies
                            </Text>
                        </Col>
                    </Row>
                </div>
                <Card style={{ marginBottom: '20px', padding: '20px' }}>
                    <Row align="middle">
                        <Col span={4}>
                            <img src="https://th.bing.com/th/id/OIP.PAtSluKcOR1Qp1gLPpSaNAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7" alt="Company Logo" style={{ width: '40%' }} />
                        </Col>
                        <Col span={16} style={{ paddingLeft: '20px' }}>
                            <Title level={3}>Company Name</Title>
                            <Text type="secondary">Industry: Technology</Text>
                        </Col>
                        <Col span={4} style={{ textAlign: 'right' }}>
                            <Button type="primary">View Open Position</Button>
                        </Col>
                    </Row>
                </Card>

                <Row gutter={16}>
                    <Col span={6}>
                        <Card style={{ marginBottom: '20px' }}>
                            <Title level={4}>Description</Title>
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac augue rhoncus, sed tempor nisi tempus.
                            </Paragraph>
                        </Card>
                        <Card style={{ marginBottom: '20px' }}>
                            <Title level={4}>Company Benefits</Title>
                            <Paragraph>
                                - Health Insurance<br />
                                - Paid Time Off<br />
                                - Retirement Plan
                            </Paragraph>
                        </Card>
                        <Card style={{ marginBottom: '20px' }}>
                            <Title level={4}>Company Vision</Title>
                            <Paragraph>
                                To be the leading company in our industry, providing unparalleled service and products to our customers.
                            </Paragraph>
                        </Card>
                        <Card>
                            <Title level={4}>Share Profile</Title>
                            <Paragraph>
                                <Link href="https://www.facebook.com" target="_blank"><FacebookOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></Link>
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col span={18}>
                        <Card style={{ marginBottom: '20px' }}>
                            <Row>
                                <Col span={12}>
                                    <Title level={4}>Founded In</Title>
                                    <Paragraph>1990</Paragraph>
                                </Col>
                                <Col span={12}>
                                    <Title level={4}>Organization Type</Title>
                                    <Paragraph>Private</Paragraph>
                                </Col>
                            </Row>
                            <Divider />
                            <Row>
                                <Col span={12}>
                                    <Title level={4}>Team Size</Title>
                                    <Paragraph>200-500 Employees</Paragraph>
                                </Col>
                                <Col span={12}>
                                    <Title level={4}>Industry Types</Title>
                                    <Paragraph>Technology, Consulting</Paragraph>
                                </Col>
                            </Row>
                        </Card>
                        <Card style={{ marginTop: '20px', marginBottom: '20px' }}>
                            <Title level={4}>Contact Information</Title>
                            <Paragraph>
                                <Text strong>Website:</Text> <Link href="https://www.example.com" target="_blank">www.example.com</Link><br />
                                <Text strong>Phone:</Text> (123) 456-7890<br />
                                <Text strong>Email:</Text> contact@example.com
                            </Paragraph>
                        </Card>
                        <Card>
                            <Title level={4}>Follow Us On</Title>
                            <Paragraph>
                                <Link href="https://www.facebook.com" target="_blank"><FacebookOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></Link>
                                <Link href="https://www.instagram.com" target="_blank"><InstagramOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></Link>
                                <Link href="https://www.youtube.com" target="_blank"><YoutubeOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></Link>
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default BrowseCompaniesDetail;
