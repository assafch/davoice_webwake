// components/CookieConsent.js
import React, { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'rejected');
    setVisible(false);

    if (accepted) {
      // Load Google Analytics/Ads here
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Replace with your GA ID
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA ID
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-4 py-4 z-50 shadow-md text-sm md:text-base">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left">
          We use cookies to improve your experience and analyze site usage. Learn more in our{" "}
          <a href="/privacy" className="underline text-blue-400 hover:text-blue-300">Privacy Policy</a>.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleConsent(false)}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
          >
            Reject
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
