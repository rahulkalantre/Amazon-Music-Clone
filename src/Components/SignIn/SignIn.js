import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom";
import "../SignIn/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const notify = () => {
    toast.error("Wow so easy!", {autoClose: 5000});
  };

  async function AmazonMusicSingIn() {
    toast.error("Wow so easyyyyy!", {autoClose: 5000});

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
      toast.error("Wow so easy!", {autoClose: 5000});
      if (response.status == "success") {
        localStorage.setItem("user-info", JSON.stringify(response));
        // alert("You are Logging in Successfully");
        notify()
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
    <>
      <div className="signin-container">
        <div className="signin-form">
          <img
            src={logo}
            alt="Amazon Logo"
            className="amazon-logo"
          />
          <h1 className="signIn-heading">Sign-In</h1>
          <div className="form-group">
            <label className="signIn-email">Email or mobile phone number</label>
            <input
              type="text"
              placeholder="Enter your email or phone number"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label className="signIn-password">Password</label>
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
      </div>

    </>,
    document.getElementById("SignIn")
  );
};

export default SignIn;
