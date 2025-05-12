import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const SharedCalendar = () => {
  // Predefined events for special days and holidays
  const predefinedEvents = [
    { id: 'E001', title: 'New Year\'s Day', date: '2025-01-01', color: '#FF5733', description: 'Celebration of the new year.' },
    { id: 'E002', title: 'Independence Day', date: '2025-02-04', color: '#33C3FF', description: 'National holiday.' },
    { id: 'E003', title: 'Christmas Day', date: '2025-12-25', color: '#33FF57', description: 'Celebration of Christmas.' },
    { id: 'E004', title: 'Labor Day', date: '2025-05-01', color: '#FFC300', description: 'Holiday for workers.' },
    { id: 'E005', title: 'Special Event', date: '2025-04-15', color: '#C70039', description: 'A special event for everyone.' },
  ];

  const [events, setEvents] = useState(predefinedEvents);

  const generateEventId = () => {
    const maxId = events.reduce((max, event) => {
      const numericId = parseInt(event.id.replace('E', ''), 10);
      return numericId > max ? numericId : max;
    }, 0);
    return `E${(maxId + 1).toString().padStart(3, '0')}`;
  };

  const handleDateClick = (info) => {
    const title = prompt('Enter event title:');
    if (title) {
      const description = prompt('Enter event description:');
      const newEvent = { 
        id: generateEventId(), 
        title: title, 
        date: info.dateStr, 
        description 
      };
      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (info) => {
    const event = info.event;
    alert(`Event ID: ${event.extendedProps.id}\nEvent: ${event.title}\nDescription: ${event.extendedProps.description || 'No description provided.'}`);
  };

  return (
    <div 
    style={{ 
      padding: '10px', 
      width:'700px', 
      height:'560px', 
      overflowY: 'hidden', 
      backgroundColor: '#f0f0f0', 
      borderRadius: '8px', 
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' 
      }}>

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        dateClick={handleDateClick}
        eventClick={handleEventClick} // Add event click handler
        events={events}
        eventContent={(eventInfo) => (
          <div style={{ color: eventInfo.event.extendedProps.color || '#000' }}>
            <strong>{eventInfo.event.title}</strong>
            <br />
            <small>ID: {eventInfo.event.extendedProps.id}</small>
            <br />
            <small>{eventInfo.event.extendedProps.description}</small>
          </div>
        )}
        height="auto"
      />
    </div>
  );
};

export default SharedCalendar;