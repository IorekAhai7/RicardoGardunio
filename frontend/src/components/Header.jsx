import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Phone, Mail } from 'lucide-react';

export const Header = () => {
  const { branding, contact, advisor } = siteConfig;

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contact.whatsapp.replace(/[\s+]/g, '')}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={branding.logoUrl}
              alt={branding.logoAlt}
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Contacto */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-[hsl(var(--accent))] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{contact.email}</span>
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 bg-[hsl(var(--primary))] text-white px-6 py-2.5 rounded-lg hover:bg-[hsl(var(--navy-medium))] transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Contactar</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
