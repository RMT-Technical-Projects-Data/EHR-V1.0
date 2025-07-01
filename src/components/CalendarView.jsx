import React, { useEffect, useRef, useState } from "react";
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
  const [showModal, setShowModal] = useState(false);
  const [newScheduleData, setNewScheduleData] = useState(null);

  useEffect(() => {
    const instance = new Calendar(calendarContainerRef.current, {
      defaultView: "week",
      taskView: true,
      scheduleView: true,
      useDetailPopup: false,
      useCreationPopup: false,
      template: {
        time: function (schedule) {
          return `<strong>${schedule.title}</strong>`;
        },
      },
    });

    instance.on("beforeCreateSchedule", (event) => {
      setNewScheduleData(event);
      setShowModal(true);
    });

    calendarInstanceRef.current = instance;

    return () => {
      instance.destroy();
    };
  }, []);

  const handleCustomScheduleCreate = () => {
    if (!newScheduleData) return;

    calendarInstanceRef.current?.createSchedules([
      {
        id: String(Date.now()),
        calendarId: "1",
        title: "Patient Appointment",
        category: "time",
        start: newScheduleData.start,
        end: newScheduleData.end,
      },
    ]);

    setShowModal(false);
    setNewScheduleData(null);
  };

  const viewOptions = ["day", "week", "month"];
  const btnClass =
    "bg-[#013550] text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#002a3d]";

  return (
    <div className="flex w-full h-screen">
      {/* Calendar Section */}
      <div
        className="transition-all duration-300 p-4"
        style={{ width: showModal ? "calc(100% - 500px)" : "100%" }}
      >
        {/* Controls */}
        <div className="calendar-controls flex gap-2 mb-4">
          <Menu as="div" className="relative inline-block text-left mr-2">
            <Menu.Button className={btnClass}>View</Menu.Button>
            <Menu.Items className="absolute left-0 mt-2 w-32 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              {viewOptions.map((view) => (
                <Menu.Item key={view}>
                  {({ active }) => (
                    <button
                      onClick={() =>
                        calendarInstanceRef.current?.changeView(view, true)
                      }
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

          <button
            onClick={() => calendarInstanceRef.current?.today()}
            className={btnClass}
          >
            Today
          </button>
          <button onClick={() => calendarInstanceRef.current?.prev()}>
            <img
              src={prevIcon}
              alt="Previous"
              className="w-10 h-10 rounded-2xl"
            />
          </button>
          <button onClick={() => calendarInstanceRef.current?.next()}>
            <img
              src={nextIcon}
              alt="Next"
              className="w-10 h-10 rounded-2xl"
            />
          </button>
        </div>

        {/* Calendar Mount Point */}
        <div
          ref={calendarContainerRef}
          style={{height:"100px"}}
        />
      </div>

      {/* Appointment Form Drawer */}
      {showModal && (
        <div className="w-[450px] h-full bg-white shadow-xl p-6 overflow-y-auto border-l border-gray-200">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-xl font-semibold">Schedule Appointment</h2>
            <button
              onClick={() => setShowModal(false)}
              className="text-gray-500 hover:text-red-600 text-sm"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Patient Name
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>

            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input type="date" className="w-full border p-2 rounded" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Patient ID
                </label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            </div>
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Contact
                </label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Provider Name / ID
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Reason for Visit
                </label>
                <textarea className="w-full border p-2 rounded" rows={3}></textarea>
              </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <select className="w-full border p-2 rounded">
                <option>Dermatology</option>
                <option>OPD</option>
                <option>PEADS</option>
                <option>ER</option>
                <option>Cardiology</option>
                <option>Dentistry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Appointment Type
              </label>
              <select className="w-full border p-2 rounded">
                <option>Choose Type</option>
                <option>New Patient</option>
                <option>Follow-Up</option>
                <option>Routine</option>
                <option>Telehealth</option>
                <option>Emergency</option>
              </select>
            </div>

            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input type="datetime-local" className="w-full border p-2 rounded" />
              </div>
              
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Notes
              </label>
              <textarea className="w-full border p-2 rounded" rows={3}></textarea>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCustomScheduleCreate}
                className="px-4 py-2 bg-[#013550] text-white rounded hover:bg-[#002a3d]"
              >
                Save Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
