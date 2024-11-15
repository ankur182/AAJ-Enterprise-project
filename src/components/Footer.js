// Footer.js
import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>Our Story</li>
            <li>Careers at AAJ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>E Commerce Fulfillment</li>
            <li>Transport-AAJ Swift</li>
            <li>Returns Management</li>
            <li>Value Added Services</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Case Studies</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Track Your Order</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Transportation Network</h4>
          <ul>
            <li>Transportation in Mumbai</li>
            <li>Transportation in Bangalore</li>
            <li>Transportation in Delhi</li>
            <li>Transportation in Hyderabad</li>
            <li>Transportation in Ghaziabad</li>
            <li>Transportation in Sonipat NCR</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2024 AAJ Swift. All Rights Reserved</p>
        <p>ISO 9001: 2015, ISO 27001: 2013 Certified Company &nbsp; | &nbsp; CIN: L63090DL2011PLC221234</p>
      </div>
    </footer>
  );
}

export default Footer;
