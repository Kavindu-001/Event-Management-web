import React from "react";
import Header from "../components/Header"; // Header component
import "../styles/LandingPage.css"; // Style for Landing Page
import LandingPage_Video_Start from "../assets/LandingPage_Video_Start.mp4"; 
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Artist3 from "../assets/Artist3.jpg"; // Image for Artist Category
import Band1 from "../assets/Band1.jpg"; // Image for Band Category
import Consumers1 from "../assets/Consumers1.jpg"; // Image for Consumers Category
import Consumers2 from "../assets/Consumers2.jpg"; // Image for Consumers Category
import security1 from "../assets/security1.jpg"; // Image for Security Category
import sponsor1 from "../assets/sponsor1.jpg"; // Image for Security Category
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Header />

      {/* Video Background */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={LandingPage_Video_Start} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="landing-content">
        <h1>Welcome to Eventia</h1>
        <p>Your one-stop solution for all event management needs.</p>
        <p className="login-content-para">Join us to explore a world of events!</p>
      </div>
      <div className="divider-with-text">
          <span><b>Every thing you need</b> <br /> to plan <br /> your deams event</span>
      </div>
      
      <div className='event-catagory'>
      <div className="event-category-cards" >
          <Card sx={{ maxWidth: 340 }} className="event-category-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Artist3}
                alt="Artist"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Artist
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We provide the best artists for your events. 
                  Our artists are well-equipped with the latest music technology and are trained to provide the best performance. 
                  We have artists of all sizes, from small artists for intimate gatherings to large artists for huge events.
                  Our artists are versatile and can play a wide range of music genres, from rock to pop to jazz.
                  We also have artists that specialize in specific genres, such as country, blues, and classical.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 340 }} className="event-category-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Band1}
                alt="Artist"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bands
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We provide the best bands for your events. 
                  Our bands are well-equipped with the latest music technology and are trained to provide the best performance. 
                  We have bands of all sizes, from small bands for intimate gatherings to large bands for huge events.
                  Our bands are versatile and can play a wide range of music genres, from rock to pop to jazz.
                  We also have bands that specialize in specific genres, such as country, blues, and classical. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 340 }} className="event-category-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Consumers1}
                alt="Consumers"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Consumers
                </Typography>
                <Typography variant="body2" color="text.secondary"> 
                  We use high-quality LED lights that are energy-efficient and environmentally friendly. 
                  Our lighting systems are also fully customizable to fit your specific needs and preferences. 
                  We can create a wide range of lighting effects, from subtle and elegant to bold and vibrant colors. 
                  We also have a team of experienced lighting designers who can help you create the perfect lighting design for your event.
                  
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 340 }} className="event-category-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Consumers2}
                alt="Consumers"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Consumers
                </Typography>  
                <Typography variant="body2" color="text.secondary"> 
                  We provide state-of-the-art audio and visual technology to enhance your event experience. 
                  Our team of experts will work with you to ensure that your event's sound and visuals are perfectly synchronized, 
                  providing an immersive and unforgettable experience for your guests. 
                  Whether it's a corporate event, concert, or wedding, we have the right solutions to meet your needs.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 340 }} className="event-category-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={security1}
                alt="Security"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Security Teams
                </Typography>
                <Typography variant="body2" color="text.secondary"> 
                  Our security services are designed to provide a safe and secure environment for your event. 
                  We offer a wide range of security services, including crowd control, access control, and emergency response. 
                  Our security personnel are highly trained and experienced in handling all types of events, from small gatherings to large festivals.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 340 }} className="event-category-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={sponsor1}
                alt="Sponsors"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Sponsors
                </Typography>
                <Typography variant="body2" color="text.secondary"> 
                  Our sponsors are an integral part of our events. 
                  They provide the necessary funding and support to make our events possible. 
                  We work closely with our sponsors to ensure that their brand is represented in the best possible light. 
                  Our sponsors are carefully selected to align with our values and mission, and we are proud to partner with them.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 340 }} className="event-category-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={sponsor1}
                alt="Designers"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Designers
                </Typography>
                <Typography variant="body2" color="text.secondary"> 
                  Our sponsors are an integral part of our events. 
                  They provide the necessary funding and support to make our events possible. 
                  We work closely with our sponsors to ensure that their brand is represented in the best possible light. 
                  Our sponsors are carefully selected to align with our values and mission, and we are proud to partner with them.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;