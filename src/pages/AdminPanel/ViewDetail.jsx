import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/AdminPanel/ViewDetail.css';

const ViewDetail = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Simulate fetching event data (replace with actual API or state logic)
    const fetchEvent = async () => {
      const events = [
        { id: '01', name: 'Sample Event 1', date: '2025-01-01', time: '10:00 AM - 12:00 PM', location: 'Location A', description: 'Description of Sample Event 1', status: 'Pending' },
        { id: '02', name: 'Sample Event 2', date: '2025-02-01', time: '10:00 AM - 12:00 PM', location: 'Location B', description: 'Description of Sample Event 2', status: 'Pending' },
        { id: '03', name: 'Sample Event 3', date: '2025-03-01', time: '10:00 AM - 12:00 PM', location: 'Location B', description: 'Description of Sample Event 3', status: 'Pending' },
      ];
      const event = events.find(e => e.id === id);
      setEvent(event);
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return <p>Loading event details...</p>; // Show a loading message while fetching data
  }

  return (
    <div className="view-detail-container">
      <h2>Event Details</h2>
      <p><strong>Event ID:</strong> {event.id}</p>
      <p><strong>Event Name:</strong> {event.name}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Time:</strong> {event.time}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p>
        <strong>Status:</strong> 
        <span className={`status ${event.status.toLowerCase()}`}>{event.status}</span>
      </p>
    </div>
  );
};

export default ViewDetail;