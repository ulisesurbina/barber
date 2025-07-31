import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    preferredContact: '',
    message: '',
    language: 'spanish'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'general', label: 'Consulta General' },
    { value: 'booking', label: 'Reserva de Cita' },
    { value: 'group', label: 'Evento Grupal' },
    { value: 'consultation', label: 'Consulta de Estilo' },
    { value: 'complaint', label: 'Queja o Sugerencia' },
    { value: 'partnership', label: 'Colaboración Empresarial' }
  ];

  const contactPreferences = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Teléfono' },
    { value: 'whatsapp', label: 'WhatsApp' }
  ];

  const languageOptions = [
    { value: 'spanish', label: 'Español' },
    { value: 'english', label: 'English' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        preferredContact: '',
        message: '',
        language: 'spanish'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Envíanos tu Consulta
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas para resolver todas tus dudas.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 card-elevated">
          {submitStatus === 'success' && (
            <div className="mb-8 bg-success/10 border border-success/20 rounded-xl p-6 text-center">
              <Icon name="CheckCircle" size={48} color="var(--color-success)" className="mx-auto mb-4" />
              <h3 className="font-headline text-lg font-bold text-success mb-2">
                ¡Mensaje Enviado Exitosamente!
              </h3>
              <p className="font-body text-muted-foreground">
                Gracias por contactarnos. Te responderemos en las próximas 24 horas.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center">
              <Icon name="XCircle" size={48} color="var(--color-destructive)" className="mx-auto mb-4" />
              <h3 className="font-headline text-lg font-bold text-destructive mb-2">
                Error al Enviar
              </h3>
              <p className="font-body text-muted-foreground">
                Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Nombre Completo"
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                value={formData?.name}
                onChange={handleInputChange}
                required
              />
              
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData?.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Teléfono"
                type="tel"
                name="phone"
                placeholder="+34 612 345 678"
                value={formData?.phone}
                onChange={handleInputChange}
              />
              
              <Select
                label="Tipo de Consulta"
                options={inquiryTypes}
                value={formData?.inquiryType}
                onChange={(value) => handleSelectChange('inquiryType', value)}
                placeholder="Selecciona el tipo"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Método de Contacto Preferido"
                options={contactPreferences}
                value={formData?.preferredContact}
                onChange={(value) => handleSelectChange('preferredContact', value)}
                placeholder="¿Cómo prefieres que te contactemos?"
              />
              
              <Select
                label="Idioma de Comunicación"
                options={languageOptions}
                value={formData?.language}
                onChange={(value) => handleSelectChange('language', value)}
              />
            </div>

            <div>
              <label className="block font-body font-medium text-foreground mb-2">
                Mensaje Detallado
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Cuéntanos en detalle tu consulta, preferencias de horario, o cualquier información adicional que consideres importante..."
                value={formData?.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-200 resize-none font-body"
                required
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
                <div className="font-body text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong>Tiempo de respuesta:</strong> Email y formulario web en 24h máximo. WhatsApp y teléfono durante horario comercial.
                  </p>
                  <p>
                    <strong>Privacidad:</strong> Tus datos están protegidos y solo se utilizan para responder tu consulta.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                variant="default"
                loading={isSubmitting}
                disabled={!formData?.name || !formData?.email || !formData?.message}
                className="bg-accent text-accent-foreground hover:bg-accent/90 flex-1"
              >
                <Icon name="Send" size={18} className="mr-2" />
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  inquiryType: '',
                  preferredContact: '',
                  message: '',
                  language: 'spanish'
                })}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Icon name="RotateCcw" size={18} className="mr-2" />
                Limpiar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;