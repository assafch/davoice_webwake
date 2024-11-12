// components/Navbar.js
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On component mount, set initial dark mode state
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // No preference stored, check prefers-color-scheme
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and main nav */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white dark:text-gray-200 text-xl font-bold">DaVoice</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/home"
                  className="text-white dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Home
                </a>
                <a
                  href="/contact"
                  className="text-gray-300 dark:text-gray-400 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* CTA, Dark Mode Toggle, and Mobile menu button */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/signin"
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-sm font-medium"
              >
                Sign in
              </a>
              <a
                href="/get-started"
                className="bg-blue-600 dark:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-500 dark:hover:bg-blue-400 transition"
              >
                Get Started
              </a>
            </div>

            {/* Dark mode toggle button */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 focus:outline-none"
            >
              {isDarkMode ? (
                // Moon icon for dark mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.003 8.003 0 1010.586 10.586z" />
                </svg>
              ) : (
                // New light mode icon provided
                <span className="dark:hidden">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      className="fill-sky-400/20 stroke-sky-500"
                    ></path>
                    <path
                      d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                      className="stroke-sky-500"
                    ></path>
                  </svg>
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white dark:hover:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/home"
                className="text-white dark:text-gray-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                Home
              </a>
              <a
                href="/contact"
                className="text-gray-300 dark:text-gray-400 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200"
              >
                Contact
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-800 dark:border-gray-700">
              <div className="flex items-center px-5">
                <a
                  href="/signin"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-base font-medium block"
                >
                  Sign in
                </a>
                <a
                  href="/get-started"
                  className="ml-auto bg-blue-600 dark:bg-blue-500 px-4 py-2 rounded-md text-base font-medium hover:bg-blue-500 dark:hover:bg-blue-400 transition"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
