import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackWhatsAppClick } from '../utils/analytics';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloat = () => {
  const { contact } = siteConfig;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el botón después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    trackWhatsAppClick();
    const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[\s+]/g, '')}?text=${encodeURIComponent('Hola Ricardo, me gustaría recibir asesoría sobre seguros y protección patrimonial.')}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="group relative bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulso animado */}
        <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20" />
        
        {/* Ícono */}
        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap shadow-xl">
            ¿Necesitas ayuda? Escríbeme
            <div className="absolute top-full right-6 -mt-1 border-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </button>
    </div>
  );
};
