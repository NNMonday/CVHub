import React, { useState, useEffect } from 'react';
import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Slider from 'rc-slider';
import SliderHandle from '../components/SliderHandle';
import FindJobItem from '../components/FindJobItem';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

const organizeTypes = [
  { id: 1, label: 'Goverment', checked: true },
  { id: 2, label: 'Semi Goverment', checked: false },
  { id: 3, label: 'NGO', checked: false },
  { id: 4, label: 'Private Company', checked: false },
  { id: 5, label: 'International Agencies', checked: false },
  { id: 6, label: 'Others', checked: false },
  // Add more items as needed
];

const itemsPerPage = 12; // Number of items per page

export default function FindCompany() {
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch companies data from API
    const fetchCompanies = async () => {
      try {
        const response = await axios.post('http://localhost:9999/api/company/getAllCompanies');
        setCompanies(response.data.list);
        console.log(companies);
        setPageCount(Math.ceil(response.data.list.length / itemsPerPage));
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the company data!", error);
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // Calculate start and end indices for items on the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCompanies = companies.slice(startIndex, endIndex);

  return (
    <MainLayout>
      <div style={{ padding: "10px 200px" }} className="bg-secondary-subtle">
        <div className="d-flex">
          <p className="fw-bold">Find Companies</p>
        </div>
        <div
          className="border border-1 d-flex bg-white align-items-center rounded rounded-2 p-2 justify-content-between"
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
          </div>
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
          <div className="border border-1 mx-2" style={{ height: "60%" }}></div>
          <button className='btn btn-primary' style={{ height: "56px", width: "131px", padding: "16px, 32px" }}>Find Job</button>
        </div>
      </div>

      <div style={{ padding: "10px 200px" }}>
        <div className="d-flex bg-white align-items-center rounded rounded-2 py-2 justify-content-between">
          <button className='btn btn-primary' style={{ width: "124px", height: "48px" }}>
            <i className="bi bi-sliders2-vertical"></i> Filter
          </button>
          <div className='right d-flex justify-content-between gap-3'>
            <select className="form-select" aria-label="Default select example" style={{ width: "180px", height: "48px" }}>
              <option selected>Lasted</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example" style={{ width: "180px", height: "48px" }}>
              <option selected>12 Per Page</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div style={{ padding: "8px", borderRadius: "6px" }} className='border border-1 d-flex justify-content-between gap-2'>
              <button style={{ width: "32px", height: "32px" }} className='btn btn-light d-flex align-items-center justify-content-center'>
                <i className="bi bi-grid-fill"></i>
              </button>
              <button style={{ width: "32px", height: "32px" }} className='btn d-flex align-items-center justify-content-center'>
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "10px 200px" }}>
        <div className='row py-2'>
          <div className='col-lg-3 border border-1' style={{ borderRadius: "12px", maxHeight: "436px" }}>
            <div className='' style={{ paddingTop: "32px", paddingRight: "32px", paddingBottom: "24px", paddingLeft: "32px" }}>
              <div className='d-flex'>
                <p className='fw-medium'>Location Radius: <small className='text-primary'>32 miles</small></p>
              </div>
              <SliderHandle />
            </div>

            <div className='' style={{ paddingRight: "32px", paddingBottom: "32px", paddingLeft: "32px" }}>

            <p className='fw-medium' style={{paddingTop: "24px"}}>Organize Type</p>
            <div>
              {organizeTypes.map((type) => (
                <div className="form-check" key={type.id}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="organizeType"
                    id={`organizeType${type.id}`}
                    defaultChecked={type.checked}
                  />
                  <label className="form-check-label" htmlFor={`organizeType${type.id}`}>
                    {type.label}
                  </label>
                </div>
              ))}
            </div>
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='border border-1' style={{ borderRadius: "12px" }}>
              {loading ? (
                <p>Loading...</p>
              ) : (
                currentCompanies.map((company) => (
                  <FindJobItem
                    key={company._id}
                    companyId={company._id}
                    companyName={company.company_name}
                    location={company.location}
                    openJobs={company.openJobs}
                  />
                ))
              )}
            </div>

            <div className="d-flex justify-content-center container mt-5">
              <ReactPaginate
                previousLabel={"< previous"}
                nextLabel={"next >"}
                breakLabel={"..."}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
