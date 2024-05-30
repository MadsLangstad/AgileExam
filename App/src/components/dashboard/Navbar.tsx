import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-800 border-b-4 border-blue-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img
              src="/KPMG_logo_blue.png"
              alt="KPMG Logo"
              className="h-10 w-20"
            />
          </div>

          {/* Spacer to push items to the right */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden sm:flex space-x-4">
              <a className="text-blue-900 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                {" "}
                Logged in as [name]
              </a>
              <a
                href="#Account"
                className="text-blue-900 hover:bg-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <img src="/Vector.png" alt="KPMG Logo" className="h-5 w-5" />
              </a>
              <a
                href="#History"
                className="text-blue-900 hover:bg-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <img
                  src="/History.png"
                  alt="History icon to go to a new page to see all previous cards"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="#Darkmode"
                className="text-blue-900 hover:bg-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <img
                  src="/Darkmode.png"
                  alt="icon to change page to darkmode"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="#Info"
                className="text-blue-900 hover:bg-blue-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <img
                  src="/Chevron_down.png"
                  alt="down arrow for more information"
                  className="h-5 w-6"
                />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-right p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#account"
              className="text-blue-900 hover:bg-blue-100 hover:text-blue-900  block px-3 py-2 rounded-md text-base font-medium"
            >
              Account
            </a>
            <a
              href="#History"
              className="text-blue-900 hover:bg-blue-100 hover:text-blue-900  block px-3 py-2 rounded-md text-base font-medium"
            >
              History
            </a>
            <a
              href="#Darkmode"
              className="text-blue-900 hover:bg-blue-100 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Darkmode
            </a>
            <a
              href="#Info"
              className="text-blue-900 hover:bg-blue-100 hover:text-blue-900  block px-3 py-2 rounded-md text-base font-medium"
            >
              Info
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
