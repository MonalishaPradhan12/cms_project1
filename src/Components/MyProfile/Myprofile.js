import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import AppBar from "../DashBoard/Appbar";
import apiService from "../services/apiService";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // No need to pass token, apiService handles it
        const response = await apiService.get("/profile");

        if (response.success) {
          setUser(response.user);
          setFormData({
            username: response.user.username,
            email: response.user.email,
            phone_number: response.user.phone_number,
          });
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
    
        const response = await apiService.put("/profile", formData);
        if (response.success) {
          setUser(response.user); // Update local user state with the new data
          setIsEditing(false); // Exit editing mode
        } else {
          console.error("Failed to update user data");
        }
      
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  if (loading) {
    return <Typography>Loading profile...</Typography>;
  }

  return (
    <>
      <AppBar />
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            My Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                InputProps={{ readOnly: !isEditing }} // Editable only in editing mode
                sx={{ width: "100%" }} // Ensure full width
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                InputProps={{ readOnly: !isEditing }}
                sx={{ width: "100%" }} // Ensure full width
              />
              <TextField
                fullWidth
                margin="normal"
                label="Phone"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                InputProps={{ readOnly: !isEditing }}
                sx={{ width: "100%" }} // Ensure full width
              />
              <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 3, width: "100%",padding:'10px' }} // Ensure button is full width
            onClick={isEditing ? handleUpdate : () => setIsEditing(true)} // Update function or enter edit mode
          >
            {isEditing ? "Update" : "Edit Profile"}
          </Button>
            </Grid>
          </Grid>
          
        </Paper>
      </Container>
    </>
  );
};

export default MyProfile;
