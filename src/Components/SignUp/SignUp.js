import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import "../SignUp/SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          method: "POST",
          headers: Header,
          body: JSON.stringify(item),
        }
      );

      let response = await getData.json();
      console.log(response);
      if (response.status === "success") {
        alert("You SingUp in Successfully");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/signIn");
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return ReactDOM.createPortal(
    <div className="signup-container">
      <div className="signup-form">
        <img src="" alt="Amazon Logo" className="amazon-logo" />
        <h1 className="signUp-heading">Create Account</h1>
        <div className="form-group">
          <label className="signUp-name">Your Name</label>
          <input
            type="text"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label className="signUp-email">Email</label>
          <input
            type="email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label className="signUp-password">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
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
    </div>,
    document.getElementById("SignUp")
  );
};

export default SignUp;
