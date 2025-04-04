import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/header.css"
const header = () => {

  return (
    <div className = "header-container">
      <a href='/' className='header-link'>Eventia</a>

      <div className='header-links'>
        <Link to='/'>Home</Link>
        <Link to='/Events'>Events</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </div>
      
      <div className='login-btn'>
        <Link to='/SignIn'>SignIn</Link>
      </div>


    </div>
 
  )
}
export default header