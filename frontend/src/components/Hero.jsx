import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const { advisor } = siteConfig;

  const scrollToForm = () => {
    const element = document.getElementById('pre-calificacion');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(var(--primary))] text-white">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="mb-8">
          <span className="inline-block text-[hsl(var(--accent))] text-sm font-semibold tracking-wider uppercase mb-4">
            {advisor.title}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            {advisor.name}
          </h1>
        </div>

        <div className="space-y-6 mb-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-relaxed text-gray-100">
            {advisor.heroTitle}
          </p>
          <p className="text-xl sm:text-2xl text-[hsl(var(--accent))] font-light italic">
            {advisor.heroSubtitle}
          </p>
        </div>

        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] text-[hsl(var(--primary))] px-8 py-4 rounded-lg hover:bg-[hsl(var(--gold-dark))] transition-all duration-300 hover:shadow-xl font-semibold text-lg"
        >
          <span>Solicitar Asesoría Gratuita</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Decoración dorada sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--accent))] to-transparent" />
    </section>
  );
};
