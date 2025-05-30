import { useState, useRef, useEffect } from "react";
import { FaCog, FaSignOutAlt, FaKey, FaIdBadge } from "react-icons/fa";

const ProfileDropdown = ({ profilePic, username }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
    // TODO: Add logout logic here
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src={profilePic}
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
        />
        <span className="font-semibold">{username}</span>
      </div>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
          <ul className="py-2 text-gray-700 text-sm">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
              <FaCog /> Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
              <FaKey /> Change Password
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
              <FaIdBadge /> Credentials
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600 flex items-center gap-2"
              onClick={handleLogout}
            >
              <FaSignOutAlt /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
