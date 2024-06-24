import React from "react";
import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Job from "../components/Job";

export default function FindJob() {
  const data = {
    jobs: [
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
      },
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
      },
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
      },
      {
        name: "Senior UX Designer",
        work_status: "Fulltime",
        location: "Hanoi",
        salary: "50000000",
        deadline: "2024-06-30T00:00:00Z",
      },
    ],
  };
  return (
    <MainLayout>
      <div style={{ padding: "10px 200px" }} className="bg-secondary-subtle">
        <div className="d-flex">
          <p className="fw-bold">Find Job</p>
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
          <div className="border border-1 mx-2" style={{ height: "60%" }}></div>
        </div>
      </div>
      <div>
        {data.jobs.map((j) => (
          <Job {...j} />
        ))}
      </div>
    </MainLayout>
  );
}
