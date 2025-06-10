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
import LearnSection from './LearnSection';
import Footer from './Footer';
import PlatformSelector from './PlatformSelector';
import GithubHeadlines from './GithubHeadlines';
import CookieConsent from './CookieConsent';

function LearnPage() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Navbar />
      <LearnSection />
      <LearnSection />
      <PopupForm />
      <GithubHeadlines />
      <PlatformSelector />
      <ContactSection />  
      <ContactForm />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default LearnPage;
