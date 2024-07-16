import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  // ListItemText,
} from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { useSelector } from "react-redux";

const ProfileMenu = ({ performLogOut }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const userInfo = useSelector((state) => state.auth.userInfo);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className="relative inline-block overflow-hidden"
      style={{ borderRadius: "50%" }}
    >
      <img
        src={userInfo.data.avatar}
        alt="profile"
        className="w-8 h-8 rounded-full cursor-pointer border-2 border-orange-200 shadow-lg"
        onClick={handleClick}
        style={{ width: "40px", height: "40px" }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="mt-2"
        MenuListProps={{
          className: "p-2 bg-white shadow-lg rounded-md",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose} className="flex items-center">
          <ListItemIcon>
            <FaUserCircle />
          </ListItemIcon>
          <Link to="/account/dashboard/overview" className="text-gray-700">
            Your profile
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose();
            performLogOut();
          }}
          className="flex items-center"
        >
          <ListItemIcon>
            <IoLogOut />
          </ListItemIcon>
          <span className="text-gray-700">Logout</span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
