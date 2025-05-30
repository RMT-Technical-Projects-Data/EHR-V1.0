import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaSearch } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";
import Calendar from "react-calendar";
import "./AppointmentCalendar.css";
import "react-calendar/dist/Calendar.css";

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedType, setSelectedType] = useState("Initial tax consultation");

  const appointmentTypes = [
    { name: "Routine Checkup", duration: "30 minutues" },
    { name: "Follow-up Consultation", duration: "15 minutes" },
    { name: "Annual Physical Exam", duration: "45 minutes" },
    { name: "General Checkup", duration: "20 minutes" },
  ];

  const availableSlots = [
    "9:00 AM",
    "9:45 AM",
    "10:30 AM",
    "11:15 AM",
    "12:00 PM",
    "12:45 PM",
    "13:30 PM",
    "14:15 PM",
    "15:00 PM",
    "15:45 PM",
    "16:30 PM",
    "5:15 PM",
  ];
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="flex flex-col w-full h-full md:ml-64">
          <header
            className="bg-[#ffffff] h-16 flex items-center px-12 border-b border-gray-250 shadow-lg w-[100%]"
            style={{ zIndex: 1 }}
          >
            {/* MIDDLE: Search */}
            <div className="flex-1 flex justify-start rounded-lg left0-0">
              <div className="relative">
                <FaSearch className="absolute top-4 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter Patient ID"
                  className="border border-gray-300 rounded-xl pl-8 pr-4 py-2 w-96 focus:outline-none focus:ring-1 focus:ring-blue-400 text-lg"
                />
              </div>
            </div>

            {/* RIGHT: Date + User Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-gray-700 font-medium">
                <span>10 January 2024</span> (Demo Version)
              </div>

              <div className="flex items-center space-x-2">
                <img
                  src={profilePic}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                />
                <span className="font-semibold">Dr. Elizabeth</span>
              </div>
            </div>
          </header>
          <div className="px-24 pt-12 bg-[#fefefe] h-[100%] w-[100%]">
            <h1 className="px-5 text-2xl font-semibold text-primary mb-6">
              Schedule an Appointment
            </h1>
            <p className="px-5 bg-[#fefefe] text-red-700">
              *Appointment options are completely customizable and requirement
              respective.
            </p>
            <div className="p-6">
              {/* <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                Book an Appointment
                </h1> */}

              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-700 mb-4">
                  Select appointment type
                </h2>
                <button className="px-6 py-2 mb-3 bg-[#013550] text-white rounded-md shadow-md hover:bg-[#002a3d] transition-all">
                  Confirm Appointment
                </button>
                <div className="grid grid-cols-2 gap-4">
                  {appointmentTypes.map((type) => (
                    <div
                      key={type.name}
                      onClick={() => setSelectedType(type.name)}
                      className={`p-4 border rounded-lg cursor-pointer shadow-sm transition-all ${
                        selectedType === type.name
                          ? "bg-[#00b6b6] text-white"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      <p className="font-medium">{type.name}</p>
                      <p className="text-sm">{type.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex grid-cols-2">
                <div className="mb-16">
                  <h2 className="text-lg font-medium text-gray-700 mb-4">
                    Select time
                  </h2>
                  <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    className="mb-4 border rounded-lg p-4 w-full h-[89%]"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-medium text-gray-700 mb-4">
                    Select a time slot
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`p-6 text-center border rounded-lg cursor-pointer shadow-sm transition-all ${
                          selectedSlot === slot
                            ? "bg-[#00b6b6] text-white"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
