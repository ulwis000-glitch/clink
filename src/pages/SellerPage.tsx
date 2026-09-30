import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../data/sampleData';
import './SellerPage.css';

interface SellerPageProps {
  onCreateStore: (store: Store) => void;
}

const SellerPage: React.FC<SellerPageProps> = ({ onCreateStore }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'intro' | 'setup'>('intro');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    contact: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateStore = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }

    const newStore: Store = {
      id: `store-${Date.now()}`,
      name: formData.name,
      description: formData.description,
      logo: '🏪',
      location: formData.location || 'Not specified',
      rating: 5,
      productCount: 0,
      contact: formData.contact,
      owner: 'Current User',
    };

    onCreateStore(newStore);
    localStorage.setItem('userStore', JSON.stringify(newStore));
    navigate(`/my-store/${newStore.id}`);
  };

  return (
    <div className="seller-page">
      <div className="container">
        {step === 'intro' && (
          <div className="seller-intro">
            <div className="intro-content">
              <h1 className="intro-title">Start Your cLink Store</h1>
              <p className="intro-subtitle">
                Turn your products into simple links and reach customers anywhere.
              </p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-icon">🔗</span>
                  <div className="benefit-text">
                    <h3>Share Simple Links</h3>
                    <p>Every product gets a unique cLink that works everywhere</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📱</span>
                  <div className="benefit-text">
                    <h3>Sell Anywhere</h3>
                    <p>Share on social media, messaging apps, and more</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💬</span>
                  <div className="benefit-text">
                    <h3>Connect with Buyers</h3>
                    <p>Message customers directly and manage orders</p>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-start"
                onClick={() => setStep('setup')}
              >
                Create Your Store
              </button>
            </div>
          </div>
        )}

        {step === 'setup' && (
          <form className="store-setup-form" onSubmit={handleCreateStore}>
            <div className="form-header">
              <button
                type="button"
                className="back-btn"
                onClick={() => setStep('intro')}
              >
                ← Back
              </button>
              <h2>Store Information</h2>
            </div>

            <div className="form-group">
              <label htmlFor="name">Store Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., My Fashion Boutique"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Store Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Tell customers about your store"
                rows={4}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., Manila, Philippines"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Information</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="e.g., 09xx-xxx-xxxx"
              />
            </div>

            <button type="submit" className="btn btn-create-store">
              Create Store
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SellerPage;
