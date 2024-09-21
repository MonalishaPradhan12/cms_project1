import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import {
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
  Snackbar, // Import Snackbar
  Alert, // Import Alert for better message presentation
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import img_icon from "../Assets/loginIllustration.jpg";
import apiService from "../services/apiService"; // Import the common apiService

const LoginSignup = () => {
  const {   register,handleSubmit, formState: { errors }, } = useForm();

  const navigate = useNavigate(); // Initialize useNavigate
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Severity of Snackbar

  const onSubmit = async (data) => {
    console.log(data);

    try {
      // Use the common apiService post method for form submission
      const result = await apiService.post("/register", data);
      setSnackbarMessage(result.message);
      setSnackbarSeverity("success"); // Set severity to success
      setOpenSnackbar(true);

      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate("/login"); // Redirect to /login after sign-up
      }, 2000); // 2 seconds delay
    } catch (error) {
      // Handle error response
      setSnackbarMessage(`Sign-up failed: ${error.message}`);
      setSnackbarSeverity("error"); // Set severity to error
      setOpenSnackbar(true);
    }
  };

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      className="signup"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        className="card main-card"
        sx={{ maxWidth: 600, boxShadow: 3, p: 2, borderRadius: 2 }}
      >
        <Box display="flex">
          <Box flex={1} p={2}>
            <img
              src={img_icon}
              alt="Signup Illustration"
              style={{ width: "100%", height: "auto", marginTop: 45 }}
            />
          </Box>
          
          <Box flex={1} p={2}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              textAlign="center"
            >
              Sign Up
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Username Field */}
              <TextField
                fullWidth
                label="Username"
                {...register("username", { required: "Username is required" })}
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ""}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Email Field */}
              <TextField
                fullWidth
                label="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Phone Number Field */}
              <TextField
                fullWidth
                label="Phone Number"
                {...register("phone_number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                error={!!errors.phone_number}
                helperText={
                  errors.phone_number ? errors.phone_number.message : ""
                }
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Password Field */}
              <TextField
                fullWidth
                label="Password"
                type="password"
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <div className="forgot-password">
                Already have an account? <Link to="/login">Login here</Link>
              </div>
              <Box mt={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>

      {/* Snackbar for success or error message */}
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={2000} // Auto-hide after 2 seconds
        anchorOrigin={{ vertical: "top", horizontal: "right" }} // Positioning
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity} // Use the severity state
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginSignup;
