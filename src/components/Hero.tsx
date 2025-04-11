
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-dentivital-50">
      <div className="absolute inset-0 bg-gradient-radial from-dentivital-100/30 to-transparent opacity-70"></div>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Reveal Your <span className="gradient-text">Brightest Smile</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Professional-grade teeth whitening strips that deliver noticeably whiter teeth in just 7 days. Clinically proven, enamel-safe technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-dentivital-600 hover:bg-dentivital-700 text-white px-8 py-6 rounded-md text-lg">
                Shop Now
              </Button>
              <Button variant="outline" className="border-dentivital-600 text-dentivital-600 hover:bg-dentivital-50 px-8 py-6 rounded-md text-lg">
                Learn More
              </Button>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">4.9/5</span> from over 2,000+ reviews
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-dentivital-400 to-blue-400 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 flex flex-col items-center">
                  <div className="bg-dentivital-50 rounded-lg p-4 w-full mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1606265752439-1f19106af98a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Dentivital Whitening Strips" 
                      className="w-full h-auto rounded-md object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Premium Whitening Kit</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-bold mr-2">$39.99</span>
                    <span className="text-sm text-gray-500 line-through">$59.99</span>
                    <span className="ml-2 bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Save 33%</span>
                  </div>
                  <Button className="bg-dentivital-600 hover:bg-dentivital-700 w-full">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
