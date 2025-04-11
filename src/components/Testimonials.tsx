
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer K.",
      role: "Verified Customer",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
      stars: 5,
      quote: "After trying numerous whitening products, Dentivital is the only one that delivered the results I was looking for without sensitivity. My teeth are visibly whiter after just one week!"
    },
    {
      name: "Marcus L.",
      role: "Verified Customer",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80",
      stars: 5,
      quote: "As someone who drinks a lot of coffee, I was amazed at how well these strips removed my stains. They're comfortable to wear and don't slide around like other brands I've tried."
    },
    {
      name: "Sophia T.",
      role: "Verified Customer",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
      stars: 4,
      quote: "My dentist was impressed with the results from Dentivital! The whitening is even and natural-looking, not fake or chalky. Will definitely be purchasing again."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-dentivital-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of happy customers have transformed their smiles with Dentivital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
