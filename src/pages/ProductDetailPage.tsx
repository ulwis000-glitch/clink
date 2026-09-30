import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/sampleData';
import './ProductDetailPage.css';

interface ProductDetailPageProps {
  onAddToCart: (product: any) => void;
  onSaveProduct: (productId: string) => void;
  isSaved: boolean;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  onAddToCart,
  onSaveProduct,
  isSaved,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariations, setSelectedVariations] = useState<{
    [key: string]: string;
  }>({});
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="product-detail-not-found">
        <h2>Product not found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://clink.ph${product.clink}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleShare = async () => {
    const shareUrl = `https://clink.ph${product.clink}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name} on cLink`,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback to copy
      handleCopyLink();
    }
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity,
      selectedVariations,
    });
  };

  const handleQuantityChange = (delta: number) => {
    const newQty = quantity + delta;
    if (newQty >= 1 && newQty <= product.stock) {
      setQuantity(newQty);
    }
  };

  const handleVariationChange = (varName: string, option: string) => {
    setSelectedVariations({
      ...selectedVariations,
      [varName]: option,
    });
  };

  const displayImages = product.images || [product.image];

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-container">
          {/* Images Section */}
          <div className="images-section">
            <div className="main-image">
              <img
                src={displayImages[selectedImageIndex]}
                alt={product.name}
              />
              {discount > 0 && (
                <div className="discount-badge-large">{discount}% OFF</div>
              )}
            </div>
            {displayImages.length > 1 && (
              <div className="thumbnail-images">
                {displayImages.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumbnail ${idx === selectedImageIndex ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(idx)}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="details-section">
            {/* Basic Info */}
            <h1 className="product-name-detail">{product.name}</h1>
            <div className="rating-section">
              <span className="rating-stars">⭐ {product.rating}</span>
              <span className="rating-reviews">({product.reviews} reviews)</span>
            </div>

            {/* Price Section */}
            <div className="price-section">
              <span className="current-price">₱{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="original-price">
                  ₱{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Seller Info */}
            <div className="seller-info">
              <div className="seller-detail">
                <p className="seller-label">Sold by</p>
                <Link to={`/store/${product.storeId}`} className="seller-name">
                  {product.seller}
                </Link>
              </div>
              <div className="location-detail">
                <p className="location-label">📍 Location</p>
                <p className="location-name">{product.location}</p>
              </div>
              <div className="stock-detail">
                <p className="stock-label">Stock</p>
                <p className={`stock-amount ${product.stock > 0 ? 'available' : 'unavailable'}`}>
                  {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                </p>
              </div>
            </div>

            {/* Variations */}
            {product.variations && product.variations.length > 0 && (
              <div className="variations-section">
                <h3 className="variations-title">Variations</h3>
                {product.variations.map((variation) => (
                  <div key={variation.name} className="variation-group">
                    <label className="variation-label">{variation.name}</label>
                    <div className="variation-options">
                      {variation.options.map((option) => (
                        <button
                          key={option}
                          className={`variation-option ${
                            selectedVariations[variation.name] === option ? 'selected' : ''
                          }`}
                          onClick={() =>
                            handleVariationChange(variation.name, option)
                          }
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="quantity-section">
              <label className="quantity-label">Quantity</label>
              <div className="quantity-selector">
                <button
                  className="qty-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="qty-value">{quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                className="btn-buy-now"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                🛍️ Buy Now
              </button>
              <button
                className="btn-add-cart"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                🛒 Add to Cart
              </button>
              <button className="btn-message">
                💬 Message Seller
              </button>
            </div>

            {/* cLink Section */}
            <div className="clink-section">
              <h3 className="clink-title">Share & Sell</h3>
              <p className="clink-description">
                Share this unique cLink to sell products anywhere
              </p>
              <div className="clink-box">
                <code className="clink-code">{product.clink}</code>
                <button
                  className="btn-copy-clink"
                  onClick={handleCopyLink}
                >
                  {copiedLink ? '✓ Copied!' : '📋 COPY cLink'}
                </button>
              </div>
              <button className="btn-share" onClick={handleShare}>
                📤 Share
              </button>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <section className="description-section">
          <h2>Product Description</h2>
          <p>{product.description}</p>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailPage;
