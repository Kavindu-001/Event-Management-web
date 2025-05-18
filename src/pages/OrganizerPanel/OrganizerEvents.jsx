import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrganizerSidebar from '../../components/OrganizerSidebar';
import DashboardHeader from '../../components/DashboardHeader';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  InputAdornment,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
} from '@mui/material';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../styles/OrganizerPanel/OrganizerEvents.css';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EventIcon from '@mui/icons-material/Event';
import OfferIcon from '@mui/icons-material/LocalOffer';

// Date-fns localizer
const locales = { 'en-US': require('date-fns/locale/en-US') };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const OrganizerEvents = () => {
  const token = localStorage.getItem('token');
  const headers = { headers: { 'x-auth-token': token } };

  const [calendarEvents, setCalendarEvents] = useState([]);
  const [insights, setInsights] = useState({ totalEvents: 0, totalOffers: 0 });
  const [events, setEvents] = useState([]);
  const [bookingRequests, setBookingRequests] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', date: '' });
  const [message, setMessage] = useState({ error: '', success: '' });
  const [calendarFilter, setCalendarFilter] = useState('all'); // 'all', 'events', 'offers'
  const [eventSearch, setEventSearch] = useState('');
  const [offerSearch, setOfferSearch] = useState('');
  const [eventSort, setEventSort] = useState({ field: 'date', order: 'asc' });
  const [offerSort, setOfferSort] = useState({ field: 'date', order: 'asc' });

  useEffect(() => {
    document.body.classList.add('organizer-events-page');
    return () => document.body.classList.remove('organizer-events-page');
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [calRes, insRes, evRes, offRes] = await Promise.all([
          axios.get('http://localhost:5000/api/event/calendar', headers),
          axios.get('http://localhost:5000/api/event/insights', headers),
          axios.get('http://localhost:5000/api/event', headers),
          axios.get('http://localhost:5000/api/offer', headers),
        ]);
        setCalendarEvents(calRes.data);
        setInsights(insRes.data);
        setEvents(evRes.data);
        setBookingRequests(
          offRes.data.map((o) => ({
            id: o._id,
            eventId: o.eventId._id,
            eventName: o.eventId.title,
            ownerName: o.owner.name,
            date: o.date,
            status: o.status,
          }))
        );
      } catch (err) {
        console.error(err);
        setMessage({ error: 'Failed to load data.', success: '' });
      }
    };
    fetchAll();
  }, []);

  // Calendar items with tooltips
  const calendarItems = [
    ...events.map((ev) => ({
      title: `Event: ${ev.title}`,
      start: new Date(ev.date),
      end: new Date(ev.date),
      type: 'event',
      status: ev.status,
      tooltip: `ID: ${ev._id}\nTitle: ${ev.title}\nStatus: ${ev.status}\nDate: ${new Date(ev.date).toLocaleString()}`,
    })),
    ...bookingRequests.map((br) => ({
      title: `Offer: ${br.eventName} (${br.ownerName})`,
      start: new Date(br.date),
      end: new Date(br.date),
      type: 'booking',
      status: br.status,
      tooltip: `Offer ID: ${br.id}\nEvent: ${br.eventName}\nArtist: ${br.ownerName}\nStatus: ${br.status}\nDate: ${new Date(br.date).toLocaleString()}`,
    })),
  ].filter((item) =>
    calendarFilter === 'all' ? true : item.type === (calendarFilter === 'events' ? 'event' : 'booking')
  );

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    setMessage({ error: '', success: '' });
    try {
      await axios.post('http://localhost:5000/api/event/create', form, headers);
      setMessage({ success: 'Event created successfully.', error: '' });
      setForm({ title: '', description: '', date: '' });
      const [evRes, insRes] = await Promise.all([
        axios.get('http://localhost:5000/api/event', headers),
        axios.get('http://localhost:5000/api/event/insights', headers),
      ]);
      setEvents(evRes.data);
      setInsights(insRes.data);
    } catch (err) {
      console.error(err);
      setMessage({
        error: err.response?.data?.msg || 'Failed to create event.',
        success: '',
      });
    }
  };

  const updateEventStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/event/${id}`, { status: newStatus }, headers);
      setEvents(events.map((ev) => (ev._id === id ? { ...ev, status: newStatus } : ev)));
      setMessage({ success: 'Event status updated.', error: '' });
    } catch (err) {
      console.error(err);
      setMessage({ error: 'Failed to update event status.', success: '' });
    }
  };

  const updateOfferStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/offer/${id}`, { status: newStatus }, headers);
      setBookingRequests(
        bookingRequests.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
      );
      setMessage({ success: 'Offer status updated.', error: '' });
    } catch (err) {
      console.error(err);
      setMessage({ error: 'Failed to update offer status.', success: '' });
    }
  };

  // Event styling with icons
  const eventStyleGetter = (event) => {
    let backgroundColor;
    if (event.type === 'event') {
      switch (event.status) {
        case 'live':
          backgroundColor = '#1976d2';
          break;
        case 'end':
          backgroundColor = '#757575';
          break;
        case 'cancel':
          backgroundColor = '#d32f2f';
          break;
        default:
          backgroundColor = '#ffb300';
      }
    } else {
      backgroundColor = event.status === 'approved' ? '#388e3c' : '#f57c00';
    }
    return {
      style: {
        backgroundColor,
        borderRadius: '4px',
        color: '#fff',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: '4px 8px',
      },
    };
  };

  // Custom event component with icons
  const CustomEvent = ({ event }) => (
    <Tooltip title={event.tooltip} arrow>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {event.type === 'event' ? <EventIcon fontSize="small" sx={{ mr: 1 }} /> : <OfferIcon fontSize="small" sx={{ mr: 1 }} />}
        <Typography variant="body2">{event.title}</Typography>
      </Box>
    </Tooltip>
  );

  // Sorting function
  const sortData = (data, sortField, sortOrder) => {
    return [...data].sort((a, b) => {
      const valA = sortField === 'date' ? new Date(a[sortField]) : a[sortField].toLowerCase();
      const valB = sortField === 'date' ? new Date(b[sortField]) : b[sortField].toLowerCase();
      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  };

  // Filtered and sorted events
  const filteredEvents = events
    .filter((ev) => ev.title.toLowerCase().includes(eventSearch.toLowerCase()))
    .sort((a, b) => sortData([a, b], eventSort.field, eventSort.order)[0] === a ? -1 : 1);

  // Filtered and sorted booking requests
  const filteredBookingRequests = bookingRequests
    .filter((br) => br.eventName.toLowerCase().includes(offerSearch.toLowerCase()) || br.ownerName.toLowerCase().includes(offerSearch.toLowerCase()))
    .sort((a, b) => sortData([a, b], offerSort.field, offerSort.order)[0] === a ? -1 : 1);

  const handleSort = (field, setSort) => {
    setSort((prev) => ({
      field,
      order: prev.field === field && prev.order === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <div>
      <DashboardHeader userType="organizer" />
      <div className="organizer-dashboard">
        <OrganizerSidebar />
        <div className="dashboard-content">
          {/* Insights */}
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card sx={{ background: 'linear-gradient(45deg, #1976d2, #42a5f5)' }}>
                  <CardContent>
                    <Typography color="white">Total Events</Typography>
                    <Typography variant="h4" color="white">{insights.totalEvents}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card sx={{ background: 'linear-gradient(45deg, #388e3c, #66bb6a)' }}>
                  <CardContent>
                    <Typography color="white">Total Offers</Typography>
                    <Typography variant="h4" color="white">{insights.totalOffers}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Calendar View */}
          <Box className="calendar-card" sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5">Event & Offer Calendar</Typography>
              <ToggleButtonGroup
                value={calendarFilter}
                exclusive
                onChange={(e, newFilter) => newFilter && setCalendarFilter(newFilter)}
                aria-label="calendar filter"
              >
                <ToggleButton value="all" aria-label="all">All</ToggleButton>
                <ToggleButton value="events" aria-label="events">Events</ToggleButton>
                <ToggleButton value="offers" aria-label="offers">Offers</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <Box className="calendar-container">
              <Calendar
                localizer={localizer}
                events={calendarItems}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '500px' }}
                eventPropGetter={eventStyleGetter}
                defaultView="month"
                views={['month', 'week', 'day']}
                components={{ event: CustomEvent }}
                aria-label="event and offer calendar"
              />
            </Box>
          </Box>

          {/* Create Event */}
          <Box component="form" onSubmit={handleCreateEvent} sx={{ mb: 4, p: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom>Create New Event</Typography>
            {message.error && <Typography color="error" sx={{ mb: 2 }}>{message.error}</Typography>}
            {message.success && <Typography color="success.main" sx={{ mb: 2 }}>{message.success}</Typography>}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Title"
                  fullWidth
                  margin="normal"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  aria-required="true"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="datetime-local"
                  label="Date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  required
                  aria-required="true"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  required
                  aria-required="true"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit" sx={{ mt: 2, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
                  Create Event
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Events Table */}
          <Box className="organizer-booking-request-table" sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5">All Events</Typography>
              <TextField
                placeholder="Search events..."
                value={eventSearch}
                onChange={(e) => setEventSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: 300 }}
                aria-label="search events"
              />
            </Box>
            <TableContainer component={Paper}>
              <Table aria-label="events table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TableSortLabel
                        active={eventSort.field === 'id'}
                        direction={eventSort.order}
                        onClick={() => handleSort('id', setEventSort)}
                      >
                        ID
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={eventSort.field === 'title'}
                        direction={eventSort.order}
                        onClick={() => handleSort('title', setEventSort)}
                      >
                        Title
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={eventSort.field === 'date'}
                        direction={eventSort.order}
                        onClick={() => handleSort('date', setEventSort)}
                      >
                        Date
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredEvents.map((ev) => (
                    <TableRow key={ev._id} hover sx={{ '&:hover': { bgcolor: '#f1f1f1' } }}>
                      <TableCell>{ev._id}</TableCell>
                      <TableCell>{ev.title}</TableCell>
                      <TableCell>{new Date(ev.date).toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={`status status-${ev.status.toLowerCase()}`}>{ev.status}</span>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={ev.status}
                          onChange={(e) => updateEventStatus(ev._id, e.target.value)}
                          size="small"
                          aria-label={`update status for event ${ev._id}`}
                        >
                          <MenuItem value="pending">Pending</MenuItem>
                          <MenuItem value="live">Live</MenuItem>
                          <MenuItem value="end">End</MenuItem>
                          <MenuItem value="cancel">Cancel</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Booking Requests Table */}
          <Box className="organizer-booking-request-table" sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5">Booking Requests (Artist Offers)</Typography>
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
                sx={{ width: 300 }}
                aria-label="search offers"
              />
            </Box>
            <TableContainer component={Paper}>
              <Table aria-label="booking requests table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TableSortLabel
                        active={offerSort.field === 'eventId'}
                        direction={offerSort.order}
                        onClick={() => handleSort('eventId', setOfferSort)}
                      >
                        Event ID
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={offerSort.field === 'id'}
                        direction={offerSort.order}
                        onClick={() => handleSort('id', setOfferSort)}
                      >
                        Offer ID
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={offerSort.field === 'eventName'}
                        direction={offerSort.order}
                        onClick={() => handleSort('eventName', setOfferSort)}
                      >
                        Event Name
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={offerSort.field === 'ownerName'}
                        direction={offerSort.order}
                        onClick={() => handleSort('ownerName', setOfferSort)}
                      >
                        Artist Name
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={offerSort.field === 'date'}
                        direction={offerSort.order}
                        onClick={() => handleSort('date', setOfferSort)}
                      >
                        Date
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredBookingRequests.map((b) => (
                    <TableRow key={b.id} hover sx={{ '&:hover': { bgcolor: '#f1f1f1' } }}>
                      <TableCell>{b.eventId}</TableCell>
                      <TableCell>{b.id}</TableCell>
                      <TableCell>{b.eventName}</TableCell>
                      <TableCell>{b.ownerName}</TableCell>
                      <TableCell>{new Date(b.date).toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={`status status-${b.status.toLowerCase()}`}>{b.status}</span>
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Approve Offer">
                          <IconButton
                            onClick={() => updateOfferStatus(b.id, 'approved')}
                            color="success"
                            aria-label={`approve offer ${b.id}`}
                          >
                            <CheckCircleIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Reject Offer">
                          <IconButton
                            onClick={() => updateOfferStatus(b.id, 'rejected')}
                            color="error"
                            aria-label={`reject offer ${b.id}`}
                          >
                            <CancelIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default OrganizerEvents;