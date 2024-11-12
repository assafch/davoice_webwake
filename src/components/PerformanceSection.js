// components/PerformanceSection.js
import React from 'react';

function PerformanceSection() {
  return (
    <section className="py-16 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Performance Benchmark</h2>
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="bg-gray-700 p-6 rounded-lg shadow text-center">
            <h3 className="text-2xl font-bold">Speed</h3>
            <p>Our model is optimized for ultra-low latency response times.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow text-center">
            <h3 className="text-2xl font-bold">Accuracy</h3>
            <p>95%+ accuracy in multiple environments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformanceSection;