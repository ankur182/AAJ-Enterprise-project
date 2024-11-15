// ContactUs.js
import React from 'react';
import '../styles/ContactUs.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';

function ContactUs() {
  return (
    <div className="contact-us-container">
      {/* Contact Information and Form in 50-50 split */}
      <div className="contact-section">
        {/* Left Section: Contact Information */}
        <div className="content-left">
          <h2>Contact Us</h2>
          <p>Let's Empower Your Supply Chain with Seamless and Reliable Logistics Solutions</p>
          <hr />
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
        </div>

        {/* Right Section: Contact Form */}
        <div className="form-right">
          <p>Fill the form and our sales representative will call you back within 24 hours</p>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone" required />

            <label htmlFor="support">Contact Support</label>
            <select id="support" name="support">
              <option value="general">General Inquiry</option>
              <option value="sales">Sales Support</option>
              <option value="technical">Technical Support</option>
            </select>

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Brand Logos Section - Full Width with 4x2 Grid */}
      <div className="brand-logos">
        <h3>Logistics Partner for Exponential Growth</h3>
        <p>Trusted by top brands and small businesses alike</p>
        <div className="logos-container">
          <div className="logo-item"><img src={`${process.env.PUBLIC_URL}/images/logos/next_education.png`} alt="Next Education" /></div>
          <div className="logo-item"><img src={`${process.env.PUBLIC_URL}/images/logos/khaitan.png`} alt="Khaitan" /></div>
          <div className="logo-item"><img src={`${process.env.PUBLIC_URL}/images/logos/talking_sox.png`} alt="Talking Sox" /></div>
          <div className="logo-item"><img src={`${process.env.PUBLIC_URL}/images/logos/verde.png`} alt="Verde" /></div>
          <div className="logo-item"><img src={`${process.env.PUBLIC_URL}/images/logos/synergy.png`} alt="Synergy" /></div>
          <div className="logo-item"><img src={`${process.env.PUBLIC_URL}/images/logos/fruitn_root.png`} alt="FruitnRoot" /></div>
          <div className="logo-item"><img src={`${process.env.PUBLIC_URL}/images/logos/tynor.png`} alt="Tynor" /></div>
        </div>
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
    </div>
  );
}

export default ContactUs;
