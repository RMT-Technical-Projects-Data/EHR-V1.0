import React, { useEffect, useRef } from "react";
import Calendar from "tui-calendar";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import { Menu } from "@headlessui/react";
import nextIcon from "../assets/next-icon.png";
import prevIcon from "../assets/prev-icon.png";

const CalendarView = () => {
  const calendarContainerRef = useRef(null);
  const calendarInstanceRef = useRef(null);

  useEffect(() => {
    const instance = new Calendar(calendarContainerRef.current, {
      defaultView: "week",
      taskView: true,
      scheduleView: true,
      useDetailPopup: true,
      useCreationPopup: true,
      template: {
        time: function (schedule) {
          return `<strong>${schedule.title}</strong>`;
        },
      },
    });

    instance.createSchedules([
      {
        id: "1",
        calendarId: "1",
        title: "Team Meeting",
        category: "time",
        start: "2025-06-05T10:30:00+09:00",
        end: "2025-06-05T12:30:00+09:00",
      },
    ]);

    calendarInstanceRef.current = instance;

    return () => {
      instance.destroy();
    };
  }, []);

  const viewOptions = ["day", "week", "month"];

  const handleViewChange = (view) => {
    calendarInstanceRef.current?.changeView(view, true);
  };

  const btnClass =
    "bg-[#013550] text-white justify-center font-bold px-4 py-2 w-32 h-16 rounded-lg flex items-center gap-2 transition duration-300 hover:bg-[#002a3d]";

  return (
    <div>
      {/* Buttons Section */}
      <div className="calendar-controls flex gap-2 mb-4">
        {/* Dropdown Button */}
        <Menu as="div" className="relative inline-block text-left mr-2">
          <Menu.Button className={btnClass}>View</Menu.Button>
          <Menu.Items className="absolute left-0 mt-2 w-32  origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            {viewOptions.map((view) => (
              <Menu.Item key={view}>
                {({ active }) => (
                  <button
                    onClick={() => handleViewChange(view)}
                    className={`${
                      active ? "bg-blue-100" : ""
                    } block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-blue-50`}
                  >
                    {view.charAt(0).toUpperCase() + view.slice(1)} View
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>

        {/* Navigation Buttons */}
        <button
          onClick={() => calendarInstanceRef.current?.today()}
          className={btnClass}
        >
          Today
        </button>
        <button
          onClick={() => calendarInstanceRef.current?.prev()}
      
        ><img src={prevIcon} alt="Previous" className="w-16 h-16 mr-2 rounded-2xl" />
          
        </button>
        <button
          onClick={() => calendarInstanceRef.current?.next()}
          
        ><img src={nextIcon} alt="Next" className="w-16 h-16 mr-2 rounded-2xl" />
        
        </button>
      </div>

      {/* Calendar Mount Point */}
      <div ref={calendarContainerRef} style={{ height: "150px" }} />
    </div>
  );
};

export default CalendarView;
