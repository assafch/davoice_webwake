// App.js - Main Application Component
import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import FAQSection from './components/FAQSection';
import Navbar from './components/NavBar';
import CompanySection from './components/CompanySection';
import TestimonialsSection from './components/TestimonialsSection';
import WakeWordSection from './components/WakeWordSection';
import PopupForm from './components/PopupForm';
import Footer from './components/Footer';

function App() {
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
      <PopupForm />
    </div>
  );
}

export default App;