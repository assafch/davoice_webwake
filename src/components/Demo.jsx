import React, { useEffect, useState, useRef } from 'react';
import { Mic } from 'lucide-react';

function Demo() {
  const [status, setStatus] = useState('Initializing...');
  const [isListening, setIsListening] = useState(false);
  const [keywordDetected, setKeywordDetected] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [selectedModel, setSelectedModel] = useState('need_help_now.onnx');

  const keywordDetectorRef = useRef(null);

  // Helper function to format model name
  const formatModelName = (fileName) => {
    return fileName
      .replace(/\.onnx$/, '') // Remove file extension
      .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  };

  useEffect(() => {
    const initKeywordDetection = async () => {
      try {
        const { LicenseManager, KeywordDetector } = await import('keyword-detection-web');

        const licenseManager = new LicenseManager();
        const licenseKey = 'MTc2MTg2MTYwMDAwMA==-9Ast1trO/HOM6Gy0DyvVC8GIAuFj3lD+e4oY2m2si48=';
        const isLicensed = await licenseManager.isLicenseValid(licenseKey);

        if (!isLicensed) {
          alert('Invalid or expired license key.');
          setStatus('Invalid or expired license key.');
          return;
        }

        const threshold = 0.9999;
        const bufferCount = 2;
        const modelsFolderPath = './models';

        const onKeywordDetected = (detected) => {
          if (detected) {
            console.log('Keyword detected!');
            setKeywordDetected(true);
            setStatus('Keyword detected!');
            // Stop listening after keyword detection
            if (keywordDetectorRef.current) {
              keywordDetectorRef.current.stopListening();
              setIsListening(false);
              setStatus('Listening stopped');
            }
          }
        };

        const keywordDetector = new KeywordDetector(
          modelsFolderPath,
          selectedModel,
          threshold,
          bufferCount,
          onKeywordDetected
        );

        await keywordDetector.init();
        setStatus(`Models loaded.
          Ready to start listening for keyword: ${formatModelName(selectedModel)}`);
        keywordDetectorRef.current = keywordDetector;
        setIsReady(true);
      } catch (error) {
        console.error('Initialization error:', error);
        setStatus('Error initializing keyword detector.');
      }
    };

    initKeywordDetection();

    return () => {
      if (keywordDetectorRef.current) {
        keywordDetectorRef.current.stopListening();
      }
    };
  }, [selectedModel]);

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

  const handleModelChange = (model) => {
    if (model !== selectedModel) {
      if (isListening) handleStopListening();
      setSelectedModel(model);
      setStatus(`Switching to model: ${formatModelName(model)}`);
    }
  };

  const modelSelector = [
    { code: 'Need help now', fileName: 'need_help_now.onnx' },
    { code: 'Hello', fileName: 'hello.onnx' },
    { code: 'Who are you', fileName: 'who_are_you.onnx' },
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
          {modelSelector.map((model, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-white/70">{model.code}</span>
              <button
                onClick={() => handleModelChange(model.fileName)}
                className={`w-10 h-6 rounded-full flex items-center p-1 ${
                  selectedModel === model.fileName ? 'bg-blue-500' : 'bg-white/10'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    selectedModel === model.fileName ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Demo;