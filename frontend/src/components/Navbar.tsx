import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <SportsBasketballIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NBA Fantasy Zone
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/team-search">
            Team Search
          </Button>
          <Button color="inherit" component={RouterLink} to="/position-search">
            Position Search
          </Button>
          <Button color="inherit" component={RouterLink} to="/top-scorers">
            Top Scorers
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 