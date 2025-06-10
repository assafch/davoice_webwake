// components/WakeWordPage.js
import React from 'react';

export default function WakeWordPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Revolutionize Your Device with Advanced <span className="text-indigo-600">Wake Word</span> Technology
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Enable seamless voice activation and natural language understanding for your products
          </p>
        </div>
      </section>

      {/* New Wake Word Section */}
      <section className="relative isolate overflow-hidden bg-gray-100 dark:bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-100 dark:fill-gray-900">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                  Always-Listening Wake Words
                </p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                  The Key to Your Voice-First Experience
                </h1>
                <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-200">
                  Wake words, also known as hot-words or voice triggers, are the gateway between you
                  and your digital assistant. Whether it’s “Hey Google,” “Alexa,” or “Hey Siri,”
                  these wake words enable devices to respond to natural voice queries and commands.
                  Traditional wake word detection often relies on cloud-based speech recognition,
                  but at DaVoice, we leverage deep neural networks to provide a powerful on-device
                  wake word solution. This approach offers highly accurate wake word performance
                  and reduces latency, letting you interact with your devices more naturally and
                  securely.
                </p>
              </div>
            </div>
          </div>
          <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
              src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-700 dark:text-gray-200 lg:max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Why Embedded Word Detection?
                </h2>
                <p className="mt-6">
                  An embedded wake word solution processes everything on-device, removing the need
                  for continuous cloud connections. This not only boosts accuracy and responsiveness
                  under various conditions, but also preserves user privacy by keeping voice data
                  local. DaVoice’s embedded wake word technology powers everything from Bluetooth
                  headphones and smartwatches to cameras and voice-activated appliances, delivering
                  real-time performance and reliable hands-free control without risking sensitive
                  information in the cloud.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-300">
                  <li className="flex gap-x-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        Zero-latency detection
                      </strong>{' '}
                      — Process wake word audio locally for faster response times, enabling truly
                      seamless interactions.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        Privacy assurance
                      </strong>{' '}
                      — Keep every attempted wake word recognition off the cloud to minimize data
                      exposure.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                      <path
                        fillRule="evenodd"
                        d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        Greater flexibility
                      </strong>{' '}
                      — Ideal for battery-powered or network-limited scenarios, including headphones,
                      wearables, or automotive systems.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  DaVoice’s wake word solutions can also be integrated with broader voice
                  recognition features to support custom commands and extended functionality.
                  Whether it’s controlling smart appliances, ordering food at a kiosk, or adding
                  user identification to a TV or vehicle, on-device processing ensures the fastest,
                  most reliable, and private interaction possible.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  No WiFi? No Problem.
                </h2>
                <p className="mt-6">
                  By eliminating cloud dependencies, DaVoice’s wake word engine provides the same
                  level of accuracy wherever you go. This approach makes your device more resilient
                  to spotty connections and ensures a consistent user experience. If you’re looking
                  for always-on, always-reliable wake word technology for your product, DaVoice’s
                  embedded solutions are your best path to seamless voice interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Specifications
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Performance Metrics
                </h3>
                <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>99.9% accuracy in noisy environments</li>
                  <li>&lt;200ms response time</li>
                  <li>Support for multiple simultaneous wake words</li>
                </ul>
              </div>
              <div className="border-l-4 border-indigo-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Integration Features
                </h3>
                <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Cross-platform SDK support</li>
                  <li>On-device processing (no cloud dependency)</li>
                  <li>Custom wake word training portal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Wake Word FAQs</h2>
          <div className="space-y-4">
            <details open className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <summary className="cursor-pointer text-xl font-semibold text-gray-900 dark:text-white">
                What makes a good wake word?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Effective wake words typically contain 3-4 syllables, use hard consonant sounds, and
                are phonetically distinct from common speech patterns. Our team helps you design
                optimal wake words for your specific use case.
              </p>
            </details>
            {/* Add more FAQ items as needed */}
          </div>
        </div>
      </section>
    </div>
  );
}