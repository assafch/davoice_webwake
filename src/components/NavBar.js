import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  document.documentElement.classList.add('dark');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
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
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white dark:text-gray-200 text-xl font-bold">
                DaVoice
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-white dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-700">
                  Home
                </a>
                <a href="/benchmark" className="text-gray-300 dark:text-gray-400 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200">
                  Benchmarks
                </a>
                <a href="/pricing" className="text-gray-300 dark:text-gray-400 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200">
                  Pricing
                </a>
                <a href="/aaa" className="text-gray-300 dark:text-gray-400 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200">
                  Contact
                </a>
                <a href="/github" className="text-gray-300 dark:text-gray-400 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200">
                  GitHub
                </a>
                <a href="/in-the-news" className="text-gray-300 dark:text-gray-400 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-200">
                  In the News
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              <a href="/aaa" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 text-sm font-medium">
                Sign in
              </a>
              <a href="/aaa" className="bg-blue-600 dark:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-500 dark:hover:bg-blue-400 transition">
                Get Started
              </a>
            </div>

            <button
              onClick={toggleDarkMode}
              className="ml-4 text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 focus:outline-none">
              {isDarkMode ? <FiMoon className="w-6 h-6" /> : <FiSun className="w-6 h-6" />}
            </button>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white dark:hover:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none">
                {!isMenuOpen ? <FiMenu className="w-6 h-6" /> : <FiX className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
                Home
              </a>
              <a href="/benchmark" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                Benchmarks
              </a>
              <a href="/pricing" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                Pricing
              </a>
              <a href="/aaa" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                Contact
              </a>
              <a href="/github" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                GitHub
              </a>
              <a href="/in-the-news" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">
                In the News
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-800">
              <div className="flex items-center px-5">
                <a href="/aaa" className="text-gray-300 hover:text-white text-base font-medium block">
                  Sign in
                </a>
                <a href="/aaa" className="ml-auto bg-blue-600 px-4 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition">
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
