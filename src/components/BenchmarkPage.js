import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';

function BenchmarkPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Helmet>
        <title>Wake Word Benchmark | DaVoice vs Picovoice vs OpenWakeWord</title>
        <meta
          name="description"
          content="Unbiased wake word benchmarks comparing leading solutions like DaVoice, OpenWakeWord, and Picovoice. Based on real-world results from engineers, developers, and companies in production environments."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'What is the best wake word detection system?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text':
                    'DaVoice outperforms competitors with the highest detection rate (99.25%) and near-zero false positives, making it ideal for production environments.',
                },
              },
              {
                '@type': 'Question',
                'name': 'How does Picovoice compare to DaVoice?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text':
                    'Picovoice has a good detection rate (92.48%) but suffers from higher false positives (2-3 per day), making it less suitable for critical applications.',
                },
              },
              {
                '@type': 'Question',
                'name': 'What are real-world benchmark results for wake word engines?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text':
                    'Benchmarks from LookDeep Health show DaVoice had zero false positives over a month, while OpenWakeWord and Picovoice had higher false trigger rates.',
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="mb-6 text-white">
        <span className="text-5xl font-extrabold block">
          Independent <span className="text-indigo-400">“Wake Word”</span> Benchmark
        </span>
        <span className="text-lg font-medium text-gray-300 block mt-2">
          Verified by Customers / Not Vendors
        </span>
      </h1>

        {/* SEO-friendly intro paragraph */}
        <p className="text-lg text-gray-300 mt-4 mb-10 max-w-3xl">
          Unbiased wake word benchmarks comparing leading solutions like <strong>DaVoice</strong>, <strong>OpenWakeWord</strong>, and <strong>Picovoice</strong>. 
          Based on real-world results from engineers, developers, and companies deploying in production environments where false activations are critical.
        </p>

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
            <li>Picovoice: Although relatively low false alerts, 2–3 per day, it is still unsuitable for critical use</li>
            <li>OpenWakeWord: 3rd best however, accuracy too low to qualify</li>
          </ul>
        </div>

        {/* Structured Comparison Header */}
        <h2 className="text-3xl font-semibold text-white mb-6">
          Compare Wake Word Accuracy: DaVoice vs Picovoice vs OpenWakeWord
        </h2>

        {/* Detection Accuracy Table */}
        <div id="detection-results" className="bg-gray-800 p-8 rounded-2xl shadow-lg mb-12">
          <h3 className="text-xl font-semibold mb-4">Detection Accuracy (HIGHER IS BETTER)</h3>
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
