import React,{useEffect} from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import '../../styles/OrganizerPanel/OrganizerBookings.css';
import OrganizerSidebar from '../../components/OrganizerSidebar';
import DashboardHeader from '../../components/DashboardHeader';


const OrganizerBookings = () => {

  useEffect(() => {
      document.body.classList.add('organizer-bookings-page');
      return () => {
        document.body.classList.remove('organizer-bookings-page');
      };
    }, []);
  

  // Sample bookings data
  const bookings = [
    {
      id: 'B001',
      title: 'Music Festival Collaboration',
      description: 'Join us for an amazing music festival with top artists.',
      image: '/images/music-festival.jpg',
      postedBy: 'Global Music Inc.',
    },
    {
      id: 'B002',
      title: 'DJ Madness Partnership',
      description: 'Collaborate with us for an electrifying DJ event.',
      image: '/images/dj-madness.jpg',
      postedBy: 'Neon Sponsors',
    },
    {
      id: 'B003',
      title: 'Rock the Night Event',
      description: 'Be part of an unforgettable rock music experience.',
      image: '/images/rock-night.jpg',
      postedBy: 'Rock Solid Sponsors',
    },
    {
      id: 'B004',
      title: 'Summer Beats Festival',
      description: 'Collaborate with us for a vibrant summer music festival.',
      image: '/images/summer-beats.jpg',
      postedBy: 'Beachside Sponsors',
    },
  ];

  return (
    <div className="organizer-bookings-page-container">

      <OrganizerSidebar />
      <DashboardHeader />
        
        <div className="organizer-bookings-page">
            <Box sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                All Booking Offers
                </Typography>
                <Grid container spacing={3}>
                {bookings.map((booking) => (
                  <Grid item xs={12} md={6} lg={4} key={booking.id}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                        component="img"
                        height="160"
                        image={booking.image}
                        alt={booking.title}
                        />
                        <CardContent>
                        <Typography variant="h6">{booking.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {booking.description}
                        </Typography>
                        <Typography variant="caption" display="block" mt={1}>
                            Posted by: {booking.postedBy}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                            onClick={() => alert(`Booking ${booking.title} confirmed!`)}
                        >
                            Book Now
                        </Button>
                        </CardContent>
                    </Card>
                  </Grid>
                ))}
                </Grid>
            </Box>
        </div>
    </div>
  );
};

export default OrganizerBookings;