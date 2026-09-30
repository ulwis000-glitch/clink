import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import './CartPage.css';

interface CartPageProps {
  cartItems: CartItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({
  cartItems,
  onRemoveItem,
  onUpdateQuantity,
}) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingEstimate = cartItems.length > 0 ? 150 : 0;
  const total = subtotal + shippingEstimate;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h2 className="empty-title">Your cart is empty</h2>
            <p className="empty-description">
              Start shopping to add items to your cart.
            </p>
            <Link to="/shop" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>

        <div className="cart-container">
          {/* Cart Items */}
          <div className="cart-items">
            <div className="items-header">
              <span className="col-product">Product</span>
              <span className="col-price">Price</span>
              <span className="col-quantity">Quantity</span>
              <span className="col-total">Total</span>
              <span className="col-action">Action</span>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-product">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-seller">{item.seller}</p>
                  </div>
                </div>
                <div className="item-price">₱{item.price.toLocaleString()}</div>
                <div className="item-quantity">
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.productId, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                    className="qty-btn-sm"
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.productId, item.quantity + 1)
                    }
                    className="qty-btn-sm"
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  ₱{(item.price * item.quantity).toLocaleString()}
                </div>
                <div className="item-action">
                  <button
                    onClick={() => onRemoveItem(item.productId)}
                    className="btn-remove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="order-summary">
            <h3 className="summary-title">Order Summary</h3>

            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">₱{subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Shipping</span>
              <span className="summary-value">₱{shippingEstimate}</span>
            </div>
            <div className="summary-row summary-total">
              <span className="summary-label">Total</span>
              <span className="summary-value">₱{total.toLocaleString()}</span>
            </div>

            <Link to="/checkout" className="btn btn-checkout">
              Proceed to Checkout
            </Link>

            <Link to="/shop" className="btn-continue-shopping">
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
