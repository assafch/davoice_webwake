// components/ContactForm.js
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false); // Added state to track submission

    const sendEmail = async (e) => {
        e.preventDefault();
        //e.stopPropagation(); // Optional: Uncomment if needed

        try {
            const result = await emailjs.sendForm(
                'service_g454oui', // Replace with your EmailJS service ID
                'template_hdln8ed', // Replace with your EmailJS template ID
                form.current,
                'e6MWpksP20GCi59qq' // Replace with your EmailJS public key
            );
            console.log('Email sent successfully:', result.text);
            // alert("Thank you for reaching out!"); // Removed alert
            setIsSubmitted(true); // Set submission state to true
        } catch (error) {
            console.error('Error sending email:', error.text);
            alert('Oops, something went wrong. Please try again.');
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 px-6">
            {isSubmitted ? (
                <div className="text-center py-20">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Thank You for Your Submission!
                    </h2>
                    <p className="mb-6 font-light text-gray-700 dark:text-gray-300 sm:text-lg">
                        We appreciate you reaching out to us. We'll get back to you shortly.
                    </p>
                </div>
            ) : (
                <div className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
                    <div className="rounded-lg shadow-lg max-w-4xl mx-auto transform">
                        <div className="border-l-8 border-blue-500 dark:border-blue-400 pl-8">
                            <form
                                ref={form}
                                onSubmit={sendEmail}>
                                <div className="text-center">
                                    <span className="font-semibold text-gray-500 uppercase dark:text-gray-400">
                                        Contact Us - For Your Custom Wake Words
                                    </span>
                                </div>
                                <div className="mt-6">
                                    {/* Form Section */}
                                    <div className="w-full">
                                        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                            Get in Touch
                                        </h2>
                                        <p className="mb-6 font-light text-gray-700 dark:text-gray-300 sm:text-lg">
                                            Got a technical issue? Want to send feedback about a
                                            beta feature? Need details about our Business plan? Let
                                            us know.
                                        </p>
                                        <div className="space-y-6">
                                            {/* Name Fields */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {/* First Name */}
                                                <div>
                                                    <label
                                                        htmlFor="firstName"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        First Name{' '}
                                                        <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="firstName"
                                                        name="firstName"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                        placeholder="First Name"
                                                        required
                                                    />
                                                </div>
                                                {/* Last Name */}
                                                <div>
                                                    <label
                                                        htmlFor="lastName"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Last Name{' '}
                                                        <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastName"
                                                        name="lastName"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                        placeholder="Last Name"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Email Field */}
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Email <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                    placeholder="name@example.com"
                                                    required
                                                />
                                            </div>

                                            {/* Main Platform Field */}
                                            <div>
                                                <label
                                                    htmlFor="platform"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Main Platform
                                                </label>
                                                <select
                                                    id="platform"
                                                    name="platform"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                    <option value="Python">Python</option>
                                                    <option value="Native - Android and/or IOS">
                                                        Native - Android and/or IOS
                                                    </option>
                                                    <option value="Node.js">Node.js</option>
                                                    <option value="Java">Java</option>
                                                    <option value="React Native">
                                                        React Native
                                                    </option>
                                                    <option value="Flutter">Flutter</option>
                                                    <option value="Unity">Unity</option>
                                                    <option value="Angular">Angular</option>
                                                    <option value=".Net">.Net</option>
                                                    <option value="Go">Go</option>
                                                    <option value="Rust">Rust</option>
                                                    <option value="C/C++">C/C++</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                            {/* Your Desired Wake Words List */}
                                            <div>
                                                <label
                                                    htmlFor="wakeWords"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Your Desired Wake Words List
                                                </label>
                                                <textarea
                                                    id="wakeWords"
                                                    name="wakeWords"
                                                    rows="4"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                    placeholder="Enter your desired wake words..."></textarea>
                                            </div>

                                            {/* Additional Information */}
                                            <div>
                                                <label
                                                    htmlFor="additionalInfo"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Additional Information
                                                </label>
                                                <textarea
                                                    id="additionalInfo"
                                                    name="additionalInfo"
                                                    rows="4"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                    placeholder="Any additional information..."></textarea>
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
