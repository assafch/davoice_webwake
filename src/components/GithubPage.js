import React from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm'; // Use your existing ContactForm component
import ContactSection from './ContactSection'
import Footer from './Footer';
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
