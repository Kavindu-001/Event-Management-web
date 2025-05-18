import React from 'react';
import { Link } from '@mui/material'; // Import MUI Link component
import '../styles/Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Eventia. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link href="/About" color="inherit" underline="hover">About</Link></li>
          <li><Link href="/Contact" color="inherit" underline="hover">Contact</Link></li>
          <li><Link href="/PrivacyPolicy" color="inherit" underline="hover">Privacy Policy</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;