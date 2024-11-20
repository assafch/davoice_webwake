import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CompanySection from './CompanySection';
import TestimonialsSection from './TestimonialsSection';
import FeaturesSection from './FeaturesSection';
import WakeWordSection from './WakeWordSection';
import FAQSection from './FAQSection';
import Footer from './Footer';

function AppHome() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <CompanySection />
      <TestimonialsSection />
      <FeaturesSection />
      <WakeWordSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default AppHome;
