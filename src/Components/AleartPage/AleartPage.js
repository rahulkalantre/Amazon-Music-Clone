import React from "react";
import { Link } from "react-router-dom";
import "../AleartPage/AleartPage.css";

const AleartPage = () => {
  return (
    <div className="container">
      <h1>Button Page</h1>
      <div className="button-container">
        <Link to="/signIn">
          <button className="custom-button primary-button">
            ALEARDY A CUSTMER SIGN IN
          </button>
        </Link>
        <Link to="/signUp">
          <button className="custom-button secondary-button">TRY NOW</button>
        </Link>
        <Link to="/">
            <div className="close-button">X</div>
        </Link>
      </div>
    </div>
  );
};

export default AleartPage;
