import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";
import "./LoginSignup.css"; // Reuse or adjust your CSS here
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import img_icon from "../Assets/loginIllustration.jpg";
const LoginSignup = () => {
  return (
    // <div className="container">
    <div className="signup">
    <div className="card main-card">
      <div className="row">
      <div className="col-md-6">
        
        {/* <h1>career management portal</h1> */}
        <img
          src={img_icon}
          alt="image"
          style={{ width: "320px", height: "100%" }}
         
        />
      </div>

      <div className="col-md-6 form-section ps-2 pe-5 mt-2">
        <div className="header"></div>
        <div className="text text-center">Sign Up</div>
        <div className="underline"></div>

        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="User Icon" />
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              required
            />
          </div>

          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              required
            />
          </div>
        </div>

        <div className="forgot-password">
          Already have an account? <Link to="/login">Login here</Link>
        </div>

        <div className="submit-container ">
          <button className="btn btn-primary submit w-100">Sign Up</button>
          {/* <Link to="/login" className="ms-2">
            {" "}
            <button className="btn btn-primary submit">Login</button>
          </Link> */}
        </div>
      </div>
      </div>
    </div>
    </div>
    // </div>
  );
};

export default LoginSignup;
