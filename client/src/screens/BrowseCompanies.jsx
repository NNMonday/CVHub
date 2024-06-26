import React from 'react';
import { Layout, Radio, Button, List, Card, Select, Row, Col, Input, Avatar } from 'antd';
import MainNavbar from '../components/MainNavbar';
import { Breadcrumb, Container } from 'react-bootstrap';
import MainLayout from '../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';
import { FaLocationArrow, FaSearch } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const { Content, Sider } = Layout;
const { Option } = Select;
const { Search } = Input;

const dataFake = [
  {
    _id: "1",
    logo: 'https://via.placeholder.com/50',
    name: 'Application 1',
    location: 'New York, USA',
  },
  {
    _id: "2",
    logo: 'https://via.placeholder.com/50',
    name: 'Application 2',
    location: 'London, UK',
  },
  {
    _id: "3",
    logo: 'https://via.placeholder.com/50',
    name: 'Application 3',
    location: 'Tokyo, Japan',
  },
  {
    _id: "4",
    logo: 'https://via.placeholder.com/50',
    name: 'Application 4',
    location: 'Paris, France',
  },
  {
    _id: "5",
    logo: 'https://via.placeholder.com/50',
    name: 'Application 5',
    location: 'Berlin, Germany',
  },
];

const BrowseCompanies = () => {

  const navigate = useNavigate()

  return (
    <MainLayout>
      <div style={{ backgroundColor: "#F1F2F4" }}>
        <Container fluid style={{ padding: "70px 200px" }}>
          <Row justify="space-between" style={{ marginBottom: '20px' }}>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <h2>Find Companies</h2>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col xs={24} sm={12} md={8} lg={6} xl={9}>
              <Input prefix={<div style={{ width: "35px", display: "flex", justifyItems: "center" }}><FaSearch color='#0A65CC' style={{ paddingRight: "2px" }} /></div>} placeholder="Job title, keyword" style={{
                padding: "12px",
                fontSize: "24px",
                borderRadius: 0,
                borderRight: "0px"
              }} />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <Input placeholder="Location" prefix={<div style={{ width: "35px", display: "flex", justifyItems: "center" }}><FaLocationDot color='#0A65CC' /></div>} style={{
                padding: "12px",
                fontSize: "24px",
                borderRadius: 0
              }} />
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <Select size='large' placeholder="Select Category" style={{
                width: '100%',
                height: "65px",
                border: 0,
                borderRadius: 0
                
                
              }}>
                <Option value="category1">Category 1</Option>
                <Option value="category2">Category 2</Option>
                <Option value="category3">Category 3</Option>
              </Select>
            </Col>
            <Col xs={12} sm={4} md={3} lg={2} xl={3}>
              <Button type="primary" height={65} style={{
                height: "65px",
                fontSize: "20px",
                border: 0,
                borderRadius: 0,
              }} block>Find Job</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid style={{ padding: "70px 200px" }}>
        <div style={{
          display: "flex",
          justifyContent: "end",
          marginBottom: "40px",
        }}>
          <Select defaultValue="latest">
            <Option value="latest">Latest</Option>
            <Option value="oldest">Oldest</Option>
          </Select>
          <Select defaultValue="12" style={{ width: 120 }}>
            <Option value="12">12 per page</Option>
            <Option value="24">24 per page</Option>
            <Option value="36">36 per page</Option>
          </Select>
        </div>

        <div>
          <Row gutter={[16]} justify="between">
            <Col span={7} style={{ padding: '20px', border: "1px solid #d9d9d9", borderRadius: "8px" }}>
              <h3>Organization Type</h3>
              <Radio.Group
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '20px',
                }}
              >
                <Radio value="government">Government</Radio>
                <Radio value="semiGovernment">Semi Government</Radio>
                <Radio value="ngo">NGO</Radio>
                <Radio value="privateCompany">Private Company</Radio>
                <Radio value="internationalAgencies">International Agencies</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Col>
            <Col span={16} style={{ marginLeft: "30px" }}>
              <List
                header={<div style={{ fontWeight: 'bold' }}>Applications</div>}
                dataSource={dataFake}
                renderItem={(item) => (
                  <List.Item key={item?.name}>
                    <Card style={{ width: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={item?.logo} size={64} style={{ marginRight: '20px' }} />
                        <div style={{ flex: 1 }}>
                          <h4 style={{ margin: 0 }}>{item?.name}</h4>
                          <p style={{ margin: 0, color: '#888' }}>{item?.location}</p>
                        </div>
                        <Button
                          type="primary"
                          onClick={() => navigate(`/browsecompanies/${item?._id}`)}
                        >
                          Open Position
                        </Button>
                      </div>
                    </Card>
                  </List.Item>
                )}
                itemLayout="horizontal"
                bordered
              />
            </Col>
          </Row>
        </div>
      </Container>
    </MainLayout >)
};

export default BrowseCompanies;