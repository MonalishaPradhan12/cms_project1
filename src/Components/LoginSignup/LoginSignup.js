import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css"; // Reuse or adjust your CSS here
import img_icon from "../Assets/loginIllustration.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
const LoginSignup = () => {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number:"",
    password: "",
  });

  const [message, setMessage] = useState("");

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(FormData);
    
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // setMessage(data.message);
        setMessage(`Sign-up successful! Token: `);
      } else {
        const errorData = await response.json();
        // setMessage(data.message);
        setMessage(`Sign-up failed: ${errorData.error}`);
      }
    } catch (error) {
      // setMessage(data.message);
      setMessage("An error occurred during submission.");
    }
  };

  return (
    <div className="signup">
      <div className="card main-card">
        <div className="row">
          <div className="col-md-6">
            <img
              src={img_icon}
              alt="Signup Illustration"
              style={{ width: "320px", height: "100%" }}
            />
          </div>

          <div className="col-md-6 form-section ps-2 pe-5 mt-2">
            <div className="header"></div>
            <div className="text text-center">Sign Up</div>
            <div className="underline"></div>

            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <div className="input">
                  <AccountCircleIcon />
                  <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input">
                  <EmailIcon/>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input">
                  <PhoneIcon/>
                  <input
                    type="text"
                    placeholder="Enter your Phone numeber"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input">
                  <LockIcon/>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="forgot-password">
                Already have an account? <Link to="/login">Login here</Link>
              </div>

              <div className="submit-container">
                <button className="btn btn-primary submit w-100" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
            {message && <div className="message">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
