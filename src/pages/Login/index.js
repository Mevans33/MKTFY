import React from "react";
import SignupModal from "../../components/Modals/SignupModal";
import LoginModal from "../../components/Modals/LoginModal.js";
import "./login.css";
import MKTFY from "../../assets/img/MKTFY.png";

// import styles from "./login.module.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="flex-1 flex flex-col justify-center">
        <div className="logo-container">
          <img src={MKTFY} alt="mktfy logo" />
        </div>
        <div className="btn-login-container">
          <LoginModal />
        </div>
        <div className="btn-acc-container">
          <SignupModal />
        </div>
      </div>
      <div className="web-link-container">
        <p>
          Find out more about!
          <a href="https://launchpadbyvog.com/"> Visit our website</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
