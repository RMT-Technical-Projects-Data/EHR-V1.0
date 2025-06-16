import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaSearch } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";
import CalendarView from '../components/CalendarView';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedType, setSelectedType] = useState("Initial tax consultation");

  
  
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
          <div className="px-24 pt-12 bg-[#fefefe] h-full w-full">
            <h1 className="px-5 text-2xl font-semibold text-primary mb-6">
              Schedule an Appointment
            </h1>
            
            <CalendarView />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
