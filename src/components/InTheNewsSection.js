import React from 'react';

const InTheNewsSection = () => {
  const articles = [
    {
      title: "Voice Command Your Application in React Native with DaVoice",
      link: "https://medium.com/@frymanofer/voice-command-your-application-in-react-native-with-davoice-ios-wake-word-technology-d74c47e71fb8",
      source: "Medium",
    },
    {
      title: "Voice Command App Utilizing Wake Words and Speech",
      link: "https://www.reddit.com/r/iOSProgramming/comments/1gsjfuy/voice_command_app_utilizing_wake_words_and_speech/",
      source: "Reddit - iOS Programming",
    },
    {
      title: "Python Wake Word Support",
      link: "https://www.reddit.com/r/learnpython/comments/1gkw24j/python_wake_word_support/",
      source: "Reddit - Learn Python",
    },
    {
      title: "Open Source React Native Code for Wakeword",
      link: "https://www.reddit.com/r/selfhosted/comments/1fi3uxw/davoice_opensource_react_native_code_for_wakeword/",
      source: "Reddit - Self-Hosted",
    },
    {
      title: "Introducing Our On-Device High Accuracy Wake Word",
      link: "https://www.reddit.com/r/reactjs/comments/1fit4dw/introducing_our_ondevice_highaccuracy_wake_word/",
      source: "Reddit - React.js",
    },
    {
      title: "Forget Alexa and Siri: React Native Tool",
      link: "https://www.reddit.com/r/reactnative/comments/1fjoz3j/forget_alexa_and_siri_this_new_react_native_tool/",
      source: "Reddit - React Native",
    },
    {
      title: "Voice Assistant in React Native",
      link: "https://www.reddit.com/r/reactnative/comments/1aiz2t4/voice_assistant_react_native/",
      source: "Reddit - React Native",
    },
    {
      title: "Essential Practices for Apps with Wake Words",
      link: "https://www.reddit.com/r/reactnative/comments/1g5bshq/essential_practices_for_making_your_apps/",
      source: "Reddit - React Native",
    },
    {
      title: "Enabling Smart Glasses with Wake Word",
      link: "https://www.reddit.com/r/homeassistant/comments/1g0gjii/our_journey_enabling_smart_glasses_with_wake_word/",
      source: "Reddit - Home Assistant",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          In the News
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Explore what people are saying about DaVoice across different platforms.
        </p>
        <div className="mt-6 space-y-4">
          {articles.map((article, index) => (
            <div key={index} className="text-lg">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-500"
              >
                {article.title}
              </a>{' '}
              <span className="text-gray-500 dark:text-gray-400">({article.source})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InTheNewsSection;
