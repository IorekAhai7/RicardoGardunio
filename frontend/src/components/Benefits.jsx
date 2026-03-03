import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Shield, Heart, Users, Award } from 'lucide-react';

const icons = {
  0: Shield,
  1: Heart,
  2: Users,
  3: Award,
};

export const Benefits = () => {
  const { benefits } = siteConfig;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
            ¿Por qué trabajar conmigo?
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--accent))] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = icons[index] || Shield;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-[hsl(var(--accent))]/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[hsl(var(--accent))]" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--primary))] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
