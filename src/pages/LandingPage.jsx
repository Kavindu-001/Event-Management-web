import React from "react";

import Header from "../components/Header"; // Header component
import "../styles/LandingPage.css"; // Style for Landing Page
import start2 from "../assets/start2.jpg"; // Image for Landing Page

const LandingPage = () => {
  

  return (
    <div>
    
    
      <div>
        <Header />
      </div>


      <div>
        <img src={start2} alt="Landing Page" className="landing-image-hero" />
      </div>

      <div className="landing-content">
        <h1>Welcome to Eventia</h1>
        <p>Your one-stop solution for all event management needs.</p>
        <p className="login-content-para">Join us to explore a world of events!</p>
      </div>    


     
      
        
    </div>
  );
};

export default LandingPage;

