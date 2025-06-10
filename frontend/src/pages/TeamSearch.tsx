import React, { useState, useCallback } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Box,
  CircularProgress,
  Avatar,
  Tooltip
} from '@mui/material';
import axios from 'axios';

const teams = [
  { abbr: 'ATL', name: 'Hawks' },
  { abbr: 'BOS', name: 'Celtics' },
  { abbr: 'BKN', name: 'Nets' },
  { abbr: 'CHA', name: 'Hornets' },
  { abbr: 'CHI', name: 'Bulls' },
  { abbr: 'CLE', name: 'Cavaliers' },
  { abbr: 'DAL', name: 'Mavericks' },
  { abbr: 'DEN', name: 'Nuggets' },
  { abbr: 'DET', name: 'Pistons' },
  { abbr: 'GSW', name: 'Warriors' },
  { abbr: 'HOU', name: 'Rockets' },
  { abbr: 'IND', name: 'Pacers' },
  { abbr: 'LAC', name: 'Clippers' },
  { abbr: 'LAL', name: 'Lakers' },
  { abbr: 'MEM', name: 'Grizzlies' },
  { abbr: 'MIA', name: 'Heat' },
  { abbr: 'MIL', name: 'Bucks' },
  { abbr: 'MIN', name: 'Timberwolves' },
  { abbr: 'NOP', name: 'Pelicans' },
  { abbr: 'NYK', name: 'Knicks' },
  { abbr: 'OKC', name: 'Thunder' },
  { abbr: 'ORL', name: 'Magic' },
  { abbr: 'PHI', name: '76ers' },
  { abbr: 'PHX', name: 'Suns' },
  { abbr: 'POR', name: 'Trail Blazers' },
  { abbr: 'SAC', name: 'Kings' },
  { abbr: 'SAS', name: 'Spurs' },
  { abbr: 'TOR', name: 'Raptors' },
  { abbr: 'UTA', name: 'Jazz' },
  { abbr: 'WAS', name: 'Wizards' },
];

function teamToLogo(teamAbbr: string) {
  return `/team-logos/${teamAbbr.toLowerCase()}.png`;
}

interface Player {
  name: string;
  team: string;
  pos: string;
  pts: number;
  age: number;
  reb: number;
  ast: number;
  fgPct: number;
  threePct: number;
  ftPct: number;
}

const TeamSearch = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPlayers = useCallback(async (teamAbbr: string) => {
    if (!teamAbbr) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:8080/api/players/team/${teamAbbr}`);
      setPlayers(response.data as Player[]);
    } catch (error) {
      setError('Failed to fetch players. Please try again.');
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleTeamClick = (teamAbbr: string) => {
    setSelectedTeam(teamAbbr);
    fetchPlayers(teamAbbr);
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
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 'bold',
          color: 'primary.main',
          letterSpacing: 2,
          textShadow: '1px 2px 8px #3949ab88',
          zIndex: 1,
        }}
      >
        Team Search
      </Typography>
      {/* Team Icons Grid */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          mb: 4,
          width: '100%',
          zIndex: 1,
        }}
      >
        {teams.map((team) => (
          <Tooltip title={team.name} key={team.abbr}>
            <Box
              onClick={() => handleTeamClick(team.abbr)}
              sx={{
                cursor: 'pointer',
                border: selectedTeam === team.abbr ? '2px solid #3949ab' : '2px solid #3949ab',
                borderRadius: '50%',
                p: 1.2,
                transition: 'border 0.2s, box-shadow 0.2s',
                boxShadow: selectedTeam === team.abbr ? 6 : 2,
                bgcolor: selectedTeam === team.abbr ? '#fffde7' : 'background.paper',
                m: 1,
                '&:hover': {
                  border: '4px solid #ff9800',
                  boxShadow: 8,
                },
              }}
            >
              <Avatar
                src={teamToLogo(team.abbr)}
                alt={team.name}
                sx={{ width: 70, height: 70, bgcolor: 'transparent' }}
                variant="circular"
              />
            </Box>
          </Tooltip>
        ))}
      </Box>
      {/* Selected Team Title */}
      {selectedTeam && (
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 3,
            fontWeight: 'bold',
            color: 'primary.main',
            letterSpacing: 1,
            textShadow: '1px 2px 8px #3949ab88',
            zIndex: 1,
          }}
        >
          {teams.find(t => t.abbr === selectedTeam)?.name} Roster
        </Typography>
      )}
      {/* Player Cards */}
      {error && (
        <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
          {error}
        </Typography>
      )}
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
        {loading ? (
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          players.map((player) => (
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
                  boxShadow: 4,
                  border: '3px solid',
                  borderColor: selectedTeam ? '#ffd600' : 'primary.main',
                  background: 'linear-gradient(120deg, #fff 60%, #ffd60022 100%)',
                  '&:hover': {
                    boxShadow: 10,
                    background: 'linear-gradient(120deg, #fff 40%, #ff980022 100%)',
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
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', letterSpacing: 1 }}>
                    {player.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    Position: {player.pos} | Age: {player.age}
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
          ))
        )}
      </Box>
      {!loading && players.length === 0 && selectedTeam && (
        <Typography sx={{ mt: 4, textAlign: 'center', color: 'secondary.main', fontWeight: 700, letterSpacing: 1 }}>
          No players found for this team.
        </Typography>
      )}
    </Box>
  );
};

export default TeamSearch; 