import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TeamSearch from './pages/TeamSearch';
import PositionSearch from './pages/PositionSearch';
import TopScorers from './pages/TopScorers';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Deep blue
      dark: '#0d1333',
      light: '#3949ab',
      contrastText: '#fff',
    },
    secondary: {
      main: '#c62828', // Deep red
      dark: '#8e0000',
      light: '#ff5f52',
      contrastText: '#fff',
    },
    warning: {
      main: '#ff9800', // Orange
      contrastText: '#fff',
    },
    info: {
      main: '#ffd600', // Gold
      contrastText: '#1a237e',
    },
    background: {
      default: 'linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #ffd600 100%)',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#1a237e',
      secondary: '#c62828',
    },
    grey: {
      900: '#212121',
      700: '#616161',
      500: '#9e9e9e',
      300: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: 'Oswald, Roboto, Arial, sans-serif',
    h1: { fontWeight: 900, letterSpacing: 1 },
    h2: { fontWeight: 800, letterSpacing: 1 },
    h3: { fontWeight: 700, letterSpacing: 1 },
    h4: { fontWeight: 700, letterSpacing: 1 },
    h5: { fontWeight: 600, letterSpacing: 1 },
    h6: { fontWeight: 600, letterSpacing: 1 },
    button: { fontWeight: 700, letterSpacing: 1 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #ffd600 100%)',
          minHeight: '100vh',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team-search" element={<TeamSearch />} />
          <Route path="/position-search" element={<PositionSearch />} />
          <Route path="/top-scorers" element={<TopScorers />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 