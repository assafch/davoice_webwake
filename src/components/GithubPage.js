import React from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm'; // Use your existing ContactForm component
import ContactSection from './ContactSection'
import HeroSection from './HeroSection';
import CompanySection from './CompanySection';
import TestimonialsSection from './TestimonialsSection';
import FeaturesSection from './FeaturesSection';
import WakeWordSection from './WakeWordSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import PopupForm from './PopupForm'
import PlatformSelector from './PlatformSelector';
import GithubHeadlines from './GithubHeadlines';

function GithubPage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <GithubHeadlines />
      <PlatformSelector />
      <ContactForm />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default GithubPage;