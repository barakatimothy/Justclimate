// ClimateJusticeEventsCalendar.js
import React, { useState } from 'react';
import './ClimateJusticeEventsCalendar.css'

const ClimateJusticeEventsCalendar = () => {
  // Sample events data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Global Climate Action Summit',
      date: '2024-03-15',
      location: 'Online',
      description: 'Join leaders and activists from around the world in this virtual summit for climate action.',
    },
    {
      id: 2,
      title: 'Local Community Cleanup',
      date: '2024-04-02',
      location: 'City Park',
      description: 'Get involved in the community cleanup to promote environmental awareness and sustainability.',
    },
  ]);

  return (
    <div>
      <h2>Climate Justice Events Calendar</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
      {/* Add a form to allow users to add new events */}
    </div>
  );
};

export default ClimateJusticeEventsCalendar;
