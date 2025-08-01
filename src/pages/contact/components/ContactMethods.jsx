import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Llamada Directa",
      description: "Habla directamente con nuestro equipo para consultas inmediatas",
      icon: "Phone",
      action: "Llamar Ahora",
      contact: "+34 912 345 678",
      available: "Lun-Sáb 9:00-20:00",
      color: "bg-green-500",
      href: "tel:+34912345678"
    },
    {
      id: 2,
      title: "Email Profesional",
      description: "Envíanos tus consultas detalladas y te responderemos en 24h",
      icon: "Mail",
      action: "Enviar Email",
      contact: "info@thegoodstyle.com",
      available: "Respuesta en 24h",
      color: "bg-blue-500",
      href: "mailto:info@thegoodstyle.com"
    },
    {
      id: 3,
      title: "WhatsApp Instant",
      description: "Mensajería instantánea para consultas rápidas y citas",
      icon: "MessageCircle",
      action: "Abrir WhatsApp",
      contact: "+34 612 345 678",
      available: "Disponible 24/7",
      color: "bg-green-600",
      href: "https://wa.me/34612345678"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Múltiples Formas de Contacto
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el método que más te convenga. Estamos disponibles para ayudarte de la manera que prefieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods?.map((method) => (
            <div key={method?.id} className="bg-card rounded-2xl p-8 card-elevated group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${method?.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={method?.icon} size={28} color="white" />
                </div>
                
                <h3 className="font-headline text-xl font-bold text-foreground mb-3">
                  {method?.title}
                </h3>
                
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {method?.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-foreground">
                    <Icon name="Hash" size={16} color="var(--color-accent)" />
                    <span className="font-body font-medium">{method?.contact}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span className="font-body text-sm">{method?.available}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  fullWidth
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:shadow-lg"
                  onClick={() => window.open(method?.href, '_blank')}
                >
                  <Icon name={method?.icon} size={18} className="mr-2" />
                  {method?.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Icon name="AlertTriangle" size={24} color="var(--color-destructive)" />
            <h3 className="font-headline text-lg font-bold text-destructive">
              Contacto de Emergencia
            </h3>
          </div>
          <p className="font-body text-muted-foreground mb-4">
            Para cancelaciones de último minuto o emergencias fuera del horario comercial
          </p>
          <Button 
            variant="destructive" 
            size="sm"
            onClick={() => window.open('tel:+34612345999', '_blank')}
          >
            <Icon name="Phone" size={16} className="mr-2" />
            +34 612 345 999
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;