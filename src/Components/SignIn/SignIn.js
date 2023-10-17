import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "../SignIn/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function AmazonMusicSingIn() {
    try {
      let item = {
        email: email,
        password: password,
        appType: "music",
      };
      const Header = {
        "Content-Type": "application/json",
        projectID: "edlpgt620a4c",
      };
      let getData = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: Header,
          body: JSON.stringify(item),
        }
      );

      let response = await getData.json();
      console.log(response);
      if (response.status == "success") {
        localStorage.setItem("user-info", JSON.stringify(response));
        alert("You are Logging in Successfully");
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return ReactDOM.createPortal(
    <div className="signin-container">
      <div className="signin-form">
        <img
          src="https://music.amazon.in/genres/tsEfDAOd"
          alt="Amazon Logo"
          className="amazon-logo"
        />
        <h1>Sign-In</h1>
        <div className="form-group">
          <label>Email or mobile phone number</label>
          <input
            type="text"
            placeholder="Enter your email or phone number"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className="signin-button" onClick={AmazonMusicSingIn}>
          Sign-In
        </button>
        <div className="help-links">
          <a href="#">Forgot your password?</a>
          <span> | </span>
          <a href="#">Need help?</a>
        </div>
        <Link to="/signup">
          <div className="new-to-amazon">
            <small>New to Amazon?</small>
            <a href="#">Create your Amazon account</a>
          </div>
        </Link>
      </div>
    </div>,
    document.getElementById("SignIn")
  );
};

export default SignIn;
