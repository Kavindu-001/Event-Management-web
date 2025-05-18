import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';
import '../../styles/AdminPanel/AdminUsers.css';
import { ButtonGroup } from '@mui/joy';

const AdminUsers = () => {
  const [events, setEvents] = useState([
    { 
      id: '01', 
      name: 'Sample Event 1', 
      date: '2025-01-01', 
      time: '10:00 AM - 12:00 PM', 
      location: 'Location A', 
      description: 'Description of Sample Event 1', 
      status: 'Pending' 
    },

    { 
      id: '02', 
      name: 'Sample Event 2', 
      date: '2025-02-01', 
      time: '10:00 AM - 12:00 PM', 
      location: 'Location B', 
      description: 'Description of Sample Event 2', 
      status: 'Pending' 
    },

    { 
      id: '03', 
      name: 'Sample Event 3', 
      date: '2025-03-01', 
      time: '10:00 AM - 12:00 PM', 
      location: 'Location B', 
      description: 'Description of Sample Event 3', 
      status: 'Pending' 
    },

    // Add more events as needed
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('admin-users-page');
    return () => {
      document.body.classList.remove('admin-users-page');
    };
  }, []);

  const handleApprove = (id) => {
    setEvents(events.map(event => event.id === id ? { ...event, status: 'Live' } : event));
  };

  const handleDecline = (id) => {
    setEvents(events.map(event => event.id === id ? { ...event, status: 'End' } : event));
  };

  const handleViewDetail = (id) => {
    navigate(`/ViewDetail/${id}`); // Navigate to the ViewDetail page with the event ID
  };

  return (
    <div>
      <AdminSidebar />

      <div className='user-activity-list-table'>
        <h2>User Activity List Table</h2>
        <div className='user-activity-list-container'>
          <table className='user-activity-list'>
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
                <th>Action</th>
                <th>View Details</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.time}</td>
                  <td>{event.location}</td>
                  <td>{event.description}</td>
                  <td>
                    <ButtonGroup>
                      <button className='btn btn-primary' onClick={() => handleApprove(event.id)}>Approve</button>
                      <button className='btn btn-danger' onClick={() => handleDecline(event.id)}>Decline</button>
                    </ButtonGroup>
                  </td>
                  <td>
                    
                    <button className='btn btn-info' onClick={() => handleViewDetail(event.id)} >View</button>
                  </td>
                  <td>
                    <span className={`status ${event.status.toLowerCase()}`}>{event.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;