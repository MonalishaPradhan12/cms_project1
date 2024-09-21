// ApplyButton.js
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ApplyButton = ({ applyLink }) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="primary"
      component={Link}
      to="/applyform"
      fullWidth
    >
      Apply
    </Button>
  );
};

export default ApplyButton;
