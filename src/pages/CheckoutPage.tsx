import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';
import './CheckoutPage.css';

interface CheckoutPageProps {
  cartItems: CartItem[];
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'cod',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 150;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      const orderId = `ORD-${Date.now()}`;
      localStorage.setItem(
        `order-${orderId}`,
        JSON.stringify({
          id: orderId,
          items: cartItems,
          total,
          status: 'confirmed',
          createdAt: new Date().toISOString(),
          customerName: formData.name,
          customerPhone: formData.phone,
          deliveryAddress: `${formData.address}, ${formData.city} ${formData.postalCode}`,
          paymentMethod: formData.paymentMethod,
        })
      );

      setIsSubmitting(false);
      navigate(`/order-confirmation/${orderId}`);
    }, 1500);
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>

        <div className="checkout-container">
          {/* Checkout Form */}
          <form className="checkout-form" onSubmit={handleSubmit}>
            {/* Customer Information */}
            <section className="checkout-section">
              <h2 className="section-heading">Delivery Information</h2>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="09xx-xxx-xxxx"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Street Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your street address"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City/Municipality *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Manila"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code *</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    placeholder="1000"
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="checkout-section">
              <h2 className="section-heading">Payment Method</h2>
              <div className="payment-options">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-label">💵 Cash on Delivery</span>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="gcash"
                    checked={formData.paymentMethod === 'gcash'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-label">📱 GCash</span>
                </label>
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={handleInputChange}
                  />
                  <span className="payment-label">🏦 Bank Transfer</span>
                </label>
              </div>
            </section>

            <button
              type="submit"
              className="btn-place-order"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
          </form>

          {/* Order Summary */}
          <aside className="checkout-summary">
            <h2 className="summary-title">Order Summary</h2>

            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-left">
                    <img src={item.image} alt={item.name} className="summary-item-image" />
                    <div className="summary-item-details">
                      <p className="summary-item-name">{item.name}</p>
                      <p className="summary-item-qty">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="summary-item-price">
                    ₱{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="summary-divider" />

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₱{subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>₱{shipping}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>₱{total.toLocaleString()}</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
