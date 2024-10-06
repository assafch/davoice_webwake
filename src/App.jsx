// src/App.jsx
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const initKeywordDetection = async () => {
      // Dynamically import 'keyword-detection-web'
      const { LicenseManager, KeywordDetector } = await import('keyword-detection-web');

      // Optional: Validate license
      const licenseManager = new LicenseManager();
      const licenseKey = 'MTcyODkzOTYwMDAwMA==-Gy0+y3OCG32COKypi/mpT1AYrTlYAz/IvNt1WZ+gVsI=';
      const isLicensed = await licenseManager.isLicenseValid(licenseKey);

      if (!isLicensed) {
        alert('Invalid or expired license key.');
        return;
      }

      // Initialize Keyword Detector
      const threshold = 0.9999;
      const bufferCount = 2;
      const modelsFolderPath = './models';
      const modelToUse = 'need_help_now.onnx';


      const onKeywordDetected = (detected) => {
        if (detected) {
          keywordDetector.stopListening();
          console.log('Keyword detected!');
          alert('Keyword detected!');
          keywordDetector.startListening();
        }
      };

      const keywordDetector = new KeywordDetector(
        modelsFolderPath,
        modelToUse,
        threshold,
        bufferCount,
        onKeywordDetected
      );

      try {
        await keywordDetector.init();
        console.log(
          `Models loaded. Listening for keyword: ${modelToUse
            .replace(/\.onnx$/, '')
            .replace(/_/g, ' ')}`
        );

        // Start listening for keywords
        keywordDetector.startListening();
      } catch (error) {
        console.error('Initialization error:', error);
        if (error.name === 'NotAllowedError') {
          alert('Microphone access was denied.');
        } else if (error.name === 'NotFoundError') {
          alert('No microphone found.');
        } else if (error.name === 'AbortError') {
          alert('Microphone request was aborted.');
        } else {
          alert('An error occurred during initialization.');
        }
      }
    };

    initKeywordDetection();
  }, []);

  return (
    <div>
      <h1>Keyword Detection App</h1>
      <p id="status">Initializing...</p>
    </div>
  );
};

export default App;