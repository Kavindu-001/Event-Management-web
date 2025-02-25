import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/header.css"
const header = () => {

  return (
    <div className = "header-container">
      <a href='/LandingPage' className='header-link'>Eventia</a>

      <div className='header-links'>
        <Link to='/'>Home</Link>
        <Link to='/events'>Events</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>

    </div>
 
  )
}
export default header
