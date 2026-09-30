# cLink Marketplace - Setup Instructions

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

## Features to Test

### Home Page
- ✅ Hero section with call-to-action buttons
- ✅ 10 product categories
- ✅ Featured products (8 products)
- ✅ Popular stores (5 stores)
- ✅ How cLink Works section

### Shopping
- ✅ Browse products in /shop
- ✅ Search for products (works with name, description, store, category)
- ✅ Filter by price range
- ✅ Sort by featured, newest, price (low-high, high-low), rating
- ✅ Click product to view details
- ✅ Add products to cart
- ✅ Save/favorite products

### Product Details
- ✅ View product images (multiple images if available)
- ✅ See product information (name, price, seller, location, stock)
- ✅ View product rating and reviews
- ✅ Select variations (size, color, etc.)
- ✅ Adjust quantity
- ✅ Add to cart
- ✅ **COPY cLink button** - copies unique product link to clipboard
- ✅ **Share button** - uses browser share or copies link
- ✅ Message seller

### Shopping Cart
- ✅ View all cart items
- ✅ Adjust quantities (+/-)
- ✅ Remove items
- ✅ See subtotal, shipping, total
- ✅ Proceed to checkout
- ✅ Cart persists across page refreshes

### Checkout
- ✅ Fill delivery information (name, phone, address, city, postal code)
- ✅ Select payment method (Cash on Delivery, GCash, Bank Transfer)
- ✅ Review order summary
- ✅ Place order
- ✅ See order confirmation with order number

### Seller / Start Selling
- ✅ Click "Start Selling" button
- ✅ See benefits of starting a store
- ✅ Fill store information (name, description, location, contact)
- ✅ Create store
- ✅ Store is saved and ready
- ✅ Each store gets empty product list initially

### Stores
- ✅ View all stores in /stores
- ✅ Click store to view store page
- ✅ See store logo, name, description, location, rating
- ✅ See products from that store
- ✅ Follow store button
- ✅ Message seller button

### Saved Products
- ✅ Heart/bookmark icon on product cards
- ✅ Click to save/unsave products
- ✅ View saved products in /saved
- ✅ Saved status persists with localStorage

### Categories
- ✅ View all 10 categories
- ✅ Click category to filter shop
- ✅ View category icons and names

### Settings
- ✅ **Dark Mode toggle** - switches theme and saves preference
- ✅ **Light Mode toggle** - switches back
- ✅ Notification settings
- ✅ Newsletter subscription
- ✅ Language selection
- ✅ Privacy and terms links
- ✅ About and Help links

### Navigation
- ✅ Header with logo, search bar, cart icon, messages icon, user icon
- ✅ Hamburger menu on mobile
- ✅ Sidebar menu with all navigation links
- ✅ Footer with cLink branding and links
- ✅ Breadcrumb navigation on product page

### Search Functionality
- ✅ Real-time search as you type
- ✅ Search by product name
- ✅ Search by store name
- ✅ Search by category
- ✅ Search by description
- ✅ Shows "No products found" if no results
- ✅ Clear button to reset search

### Dark/Light Mode
- ✅ Toggle in settings or sidebar
- ✅ Applies to entire website
- ✅ Preference saved to localStorage
- ✅ Persists across sessions

### Responsive Design
- ✅ Mobile: Hamburger menu, compact header, single column layout
- ✅ Tablet: 2-column layouts, medium text
- ✅ Desktop: Full layouts with sidebar filters
- ✅ All buttons and links are touch-friendly on mobile

## Sample Data

### 24 Sample Products
Nike Air Max, Wireless Earbuds, Oversized Tee, Canvas Backpack, Mechanical Keyboard, Water Bottle, Mini Fan, Phone Case, Running Shoes, LED Lamp, Face Wash, Moisturizer, Yoga Mat, Notebooks, Wireless Mouse, Coffee Maker, Smartphone Case Bundle, Smart Watch, Sunglasses, Bluetooth Speaker, Pendant Necklace, Desk Organizer, Protein Shaker, USB-C Cable

### 5 Sample Stores
1. TechHub Store (Electronics) - Metro Manila
2. Fashion Forward (Clothing) - Cebu
3. Home & Living (Home Goods) - Davao
4. Beauty Bliss (Beauty) - Makati
5. Sports Central (Sports) - Quezon City

### 10 Categories
Fashion, Electronics, Beauty, Home, Food, Accessories, Sports, School, Gadgets, Others

## Testing Checklist

### Essential Functions
- [ ] Search works correctly
- [ ] Products can be added to cart
- [ ] Cart updates quantity correctly
- [ ] Copy cLink button copies to clipboard
- [ ] Save/favorite products work
- [ ] Dark mode toggle works
- [ ] Checkout form validates
- [ ] Order confirmation displays
- [ ] Sidebar menu opens/closes
- [ ] Mobile responsive layout works

### Data Persistence
- [ ] Cart items persist after refresh
- [ ] Saved products persist after refresh
- [ ] Dark mode preference persists after refresh
- [ ] Settings saved correctly

### Navigation
- [ ] All routes work correctly
- [ ] Links navigate properly
- [ ] Back buttons work
- [ ] Breadcrumbs are accurate

## Troubleshooting

### Cart not showing items
- Clear browser cache and localStorage
- Check browser console for errors

### Dark mode not working
- Refresh the page
- Clear localStorage: `localStorage.clear()`

### Search not working
- Check that search bar is focused
- Ensure product data is loaded
- Try refreshing the page

### Images not loading
- Images are from Unsplash (external source)
- Check internet connection
- Verify Unsplash is not blocked

## Browser Console

No console errors should appear. If you see any:
1. Check that all imports are correct
2. Verify TypeScript types are properly defined
3. Ensure localStorage is available

## Performance

- Page loads should be instant
- Animations are smooth (using CSS transitions)
- No lag when adding to cart
- Search results update in real-time

## Customization

To add more products:
1. Edit `src/data/sampleData.ts`
2. Add new items to the `products` array
3. Make sure each product has a unique ID
4. Refresh the browser

To change colors:
1. Edit `src/styles/globals.css`
2. Modify the CSS variables in `:root {}`
3. Changes will apply everywhere

To add new categories:
1. Edit `src/data/sampleData.ts`
2. Add to `categories` array
3. Products should reference the category name

## File Structure

```
clink/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx / Header.css
│   │   ├── Footer.tsx / Footer.css
│   │   ├── Sidebar.tsx / Sidebar.css
│   │   └── ProductCard.tsx / ProductCard.css
│   ├── pages/
│   │   ├── HomePage.tsx / HomePage.css
│   │   ├── ShopPage.tsx / ShopPage.css
│   │   ├── ProductDetailPage.tsx / ProductDetailPage.css
│   │   ├── CartPage.tsx / CartPage.css
│   │   ├── CheckoutPage.tsx / CheckoutPage.css
│   │   ├── OrderConfirmationPage.tsx / OrderConfirmationPage.css
│   │   ├── SellerPage.tsx / SellerPage.css
│   │   ├── StorePage.tsx / StorePage.css
│   │   ├── StoresListPage.tsx / StoresListPage.css
│   │   ├── SavedPage.tsx / SavedPage.css
│   │   ├── SettingsPage.tsx / SettingsPage.css
│   │   ├── AboutPage.tsx / AboutPage.css
│   │   └── CategoriesPage.tsx / CategoriesPage.css
│   ├── data/
│   │   └── sampleData.ts
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── README.md
```

## Support

All pages are fully functional. The cLink logo is embedded as SVG in the Header component.

Enjoy your cLink marketplace! 🚀
