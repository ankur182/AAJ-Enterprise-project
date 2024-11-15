import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegistrationPage from './pages/RegistrationPage';
import CompanyPage from './pages/CompanyPage'; // Import your Company page
import ContactUs from './pages/ContactUs';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/company" element={<CompanyPage />} /> {/* Ensure this is defined */}
        <Route path="/contact" element={<ContactUs />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;