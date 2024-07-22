// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
