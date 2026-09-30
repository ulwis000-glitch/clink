import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/sampleData';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onSave: (productId: string) => void;
  isSaved: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onSave,
  isSaved,
}) => {
  const [showAddedNotification, setShowAddedNotification] = useState(false);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart(product);
    setShowAddedNotification(true);
    setTimeout(() => setShowAddedNotification(false), 2000);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    onSave(product.id);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {discount > 0 && <div className="discount-badge">{discount}% OFF</div>}
        <button
          className={`save-button ${isSaved ? 'saved' : ''}`}
          onClick={handleSave}
          title={isSaved ? 'Remove from saved' : 'Save product'}
        >
          {isSaved ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price-section">
          <span className="product-price">₱{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="product-original-price">
              ₱{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <div className="product-rating">
          <span className="stars">⭐ {product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>
        <div className="product-seller">{product.seller}</div>
        <div className="product-location">📍 {product.location}</div>
        <div className="product-actions">
          <button
            className="btn-add-cart"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
        {showAddedNotification && (
          <div className="added-notification">Added to cart!</div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
