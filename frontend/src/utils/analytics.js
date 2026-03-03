// ============================================
// UTILIDADES DE GOOGLE ANALYTICS 4
// ============================================

import { siteConfig } from '../config/siteConfig';

// Inicializar GA4
export const initGA4 = () => {
  const { ga4Id } = siteConfig.integrations;
  
  if (!ga4Id || ga4Id === 'G-XXXXXXXXXX') {
    console.warn('GA4 ID no configurado');
    return;
  }

  // Cargar script de GA4
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
  document.head.appendChild(script);

  // Inicializar gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', ga4Id);
};

// Disparar evento personalizado
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
    console.log(`📊 GA4 Event: ${eventName}`, eventParams);
  } else {
    console.warn('GA4 no está inicializado');
  }
};

// Eventos específicos del sitio
export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    button_location: 'floating_button',
    phone_number: siteConfig.contact.whatsapp,
  });
};

export const trackCalendlyOpen = () => {
  trackEvent('calendly_open', {
    calendly_url: siteConfig.integrations.calendlyUrl,
  });
};

export const trackCalendlyScheduled = (eventDetails = {}) => {
  trackEvent('calendly_scheduled', {
    calendly_url: siteConfig.integrations.calendlyUrl,
    ...eventDetails,
  });
};

export const trackLeadFormSubmit = (formData) => {
  trackEvent('lead_form_submit', {
    insurance_type: formData.insuranceType,
    contact_method: formData.contactMethod,
    urgency: formData.urgency,
  });
};
