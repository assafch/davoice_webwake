import React from 'react';

export default function TermsAndConditions() {
  return (
    <section className="bg-white text-black font-serif py-10 px-6 md:px-16 text-left">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">DaVoice - Terms and Conditions (T&C)</h1>

        <p className="mb-4"><strong>Effective Date:</strong> 9th June 2025</p>
        <p className="mb-4"><strong>Provider:</strong> Ofer Fryman / DaVoice</p>
        <p className="mb-6"><strong>Product:</strong> On-device Wake Word</p>

        <ol className="list-decimal space-y-6 pl-6">
          <li>
            <p className="text-blue-700 font-bold">License Grant:</p>
            <p>Licensor grants a nonexclusive, nontransferable, revocable license to integrate and use the On-device Wake Word library in Licensee’s software, solely as agreed in a separate signed agreement.</p>
          </li>
          <li>
            <p className="text-blue-700 font-bold">Intellectual Property:</p>
            <p>All rights, title, and interest in the On-device Wake Word library, including improvements and updates, remain the sole property of the Licensor.</p>
          </li>
          <li>
            <p className="text-blue-700 font-bold">Usage Restrictions:</p>
            <p>The Licensee shall not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
              <li>Reverse engineer, decompile, or disassemble the On-device Wake Word library.</li>
              <li>Use the library for illegal or unethical purposes.</li>
              <li>Resell, sublicense, or distribute the library without written consent.</li>
              <li>Use the library outside the scope defined in the quote or contract.</li>
            </ul>
          </li>
          <li>
            <p className="text-blue-700 font-bold">Support and Updates:</p>
            <p>Licensor shall provide reasonable support and periodic updates during the licensing term, as per agreement terms.</p>
          </li>
          <li>
            <p className="text-blue-700 font-bold">Limitation of Liability:</p>
            <p>Licensor shall not be liable for any indirect, incidental, or consequential damages. Total liability is limited to fees paid in the previous 12 months.</p>
          </li>
          <li>
            <p className="text-blue-700 font-bold">Termination:</p>
            <p>License terminates upon breach or at the end of the licensing term. Upon termination, Licensee must cease use and delete all library components, unless perpetual rights were granted.</p>
          </li>
          <li>
            <p className="text-blue-700 font-bold">Governing Law:</p>
            <p>This agreement shall be governed by the laws of Switzerland.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
