import React from "react";
import Button from "../../components/Button/Button.jsx";
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
          <Button
            onClick={() => {
              console.log("Clicked on");
            }}
            type="button"
            buttonStyle="btn--secondary--solid"
            buttonSize="btn--large"
          >
            Login
          </Button>
        </div>
        <div className="btn-acc-container">
          <Button
            onClick={() => {
              console.log("Clicked on");
            }}
            type="button"
            buttonStyle="btn--primary--solid"
            buttonSize="btn--large"
          >
            Create Account
          </Button>
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
