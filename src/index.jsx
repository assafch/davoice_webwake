// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/NavBar.js';
import Home from './components/Home.js';
import Container from 'react-bootstrap/Container';
import HeroSection from './components/HeroSection.js';
//import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);