import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { stores, products } from '../data/sampleData';
import './StorePage.css';

interface StorePageProps {
  onAddToCart: (product: any) => void;
  onSaveProduct: (productId: string) => void;
  savedProducts: Set<string>;
}

const StorePage: React.FC<StorePageProps> = ({
  onAddToCart,
  onSaveProduct,
  savedProducts,
}) => {
  const { storeId } = useParams<{ storeId: string }>();
  const store = stores.find((s) => s.id === storeId);

  if (!store) {
    return (
      <div className="store-page">
        <div className="container">
          <div className="store-not-found">
            <h2>Store not found</h2>
            <Link to="/stores">Back to Stores</Link>
          </div>
        </div>
      </div>
    );
  }

  const storeProducts = products.filter((p) => p.storeId === storeId);

  return (
    <div className="store-page">
      {/* Store Header */}
      <div className="store-header">
        <div className="container">
          <div className="store-header-content">
            <div className="store-logo-large">{store.logo}</div>
            <div className="store-header-info">
              <h1 className="store-name">{store.name}</h1>
              <p className="store-description">{store.description}</p>
              <div className="store-meta">
                <span className="meta-item">
                  📍 {store.location}
                </span>
                <span className="meta-item">
                  ⭐ {store.rating} Rating
                </span>
                <span className="meta-item">
                  📦 {storeProducts.length} Products
                </span>
              </div>
              <div className="store-actions">
                <button className="btn btn-follow">Follow Store</button>
                <button className="btn btn-message">Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Products */}
      <div className="container">
        <section className="products-section">
          <h2 className="section-title">Products from {store.name}</h2>
          {storeProducts.length > 0 ? (
            <div className="products-grid">
              {storeProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onSave={onSaveProduct}
                  isSaved={savedProducts.has(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-products">
              <p>This store doesn't have any products yet.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default StorePage;
