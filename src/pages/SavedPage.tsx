import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/sampleData';
import './SavedPage.css';

interface SavedPageProps {
  savedProducts: Set<string>;
  onAddToCart: (product: any) => void;
  onSaveProduct: (productId: string) => void;
}

const SavedPage: React.FC<SavedPageProps> = ({
  savedProducts,
  onAddToCart,
  onSaveProduct,
}) => {
  const saved = products.filter((p) => savedProducts.has(p.id));

  return (
    <div className="saved-page">
      <div className="container">
        <h1 className="page-title">Saved Products</h1>

        {saved.length > 0 ? (
          <div className="products-grid">
            {saved.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onSave={onSaveProduct}
                isSaved={true}
              />
            ))}
          </div>
        ) : (
          <div className="empty-saved">
            <div className="empty-icon">❤️</div>
            <h2 className="empty-title">No saved products</h2>
            <p className="empty-description">Save products to view them later</p>
            <Link to="/shop" className="btn btn-primary">
              Browse Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPage;
