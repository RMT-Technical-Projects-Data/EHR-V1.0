import React from "react";
import { FaSearch } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full h-full md:ml-64">
        <header
          className="bg-[#ffffff] h-16 flex items-center px-12 border-b border-gray-250 shadow-lg"
          style={{ zIndex: 1 }}
        >
          {/* MIDDLE: Search */}
          <div className="flex-1 flex justify-start rounded-lg left-0">
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
        <h1 className="px-20 pt-12 text-2xl font-semibold text-primary bg-[#fefefe]">
          Settings
        </h1>
        <p className="px-20 bg-[#fefefe] text-red-700">*Setting options are completely customizable and requirement respective.</p>
        <div className="px-20 py-12 bg-[#fefefe] grid grid-cols-2 h-[100%]">
          <div>
            {/* Account Settings */}
            <section className="mb-6">
              <h2 className="text-xl font-medium text-dark-grey mb-4">
                Account Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="change-password"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label
                    htmlFor="change-password"
                    className="ml-2 text-gray-700"
                  >
                    Change Password
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="enable-2fa"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label htmlFor="enable-2fa" className="ml-2 text-gray-700">
                    Enable Two-Factor Authentication
                  </label>
                </div>
              </div>
            </section>

            {/* Notification Settings */}
            <section className="mb-6">
              <h2 className="text-xl font-medium text-dark-grey mb-4">
                Notification Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="email-notifications"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label
                    htmlFor="email-notifications"
                    className="ml-2 text-gray-700"
                  >
                    Email Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sms-notifications"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label
                    htmlFor="sms-notifications"
                    className="ml-2 text-gray-700"
                  >
                    SMS Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="push-notifications"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label
                    htmlFor="push-notifications"
                    className="ml-2 text-gray-700"
                  >
                    Push Notifications
                  </label>
                </div>
              </div>
            </section>

            {/* Theme Settings */}
            <section className="mb-6">
              <h2 className="text-xl font-medium text-dark-grey mb-4">
                Theme Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="light-theme"
                    type="radio"
                    name="theme"
                    className="form-radio text-primary"
                  />
                  <label htmlFor="light-theme" className="ml-2 text-gray-700">
                    Light Theme
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="dark-theme"
                    type="radio"
                    name="theme"
                    className="form-radio text-primary"
                  />
                  <label htmlFor="dark-theme" className="ml-2 text-gray-700">
                    Dark Theme
                  </label>
                </div>
              </div>
            </section>
          </div>
          <div>
            {/* Language Settings */}
            <section className="mb-6">
              <h2 className="text-xl font-medium text-dark-grey mb-4">
                Language Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="english-lang"
                    type="radio"
                    name="language"
                    className="form-radio text-primary"
                  />
                  <label htmlFor="english-lang" className="ml-2 text-gray-700">
                    English
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="spanish-lang"
                    type="radio"
                    name="language"
                    className="form-radio text-primary"
                  />
                  <label htmlFor="spanish-lang" className="ml-2 text-gray-700">
                    Spanish
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="french-lang"
                    type="radio"
                    name="language"
                    className="form-radio text-primary"
                  />
                  <label htmlFor="french-lang" className="ml-2 text-gray-700">
                    French
                  </label>
                </div>
              </div>
            </section>

            {/* Privacy Settings */}
            <section className="mb-6">
              <h2 className="text-xl font-medium text-dark-grey mb-4">
                Privacy Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="profile-visibility"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label
                    htmlFor="profile-visibility"
                    className="ml-2 text-gray-700"
                  >
                    Make Profile Public
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="show-last-seen"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label
                    htmlFor="show-last-seen"
                    className="ml-2 text-gray-700"
                  >
                    Show Last Seen
                  </label>
                </div>
              </div>
            </section>

            {/* Security Settings */}
            <section className="mb-6">
              <h2 className="text-xl font-medium text-dark-grey mb-4">
                Security Settings
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="login-notifications"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label
                    htmlFor="login-notifications"
                    className="ml-2 text-gray-700"
                  >
                    Login Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="secure-login"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label htmlFor="secure-login" className="ml-2 text-gray-700">
                    Secure Login
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="lock-on-inactive"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label
                    htmlFor="lock-on-inactive"
                    className="ml-2 text-gray-700"
                  >
                    Lock Account on Inactivity
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="reset-security-settings"
                    type="checkbox"
                    className="form-checkbox text-primary"
                  />
                  <label
                    htmlFor="reset-security-settings"
                    className="ml-2 text-gray-700"
                  >
                    Reset Security Settings
                  </label>
                </div>
              </div>
            </section>
          </div>

          <div>
            {/* Save Button */}
            <button className="flex justify-center mt-6 bg-[#013550] px-6 py-2 bg-primary text-white rounded-md w-[30%]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
