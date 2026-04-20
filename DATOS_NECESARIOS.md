# 📋 Lista Completa de Datos Necesarios para Poner la Web en Producción

## ✅ DATOS OBLIGATORIOS

### 1. **Calendly**
**¿Qué necesitas?**
- Tu URL personal de Calendly

**Formato esperado:**
```
https://calendly.com/ricardo-garduno
```

**Dónde obtenerlo:**
1. Ve a https://calendly.com
2. Inicia sesión (o crea cuenta si no tienes)
3. Copia tu URL de perfil

**Dónde configurarlo:**
- Archivo: `/app/frontend/src/config/siteConfig.js`
- Línea: `calendlyUrl: "https://calendly.com/tu-usuario"`
- Reemplaza con tu URL real

---

### 2. **Google Analytics 4**
**¿Qué necesitas?**
- ID de Medición de GA4

**Formato esperado:**
```
G-XXXXXXXXXX
```

**Dónde obtenerlo:**
1. Ve a https://analytics.google.com
2. Crea una propiedad GA4 (si no tienes una)
3. Ve a: Admin → Propiedad → Flujos de datos
4. Selecciona tu flujo web
5. Copia el "ID de medición" (empieza con G-)

**Dónde configurarlo:**
- Archivo: `/app/frontend/src/config/siteConfig.js`
- Línea: `ga4Id: "G-XXXXXXXXXX"`
- Reemplaza con tu ID real

**Eventos que se trackearán automáticamente:**
- ✅ `whatsapp_click` - Click en botón WhatsApp
- ✅ `calendly_open` - Se abre Calendly
- ✅ `calendly_scheduled` - Se agenda una cita
- ✅ `lead_form_submit` - Se envía el formulario

---

### 3. **Webhook para Captura de Leads**
**¿Qué necesitas?**
- URL del endpoint donde quieres recibir los leads
- Secret/clave para autenticar las peticiones

**Formato esperado:**
```
URL: https://tu-sistema-crm.com/api/leads
Secret: tu-clave-secreta-aqui-123
```

**Opciones de Webhooks:**

#### Opción A: Make.com (Integromat) - GRATIS
1. Ve a https://make.com
2. Crea una cuenta gratuita
3. Crea un nuevo escenario
4. Usa el módulo "Webhooks → Custom Webhook"
5. Copia la URL generada
6. Configura acciones (ej: enviar a Google Sheets, email, CRM)

#### Opción B: Zapier - GRATIS/PAGO
1. Ve a https://zapier.com
2. Crea un nuevo Zap
3. Trigger: "Webhooks by Zapier → Catch Hook"
4. Copia la URL generada
5. Configura acciones (ej: agregar a CRM, enviar email)

#### Opción C: Tu propio servidor
Si tienes un backend propio, crea un endpoint que reciba POST JSON

**Dónde configurarlo:**
- Archivo: `/app/frontend/.env`
- Líneas:
```env
REACT_APP_WEBHOOK_URL=https://tu-webhook-url-aqui
REACT_APP_WEBHOOK_SECRET=tu-secret-key-aqui
```

**Estructura del JSON que recibirás:**
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

**Header de seguridad incluido:**
```
X-Webhook-Secret: tu-secret-key-aqui
```

---

## 🎨 DATOS OPCIONALES (Ya configurados pero puedes personalizar)

### 4. **Contenido Editable**
**Archivo:** `/app/frontend/src/config/siteConfig.js`

Puedes modificar sin tocar código:
- ✅ Textos de todas las secciones
- ✅ Servicios (títulos, descripciones, imágenes)
- ✅ Testimonios
- ✅ FAQs
- ✅ Beneficios
- ✅ Información de contacto
- ✅ URLs de imágenes

### 5. **Logo y Fotos**
**Ya configurado:**
- Logo: https://customer-assets.emergentagent.com/.../Logo%20Gardun%CC%83o.png
- Foto Ricardo: https://customer-assets.emergentagent.com/.../Ricardo%20Garduno%20-%20HeadshotPro.png

**Si quieres cambiarlas:**
- Sube tus nuevas imágenes a un hosting (Imgur, Cloudinary, etc.)
- Actualiza las URLs en `siteConfig.js`:
  - `branding.logoUrl`
  - `advisor.photoUrl`

### 6. **Colores de la Marca**
**Actualmente configurados:**
- Azul marino profundo: `#1A3A52`
- Dorado elegante: `#D4AF37`

**Para cambiar:**
- Archivo: `/app/frontend/src/index.css`
- Variables: `--navy-deep`, `--gold-elegant`, etc.

---

## 🚀 DATOS PARA PRODUCCIÓN (Después de configurar lo anterior)

### 7. **Dominio Personalizado**
Para tener tu propio dominio (ej: www.ricardogarduno.com)

**Opciones:**
1. Compra un dominio en: Namecheap, GoDaddy, Google Domains
2. Apunta el DNS a tu servidor de hosting
3. Configura SSL/HTTPS (Let's Encrypt gratuito)

### 8. **Hosting/Deployment**
**Opciones recomendadas:**

#### Opción A: Vercel (Recomendado - GRATIS)
- Ve a https://vercel.com
- Conecta tu repositorio Git
- Deploy automático
- SSL incluido
- CDN global

#### Opción B: Netlify (GRATIS)
- Similar a Vercel
- SSL incluido
- Deploy automático

#### Opción C: Tu propio servidor
- VPS (DigitalOcean, AWS, etc.)
- Configurar Nginx/Apache
- Instalar SSL

---

## 📊 RESUMEN DE ARCHIVOS A EDITAR

### Para poner en producción:

1. **`/app/frontend/src/config/siteConfig.js`**
   ```javascript
   integrations: {
     calendlyUrl: "https://calendly.com/PONER-TU-USUARIO-AQUI",
     ga4Id: "G-PONER-TU-ID-AQUI",
   }
   ```

2. **`/app/frontend/.env`**
   ```env
   REACT_APP_WEBHOOK_URL=https://PONER-TU-WEBHOOK-AQUI
   REACT_APP_WEBHOOK_SECRET=PONER-TU-SECRET-AQUI
   ```

---

## ✅ CHECKLIST DE CONFIGURACIÓN

- [ ] **Calendly:** URL configurada en `siteConfig.js`
- [ ] **GA4:** ID configurado en `siteConfig.js`
- [ ] **Webhook:** URL y secret configurados en `.env`
- [ ] **Contenido:** Revisado y personalizado en `siteConfig.js`
- [ ] **Imágenes:** Logo y fotos correctas
- [ ] **Colores:** Paleta de marca correcta
- [ ] **Dominio:** Comprado y configurado (opcional)
- [ ] **Hosting:** Deploy configurado (Vercel/Netlify)
- [ ] **SSL:** HTTPS habilitado
- [ ] **Testing:** Probado flujo completo de conversión

---

## 🎯 PRUEBAS ANTES DE LANZAR

1. **Probar formulario:**
   - Llenar y enviar
   - Verificar que llegue al webhook
   - Verificar que se muestre Calendly

2. **Probar Calendly:**
   - Verificar que cargue correctamente
   - Intentar agendar una cita de prueba

3. **Probar GA4:**
   - Abrir Google Analytics en tiempo real
   - Hacer acciones en el sitio
   - Verificar que aparezcan los eventos

4. **Probar WhatsApp:**
   - Click en botón flotante
   - Verificar que abra WhatsApp con mensaje correcto

5. **Probar en móvil:**
   - Diseño responsive
   - Menú hamburguesa
   - Todos los botones funcionan

---

## 📞 SOPORTE

Si tienes dudas durante la configuración:
- 📧 Contacta a soporte de Emergent
- 📚 Revisa `/app/LANDING_README.md` para más detalles
- 📋 Revisa `/app/memory/PRD.md` para documentación técnica

---

**¡Tu landing page está casi lista! Solo faltan estos 3 datos obligatorios para estar 100% funcional!** 🚀
