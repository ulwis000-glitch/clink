# cLink Marketplace

A simple, functional marketplace prototype where people can buy, sell, and share products through unique product links.

## Features

### For Buyers
- ✅ Browse products by category
- ✅ Search for products, stores, and categories
- ✅ View detailed product information
- ✅ Add products to cart
- ✅ Save/favorite products
- ✅ Complete checkout process
- ✅ Order confirmation
- ✅ Dark/Light mode toggle

### For Sellers
- ✅ Create a store
- ✅ Add and manage products
- ✅ Generate unique cLinks for each product
- ✅ Share product links
- ✅ Copy cLink to clipboard

### Platform Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme switcher
- ✅ Search functionality
- ✅ Product filtering and sorting
- ✅ Cart persistence
- ✅ Local storage for user preferences
- ✅ Navigation with React Router
- ✅ Brand consistency with navy + gold theme

## Pages

- **Home** (`/`) - Hero section with categories, featured products, and popular stores
- **Shop** (`/shop`) - Browse all products with search and filters
- **Product Detail** (`/product/:id`) - Full product information with cLink
- **Cart** (`/cart`) - Shopping cart management
- **Checkout** (`/checkout`) - Order placement
- **Order Confirmation** (`/order-confirmation/:id`) - Order details
- **Start Selling** (`/sell`) - Store creation wizard
- **Store** (`/store/:id`) - Individual store page
- **Stores** (`/stores`) - Browse all stores
- **Saved Products** (`/saved`) - User's favorite products
- **Settings** (`/settings`) - User preferences and theme
- **About** (`/about`) - Information about cLink
- **Categories** (`/categories`) - Shop by category

## Design System

### Colors
- **Primary Navy**: #001f5c
- **Primary Gold**: #FFD700
- **Secondary Gold**: #FFC700
- **Text Dark**: #1a1a1a
- **Text Light**: #666666
- **Background Light**: #f5f5f5
- **Background White**: #ffffff
- **Border Gray**: #e0e0e0

### Typography
- **Font Family**: System fonts (Apple system, Segoe UI, Roboto, etc.)
- **Titles**: Bold (700 weight)
- **Regular text**: 400-600 weight
- **Small text**: 13-14px

## Getting Started

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

## Technology Stack

- **React** 18.2.0
- **React Router** 6.14.2
- **TypeScript** 5.1.6
- **CSS3** with CSS Variables
- **LocalStorage** for data persistence

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   └── ProductCard.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── ShopPage.tsx
│   ├── ProductDetailPage.tsx
│   ├── CartPage.tsx
│   ├── CheckoutPage.tsx
│   ├── OrderConfirmationPage.tsx
│   ├── SellerPage.tsx
│   ├── StorePage.tsx
│   ├── StoresListPage.tsx
│   ├── SavedPage.tsx
│   ├── SettingsPage.tsx
│   ├── AboutPage.tsx
│   └── CategoriesPage.tsx
├── data/               # Sample data
│   └── sampleData.ts
├── styles/             # Global styles
│   └── globals.css
├── types/              # TypeScript types
│   └── index.ts
├── App.tsx             # Main app component
└── index.tsx           # Entry point
```

## Key Features Explained

### Product Links (cLinks)
Each product has a unique cLink in the format: `clink.ph/p/[product-name]`
- Users can copy the link with one click
- Share it anywhere (social media, messaging, etc.)
- Links open directly to the product page

### Dark Mode
- Toggle in Settings or Sidebar menu
- Preference saved to localStorage
- All pages styled for both light and dark themes

### Search & Filters
- Search by product name, description, store, or category
- Filter by price range
- Sort by: featured, newest, price, or rating
- Results update in real-time

### Shopping Cart
- Add multiple products
- Update quantities
- Remove items
- Persistent across sessions
- Cart count badge in header

### Checkout Flow
1. Enter delivery information
2. Select payment method (COD, GCash, Bank Transfer)
3. Review order summary
4. Place order
5. View order confirmation with order number

### Seller Store Creation
1. Click "Start Selling"
2. Fill store information (name, description, location, contact)
3. Store is created and ready for products
4. Each product gets a unique cLink automatically

## Sample Data

The app includes 24 sample products across 10 categories:
- Fashion
- Electronics
- Beauty
- Home
- Food
- Accessories
- Sports
- School
- Gadgets
- Others

5 sample stores with realistic product inventory

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## Future Enhancements

- Real-time messaging between buyers and sellers
- Product reviews and ratings
- Wishlist sharing
- Order tracking
- Payment gateway integration
- User authentication
- Admin dashboard
- Product inventory management
- Sales analytics

## License

MIT License - Open source marketplace platform

## Support

For questions or issues, please create an issue in the repository.
