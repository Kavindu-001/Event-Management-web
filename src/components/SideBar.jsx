import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SideBar.css';
import CommonHeader from './CommonHeader';

// Child component for individual navigation items
const NavItem = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
        
      className={({ isActive }) => `${className || ''} ${isActive ? 'active' : ''}`.trim()}
    >
      {children}
    </NavLink>
  );
};

const SideBar = ({ userType }) => {
  // Determine the dashboard name based on the userType
  const dashboardName = userType === 'user' ? 'User Dashboard' : ' Dashboard' ;

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <CommonHeader />
      </div>
      <div className="sidebar-logo">
        <h2>Eventia</h2>
        <h4>{dashboardName} <br/> Panel</h4>
      </div>
      <nav className="sidebar-nav">
        
        <NavItem to="/SidebarOverview">Overview</NavItem>
        <NavItem to="/SidebarEvents">Events</NavItem>
        <NavItem to="/SidebarBookings">Bookings</NavItem>
        <NavItem to="/SidebarCalendar">Calendar</NavItem>
        <NavItem to="/SidebarProfile">My Profile</NavItem>
        <NavItem to="/SignIn" className="logout">Logout</NavItem>
      </nav>
    </div>
  );
};

export default SideBar;