import React from 'react';
import { siteConfig } from '../config/siteConfig';

export const About = () => {
  const { about, advisor } = siteConfig;

  return (
    <section id="sobre-ricardo" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-[hsl(var(--accent))] opacity-10 rounded-2xl transform rotate-3" />
              <img
                src={advisor.photoUrl}
                alt={advisor.name}
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
                {about.title}
              </h2>
              <div className="w-20 h-1 bg-[hsl(var(--accent))]" />
            </div>

            <div className="prose prose-lg max-w-none">
              {about.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
