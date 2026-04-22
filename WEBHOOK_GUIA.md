# 🔗 Guía de Configuración del Webhook

## ¿Qué es un Webhook?

Un **webhook** es una URL que recibe automáticamente los datos cuando alguien completa el formulario de tu landing page.

**En tu caso específico:**
Cuando un cliente potencial llena el formulario de pre-calificación en tu web, el webhook recibe instantáneamente:
- Nombre y datos de contacto
- Tipo de seguro que le interesa
- Ciudad
- Urgencia
- Parámetros UTM (de dónde vino: Google, Facebook, etc.)

---

## 🎯 ¿Para qué sirve?

El webhook te permite:
1. **Capturar leads automáticamente** sin perderlos
2. **Integrar con tu CRM** (Salesforce, HubSpot, etc.)
3. **Recibir notificaciones** por email o WhatsApp
4. **Guardar en Google Sheets** para seguimiento
5. **Enviar emails automáticos** de seguimiento

---

## 🚀 Opciones de Configuración (de más fácil a más complejo)

### Opción 1: Make.com (RECOMENDADO - GRATIS) ⭐

**Ventajas:**
- ✅ Totalmente gratis para comenzar
- ✅ Interfaz visual (no requiere programación)
- ✅ Muchas integraciones (Google Sheets, Email, CRM, etc.)
- ✅ Configuración en 5 minutos

**Cómo configurar:**

#### Paso 1: Crear cuenta y escenario
1. Ve a https://make.com
2. Crea una cuenta gratuita
3. Click en "Create a new scenario"

#### Paso 2: Configurar Webhook
1. Click en el botón "+" para agregar un módulo
2. Busca "Webhooks"
3. Selecciona "Webhooks → Custom webhook"
4. Dale un nombre: "Leads Landing Ricardo"
5. Click en "Add"
6. **¡COPIA LA URL QUE TE DA!** (se ve así: `https://hook.us1.make.com/xxxxxxxxxxxxx`)

#### Paso 3: Agregar acciones
Después del webhook, puedes agregar:

**Opción A: Guardar en Google Sheets**
1. Agregar módulo → Google Sheets → Add a Row
2. Conectar tu cuenta de Google
3. Seleccionar tu hoja de cálculo
4. Mapear los campos:
   - Nombre → `{{lead.contactValue}}`
   - Tipo de Seguro → `{{lead.insuranceType}}`
   - Ciudad → `{{lead.city}}`
   - Urgencia → `{{lead.urgency}}`
   - Mensaje → `{{lead.message}}`
   - Fecha → `{{timestamp}}`
   - UTM Source → `{{utm.utm_source}}`
   - UTM Campaign → `{{utm.utm_campaign}}`

**Opción B: Enviar email a ti**
1. Agregar módulo → Email → Send an Email
2. Para: ricardo.garduno.gnp@gmail.com
3. Asunto: "Nuevo Lead: {{lead.insuranceType}}"
4. Contenido:
   ```
   Nuevo lead desde la landing:
   
   Tipo de Seguro: {{lead.insuranceType}}
   Ciudad: {{lead.city}}
   Contacto: {{lead.contactValue}} ({{lead.contactMethod}})
   Urgencia: {{lead.urgency}}
   Mensaje: {{lead.message}}
   
   UTM Source: {{utm.utm_source}}
   UTM Campaign: {{utm.utm_campaign}}
   ```

**Opción C: Enviar mensaje de WhatsApp**
1. Agregar módulo → Twilio (o servicio de WhatsApp)
2. Enviar notificación a tu WhatsApp con los datos

#### Paso 4: Probar el webhook
1. Click en "Run once" en Make.com
2. Ve a tu landing y envía el formulario de prueba
3. Los datos deberían aparecer en Make.com
4. Si funciona, activa el escenario (toggle en ON)

#### Paso 5: Configurar en tu web
Toma la URL del webhook que te dio Make.com y configúrala:

```bash
# Edita el archivo /app/frontend/.env
REACT_APP_WEBHOOK_URL=https://hook.us1.make.com/xxxxxxxxxxxxx
REACT_APP_WEBHOOK_SECRET=mi-clave-secreta-123
```

**El secret puede ser cualquier texto que tú elijas** (ej: "Ricardo2025Seguros")

---

### Opción 2: Zapier (GRATIS con límites)

Similar a Make.com pero con menos operaciones gratis.

**Cómo configurar:**
1. Ve a https://zapier.com
2. Create Zap → Trigger: "Webhooks by Zapier"
3. Elige "Catch Hook"
4. Copia la URL del webhook
5. Agrega acciones (Google Sheets, Email, etc.)
6. Similar proceso que Make.com

---

### Opción 3: Google Apps Script (GRATIS, requiere algo de código)

Si quieres enviar directamente a Google Sheets sin intermediarios:

**Cómo configurar:**
1. Ve a https://sheets.google.com
2. Crea una nueva hoja: "Leads Landing Ricardo"
3. Herramientas → Editor de secuencias de comandos
4. Pega este código:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(data.timestamp),
    data.lead.insuranceType,
    data.lead.city,
    data.lead.contactMethod,
    data.lead.contactValue,
    data.lead.urgency,
    data.lead.message,
    data.utm.utm_source,
    data.utm.utm_campaign,
    data.page.url
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Implementar → Nueva implementación → Aplicación web
6. Ejecutar como: "Yo"
7. Acceso: "Cualquier persona"
8. Copia la URL que te da
9. Usa esa URL en tu `.env`

---

### Opción 4: Tu Propio Servidor (Avanzado)

Si tienes un backend propio:
- Crea un endpoint POST que reciba JSON
- Procesa los datos como necesites
- Responde con `{success: true}`

---

## 📊 Estructura de los Datos que Recibirás

Cuando alguien complete el formulario, el webhook recibirá este JSON:

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
    "message": "Necesito información sobre seguros familiares"
  },
  "utm": {
    "utm_source": "google",
    "utm_medium": "cpc",
    "utm_campaign": "seguros-cdmx",
    "utm_term": "seguro gastos medicos",
    "utm_content": "anuncio-1"
  },
  "page": {
    "url": "https://asesoratecongarduno.com.mx/",
    "referrer": "https://google.com"
  }
}
```

También recibirá un header de seguridad:
```
X-Webhook-Secret: tu-clave-secreta
```

---

## ✅ Recomendación Final

**Para ti, recomiendo Make.com porque:**
1. ✅ Es gratis
2. ✅ No requiere programación
3. ✅ Puedes enviar los leads a Google Sheets + Email automáticamente
4. ✅ Configuración en 5 minutos
5. ✅ Puedes agregar más integraciones después (CRM, WhatsApp, etc.)

---

## 🎯 Pasos Concretos para Ti

1. **Ahora mismo:**
   - Ve a https://make.com
   - Crea cuenta gratis
   - Crea escenario con Webhook
   - Agrega Google Sheets como acción
   - Copia la URL del webhook

2. **Después:**
   - Edita `/app/frontend/.env`
   - Pega la URL del webhook
   - Define un secret (puede ser cualquier texto)
   - Reinicia el frontend: `sudo supervisorctl restart frontend`

3. **Probar:**
   - Envía el formulario de prueba
   - Verifica que los datos lleguen a Make.com
   - Verifica que se guarden en Google Sheets

---

## 📞 ¿Necesitas Ayuda?

Si tienes dudas al configurar Make.com:
1. Comparte la pantalla que ves
2. Te puedo guiar paso a paso
3. O podemos usar otra opción que prefieras

**¿Quieres que te ayude a configurar Make.com ahora o prefieres otra opción?**
