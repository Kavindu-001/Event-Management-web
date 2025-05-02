import React from 'react';
import AdminSidebar from '../../components/AdminSidebar'; // Import Sidebar component
import '../../styles/DashboardsCss/AdminDashboard.css'; // Import CSS for styling
// import SharedCalendar from '../../components/SharedCalendar'; // Import SharedCalendar component
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'; // Import Recharts components


const userGrowthData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 700 },
  { name: 'May', users: 450 },
  { name: 'Jun', users: 350 },
  { name: 'Jul', users: 550 },
  { name: 'Aug', users: 750 },
  { name: 'Sep', users: 480 },
  { name: 'Oct', users: 380 },
  { name: 'Nov', users: 580 },
  { name: 'Dec', users: 780 },
];

const eventParticipationData = [
  { name: 'Organizers', participants: 40 },
  { name: 'Artists',    participants: 10 },
  { name: 'Bands',      participants: 25 },
  { name: 'Sounds',     participants: 15 },
  { name: 'Lightings',  participants: 18 },
  { name: 'Stages',     participants: 35 },
  { name: 'Securities', participants: 13 },
  { name: 'Sponsors',   participants: 29 },
  { name: 'Designers',  participants: 30 },
];

const revenueData = [
  { name: 'Organizers',  value: 250 },
  { name: 'Artists',     value: 150 },
  { name: 'Bands',       value: 100 },
  { name: 'Sounds',      value: 200 },
  { name: 'Lightings',   value: 300 },
  { name: 'Stages',      value: 380 },
  { name: 'Securities',  value: 280 },
  { name: 'Sponsors',    value: 150 },
  { name: 'Designers',   value: 75 },
];

const COLORS = ['#66D9EF', '#8BC34A', '#E8E231', '#FFC107', '#FF5722', '#673AB7', '#FF9800', '#9C27B0', '#2196F3'];

const AdminDashboard = () => {
  return (
    <div className="overview-container">
      <AdminSidebar />
      
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

      <div className="overview-charts">
        {/* User Growth Chart */}
        <div className="chart-card">
          <h2>User Growth</h2>
          <LineChart width={710} height={100} data={userGrowthData}>
            <Line type="monotone" dataKey="users" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

        {/* Event Participation Chart */}
        <div className="chart-card">
          <h2>Users Participation</h2>
          <BarChart width={710} height={150} data={eventParticipationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="participants" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Revenue Trends Chart */}
        <div className="chart-card">
          <h2>Revenue Trends</h2>
          <PieChart width={710} height={250}>
            <Pie
              data={revenueData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {revenueData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
      {/* <div className="calendar-card">
          <SharedCalendar />
      </div> */}
        
      


    </div>
  );
};

export default AdminDashboard;