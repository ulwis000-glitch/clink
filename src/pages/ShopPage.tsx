import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/sampleData';
import './ShopPage.css';

interface ShopPageProps {
  onAddToCart: (product: any) => void;
  onSaveProduct: (productId: string) => void;
  savedProducts: Set<string>;
  searchQuery: string;
}

const ShopPage: React.FC<ShopPageProps> = ({
  onAddToCart,
  onSaveProduct,
  savedProducts,
  searchQuery,
}) => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const query = searchQuery || searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by search query
    if (query) {
      const lowerQuery = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerQuery) ||
          p.description.toLowerCase().includes(lowerQuery) ||
          p.seller.toLowerCase().includes(lowerQuery) ||
          p.category.toLowerCase().includes(lowerQuery)
      );
    }

    // Filter by price range
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Reverse order for newest
        result = result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [query, sortBy, priceRange]);

  return (
    <div className="shop-page">
      <div className="shop-container">
        {/* Sidebar Filters */}
        <aside className="shop-sidebar">
          <h3 className="filter-title">Filters</h3>

          {/* Sort */}
          <div className="filter-group">
            <label className="filter-label">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="filter-group">
            <label className="filter-label">Price Range</label>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
                }
                className="price-input"
              />
              <span className="price-separator">-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])
                }
                className="price-input"
              />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="shop-main">
          {/* Results Header */}
          <div className="results-header">
            <h2 className="results-title">
              {query ? `Search Results for "${query}"` : 'All Products'}
            </h2>
            <p className="results-count">{filteredProducts.length} products found</p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
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
            <div className="empty-state">
              <div className="empty-icon">🔍</div>
              <h3 className="empty-title">No products found</h3>
              <p className="empty-description">Try searching for something else.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
