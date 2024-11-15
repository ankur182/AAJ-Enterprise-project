// RegistrationPage.js
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Carousel from '../components/Carousel';
import RegistrationForm from '../components/RegistrationForm';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';
import Footer from '../components/Footer'; // Import Footer
import './styles/RegistrationPage.css';

function RegistrationPage() {
  return (
    <div className="registration-page">
      <div className="main-content">
        {/* Left Section: Promotional content */}
        <div className="content-left">
          <h2>More Than Just Logistics:<br /><span>Your Growth Partner</span></h2>
          <p>Our seamless logistics solutions empower brands to grow faster and smarter. Let’s move your business forward.</p>
          <div className="promotions">
            <div className="promotion-item">
              <img src={`${process.env.PUBLIC_URL}/images/promotions/img1.png`} alt="Promotion 1" />
              <strong>Get top-rated transporters at unbeatable prices</strong>
            </div>
            <div className="promotion-item">
              <img src={`${process.env.PUBLIC_URL}/images/promotions/img2.png`} alt="Promotion 2" />
              <strong>95% Guaranteed on-time Delivery</strong>
            </div>
            <div className="promotion-item">
              <img src={`${process.env.PUBLIC_URL}/images/promotions/img3.png`} alt="Promotion 3" />
              <strong>Live Shipment Tracking and timely updates</strong>
            </div>
          </div>

          <div className="partners">
            <h3>Partner with the Best</h3>
            <p>Trusted by top brands and small businesses alike.</p>
            <div className="partner-logos">
              <img src={`${process.env.PUBLIC_URL}/images/partners/img4.png`} alt="Partner 1" />
              <img src={`${process.env.PUBLIC_URL}/images/partners/img5.png`} alt="Partner 2" />
              <img src={`${process.env.PUBLIC_URL}/images/partners/img6.png`} alt="Partner 3" />
              <img src={`${process.env.PUBLIC_URL}/images/partners/img7.png`} alt="Partner 4" />
              <img src={`${process.env.PUBLIC_URL}/images/partners/img8.png`} alt="Partner 5" />
              <img src={`${process.env.PUBLIC_URL}/images/partners/img9.png`} alt="Partner 6" />
              <img src={`${process.env.PUBLIC_URL}/images/partners/img10.png`} alt="Partner 7" />
              <img src={`${process.env.PUBLIC_URL}/images/partners/img11.png`} alt="Partner 8" />
            </div>
          </div>
        </div>

        {/* Right Section: Registration Form */}
        <div className="content-right">
          <h1>Register</h1>
          <RegistrationForm />
        </div>
      </div>

      {/* Full-Width Bottom Images Section */}
      <div className="bottom-image-section">
        <img src={`${process.env.PUBLIC_URL}/images/bottom-section.png`} alt="Bottom Section" />
        <img src={`${process.env.PUBLIC_URL}/images/delivery.png`} alt="Delivery Section" />
      </div>

      {/* Carousel Section */}
      <div className="carousel-section">
        <Carousel />
      </div>

      {/* New Footer-Like Section */}
      <div className="footer-line">
        {/* AAJ Logo */}
        <div className="footer-logo">
        <Link to="/">
          <img src={logo} alt="AAJ Swift Logo" className="logo-image" />
        </Link>
        </div>
        
        {/* Center Text */}
        <p className="footer-text">Optimizing supply chains through warehousing and transportation services</p>
        
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/icons/linkedin.png`} alt="LinkedIn" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/icons/instagram.png`} alt="Instagram" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/images/icons/youtube.png`} alt="YouTube" />
          </a>
        </div>
      </div>

      {/* Footer Section */}
      
    </div>
  );
}

export default RegistrationPage;
