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
  age: number;
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
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        px: { xs: 1, sm: 2, md: 4 },
        py: { xs: 2, sm: 4 },
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
            boxShadow: 2,
            '&:hover': {
              boxShadow: 4,
            },
            width: '100%',
            maxWidth: '1600px',
            mx: 'auto',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Rank</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Player</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Team</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Position</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>Points per Game</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player, index) => (
                <TableRow
                  key={player.name}
                  sx={{
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell sx={{ fontWeight: 'medium' }}>{player.name}</TableCell>
                  <TableCell>{player.team}</TableCell>
                  <TableCell>{player.pos}</TableCell>
                  <TableCell>{player.age}</TableCell>
                  <TableCell align="right">{player.pts.toFixed(1)}</TableCell>
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