import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1 className="hero-title">About cLink</h1>
          <p className="hero-subtitle">Simple selling starts with a link.</p>
        </div>
      </div>

      <div className="container">
        {/* Mission */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            cLink makes buying and selling simpler. We believe that commerce should be 
            accessible to everyone, and that's why we built a platform where every 
            product gets its own link—easy to share, easy to discover, easy to sell.
          </p>
        </section>

        {/* Vision */}
        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a marketplace where sellers can share products anywhere—on social 
            media, messaging apps, or anywhere online. Where buyers can discover products 
            through simple links. Where commerce flows naturally through conversation and 
            connection.
          </p>
        </section>

        {/* How It Works */}
        <section className="about-section">
          <h2>How cLink Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-icon">1</div>
              <h3>Create or Find</h3>
              <p>Create your store and add products, or browse existing stores.</p>
            </div>
            <div className="step">
              <div className="step-icon">2</div>
              <h3>Share & Link</h3>
              <p>Every product gets a unique link you can share anywhere.</p>
            </div>
            <div className="step">
              <div className="step-icon">3</div>
              <h3>Connect & Sell</h3>
              <p>Message customers, manage orders, and grow your business.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>🎯 Simplicity</h3>
              <p>We keep things simple so you can focus on what matters—your products and customers.</p>
            </div>
            <div className="value-card">
              <h3>🤝 Community</h3>
              <p>We support sellers and buyers in building a vibrant marketplace together.</p>
            </div>
            <div className="value-card">
              <h3>🔗 Connection</h3>
              <p>We connect people through shared interests and products they love.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of sellers already using cLink to reach customers.</p>
          <Link to="/sell" className="btn btn-cta">
            Start Selling Today
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
