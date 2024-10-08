import React, { useEffect, useState } from 'react';
//import { LicenseManager, KeywordDetector } from 'keyword-detection-web';

const App = () => { 
  const [status, setStatus] = useState('Initializing...'); // State to handle the status text

  useEffect(() => {
    let keywordDetector; // Define the detector outside so we can stop it on cleanup

    const initKeywordDetection = async () => {
      // Dynamically import 'keyword-detection-web'
      const { LicenseManager, KeywordDetector } = await import('keyword-detection-web');

      // Optional: Validate license
      const licenseManager = new LicenseManager();
      const licenseKey = 'MTcyODkzOTYwMDAwMA==-Gy0+y3OCG32COKypi/mpT1AYrTlYAz/IvNt1WZ+gVsI=';
      const isLicensed = await licenseManager.isLicenseValid(licenseKey);

      if (!isLicensed) {
        alert('Invalid or expired license key.');
        setStatus('Invalid or expired license key.');
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

      keywordDetector = new KeywordDetector(
        modelsFolderPath,
        modelToUse,
        threshold,
        bufferCount,
        onKeywordDetected
      );

      try {
        await keywordDetector.init();
        setStatus(`Models loaded. Listening for keyword: ${modelToUse.replace(/\.onnx$/, '').replace(/_/g, ' ')}`);
        console.log(
          `Models loaded. Listening for keyword: ${modelToUse
            .replace(/\.onnx$/, '')
            .replace(/_/g, ' ')}`
        );

        // Start listening for keywords
        keywordDetector.startListening();
        console.log("After startListening()");
      } catch (error) {
        console.error('Initialization error:', error);
        setStatus('Error initializing keyword detector.');
      }
    };

    // Initialize the keyword detection
    initKeywordDetection();

    // Cleanup: stop the keyword detector when the component unmounts
    return () => {
      if (keywordDetector) {
        //keywordDetector.stopListening();
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h1>Keyword Detection App</h1>
      <p>{status}</p> {/* Display the status dynamically */}
    </div>
  );
};

export default App;
