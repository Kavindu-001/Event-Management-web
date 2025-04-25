import React, { useState, useEffect } from 'react';
import '../../styles/AdminPanel/AdminReport.css';
import Sidebar from '../../components/Sidebar';

const AdminReport = () => {

useEffect(() => {
    document.body.classList.add('admin-report-page');
        return () => {
    document.body.classList.remove('admin-report-page');
    };
}, []);
const [events, setEvents] = useState([]);
const [summary, setSummary] = useState({
    total: 0,
    pending: 0,
    live: 0,
    ended: 0,
});

  useEffect(() => {
    // Simulate fetching event data (replace with actual API or state logic)
    const fetchEvents = async () => {
      const eventData = [
        { id: '01', name: 'Sample Event 1', status: 'Pending' },
        { id: '02', name: 'Sample Event 2', status: 'Live' },
        { id: '03', name: 'Sample Event 3', status: 'End' },
        { id: '04', name: 'Sample Event 4', status: 'Pending' },
        { id: '04', name: 'Sample Event 4', status: 'Pending' },
        { id: '04', name: 'Sample Event 4', status: 'Pending' },
        { id: '01', name: 'Sample Event 1', status: 'Pending' },
        { id: '02', name: 'Sample Event 2', status: 'Live' },
        { id: '03', name: 'Sample Event 3', status: 'End' },
      ];
      setEvents(eventData);

      // Calculate summary
      const total = eventData.length;
      const pending = eventData.filter(event => event.status === 'Pending').length;
      const live = eventData.filter(event => event.status === 'Live').length;
      const ended = eventData.filter(event => event.status === 'End').length;

      setSummary({ total, pending, live, ended });
    };

    fetchEvents();
  }, []);

  return (
    <div className="admin-report-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <h1>Admin Report</h1>

      {/* Summary Section */}
      <div className="summary-section">
        <div className="summary-card">
          <h3>Total Events</h3>
          <p>{summary.total}</p>
        </div>
        <div className="summary-card">
          <h3>Pending Events</h3>
          <p>{summary.pending}</p>
        </div>
        <div className="summary-card">
          <h3>Live Events</h3>
          <p>{summary.live}</p>
        </div>
        <div className="summary-card">
          <h3>Ended Events</h3>
          <p>{summary.ended}</p>
        </div>
      </div>

      {/* Event Table */}
      <div className="event-table">
        <h2>Event Details</h2>
        <table>
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Event Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.name}</td>
                <td>{event.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReport;