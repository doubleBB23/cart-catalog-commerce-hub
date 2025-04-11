
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import FilterPanel from '@/components/FilterPanel';
import { products, priceRange } from '@/data/products';
import { CartProvider } from '@/context/CartContext';

const Index: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<[number, number]>([
    priceRange.min,
    priceRange.max,
  ]);
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceFilter([priceRange.min, priceRange.max]);
    setRatingFilter(0);
  };

  useEffect(() => {
    let result = [...products];

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= priceFilter[0] && product.price <= priceFilter[1]
    );

    // Filter by minimum rating
    if (ratingFilter > 0) {
      result = result.filter((product) => product.rating >= ratingFilter);
    }

    setFilteredProducts(result);
  }, [selectedCategories, priceFilter, ratingFilter]);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <div className="container px-4 py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Products</h1>
            
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/4">
                <FilterPanel
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  priceFilter={priceFilter}
                  setPriceFilter={setPriceFilter}
                  ratingFilter={ratingFilter}
                  setRatingFilter={setRatingFilter}
                  resetFilters={resetFilters}
                />
              </div>
              
              <div className="lg:w-3/4">
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredProducts.length} of {products.length} products
                  </div>
                </div>
                
                <ProductGrid products={filteredProducts} />
              </div>
            </div>
          </div>
        </main>
        
        <footer className="border-t py-8 text-center text-sm text-muted-foreground">
          <div className="container px-4">
            &copy; 2025 ShopSmart. All rights reserved.
          </div>
        </footer>
      </div>
    </CartProvider>
  );
};

export default Index;
