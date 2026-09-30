import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isDarkMode, onThemeToggle }) => {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="sidebar-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="sidebar-content">
          <Link to="/" className="sidebar-link" onClick={onClose}>
            🏠 Home
          </Link>
          <Link to="/shop" className="sidebar-link" onClick={onClose}>
            🛍️ Shop
          </Link>
          <Link to="/categories" className="sidebar-link" onClick={onClose}>
            📂 Categories
          </Link>
          <Link to="/stores" className="sidebar-link" onClick={onClose}>
            🏪 Stores
          </Link>
          <Link to="/sell" className="sidebar-link" onClick={onClose}>
            📤 Start Selling
          </Link>
          <Link to="/orders" className="sidebar-link" onClick={onClose}>
            📦 Orders
          </Link>
          <Link to="/messages" className="sidebar-link" onClick={onClose}>
            💬 Messages
          </Link>
          <Link to="/saved" className="sidebar-link" onClick={onClose}>
            ❤️ Saved
          </Link>
          <Link to="/settings" className="sidebar-link" onClick={onClose}>
            ⚙️ Settings
          </Link>
          <Link to="/about" className="sidebar-link" onClick={onClose}>
            ℹ️ About cLink
          </Link>
          <div className="sidebar-divider" />
          <button className="sidebar-theme-toggle" onClick={onThemeToggle}>
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
