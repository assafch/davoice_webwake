// components/TestimonialsSection.js
import React from 'react';

function TestimonialsSection() {
    return (
        <section className="bg-white dark:bg-gray-800 pb-6">
  <div className="container mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* First Testimonial */}
                    <figure className="max-w-md mx-auto text-center">
                        <svg
                            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                        <blockquote>
                            <p className="text-lg italic font-medium text-gray-900 dark:text-white">
                                “After evaluating all known vendors, only two met our criteria for
                                accuracy. DaVoice emerged as the most accurate Wake Word Vendor. Not
                                only was it the most accurate, but it also turned out to be the most
                                cost-effective and pricing sensible solution.”
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                alt="Profile picture of Lee Sharir-Dolev"
                            />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                                    Lee Sharir-Dolev
                                </cite>
                                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                                    Co-Founder & CEO @ RelyOn.ai
                                </cite>
                            </div>
                        </figcaption>
                    </figure>
                    {/* Second Testimonial */}
                    <figure className="max-w-md mx-auto text-center">
                        <svg
                            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                        <blockquote>
                            <p className="text-lg italic font-medium text-gray-900 dark:text-white">
                                “I was astounded by the solution’s accuracy, especially considering
                                its efficiency in terms of on-device resource usage. DaVoice
                                surpassed all others in accuracy and the availability of APIs for
                                modern architectures like React Native. It is also a pleasure to
                                work with DaVoice’s professional team.”
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img
                                className="w-6 h-6 rounded-full"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                alt="Profile picture of Lottan Horev"
                            />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                                    Lottan Horev
                                </cite>
                                <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                                    Co-Founder & CTO @ RelyOn.ai
                                </cite>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;
