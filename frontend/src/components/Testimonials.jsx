import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const { testimonials } = siteConfig;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            La confianza se construye con resultados y acompañamiento real
          </p>
          <div className="w-20 h-1 bg-[hsl(var(--accent))] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Ícono de comillas */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[hsl(var(--accent))]" />
              </div>

              {/* Contenido */}
              <div className="relative z-10">
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-[hsl(var(--primary))]">
                    {testimonial.name}
                  </p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
