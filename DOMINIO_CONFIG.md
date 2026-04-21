# Configuración de Dominio

## Dominio Oficial
**URL:** https://asesoratecongarduno.com.mx/

## Configuración Aplicada

### 1. Meta Tags SEO
- ✅ Título optimizado para SEO
- ✅ Description con keywords relevantes
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ URL canónica configurada

### 2. Google Analytics 4
- ✅ ID: G-QRM95Q66XK
- ✅ Configurado en `/app/frontend/src/config/siteConfig.js`
- ✅ Eventos personalizados activos

### 3. Próximos Pasos para Producción

#### A. Configuración de DNS
Cuando estés listo para apuntar tu dominio:

1. **Registrar/Comprar el dominio** (si aún no lo tienes)
   - Proveedor: GoDaddy, Namecheap, Google Domains, etc.

2. **Configurar DNS** según tu hosting:

   **Si usas Vercel (Recomendado):**
   - Ve a tu proyecto en Vercel
   - Settings → Domains
   - Agrega: `asesoratecongarduno.com.mx`
   - Vercel te dará registros DNS para configurar:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - Agrega estos registros en tu proveedor de dominio

   **Si usas Netlify:**
   - Ve a Site Settings → Domain management
   - Add custom domain
   - Sigue las instrucciones de DNS

   **Si usas tu propio servidor:**
   - Apunta los registros A a la IP de tu servidor
   - Configura SSL con Let's Encrypt

3. **Verificar SSL/HTTPS**
   - Vercel y Netlify lo hacen automáticamente
   - Si es servidor propio, usa Certbot (Let's Encrypt)

4. **Verificar que funcione:**
   ```bash
   # Probar DNS
   nslookup asesoratecongarduno.com.mx
   
   # Probar HTTPS
   curl -I https://asesoratecongarduno.com.mx/
   ```

#### B. Después del Deploy

1. **Verificar Google Analytics:**
   - Ve a https://analytics.google.com
   - Tiempo real → Abre tu sitio
   - Verifica que aparezcan visitas

2. **Verificar Eventos GA4:**
   - Click en WhatsApp → evento `whatsapp_click`
   - Enviar formulario → evento `lead_form_submit`
   - Abrir Calendly → evento `calendly_open`

3. **Probar Flujo Completo:**
   - Llenar formulario
   - Verificar webhook recibe datos
   - Verificar Calendly se muestra
   - Intentar agendar cita

#### C. Optimizaciones Post-Deploy

- [ ] Configurar Google Search Console
- [ ] Verificar sitemap.xml
- [ ] Probar velocidad (PageSpeed Insights)
- [ ] Verificar responsive en móviles reales
- [ ] Configurar monitoreo (UptimeRobot, etc.)

---

## URLs Configuradas en el Código

### Producción
- **Dominio Principal:** https://asesoratecongarduno.com.mx/
- **Canonical URL:** https://asesoratecongarduno.com.mx/

### Meta Tags
Ubicación: `/app/frontend/public/index.html`
- Open Graph URL
- Twitter URL
- Canonical Link

### Configuración de Site
Ubicación: `/app/frontend/src/config/siteConfig.js`
- Google Analytics: G-QRM95Q66XK
- Calendly: [Pendiente configurar]
- Webhook: [Pendiente configurar]

---

## Checklist de Configuración

- [x] Dominio definido: asesoratecongarduno.com.mx
- [x] Meta tags SEO actualizados
- [x] Google Analytics configurado (G-QRM95Q66XK)
- [ ] Dominio apuntado en DNS
- [ ] SSL/HTTPS configurado
- [ ] Deploy en producción
- [ ] URL de Calendly configurada
- [ ] Webhook configurado
- [ ] Google Search Console configurado

---

**Estado Actual:** Código listo para producción. Pendiente configuración de DNS y deploy.
