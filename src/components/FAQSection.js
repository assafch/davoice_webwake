// components/FAQSection.js
import React from 'react';

function FAQSection() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 grid">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-bold text-gray-900 dark:text-white">What is a wake word?</summary>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              A wake word is a keyword that activates your device, like "Hey Siri" or "OK Google".
            </p>
          </details>
          <details className="bg-gray-700 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-bold">What is a Speech to Intent?</summary>
            <p className="mt-2 text-gray-300">
                Speech to Intent refers to the ability to recognize a spoken word or phrase <br/>
                and directly associate it with a specific action or operation within an application.<br/>
                <br/>
                Unlike a "wake word," which typically serves to activate or wake up the application,<br/> 
                Speech to Intent goes further by enabling complex interactions and functionalities <br/>
                based on the recognized intent behind the speech.<br/>
                <br/>
                For example, a wake word like "Hey App" might activate the application, while Speech<br/>
                to Intent could process a phrase like "Play my favorite song" or "Order a coffee" to <br/>
                execute corresponding tasks within the app.<br/>
                
                Speech to Intent is often triggered after a wake word activates the app, making it a key <br/>
                component of more advanced voice-controlled applications. This layered approach allows for <br/>
                seamless and intuitive voice-driven user experiences.
            </p>
        </details>

          <details className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-bold text-gray-900 dark:text-white">
              How accurate is the platform?
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Our platform ensures 95%+ accuracy in various environments.
            </p>
          </details>
          {/* Add more FAQs as needed, applying the same styles */}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;