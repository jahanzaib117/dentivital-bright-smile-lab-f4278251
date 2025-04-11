
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Apply the Strips",
      description: "Place the gel side of the strip against your teeth and press gently to secure.",
      image: "https://images.unsplash.com/photo-1606265752439-1f19106af98a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02",
      title: "Wait 30 Minutes",
      description: "Let the advanced whitening formula work its magic on your teeth.",
      image: "https://images.unsplash.com/photo-1608229191360-7064b0afa639?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Remove & Rinse",
      description: "Peel off the strips and rinse your mouth with water to remove any excess gel.",
      image: "https://images.unsplash.com/photo-1581963678295-8dee522eadbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Achieving a brighter smile with Dentivital is easy and fits seamlessly into your routine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-4xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-dentivital-100 rounded-xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">For Best Results</h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Use Dentivital strips once daily for 30 minutes for 14 consecutive days. Most users see noticeable results within the first week, with full results after completing the treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
