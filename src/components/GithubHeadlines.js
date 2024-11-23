// components/GithubHeadlines.js
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const GithubHeadlines = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); // Added state to track submission
    return (
    <div className="bg-gray-100 dark:bg-gray-900 px-6">
          <div className="text-center">
            <span className="font-semibold text-gray-500 dark:text-gray-400">
              Sellect your platfrom for the right GitHub repository link!
            </span>
          </div>
     </div>
  );
};

export default GithubHeadlines;
