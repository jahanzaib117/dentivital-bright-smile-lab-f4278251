
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most users notice a difference after just a few days, with significant results visible by day 7. For maximum whitening, complete the full 14-day treatment course."
    },
    {
      question: "Are Dentivital strips safe for sensitive teeth?",
      answer: "Yes! Our strips are formulated with our proprietary Gentle Tech™ formula that provides powerful whitening while being gentle on enamel and minimizing sensitivity."
    },
    {
      question: "How often should I use the whitening strips?",
      answer: "For best results, use one set of strips daily for 30 minutes. After completing the 14-day treatment, you can maintain your white smile with weekly applications."
    },
    {
      question: "Can I drink coffee or wine while using Dentivital?",
      answer: "We recommend avoiding staining beverages like coffee, tea, red wine, and cola for at least one hour after each treatment. During your 14-day treatment, reducing consumption of these beverages will help maximize your results."
    },
    {
      question: "Are the results permanent?",
      answer: "Dentivital provides long-lasting results, but teeth naturally accumulate stains over time. To maintain your bright smile, we recommend using our maintenance strips once weekly after completing the initial treatment."
    },
    {
      question: "Is Dentivital suitable for dental work like crowns or veneers?",
      answer: "Dentivital works best on natural teeth. It will not whiten crowns, veneers, fillings, or other dental work. These restorations are designed to maintain their original color."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to our most commonly asked questions about Dentivital whitening strips.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border px-6 rounded-lg shadow-sm">
                <AccordionTrigger className="text-left font-semibold py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
