import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export const FAQs = () => {
  const { faqs } = siteConfig;

  return (
    <section id="faqs" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Resuelve tus dudas más comunes sobre seguros y asesoría patrimonial
          </p>
          <div className="w-20 h-1 bg-[hsl(var(--accent))] mx-auto" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-[hsl(var(--accent))] transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
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
