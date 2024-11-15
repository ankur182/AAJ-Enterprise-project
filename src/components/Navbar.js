// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';  // Adjust this path to match your directory structure
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Use the imported logo variable as the src */}
        <Link to="/">
          <img src={logo} alt="AAJ Swift Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/company" className="navbar-link">Company</Link></li>
        <li><Link to="/calculate-shipping" className="navbar-link">Calculate Shipping Cost</Link></li>
        <li><Link to="/blogs" className="navbar-link">Blogs</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact Us</Link></li>
        <li>
    <Link to="/track-shipment" className="track-shipment-link">Track Shipment</Link>
</li>
      </ul>
      <div className="navbar-login">
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
