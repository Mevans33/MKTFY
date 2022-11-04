import React from "react";
import "./login.css";
import MKTFY from "../../assets/img/MKTFY.png";

// import styles from "./login.module.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={MKTFY} alt="mktfy logo" />
      </div>
      <div className="btn-login-container">
        <button className="btn-login">Login</button>
      </div>
      <div className="btn-acc-container">
        <button className="btn-cr-acc">Create Account</button>
      </div>
      <div className="web-link-container">
        <p>Find out more about! Visit our website</p>
      </div>
    </div>
  );
};

export default Login;
