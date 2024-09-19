import React from 'react';
import { Container, Typography, Paper, Grid, Avatar, TextField, Button } from '@mui/material';
// import { Edit as EditIcon } from '@mui/icons-material';
import AppBar from '../DashBoard/Appbar';

const Myprofile = () => {
  // Example user data
  const user = {
    name: 'Monalisha Pradhan',
    email: 'monalishapradhan040@example.com',
    phone: '+1234567890',
    address: '123 Main St, Springfield',
    avatar: '/static/images/avatar/1.jpg', // Replace with actual path or URL
  };

  return (
    <>
    <AppBar/>
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={4} container justifyContent="center">
            <Avatar
              alt={user.name}
              src={user.avatar}
              sx={{ width: 120, height: 120 }}
            />
          </Grid> */}
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              value={user.name}
              InputProps={{ readOnly: true }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              value={user.email}
              InputProps={{ readOnly: true }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone"
              value={user.phone}
              InputProps={{ readOnly: true }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Address"
              value={user.address}
              InputProps={{ readOnly: true }}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          // startIcon={<EditIcon />}
          sx={{ marginTop: 3 }}
          href="/" // Link to the profile edit page
        >
          Edit Profile
        </Button>
      </Paper>
    </Container>
    </>
  );
};

export default Myprofile;
