import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/About.css'
const About = () => {
  return (
    <div>
      
        <Header />  
      

        <div className="about-hero">
          <h1>About Eventia</h1>
          <p>Connecting People, Empowering Events, Shaping Experiences</p>
        </div>

        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
          Eventia is a modern event management platform designed to bring together every key player in the event industry of Sri Lanka. 
          From organizers and artists to security teams and sponsors, we’re building a central hub where collaboration, creativity, and celebration thrive.
          </p>
        </div>

        <div className="about-section">
          <h2>What You Can Do on Eventia</h2>
            <ul>
              <li>🎤 Artists and Bands can showcase talent and find gigs</li>
              <li>🎟️ Organizers can manage bookings, schedules, and resources</li>
              <li>🧾 Sponsors can discover promotional opportunities</li>
              <li>🔒 Security Teams can be hired and managed seamlessly</li>
              <li>👩‍🎨 Designers can offer branding and decoration services</li>
              <li>💼 Admins can control and maintain a secure environment</li>
            </ul>
        </div>

        <div className="about-section">
          <h2>Why Choose Eventia?</h2>
          <p>
            Our platform is built with simplicity, security, and scalability in mind. 
            Whether it’s a small birthday party or a large concert, we make event management smoother and smarter. Plus, we’re constantly evolving with user feedback and tech innovation.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
          We aim to become Sri Lanka’s leading digital event ecosystem. 
          In the future, we plan to integrate AI tools for automated planning, personalized recommendations, and real-time analytics to help users make smarter decisions and host more successful events.
          </p>
        </div>

        <div className="cta-section">
          <h3>Ready to be part of something big?</h3>
          <p>Sign up now and take your event journey to the next level with Eventia!</p>
          <button>Get Started</button>
        </div>
        

        <Footer />
      
    </div>
  )
}

export default About
