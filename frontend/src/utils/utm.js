// ============================================
// CAPTURA AUTOMÁTICA DE PARÁMETROS UTM
// ============================================

// Capturar UTMs de la URL y guardarlos en sessionStorage
export const captureUTMParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  const utmParams = {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_content: urlParams.get('utm_content') || '',
  };

  // Guardar en sessionStorage si hay al menos un parámetro UTM
  if (Object.values(utmParams).some(value => value !== '')) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }

  return utmParams;
};

// Obtener UTMs guardados o capturar nuevos
export const getUTMParams = () => {
  const stored = sessionStorage.getItem('utm_params');
  if (stored) {
    return JSON.parse(stored);
  }
  return captureUTMParams();
};

// Limpiar UTMs
export const clearUTMParams = () => {
  sessionStorage.removeItem('utm_params');
};
