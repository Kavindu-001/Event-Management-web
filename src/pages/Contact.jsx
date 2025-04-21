import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import Fb1 from '../assets/SocialMediaIcon/Fb1.png'
import Instagram from '../assets/SocialMediaIcon/Instagram.png'
import Twitter from '../assets/SocialMediaIcon/Twitter.png'
import Linkedin from '../assets/SocialMediaIcon/Linkedin.png'
import '../styles/Contact.css' // Assuming you have a CSS file for styling
const Contact = () => {
  return (
    


    <div className="contact-container">
      <Header />


      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you!</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 123 Event Street, Colombo, Sri Lanka</p>
          <p><strong>Email:</strong> info@eventia.lk</p>
          <p><strong>Phone:</strong> +94 11 123 0000</p>

          <div className="social-icons">
            <Link to ="https://www.facebook.com/eventia.lk"> <img className='social-media-icon' src={Fb1} alt="FaceBook" /> </Link>
            <Link to ="https://www.instagram.com/eventia.lk"> <img className='social-media-icon' src={Instagram} alt="FaceBook" /> </Link>
            <Link to ="https://www.linkedin.com/company/eventia.lk"> <img className='social-media-icon' src={Linkedin} alt="FaceBook" /> </Link>
            <Link to ="https://www.twitter.com/eventia.lk"> <img className='social-media-icon' src={Twitter} alt="FaceBook" /> </Link>

          </div>
        </div>
      </div>

      <div className="contact-map">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126282.1234567890!2d79.9584!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259b8a8a8a8a8%3A0x1234567890abcdef!2sEventia%20Headquarters!5e0!3m2!1sen!2slk!4v1234567890123"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      
    <Footer />    
    </div>
  )
}

export default Contact
