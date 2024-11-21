import React, { useState } from "react";

const PlatformSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [repositoryLink, setRepositoryLink] = useState("");

  const platforms = {
    "Python": "https://github.com/frymanofer/Python_WakeWordDetection",
    "Native - Android and/or IOS": "https://github.com/frymanofer/Native_WakeWordDetection",
    "Node.js": "https://github.com/frymanofer/Nodejs_WakeWordDetection",
    "Java": "https://github.com/frymanofer/Java_WakeWordDetection",
    "React Native": "https://github.com/frymanofer/ReactNative_WakeWordDetection",
    "Flutter": "https://github.com/frymanofer/Flutter_WakeWordDetection",
    "Unity": "https://github.com/frymanofer/Unity_WakeWordDetection",
    "Angular": "https://github.com/frymanofer/Angular_WakeWordDetection",
    ".Net": "https://github.com/frymanofer/DotNet_WakeWordDetection",
    "Go": "https://github.com/frymanofer/Go_WakeWordDetection",
    "Rust": "https://github.com/frymanofer/Rust_WakeWordDetection",
    "C/C++": "https://github.com/frymanofer/Cpp_WakeWordDetection",
    "Other": "https://github.com/frymanofer/Other_WakeWordDetection",
  };

  const handlePlatformChange = (e) => {
    const platform = e.target.value;
    setSelectedPlatform(platform);
    setRepositoryLink(platforms[platform] || "");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 px-6 py-10">
      <div className="text-center">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Select Your Platform
        </h2>
        <p className="mb-6 font-light text-gray-700 dark:text-gray-300 sm:text-lg">
          Choose your platform and access the corresponding GitHub repository.
        </p>
        <div className="mb-6">
          <label
            htmlFor="platform"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Main Platform
          </label>
          <select
            id="platform"
            name="platform"
            value={selectedPlatform}
            onChange={handlePlatformChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600"
            >
              Open Repository for {selectedPlatform}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformSelector;

