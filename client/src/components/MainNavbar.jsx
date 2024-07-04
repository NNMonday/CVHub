import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import English from "../assets/Icons/united-states.png";


const MyNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "navlink-active navlink-default"
        : "text-secondary navlink-default"
    }
  >
    {children}
  </NavLink>
);

export default function MainNavbar() {
  return (
    <Container
      fluid
      className="bg-secondary-subtle d-flex align-items-center justify-content-between"
      style={{ padding: "0 200px" }}
    >
      <nav className="d-inline-block">
        <MyNavLink to={"/"}>Home</MyNavLink>
        <MyNavLink to={"/find/job"}>Find Job</MyNavLink>
        <MyNavLink to={"/pricing"}>Pricing Plans</MyNavLink>
        <MyNavLink to={"/support"}>Customer Supports</MyNavLink>
      </nav>
      <nav className="d-inline-block">
        <span>
          <FontAwesomeIcon icon={faPhoneVolume} />
          +84-202-555-0178
        </span>
        <div className="ms-3 d-inline-block">
          <label htmlFor="language">
            <img src={English} width={25} alt="english" />
          </label>
          <select className="border-0 bg-transparent" id="language">
            <option>English</option>
          </select>
        </div>
      </nav>
    </Container>
  );
}
