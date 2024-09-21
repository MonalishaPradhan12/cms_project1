import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
  Snackbar,
  Alert, // Import Alert for better message presentation
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import img_icon from "../Assets/loginIllustration.jpg";
import apiService from "../services/apiService"; // Import the common apiService

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); // To redirect after successful login
  const [message, setMessage] = React.useState("");
  const [snackbarOpen, setSnackbarOpen] = React.useState(false); // Snackbar state

  const onSubmit = async (data) => {
    try {
      const response = await apiService.post("/login", data);
      setMessage(response.message);
      localStorage.setItem("accesstoken", response.accessToken);
      localStorage.setItem("refreshtoken", response.refreshToken);
      // console.log(response.accessToken);
      // console.log(response.refreshToken);
      setSnackbarOpen(true); // Open the Snackbar when login is successful

      // Redirect to the dashboard after a short delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500); // 1.5 seconds delay before redirecting
    } catch (error) {
      setMessage(`Login failed: ${error.message}`);
      setSnackbarOpen(true); // Open the Snackbar on error too
    }
  };

  // Function to close Snackbar
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box
      className="login"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        className="card"
        sx={{ maxWidth: 600, boxShadow: 3, p: 2, borderRadius: 2 }}
      >
        <Box display="flex">
          <Box flex={1} p={2}>
            <img
              src={img_icon}
              alt="Login Illustration"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box flex={1} p={2}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              textAlign="center"
            >
              Login
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Field */}
              <TextField
                fullWidth
                label="Email"
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
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
                Lost Password? <span>Click here</span>
              </div>
              <div className="forgot-password">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span>Click here</span>
                </Link>
              </div>

              <Box mt={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </Box>
            </form>
          </Box>
        </Box>

        {/* Snackbar for success or error message */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000} // Automatically close after 3 seconds
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={message.startsWith("Login failed") ? "error" : "success"} // Show error or success based on message
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Login;
