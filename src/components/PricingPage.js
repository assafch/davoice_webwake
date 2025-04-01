import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function PricingPage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
          Pricing
        </h1>

        <div className="mt-8 mb-12 space-y-8">

        <div className="mt-12 text-center">
        <p className="text-sm italic text-gray-500 dark:text-gray-400">
            For Our Industry Leading Product, with proven superior Accuracy and Battery efficiency.{' '}
            <a
            href="/benchmark"
            className="text-blue-500 font-semibold underline text-base"
            >
            See Benchmark →
            </a>
        </p>
        </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Free Tier</h2>
            <p className="text-lg">
              Available for developers and non-commercial use - limited use<br />
              Perfect for early-stage testing and integration.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
            <p className="text-lg font-bold mb-4">
    DaVoice guarantees <span className="text-blue-500 font-extrabold">at least 50% less</span> than top competitors — with <span className="font-bold">proven superior</span> performance.{' '}
    <a
      href="/benchmark"
      className="text-blue-500 font-semibold underline text-base"
    >
      See Benchmark →
    </a>
  </p>

            <p className="text-lg">
              Contact <a href="mailto:info@davoice.io" className="underline text-blue-400">info@davoice.io</a> for a custom quote.
            </p>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default PricingPage;