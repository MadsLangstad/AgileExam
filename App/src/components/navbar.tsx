import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const goToHistory = () => {
    navigate('/history');
  };

  const logOut = () => {
    navigate('/');
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
      <nav className="bg-blue-600 border-b-4 fixed top-0 z-10 w-full border-teal-400">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <img
                  src="/KPMG_logo_white.png"
                  alt="KPMG Logo"
                  className="h-10 w-30"
                  onClick={goToDashboard}
              />
            </div>

            {/* Spacer to push items to the right */}
            <div className="flex-1 flex justify-end items-center">
              <div className="flex space-x-4 relative">
                <button
                    onClick={toggleDropdown}
                    className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 focus:outline-none"
                >
                  Welcome [name]!
                  <img src="/user.png" alt="KPMG Logo" className="h-6 w-6 ml-3" />
                  {isOpen && (
                      <div className="absolute right-0 mt-40 w-44 bg-white shadow-lg z-20">
                        <div className="relative">
                          <div className="absolute -top-1 right-20 transform rotate-45 w-3 h-3 bg-white border-teal-400"></div>
                          <div className="border-t border-teal-400"></div>
                          <a
                              onClick={goToHistory}
                              className="cursor-pointer px-4 py-2 text-sm text-blue-800 hover:bg-gray-100 flex items-center space-x-2 focus:outline-none"
                          >
                            <img
                                src="/History.png"
                                alt="A history icon"
                                className="h-5 w-5 mr-3"
                            />
                            History
                          </a>
                          <a
                              onClick={logOut}
                              className="cursor-pointer px-4 py-2 text-sm text-blue-800 hover:bg-gray-100 border-t border-blue-800 flex items-center space-x-2 focus:outline-none"
                          >
                            <img
                                src="/logout.png"
                                alt="A logout icon"
                                className="h-5 w-5 mr-3"
                            />
                            Log out
                          </a>
                        </div>
                      </div>
                  )}
                </button>

                <a
                    href="#Darkmode"
                    className="white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <img
                      src="/Darkmode.png"
                      alt="icon to change page to darkmode"
                      className="h-6 w-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
