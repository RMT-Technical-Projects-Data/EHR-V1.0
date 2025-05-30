import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaSearch } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";
import logo from "../assets/TeleHealth_Logo(1).png";
import jsPDF from "jspdf";
import "jspdf-autotable"; // No need for a named import

const Billing = () => {
  const [activeTab, setActiveTab] = useState("Billing Form");
  const [showInvoice, setShowInvoice] = useState(false);

  const tabs = [{ name: "Billing Form" }, { name: "Generated Invoices" }];

  const [formData, setFormData] = useState({
    billDate: "",
    provider: "",
    physician: "",
    billingProvider: "",
    charges: "",
    cash: "",
    check: "",
    card: "",
    paymentAdj: "",
    copayAdj: "",
    deductible: "",
    patientResp: "",
    insuranceAdj: "",
    writeOff: "",
    balance: "",
  });

  const downloadPDF = () => {

    console.log("Working Button!!");
    
    // const doc = new jsPDF();
    // doc.setFont("helvetica");

    // // Title
    // doc.setFontSize(22);
    // doc.text("Medical Billing Invoice", 20, 20);

    // // Invoice Details
    // doc.setFontSize(12);
    // doc.text("Invoice #: 427-012", 20, 35);
    // doc.text("Date: 12/03/2025", 150, 35);
    // doc.text("Provider: Dr. John Doe, XYZ Hospital", 20, 45);
    // doc.text("Patient ID: #123456", 150, 45);

    // // Table
    // doc.autoTable({
    //   startY: 60,
    //   head: [["Description", "Amount ($)"]],
    //   body: [
    //     ["Consultation Fee", "$200.00"],
    //     ["X-Ray", "$150.00"],
    //     ["Medication", "$50.00"],
    //   ],
    //   theme: "grid",
    // });

    // let finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 10 : 90;

    // // Totals
    // doc.text("Insurance Adjustment: $100.00", 20, finalY);
    // doc.text("Deductible: $50.00", 20, finalY + 10);
    // doc.text("Copay Adjustment: $30.00", 20, finalY + 20);
    // doc.text("Write-Off: $20.00", 20, finalY + 30);
    // doc.text("Total: $400.00", 150, finalY);
    // doc.text("Patient Responsibility: $200.00", 150, finalY + 10);
    // doc.text("Balance Due: $200.00", 150, finalY + 20);

    // doc.save("invoice.pdf");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [invoices, setInvoices] = useState([
    {
      id: 1,
      number: "INV-001",
      date: "02/07/2025",
      total: 250.0,
      status: "Paid",
    },
    {
      id: 2,
      number: "INV-002",
      date: "02/06/2025",
      total: 180.0,
      status: "Unpaid",
    },
    {
      id: 3,
      number: "INV-003",
      date: "02/05/2025",
      total: 300.0,
      status: "Paid",
    },
    {
      id: 4,
      number: "INV-004",
      date: "02/04/2025",
      total: 150.0,
      status: "Unpaid",
    },
    {
      id: 5,
      number: "INV-005",
      date: "02/03/2025",
      total: 500.0,
      status: "Paid",
    },
    {
      id: 6,
      number: "INV-006",
      date: "02/02/2025",
      total: 120.0,
      status: "Unpaid",
    },
    {
      id: 7,
      number: "INV-007",
      date: "02/01/2025",
      total: 350.0,
      status: "Paid",
    },
    {
      id: 8,
      number: "INV-008",
      date: "01/31/2025",
      total: 400.0,
      status: "Unpaid",
    },
  ]);

  const handleViewInvoice = (id) => {
    console.log("View Invoice:", id);
    // You can navigate to invoice details or show a modal here
  };

  return (
    <>
      <div className="flex w-full bg-[#fefefe]">
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
          <div className="p-16">
            {/* Tabs */}
            <div className="flex border-b border-[#dcdcdc] shadow-[0_4px_6px_-3px_rgba(0,0,0,0.1),0_1px_0_0_rgba(0,0,0,0.06)]">
              {["Main Board", "Billing Form", "Generated Invoices"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 mx-1 py-2 text-sm font-medium rounded-t-md transition-all ${
                      activeTab === tab
                        ? "bg-[#013550] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            {/* Billing Form */}
            {activeTab === "Billing Form" && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Billing Information
                  </h2>
                  <button className="px-6 py-2 bg-[#013550] text-white rounded-md shadow-md hover:bg-[#002a3d] transition-all">
                    Generate Invoice
                  </button>
                </div>
                <p className="pb-4 bg-[#fefefe] text-red-700">
                  *Billing options are completely customizable and requirement
                  respective.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {[
                      { label: "Bill Date", name: "billDate", type: "date" },
                      { label: "Provider", name: "provider" },
                      { label: "Physician", name: "physician" },
                      { label: "Billing Provider", name: "billingProvider" },
                      { label: "Patient ID", name: "patientID" },
                      { label: "Charges", name: "charges" },
                      { label: "Payment Method", name: "paymentMethod" },
                      { label: "Cash", name: "cash" },
                    ].map((field, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-gray-700">
                          {field.label} <span className="text-red-700">*</span>
                        </label>
                        <input
                          type={field.type || "text"}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={`Enter ${field.label}`}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00b6b6] focus:border-[#00b6b6]"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    {[
                      { label: "Card", name: "card" },
                      { label: "Insurance Adjustment", name: "insuranceAdj" },
                      { label: "Deductible", name: "deductible" },
                      { label: "Copay Adjustment", name: "copayAdj" },
                      { label: "Patient Responsibility", name: "patientResp" },
                      { label: "Write-Off", name: "writeOff" },
                      { label: "Balance", name: "balance" },
                    ].map((field, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-gray-700">
                          {field.label} <span className="text-red-700">*</span>
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={`Enter ${field.label}`}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00b6b6] focus:border-[#00b6b6]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Generated Invoices List */}
            {/* Generated Invoices List */}
            {activeTab === "Generated Invoices" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Generated Invoices
                </h2>

                {/* Check if there are invoices */}
                {invoices.length > 0 ? (
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2">Invoice #</th>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Total Amount</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="hover:bg-gray-50">
                          <td className="border p-2">{invoice.number}</td>
                          <td className="border p-2">{invoice.date}</td>
                          <td className="border p-2">${invoice.total}</td>
                          <td
                            className={`border p-2 font-semibold ${
                              invoice.status === "Paid"
                                ? "text-[#013550]"
                                : "text-red-500"
                            }`}
                          >
                            {invoice.status}
                          </td>
                          <td
                            className="border p-2 text-grey-700 cursor-pointer hover:underline"
                            onClick={() => handleViewInvoice(invoice.id)}
                          >
                            View
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-gray-500">No invoices generated yet.</p>
                )}
              </div>
            )}
            {activeTab === "Main Board" && (
              <div className="bg-white text-black p-6 min-h-screen">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h1
                    className="text-3xl font-bold"
                    style={{ color: "#013550" }}
                  >
                    Invoices
                  </h1>
                  <button className="bg-[#00b6b6] text-white px-4 py-2 rounded-lg">
                    Create an Invoice
                  </button>
                </div>
                <p className="pb-4 bg-[#fefefe] text-red-700">
                  *This module is under development.
                </p>
                {/* Overview Section */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#013550] text-white p-4 rounded-lg">
                    <p className="text-lg">Overdue</p>
                    <h2 className="text-2xl">$31,211.00</h2>
                  </div>
                  <div className="bg-[#00b6b6] text-white p-4 rounded-lg">
                    <p className="text-lg">Due within next month</p>
                    <h2 className="text-2xl">$172,560.00</h2>
                  </div>
                  <div className="bg-[#013550] text-white p-4 rounded-lg">
                    <p className="text-lg">Available for Instant Payout</p>
                    <h2 className="text-2xl">$214,390.00</h2>
                  </div>
                </div>

                {/* Invoice Filters */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-4">
                    <button className="bg-gray-300 px-4 py-2 rounded-lg">
                      All Invoices
                    </button>
                    <button className="bg-gray-300 px-4 py-2 rounded-lg">
                      Draft
                    </button>
                    <button className="bg-[#00b6b6] text-white px-4 py-2 rounded-lg">
                      Unpaid
                    </button>
                  </div>
                </div>

                {/* Unpaid Invoices */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h2 className="text-lg font-bold mb-4">Unpaid Invoices</h2>
                  <div className="bg-white p-4 my-2 rounded-lg flex justify-between items-center">
                    <div>
                      <p>#427-012</p>
                      <p>In 5 days</p>
                    </div>
                    <p className="font-bold">$53,154.00</p>
                    <button
                      onClick={() => setShowInvoice(true)}
                      className="bg-[#00b6b6] text-white px-4 py-2 rounded-lg"
                    >
                      View Invoice
                    </button>
                  </div>
                  <div
                    onClick={() => setShowInvoice(true)}
                    className="bg-white p-4 my-2 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <p>#427-012</p>
                      <p>In 5 days</p>
                    </div>
                    <p className="font-bold">$53,154.00</p>
                    <button className="bg-[#00b6b6] text-white px-4 py-2 rounded-lg">
                      View Invoice
                    </button>
                  </div>
                  <div className="bg-white p-4 my-2 rounded-lg flex justify-between items-center">
                    <div>
                      <p>#427-012</p>
                      <p>In 5 days</p>
                    </div>
                    <p className="font-bold">$53,154.00</p>
                    <button
                      onClick={() => setShowInvoice(true)}
                      className="bg-[#00b6b6] text-white px-4 py-2 rounded-lg"
                    >
                      View Invoice
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Invoice Modal */}
            {showInvoice && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg w-3/4 shadow-lg ml-[10%]">
                  {/* Invoice Header */}
                  <div className="flex justify-between items-center border-b pb-4 mb-4 ">
                    <div>
                      <div className="h-16 w-32 flex items-center justify-center">
                        <img src={logo} />
                      </div>
                      <h2
                        className="text-xl font-bold mt-2"
                        style={{ color: "#013550" }}
                      >
                        Medical Billing Invoice
                      </h2>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">Invoice #: 427-012</p>
                      <p>Date: 12/03/2025</p>
                    </div>
                  </div>

                  {/* Billing Information */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="font-bold">Provider:</p>
                      <p>Dr. John Doe</p>
                      <p>XYZ Hospital</p>
                    </div>
                    <div>
                      <p className="font-bold">Patient ID:</p>
                      <p>#123456</p>
                    </div>
                  </div>

                  {/* Charges */}
                  <table className="w-full border-collapse border mb-6">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Consultation Fee</td>
                        <td className="border p-2">$200.00</td>
                      </tr>
                      <tr>
                        <td className="border p-2">X-Ray</td>
                        <td className="border p-2">$150.00</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Medication</td>
                        <td className="border p-2">$50.00</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Payment Summary */}
                  <div className="grid grid-cols-2 gap-6 text-right mb-6">
                    <div>
                      <p>Insurance Adjustment: $100.00</p>
                      <p>Deductible: $50.00</p>
                      <p>Copay Adjustment: $30.00</p>
                      <p>Write-Off: $20.00</p>
                    </div>
                    <div>
                      <p className="font-bold">Total: $400.00</p>
                      <p>Patient Responsibility: $200.00</p>
                      <p className="font-bold">Balance Due: $200.00</p>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="text-center">
                    <p className="font-bold">Payment Method</p>
                    <p>Cash / Card</p>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => setShowInvoice(false)}
                      className="bg-gray-300 px-4 py-2 rounded-lg mr-2"
                    >
                      Close
                    </button>
                    <button
                      className="bg-[#00b6b6] text-white px-4 py-2 rounded-lg"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
