import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHome from './components/AppHome'; // Original home page
import ContactUsPage from './components/ContactUsPage'; // New page with "Contact Us"

function App() {
  return (
    <Router>
      <Routes>
        {/* All navigation buttons redirect here */}
        <Route path="/" element={<AppHome />} />
        <Route path="/Home" element={<AppHome />} />
        <Route path="Home" element={<AppHome />} />
        <Route path="*" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
