import React from 'react';
import { TextField, Grid, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@mui/material';

const FormWithFieldset = ({title,hello}) => {
  return (
    <form>
      <Typography variant="h4" gutterBottom>
       {title}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            label={hello}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Middle Name"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            label="Last Name"
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Mobile No"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Date of Birth"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Email Id"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Years of experience"
            placeholder="If no experience, enter '0'"
            fullWidth
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Father's Name"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row name="gender" defaultValue="Male">
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Transgender" control={<Radio />} label="Transgender" />
            </RadioGroup>
          </FormControl>
        </Grid>

        
      </Grid>
    </form>
  );
};

export default FormWithFieldset;
