// components/ContactSection.js
import React from 'react';

function ContactSection() {
    return (
        <section className="bg-white dark:bg-gray-800 py-4 mt-4">
            <div className="container mx-auto px-6">
                <div className="flex justify-center items-center h-16">
                    <p className="text-xl font-extrabold text-gray-900 dark:text-white">
                        Contact us at: 
                        <span className="text-blue-400">
                             <a href="mailto:info@davoice.io"> info@davoice.io</a>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
