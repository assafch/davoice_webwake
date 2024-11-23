import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHome from './components/AppHome'; // Original home page
import ContactUsPage from './components/ContactUsPage'; // New page with "Contact Us"
import GithubPage from './components/GithubPage';
import InTheNewsPage from './components/InTheNewsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* All navigation buttons redirect here */}
        <Route path="/" element={<AppHome />} />
        <Route path="/home" element={<AppHome />} case-sensitive={false} />
        <Route path="Home" element={<AppHome />} />
        <Route path="/in-the-news" element={<InTheNewsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} case-sensitive={false}/>
        <Route path="/github" element={<GithubPage />} case-sensitive={false}/>
        <Route path="*" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
