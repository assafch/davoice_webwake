import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import InTheNewsSection from './InTheNewsSection';

const InTheNewsPage = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <InTheNewsSection />
      <Footer />
    </div>
  );
};

export default InTheNewsPage;
