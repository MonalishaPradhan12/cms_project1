
import React from "react";
import { Card, CardContent, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
const FormCard = ({title}) => {
  return (
    <>
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          <PersonIcon/>{title}
        </Typography>
      </CardContent>
      </Card>
    </>
  );
}

export default FormCard;
