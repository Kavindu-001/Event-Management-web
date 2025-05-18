// ArtistDashboard.jsx
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SideBar from '../../components/SideBar';
import '../../pages/Dashboards/ArtistDashboard.css'
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ArtistDashboard = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offerSearch, setOfferSearch] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (!token || role !== 'artist') {
      localStorage.clear();
      navigate('/SignIn', { replace: true });
      return;
    }

    (async () => {
      try {
        const headers = { headers: { 'x-auth-token': token } };
        // fetch both available events and this artist's offers in parallel
        const [eventsRes, offersRes] = await Promise.all([
          axios.get('http://localhost:5000/api/event/available', headers),
          axios.get('http://localhost:5000/api/offer', headers),
        ]);
        setEvents(eventsRes.data);
        setOffers(offersRes.data);
      } catch (err) {
        console.error('Failed to load data:', err);
        setError(err.response?.data?.msg || 'Could not fetch data.');
      } finally {
        setLoading(false);
      }
    })();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/SignIn', { replace: true });
  };

  // Simple filter by event name
  const filteredOffers = offers.filter((o) =>
    o.eventId.title.toLowerCase().includes(offerSearch.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <SideBar userType="artist" />
      </div>
      <div className="main-content">
        <header className="dashboard-header">
          <h2>Available Events</h2>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </header>

        {loading && <p>Loading…</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <>
            {/* ==== Available Events List ==== */}
            {events.length > 0 ? (
              <ul className="events-list">
                {events.map((evt) => (
                  <li key={evt._id} className="event-card">
                    <h3>{evt.title}</h3>
                    <p>{evt.description}</p>
                    <p className="event-date">
                      Date:{' '}
                      {new Date(evt.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No available events.</p>
            )}

            {/* ==== Your Offers Table ==== */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Booking Requests (Your Offers)
              </Typography>
              <TextField
                placeholder="Search offers..."
                value={offerSearch}
                onChange={(e) => setOfferSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2, width: 300 }}
                aria-label="search offers"
              />
              <TableContainer component={Paper}>
                <Table aria-label="offers table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Event ID</TableCell>
                      <TableCell>Offer ID</TableCell>
                      <TableCell>Event Name</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredOffers.map((o) => (
                      <TableRow key={o._id} hover>
                        <TableCell>{o.eventId._id}</TableCell>
                        <TableCell>{o._id}</TableCell>
                        <TableCell>{o.eventId.title}</TableCell>
                        <TableCell>
                          {new Date(o.date).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                          })}
                        </TableCell>
                        <TableCell>
                          <span className={`status status-${o.status.toLowerCase()}`}>
                            {o.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </>
        )}

        <Outlet />
      </div>
    </div>
  );
};

export default ArtistDashboard;
