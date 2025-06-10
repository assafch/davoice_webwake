import React from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm'; // Use your existing ContactForm component
import ContactSection from './ContactSection'
import Footer from './Footer';
import TermsAndConditions from './TermsAndConditions';

function TermsPage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
}

export default TermsPage;
