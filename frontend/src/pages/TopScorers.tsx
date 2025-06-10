import React, { useState, useEffect, useCallback } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress
} from '@mui/material';
import axios from 'axios';

interface Player {
  name: string;
  team: string;
  pos: string;
  pts: number;
  ast: number;
}

const TopScorers = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPlayers = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/players');
      const sortedPlayers = (response.data as Player[]).sort((a: Player, b: Player) => b.pts - a.pts).slice(0, 20);
      setPlayers(sortedPlayers);
    } catch (error) {
      console.error('Error fetching players:', error);
      setError('Failed to fetch players. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '96vw',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#f2f2f2',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 4 },
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
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          color: 'primary.main',
          letterSpacing: 2,
          zIndex: 1,
        }}
      >
        Top Scorers
      </Typography>
      {error && (
        <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
          {error}
        </Typography>
      )}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: 4,
            '&:hover': {
              boxShadow: 8,
            },
            width: '100%',
            maxWidth: '100%',
            mx: 'auto',
            zIndex: 1,
          }}
        >
          <Table size="medium">
            <TableHead>
              <TableRow sx={{ background: 'linear-gradient(90deg, #1a237e 0%, #ffd600 100%)' }}>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff', fontSize: 16, width: '30%' }}>Player</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff', fontSize: 16, width: '20%' }}>Team</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff', fontSize: 16, width: '15%' }}>Position</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff', fontSize: 16, width: '17.5%' }}>Points</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff', fontSize: 16, width: '17.5%' }}>Assists</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player, index) => (
                <TableRow
                  key={player.name}
                  sx={{
                    background: index < 3 ? 'linear-gradient(90deg, #ffd60033 0%, #fff 100%)' : 'inherit',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  <TableCell sx={{ fontWeight: index < 3 ? 'bold' : 'medium', color: index < 3 ? '#ffd600' : 'primary.main' }}>{player.name}</TableCell>
                  <TableCell>{player.team}</TableCell>
                  <TableCell>{player.pos}</TableCell>
                  <TableCell sx={{ fontWeight: index < 3 ? 'bold' : 'medium', color: index < 3 ? '#ffd600' : 'primary.main' }}>{player.pts.toFixed(1)}</TableCell>
                  <TableCell>{player.ast.toFixed(1)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default TopScorers; 