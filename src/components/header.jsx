import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../styles/header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0); // Use useRef instead of let

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY; // Update the ref value
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${showHeader ? "show" : "hide"}`}>
      <a href='/' className='header-link'>Eventia</a>

      <div className='header-links'>
        <Link to='/'>Home</Link>
        <Link to='/Events'>Events</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
      <div className='login-btn-container'>
        <div className='login-btn-sign-in'>
          <Link to='/SignIn'>SignIn</Link>
        </div>
        <div className='login-btn'>
          <Link to='/SignUp'>SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;