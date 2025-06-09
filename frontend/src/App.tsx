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
    },
    secondary: {
      main: '#c62828', // Deep red
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