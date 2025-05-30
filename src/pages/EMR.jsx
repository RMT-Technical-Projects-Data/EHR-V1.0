import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaSearch, FaSyncAlt } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";
import profilePic1 from "../assets/cap (4).jpg";
import { FaEdit } from "react-icons/fa";
import attendee from "../assets/attendee.jpg";
import doctor from "../assets/doctor.jpg";
import controls from "../assets/controls1.png";
import { FaExpand, FaCompress } from "react-icons/fa";

const EMR = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State to store text for each section
  const [data, setData] = useState({
    Past_Medical_Summary: `Patient has a history of hypertension and type 2 diabetes mellitus for the past 10 years, well-managed with medication. Previous myocardial infarction (heart attack) 5 years ago, treated with angioplasty and stent placement. History of hyperlipidemia, currently on statin therapy. No history of major surgeries or hospitalizations in the last 5 years. No known history of chronic kidney disease, liver disease, or neurological disorders.`,
    allergies: `1.Milk
                2.Pet Dander
                3.Fragrance
                4.Soy
                5.Drug Allergy
                6.Dust`,
    medication: `1.Zafnol
                 2.Sita Met
                 3.Panadol`,
    review: "Within normal limits",
  });

  // State to track which section is in edit mode
  const [editing, setEditing] = useState({
    history: false,
    allergies: false,
    medication: false,
    review: false,
  });

  // Function to toggle editing mode
  const toggleEdit = (section) => {
    setEditing((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Function to handle input changes
  const handleChange = (section, value) => {
    setData((prev) => ({ ...prev, [section]: value }));
  };

  // Function to update text on Enter key press
  const handleKeyPress = (event, section) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents adding a new line
      toggleEdit(section);
    }
  };

  // Separate state for this component
  const [prescriptionData, setPrescriptionData] = useState({
    prescription:
      "1. Lisinopril 20 mg daily\n2. Atorvastatin 40 mg daily\n3. Metformin 1000 mg twice daily",
    followUp: "Schedule a follow-up in 2 weeks to assess progress.",
  });

  // Tracks which section is being edited
  const [editingSection, setEditingSection] = useState({});

  // Toggle Edit Mode
  const handleToggleEdit = (section) => {
    setEditingSection((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Handle Text Change
  const handleInputChange = (section, value) => {
    setPrescriptionData((prev) => ({ ...prev, [section]: value }));
  };

  // Handle Enter Key Press
  const handleEnterPress = (e, section) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleToggleEdit(section);
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const [editMode, setEditMode] = useState(null);

  // Treatments (Editable)
  const [treatments, setTreatments] = useState([
    {
      title: "Diagnostic Angiography",
      description:
        "A medical imaging technique used to visualize blood vessels. This helps in identifying blockage or narrowing of blood vessels supplying the heart muscle.",
    },
    {
      title: "Intravascular Ultrasound",
      description:
        "IVUS is an invasive imaging technique that involves the insertion of a tiny ultrasound probe into the coronary arteries via a catheter.",
    },
  ]);

  // Medications (Editable)
  const [medications, setMedications] = useState([
    "Antiplatelet agents",
    "Beta-blockers",
    "Beta-blockers",
    "Nitroglycerin",
  ]);

  // Assessment & Plan (Editable)
  const [assessment, setAssessment] = useState([
    "Coronary angiography to assess the extent and severity of coronary artery disease and determine the need for revascularization procedures.",
    "Echocardiogram to evaluate left ventricular function and assess for any structural abnormalities.",
  ]);

  // Function to update treatments (title or description)
  const handleTreatmentChange = (index, field, value) => {
    const updatedTreatments = [...treatments];
    updatedTreatments[index] = { ...updatedTreatments[index], [field]: value };
    setTreatments(updatedTreatments);
  };

  const [examinationText, setExaminationText] = useState(
    `General: Well-nourished, alert, no distress.
Vitals: BP 130/85 mmHg, HR 78 bpm, Temp 98.4°F, RR 18/min.
CVS: Normal heart sounds, no murmurs, no edema.
Respiratory: Clear lungs, no wheezing or crackles.
Neuro: Alert, oriented, no deficits.
Abdomen: Soft, non-tender, normal bowel sounds.
Extremities: No cyanosis, clubbing, or edema.
Plan: Monitor BP, glucose, and cholesterol levels. Continue medications.`
  );

  return (
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
              <span>10 January 2024</span>  (Demo Version)
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

        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="p-6">
            {/* Patient Info Row */}
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                {/* Placeholder for Profile Picture */}
                <img
                  src={profilePic1}
                  className="w-16 h-16 bg-gray-300 rounded-full"
                />
                <h2 className="text-xl font-semibold">
                  Name: <span className="font-medium">Mr. Ahmed Ali</span> |
                  Age: <span className="font-medium">52</span> | Gender:
                  <span className="font-medium"> Male</span>
                </h2>
              </div>
              <div className="flex gap-4">
                {/* AI Assist Button */}
                <button className="bg-[#013550] text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-[#002a3d]">
                  AI Assist
                </button>

                {/* Transcribe Dropdown */}
                <div className="relative">
                  {/* Transcribe Dropdown */}
                  <div className="relative">
                    <button
                      // onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="bg-[#013550] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition duration-300 hover:bg-[#002a3d]"
                    >
                      Transcribe
                      {/* {isDropdownOpen ? "▲" : "▼"} */}
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                        <button className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100">
                          Audio
                        </button>
                        <button className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100">
                          Video
                        </button>
                        <button className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-100">
                          Notes
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Convert to PDF Button */}
                <button className="bg-[#013550] text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-[#002a3d]">
                  Convert to PDF
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-[1.1fr_1.5fr_0.0fr] gap-0 mt-6">
              {/* Parent Flex Container */}

              {/* Column 1: Scrollable Medical Summary */}
              <div className="w-[100%] h-[70%] p-6 space-y-6 overflow-y-auto">
                {Object.keys(data).map((section) => (
                  <div
                    key={section}
                    className="bg-white shadow-md rounded-lg p-4"
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
                    {/* Section Title & Edit Button */}
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold capitalize">
                        {section.replace(/_/g, " ")}
                      </h3>
                      <button
                        onClick={() => toggleEdit(section)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaEdit size={18} />
                      </button>
                    </div>

                    {/* Editable Text Area or Static Text */}
                    {editing[section] ? (
                      <textarea
                        className="w-full p-2 border rounded-md resize-y min-h-[50px] 
              break-all whitespace-normal max-w-full overflow-hidden"
                        value={data[section]}
                        onChange={(e) => handleChange(section, e.target.value)}
                        onKeyDown={(e) => handleKeyPress(e, section)}
                        autoFocus
                      />
                    ) : (
                      <p className="whitespace-pre-line break-words">
                        {data[section]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Column 2: Treatments and Medications */}
              <div className="flex flex-col gap-y-5 bg-gray-100 p-6 rounded-lg w-[100%] h-auto">
                {/* Examination Section */}
                <div>
                  <h3 className="text-lg font-semibold">Examination</h3>
                  <div className="relative bg-white shadow-md p-4 rounded-lg mt-2">
                    <FaEdit
                      className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-gray-700"
                      onClick={() => setEditMode("examination")}
                    />

                    {editMode === "examination" ? (
                      <textarea
                        className="w-full p-2 border rounded-md resize-none overflow-hidden"
                        value={examinationText}
                        onChange={(e) => {
                          setExaminationText(e.target.value);
                          e.target.style.height = "auto"; // Reset height to auto
                          e.target.style.height = `${e.target.scrollHeight}px`; // Adjust height dynamically
                        }}
                        onBlur={() => setEditMode(null)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            setEditMode(null);
                          }
                        }}
                        style={{ minHeight: "50px" }} // Ensure a minimum height
                        autoFocus
                      />
                    ) : (
                      <p className="text-gray-700">{examinationText}</p>
                    )}
                  </div>
                </div>

                {/* Recommended Treatments */}
                <div>
                  <button className="text-white bg-[#002a3d] px-4 py-2 rounded-md flex items-center space-x-2 w-full">
                    <FaSyncAlt className="text-white" />
                    <span>Recommended Treatments</span>
                  </button>
                  <div className="flex space-x-4 mt-2">
                    {treatments.map((treatment, index) => (
                      <div
                        key={index}
                        className="bg-white shadow-md p-4 rounded-lg w-1/2 relative"
                        style={{
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)", // Safari support
                          background: "rgba(255, 255, 255, 0.5)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                          borderRadius: "16px",
                          padding: "20px",
                        }}
                      >
                        {/* Edit Button */}
                        <FaEdit
                          className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-gray-800"
                          onClick={() => setEditMode(index)}
                        />

                        {/* Editable Title */}
                        {editMode === index ? (
                          <input
                            type="text"
                            className="w-full font-semibold border p-1 rounded"
                            value={treatment.title}
                            onChange={(e) =>
                              handleTreatmentChange(
                                index,
                                "title",
                                e.target.value
                              )
                            }
                            onBlur={() => setEditMode(null)}
                            onKeyDown={(e) =>
                              e.key === "Enter" && setEditMode(null)
                            }
                            autoFocus
                          />
                        ) : (
                          <h4 className="font-semibold">{treatment.title}</h4>
                        )}

                        {/* Editable Description */}
                        {editMode === index ? (
                          <textarea
                            className="w-full text-sm text-gray-700 border p-1 rounded mt-1"
                            value={treatment.description}
                            onChange={(e) =>
                              handleTreatmentChange(
                                index,
                                "description",
                                e.target.value
                              )
                            }
                            onBlur={() => setEditMode(null)}
                            onKeyDown={(e) =>
                              e.key === "Enter" && setEditMode(null)
                            }
                          />
                        ) : (
                          <p className="text-sm text-gray-700">
                            {treatment.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Medications */}
                <div>
                  <button className="text-white bg-[#002a3d] px-4 py-2 rounded-md flex items-center space-x-2 w-full">
                    <FaSyncAlt className="text-white" />
                    <span>Recommended Medications</span>
                  </button>
                  <div
                    className="flex space-x-2 mt-2"
                    style={{
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)", // Safari support
                      background: "rgba(255, 255, 255, 0.5)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                      borderRadius: "16px",
                      padding: "20px",
                    }}
                  >
                    {medications.map((medication, index) => (
                      <div key={index} className="relative">
                        {/* Edit Button */}
                        <FaEdit
                          className="absolute top-1.5 right-1.5 text-gray-600 cursor-pointer hover:text-gray-800"
                          onClick={() => setEditMode(`med-${index}`)}
                        />
                        {editMode === `med-${index}` ? (
                          <input
                            type="text"
                            className="px-3 py-2 border rounded-lg bg-gray-200 text-gray-700"
                            value={medication}
                            onChange={(e) => {
                              const updatedMeds = [...medications];
                              updatedMeds[index] = e.target.value;
                              setMedications(updatedMeds);
                            }}
                            onBlur={() => setEditMode(null)}
                            onKeyDown={(e) =>
                              e.key === "Enter" && setEditMode(null)
                            }
                            autoFocus
                          />
                        ) : (
                          <button className="px-3 py-1 pr-6 border rounded-lg bg-gray-200 text-gray-700">
                            {medication}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessment & Plan */}
                <div>
                  <h3 className="text-lg font-semibold">Assessment & Plan</h3>
                  <ul className="list-disc pl-5 text-gray-700 text-sm mt-2">
                    {assessment.map((item, index) => (
                      <li key={index} className="relative">
                        {/* Edit Button */}
                        <FaEdit
                          className="absolute -left-6 top-1 text-gray-600 cursor-pointer hover:text-gray-800"
                          onClick={() => setEditMode(`assess-${index}`)}
                        />
                        {editMode === `assess-${index}` ? (
                          <textarea
                            className="w-full text-sm border p-1 rounded"
                            value={item}
                            onChange={(e) => {
                              const updatedAssessment = [...assessment];
                              updatedAssessment[index] = e.target.value;
                              setAssessment(updatedAssessment);
                            }}
                            onBlur={() => setEditMode(null)}
                            onKeyDown={(e) =>
                              e.key === "Enter" && setEditMode(null)
                            }
                            autoFocus
                          />
                        ) : (
                          item
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 3: Prescription and Follow-up */}
              <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
                {Object.keys(prescriptionData).map((section) => (
                  <div
                    key={section}
                    className="bg-white shadow-md rounded-lg p-4"
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
                    {/* Section Title & Edit Button */}
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold capitalize">
                        {section.replace(/_/g, " ")}
                      </h3>
                      <button
                        onClick={() => handleToggleEdit(section)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaEdit size={18} />
                      </button>
                    </div>

                    {/* Editable Text Area or Static Text */}
                    {editingSection[section] ? (
                      <textarea
                        className="w-full p-2 border rounded-md resize-y min-h-[50px] 
                         break-words whitespace-pre-wrap max-w-full overflow-hidden"
                        value={prescriptionData[section]}
                        onChange={(e) =>
                          handleInputChange(section, e.target.value)
                        }
                        onKeyDown={(e) => handleEnterPress(e, section)}
                        autoFocus
                      />
                    ) : (
                      <p className="whitespace-pre-line break-words">
                        {prescriptionData[section]}
                      </p>
                    )}
                  </div>
                ))}

                <div
                  className={`${
                    isExpanded
                      ? "fixed inset-0 top-[17%] ml-[15%] w-[85%] h-[80%] bg-black bg-opacity-90 z-50"
                      : "relative w-[400px] h-[300px] bg-gray-200"
                  } rounded-lg overflow-hidden transition-all duration-300 flex items-center justify-center`}
                >
                  {/* Main Video (User) */}
                  <img
                    src={attendee}
                    alt="User"
                    className="w-full h-full object-cover"
                  />

                  {/* Small Doctor Video */}
                  <div
                    className={`absolute ${
                      isExpanded
                        ? "bottom-8 right-8 w-[25%] h-[30%]"
                        : "bottom-12 right-4 w-28 h-20"
                    } bg-black rounded-md overflow-hidden`}
                  >
                    <img
                      src={doctor}
                      alt="Doctor"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Call Controls */}
                  <div
                    className={`absolute ${
                      isExpanded
                        ? "bottom-4 left-1/2 transform -translate-x-1/2"
                        : "bottom-2 left-1/2 transform -translate-x-1/2"
                    } bg-white p-2 rounded-full flex space-x-2 shadow-lg`}
                  >
                    <img
                      src={controls}
                      alt="Call Controls"
                      className={`w-32 h-9 ${
                        isExpanded ? "w-[100%] h-[4em]" : "w-32 h-9"
                      }`}
                    />
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1.5 text-sm rounded-md hover:bg-gray-700 transition"
                  >
                    {isExpanded ? (
                      <FaCompress size={16} />
                    ) : (
                      <FaExpand size={16} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMR;
