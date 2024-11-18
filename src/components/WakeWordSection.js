// components/WakeWordSection.js
import React from 'react';
import { FaAndroid, FaApple, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

const WakeWordSection = () => {
  return (
    <section className="py-12 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="font-semibold text-gray-500 uppercase dark:text-gray-400">
            Wake Word Detection: Universal Compatibility
          </span>
        </div>

        {/* Main Grid Container */}
        <div className="container mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Icons Section */}
          <div className="grid place-items-center lg:place-items-start">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-self-center">
              {/* Android Icon */}
              <FaAndroid className="w-16 h-16 text-gray-700 dark:text-gray-200" />

              {/* Apple Icon */}
              <FaApple className="w-16 h-16 text-gray-700 dark:text-gray-200" />

              {/* React Icon */}
              <FaReact className="w-16 h-16 text-gray-700 dark:text-gray-200" />

              {/* Flutter Icon */}
              <SiFlutter className="w-16 h-16 text-gray-700 dark:text-gray-200" />

              {/* Java Icon */}
              <FaJava className="w-16 h-16 text-gray-700 dark:text-gray-200" />

              {/* Python Icon */}
              <FaPython className="w-16 h-16 text-gray-700 dark:text-gray-200" />
            </div>
          </div>

          {/* Content Section */}
          <div className="grid gap-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              DaVoice.AI offers the most versatile wake word detection solution on the market:
            </h3>

            <ul className="grid gap-4">
              <li className="grid grid-cols-[auto,1fr] gap-3">
                <svg
                  className="w-5 h-5 text-green-600 dark:text-green-400 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Seamless integration across iOS, Android, and React Native
                </span>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-3">
                <svg
                  className="w-5 h-5 text-green-600 dark:text-green-400 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Compatible with any device and all major platforms
                </span>
              </li>
              <li className="grid grid-cols-[auto,1fr] gap-3">
                <svg
                  className="w-5 h-5 text-green-600 dark:text-green-400 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Unparalleled flexibility for developers and businesses
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WakeWordSection;