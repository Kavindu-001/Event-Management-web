import React from 'react'
import Sidebar from '../../components/Sidebar' // Import Sidebar component
import '../../styles/DashboardsCss/AdminDashboard.css' // Import CSS for styling



const AdminDashboard = () => {
  return (
    <div className="overview-container">
      <Sidebar />
      
      <div className="overview-content">  
        <div className="overview-metrics">
          <div className="metric-card">
            <h2>Total Users</h2>
            <p>1,234</p>
          </div>
          <div className="metric-card">
            <h2>Active Events</h2>
            <p>56</p>
          </div>
          <div className="metric-card">
            <h2>Pending Requests</h2>
            <p>12</p>
          </div>
          <div className="metric-card">
            <h2>Revenue</h2>
            <p>$45,678</p>
          </div>
        </div>
      </div>

      
      

    </div>
  )
}

export default AdminDashboard
