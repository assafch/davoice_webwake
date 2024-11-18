// components/PopupForm.js
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false); // Ensure popup shows only once

  useEffect(() => {
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobileDevice) {
      // For mobile devices, show popup after 10 seconds
      const timer = setTimeout(() => {
        if (!hasShownPopup) {
          setShowPopup(true);
          setHasShownPopup(true);
        }
      }, 10000); // 10000 milliseconds = 10 seconds

      return () => clearTimeout(timer);
    } else {
      // For desktop devices, detect exit intent
      const handleMouseLeave = (e) => {
        if (e.clientY <= 0 && !hasShownPopup) {
          setShowPopup(true);
          setHasShownPopup(true);
        }
      };

      document.addEventListener('mouseout', handleMouseLeave);

      return () => {
        document.removeEventListener('mouseout', handleMouseLeave);
      };
    }
  }, [hasShownPopup]);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div
            className="relative bg-gray-100 dark:bg-gray-900 rounded-lg overflow-y-auto max-w-3xl w-full mx-4 my-8 p-6 max-h-screen"
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
              onClick={handleClose}
              aria-label="Close popup"
            >
              &times;
            </button>
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;