import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="bg-white text-black font-serif py-10 px-6 md:px-16 text-left">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">DaVoice - Privacy Policy</h1>

        <p className="mb-4"><strong>Effective Date:</strong> 9th June 2025</p>
        <p className="mb-4"><strong>Provider:</strong> DaVoice</p>
        <p className="mb-4"><strong>Contact:</strong> info@davoice.io</p>
        <p className="mb-6"><strong>Product:</strong> On-device Wake Word</p>

        <ol className="list-decimal space-y-6 pl-6">
          <li>
            <p className="text-blue-700 font-bold">No Data Collection:</p>
            <p>This On-device Wake Word library runs entirely offline and does not collect, store, transmit, or process any personal or usage data. There is no communication with external servers or cloud infrastructure.</p>
          </li>
          <li>
            <p className="text-blue-700 font-bold">Device Access:</p>
            <p>The On-device Wake Word library only accesses microphone audio streams in real time for on-device voice detection. No recordings are saved or transmitted.</p>
          </li>
          <li>
            <p className="text-blue-700 font-bold">Licensing Mechanism:</p>
            <p>Licensing is handled completely offline. No user or device data is used or stored as part of the licensing process.</p>
          </li>
          <li>
            <p className="text-blue-700 font-bold">No Third-Party Sharing:</p>
            <p>As no data is collected, nothing is shared with third parties.</p>
          </li>
          <li>
            <p className="text-blue-700 font-bold">Compliance:</p>
            <p>By design, the On-device Wake Word library complies with major global privacy laws such as GDPR and CCPA, since it does not process personal data.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
