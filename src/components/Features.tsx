
import React from 'react';
import { Sparkles, Shield, Clock, ThumbsUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="h-10 w-10 text-dentivital-500" />,
      title: "Professional Results",
      description: "Our advanced formula removes years of stains for a noticeably whiter smile."
    },
    {
      icon: <Shield className="h-10 w-10 text-dentivital-500" />,
      title: "Enamel Safe",
      description: "Gentle on sensitive teeth and designed to protect your enamel."
    },
    {
      icon: <Clock className="h-10 w-10 text-dentivital-500" />,
      title: "Fast Acting",
      description: "See results in just 7 days with our accelerated whitening technology."
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-dentivital-500" />,
      title: "Dentist Recommended",
      description: "Developed and approved by leading dental professionals."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Dentivital?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our premium teeth whitening strips are designed to deliver professional results from the comfort of your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
