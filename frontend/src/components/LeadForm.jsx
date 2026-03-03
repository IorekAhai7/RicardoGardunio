import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { sendLeadToWebhook } from '../utils/webhook';
import { trackLeadFormSubmit } from '../utils/analytics';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export const LeadForm = ({ onFormSuccess }) => {
  const { formFields } = siteConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    insuranceType: '',
    city: '',
    contactMethod: '',
    contactValue: '',
    urgency: '',
    message: '',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!formData.insuranceType || !formData.city || !formData.contactMethod || !formData.contactValue || !formData.urgency) {
      toast.error('Por favor completa todos los campos obligatorios');
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar al webhook
      const result = await sendLeadToWebhook(formData);

      if (result.success) {
        // Track en GA4
        trackLeadFormSubmit(formData);
        
        setIsSuccess(true);
        toast.success('¡Gracias! Ahora puedes agendar tu cita.');
        
        // Llamar al callback para mostrar Calendly
        if (onFormSuccess) {
          setTimeout(() => {
            onFormSuccess();
          }, 1500);
        }
      } else {
        throw new Error('Error al enviar la solicitud');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.');
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="pre-calificacion" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-green-900 mb-4">
              ¡Solicitud Enviada!
            </h3>
            <p className="text-green-700 text-lg mb-4">
              Gracias por tu interés. Ahora puedes agendar tu consulta gratuita.
            </p>
            <p className="text-green-600 text-sm">
              Desplázate hacia abajo para seleccionar tu fecha y hora preferida...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pre-calificacion" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--primary))] mb-4">
            Solicita tu Asesoría Gratuita
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Completa este formulario y agenda tu consulta sin compromiso
          </p>
          <div className="w-20 h-1 bg-[hsl(var(--accent))] mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl shadow-xl p-8 space-y-6">
          {/* Tipo de Seguro */}
          <div>
            <Label htmlFor="insuranceType" className="text-[hsl(var(--primary))] font-semibold">
              Tipo de Seguro / Servicio *
            </Label>
            <Select value={formData.insuranceType} onValueChange={(value) => handleChange('insuranceType', value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                {formFields.insuranceTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Ciudad */}
          <div>
            <Label htmlFor="city" className="text-[hsl(var(--primary))] font-semibold">
              Ciudad *
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="¿Desde dónde nos contactas?"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className="mt-2"
            />
          </div>

          {/* Método de Contacto */}
          <div>
            <Label htmlFor="contactMethod" className="text-[hsl(var(--primary))] font-semibold">
              Medio de Contacto Preferido *
            </Label>
            <Select value={formData.contactMethod} onValueChange={(value) => handleChange('contactMethod', value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Selecciona un medio" />
              </SelectTrigger>
              <SelectContent>
                {formFields.contactMethods.map((method) => (
                  <SelectItem key={method.value} value={method.value}>
                    {method.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Valor de Contacto */}
          <div>
            <Label htmlFor="contactValue" className="text-[hsl(var(--primary))] font-semibold">
              {formData.contactMethod === 'whatsapp' ? 'Número de WhatsApp' : 
               formData.contactMethod === 'email' ? 'Correo Electrónico' : 
               formData.contactMethod === 'phone' ? 'Número de Teléfono' : 'Dato de Contacto'} *
            </Label>
            <Input
              id="contactValue"
              type={formData.contactMethod === 'email' ? 'email' : 'text'}
              placeholder={
                formData.contactMethod === 'whatsapp' ? '+52 55 1234 5678' :
                formData.contactMethod === 'email' ? 'tu@email.com' :
                formData.contactMethod === 'phone' ? '+52 55 1234 5678' :
                'Ingresa tu información de contacto'
              }
              value={formData.contactValue}
              onChange={(e) => handleChange('contactValue', e.target.value)}
              className="mt-2"
            />
          </div>

          {/* Urgencia */}
          <div>
            <Label htmlFor="urgency" className="text-[hsl(var(--primary))] font-semibold">
              Urgencia *
            </Label>
            <Select value={formData.urgency} onValueChange={(value) => handleChange('urgency', value)}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="¿Qué tan pronto necesitas asesoría?" />
              </SelectTrigger>
              <SelectContent>
                {formFields.urgencyLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Mensaje Opcional */}
          <div>
            <Label htmlFor="message" className="text-[hsl(var(--primary))] font-semibold">
              Mensaje Adicional (Opcional)
            </Label>
            <Textarea
              id="message"
              placeholder="Cuéntame un poco más sobre tu situación o necesidades específicas"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="mt-2 min-h-[120px]"
            />
          </div>

          {/* Botón Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--navy-medium))] text-white py-6 text-lg font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar y Agendar Cita'
            )}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            * Campos obligatorios
          </p>
        </form>
      </div>
    </section>
  );
};
