import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
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
  reb: number; // rebounds per game
  ast: number; // assists per game
  fgPct: number; // field goal percentage
  threePct: number; // three-point percentage
  ftPct: number; // free throw percentage
}

const positions = ['PG', 'SG', 'SF', 'PF', 'C'];

const PositionSearch = () => {
  const [position, setPosition] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePositionChange = async (newPosition: string) => {
    setPosition(newPosition);
    if (!newPosition) {
      setPlayers([]);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:8080/api/players/position/${newPosition}`);
      setPlayers(response.data as Player[]);
    } catch (err) {
      setError('Failed to fetch players. Please try again.');
      console.error('Error fetching players:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        boxSizing: 'border-box',
        py: { xs: 2, sm: 4 },
        px: 0,
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
        Position Search
      </Typography>
      <Box
        sx={{
          mb: 4,
          width: '100%',
          maxWidth: 400,
          mx: 'auto',
        }}
      >
        <FormControl fullWidth size="medium">
          <InputLabel>Select Position</InputLabel>
          <Select
            value={position}
            label="Select Position"
            onChange={(e) => handlePositionChange(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {positions.map((pos) => (
              <MenuItem key={pos} value={pos}>
                {pos}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 4,
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          {players.map((player) => (
            <Box
              key={player.name}
              sx={{
                flex: '1 1 clamp(260px, 30vw, 400px)',
                maxWidth: '400px',
                minWidth: '180px',
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
                  boxShadow: 2,
                  '&:hover': {
                    boxShadow: 4,
                  },
                  boxSizing: 'border-box',
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {player.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    Team: {player.team} | Position: {player.pos} | Age: {player.age}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    Points: {typeof player.pts === 'number' ? player.pts.toFixed(1) : 'N/A'} | Rebounds: {typeof player.reb === 'number' ? player.reb.toFixed(1) : 'N/A'} | Assists: {typeof player.ast === 'number' ? player.ast.toFixed(1) : 'N/A'}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    FG%: {typeof player.fgPct === 'number' ? player.fgPct.toFixed(1) : 'N/A'} | 3P%: {typeof player.threePct === 'number' ? player.threePct.toFixed(1) : 'N/A'} | FT%: {typeof player.ftPct === 'number' ? player.ftPct.toFixed(1) : 'N/A'}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      )}
      {!loading && position && players.length === 0 && (
        <Typography sx={{ mt: 4, textAlign: 'center' }}>
          No players found for this position.
        </Typography>
      )}
    </Box>
  );
};

export default PositionSearch; 