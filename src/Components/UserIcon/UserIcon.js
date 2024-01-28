import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./UserIcon.css";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const localData = JSON.parse(localStorage.getItem("user-info"));

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="custom-dropdown">
      <FaUserCircle className="nav-user-icon" onClick={toggleDropdown} />
      {isDropdownOpen && (
        <div className="dropdown-content">
          {localData?.status !== "success" && (
            <Link to="/signIn">
              <div className="menu-item">Login</div>
            </Link>
          )}
          {localData?.status === "success" && (
            <Link to="/">
              <div
                className="menu-item"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Logout
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
