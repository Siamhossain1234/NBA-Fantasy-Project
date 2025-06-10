import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{
      background: 'linear-gradient(90deg, #1a237e 0%, #3949ab 60%, #ffd600 100%)',
      boxShadow: '0 4px 16px 0 rgba(26,35,126,0.2)',
    }}>
      <Toolbar>
        <SportsBasketballIcon sx={{ mr: 2, fontSize: 40, color: '#ff9800', filter: 'drop-shadow(0 2px 4px #21212188)' }} />
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 2, color: '#fff', textShadow: '1px 2px 8px #1a237e88' }}>
          NBA Fantasy Zone
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/" sx={{ fontWeight: 700, mx: 1, '&:hover': { color: '#ffd600', textShadow: '0 0 8px #ff9800' } }}>
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/team-search" sx={{ fontWeight: 700, mx: 1, '&:hover': { color: '#ffd600', textShadow: '0 0 8px #ff9800' } }}>
            Team Search
          </Button>
          <Button color="inherit" component={RouterLink} to="/position-search" sx={{ fontWeight: 700, mx: 1, '&:hover': { color: '#ffd600', textShadow: '0 0 8px #ff9800' } }}>
            Position Search
          </Button>
          <Button color="inherit" component={RouterLink} to="/top-scorers" sx={{ fontWeight: 700, mx: 1, '&:hover': { color: '#ffd600', textShadow: '0 0 8px #ff9800' } }}>
            Top Scorers
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 