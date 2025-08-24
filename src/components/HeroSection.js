// components/HeroSection.js
import React from 'react';
import LanguageSelector from './Demo';

function HeroSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-9 py-16 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 lg:col-start-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
           On-Device Application Evolution Full Voice-to-Voice AI.<br /> 
           Wake Word, STT and TTS
          </h2>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Wake Word <br /> STT and TTS <br /> On Any Device
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl text-lg font-semibold">
            Power your applications with Voice to Voice <strong>wake word</strong> detection and <strong>TTS and STT</strong> processing.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-8 space-y-2">
            <li>State-of-the-art <strong>wake word</strong> accuracy</li>
            <li>The only human like on device <strong>Text-To-Speech</strong></li>
            <li>The best of breed on-device <strong>Speech-To-Text</strong></li>
            <li>On-Device P&P High performance on any platform</li>
          </ul>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <a
              href="/start-free"
              className="w-full sm:w-auto mb-4 sm:mb-0 inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
              Start Free
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
            <a
              href="/contact-sales"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800">
              Contact Us
            </a>
            <a href="/wake-word" 
              className="w-full sm:w-auto mb-4 sm:mb-0 inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
              Learn "Wake Word"
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
