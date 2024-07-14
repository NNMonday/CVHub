import React, { useState } from "react";
import {
  Container,
  Form,
  Accordion,
  Button,
  Col,
  Row,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  ToggleButton,
} from "react-bootstrap";
import MainLayout from "../layouts/MainLayout";
import Job from "../components/Canidate";
// import { FaBars, FaTh } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faGrip,
  faLayerGroup,
  faList,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function BrowseCandidate() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    locationRadius: 32,
    candidateLevel: "Mid Level",
    experience: "4 - 6 Years",
    education: ["Graduation"],
    gender: "Male",
  });

  const [sortOrder, setSortOrder] = useState("Latest");
  const [itemsPerPage, setItemsPerPage] = useState("12 per page");
  const [view, setView] = useState("list");

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleSortChange = (eventKey) => {
    setSortOrder(eventKey);
  };

  const handleItemsPerPageChange = (eventKey) => {
    setItemsPerPage(eventKey);
  };

  const applyFilters = () => {
    // Apply filters logic here
    console.log("Applying filters:", filters);
    setShowFilters(false); // Optionally close the sidebar after applying filters
  };

  const data = {
    jobs: [
      {
        name: "Senior UX Designer",
        job: "Coder",
        location: "Portland",
        experience: "3 years ",
        description: `
<h5>COVER LETTER</h5>
<p>Dear Sir,</p>
<p>I am writing to express my interest in the fourth grade instructional position that is currently available in the Fort Wayne Community School System. I learned of the opening through a notice posted on JobZone, IPFW’s job database. I am confident that my academic background and curriculum development skills would be successfully utilized in this teaching position.</p>
<p>I have just completed my Bachelor of Science degree in Elementary Education and have successfully completed Praxis I and Praxis II. During my student teaching experience, I developed and initiated a three-week curriculum sequence on animal species and earth resources. This collaborative unit involved working with three other third grade teachers within my team, and culminated in a field trip to the Indianapolis Zoo Animal Research Unit.</p>
<p>Sincerely,</p>
<p>Esther Howard</p>
`,
        biogrphy: `
<h5>Biogrphy</h5>
<p>I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.</p>`,
        jobPosted: "14 June, 2021",
        jobExpire: "14 July, 2021",
        education: "Graduation",
        dateOfBirth: "14 June, 2021",
        notionality: "Bangladesh",
        marialStatus: "Single",
        gender: "Male",
        // experience: "7 Years",
        // education: "Master Degree",
        website: "www.estherhoward.com",
        phone: "+1-202-555-0141",
        emailAddress: "esther.howard@gmail.com",
        locationDetail:
          "Zone/Block Basement 1 Unit B2, 1372 Spring Avenue, Portland",
        fName: "Esther Howard",
      },
    ],
  };

  return (
    <MainLayout>
      <Container fluid>
        <div style={{ padding: "10px 200px" }} className="bg-secondary-subtle">
          <div className="d-flex">
            <p className="fw-bold">Find Companies</p>
          </div>
          <div
            className="border border-1 d-flex bg-white align-items-center rounded rounded-2 p-2"
            style={{ borderColor: "#E4E5E8" }}
          >
            <div className="d-inline-block py-2 px-3">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="me-3 text-primary"
              />
              <input
                type="text"
                placeholder="Job title, company"
                className="border-0 h-100 custom-input w-75"
              />
            </div>{" "}
            <div className="d-inline-block py-2 px-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="me-3 text-primary"
              />
              <input
                type="text"
                placeholder="Location"
                className="border-0 h-100 custom-input w-75"
              />
            </div>
            <div className="d-inline-block py-2 px-3">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="me-3 text-primary"
              />
              <select
                defaultValue={""}
                style={{ outline: "none", border: "none" }}
              >
                <option disabled hidden value="">
                  Select Category
                </option>
              </select>
            </div>
            <div
              className="border border-1 mx-2"
              style={{ height: "60%" }}
            ></div>
          </div>
        </div>
        <br />
        <div className="d-flex align-items-center justify-content-between mb-4">
          <Button
            variant="primary"
            className="d-flex align-items-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FontAwesomeIcon icon={faFilter} className="me-2" />
            Filter
          </Button>

          <div className="d-flex align-items-center">
            <DropdownButton
              id="dropdown-sort"
              title={sortOrder}
              onSelect={handleSortChange}
              variant="outline-secondary"
              className="me-2"
            >
              <Dropdown.Item eventKey="Latest">Latest</Dropdown.Item>
              <Dropdown.Item eventKey="Oldest">Oldest</Dropdown.Item>
              <Dropdown.Item eventKey="Most Popular">
                Most Popular
              </Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              id="dropdown-items-per-page"
              title={itemsPerPage}
              onSelect={handleItemsPerPageChange}
              variant="outline-secondary"
              className="me-2"
            >
              <Dropdown.Item eventKey="12 per page">12 per page</Dropdown.Item>
              <Dropdown.Item eventKey="24 per page">24 per page</Dropdown.Item>
              <Dropdown.Item eventKey="36 per page">36 per page</Dropdown.Item>
            </DropdownButton>

            <ButtonGroup>
              <ToggleButton
                id="toggle-grid"
                type="radio"
                variant="outline-secondary"
                name="radio"
                value="grid"
                checked={view === "grid"}
                onChange={(e) => setView(e.currentTarget.value)}
              >
                <FontAwesomeIcon icon={faGrip} />
              </ToggleButton>
              <ToggleButton
                id="toggle-list"
                type="radio"
                variant="outline-secondary"
                name="radio"
                value="list"
                checked={view === "list"}
                onChange={(e) => setView(e.currentTarget.value)}
              >
                <FontAwesomeIcon icon={faList} />
              </ToggleButton>
            </ButtonGroup>
          </div>
        </div>

        <Row>
          {showFilters && (
            <Col xs={12} md={3} lg={2}>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  applyFilters();
                }}
              >
                <Accordion
                  defaultActiveKey={["0", "1", "2", "3", "4"]}
                  alwaysOpen
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Location Radius: {filters.locationRadius} miles
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form.Range
                        value={filters.locationRadius}
                        onChange={(e) =>
                          handleFilterChange("locationRadius", e.target.value)
                        }
                        min="0"
                        max="100"
                      />
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Candidate Level</Accordion.Header>
                    <Accordion.Body>
                      {["Entry Level", "Mid Level", "Expert Level"].map(
                        (level) => (
                          <Form.Check
                            key={level}
                            type="radio"
                            label={level}
                            name="candidateLevel"
                            value={level}
                            checked={filters.candidateLevel === level}
                            onChange={(e) =>
                              handleFilterChange(
                                "candidateLevel",
                                e.target.value
                              )
                            }
                          />
                        )
                      )}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Experiences</Accordion.Header>
                    <Accordion.Body>
                      {[
                        "Freshers",
                        "1 - 2 Years",
                        "2 - 4 Years",
                        "4 - 6 Years",
                        "6 - 8 Years",
                        "8 - 10 Years",
                        "10 - 15 Years",
                        "15+ Years",
                      ].map((exp) => (
                        <Form.Check
                          key={exp}
                          type="radio"
                          label={exp}
                          name="experience"
                          value={exp}
                          checked={filters.experience === exp}
                          onChange={(e) =>
                            handleFilterChange("experience", e.target.value)
                          }
                        />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Education</Accordion.Header>
                    <Accordion.Body>
                      {[
                        "All",
                        "High School",
                        "Intermediate",
                        "Graduation",
                        "Master Degree",
                        "Bachelor Degree",
                      ].map((edu) => (
                        <Form.Check
                          key={edu}
                          type="checkbox"
                          label={edu}
                          value={edu}
                          checked={filters.education.includes(edu)}
                          onChange={(e) => {
                            const newEducation = e.target.checked
                              ? [...filters.education, e.target.value]
                              : filters.education.filter(
                                  (item) => item !== e.target.value
                                );
                            handleFilterChange("education", newEducation);
                          }}
                        />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Gender</Accordion.Header>
                    <Accordion.Body>
                      {["Male", "Female", "Others"].map((gen) => (
                        <Form.Check
                          key={gen}
                          type="radio"
                          label={gen}
                          name="gender"
                          value={gen}
                          checked={filters.gender === gen}
                          onChange={(e) =>
                            handleFilterChange("gender", e.target.value)
                          }
                        />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Button variant="primary" type="submit" className="mt-3 w-100">
                  Apply Filters
                </Button>
              </Form>
            </Col>
          )}
          <Col xs={12} md={showFilters ? 9 : 12} lg={showFilters ? 10 : 12}>
            {view === "grid" ? (
              <Row xs={1} md={2} lg={3} className="g-4">
                {data.jobs.map((j) => (
                  <Col key={j.id}>
                    <Job {...j} />
                  </Col>
                ))}
              </Row>
            ) : (
              data.jobs.map((j) => <Job key={j.id} {...j} />)
            )}
          </Col>
        </Row>
        <br />
      </Container>
    </MainLayout>
  );
}
