import React from 'react';
import { AppBar, Toolbar, Typography, Button, Card, CardContent, CardActions, Icon,Grid } from '@mui/material';
import { LocationOn, Work, AttachMoney } from '@mui/icons-material'; // Importing icons
import { Link } from 'react-router-dom';
import DashBoardAppbar from '../DashBoard/Appbar';
import ApplyButton from './ApplyButton';
import './Dashboard.css';


const Navbar = () => {
  // Array of job details
  const jobs = [
    {
      title: 'Software Engineer',
      location: 'New York, USA',
      experience: '3+ years',
      salary: '$90,000 - $120,000',
      detailsLink: '/job-details/1',
      applyLink:'/apply-link/1'
    },
    {
      title: 'Front-End Developer',
      location: 'San Francisco, USA',
      experience: '2+ years',
      salary: '$80,000 - $100,000',
      detailsLink: '/job-details/2',
    },
    {
      title: 'Full-Stack Developer',
      location: 'Austin, USA',
      experience: '5+ years',
      salary: '$100,000 - $130,000',
      detailsLink: '/job-details/3',
    },
    {
      title: 'Software Engineer',
      location: 'New York, USA',
      experience: '3+ years',
      salary: '$90,000 - $120,000',
    
    },
    {
      title: 'Front-End Developer',
      location: 'San Francisco, USA',
      experience: '2+ years',
      salary: '$80,000 - $100,000',
      detailsLink: '/job-details/2',
    },
    {
      title: 'Full-Stack Developer',
      location: 'Austin, USA',
      experience: '5+ years',
      salary: '$100,000 - $130,000',
      detailsLink: '/job-details/3',
    },
    
    // Add more jobs as needed
  ];

  return (
    <>
      <DashBoardAppbar />

      {/* Dashboard Content */}
      <div className="jobs-container">
        {/* Map through jobs array to render multiple cards */}
        {jobs.map((job, index) => (
          <Card key={index} sx={{ maxWidth: 345, margin: '20px' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {job.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                <LocationOn sx={{ marginRight: '5px', color: '#1976d2' }} /> {job.location}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                <Work sx={{ marginRight: '5px', color: '#1976d2' }} /> {job.experience}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                <AttachMoney sx={{ marginRight: '5px', color: '#1976d2' }} /> {job.salary}
              </Typography>
            </CardContent>
            <CardActions>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button size="small" color="secondary" component={Link} to={job.detailsLink} fullWidth>
                    View Details
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <ApplyButton applyLink={job.applyLink}/>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Navbar;
