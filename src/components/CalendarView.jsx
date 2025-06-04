import React, { useEffect, useRef } from 'react';
import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';

const CalendarView = () => {
  const calendarRef = useRef(null);
  let calendarInstance = null;

  useEffect(() => {
    calendarInstance = new Calendar(calendarRef.current, {
      defaultView: 'week',
      taskView: true,
      scheduleView: true,
      useDetailPopup: true,
      useCreationPopup: true,
      template: {
        time: function(schedule) {
          return `<strong>${schedule.title}</strong>`;
        }
      }
    });

    calendarInstance.createSchedules([
      {
        id: '1',
        calendarId: '1',
        title: 'Team Meeting',
        category: 'time',
        start: '2025-06-05T10:30:00+09:00',
        end: '2025-06-05T12:30:00+09:00'
      }
    ]);

    return () => {
      calendarInstance.destroy();
    };
  }, []);

  return <div ref={calendarRef} style={{ height: '0px' }} />;
};

export default CalendarView;
