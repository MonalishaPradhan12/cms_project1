import React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <div>
    <Button variant="contained" onClick={handleLogout}>Logout <LogoutIcon/></Button>
    </div>
  );
};

export default Logout;
