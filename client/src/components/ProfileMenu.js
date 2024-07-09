import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  ListItemText,
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
  console.log(userInfo);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="relative inline-block ">
      <img
        src={
          userInfo.data
            ? userInfo.data.avatar
            : "https://firebasestorage.googleapis.com/v0/b/cvhub-cfde1.appspot.com/o/Avatar%2FtempAvatar.jpg?alt=media&token=1a96a9c3-e85c-4cad-b25a-6f3563cdaa39"
        }
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
