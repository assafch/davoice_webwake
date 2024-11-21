import React, { useState } from "react";

const PlatformSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [repositoryLink, setRepositoryLink] = useState("");
  const platforms = {
    "Python": "https://github.com/frymanofer/Python_WakeWordDetection",
    "Native - Android and/or IOS": "https://github.com/frymanofer/KeywordsDetectionAndroidLibrary",
    "Java": "https://github.com/frymanofer/Java_WakeWordDetection",
    "React Native": "https://github.com/frymanofer/ReactNative_WakeWordDetection",
    "Flutter": "https://github.com/frymanofer/Flutter_WakeWordDetection",
    "Unity": "https://github.com/frymanofer/Unity_WakeWordDetection",
    "React": "https://github.com/frymanofer/Web_WakeWordDetection",
    "js": "https://github.com/frymanofer/Web_WakeWordDetection",
    "Node.js": "https://github.com/frymanofer/Web_WakeWordDetection",
    "Angular": "https://github.com/frymanofer/Web_WakeWordDetection",
    ".Net": "https://github.com/frymanofer/DotNet_WakeWordDetection",
    "Go": "https://github.com/frymanofer/Go_WakeWordDetection",
    "Rust": "https://github.com/frymanofer/Rust_WakeWordDetection",
    "C/C++": "https://github.com/frymanofer/Cpp_WakeWordDetection",
  };

  const handlePlatformChange = (e) => {
    const platform = e.target.value;
    setSelectedPlatform(platform);
    setRepositoryLink(platforms[platform] || "");
  };

  return (
    <div className="flex justify-center bg-gray-100 dark:bg-gray-900 px-6 py-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Select Your Platform
        </h2>
        <p className="mb-6 text-sm text-gray-700 dark:text-gray-300">
          Choose your platform to access the corresponding GitHub repository.
        </p>
        <div className="mb-6">
          <label
            htmlFor="platform"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Platform
          </label>
          <select
            id="platform"
            name="platform"
            value={selectedPlatform}
            onChange={handlePlatformChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="">-- Select a Platform --</option>
            {Object.keys(platforms).map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
        {repositoryLink && (
          <div className="mt-4">
            <a
              href={repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Open GitHub Repository
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformSelector;
