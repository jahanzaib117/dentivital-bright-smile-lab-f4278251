
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CallToAction = () => {
  const benefits = [
    "Professional-grade results at home",
    "Whiter teeth in just 7 days",
    "Enamel-safe formula",
    "No tooth sensitivity",
    "30-day money-back guarantee"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dentivital-500 to-dentivital-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Brighter Smile?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of satisfied customers who have transformed their smile with Dentivital.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-10">
            <div className="flex flex-col items-center mb-6">
              <div className="text-sm font-semibold text-white/80 mb-1">SPECIAL OFFER</div>
              <div className="text-3xl font-bold mb-2">Save 33% Today</div>
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">$39.99</span>
                <span className="text-lg text-white/70 line-through">$59.99</span>
              </div>
            </div>
            
            <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-white" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="bg-white text-dentivital-600 hover:bg-white/90 px-8">
              Get Your Kit Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-white/80">
            Free shipping on all orders. 30-day money-back guarantee if you're not completely satisfied.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
