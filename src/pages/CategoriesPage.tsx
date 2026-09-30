import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/sampleData';
import './CategoriesPage.css';

const CategoriesPage: React.FC = () => {
  return (
    <div className="categories-page">
      <div className="container">
        <h1 className="page-title">Shop by Category</h1>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="category-card-large"
            >
              <div className="category-icon-large">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
