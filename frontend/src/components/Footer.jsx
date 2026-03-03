import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { branding, contact, advisor } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--primary))] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo y descripción */}
          <div>
            <img
              src={branding.logoUrl}
              alt={branding.logoAlt}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Asesoría patrimonial profesional con más de {currentYear - 2015} años de experiencia. 
              Parte del 1% de asesores MDRT a nivel mundial.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold text-[hsl(var(--accent))] mb-6">
              Contacto
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 text-gray-300 hover:text-[hsl(var(--accent))] transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="group-hover:underline">{contact.email}</span>
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[\s+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-300 hover:text-[hsl(var(--accent))] transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="group-hover:underline">{contact.whatsappDisplay}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold text-[hsl(var(--accent))] mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre-ricardo" className="text-gray-300 hover:text-[hsl(var(--accent))] transition-colors hover:underline">
                  Sobre Ricardo
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-[hsl(var(--accent))] transition-colors hover:underline">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#agendar-cita" className="text-gray-300 hover:text-[hsl(var(--accent))] transition-colors hover:underline">
                  Agendar Consulta
                </a>
              </li>
              <li>
                <a href="#pre-calificacion" className="text-gray-300 hover:text-[hsl(var(--accent))] transition-colors hover:underline">
                  Pre-Calificación
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {advisor.name}. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Desarrollado con dedicación y profesionalismo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
