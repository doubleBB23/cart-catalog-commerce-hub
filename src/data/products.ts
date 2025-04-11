
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
    rating: 4.8,
    description: "Immerse yourself in crystal clear sound with these premium wireless headphones."
  },
  {
    id: 2,
    name: "Smartphone Pro Max",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
    rating: 4.9,
    description: "The latest smartphone with cutting-edge features and a stunning display."
  },
  {
    id: 3,
    name: "Athletic Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Footwear",
    rating: 4.5,
    description: "Comfortable running shoes designed for maximum performance and durability."
  },
  {
    id: 4,
    name: "Designer Leather Handbag",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
    rating: 4.7,
    description: "Elegant leather handbag with spacious compartments and stylish design."
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
    rating: 4.6,
    description: "Track your fitness goals with this advanced smartwatch with health monitoring features."
  },
  {
    id: 6,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Clothing",
    rating: 4.3,
    description: "Eco-friendly cotton t-shirt for everyday comfort and style."
  },
  {
    id: 7,
    name: "Professional DSLR Camera",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
    rating: 4.9,
    description: "Capture stunning images with this high-end professional DSLR camera."
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
    rating: 4.4,
    description: "Eco-friendly, insulated water bottle to keep your drinks at the perfect temperature."
  },
  {
    id: 9,
    name: "Designer Sunglasses",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
    rating: 4.7,
    description: "Stylish sunglasses with UV protection and comfortable fit."
  },
  {
    id: 10,
    name: "Luxury Scented Candle",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Home",
    rating: 4.6,
    description: "Long-lasting scented candle with natural ingredients and elegant packaging."
  },
  {
    id: 11,
    name: "Wireless Gaming Mouse",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Electronics",
    rating: 4.8,
    description: "High-precision wireless mouse designed specifically for professional gamers."
  },
  {
    id: 12,
    name: "Vintage Leather Wallet",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    category: "Accessories",
    rating: 4.5,
    description: "Handcrafted leather wallet with multiple card slots and classic design."
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));

export const priceRange = {
  min: Math.min(...products.map(product => product.price)),
  max: Math.max(...products.map(product => product.price))
};
