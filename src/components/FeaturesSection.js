import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 skew-y-1">
      <div className="rounded-lg shadow-lg p-10 max-w-4xl mx-auto transform">
        <div className="border-l-8 border-blue-500 dark:border-blue-400 pl-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-400 mb-4">Why DaVoice?</h2>
          <p className="text-gray-700 dark:text-white mb-4">
            DaVoice brings voice algorithms to any device with top-notch custom wake words, achieving over 99.99% accuracy and eliminating false wakes.
          </p>
          <p className="text-gray-700 dark:text-white mb-4">
            Avoid privacy concerns with our on-device solution, bypassing expensive cloud AI API calls while maintaining perfect accuracy and resource efficiency.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-400 mb-4">Features</h3>
          <ul className="text-gray-700 dark:text-white mb-4 list-disc pl-5">
            <li>High Accuracy: Advanced machine learning models deliver outstanding accuracy.</li>
            <li>React Native Support: Seamless integration across iOS and Android with React Native compatibility.</li>
            <li>Cross-Platform Flexibility: Compatible with any device and all major platforms.</li>
            <li>Low Latency: Experience near-instantaneous keyword detection.</li>
          </ul>
          <p className="text-gray-700 dark:text-white">
            Discover why DaVoice is the preferred choice for on-device voice algorithms, offering developers unparalleled flexibility, privacy, and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;