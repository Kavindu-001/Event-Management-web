import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminSidebar.css'; // Import CSS for styling
import { FaHome, FaUsers, FaCalendarAlt, FaCog, FaChartBar, FaMoon, FaSun, FaDesktop, FaBars } from 'react-icons/fa'; // Import icons

const AdminSidebar = () => {
  const [theme, setTheme] = useState('system'); // Default theme is 'system'
  const [isCollapsed, setIsCollapsed] = useState(false); // State to toggle sidebar

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Apply theme to the root element
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle the sidebar state
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2>{!isCollapsed && 'Admin Panel'}</h2>
        <button className="toggle-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/AdminDashboard">
            <FaHome className="sidebar-icon" />
            {!isCollapsed && 'Overview'}
          </Link>
        </li>
        <li>
          <Link to="/AdminUsers">
            <FaUsers className="sidebar-icon" />
            {!isCollapsed && 'Users'}
          </Link>
        </li>
        <li>
          <Link to="/AdminEvents">
            <FaCalendarAlt className="sidebar-icon" />
            {!isCollapsed && 'Events'}
          </Link>
        </li>
        <li>
          <Link to="/AdminReport">
            <FaChartBar className="sidebar-icon" />
            {!isCollapsed && 'Reports'}
          </Link>
        </li>
        <li>
          <Link to="/AdminSettings">
            <FaCog className="sidebar-icon" />
            {!isCollapsed && 'Settings'}
          </Link>
        </li>
      </ul>
      <div className="theme-toggle">
        <button
          className={`theme-button ${theme === 'light' ? 'active' : ''}`}
          onClick={() => handleThemeChange('light')}
        >
          <FaSun className="theme-icon" /> {!isCollapsed && 'Light'}
        </button>
        <button
          className={`theme-button ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => handleThemeChange('dark')}
        >
          <FaMoon className="theme-icon" /> {!isCollapsed && 'Dark'}
        </button>
        <button
          className={`theme-button ${theme === 'system' ? 'active' : ''}`}
          onClick={() => handleThemeChange('system')}
        >
          <FaDesktop className="theme-icon" /> {!isCollapsed && 'System'}
        </button>
      </div>


    </div>
  );
};

export default AdminSidebar;