import React from "react";
import MainNavbar from "../components/MainNavbar";
import { Container } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ProfileMenu from "../components/ProfileMenu.js";

import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  bottomNavigationActionClasses,
} from "@mui/material";
import { FaAddressBook, FaCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { useEffect, useState, useCallback } from "react";
import Logout from "../utilities/LogOut.js";
import PerformRequest from "../utilities/PerformRequest.js";
import Footer from "../components/Footer.jsx";

export default function MainLayout({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const expanded = useSelector((state) => state.sideBar.expanded);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const [anchorProfile, setAnchorProfile] = useState(null);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  const openMenu = (e) => {
    setOpenProfileMenu(true);
    setAnchorProfile(e.currentTarget);
  };
  const closeMenu = (e) => {
    setOpenProfileMenu(false);
    setAnchorProfile(null);
  };
  const { performLogOut } = Logout();

  const [location, setLocation] = useState([]);
  const [jobName, setJobName] = useState("");
  const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await OriginalRequest("location/getAllLocation", "GET");
        if (data) {
          console.log("Locations fetched:", data);
          setLocation(data);
        }
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };
    fetchLocations();
  }, [OriginalRequest]);

  const Header = () => (
    <Container
      fluid
      style={{
        padding: "28px 200px",
      }}
      className="d-flex justify-content-between align-items-center"
    >
      <div className="d-flex align-items-center">
        <img src={Logo} width={100} style={{ margin: "0 10px" }} alt="Logo" />
      </div>
      {/* <div
        className="border border-1 d-flex w-50 align-items-center"
        style={{ borderColor: "#E4E5E8" }}
      > */}
        {/* <select
          value={location[1]}
          onChange={(e) => setLocation(e.target.value)}
          className="border-0 py-2 px-3"
        >
          <option value="">Select Location</option>
          {location.map((role) => (
            <option key={role._id} value={role._id}>
              {role.location_name}
            </option>
          ))}
        </select>
        <div className="border border-1 mx-2" style={{ height: "60%" }}></div>
        <div className="d-inline-block py-2 px-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="me-3" />
          <input
            type="text"
            placeholder="Job title, company"
            className="border-0 h-100 custom-input w-75"
          />
        </div> */}
      {/* </div> */}
      <div className="d-flex align-items-center">
        {isLoggedIn ? (
          <ProfileMenu avatar performLogOut={performLogOut} />
        ) : (
          <div className="d-flex align-items-center ml-5">
            <Link to="/login" className="mr-2">
              <button className="btn btn-primary bg-transparent text-primary">
                Login
              </button>
            </Link>
            <Link to="/register" className="btn btn-primary ms-2">
              Sign Up
            </Link>
          </div>
        )}
        <Link className="btn btn-primary ms-2">Post a Job</Link>
      </div>
    </Container>
  );

  return (
    <>
      <MainNavbar />
      <Header />
      {children}
      <Footer />
    </>
  );
}
