import React from 'react';

const InTheNewsSection = () => {
    const articles = [
        {
            title: 'Voice Command Your Application in React Native with DaVoice',
            link: 'https://medium.com/@frymanofer/voice-command-your-application-in-react-native-with-davoice-ios-wake-word-technology-d74c47e71fb8',
            source: 'Medium',
        },
        {
            title: 'Voice Command App Utilizing Wake Words and Speech',
            link: 'https://www.reddit.com/r/iOSProgramming/comments/1gsjfuy/voice_command_app_utilizing_wake_words_and_speech/',
            source: 'Reddit - iOS Programming',
        },
        {
            title: 'Python Wake Word Support',
            link: 'https://www.reddit.com/r/learnpython/comments/1gkw24j/python_wake_word_support/',
            source: 'Reddit - Learn Python',
        },
        {
            title: 'Open Source React Native Code for Wakeword',
            link: 'https://www.reddit.com/r/selfhosted/comments/1fi3uxw/davoice_opensource_react_native_code_for_wakeword/',
            source: 'Reddit - Self-Hosted',
        },
        {
            title: 'Introducing Our On-Device High Accuracy Wake Word',
            link: 'https://www.reddit.com/r/reactjs/comments/1fit4dw/introducing_our_ondevice_highaccuracy_wake_word/',
            source: 'Reddit - React.js',
        },
        {
            title: 'Forget Alexa and Siri: React Native Tool',
            link: 'https://www.reddit.com/r/reactnative/comments/1fjoz3j/forget_alexa_and_siri_this_new_react_native_tool/',
            source: 'Reddit - React Native',
        },
        {
            title: 'Voice Assistant in React Native',
            link: 'https://www.reddit.com/r/reactnative/comments/1aiz2t4/voice_assistant_react_native/',
            source: 'Reddit - React Native',
        },
        {
            title: 'Essential Practices for Apps with Wake Words',
            link: 'https://www.reddit.com/r/reactnative/comments/1g5bshq/essential_practices_for_making_your_apps/',
            source: 'Reddit - React Native',
        },
        {
            title: 'Enabling Smart Glasses with Wake Word',
            link: 'https://www.reddit.com/r/homeassistant/comments/1g0gjii/our_journey_enabling_smart_glasses_with_wake_word/',
            source: 'Reddit - Home Assistant',
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
                <div class="grid gap-8 lg:grid-cols-3 mt-8">
                    <article class="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center mb-5 text-gray-500">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg
                                    class="mr-1 w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Tutorial
                            </span>
                            <span class="text-sm">2 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="https://medium.com/@frymanofer/voice-command-your-application-in-react-native-with-davoice-ios-wake-word-technology-d74c47e71fb8">
                                Voice Command Your Application in React Native with DaVoice
                            </a>
                        </h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            Explore how DaVoice.io's wake word technology enhances React Native
                            applications by enabling on-device keyword detection and
                            speech-to-intent processing, offering a more intuitive voice command
                            experience.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="Ofer Fryman avatar"
                                />
                                <span class="font-medium dark:text-white">Ofer Fryman</span>
                            </div>
                            <a
                                href="https://medium.com/@frymanofer/voice-command-your-application-in-react-native-with-davoice-ios-wake-word-technology-d74c47e71fb8"
                                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg
                                    class="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                    <article class="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center mb-5 text-gray-500">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg
                                    class="mr-1 w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Tutorial
                            </span>
                            <span class="text-sm">14 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="https://www.reddit.com/r/iOSProgramming/comments/1gsjfuy/voice_command_app_utilizing_wake_words_and_speech/">
                                Voice Command App Utilizing Wake Words and Speech
                            </a>
                        </h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            Discover a demo app that integrates wake words and voice commands for
                            hands-free activation, featuring background functionality and
                            speech-to-intent processing using DaVoice.io's technology.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="Ofer Fryman avatar"
                                />
                                <span class="font-medium dark:text-white">Ofer Fryman</span>
                            </div>
                            <a
                                href="https://www.reddit.com/r/iOSProgramming/comments/1gsjfuy/voice_command_app_utilizing_wake_words_and_speech/"
                                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg
                                    class="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                    <article class="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center mb-5 text-gray-500">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg
                                    class="mr-1 w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Discussion
                            </span>
                            <span class="text-sm">14 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a
                                href="https://www.reddit.com/r/learnpython/comments/1gkw24j/python_wake_word_support/"
                                target="_blank">
                                Python Wake Word Support
                            </a>
                        </h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            Engage in a community discussion exploring Python libraries and tools
                            for implementing wake word detection and speech-to-intent
                            functionalities in applications.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="Reddit User avatar"
                                />
                                <span class="font-medium dark:text-white">Reddit User</span>
                            </div>
                            <a
                                href="https://www.reddit.com/r/learnpython/comments/1gkw24j/python_wake_word_support/"
                                target="_blank"
                                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg
                                    class="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                    <article class="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center mb-5 text-gray-500">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg
                                    class="mr-1 w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Open Source
                            </span>
                            <span class="text-sm">14 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a
                                href="https://www.reddit.com/r/selfhosted/comments/1fi3uxw/davoice_opensource_react_native_code_for_wakeword/"
                                target="_blank">
                                Open Source React Native Code for Wakeword
                            </a>
                        </h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            DaVoice.io introduces an open-source React Native module for wake word
                            detection, enabling developers to integrate on-device keyword spotting
                            and speech-to-intent capabilities into their applications.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="Reddit User avatar"
                                />
                                <span class="font-medium dark:text-white">Reddit User</span>
                            </div>
                            <a
                                href="https://www.reddit.com/r/selfhosted/comments/1fi3uxw/davoice_opensource_react_native_code_for_wakeword/"
                                target="_blank"
                                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg
                                    class="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                    <article class="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center mb-5 text-gray-500">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg
                                    class="mr-1 w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Announcement
                            </span>
                            <span class="text-sm">14 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a
                                href="https://www.reddit.com/r/reactjs/comments/1fit4dw/introducing_our_ondevice_highaccuracy_wake_word/"
                                target="_blank">
                                Introducing Our On-Device High Accuracy Wake Word
                            </a>
                        </h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            DaVoice.io presents a new on-device, high-accuracy wake word detection
                            solution for React Native developers, emphasizing privacy and efficiency
                            in keyword spotting and speech-to-intent applications.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="Reddit User avatar"
                                />
                                <span class="font-medium dark:text-white">Reddit User</span>
                            </div>
                            <a
                                href="https://www.reddit.com/r/reactjs/comments/1fit4dw/introducing_our_ondevice_highaccuracy_wake_word/"
                                target="_blank"
                                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg
                                    class="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                    <article class="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center mb-5 text-gray-500">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg
                                    class="mr-1 w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Announcement
                            </span>
                            <span class="text-sm">14 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a
                                href="https://www.reddit.com/r/reactnative/comments/1fjoz3j/forget_alexa_and_siri_this_new_react_native_tool/"
                                target="_blank">
                                Forget Alexa and Siri: React Native Tool
                            </a>
                        </h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            Discover DaVoice.io's latest React Native tool that surpasses
                            traditional voice assistants by offering on-device wake word detection
                            and speech-to-intent capabilities, ensuring privacy and efficiency.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="Reddit User avatar"
                                />
                                <span class="font-medium dark:text-white">Reddit User</span>
                            </div>
                            <a
                                href="https://www.reddit.com/r/reactnative/comments/1fjoz3j/forget_alexa_and_siri_this_new_react_native_tool/"
                                target="_blank"
                                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg
                                    class="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                    <article class="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center mb-5 text-gray-500">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg
                                    class="mr-1 w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Discussion
                            </span>
                            <span class="text-sm">14 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a
                                href="https://www.reddit.com/r/reactnative/comments/1aiz2t4/voice_assistant_react_native/"
                                target="_blank">
                                Voice Assistant in React Native
                            </a>
                        </h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            Explore community insights on implementing voice assistants in React
                            Native applications, focusing on wake word detection, speech-to-intent
                            processing, and integrating tools like ChatGPT for enhanced
                            functionality.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="Reddit User avatar"
                                />
                                <span class="font-medium dark:text-white">Reddit User</span>
                            </div>
                            <a
                                href="https://www.reddit.com/r/reactnative/comments/1aiz2t4/voice_assistant_react_native/"
                                target="_blank"
                                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg
                                    class="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                    <article class="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center mb-5 text-gray-500">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg
                                    class="mr-1 w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Discussion
                            </span>
                            <span class="text-sm">14 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a
                                href="https://www.reddit.com/r/reactnative/comments/1g5bshq/essential_practices_for_making_your_apps/"
                                target="_blank">
                                Essential Practices for Apps with Wake Words
                            </a>
                        </h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            A Reddit discussion highlighting best practices for integrating wake
                            words into React Native applications, focusing on accessibility, user
                            experience, and effective keyword detection.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="Reddit User avatar"
                                />
                                <span class="font-medium dark:text-white">Reddit User</span>
                            </div>
                            <a
                                href="https://www.reddit.com/r/reactnative/comments/1g5bshq/essential_practices_for_making_your_apps/"
                                target="_blank"
                                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg
                                    class="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                    <article class="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-between items-center mb-5 text-gray-500">
                            <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                <svg
                                    class="mr-1 w-3 h-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Discussion
                            </span>
                            <span class="text-sm">14 days ago</span>
                        </div>
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a
                                href="https://www.reddit.com/r/homeassistant/comments/1g0gjii/our_journey_enabling_smart_glasses_with_wake_word/"
                                target="_blank">
                                Enabling Smart Glasses with Wake Word
                            </a>
                        </h2>
                        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                            A Reddit discussion detailing the integration of wake word detection
                            into smart glasses to assist the visually impaired, focusing on
                            hands-free voice commands and keyword spotting.
                        </p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="Reddit User avatar"
                                />
                                <span class="font-medium dark:text-white">Reddit User</span>
                            </div>
                            <a
                                href="https://www.reddit.com/r/homeassistant/comments/1g0gjii/our_journey_enabling_smart_glasses_with_wake_word/"
                                target="_blank"
                                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                                Read more
                                <svg
                                    class="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default InTheNewsSection;
