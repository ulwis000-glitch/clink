import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">cLink</h3>
            <p className="footer-tagline">Simple selling starts with a link.</p>
          </div>
          <div className="footer-links">
            <Link to="/shop">Shop</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/stores">Stores</Link>
            <Link to="/sell">Start Selling</Link>
            <Link to="/about">About</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 cLink. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
