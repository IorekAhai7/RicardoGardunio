import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Calendar, FileText, Handshake } from 'lucide-react';

const icons = {
  1: Calendar,
  2: FileText,
  3: Handshake,
};

export const HowItWorks = () => {
  const { howItWorks } = siteConfig;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Un proceso simple, transparente y enfocado en ti
          </p>
          <div className="w-20 h-1 bg-[hsl(var(--accent))] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Línea conectora en desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-[hsl(var(--accent))]/30" style={{ top: '80px' }} />

          {howItWorks.map((step) => {
            const Icon = icons[step.step];
            return (
              <div key={step.step} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    {/* Número del paso */}
                    <div className="relative w-20 h-20 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center mb-6 z-10">
                      <span className="text-2xl font-bold">{step.step}</span>
                      <div className="absolute inset-0 bg-[hsl(var(--accent))] rounded-full animate-ping opacity-20" />
                    </div>

                    {/* Ícono */}
                    <div className="w-14 h-14 bg-[hsl(var(--accent))]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[hsl(var(--accent))]" />
                    </div>

                    {/* Contenido */}
                    <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
