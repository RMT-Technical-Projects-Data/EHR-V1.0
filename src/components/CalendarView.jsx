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
    "full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-md bg-[#013550] text-white justify-center font-bold px-4 py-2 w-32 h-16 rounded-lg flex items-center gap-2 transition duration-300 hover:bg-[#002a3d]";

  return (
    <div>
      {/* Buttons Section */}
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
            className="w-16 h-16 mr-2 rounded-2xl"
          />
        </button>
        <button onClick={() => calendarInstanceRef.current?.next()}>
          <img
            src={nextIcon}
            alt="Next"
            className="w-16 h-16 mr-2 rounded-2xl"
          />
        </button>
      </div>

      {/* Calendar */}
      <div ref={calendarContainerRef} style={{ height: "100px" }} />

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-20">
          {/* Right Side Drawer Panel */}
          <div className="w-[450px] h-full bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-xl font-semibold">Schedule Appointment</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-600 text-sm"
              >
                Close ✕
              </button>
            </div>

            {/* Patient Info */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Patient Name
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4 flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Date of Birth
                </label>
                <input type="date" className="w-full border p-2 rounded" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Patient ID
                </label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            </div>

            {/* Provider Info */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Provider Name / ID
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Department
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>

            {/* Appointment Info */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
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
            <div className="mb-4 flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Start Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  End Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Location
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>

            {/* Status */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Status
              </label>
              <select className="w-full border p-2 rounded">
                <option>Scheduled</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Notes
              </label>
              <textarea
                className="w-full border p-2 rounded"
                rows={3}
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded border border-gray-400 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCustomScheduleCreate}
                className="px-4 py-2 rounded bg-[#013550] text-white hover:bg-blue-700"
              >
                Save Appointment
              </button>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-20">
          {/* Right Side Drawer Panel */}
          <div className="w-[800px] h-full bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-xl font-semibold">Schedule Appointment</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-600 text-sm"
              >
                Close ✕
              </button>
            </div>

            {/* Patient Info */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Patient Name
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4 flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Date of Birth
                </label>
                <input type="date" className="w-full border p-2 rounded" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Patient ID
                </label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            </div>

            {/* Provider Info */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Provider Name / ID
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Department
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>

            {/* Appointment Info */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
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
            <div className="mb-4 flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Start Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  End Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full border p-2 rounded"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Location
              </label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>

            {/* Status */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Status
              </label>
              <select className="w-full border p-2 rounded">
                <option>Scheduled</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Notes
              </label>
              <textarea
                className="w-full border p-2 rounded"
                rows={3}
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded border border-gray-400 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleCustomScheduleCreate}
                className="px-4 py-2 rounded bg-[#013550] text-white hover:bg-[#002a3d]"
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
