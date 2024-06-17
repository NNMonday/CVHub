import React from "react";
import MainNavbar from "../components/MainNavbar";
import { Container } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => (
  <Container
    fluid
    style={{ padding: "10px 200px" }}
    className="d-flex align-items-center justify-content-between"
  >
    <div>
      <img src={Logo} width={100} style={{ margin: "0 10px" }} alt="Logo" />
      {/* <label></label>
    <select className="h-100">
      <option>Vietnam</option>
    </select> */}
    </div>
    <div>
      <Link
        to={"/register"}
        className="btn btn-primary bg-transparent text-primary"
      >
        Sign In
      </Link>
      <Link className="btn btn-primary ms-3">Post a Job</Link>
    </div>
  </Container>
);

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      <Header />
      {children}
    </>
  );
}
