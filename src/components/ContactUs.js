// ContactUs.js
import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      {/* Left Section: Contact Information */}
      <div className="content-left">
        <h2>Contact Us</h2>
        <p>Let's Empower Your Supply Chain with Seamless and Reliable Logistics Solutions</p>
        <hr />
        <div className="selling-points">
          <div className="selling-point">
            <img src={`${process.env.PUBLIC_URL}/icons/truck.png`} alt="Transport Icon" />
            <p>Get top-rated transporters at unbeatable price</p>
          </div>
          <div className="selling-point">
            <img src={`${process.env.PUBLIC_URL}/icons/clock.png`} alt="On-time Delivery Icon" />
            <p>95% Guaranteed on-time Delivery</p>
          </div>
          <div className="selling-point">
            <img src={`${process.env.PUBLIC_URL}/icons/tracking.png`} alt="Live Tracking Icon" />
            <p>Live Shipment Tracking and timely updates</p>
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
  );
}

export default ContactUs;
