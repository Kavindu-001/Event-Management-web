import React, { useState, useEffect } from 'react';
import OrganizerSidebar from '../../components/OrganizerSidebar';
import DashboardHeader from '../../components/DashboardHeader';
import '../../styles/OrganizerPanel/EventOrganizerDashboard.css';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const EventOrganizerDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching event data from the backend
    const fetchEvents = async () => {
      const eventData = [
        { id: 'E001', name: 'Music Festival', startDate: '2025-04-28', endDate: '2025-05-01', status: 'Pending' },
        { id: 'E002', name: 'Rock the Night', startDate: '2025-04-10', endDate: '2025-04-15', status: 'Live' },
        { id: 'E003', name: 'Summer Beats Festival', startDate: '2025-04-05', endDate: '2025-04-10', status: 'End' },
        { id: 'E004', name: 'Acoustic Evenings', startDate: '2025-04-01', endDate: '2025-04-05', status: 'Cancel' },
        { id: 'E005', name: 'DJ Madness', startDate: '2025-04-28', endDate: '2025-05-01', status: 'Pending' },
        { id: 'E006', name: 'Jazz Nights', startDate: '2025-04-10', endDate: '2025-04-15', status: 'Live' },
        { id: 'E007', name: 'Classical Symphony', startDate: '2025-04-05', endDate: '2025-04-10', status: 'End' },
        { id: 'E008', name: 'Pop Extravaganza', startDate: '2025-04-01', endDate: '2025-04-05', status: 'Cancel' },
      ];

      // Update status dynamically based on the event deadline
      const updatedEvents = eventData.map((event) => {
        const currentDate = new Date();
        const eventEndDate = new Date(event.endDate);

        if (event.status === 'Pending' && eventEndDate < currentDate) {
          return { ...event, status: 'End' }; // Automatically mark as End if the deadline has passed
        }
        return event;
      });

      setEvents(updatedEvents);
    };

    fetchEvents();
    }, []);

    useEffect(() => {
      document.body.classList.add('organizer-dashboard-page');
        return () => {
      document.body.classList.remove('organizer-dashboard-page');
        };
    }, []);

    const sampleOffers = [
      {
        id: 1,
        title: "Live Band: Velvet Vibes",
        description: "Energetic live band for evening shows.",
        image: "/images/velvet-vibes.jpg",
        postedBy: "Artist - Jay D",
      },
      {
        id: 2,
        title: "Stage Design: Aurora Theme",
        description: "Beautiful LED stage designs for festivals.",
        image: "/images/aurora-stage.jpg",
        postedBy: "Designer - NovaNest",
      },
    ];

    const Navigate = useNavigate();

  return (
    <div>
      <DashboardHeader userType="organizer" />
    <div className="organizer-dashboard">
      <OrganizerSidebar />
      <div className="dashboard-content">
        <div className="overview-section">
          <h2>Dashboard Overview</h2>
          <div className="metrics">
            <div className="metric-card">
              <h3>Total Events</h3>
              <p>{events.length}</p>
            </div>
            <div className="metric-card">
              <h3>Upcoming Events</h3>
              <p>{events.filter((event) => event.status === 'Pending').length}</p>
            </div>
            <div className="metric-card">
              <h3>Live Events</h3>
              <p>{events.filter((event) => event.status === 'Live').length}</p>
            </div>
            <div className="metric-card">
              <h3>Completed Events</h3>
              <p>{events.filter((event) => event.status === 'End').length}</p>
            </div>
          </div>
        </div>
        <div className="recent-events-section">
          <h2>Recent Events</h2>
          <div className="recent-events-table-container">
            <table className="recent-events-table">
              <thead>
                <tr>
                  <th>Event ID</th>
                  <th>Event Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.name}</td>
                    <td>{event.startDate}</td>
                    <td>{event.endDate}</td>
                    <td>
                      <span className={`status ${event.status.toLowerCase()}`}>
                        {event.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='overview-bookings-section'>
          <Box sx={{ padding: 4 }}>
            <Typography variant="h5" gutterBottom>
              Booking Offers & Collaborations
            </Typography>
            <Grid container spacing={3}>
              {sampleOffers.map((offer) => (
                <Grid item xs={12} md={6} lg={4} key={offer.id}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={offer.image}
                      alt={offer.title}
                    />
                    <CardContent>
                      <Typography variant="h6">{offer.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {offer.description}
                      </Typography>
                      <Typography variant="caption" display="block" mt={1}>
                        Posted by: {offer.postedBy}
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        sx={{ mt: 2 }}
                        onClick={(()=> Navigate('/OrganizerBookings'))}>
                          View Booking Offers
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>      

        </div>
      </div>
    </div>
    </div>
  );
};

export default EventOrganizerDashboard;