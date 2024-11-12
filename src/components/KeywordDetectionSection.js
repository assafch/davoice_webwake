// components/KeywordDetectionSection.js
import React from 'react';

const KeywordDetectionSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
  <div className="container mx-auto px-6">
      <div class="text-center">
                    <span class="font-semibold text-gray-500 uppercase dark:text-gray-400">
                        FEATURES
                    </span>
                </div>
        <div className="flex flex-wrap mt-10 lg:flex-nowrap items-start lg:items-center justify-between gap-12">
          {/* Headers Section */}
          <div className="w-full lg:w-1/2">
          <ul className="space-y-6 text-gray-200">
              <li className="flex items-start gap-4">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <span className="font-bold">High Accuracy:</span> Our advanced machine learning models deliver top-notch accuracy.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <span className="font-bold">Easy to deploy with React Native:</span> Check out our example “rn_example/DetectingKeyWords.js”; with a few lines of code, you have your own keyword detecting enabled app.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <span className="font-bold">Cross-Platform Support:</span> Integrate DaVoice KeywordsDetection into React-Native Framework for both iOS and Android.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <span className="font-bold">Low Latency:</span> Experience near-instantaneous keyword detection.
                </span>
              </li>
            </ul>
          </div>

          {/* Features Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-3xl font-bold mb-4">
              Custom Wake Words in Minutes: Simple Integration, Powerful Results
            </h1>
            <p className="text-lg text-gray-200">
              Welcome to DaVoice Keywords Detection – the premier keyword detection solution designed by DaVoice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordDetectionSection;
