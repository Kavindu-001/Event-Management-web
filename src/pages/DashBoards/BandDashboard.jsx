import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar';


const BandDashboard = () => {
  return (
    <div className="dashboard-container">
      <SideBar userType="band" />
      <div className="main-content">
        <h1>Band Dashboard</h1>
        <p>Welcome to the Band Dashboard! Here you can manage your events, bookings, and more.</p>
        
        <Outlet />
      </div>
    </div>
  );
};

export default BandDashboard;
