// components/GithubHeadlines.js
import React from "react";

const GithubHeadlines = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 px-6 mt-12"> {/* Added spacing */}
      <div className="text-center">
        <h2 className="font-extrabold text-2xl text-gray-900 dark:text-white mb-4">
          Select Your <span className="text-blue-400">Platform</span> for the Right <span className="text-blue-400">GitHub</span> Repository Link!
        </h2>
      </div>
    </div>
  );
};

export default GithubHeadlines;
