// ============================================
// UTILIDADES PARA ENVÍO DE WEBHOOK
// ============================================

import { siteConfig } from '../config/siteConfig';
import { getUTMParams } from './utm';

// Enviar datos del formulario al webhook
export const sendLeadToWebhook = async (formData) => {
  const { webhookUrl, webhookSecret } = siteConfig.integrations;

  // Construir payload según estructura definida
  const payload = {
    source: 'insurance-landing',
    timestamp: new Date().toISOString(),
    lead: {
      insuranceType: formData.insuranceType,
      city: formData.city,
      contactMethod: formData.contactMethod,
      contactValue: formData.contactValue,
      urgency: formData.urgency,
      message: formData.message || '',
    },
    utm: getUTMParams(),
    page: {
      url: window.location.href,
      referrer: document.referrer || '',
    },
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Secret': webhookSecret,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status}`);
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending webhook:', error);
    return { success: false, error: error.message };
  }
};
