
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-dentivital-400">Dentivital</h3>
            <p className="text-gray-400 mb-4">
              Professional teeth whitening solutions for a brighter, more confident smile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-dentivital-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dentivital-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-dentivital-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Whitening Strips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Whitening Pen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">LED Whitening Kit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Whitening Toothpaste</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Dental Professionals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Track Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Dentivital. All rights reserved.</p>
          <p className="mt-2">
            Dentivital is not a substitute for professional dental care. Consult with your dentist before use.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
