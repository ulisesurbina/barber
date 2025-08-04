import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StudioDetails = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      label: "Address",
      value: "456 Artisan Boulevard, Cultural District",
      subValue: "Madrid, Spain 28001"
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "+34 91 234 5678",
      subValue: "Click to call directly"
    },
    {
      icon: "Mail",
      label: "Email",
      value: "hola@thegoodstyle.com",
      subValue: "General inquiries & bookings"
    },
    {
      icon: "MessageCircle",
      label: "WhatsApp",
      value: "+34 612 345 678",
      subValue: "Quick questions & updates"
    }
  ];

  const operatingHours = [
    { day: "Lunes - Viernes", hours: "9:00 AM - 8:00 PM", isToday: true },
    { day: "Sábado", hours: "8:00 AM - 7:00 PM", isToday: false },
    { day: "Domingo", hours: "10:00 AM - 6:00 PM", isToday: false }
  ];

  const specialHours = [
    { date: "1 de Enero", hours: "Cerrado", type: "holiday" },
    { date: "6 de Enero", hours: "10:00 AM - 4:00 PM", type: "holiday" },
    { date: "1 de Mayo", hours: "Cerrado", type: "holiday" },
    { date: "15 de Agosto", hours: "10:00 AM - 4:00 PM", type: "holiday" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Información del Estudio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todo lo que necesitas saber para tu visita a The Good Style
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Info" size={24} className="mr-3 text-accent" />
                Detalles de Contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo?.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={info?.icon} size={20} color="var(--color-accent)" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body font-medium text-primary mb-1">{info?.label}</p>
                      <p className="text-foreground font-semibold">{info?.value}</p>
                      <p className="text-muted-foreground text-sm">{info?.subValue}</p>
                    </div>
                    {(info?.icon === "Phone" || info?.icon === "MessageCircle") && (
                      <Button variant="outline" size="sm" className="ml-auto">
                        <Icon name={info?.icon === "Phone" ? "Phone" : "MessageCircle"} size={16} />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-accent/5 rounded-xl p-6">
              <h4 className="font-headline text-lg font-semibold text-primary mb-4">
                Acciones Rápidas
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" fullWidth iconName="Calendar">
                  Reserva Ahora
                </Button>
                <Button variant="outline" size="sm" fullWidth iconName="Navigation">
                  Direcciones
                </Button>
                <Button variant="outline" size="sm" fullWidth iconName="Camera">
                  Visita Virtual
                </Button>
                <Button variant="outline" size="sm" fullWidth iconName="Share2">
                  Compartir Ubicación
                </Button>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Clock" size={24} className="mr-3 text-accent" />
                Horas de Operación
              </h3>
              
              <div className="bg-card rounded-lg p-6">
                <div className="space-y-4">
                  {operatingHours?.map((schedule, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center py-3 px-4 rounded-lg ${
                        schedule?.isToday ? 'bg-accent/10 border border-accent/20' : 'bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {schedule?.isToday && (
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        )}
                        <span className={`font-body font-medium ${
                          schedule?.isToday ? 'text-accent' : 'text-foreground'
                        }`}>
                          {schedule?.day}
                        </span>
                      </div>
                      <span className={`font-body ${
                        schedule?.isToday ? 'text-accent font-semibold' : 'text-muted-foreground'
                      }`}>
                        {schedule?.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon name="Calendar" size={16} color="var(--color-accent)" />
                    <span className="font-body font-medium text-primary">Horas Especiales</span>
                  </div>
                  <div className="space-y-2">
                    {specialHours?.map((special, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{special?.date}</span>
                        <span className={`font-medium ${
                          special?.hours === "Cerrado" ? 'text-destructive' : 'text-foreground'
                        }`}>
                          {special?.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-6 border border-accent/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-body font-semibold text-primary">Actualmente abierto</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
               ¡Estamos listos para atenderte! Se aceptan visitas sin cita, pero se recomiendan las citas.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Closes in 4 hours</span>
                <Button variant="default" size="sm" className="bg-accent text-accent-foreground">
                  Reserva Hoy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioDetails;