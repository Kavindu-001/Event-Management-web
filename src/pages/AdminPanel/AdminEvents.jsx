import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar'
import {  Card, CardContent } from '@mui/material'
import SharedCalendar from '../../components/SharedCalendar' // Import SharedCalendar component
import '../../styles/AdminPanel/AdminEvents.css'
const AdminEvents = () => {
  
  useEffect(() => {
    document.body.classList.add('admin-events-page');
    return () => {
      document.body.classList.remove('admin-events-page');
    };
  }, []);
  return (
    <div className='admin-events-page'>
      <Sidebar />
      <Card className="card-calendar">
        <CardContent className="card-content">
          <h2>Shared Calendar</h2>
          <SharedCalendar />
        </CardContent>  
      </Card>

      <div className='event-list-table'>
        <h2>Event List Table</h2>
        <div className='event-list-container'>
          <table className='event-list'>
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data, replace with actual data */}
              <tr>
                <td>01</td>
                <td>Sample Event 1</td>
                <td>2025-01-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Location A</td>
                <td>Description of Sample Event 1</td>
              </tr>
              <tr>
                <td>02</td>
                <td>Sample Event 2</td>
                <td>2025-02-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Location B</td>
                <td>Description of Sample Event 2</td>
              </tr>
              <tr>
                <td>03</td>
                <td>Sample Event 3</td>
                <td>2025-03-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Location B</td>
                <td>Description of Sample Event 3</td>
              </tr>
              <tr>
                <td>04</td>
                <td>Sample Event 4</td>
                <td>2025-01-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Location A</td>
                <td>Description of Sample Event 1</td>
              </tr>
              <tr>
                <td>05</td>
                <td>Sample Event 5</td>
                <td>2025-01-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Location A</td>
                <td>Description of Sample Event 1</td>
              </tr>
              <tr>
                <td>06</td>
                <td>Sample Event 6</td>
                <td>2025-01-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Location A</td>
                <td>Description of Sample Event 1</td>
              </tr>
              <tr>
                <td>07</td>
                <td>Sample Event 7</td>
                <td>2025-01-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Location A</td>
                <td>Description of Sample Event 1</td>
              </tr>
              <tr>
                <td>08</td>
                <td>Sample Event 8</td>
                <td>2025-01-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Location A</td>
                <td>Description of Sample Event 1</td>
              </tr>
              <tr>
                <td>09</td>
                <td>Sample Event 9</td>
                <td>2025-01-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Location A</td>
                <td>Description of Sample Event 1</td>
              </tr>
              <tr>
                <td>010</td>
                <td>Sample Event 10</td>
                <td>2025-01-01</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Location A</td>
                <td>Description of Sample Event 1</td>
              </tr>
            
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    
    </div>
  )
}

export default AdminEvents
