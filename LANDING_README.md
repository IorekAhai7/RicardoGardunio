# Landing Page - Ricardo Garduño | Asesor Patrimonial

Landing page profesional, premium y optimizada para conversión, diseñada para un asesor patrimonial en México.

## 🎯 Características Principales

- ✅ **Single-page** real sin rutas adicionales
- ✅ **Calendly inline** embebido con tracking completo
- ✅ **Google Analytics 4** con eventos personalizados
- ✅ **Formulario de pre-calificación** con webhook POST JSON
- ✅ **Captura automática de UTMs** para tracking de campañas
- ✅ **WhatsApp flotante** con eventos GA4
- ✅ **Diseño premium** patrimonial (azul marino + dorado elegante)
- ✅ **Fallback de conversión** (WhatsApp + Calendly directo)
- ✅ **FAQs con acordeón** elegante
- ✅ **Testimonios reales** sin fotos (enfoque en contenido)
- ✅ **Optimización de performance** (lazy loading, imágenes optimizadas)

---

## 📁 Estructura del Proyecto

```
/app/frontend/
├── src/
│   ├── config/
│   │   └── siteConfig.js          # ⚙️ Archivo de configuración central
│   ├── utils/
│   │   ├── analytics.js            # Google Analytics 4
│   │   ├── utm.js                  # Captura de parámetros UTM
│   │   └── webhook.js              # Envío de datos al webhook
│   ├── components/
│   │   ├── Header.jsx              # Header fijo con logo y contacto
│   │   ├── Hero.jsx                # Sección hero principal
│   │   ├── About.jsx               # Sobre Ricardo (storytelling)
│   │   ├── Benefits.jsx            # Beneficios estratégicos
│   │   ├── Services.jsx            # 10 servicios con imágenes
│   │   ├── HowItWorks.jsx          # Proceso en 3 pasos
│   │   ├── Testimonials.jsx        # Testimonios de clientes
│   │   ├── CalendlySection.jsx     # Calendly inline + fallback
│   │   ├── LeadForm.jsx            # Formulario de pre-calificación
│   │   ├── FAQs.jsx                # Preguntas frecuentes
│   │   ├── Footer.jsx              # Footer con información
│   │   └── WhatsAppFloat.jsx       # Botón WhatsApp flotante
│   ├── App.js                      # Componente principal
│   └── index.css                   # Estilos globales y colores
└── .env                            # Variables de entorno
```

---

## ⚙️ Configuración

### 1. Editar Contenido de la Página

Todos los contenidos se editan desde un **archivo central**:

```
/app/frontend/src/config/siteConfig.js
```

En este archivo puedes modificar:

- 🎨 **Colores y branding** (logo, paleta de colores)
- 📝 **Textos y contenidos** (hero, sobre Ricardo, beneficios, etc.)
- 🛡️ **Servicios** (títulos, descripciones, imágenes)
- ⭐ **Testimonios**
- ❓ **FAQs**
- 📞 **Información de contacto**
- 🔗 **URLs de integración** (Calendly, GA4, Webhook)

**No necesitas modificar código, solo este archivo de configuración.**

---

### 2. Configurar Integraciones

Edita las siguientes variables en `/app/frontend/src/config/siteConfig.js`:

```javascript
integrations: {
  calendlyUrl: "https://calendly.com/tu-usuario", // Tu URL de Calendly
  ga4Id: "G-XXXXXXXXXX",                          // Tu ID de Google Analytics 4
  webhookUrl: process.env.REACT_APP_WEBHOOK_URL,  // URL de tu webhook
  webhookSecret: process.env.REACT_APP_WEBHOOK_SECRET, // Secret del webhook
}
```

**Para el webhook**, también edita `/app/frontend/.env`:

```env
REACT_APP_WEBHOOK_URL=https://tu-webhook.com/endpoint
REACT_APP_WEBHOOK_SECRET=tu-clave-secreta-aqui
```

---

### 3. Configurar Google Analytics 4

1. Obtén tu ID de medición de GA4 (formato: `G-XXXXXXXXXX`)
2. Edita `siteConfig.js` y reemplaza:

```javascript
ga4Id: "G-TU-ID-AQUI"
```

Los eventos que se trackean automáticamente:
- ✅ `whatsapp_click` - Cuando hacen clic en WhatsApp
- ✅ `calendly_open` - Cuando se carga Calendly
- ✅ `calendly_scheduled` - Cuando agendan una cita
- ✅ `lead_form_submit` - Cuando envían el formulario

---

### 4. Configurar Calendly

1. Obtén tu URL de Calendly (ej: `https://calendly.com/ricardo-garduno`)
2. Edita `siteConfig.js`:

```javascript
calendlyUrl: "https://calendly.com/tu-usuario"
```

El widget de Calendly se embebe inline en la página. Si no carga, hay fallbacks de conversión:
- Botón de WhatsApp
- Link directo a Calendly en nueva ventana

---

### 5. Configurar Webhook

El formulario envía un **POST JSON** con la siguiente estructura:

```json
{
  "source": "insurance-landing",
  "timestamp": "2025-11-01T10:30:00.000Z",
  "lead": {
    "insuranceType": "Gastos Médicos Mayores",
    "city": "Ciudad de México",
    "contactMethod": "whatsapp",
    "contactValue": "+52 55 1234 5678",
    "urgency": "Lo antes posible",
    "message": "Mensaje opcional del cliente"
  },
  "utm": {
    "utm_source": "google",
    "utm_medium": "cpc",
    "utm_campaign": "seguros-cdmx",
    "utm_term": "",
    "utm_content": ""
  },
  "page": {
    "url": "https://tu-dominio.com",
    "referrer": "https://google.com"
  }
}
```

El webhook incluye un header de seguridad:
```
X-Webhook-Secret: tu-clave-secreta
```

---

## 🎨 Personalización de Diseño

### Colores

Los colores se definen en `/app/frontend/src/index.css`:

- **Azul marino profundo**: `--navy-deep: 210 60% 15%`
- **Dorado elegante**: `--gold-elegant: 43 74% 58%`

Para cambiar la paleta completa, edita las variables CSS en `:root`.

### Tipografía

- **Headings (h1-h6)**: `Playfair Display` (serif elegante)
- **Body text**: `Inter` (sans-serif moderna)

Se cargan automáticamente desde Google Fonts.

---

## 🚀 Despliegue

### Desarrollo Local

```bash
cd /app/frontend
yarn start
```

La página se abrirá en `http://localhost:3000`

### Producción

```bash
cd /app/frontend
yarn build
```

Esto genera una carpeta `/build` con archivos estáticos optimizados listos para desplegar.

---

## 📊 Tracking y Analytics

### Eventos de Google Analytics 4

Todos los eventos se trackean automáticamente:

| Evento | Cuándo se dispara |
|--------|-------------------|
| `whatsapp_click` | Click en botón WhatsApp flotante |
| `calendly_open` | Se carga el widget de Calendly |
| `calendly_scheduled` | Cliente agenda una cita en Calendly |
| `lead_form_submit` | Cliente envía el formulario |

### Captura de UTMs

Los parámetros UTM se capturan automáticamente y se envían en:
- El payload del formulario al webhook
- Puedes accederlos con `getUTMParams()` desde `/app/frontend/src/utils/utm.js`

---

## 🛡️ Seguridad

- ✅ Header de seguridad `X-Webhook-Secret` en todas las peticiones al webhook
- ✅ Variables sensibles en `.env` (no en código)
- ✅ Validaciones de formulario en frontend
- ✅ HTTPS obligatorio en producción

---

## 📱 Responsive Design

La página está optimizada para:
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1440px+)

---

## 🎯 Optimizaciones de Performance

- ✅ **Lazy loading** de imágenes
- ✅ **Imágenes optimizadas** de Unsplash
- ✅ **CSS y JS minificados** en producción
- ✅ **Fonts preloaded** para mejorar LCP
- ✅ **Smooth scroll** nativo del navegador

---

## 📞 Soporte

Si tienes dudas o necesitas ayuda:

- 📧 Email: ricardo.garduno.gnp@gmail.com
- 📱 WhatsApp: +52 1 55 3824 0942

---

## 📝 Licencia

© 2025 Ricardo Garduño. Todos los derechos reservados.

---

**Desarrollado con dedicación y profesionalismo** ✨
