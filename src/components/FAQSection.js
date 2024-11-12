// components/FAQSection.js
import React from 'react';

function FAQSection() {
  return (
    <section className="py-16 px-6 bg-gray-800">
  <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-700 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-bold">What is a wake word?</summary>
            <p className="mt-2 text-gray-300">A wake word is a keyword that activates your device, like "Hey Siri" or "OK Google".</p>
          </details>
          <details className="bg-gray-700 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-bold">How accurate is the platform?</summary>
            <p className="mt-2 text-gray-300">Our platform ensures 95%+ accuracy in various environments.</p>
          </details>
          {/* Add more FAQs as needed */}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
