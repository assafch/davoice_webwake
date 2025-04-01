import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function BenchmarkPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-10 text-white">Customer Benchmarks</h1>

        {/* Hospital Results */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Hospitals Choose DaVoice</h2>
          <p className="mb-4 text-lg">
            <a
              href="http://lookdeep.health/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              LookDeep Health
            </a>{' '}
            evaluated custom Wake Words with top wake word detection systems.
            In critical environments like hospitals,{' '}
            <span className="font-bold text-green-400">false positives are unacceptable</span>.
          </p>

          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <span className="text-green-400 font-semibold">DaVoice</span>: ZERO false positives across a month of testing ✅
            </li>
            <li>Picovoice: Although relatively low false alerts, 2-3 per day, it is still unsuitable for critical use</li>
            <li>OpenWakeWord: 3rd best however, accuracy too low to qualify</li>
          </ul>
        </div>

        {/* Detection Accuracy Table */}
        <div id="detection-results" className="bg-gray-800 p-8 rounded-2xl shadow-lg mb-12">
          <h3 className="text-xl font-semibold mb-4">Detection Accuracy (HIGHER IS BETTER))</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="py-2">Model</th>
                  <th className="py-2">Detection Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold">DaVoice</td>
                  <td className="py-2">99.25% ✅</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Picovoice</td>
                  <td className="py-2">92.48%</td>
                </tr>
                <tr>
                  <td className="py-2">OpenWakeWord</td>
                  <td className="py-2">68.65%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* False Positive Table */}
        <div id="false-positives" className="bg-gray-800 p-8 rounded-2xl shadow-lg mb-12">
          <h3 className="text-xl font-semibold mb-4">False Positive Rate (LOWER IS BETTER)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="py-2">Model</th>
                  <th className="py-2">Approximate Rate</th>
                  <th className="py-2">Relative Accuracy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold">DaVoice</td>
                  <td className="py-2">0–1 per several months</td>
                  <td className="py-2">Highest (baseline)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2">Picovoice</td>
                  <td className="py-2">2–3 per day</td>
                  <td className="py-2">~720× worse</td>
                </tr>
                <tr>
                  <td className="py-2">OpenWakeWord</td>
                  <td className="py-2">2–3 per hour</td>
                  <td className="py-2">Unusable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm italic text-gray-400">
            DaVoice delivers <span className="text-blue-400 font-semibold">720×</span> fewer false positives than Picovoice
            (<span className="text-blue-300">99.86%</span> reduction).
          </p>
        </div>

        {/* Footer note */}
        <div className="text-sm text-gray-400 mt-8">
          Benchmark provided by{' '}
          <a
            href="https://lookdeep.health/team/tyler-troy-phd/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400"
          >
            Tyler Troy, Co-Founder @ LookDeep
          </a>{' '}
          —
          <a
            href="https://www.reddit.com/r/Python/comments/1ioo4yd/bulletproof_wakewordkeyword_spotting/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            Read full post
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BenchmarkPage;
