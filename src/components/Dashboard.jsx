import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaUserInjured,
  FaUserFriends,
  FaDollarSign,
  FaMoneyBillAlt,
  FaChartBar,
  FaSearch,
} from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import profilePic from "../assets/profilePic.jpg";
import profilePic1 from "../assets/cap (1).jpg";
import profilePic2 from "../assets/cap (2).jpg";
import profilePic3 from "../assets/cap (3).jpg";
import bgImage from "../assets/bgMain3.jpg";

export default function Dashboard() {
  const values = [4, 1, 3, 5, 3];
  const colors = [
    "bg-[#013550]",
    "bg-[#00b6c6]",
    "bg-[#013550]",
    "bg-[#00b6c6]",
    "bg-[#013550]",
  ];
  const labels = [
    "Cardiology",
    "Dentistry",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
  ]; // X-axis labels
  const [to, setTo] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    alert("Memo Sent!");
    // Handle send logic here
  };

  const handleDiscard = () => {
    setTo("");
    setCategory("");
    setMessage("");
  };

  const data = [
    { name: "Revenue", value: 9157000, color: "#013550" }, // Green
    { name: "Expenses", value: 383000, color: "#F44336" }, // Red
    { name: "Pending Payments", value: 570000, color: "#00b6c6" }, // Orange
  ];

  return (
    <div className="flex-grow pr-0 min-h-screen bg-gray-100 text-sm text-gray-800 flex flex-col w-full h-full ml-0 md:ml-[270px] transition-all duration-300">
      {/* ========== NAVBAR (GREYISH SHADE) ========== */}
      <header
        className="bg-[#ffffff] h-16 flex items-center px-12 border-b border-gray-250 shadow-lg"
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

      {/* ========== MAIN LAYOUT: Content | Right Panel ========== */}
      <div
        className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-12 py-8 max-w-full w-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)", // White overlay with 50% opacity
            zIndex: 0, // Make sure the overlay is on top of the background image
          }}
        />
        {/* ========== MAIN CONTENT ========== */}
        <main
          className="flex flex-col space-y-6 col-span-2"
          style={{
            backgroundImage: "url('../assets/bgMain.jpg')",
            backgroundSize: "contain",
          }}
        >
          {/* ---------- ROW 1: Stats (3 Cards) ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Admitted Patients */}
            <div
              className="rounded-md shadow-lg p-6 flex flex-col justify-between h-full relative"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // For Safari support
                background: "rgba(255, 255, 255, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <FaUserInjured className="text-gray-500" />
                <h2 className="text-gray-600 text-sm">
                  Total Admitted Patients
                </h2>
              </div>
              <p className="text-4xl font-bold text-gray-800 leading-tight">
                238
              </p>
              <span className="absolute top-4 right-4 bg-[#00b6c6] text-white text-[12px] font-semibold px-2 py-[2px] rounded-full">
                +12.5%
              </span>
            </div>

            {/* Patient Status */}
            <div
              className="bg-white rounded-md shadow-lg p-6 flex flex-col justify-between h-full"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // For Safari support
                background: "rgba(255, 255, 255, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <FaChartBar className="text-gray-500" />
                <h2 className="text-gray-600 text-sm">Patient Status</h2>
              </div>
              <p className="text-4xl font-bold text-gray-800 leading-tight">
                298
              </p>
            </div>

            {/* Total Active Staff */}
            <div
              className="bg-white rounded-md shadow-lg p-6 flex flex-col justify-between h-full relative"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // For Safari support
                background: "#00b6c640",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <FaUserFriends className="text-gray-500" />
                <h2 className="text-gray-600 text-sm">Total Active Staff</h2>
              </div>
              <p className="text-4xl font-bold text-gray-800 leading-tight">
                85
              </p>
              <span className="absolute top-4 right-4 bg-[#00b6c6] text-white text-[12px] font-semibold px-2 py-[2px] rounded-full">
                92%
              </span>
            </div>
          </div>

          {/* ---------- ROW 2: Stats (3 Cards) ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Revenue */}
            <div
              className="bg-white rounded-md shadow-lg p-6"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // For Safari support
                background: "rgba(255, 255, 255, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <FaDollarSign className="text-gray-500" />
                <h2 className="text-gray-600 text-sm ">Revenue</h2>
              </div>
              <p className="text-4xl font-bold text-gray-800 mb-2">
                9,157,000/-
              </p>
              <p className="text-xs text-gray-500">1,457,000/- petty cash</p>
            </div>

            {/* Expenses */}
            <div
              className="bg-white rounded-md shadow-lg p-6"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // For Safari support
                background: "rgba(255, 255, 255, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <FaMoneyBillAlt className="text-gray-500" />
                <h2 className="text-gray-600 text-sm">Expenses</h2>
              </div>
              <p className="text-4xl font-bold text-gray-800 mb-2">383,000/-</p>
              <p className="text-xs text-gray-500">10:30 am</p>
            </div>

            {/* Pending Payments */}
            <div
              className="rounded-md shadow-lg p-6"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // For Safari support
                background: "rgba(255, 255, 255, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <FaMoneyBillAlt className="text-gray-500" />
                <h2 className="text-gray-600 text-sm">Pending Payments</h2>
              </div>
              <p className="text-4xl font-bold text-gray-800 mb-2">570,000/-</p>
              <p className="text-xs text-gray-500">500,000/- petty cash</p>
            </div>
          </div>

          {/* ---------- ROW 3: Charts (2 Cards) ---------- */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-[100%] ">
            <list
              className="grid grid-cols-1 md:grid-rows-0 bg-white p-5 rounded-md shadow-lg"
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // For Safari support
                background: "rgba(255, 255, 255, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <FaCalendarAlt className="text-gray-500" />
                <h2 className="text-gray-600 text-sm">Upcoming Appointments</h2>
              </div>
              <ul className="rounded-md mb-5">
                <div
                  class="bg-white p-4 pl-4 rounded-md shadow-lg flex-1 flex justify-between items-center"
                  style={{
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)", // For Safari support
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    borderRadius: "16px",
                    padding: "20px",
                  }}
                >
                  <div class="text-black">
                    {" "}
                    <p class="text-2xl font-bold"> 10:30 AM</p>
                    <p class="text-xl font-bold "> 2025-02-10</p>
                    <div className="flex flex-row gap-3 align-middle">
                      <img
                        src={profilePic2}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                      />
                      <p class="text-lg color-grey mt-2">Thomas Keen</p>
                    </div>
                  </div>
                  <a href="/emr/00003/9q6u-5z4m-ubra">
                    <div class="bg-[#00b6b6] text-white hover:bg-[#006973] px-4 py-2 w-32 rounded-md shadow-lg text-center mr-10">
                      Join
                    </div>
                  </a>
                </div>
              </ul>
              <ul className="rounded-md mb-5">
                <div
                  class="bg-white p-4 rounded-md shadow-lg flex-1 flex justify-between items-center gap-4"
                  style={{
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)", // For Safari support
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    borderRadius: "16px",
                    padding: "20px",
                  }}
                >
                  <div class="text-black">
                    {" "}
                    <p class="text-2xl font-bold"> 11:00 AM</p>
                    <p class="text-xl font-bold "> 2025-02-10</p>
                    <div className="flex flex-row gap-3 align-middle">
                      <img
                        src={profilePic3}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                      />
                      <p class="text-lg color-grey mt-2">William Smith</p>
                    </div>
                  </div>
                  <a href="/emr/00003/9q6u-5z4m-ubra">
                    <div class="bg-[#00b6b6] text-white hover:bg-[#006973] px-4 py-2 w-32 rounded-md shadow-lg text-center mr-10">
                      Join
                    </div>
                  </a>
                </div>
              </ul>
              <ul className="rounded-md mb-5">
                <div
                  class="bg-white p-4 rounded-md shadow-lg flex-1 flex justify-between items-center gap-4"
                  style={{
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)", // For Safari support
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    borderRadius: "16px",
                    padding: "20px",
                  }}
                >
                  <div class="text-black">
                    {" "}
                    <p class="text-2xl font-bold"> 12:00 AM</p>
                    <p class="text-xl font-bold "> 2025-02-10</p>
                    <div className="flex flex-row gap-3 align-middle">
                      <img
                        src={profilePic1}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                      />
                      <p class="text-lg color-grey mt-2">Hannah Eli</p>
                    </div>
                  </div>
                  <a href="/emr/00003/9q6u-5z4m-ubra">
                    <div class="bg-[#00b6b6] text-white hover:bg-[#006973] px-4 py-2 w-32 rounded-md shadow-lg text-center mr-10">
                      Join
                    </div>
                  </a>
                </div>
              </ul>
            </list>

            <div
              className="max-w-md mx-auto p-6 rounded-lg shadow-lg border border-gray-300 h-[85%]"
              style={{
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)", // For Safari support
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "16px",
                padding: "20px",
                zIndex: 1,
              }}
            >
              <h2 className="text-md text-gray-700 mb-4">Create Memo</h2>

              {/* To Field */}
              <label className="text-sm text-gray-600">To</label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Enter recipient"
                className="w-full border p-2 rounded-md mb-3 focus:outline-none focus:ring-2 focus:focus:ring-[#006973]"
              />

              {/* Category Dropdown */}
              <label className="text-sm text-gray-600">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border p-2 rounded-md mb-3 hover:ring-[#006973] focus:outline-none focus:ring-2 focus:ring-[#006973]"
              >
                <option value="">Select category</option>
                <option value="urgent">Urgent</option>
                <option value="general">General</option>
                <option value="info">Information</option>
              </select>

              {/* Message Box */}
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full border p-2 rounded-md mb-4 h-[43%] focus:outline-none focus:ring-2 focus:ring-[#006973]"
              ></textarea>

              {/* Buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleDiscard}
                  className="px-4 py-2 text-sm text-gray-600 border border-gray-400 rounded-md hover:bg-gray-200 transition"
                >
                  Discard
                </button>
                <button
                  onClick={handleSend}
                  className="px-4 py-2 text-sm bg-[#00b6b6] hover:bg-[#006973] text-white rounded-md transition"
                >
                  Send
                </button>
              </div>
            </div>
            {/* Patient Distribution */}
            {/* <div className="bg-white rounded-md shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FaChartBar className="text-gray-500" />
                <h2 className="text-gray-600 text-sm font-semibold">
                  Patient Distribution
                </h2>
              </div>
              <div className="mt-4 h-[250px] border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                Bar Chart (Placeholder)
              </div>
              <p className="text-xs text-gray-500 mt-2">500,000/- petty cash</p>
            </div> */}

            {/* Financial Analytics */}
            {/* <div className="bg-white rounded-md shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FaChartBar className="text-gray-500" />
                <h2 className="text-gray-600 text-sm font-semibold">
                  Financial Analytics
                </h2>
              </div>
              <div className="mt-4 h-[250px] border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                Bar Chart (Placeholder)
              </div>
            </div> */}
          </div>
        </main>

        {/* ========== RIGHT PANEL ========== */}
        <aside
          className="flex flex-col space-y-1 border border-gray-200 rounded-md shadow-lg p-6 col-span-1 h-[90.5%]"
          style={{
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)", // For Safari support
            background: "rgba(255, 255, 255, 0.2)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          {/* ---------- ROW 3: Charts (2 Cards) ---------- */}
          <div className="grid grid-cols-1 md:grid-rows-2 gap-6">
            {/* Patient Distribution */}
            <div className="bg-white rounded-md shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FaChartBar className="text-gray-500" />
                <h2 className="text-gray-600 text-sm font-semibold">
                  Patient Distribution
                </h2>
              </div>
              {/* <div className="mt-4 h-[250px] border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm"> */}
              <div className="mt-4 w-full max-w-lg mx-auto">
                {/* Y-axis Label */}

                {/* Histogram Container */}
                <div className="h-[280px] border-2 border-dashed border-gray-300 flex items-end justify-around p-4 relative">
                  {values.map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {/* Bar */}
                      <div
                        className={`w-12 ${
                          colors[index % colors.length]
                        } rounded-t-lg transition-all duration-300`}
                        style={{ height: `${value * 40}px` }} // Scale height
                      />
                      {/* X-axis Labels */}
                      <span className="text-[10px] text-gray-700 mt-2">
                        {labels[index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* </div> */}
            </div>

            {/* Financial Analytics */}
            <div className="bg-white rounded-md shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FaChartBar className="text-gray-500" />
                <h2 className="text-gray-600 text-sm font-semibold">
                  Financial Analytics
                </h2>
              </div>
              <div className="mt-4 h-[280px] border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                {/* <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-full max-w-md mx-auto"> */}
                {/* <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Financial Overview
                  </h2> */}

                <PieChart width={270} height={270}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => new Intl.NumberFormat().format(value)}
                  />
                  <Legend />
                </PieChart>
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* UPDATES */}
          {/* <div className="bg-gray-50 rounded-md p-6 shadow-sm">
            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2 mb-4">
              UPDATES
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>ANN-202: 50% discount for 7th Patients</li>
              <li>ANR-360: 2 new staff joined</li>
              <li>AMB-92: Meeting scheduled at 10 am</li>
              <li>ANR-203: Some update text</li>
            </ul>
          </div> */}

          {/* ED STATUS */}
          {/* <div className="bg-green-100 rounded-md p-6 shadow-sm">
            <h3 className="text-green-700 font-semibold text-lg mb-2">
              ED Status
            </h3>
            <p className="text-green-800 font-semibold text-md mb-3">
              Manageable Patient Flow
            </p>
            <p className="text-sm text-gray-700">
              Latest Attendant:{" "}
              <span className="font-semibold">Dr. Humayun K</span>
            </p>
          </div> */}
        </aside>
      </div>
    </div>
  );
}
