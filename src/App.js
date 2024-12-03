import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHome from './components/AppHome';
import ContactUsPage from './components/ContactUsPage';
import GithubPage from './components/GithubPage';
import InTheNewsPage from './components/InTheNewsPage';
import Docs from './components/Docs';

function App() {
  return (
    <Router>
      <Routes>
        {/* All navigation buttons redirect here */}
        <Route path="/" element={<AppHome />} />
        <Route path="/home" element={<AppHome />} caseSensitive={false} />
        <Route path="/in-the-news" element={<InTheNewsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} caseSensitive={false} />
        <Route path="/github" element={<GithubPage />} caseSensitive={false} />
        <Route path="/docs" element={<Docs />} />
        <Route path="*" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;