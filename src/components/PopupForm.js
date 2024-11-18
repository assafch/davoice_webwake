// components/PopupForm.js
import React, { useState, useEffect, useRef } from 'react';
import ContactForm from './ContacForm';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    // Show popup on first load
    setShowPopup(true);
  }, []);

  useEffect(() => {
    if (showPopup) {
      // Trap focus within the popup
      popupRef.current?.focus();
    }
  }, [showPopup]);

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
            ref={popupRef}
            tabIndex="-1"
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