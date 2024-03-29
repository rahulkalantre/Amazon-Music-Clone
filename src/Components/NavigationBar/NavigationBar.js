import React, { useState, useEffect } from "react";
import { GoHome } from "react-icons/go";
import { MdPodcasts } from "react-icons/md";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Navbar, Nav, Form, FormControl, NavLink } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import UserIcon from "../UserIcon/UserIcon";
import logo1 from "../../Assets/Amazon-Music-Logo.png";
import logo2 from "../../Assets/Amazon-Music-Responsive-Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavigationBar/NavigationBar.css";
const NavigationBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [searchField, setSearchField] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const localData = JSON.parse(localStorage.getItem("user-info"));
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      navigate(`/search/${searchValue}`);
      setSearchValue("");
    } else {
      setExpanded((prevExpanded) => !prevExpanded);
    }
  };
  const handleSearchIconClick = () => {
    if (searchValue.trim() !== "") {
      navigate(`/search/${searchValue}`);
      setSearchValue("");
    } else {
      setExpanded((prevExpanded) => !prevExpanded);
    }
    setSearchField(false);
  };
  return (
    <>
      {window.innerWidth <= 768 ? (
        searchField ? (
          <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo2}
                alt="Amazon-Music-Logo"
                className="amazon-music-logo"
              />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link
                className="linkA"
                as={Link}
                to="/"
                onClick={() => setExpanded(false)}
              >
                <GoHome className="nav-icons" />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={
                  localData?.status === "success" ? `/podCasts` : `/aleartPage`
                }
                onClick={() => setExpanded(false)}
              >
                <MdPodcasts className="nav-icons" />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/library"
                onClick={() => setExpanded(false)}
              >
                <FaHeadphonesAlt className="nav-icons" />
              </Nav.Link>
              <BsSearch
                onClick={handleSearchIconClick}
                className="nav-icons searchIcon"
              />
              <UserIcon />
            </Nav>
          </Navbar>
        ) : (
          <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <div className="resposive-search">
              <div className = "resposive-search-bar">
                <Form onSubmit={handleSearchSubmit}>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                </Form>
              </div>
              <Nav.Link as={Link} to="/">
                <button
                  className="cancel-button"
                  onClick={() => setSearchField(true)}
                >
                  CANCEL
                </button>
              </Nav.Link>
            </div>
          </Navbar>
        )
      ) : (
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          fixed="top"
          expanded={expanded}
          onToggle={(isExpanded) => setExpanded(isExpanded)}
        >
          <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
            <img
              src={logo1}
              alt="Amazon-Music-Logo"
              className="amazon-music-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                <GoHome className="nav-icons" />
                <span className="nva-icon-text">HOME</span>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={
                  localData?.status === "success" ? `/podCasts` : `/aleartPage`
                }
                onClick={() => setExpanded(false)}
              >
                <MdPodcasts className="nav-icons" />
                <span className="nva-icon-text">PODCASTS</span>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/library"
                onClick={() => setExpanded(false)}
              >
                <FaHeadphonesAlt className="nav-icons" />
                <span className="nva-icon-text">LIBRARY</span>
              </Nav.Link>
            </Nav>
            <div className="ml-auto d-flex align-items-center main-search">
              <Form onSubmit={handleSearchSubmit}>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 search-input"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </Form>
              <BsSearch
                id="search-icon"
                className="search-icon"
                onClick={handleSearchIconClick}
              />
              <UserIcon />
            </div>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
};
export default NavigationBar;
