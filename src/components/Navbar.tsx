
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-dentivital-600">Dentivital</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-dentivital-600 transition">
            Home
          </Link>
          <a href="#benefits" className="text-gray-700 hover:text-dentivital-600 transition">
            Benefits
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-dentivital-600 transition">
            How it Works
          </a>
          <a href="#reviews" className="text-gray-700 hover:text-dentivital-600 transition">
            Reviews
          </a>
          <a href="#faq" className="text-gray-700 hover:text-dentivital-600 transition">
            FAQ
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button className="bg-dentivital-600 hover:bg-dentivital-700">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Shop Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
