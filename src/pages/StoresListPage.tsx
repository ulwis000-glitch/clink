import React from 'react';
import { Link } from 'react-router-dom';
import { stores } from '../data/sampleData';
import './StoresListPage.css';

const StoresListPage: React.FC = () => {
  return (
    <div className="stores-list-page">
      <div className="container">
        <h1 className="page-title">Popular Stores</h1>
        <div className="stores-grid">
          {stores.map((store) => (
            <Link
              key={store.id}
              to={`/store/${store.id}`}
              className="store-card"
            >
              <div className="store-logo">{store.logo}</div>
              <h3 className="store-name">{store.name}</h3>
              <p className="store-desc">{store.description}</p>
              <div className="store-info">
                <span>📍 {store.location}</span>
                <span>⭐ {store.rating}</span>
              </div>
              <p className="product-count">{store.productCount} products</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoresListPage;
