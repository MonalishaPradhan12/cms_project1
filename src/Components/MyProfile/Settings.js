import React, { useState } from 'react';
import { Container, Paper, Typography, Switch, FormControlLabel, Button, TextField } from '@mui/material';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  // Toggle Dark Mode
  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  // Toggle Email Notifications
  const handleEmailNotificationsChange = (event) => {
    setEmailNotifications(event.target.checked);
  };

  // Handle Profile Data Changes
  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>

        {/* Profile Information Section */}
        <Typography variant="h6" gutterBottom>
          Profile Settings
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={profileData.name}
          onChange={handleProfileChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={profileData.email}
          onChange={handleProfileChange}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Save Changes
        </Button>

        {/* Notification Settings */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Notification Settings
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={emailNotifications}
              onChange={handleEmailNotificationsChange}
              name="emailNotifications"
              color="primary"
            />
          }
          label="Email Notifications"
        />

        {/* Dark Mode Switch */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Display Settings
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={handleDarkModeChange}
              name="darkMode"
              color="primary"
            />
          }
          label="Dark Mode"
        />
      </Paper>
    </Container>
  );
};

export default Settings;
