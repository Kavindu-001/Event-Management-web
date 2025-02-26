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

      <div className="hero-section"
       style={{
        backgroundImage: `url(${start2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        

        }}>
      </div>  


     
      
        
      </div>
  );
};

export default LandingPage;

