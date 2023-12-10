import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { MdPodcasts } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserIcon from "../UserIcon/UserIcon";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavigationBar/NavigationBar.css";
const NavigationBar = () => {
  const [navCollapse, setNavCollapse] = useState(false);
  const [navicolor, setNaviColor] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const localData = JSON.parse(localStorage.getItem("user-info"));

  // const changeColor = () => {
  //   if (window.scrollY >= 10) {
  //     setNaviColor(true);
  //   } else {
  //     setNaviColor(false);
  //   }
  // };
  // window.addEventListener("scroll", changeColor);
  const handleNavbarHide = () => {
    // Close the navbar toggle when it hides
    setNavCollapse(false);
    // history.push('/');
  };

  const handleToggleClick = () => {
    // Toggle between true and false on each click
    setNavCollapse((prevNavCollapse) => !prevNavCollapse);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.trim() !== "") {
      navigate(`/search/${searchValue}`);
    } else {
      navigate(`/search`);
    }
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">
        Amazon Music
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={handleToggleClick}
      />
      <Navbar.Collapse
        className={navCollapse}
        onClick={handleNavbarHide}
      >
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <GoHome className="nav-icons" /> Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={localData?.status === "success" ? `/podCasts` : `/aleartPage`}
          >
            <MdPodcasts className="nav-icons" /> Podcasts
          </Nav.Link>
          <Nav.Link as={Link} to="/library">
            <FaHeadphonesAlt className="nav-icons" /> Library
          </Nav.Link>
        </Nav>
        <div className="ml-auto d-flex align-items-center main-search">
          <Link
            to={localData?.status === "success" ? `/search` : `/aleartPage`}
            className="d-flex align-items-center"
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 search-input"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <BsSearch className="search-icon" />
          </Link>
          <UserIcon />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavigationBar;
