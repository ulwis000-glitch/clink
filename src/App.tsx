import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import SellerPage from './pages/SellerPage';
import StorePage from './pages/StorePage';
import StoresListPage from './pages/StoresListPage';
import SavedPage from './pages/SavedPage';
import SettingsPage from './pages/SettingsPage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import { CartItem } from './types';
import { Store, products } from './data/sampleData';
import './styles/globals.css';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [savedProducts, setSavedProducts] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userStore, setUserStore] = useState<Store | null>(null);

  // Load saved data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    const saved = localStorage.getItem('savedProducts');
    if (saved) {
      setSavedProducts(new Set(JSON.parse(saved)));
    }

    const darkMode = localStorage.getItem('darkMode');
    if (darkMode) {
      setIsDarkMode(JSON.parse(darkMode));
    }

    const store = localStorage.getItem('userStore');
    if (store) {
      setUserStore(JSON.parse(store));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Save saved products to localStorage
  useEffect(() => {
    localStorage.setItem('savedProducts', JSON.stringify(Array.from(savedProducts)));
  }, [savedProducts]);

  const handleAddToCart = (product: any) => {
    const existingItem = cartItems.find((item) => item.productId === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      );
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity || 1,
        image: product.image,
        seller: product.seller,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.productId !== productId));
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleSaveProduct = (productId: string) => {
    const newSaved = new Set(savedProducts);
    if (newSaved.has(productId)) {
      newSaved.delete(productId);
    } else {
      newSaved.add(productId);
    }
    setSavedProducts(newSaved);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleCreateStore = (store: Store) => {
    setUserStore(store);
  };

  return (
    <Router>
      <div className="app">
        <Header
          cartCount={cartItems.length}
          messageCount={0}
          onMenuClick={() => setIsSidebarOpen(true)}
          onSearchChange={setSearchQuery}
        />
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={handleSidebarClose}
          isDarkMode={isDarkMode}
          onThemeToggle={handleThemeToggle}
        />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onAddToCart={handleAddToCart}
                  onSaveProduct={handleSaveProduct}
                  savedProducts={savedProducts}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <ShopPage
                  onAddToCart={handleAddToCart}
                  onSaveProduct={handleSaveProduct}
                  savedProducts={savedProducts}
                  searchQuery={searchQuery}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetailPage
                  onAddToCart={handleAddToCart}
                  onSaveProduct={handleSaveProduct}
                  isSaved={false}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  onRemoveItem={handleRemoveFromCart}
                  onUpdateQuantity={handleUpdateCartQuantity}
                />
              }
            />
            <Route
              path="/checkout"
              element={<CheckoutPage cartItems={cartItems} />}
            />
            <Route
              path="/order-confirmation/:orderId"
              element={<OrderConfirmationPage />}
            />
            <Route
              path="/sell"
              element={<SellerPage onCreateStore={handleCreateStore} />}
            />
            <Route
              path="/store/:storeId"
              element={
                <StorePage
                  onAddToCart={handleAddToCart}
                  onSaveProduct={handleSaveProduct}
                  savedProducts={savedProducts}
                />
              }
            />
            <Route path="/stores" element={<StoresListPage />} />
            <Route
              path="/saved"
              element={
                <SavedPage
                  savedProducts={savedProducts}
                  onAddToCart={handleAddToCart}
                  onSaveProduct={handleSaveProduct}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <SettingsPage
                  isDarkMode={isDarkMode}
                  onThemeToggle={handleThemeToggle}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
