import React from 'react';
import { AppBar, Toolbar, Button,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logout from '../MyProfile/Logout'
const DashBoardAppbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Dashboard Link */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
        </Typography>

        {/* Settings Link */}
        {/* <Button color="inherit" component={Link} to="/settings">
          Settings
        </Button> */}

        {/* My Profile Link */}
        <Button color="inherit" component={Link} to="/profile">
          My Profile
        </Button>

        {/* Logout Link */}
       
         <Logout/>
     
      </Toolbar>
    </AppBar>
  );
};

export default DashBoardAppbar;
