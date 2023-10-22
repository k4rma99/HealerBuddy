
import { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';

export const ScheduleCalendar = () => {
 const [events, setEvents] = useState([]);

 useEffect(() => {
    fetchEvents();
 }, []);

 const fetchEvents = async () => {
//   const client = createClient({ apiKey: 'your-api-key' });
//   const events = await client.listEvents();
//   setEvents(events);
 };

 return (
    <div className=''>
      <InlineWidget  url="https://calendly.com/your-username/your-event-name" />
    </div>
 );
};