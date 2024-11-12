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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div
            className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-auto max-w-3xl w-full mx-4 p-6"
            ref={popupRef}
            tabIndex="-1"
          >
            {/* Close Button */}
            <button
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 float-right text-2xl font-bold"
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
