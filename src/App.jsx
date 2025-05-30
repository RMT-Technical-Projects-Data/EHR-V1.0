import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import Settings from "./pages/Settings";
import Appointments from "./pages/Appointment";
import EMR from "./pages/EMR";
import Billing from "./pages/Billing";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/patients" element={<Patient />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/schedule" element={<Appointments />} />
        <Route path="/emr" element={<EMR />} />
        <Route path="/billing" element={<Billing />} />
    </Routes>
  );
}

export default App;
