import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignup.css"; 
import img_icon from "../Assets/loginIllustration.jpg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // To redirect after successful login

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Assuming your backend returns a token or user data upon successful login
        setMessage("Login successful!");
        
        // Store token if needed
        localStorage.setItem("token", data.token);

        // Redirect to dashboard or home page
        navigate("/dashboard");  // Redirect to any page you like after login
      } else {
        const errorData = await response.json();
        setMessage(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      setMessage("An error occurred during login.");
    }
  };

  return (
    <div className="signup">
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <img src={img_icon} alt="image" style={{ width: "320px", height: "100%" }} />
          </div>
          <div className="col-md-6 form-section ps-4 pe-5">
            <div className="header mb-5 mt-3">
              <div className="text text-center">Login</div>
              <div className="underline"></div>
            </div>
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
                  <LockIcon />
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
                Lost Password? <span>Click here</span>
              </div>
              <div className="forgot-password">
                Don't have an account? <Link to='/signup'><span>Click here</span></Link>
              </div>

              <div className="submit-container">
                <button className="btn btn-primary submit w-100" type="submit">
                  Login
                </button>
              </div>
            </form>
            
            {message && <div className="message">{message}</div>}  {/* Display login message */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
