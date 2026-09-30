import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  cartCount: number;
  messageCount: number;
  onMenuClick: () => void;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  cartCount,
  messageCount,
  onMenuClick,
  onSearchChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  const handleSearchClear = () => {
    setSearchQuery('');
    onSearchChange('');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <svg width="40" height="40" viewBox="0 0 1000 650" xmlns="http://www.w3.org/2000/svg">
            <rect width="1000" height="650" fill="#001f5c" />
            <rect x="75" y="365" width="260" height="260" fill="#001f5c" stroke="#FFD700" strokeWidth="8" />
            <g transform="translate(205, 495)">
              <path d="M -40 -20 L -50 20 Q -50 40 -30 40 L 30 40 Q 50 40 50 20 L 40 -20 Z" fill="none" stroke="#FFD700" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M -30 -20 Q -30 -50 0 -50 Q 30 -50 30 -20" fill="none" stroke="#FFD700" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
          <span className="logo-text">cLink</span>
        </Link>

        {/* Search Bar */}
        <form className="search-container" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search products, stores..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
          {searchQuery && (
            <button type="button" className="search-clear" onClick={handleSearchClear}>
              ✕
            </button>
          )}
        </form>

        {/* Right Menu */}
        <div className="header-right">
          <Link to="/cart" className="header-icon">
            <span className="icon">🛒</span>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
          <Link to="/messages" className="header-icon">
            <span className="icon">💬</span>
            {messageCount > 0 && <span className="badge">{messageCount}</span>}
          </Link>
          <Link to="/profile" className="header-icon">
            <span className="icon">👤</span>
          </Link>
          <button className="menu-toggle" onClick={onMenuClick}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
