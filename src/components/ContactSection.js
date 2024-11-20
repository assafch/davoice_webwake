// components/ContactSection.js
import React from 'react';

function ContactSection() {
    return (
        <section className="bg-white dark:bg-gray-800 py-4 mt-4">
            <div className="text-center">
                <p className="font-semibold text-gray-500 uppercase dark:text-gray-400">
                    Some elements on this page are under construction!!!!
                    <br />
                    Please Contact Us
                </p>
            </div>
            <div className="container mx-auto px-6">
                <div className="flex justify-center items-center h-16">
                    <p className="text-xl font-extrabold text-gray-900 dark:text-white">
                        Contact us at: <span className="text-blue-600">info@davoice.io</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
