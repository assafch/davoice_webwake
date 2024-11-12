// components/GlobalReachSection.js
import React from 'react';

function GlobalReachSection() {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Trusted Globally</h2>
        <p className="mb-8">
          Our platform is trusted by organizations around the world.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/icons/company1.png" alt="Company 1" className="w-20 h-20" />
          <img src="/icons/company2.png" alt="Company 2" className="w-20 h-20" />
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
  );
}

export default GlobalReachSection;
