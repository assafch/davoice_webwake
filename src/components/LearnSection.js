import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';

export default function WakeWordPage() {
  const linkText = (text) => {
    const url = "https://davoice.io/wake-word";
    return text.replace(/(wake word|wake words)/gi, (match) => 
      `<a href="${url}" class="text-indigo-400 hover:underline">${match}</a>`
    );
  };

  const renderContent = (content) => (
    <div
      className="text-lg text-gray-300"
      dangerouslySetInnerHTML={{ __html: linkText(content) }}
    />
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Helmet>
        <title>What is a Wake Word? | Wake Word Technology by DaVoice</title>
        <meta
          name="description"
          content="Learn how wake words like 'Hey Google' or 'Alexa' enable voice activation. Discover DaVoice's advanced on-device wake word technology designed for speed, accuracy, and privacy."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a wake word?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A wake word is a specific phrase, like “Hey Google” or “Alexa,” that activates a voice assistant or smart device to start listening.'
                }
              },
              {
                '@type': 'Question',
                name: 'How does DaVoice wake word technology work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'DaVoice uses deep neural networks to detect wake words entirely on-device, improving responsiveness and preserving privacy.'
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-6">
          <span className="block">What is a Wake Word?</span>
          <span className="block text-indigo-400">The Gateway to Voice-First Interaction</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          Learn how <strong>wake words</strong> power voice assistants like Google Assistant, Siri, and Alexa — and how DaVoice enables advanced <strong>wake word</strong> technology that works entirely offline, on-device.
        </p>

        <section className="bg-gray-800 p-8 rounded-2xl shadow-lg mb-12">
          <p className="text-base font-semibold text-indigo-400 mb-2">
            Always-On, Private, and Lightning Fast
          </p>
          <h2 className="text-3xl font-semibold mb-6">
            {renderContent('Wake Word Technology Explained')}
          </h2>
          {renderContent(
            'Wake words, also known as hot-words or voice triggers, are the gateway between you and your digital assistant. Whether it’s “Hey Google,” “Alexa,” or “Hey Siri,” these wake words enable devices to respond to natural voice queries and commands. Traditional wake word detection often relies on cloud-based speech recognition, but at DaVoice, we leverage deep neural networks to provide a powerful on-device wake word solution. This approach offers highly accurate wake word performance and reduces latency, letting you interact with your devices more naturally and securely.'
          )}
        </section>

        <section className="bg-gray-800 p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            {renderContent('What Makes a Good Wake Word?')}
          </h2>
          {renderContent(
            'Effective wake words typically contain 3–4 syllables, use hard consonant sounds, and are phonetically distinct from common speech. Our team helps you design optimal wake words tailored to your users, language, and devices.'
          )}
        </section>

        <section className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            {renderContent('Wake Word FAQs')}
          </h2>
          {renderContent(
              `Q: Can DaVoice detect wake words offline?
              A: Yes, DaVoice wake word models run entirely on-device for maximum privacy and speed.
              
              Q: Is custom wake word training available?
              A: Yes, we support training custom wake words in multiple languages and accents.`.replace(/\n/g, '<br />')
              )}
        </section>
      </main>
    </div>
  );
}
