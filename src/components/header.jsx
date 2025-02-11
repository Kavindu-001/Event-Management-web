import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/header.css"
const header = () => {

  return (
    <div className = "header-container">
      <ul className = "menuItems">
        <li><Link to="/sideNavBar">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/">Log Out</Link></li>
        
      </ul>

    </div>
 
  )
}
export default header
