import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const SharedCalendar = () => {
  // Predefined events for special days and holidays
  const predefinedEvents = [
    { title: 'New Year\'s Day', date: '2025-01-01', color: '#FF5733', description: 'Celebration of the new year.' },
    { title: 'Independence Day', date: '2025-02-04', color: '#33C3FF', description: 'National holiday.' },
    { title: 'Christmas Day', date: '2025-12-25', color: '#33FF57', description: 'Celebration of Christmas.' },
    { title: 'Labor Day', date: '2025-05-01', color: '#FFC300', description: 'Holiday for workers.' },
    { title: 'Special Event', date: '2025-04-15', color: '#C70039', description: 'A special event for everyone.' },
  ];

  const [events, setEvents] = useState(predefinedEvents);

  const handleDateClick = (info) => {
    const title = prompt('Enter event title:');
    if (title) {
      const description = prompt('Enter event description:');
      const newEvent = { title, date: info.dateStr, description };
      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (info) => {
    const event = info.event;
    alert(`Event: ${event.title}\nDescription: ${event.extendedProps.description || 'No description provided.'}`);
  };

  return (
    <div style={{ padding: '10px' }}>
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
            <small>{eventInfo.event.extendedProps.description}</small>
          </div>
        )}
        height="auto"
      />
    </div>
  );
};

export default SharedCalendar;