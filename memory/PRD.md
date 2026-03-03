# PRD - Landing Page Ricardo Garduño

## Información del Proyecto

**Fecha de Inicio:** 1 de Noviembre, 2025  
**Cliente:** Ricardo Garduño - Asesor Patrimonial  
**Tipo de Proyecto:** Landing Page Single-Page Premium para Conversión  
**Objetivo:** Generar leads calificados para servicios de seguros y asesoría patrimonial

---

## Problema Original

Construir una landing single-page profesional, premium y enfocada 100% a conversión para un asesor patrimonial en México, con las siguientes capacidades técnicas:

1. ✅ Calendly inline embebido (sin redirección)
2. ✅ Tracking GA4 personalizado
3. ✅ Fallback de conversión (WhatsApp + Calendly directo)
4. ✅ Formulario de pre-calificación con validaciones
5. ✅ Webhook POST JSON con estructura definida
6. ✅ Captura automática de UTMs
7. ✅ Header de seguridad para webhook (X-Webhook-Secret)
8. ✅ Diseño editable desde configuración central
9. ✅ Single-page real optimizada para conversión
10. ✅ Sin limitaciones técnicas

---

## Decisiones de Diseño del Usuario

### Identidad Visual
- **Paleta de Colores:** Azul marino profundo (#1A3A52) + Dorado elegante (#D4AF37)
- **Estilo:** Premium, patrimonial, minimalista, sofisticado
- **Tipografía:** 
  - Títulos: Playfair Display (serif elegante)
  - Cuerpo: Inter (sans-serif moderna)

### Contenido
- **Testimoniales:** Solo texto, sin fotos (enfoque en contenido)
- **FAQs:** Investigadas y creadas basadas en preguntas comunes sobre seguros
- **Imágenes:** Logo y foto de Ricardo proporcionadas; servicios con imágenes profesionales de Unsplash

### Integraciones
- **Calendly:** URL placeholder configurable
- **GA4:** ID placeholder configurable
- **Webhook:** URL y secret configurables vía .env

---

## Arquitectura Implementada

### Stack Tecnológico
- **Frontend:** React 19 + Tailwind CSS + shadcn/ui
- **Tipado:** JavaScript (JSX)
- **Gestión de Estado:** React Hooks (useState, useEffect)
- **Estilos:** Tailwind CSS con variables CSS personalizadas
- **Componentes UI:** shadcn/ui (Accordion, Select, Input, Button, etc.)
- **Analytics:** Google Analytics 4
- **Notificaciones:** Sonner (toast notifications)

### Estructura de Archivos

```
/app/frontend/
├── src/
│   ├── config/
│   │   └── siteConfig.js          # Configuración central editable
│   ├── utils/
│   │   ├── analytics.js            # GA4 tracking
│   │   ├── utm.js                  # Captura de UTMs
│   │   └── webhook.js              # Envío de datos
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Benefits.jsx
│   │   ├── Services.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CalendlySection.jsx
│   │   ├── LeadForm.jsx
│   │   ├── FAQs.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── App.js
│   ├── App.css
│   └── index.css
└── .env
```

---

## Funcionalidades Implementadas

### ✅ Sección Hero
- Fondo azul marino profundo
- Título con tipografía Playfair Display
- Subtítulo en dorado elegante
- Botón "Conoce más" con scroll suave
- Patrón decorativo de fondo sutil

### ✅ Sección "Sobre Ricardo"
- Layout de 2 columnas (imagen + texto)
- Foto profesional con efecto decorativo dorado
- Storytelling completo según especificaciones
- Diseño elegante y sobrio

### ✅ Sección de Beneficios
- 4 tarjetas con íconos de Lucide React
- Diseño en grid responsive (4 columnas en desktop)
- Íconos con fondo dorado claro
- Hover effects sutiles

### ✅ Sección de Servicios
- 10 servicios con imágenes profesionales
- Grid responsive (3 columnas en desktop)
- Imágenes optimizadas con lazy loading
- Overlay con gradiente al hacer hover
- Descripciones claras y concisas

### ✅ Sección "¿Cómo funciona?"
- 3 pasos con números destacados
- Íconos representativos para cada paso
- Línea conectora decorativa
- Animación sutil en los números

### ✅ Testimoniales
- 5 testimonios reales (sin fotos, solo texto)
- Diseño elegante con comillas decorativas
- Grid responsive (3 columnas en desktop)
- Información de nombre y rol

### ✅ Calendly Inline
- Widget embebido directamente en la página
- Script de Calendly cargado dinámicamente
- Tracking de eventos (open, scheduled)
- Fallback de conversión:
  - Botón WhatsApp con mensaje pre-llenado
  - Link directo a Calendly en nueva ventana

### ✅ Formulario de Pre-Calificación
- Campos con validaciones:
  - Tipo de seguro (select)
  - Ciudad (input text)
  - Método de contacto (select: WhatsApp/Email/Phone)
  - Valor de contacto (input dinámico según método)
  - Urgencia (select)
  - Mensaje opcional (textarea)
- Estados visuales (loading, success, error)
- Toast notifications con Sonner
- Envío al webhook con estructura JSON definida
- Captura automática de UTMs

### ✅ FAQs con Acordeón
- 8 preguntas frecuentes investigadas
- Componente Accordion de shadcn/ui
- Animación suave de apertura/cierre
- Diseño elegante con bordes que cambian a dorado al abrir

### ✅ Footer
- 3 columnas (Logo/Info, Contacto, Enlaces)
- Logo con efecto de inversión de colores
- Links a secciones internas
- Copyright con año dinámico

### ✅ WhatsApp Flotante
- Botón fijo en esquina inferior derecha
- Animación bounce-slow
- Tooltip con mensaje al hacer hover
- Tracking GA4 al hacer clic
- Mensaje pre-llenado al abrir WhatsApp

### ✅ Google Analytics 4
- Inicialización automática
- Eventos personalizados:
  - `whatsapp_click`
  - `calendly_open`
  - `calendly_scheduled`
  - `lead_form_submit`
- Parámetros adicionales en cada evento

### ✅ Captura de UTMs
- Automática al cargar la página
- Almacenamiento en sessionStorage
- Envío en payload del formulario
- Incluye: source, medium, campaign, term, content

### ✅ Webhook Integration
- POST JSON con estructura definida
- Header de seguridad: `X-Webhook-Secret`
- Payload incluye:
  - Datos del lead
  - UTMs capturados
  - URL y referrer de la página
  - Timestamp en ISO-8601
- Manejo de errores con toasts

---

## Variables de Configuración

### En `siteConfig.js`:
- Información del asesor (nombre, título, foto)
- Textos de todas las secciones
- Servicios con imágenes y descripciones
- Testimonios
- FAQs
- URLs de integraciones (Calendly, GA4)
- Configuración de formulario

### En `.env`:
- `REACT_APP_BACKEND_URL` (URL del backend)
- `REACT_APP_WEBHOOK_URL` (URL del webhook)
- `REACT_APP_WEBHOOK_SECRET` (Clave secreta)

---

## Optimizaciones de Performance

- ✅ Lazy loading de imágenes
- ✅ Imágenes optimizadas de Unsplash
- ✅ Google Fonts preloaded
- ✅ Smooth scroll nativo del navegador
- ✅ CSS y JS minificados en build
- ✅ Hot reload habilitado en desarrollo

---

## Próximos Pasos Sugeridos

### P0 - Configuración Básica
- [ ] Configurar URL real de Calendly
- [ ] Configurar ID de Google Analytics 4
- [ ] Configurar URL y secret del webhook
- [ ] Probar flujo completo de conversión

### P1 - Optimización
- [ ] Configurar dominio personalizado
- [ ] Implementar SSL/HTTPS
- [ ] Configurar metas tags para SEO
- [ ] Agregar Open Graph tags para redes sociales
- [ ] Implementar Google Tag Manager (opcional)

### P2 - Mejoras Futuras
- [ ] A/B testing de variantes del hero
- [ ] Agregar chat en vivo (opcional)
- [ ] Implementar remarketing pixels
- [ ] Agregar más idiomas (si aplica)
- [ ] Dashboard de analytics interno

---

## Testing Realizado

✅ Verificación visual con screenshots:
- Hero section con diseño premium
- Sección "Sobre Ricardo" con foto y storytelling
- Beneficios en grid de 4 columnas
- Servicios con imágenes profesionales
- Diseño responsive
- Colores patrimoniales (azul marino + dorado)
- Tipografía elegante (Playfair Display + Inter)

✅ Verificación técnica:
- Compilación exitosa sin errores
- Hot reload funcionando
- Componentes cargando correctamente
- Header fijo funcionando
- WhatsApp flotante visible

---

## Estado Actual

**Status:** ✅ MVP Completado - Frontend Only  
**Fecha:** 1 de Noviembre, 2025  
**Pendiente:** Configuración de URLs reales de Calendly, GA4 y Webhook

---

## Notas Técnicas

### Limitaciones Conocidas
- Calendly muestra 404 con URL placeholder (esperado)
- GA4 muestra warnings sin ID configurado (esperado)
- Webhook está configurado con URL placeholder

### Recomendaciones
1. Probar la página en dispositivos reales (mobile, tablet)
2. Configurar las URLs reales antes de lanzar
3. Testear el formulario con webhook real
4. Verificar eventos de GA4 en Google Analytics
5. Optimizar imágenes adicionales si es necesario

---

**Desarrollado con dedicación y profesionalismo** ✨

---

## Actualización - 1 de Noviembre, 2025

### Cambios Implementados

**1. Navegación Mejorada en Header:**
- ✅ Agregado menú de navegación con enlaces a todas las secciones
- ✅ Links: Sobre Ricardo, Servicios, Testimonios, Consulta, FAQs
- ✅ Botón "Contactar" mantiene su prominencia a la derecha
- ✅ Menú responsive con hamburguesa en móvil
- ✅ Smooth scroll con offset para el header fijo

**2. Flujo de Conversión Optimizado:**
- ✅ **Nuevo flujo obligatorio:** Formulario → Calendly
- ✅ Botón del Hero ahora dice "Solicitar Asesoría Gratuita" y lleva al formulario
- ✅ Calendly se oculta inicialmente (isVisible={false})
- ✅ Al enviar el formulario exitosamente:
  - Se dispara el webhook
  - Se dispara evento GA4 lead_form_submit
  - Se muestra mensaje de éxito
  - Se revela Calendly dinámicamente
  - Se dispara evento calendly_open automáticamente
  - Scroll automático a la sección de Calendly
- ✅ Si el formulario falla, Calendly permanece oculto
- ✅ WhatsApp flotante permanece visible en todo momento como fallback

**3. Corrección de Nombres en Testimonios:**
- ✅ Karla Rodríguez → **Laura Lavarrios**
- ✅ Blanca Estela Ortega → **Daniela Tapia**

**4. Actualización de FAQs:**
- ✅ Pregunta modificada: "¿Trabajas con alguna aseguradora específica?"
- ✅ Respuesta actualizada: Enfoque en GNP Seguros (una sola aseguradora)
- ✅ Eliminada referencia a "múltiples aseguradoras"

**5. Títulos y Textos Actualizados:**
- ✅ Formulario: "Solicita tu Asesoría Gratuita"
- ✅ Subtítulo formulario: "Completa este formulario y agenda tu consulta sin compromiso"
- ✅ Botón formulario: "Enviar y Agendar Cita"
- ✅ Calendly: "Selecciona la fecha y hora que mejor te convenga"

**6. IDs de Sección para Navegación:**
- ✅ Agregado scroll-mt-20 para offset del header fijo
- ✅ ID "testimonios" en sección de testimonios
- ✅ ID "faqs" en sección de FAQs
- ✅ ID "pre-calificacion" en formulario
- ✅ ID "agendar-cita" en Calendly (condicional)

### Arquitectura del Nuevo Flujo

```
Usuario → Hero (CTA: "Solicitar Asesoría Gratuita")
         ↓
    Formulario de Pre-Calificación
         ↓
    Validación y Envío
         ↓
    ✅ Success → Webhook POST + GA4 Event
         ↓
    Revelación de Calendly (dinámico)
         ↓
    Auto-scroll a Calendly
         ↓
    Usuario agenda cita → GA4 Event calendly_scheduled
         
    ❌ Fallback en cualquier momento: WhatsApp flotante
```

### Estado del Proyecto

**✅ Completado:**
- Menú de navegación funcional
- Flujo de conversión optimizado (formulario primero)
- Nombres corregidos en testimonios
- FAQs actualizadas para GNP
- Calendly de revelación condicional
- Tracking completo de eventos

**Pendiente de Configuración:**
- URL real de Calendly
- ID de Google Analytics 4
- URL y secret del webhook

---

**Última actualización:** 1 de Noviembre, 2025
