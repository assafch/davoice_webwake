// LanguageSelector.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Mic } from 'lucide-react';

function LanguageSelector() {
  const [status, setStatus] = useState('Initializing...');
  const [isListening, setIsListening] = useState(false);
  const [keywordDetected, setKeywordDetected] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const keywordDetectorRef = useRef(null);

  useEffect(() => {
    const initKeywordDetection = async () => {
      try {
        // Dynamically import 'keyword-detection-web'
        const { LicenseManager, KeywordDetector } = await import('keyword-detection-web');

        // Validate license
        const licenseManager = new LicenseManager();
        console.log('LicenseManager: ', licenseManager);
        const licenseKey = 'MTc2MTg2MTYwMDAwMA==-9Ast1trO/HOM6Gy0DyvVC8GIAuFj3lD+e4oY2m2si48=';
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
            console.log('Keyword detected!');
            setKeywordDetected(true);
            setStatus('Keyword detected!');

            // Stop listening when keyword is detected
            if (keywordDetectorRef.current) {
              keywordDetectorRef.current.stopListening();
              setIsListening(false);
              setStatus('Listening paused');
            }

            // Show alert
            alert('Keyword detected!');

            // Optionally, restart listening after alert
            if (keywordDetectorRef.current) {
              keywordDetectorRef.current.startListening();
              setIsListening(true);
              setStatus('Listening...');
            }
          }
        };

        const keywordDetector = new KeywordDetector(
          modelsFolderPath,
          modelToUse,
          threshold,
          bufferCount,
          onKeywordDetected
        );

        await keywordDetector.init();
        setStatus(
          `Models loaded. Ready to start listening for keyword: ${modelToUse
            .replace(/\.onnx$/, '')
            .replace(/_/g, ' ')}`
        );
        keywordDetectorRef.current = keywordDetector;
        setIsReady(true);
      } catch (error) {
        console.error('Initialization error:', error);
        setStatus('Error initializing keyword detector.');
      }
    };

    // Initialize the keyword detection
    initKeywordDetection();

    // Cleanup: stop the keyword detector when the component unmounts
    return () => {
      if (keywordDetectorRef.current) {
        keywordDetectorRef.current.stopListening();
      }
    };
  }, []);

  const handleStartListening = () => {
    if (keywordDetectorRef.current) {
      keywordDetectorRef.current.startListening();
      setIsListening(true);
      setStatus('Listening...');
    }
  };

  const handleStopListening = () => {
    if (keywordDetectorRef.current) {
      keywordDetectorRef.current.stopListening();
      setIsListening(false);
      setStatus('Stopped listening');
    }
  };

  const languages = [
    { code: 'Need help now', active: true },
    { code: 'Hello', active: false },
    { code: 'Who are you', active: false },
  ];

  return (
    <div className="top-4 right-4 bg-blue-600/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 w-72">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center flex-col gap-2">
          <button
            onClick={isListening ? handleStopListening : handleStartListening}
            disabled={!isReady}
            className={`w-16 h-16 bg-white/10 rounded-full flex items-center justify-center focus:outline-none ${
              !isReady ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Mic className={`w-8 h-8 ${isListening ? 'text-yellow-500' : 'text-white'}`} />
          </button>
          <span className="text-white/70 text-sm">
            {isListening ? 'Listening...' : 'Click to activate'}
          </span>
          {status && <div className="text-white/70 text-xs">{status}</div>}
          {keywordDetected && (
            <div className="text-white/70 text-xs mt-2">Keyword detected!</div>
          )}
        </div>
        <div className="space-y-2">
          {languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-white/70">{lang.code}</span>
              {index === 0 ? (
                <div className="flex gap-1">
                  {lang.themes?.map((theme, i) => (
                    <div key={i} className="w-3 h-3 rounded-sm bg-white/20"></div>
                  ))}
                </div>
              ) : (
                <div className="w-10 h-6 bg-white/10 rounded-full flex items-center p-1">
                  <div className="w-4 h-4 bg-white/30 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;