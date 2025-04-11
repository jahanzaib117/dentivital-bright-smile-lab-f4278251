
import React from 'react';
import { Badge } from '@/components/ui/badge';

const BeforeAfter = () => {
  const results = [
    {
      name: "Sarah M.",
      days: 14,
      beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      testimonial: "I never thought I could achieve such dramatic results at home. My smile is noticeably whiter!"
    },
    {
      name: "Michael T.",
      days: 7,
      beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      testimonial: "As someone with sensitive teeth, I was nervous to try whitening products. Dentivital was gentle and effective."
    }
  ];

  return (
    <section className="py-20 bg-dentivital-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the transformation for yourself with these before and after results from our satisfied customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-semibold text-sm text-gray-700">
                    Before
                  </div>
                  <img 
                    src={result.beforeImage} 
                    alt={`${result.name} before`} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 relative">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-semibold text-sm text-gray-700">
                    After
                  </div>
                  <Badge className="absolute top-4 right-4 bg-dentivital-500">{result.days} Days</Badge>
                  <img 
                    src={result.afterImage} 
                    alt={`${result.name} after`} 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{result.name}</h3>
                <p className="text-gray-600 italic">"{result.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
