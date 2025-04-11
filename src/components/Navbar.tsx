
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import ShoppingCart from './ShoppingCart';

const Navbar: React.FC = () => {
  return (
    <header className="border-b sticky top-0 z-40 bg-background">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="text-xl font-bold">ShopSmart</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Products
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Categories
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
