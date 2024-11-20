// components/ContactSection.js
import React from 'react';

function ContactSection() {
    return (
        <section className="bg-white dark:bg-gray-800 pb-6">
            <div className="my-8 text-center">
                <span className="font-semibold text-gray-500 uppercase dark:text-gray-400">
                    <br />
                    Some elements on this page are under construction!!!!
                    <br />
                    Please Contact Us
                </span>
            </div>
            <div className="container mx-auto px-6">
                <div className="flex justify-center items-center h-64">
                    <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        Contact us at:                     <br />
                        <span className="text-blue-600">info@davoice.io</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
