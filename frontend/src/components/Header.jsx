import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Phone, Menu, X } from 'lucide-react';

export const Header = () => {
  const { branding, contact } = siteConfig;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contact.whatsapp.replace(/[\s+]/g, '')}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // altura del header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Sobre Ricardo', id: 'sobre-ricardo' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Testimonios', id: 'testimonios' },
    { name: 'Consulta', id: 'pre-calificacion' },
    { name: 'FAQs', id: 'faqs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={branding.logoUrl}
                alt={branding.logoAlt}
                className="h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </button>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-700 hover:text-[hsl(var(--accent))] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Botón de Contacto */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleWhatsAppClick}
              className="hidden sm:flex items-center gap-2 bg-[hsl(var(--primary))] text-white px-6 py-2.5 rounded-lg hover:bg-[hsl(var(--navy-medium))] transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Contactar</span>
            </button>

            {/* Botón de menú móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[hsl(var(--accent))]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[hsl(var(--accent))] hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="sm:hidden flex items-center justify-center gap-2 w-full bg-[hsl(var(--primary))] text-white px-6 py-3 rounded-lg hover:bg-[hsl(var(--navy-medium))] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
