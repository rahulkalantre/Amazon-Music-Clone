import React, { useEffect, useState } from "react";
import { ApiUrl } from "../../Data/ApiUrl";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Toaster from "../../Assets/Toster";
import logo from "../../Assets/logo.png"
import "../SignUp/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [toast, setToast] = useState({
    status: "",
    message: "",
  });
  const [isMessageShown, setIsMessageShown] = useState(false);
  async function AmazonMusicSingUP() {
    try {
      let item = {
        name: name,
        email: email,
        password: password,
        appType: "music",
      };
      const Header = {
        "Content-Type": "application/json",
        projectId: "edlpgt620a4c",
      };
      let getData = await fetch(
        ApiUrl.signUp,
        {
          method: "POST",
          headers: Header,
          body: JSON.stringify(item),
        }
      );

      let response = await getData.json();
      console.log(response);
      if (response.status === "success") {
        setToast({
          status: "success",
          message: "You are SignIn in Successfully!",
        });
        setIsMessageShown(true);
        setName("");
        setEmail("");
        setPassword("");
        setTimeout (() => {
          navigate("/signIn");
        }, 1000);
      } else {
        setIsMessageShown(true);
        setToast({
          status: "error",
          message: response.message,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  return ReactDOM.createPortal(
    <div className="signup-container">
      <div className="signup-form">
        <img src={logo} alt="Amazon Logo" className="amazon-logo" />
        <h1 className="signUp-heading">Create Account</h1>
        <div className="form-group">
          <label className="signUp-name">Your Name</label>
          <input
            type="text"
            placeholder="Your name"
            onChange={(e) => { setIsMessageShown(false), setName(e.target.value) }}
            value={name}
          />
        </div>
        <div className="form-group">
          <label className="signUp-email">Email</label>
          <input
            type="email"
            placeholder="Your email"
            onChange={(e) => {setIsMessageShown(false), setEmail(e.target.value)}}
            value={email}
          />
        </div>
        <div className="form-group">
          <label className="signUp-password">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            onChange={(e) => {setIsMessageShown(false), setPassword(e.target.value)}}
            value={password}
          />
        </div>
        <button className="signup-button" onClick={AmazonMusicSingUP}>
          Create your Amazon account
        </button>
        <Link to="/signIn">
        <p className="login-info">
          Already have an account? <a href="/signin">Sign in</a>
        </p>
        </Link>
      </div>
      {/* {toast.status == "success" ||
      toast.status == "error" ||
      toast.status == "workingOn"  */}
      {isMessageShown ? (
        <Toaster status={toast.status} message={toast.message} />
      ) : (
        ""
      )}
    </div>,
    document.getElementById("SignUp")
  );
};

export default SignUp;
