import React, { useState } from "react";
import { FaDownload, FaPlus, FaSearch } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";
import Sidebar from "../components/Sidebar";

const Patient = () => {
  const [activeTab, setActiveTab] = useState("Demographics");

  const appointments = [
    {
      id: 1,
      type: "Follow-Up",
      doctor: "Dr. Collins",
      location: "East Medical Center",
      date: "28/05/2023",
      duration: "30 min",
      insurance: "Check",
      status: "Pending",
    },
    {
      id: 2,
      type: "Chronic Care",
      doctor: "Dr. Meizer",
      location: "East Medical Center",
      date: "28/05/2023",
      duration: "45 min",
      insurance: "Check",
      status: "Confirmed",
    },
    {
      id: 3,
      type: "Urgent",
      doctor: "Dr. Branch",
      location: "West Medical Center",
      date: "05/06/2023",
      duration: "60 min",
      insurance: "Check",
      status: "Unconfirmed",
    },
    {
      id: 4,
      type: "Chronic Care",
      doctor: "Dr. Meizer",
      location: "East Medical Center",
      date: "05/06/2023",
      duration: "45 min",
      insurance: "Check",
      status: "Unconfirmed",
    },
    {
      id: 5,
      type: "Follow-Up",
      doctor: "Dr. Collins",
      location: "East Medical Center",
      date: "10/06/2023",
      duration: "30 min",
      insurance: "Check",
      status: "Pending",
    },
    {
      id: 6,
      type: "Chronic Care",
      doctor: "Dr. Branch",
      location: "West Medical Center",
      date: "10/06/2023",
      duration: "45 min",
      insurance: "Check",
      status: "Confirm",
    },
  ];

  const documents = [
    {
      id: 1,
      type: "Report 11485.pdf",
      doctor: "Dr. Collins",
      location: "East Medical Center",
      date: "28/05/2023",
      duration: "30 min",
      insurance: "Check",
      status: "Pending",
    },
    {
      id: 2,
      type: "Report 11485.pdf",
      doctor: "Dr. Meizer",
      location: "East Medical Center",
      date: "28/05/2023",
      duration: "45 min",
      insurance: "Check",
      status: "Confirmed",
    },
    {
      id: 3,
      type: "Report 11485.pdf",
      doctor: "Dr. Branch",
      location: "West Medical Center",
      date: "05/06/2023",
      duration: "60 min",
      insurance: "Check",
      status: "Unconfirmed",
    },
    {
      id: 4,
      type: "Report 11485.pdf",
      doctor: "Dr. Meizer",
      location: "East Medical Center",
      date: "05/06/2023",
      duration: "45 min",
      insurance: "Check",
      status: "Unconfirmed",
    },
    {
      id: 5,
      type: "Report 11485.pdf",
      doctor: "Dr. Collins",
      location: "East Medical Center",
      date: "10/06/2023",
      duration: "30 min",
      insurance: "Check",
      status: "Pending",
    },
    {
      id: 6,
      type: "Report 11485.pdf",
      doctor: "Dr. Branch",
      location: "West Medical Center",
      date: "10/06/2023",
      duration: "45 min",
      insurance: "Check",
      status: "Confirm",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-red-500 font-semibold";
      case "Confirmed":
        return "text-green-500 font-semibold";
      case "Unconfirmed":
        return "text-gray-500 font-semibold";
      default:
        return "text-black";
    }
  };

  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="flex flex-col w-full h-full md:ml-64">
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

          <div className="px-20 py-6 rounded-lg bg-[#fefefe] h-[100%]">
            {/* Add New Button */}
            <div className="flex justify-end mt-0">
              <button className="px-4 py-2 text-sm bg-[#013550]  text-white rounded-md hover:bg-[#002a3d] flex align-middle">
                <FaPlus className="mt-[1.5%] mr-2" />
                <span>Add New Patient</span>
              </button>
            </div>
            {/* Tabs */}
            <div className="flex border-b border-[#dcdcdc] shadow-[0_4px_6px_-3px_rgba(0,0,0,0.1),0_1px_0_0_rgba(0,0,0,0.06)]">
              {[
                "Demographics",
                "Insurance",
                "Appointment Log",
                "Documents",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 mx-1 py-2 text-sm font-medium rounded-t-md   ${
                    activeTab === tab
                      ? "bg-[#013550] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "Demographics" && (
              <>
                {/* Patient Information */}
                <h2 className="text-gray-700 font-semibold mt-4">
                  Patient Information
                </h2>
                <p className="bg-[#fefefe] text-red-700">*This section is completely customizable and requirement respective.</p>
                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {/* Left Column */}
                  <div className="space-y-3">
                    {[
                      {
                        label: "Patient ID",
                        placeholder: "Enter ID",
                        required: true,
                      },
                      {
                        label: "Patient Name",
                        placeholder: "Enter Name",
                        required: true,
                      },
                      {
                        label: "Date of Birth",
                        placeholder: "Enter DOB",
                        required: true,
                      },
                      {
                        label: "Age/Sex",
                        placeholder: "Age/Sex",
                        required: true,
                      },
                      {
                        label: "Contact#",
                        placeholder: "Enter Cell Number",
                        required: true,
                      },
                      { label: "Address", placeholder: "Enter Address" },
                      { label: "Occupation", placeholder: "Enter Occupation" },
                      {
                        label: "Marital Status",
                        placeholder: "Marital Status",
                      },
                      { label: "CNIC#", placeholder: "CNIC #" },
                    ].map((field, index) => (
                      <div key={index} className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">
                          {field.label}{" "}
                          {field.required && (
                            <span className="text-red-500">*</span>
                          )}
                        </label>
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          className="border p-2 rounded-md focus:ring-2 focus:ring-[#00b6c6]"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-3">
                    {[
                      {
                        label: "Emergency Contact",
                        placeholder: "Enter Name",
                        required: true,
                      },
                      {
                        label: "Relationship",
                        placeholder: "Enter Relationship",
                        required: true,
                      },
                      {
                        label: "Emergency Contact#",
                        placeholder: "Enter Cell Number",
                        required: true,
                      },
                    ].map((field, index) => (
                      <div key={index} className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">
                          {field.label}{" "}
                          {field.required && (
                            <span className="text-red-500">*</span>
                          )}
                        </label>
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          className="border p-2 rounded-md focus:ring-2 focus:ring-[#00b6c6]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            {activeTab === "Insurance" && (
              <>
                {/* Patient Information */}
                <h2 className="text-gray-700 font-semibold mt-4">
                  Insurance Information
                </h2>

                {/* Form Fields */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {/* Left Column */}
                  <div className="space-y-3">
                    {[
                      {
                        label: "Insurance Company Name",
                        placeholder: "Enter Name",
                        required: true,
                      },
                      {
                        label: "Insurance Number",
                        placeholder: "Enter Cell Number",
                        required: true,
                      },
                    ].map((field, index) => (
                      <div key={index} className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">
                          {field.label}{" "}
                          {field.required && (
                            <span className="text-red-500">*</span>
                          )}
                        </label>
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          className="border p-2 rounded-md focus:ring-2 focus:ring-[#00b6c6]"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-3">
                    {[
                      //   {
                      //     label: "Emergency Contact",
                      //     placeholder: "Enter Name",
                      //     required: true,
                      //   },
                      //   {
                      //     label: "Relationship",
                      //     placeholder: "Enter Relationship",
                      //     required: true,
                      //   },
                      //   {
                      //     label: "Emergency Contact#",
                      //     placeholder: "Enter Cell Number",
                      //     required: true,
                      //   },
                    ].map((field, index) => (
                      <div key={index} className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700">
                          {field.label}{" "}
                          {field.required && (
                            <span className="text-red-500">*</span>
                          )}
                        </label>
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          className="border p-2 rounded-md focus:ring-2 focus:ring-[#00b6c6]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            {activeTab === "Appointment Log" && (
              <>
                <div className="px-6">
                  {/* Table Header */}
                  <div className="flex justify-between items-center mb-6">
                    {/* Appointment Log */}
                    <h2 className="text-gray-700 font-semibold mt-4">
                      Appointment Log
                    </h2>
                    <button className="px-4 py-2 bg-[#013550] text-white text-sm rounded-md hover:bg-[#002a3d]">
                      Add Appointment
                    </button>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      {/* Table Head */}
                      <thead className="bg-gray-100">
                        <tr className="text-left text-gray-700 font-medium">
                          {[
                            "ID",
                            "Visit Type",
                            "Doctor",
                            "Location",
                            "Date",
                            "Duration",
                            "Insurance",
                            "Status",
                          ].map((header, index) => (
                            <th
                              key={index}
                              className="p-3 border border-gray-300"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {appointments.map((appointment, index) => (
                          <tr
                            key={appointment.id}
                            className={`border border-gray-300 ${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                          >
                            <td className="p-3">{appointment.id}</td>
                            <td className="p-3">
                              {appointment.type}
                            </td>
                            <td className="p-3">
                              {appointment.doctor}
                            </td>
                            <td className="p-3">
                              {appointment.location}
                            </td>
                            <td className="p-3">
                              {appointment.date}
                            </td>
                            <td className="p-3">
                              {appointment.duration}
                            </td>
                            <td className="p-3">
                              {appointment.insurance}
                            </td>
                            <td
                              className={`p-3 ${getStatusColor(
                                appointment.status
                              )}`}
                            >
                              {appointment.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Documents" && (
              <>
                <div className="px-6">
                  {/* Table Header */}
                  <div className="flex justify-between items-center mb-6">
                    {/* Documents */}
                    <h2 className="text-gray-700 font-semibold mt-4">
                      Documents
                    </h2>
                    <button className="px-4 py-2 bg-[#013550] text-white text-sm rounded-md hover:bg-[#002a3d]">
                      Upload Document
                    </button>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      {/* Table Head */}
                      <thead className="bg-gray-100">
                        <tr className="text-left text-gray-700 font-medium">
                          {["Date", "Title", "Doctor", "Location", ""].map(
                            (header, index) => (
                              <th
                                key={index}
                                className="p-3 border border-gray-300"
                              >
                                {header}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {documents.map((documents, index) => (
                          <tr
                            key={documents.id}
                            className={`border border-gray-300 ${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                          >
                            <td className="p-3 font-regular">
                              {documents.date}
                            </td>
                            <td className="p-3 font-regular">
                              {documents.type}
                            </td>
                            <td className="p-3 font-regular">
                              {documents.doctor}
                            </td>
                            <td className="p-3 font-regular">
                              {documents.location}
                            </td>
                            <td>
                              <FaDownload style={{ color: "#7f7f7f" }} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
