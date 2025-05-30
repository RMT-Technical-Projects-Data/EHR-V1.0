import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBuromobelexperte, FaUsers, FaHeartbeat, FaCreditCard, FaCalendarAlt, FaSlidersH, FaBars
} from 'react-icons/fa';
import { useTheme } from '../themeContext/ThemeContext';
import logo from '../assets/TeleHealth_Logo.png';

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'bg-[#00b6b6] text-white' : 'hover:bg-[#3c3c3c]';

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center bg-gray-800 p-4">
        <img src={logo} alt="Logo" className="h-8" />
        <FaBars
          className="text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed z-50 top-0 left-0 h-full bg-gray-800 text-white p-6 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          w-64 md:w-72
        `}
        style={{ backgroundColor: theme.sidebarBg }}
      >
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setIsOpen(false)} className="text-white text-2xl">✕</button>
        </div>

        <img src={logo} alt="Logo" className="object-contain mb-8 hidden md:block" />

        <ul className="space-y-1">
          <SidebarItem to="/dashboard" icon={<FaBuromobelexperte />} text="Dashboard" isActive={isActive} />
          <SidebarItem to="/patients" icon={<FaUsers />} text="Patient Data" isActive={isActive} />
          <SidebarItem to="/emr" icon={<FaHeartbeat />} text="EMR" isActive={isActive} />
          <SidebarItem to="/billing" icon={<FaCreditCard />} text="Billing" isActive={isActive} />
          <SidebarItem to="/schedule" icon={<FaCalendarAlt />} text="Schedule" isActive={isActive} />
          <SidebarItem to="/settings" icon={<FaSlidersH />} text="Settings" isActive={isActive} />
        </ul>
      </div>
    </>
  );
};

const SidebarItem = ({ to, icon, text, isActive }) => (
  <li>
    <Link
      to={to}
      className={`flex items-center p-3 rounded-lg text-base space-x-4 ${isActive(to)}`}
    >
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </Link>
  </li>
);

export default Sidebar;
