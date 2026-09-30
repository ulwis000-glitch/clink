export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Store {
  id: string;
  name: string;
  description: string;
  logo: string;
  location: string;
  rating: number;
  productCount: number;
  contact: string;
  owner: string;
}

export interface ProductVariation {
  name: string;
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  seller: string;
  location: string;
  storeId: string;
  category: string;
  image: string;
  images?: string[];
  description: string;
  clink: string;
  stock: number;
  variations?: ProductVariation[];
}

export const categories: Category[] = [
  { id: 'fashion', name: 'Fashion', icon: '👗' },
  { id: 'electronics', name: 'Electronics', icon: '💻' },
  { id: 'beauty', name: 'Beauty', icon: '✨' },
  { id: 'home', name: 'Home', icon: '🏠' },
  { id: 'food', name: 'Food', icon: '🍜' },
  { id: 'accessories', name: 'Accessories', icon: '👜' },
  { id: 'sports', name: 'Sports', icon: '🏃' },
  { id: 'school', name: 'School', icon: '🎒' },
  { id: 'gadgets', name: 'Gadgets', icon: '📱' },
  { id: 'others', name: 'Others', icon: '🛍️' },
];

export const stores: Store[] = [
  {
    id: 'store-1',
    name: 'North Peak Goods',
    description: 'Curated essentials for everyday living and trend-forward finds.',
    logo: '🏔️',
    location: 'Baguio City',
    rating: 4.9,
    productCount: 6,
    contact: '0917-123-4567',
    owner: 'Ari Santos',
  },
  {
    id: 'store-2',
    name: 'Sunset Studio',
    description: 'Minimalist accessories, fashion pieces, and everyday upgrades.',
    logo: '🌅',
    location: 'Cebu City',
    rating: 4.8,
    productCount: 4,
    contact: '0922-987-4321',
    owner: 'Lena Cruz',
  },
  {
    id: 'store-3',
    name: 'Pixel & Pine',
    description: 'Tech accessories and lifestyle gadgets for modern work and play.',
    logo: '📦',
    location: 'Davao City',
    rating: 4.7,
    productCount: 5,
    contact: '0998-555-0101',
    owner: 'Milo Ramos',
  },
  {
    id: 'store-4',
    name: 'Maya Market',
    description: 'A cozy collection of home, beauty, and kitchen favorites.',
    logo: '🛋️',
    location: 'Quezon City',
    rating: 4.9,
    productCount: 5,
    contact: '0932-777-5544',
    owner: 'Maya Dela Cruz',
  },
  {
    id: 'store-5',
    name: 'Checkered Carry',
    description: 'Smart backpacks, school supplies, and carry solutions for everyday life.',
    logo: '🎒',
    location: 'Manila',
    rating: 4.6,
    productCount: 4,
    contact: '0905-222-7788',
    owner: 'Rene Villanueva',
  },
];

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'CloudStep Sneakers',
    price: 1899,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 182,
    seller: 'North Peak Goods',
    location: 'Baguio City',
    storeId: 'store-1',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Lightweight everyday sneakers built for comfort, movement, and all-day wear.',
    clink: '/p/cloudstep-sneakers',
    stock: 12,
    variations: [{ name: 'Size', options: ['39', '40', '41', '42', '43'] }],
  },
  {
    id: 'prod-2',
    name: 'Aura Wireless Earbuds',
    price: 3499,
    originalPrice: 4999,
    rating: 4.7,
    reviews: 214,
    seller: 'Pixel & Pine',
    location: 'Davao City',
    storeId: 'store-3',
    category: 'gadgets',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Rich bass, compact fit, and clear calls in a pocket-friendly wireless setup.',
    clink: '/p/aura-wireless-earbuds',
    stock: 20,
    variations: [{ name: 'Color', options: ['Black', 'Silver', 'White'] }],
  },
  {
    id: 'prod-3',
    name: 'Golden Hour Serum',
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 96,
    seller: 'Sunset Studio',
    location: 'Cebu City',
    storeId: 'store-2',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Hydrating skin treatment with a lightweight finish and a healthy glow.',
    clink: '/p/golden-hour-serum',
    stock: 18,
    variations: [{ name: 'Size', options: ['30ml', '50ml'] }],
  },
  {
    id: 'prod-4',
    name: 'Cove Ceramic Mug Set',
    price: 1299,
    originalPrice: 1699,
    rating: 4.6,
    reviews: 83,
    seller: 'Maya Market',
    location: 'Quezon City',
    storeId: 'store-4',
    category: 'home',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A handcrafted ceramic pair designed for slow mornings and warm coffee rituals.',
    clink: '/p/cove-ceramic-mug-set',
    stock: 10,
  },
  {
    id: 'prod-5',
    name: 'Daybreak Capsule Backpack',
    price: 2299,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 134,
    seller: 'Checkered Carry',
    location: 'Manila',
    storeId: 'store-5',
    category: 'school',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A structured backpack with roomy storage and durable finishes for commuting and class.',
    clink: '/p/daybreak-capsule-backpack',
    stock: 15,
    variations: [{ name: 'Color', options: ['Midnight', 'Sand', 'Forest'] }],
  },
  {
    id: 'prod-6',
    name: 'Mango Chili Crunch',
    price: 450,
    originalPrice: 650,
    rating: 4.7,
    reviews: 61,
    seller: 'Maya Market',
    location: 'Quezon City',
    storeId: 'store-4',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    description: 'A bold, spicy snack blend with sweet mango flavor and a satisfying crunchy finish.',
    clink: '/p/mango-chili-crunch',
    stock: 30,
  },
  {
    id: 'prod-7',
    name: 'Orbit Smart Watch',
    price: 5999,
    originalPrice: 7999,
    rating: 4.8,
    reviews: 220,
    seller: 'Pixel & Pine',
    location: 'Davao City',
    storeId: 'store-3',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'Track workouts, messages, and daily activity with a sleek, lightweight smartwatch.',
    clink: '/p/orbit-smart-watch',
    stock: 8,
    variations: [{ name: 'Band', options: ['Black', 'Rose Gold', 'Silver'] }],
  },
  {
    id: 'prod-8',
    name: 'Harbor Sling Bag',
    price: 1599,
    originalPrice: 2199,
    rating: 4.5,
    reviews: 77,
    seller: 'North Peak Goods',
    location: 'Baguio City',
    storeId: 'store-1',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    description: 'A compact crossbody with enough room for daily essentials and city outings.',
    clink: '/p/harbor-sling-bag',
    stock: 14,
    variations: [{ name: 'Color', options: ['Sand', 'Mulberry', 'Navy'] }],
  },
  {
    id: 'prod-9',
    name: 'Summit Yoga Mat',
    price: 1199,
    originalPrice: 1699,
    rating: 4.7,
    reviews: 88,
    seller: 'Sunset Studio',
    location: 'Cebu City',
    storeId: 'store-2',
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    description: 'Extra-thick comfort and a non-slip finish for workouts and stretching sessions.',
    clink: '/p/summit-yoga-mat',
    stock: 11,
    variations: [{ name: 'Color', options: ['Teal', 'Lavender', 'Charcoal'] }],
  },
  {
    id: 'prod-10',
    name: 'Pine Glow Lamp',
    price: 2200,
    originalPrice: 3200,
    rating: 4.9,
    reviews: 90,
    seller: 'Maya Market',
    location: 'Quezon City',
    storeId: 'store-4',
    category: 'home',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description: 'Warm ambient lighting with a simple silhouette for cozy evening spaces.',
    clink: '/p/pine-glow-lamp',
    stock: 9,
  },
];

export const featuredProducts = products.slice(0, 8);
