import React from "react";
import MainNavbar from "../components/MainNavbar";
import { Container } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { FaAddressBook, FaCircleUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { useEffect, useState, useCallback } from "react";
import Logout from "../utilities/LogOut.js";
import PerformRequest from "../utilities/PerformRequest.js";



export default function MainLayout({ children }) {
  const OriginalRequest = useCallback(PerformRequest().OriginalRequest, []);

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

  const profile_picture = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8AAAD8/Pyrq6u+vr6ysrIiIiIICAgnJyfy8vIVFRXBwcHt7e34+Pi3t7fLy8vW1tZ6enpXV1fl5eWkpKTe3t5MTEyenp6SkpIyMjKEhISMjIx0dHRlZWU6OjpdXV2ilmboAAAD40lEQVR4nO2d25bqIAyGG+qpKtNaq63n93/LDVVG21LHA6uQ7HxrzQ3OYP4pEgghRlGTCcBcNJtmANMIJSwmVFhMqGgxrSbcYpIGArUYCyzGP9TEzKV4BPkEQGpqZjEhwmJChcWECosJFRYTKnpZKbpNfoz5lqXi7yaGYRiGcU268m2BO/YAqW8bnDFCu6ixcQKgM9AkUBpoPwAT3za4Iwc4+LbBGYkaaJlvI5wRA5x92+COLUDp2wZnrNVAW/s2whklqYF2Bih82+CMjRpodMIbB4CtbxvcMQMY+7bBGZkaaIlvI5yxAjj5tsEd6tEsfNvgjFSpkb6NcMYR4OjbBmeQ26e1s9IQcwHY+7bBGUtq+7SZbxvcofZpla19g/GB6YG26TYXqjke3ppvse/TrpmDJTqferYFBPJbIuQB2aZnYwsIyKPJ61zhChZU1n3acm/knFDNBT37tKQycraIFj29+zRRGDnn0dBGfYwaUXnPS2OTIT1Bs8meA/T+6xdn83hK0fc7QZE+DQikWyOnQhE1OEL+zKNkJyMHw2FI8tcnYm0cD41A6PJwdaK+7XCELO2rUqSIFMUMwDAMQwp96a7VJIT8fIEpRTuMoHr7or93iLWPb66fZaflDcbdII9u+vm0v7ffvJV371rMzzf9vf3mreUXdjGN8DNqMbuZ+nlowi1G7zofooKoxUAdzbxvO5GL0bH0e1QQuRgdS7+7Auxiot2Ds0EvRoc4zaE6ejE6FcUcqn8tppCPdUlkPLgYAb/O5i5mPVq8zigx/VkYVkx9ZaBsiSntlvWQhSOmdjZrKmJ+nc1dTFbEr1MsTX9x1KhLMvwEEF2fwziiMJtptLORVMTcnA0NMTdnQ0SMnOoMLkFDTO1sqqdHhK/0F4iYq7PZERGjnU2+JSLGOH0aYmpnQ0ZMhlhM3BZTO5vPw6m6v9bx9HDhWdkpGiJ0HZGPc+hk948tTQzDMMz/gKxwJPq9RAVTREmyz9HLfWTp5f1cCF2rTylV1tgRurQZE7q3rYNjZJIv93SyYuuaGmQ2TDmV3Ouonpbp3G+cELriXABcfNvgCj0t47ok94QjocvaG0rT8hblvV87o2beH27mhKblklDxGVJ75WNPaQOMZJ3jGMSchzr3GYAxpWJ6QKhOy4FQqSZS0zKHMAPlm/ye0KAWwiSzV6YUwiS1V+YQZqBQCmGmhEKYalmWkzlZYhiGYbwgbIU9OsU5kDCFzldQztGGL0l9OSiLCRUWEyosJlRYTKhMut/FgFvM8rEQRyJQi7HAYvxDTYyazRqVOFB/ZmhNzSwmRFhMqLCYUGExocJiQuEf/TgnS7ueP+gAAAAASUVORK5CYII=";

  const [location, setLocation] = useState([]);
  const [jobName, setJobName] = useState('');

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await OriginalRequest(
          'location/getAllLocation',
          'GET'
        );
        if (data) {
          console.log('Locations fetched:', data);
          setLocation(data);
        }
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      }
    };
    fetchLocations();
  }, [OriginalRequest]);



  const Header = () => (
    <Container
      fluid
      style={{ padding: "18px 200px" }}
      className="d-flex justify-content-between align-items-center"
    >
      <div className="d-flex align-items-center">
        <img src={Logo} width={100} style={{ margin: "0 10px" }} alt="Logo" />
      </div>
      <div className="border border-1 d-flex w-50 align-items-center" style={{ borderColor: "#E4E5E8" }}>
        <select
          value={location}
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
          </div>
      </div>

      <div className="d-flex align-items-center">
        {isLoggedIn ? (
          <div className="d-flex align-items-center ml-5">
            <img
              src={profile_picture}
              className="w-10 h-10 object-center object-cover rounded-full border-orange-200 dark:bg-dark10 shadow-lg border-2"
              style={{ width: '40px', height: '40px' }}
              onClick={(e) => {
                openMenu(e);
              }}
            />
            <Menu
              className="mt-3"
              open={openProfileMenu}
              anchorEl={anchorProfile}
              onClose={closeMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              autoFocus={false}
            >
              <MenuItem>
                <Link to={"/profile"} className="flex items-center">
                  <ListItemIcon>
                    <FaCircleUser />
                  </ListItemIcon>
                  <ListItemText>Your profile</ListItemText>
                </Link>
              </MenuItem>
              <Divider />

              <MenuItem
                onClick={(e) => {
                  performLogOut(e);
                }}
              >
                <ListItemIcon>
                  <IoLogOut />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="d-flex align-items-center ml-5">
            <Link to={"/login"} className="mr-2">
              <button className="btn btn-primary bg-transparent text-primary">
                Login
              </button>
            </Link>
            <Link to={"/register"} className="btn btn-primary ms-2">
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
    </>
  );
}
