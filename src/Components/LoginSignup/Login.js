import React from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css"; // Reuse or adjust your CSS here
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";
import img_icon from "../Assets/loginIllustration.jpg";
const Login = () => {
  return (
    <div className="signup">
    <div className="card">
      <div className="row">
      <div className="col-md-6">
      <img
          src={img_icon}
          alt="image"
          style={{ width: "320px", height: "100%" }}
         
        />
      </div>
      <div className="col-md-6 form-section ps-4 pe-5">
        <div className="header mb-5 mt-3 ">
        <div className="text text-center">Login</div>
        <div className="underline"></div>
        </div>
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
          Lost Password? <span>Click here</span>
        </div>
        <div className="forgot-password">
          Don't have an account? <Link to='/signup'><span>Click here</span></Link>
        </div>
{/* 
        <div className="submit-container d-flex justify-content-between">
          <button className="btn btn-primary btn-sm submit">Login</button>
          <Link to="/signup" className="ms-2">
            {" "}
          
            <button className="btn btn-primary btn-sm submit">Sign Up</button>
          </Link>
        </div> */}
        <div className="submit-container">
          <button className="btn btn-primary  submit w-100">Login</button>
          {/* <Link to="/signup"className="ms-2">
            {" "}
            <button className="btn btn-primary  submit">Sign up</button>
          </Link> */}
        </div>  
      </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
