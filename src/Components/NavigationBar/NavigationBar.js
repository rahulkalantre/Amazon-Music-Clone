import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { MdPodcasts } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavigationBar/NavigationBar.css";

const NavigationBar = () => {
  // To change the color of nav after scrolling
  const [navicolor, setNaviColor] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const changeColor = () => {
    if (window.scrollY >= 10) {
      setNaviColor(true);
    } else {
      setNaviColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.trim() !== "") {
      navigate(`/search/${searchValue}`);
    } else {
      navigate(`/search`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Collapse
        className={
          navicolor
            ? "basic-navbar-nav basic-navbar-nav-bg"
            : "basic-navbar-nav"
        }
      >
        <div className="left-div">
          <Navbar.Brand as={Link} to="/">
            Amazon Music
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              <GoHome className="nav-icons" /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/podcasts">
              <MdPodcasts className="nav-icons" /> Podcasts
            </Nav.Link>
            <Nav.Link as={Link} to="/library">
              <FaHeadphonesAlt className="nav-icons" /> Library
            </Nav.Link>
          </Nav>
        </div>
        <div className="right-div">
          <Link to="/search">
            <Navbar.Collapse id="basic-navbar-nav">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 search-input"
                style={{ width: "200px" }}
                value={searchValue}
                onChange={handleSearchChange}
              />
              <BsSearch className="search-icon" />
            </Navbar.Collapse>
          </Link>
          <BiUserCircle className="nav-icons" />
          <NavDropdown
            id="basic-nav-dropdown"
            className="user-dropdown custom-dropdown"
          >
            <NavDropdown.Item as={Link} to="/login">
              Login
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/subscriptions">
              Subscriptions
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/logout">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
