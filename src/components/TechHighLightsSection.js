import React from 'react';

function TechHighLightsSection() {
  return (
    <section className="bg-white dark:bg-gray-800 pb-6">
      <div className="my-8 text-center">
      </div>

      <div className="max-w-3xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg">
        <p className="text-xl font-semibold mb-4 text-white text-center">
          Compared With <span className="text-white font-extrabold">Best-In-Class Competition</span>:
        </p>

        <ul className="space-y-4 text-lg">
          <li className="bg-gray-700 p-4 rounded-lg">
            <span className="text-blue-300 font-extrabold text-xl">300%</span> more efficient (
            <span className="italic">83+ battery hours vs ~20</span> on high-end devices)
          </li>
          <li className="bg-gray-700 p-4 rounded-lg">
            Delivers <span className="text-blue-300 font-extrabold text-xl">720×</span> accuracy in false detection (
            <span className="italic">99.86% fewer false positives</span>)
          </li>
          <li className="bg-gray-700 p-4 rounded-lg">
            The only software platform with over <span className="text-blue-300 font-extrabold text-xl">99.2%</span> accuracy in true detection
          </li>
        </ul>

        <p className="mt-4 text-sm italic text-gray-400 text-center">
          See proof and benchmarks in{' '}
          <a href="/benchmark" className="underline text-blue-400">Benchmark Results</a>
        </p>
      </div>
    </section>
  );
}

export default TechHighLightsSection;
