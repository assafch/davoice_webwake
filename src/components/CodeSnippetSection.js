// components/CodeSnippetSection.js
import React from 'react';

function CodeSnippetSection() {
  return (
    <section className="py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Deploy custom wake words with a few lines of code</h2>
        <pre className="bg-gray-800 p-4 rounded-md shadow overflow-x-auto">
          <code className="text-sm text-green-400">
            {`import porcupine

porcupine = Porcupine("YOUR_ACCESS_KEY")

# Start listening for your custom wake word!
porcupine.start()`}
          </code>
        </pre>
      </div>
    </section>
  );
}

export default CodeSnippetSection;