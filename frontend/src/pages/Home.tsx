import React from 'react';
import { Typography, Box, Card, CardContent, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Top Scorers',
      description: "View the NBA's leading scorers",
      path: '/top-scorers',
    },
    {
      title: 'Team Search',
      description: 'Find players by team',
      path: '/team-search',
    },
    {
      title: 'Position Search',
      description: 'Search players by position',
      path: '/position-search',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#f2f2f2',
        boxSizing: 'border-box',
        py: { xs: 2, sm: 4 },
        px: 0,
        position: 'relative',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url(/basketball-watermark.png) center/40vw no-repeat',
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: 'none',
        },
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          mb: 6,
          fontWeight: 'bold',
          color: 'primary.main',
          letterSpacing: 2,
          zIndex: 1,
        }}
      >
        Welcome to BBall Fantasy Zone
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: 4,
          width: '100%',
          boxSizing: 'border-box',
          zIndex: 1,
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, type: 'spring', stiffness: 200 }}
            style={{
              flex: '1 1 clamp(260px, 30vw, 400px)',
              maxWidth: '400px',
              minWidth: '200px',
              display: 'flex',
              height: '320px',
              boxSizing: 'border-box',
            }}
          >
            <Card
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 6,
                border: '3px solid',
                borderColor: index === 0 ? 'secondary.main' : index === 1 ? 'primary.main' : 'warning.main',
                background: 'linear-gradient(120deg, #fff 60%, #ffd60022 100%)',
                '&:hover': {
                  boxShadow: 12,
                  background: 'linear-gradient(120deg, #fff 40%, #ff980022 100%)',
                },
                boxSizing: 'border-box',
              }}
            >
              <CardActionArea
                onClick={() => navigate(feature.path)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    p: 4,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: 'primary.main', letterSpacing: 1 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Home; 