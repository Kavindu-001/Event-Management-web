import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/OrganizerSidebar.css'; // Import CSS for styling


const OrganizerSidebar = () => {
  const handleLogout = () => {
    alert('You have been logged out!');
    window.location.href = '/SignIn'; // Redirect to the SignIn page
  };

  return (
    <div className="organizer-sidebar">
        <div className="sidebar-header">
            <h2>Organizer <br/> Panel</h2>
        </div>
        <ul className="sidebar-menu">
        
            <li>
                <NavLink to="/EventOrganizerDashboard" activeClassName="active-link">
                    <span className="sidebar-icon">🏠</span> {/* Replace with an actual icon */}
                        Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/OrganizerEvents" activeClassName="active-link">
                    <span className="sidebar-icon">📅</span> {/* Replace with an actual icon */}
                        Events
                </NavLink>
            </li>
            <li>
                <NavLink to="/OrganizerReports" activeClassName="active-link">
                    <span className="sidebar-icon">📊</span> {/* Replace with an actual icon */}
                        Reports
                </NavLink>
            </li>
            <li>
                <NavLink to="/OrganizerSettings" activeClassName="active-link">
                    <span className="sidebar-icon">⚙️</span> {/* Replace with an actual icon */}
                        Settings
                </NavLink>
            </li>
        </ul>
        
        <button className="logout-button" onClick={handleLogout}>
            Logout
        </button>
    </div>
  );
};

export default OrganizerSidebar;