import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css"; // Style for Landing Page

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header>
        <h1>🎉 Welcome to Eventia!</h1>
        <p>Your Ultimate Event Management Platform</p>
      </header>
      
      <section className="about">
        <h2>Why Choose Eventia?</h2>
        <p>Eventia helps event organizers, artists, security teams, and sponsors collaborate efficiently.</p>
      </section>

      <section className="cta">
        <h2>Join Us Today!</h2>
        <button onClick={() => navigate("/SignIn")} className="login-btn">
          Login / Sign Up
        </button>
      </section>
    </div>
  );
};

export default LandingPage;

