import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, stores, categories } from '../data/sampleData';
import './HomePage.css';

interface HomePageProps {
  onAddToCart: (product: any) => void;
  onSaveProduct: (productId: string) => void;
  savedProducts: Set<string>;
}

const HomePage: React.FC<HomePageProps> = ({
  onAddToCart,
  onSaveProduct,
  savedProducts,
}) => {
  const featuredProducts = products.slice(0, 8);
  const popularStores = stores.slice(0, 5);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Simple selling starts with a link.</h1>
          <p className="hero-subtitle">
            Discover products, share links, and sell with cLink.
          </p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">
              Shop Now
            </Link>
            <Link to="/sell" className="btn btn-secondary">
              Start Selling
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories?id=${category.id}`}
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <Link to="/shop" className="view-all-link">
            View All →
          </Link>
        </div>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onSave={onSaveProduct}
              isSaved={savedProducts.has(product.id)}
            />
          ))}
        </div>
      </section>

      {/* Popular Stores Section */}
      <section className="stores-section">
        <div className="section-header">
          <h2 className="section-title">Popular Stores</h2>
          <Link to="/stores" className="view-all-link">
            View All →
          </Link>
        </div>
        <div className="stores-grid">
          {popularStores.map((store) => (
            <Link
              key={store.id}
              to={`/store/${store.id}`}
              className="store-card"
            >
              <div className="store-logo">{store.logo}</div>
              <h3 className="store-name">{store.name}</h3>
              <p className="store-location">📍 {store.location}</p>
              <div className="store-stats">
                <span className="store-rating">⭐ {store.rating}</span>
                <span className="product-count">{store.productCount} items</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How cLink Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How cLink Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Create or Find a Product</h3>
            <p className="step-description">
              Browse our marketplace or create your own product to sell.
            </p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Copy and Share the cLink</h3>
            <p className="step-description">
              Get a unique link for any product that can be shared anywhere.
            </p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Connect with Buyers</h3>
            <p className="step-description">
              Message sellers, make orders, and grow your business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
