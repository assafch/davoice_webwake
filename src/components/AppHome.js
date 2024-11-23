import React from 'react';
import Navbar from './Navbar';
import ContactSection from './ContactSection'
import ContactForm from './ContactForm'
import PopupForm from './PopupForm'
import HeroSection from './HeroSection';
import CompanySection from './CompanySection';
import TestimonialsSection from './TestimonialsSection';
import FeaturesSection from './FeaturesSection';
import WakeWordSection from './WakeWordSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import PlatformSelector from './PlatformSelector';
import GithubHeadlines from './GithubHeadlines';

function AppHome() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <CompanySection />
      <PopupForm />
      <TestimonialsSection />
      <FeaturesSection />
      <WakeWordSection />
      <GithubHeadlines />
      <PlatformSelector />
      <FAQSection />
      <ContactSection />  
      <ContactForm />
      <Footer />
    </div>
  );
}

export default AppHome;
