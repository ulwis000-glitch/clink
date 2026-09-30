import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './OrderConfirmationPage.css';

const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const order = orderId ? JSON.parse(localStorage.getItem(`order-${orderId}`) || 'null') : null;

  if (!order) {
    return (
      <div className="order-confirmation-page">
        <div className="container">
          <div className="confirmation-error">
            <h2>Order not found</h2>
            <Link to="/shop">Back to Shop</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-confirmation-page">
      <div className="container">
        <div className="confirmation-container">
          {/* Success Message */}
          <div className="success-section">
            <div className="success-icon">✓</div>
            <h1 className="success-title">Order Placed Successfully!</h1>
            <p className="success-subtitle">Thank you for your purchase.</p>
          </div>

          {/* Order Details */}
          <div className="confirmation-grid">
            {/* Order Info */}
            <div className="confirmation-card">
              <h2 className="card-title">Order Information</h2>
              <div className="info-row">
                <span className="info-label">Order Number</span>
                <span className="info-value">{order.id}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Order Date</span>
                <span className="info-value">
                  {new Date(order.createdAt).toLocaleDateString('en-PH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Status</span>
                <span className="info-value status-confirmed">Confirmed</span>
              </div>
              <div className="info-row">
                <span className="info-label">Payment Method</span>
                <span className="info-value">
                  {order.paymentMethod === 'cod'
                    ? 'Cash on Delivery'
                    : order.paymentMethod === 'gcash'
                    ? 'GCash'
                    : 'Bank Transfer'}
                </span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="confirmation-card">
              <h2 className="card-title">Delivery Information</h2>
              <div className="info-row">
                <span className="info-label">Recipient</span>
                <span className="info-value">{order.customerName}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Phone</span>
                <span className="info-value">{order.customerPhone}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Address</span>
                <span className="info-value">{order.deliveryAddress}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Estimated Delivery</span>
                <span className="info-value">3-5 Business Days</span>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="confirmation-card">
            <h2 className="card-title">Order Items</h2>
            <div className="items-list">
              {order.items.map((item: any, idx: number) => (
                <div key={idx} className="item-row">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-info">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-seller">{item.seller}</p>
                    <p className="item-quantity">Qty: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    ₱{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Total */}
          <div className="confirmation-card order-total-card">
            <div className="total-row">
              <span>Total Amount</span>
              <span className="total-amount">₱{order.total.toLocaleString()}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="confirmation-actions">
            <Link to="/orders" className="btn btn-primary">
              View My Orders
            </Link>
            <Link to="/shop" className="btn btn-secondary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
