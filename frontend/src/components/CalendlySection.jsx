import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { trackCalendlyOpen, trackCalendlyScheduled } from '../utils/analytics';

export const CalendlySection = ({ isVisible }) => {
  const { calendlyUrl } = siteConfig.integrations;

  useEffect(() => {
    if (!isVisible) return;

    // Cargar script de Calendly solo cuando sea visible
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Listener para eventos de Calendly
    const handleCalendlyEvent = (e) => {
      if (e.data.event === 'calendly.event_scheduled') {
        trackCalendlyScheduled(e.data.payload);
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    // Track cuando se abre/visualiza Calendly
    trackCalendlyOpen();

    // Scroll suave hacia Calendly
    setTimeout(() => {
      const element = document.getElementById('agendar-cita');
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }, 100);

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <section id="agendar-cita" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
            Agenda tu Consulta Gratuita
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Selecciona la fecha y hora que mejor te convenga
          </p>
          <div className="w-20 h-1 bg-[hsl(var(--accent))] mx-auto" />
        </div>

        {/* Calendly Inline Widget */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url={calendlyUrl}
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Fallback de conversión */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿Prefieres contactar directamente?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[\s+]/g, '')}?text=${encodeURIComponent('Hola Ricardo, acabo de completar el formulario y me gustaría agendar una consulta.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Escribir por WhatsApp</span>
            </a>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary))] text-white px-8 py-3 rounded-lg hover:bg-[hsl(var(--navy-medium))] transition-all duration-300 hover:shadow-lg"
            >
              <span>Abrir Calendly en nueva ventana</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
