import React from "react";
import MainNavbar from "../components/MainNavbar";
import { Container } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function MainLayout({ children }) {
  const Header = () => (
    <Container
      fluid
      style={{ padding: "18px 200px" }}
      className="d-flex align-items-center justify-content-between"
    >
      <div className="d-flex flex-grow-1">
        <div className="d-flex align-items-center">
          <img src={Logo} width={100} style={{ margin: "0 10px" }} alt="Logo" />
        </div>
        <div
          className="border border-1 d-flex ms-3 w-50 align-items-center"
          style={{ borderColor: "#E4E5E8" }}
        >
          <select name="" id="" className="border-0 py-2 px-3">
            <option value="">Hanoi</option>
          </select>
          <div className="border border-1 mx-2" style={{ height: "60%" }}></div>
          <div className="d-inline-block py-2 px-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="me-3" />
            <input
              type="text"
              placeholder="Job title, company"
              className="border-0 h-100 custom-input w-75"
            />
          </div>
        </div>
      </div>

      <div>
        <Link
          to={"/register"}
          className="btn btn-primary bg-transparent text-primary"
        >
          Sign In
        </Link>
        <Link className="btn btn-primary ms-2">Post a Job</Link>
      </div>
    </Container>
  );

  return (
    <>
      <MainNavbar />
      <Header />
      {children}
    </>
  );
}
