import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BusinessHours = () => {
  const businessHours = [
    { day: 'Lunes', hours: '9:00 - 20:00', available: true },
    { day: 'Martes', hours: '9:00 - 20:00', available: true },
    { day: 'Miércoles', hours: '9:00 - 20:00', available: true },
    { day: 'Jueves', hours: '9:00 - 21:00', available: true },
    { day: 'Viernes', hours: '9:00 - 21:00', available: true },
    { day: 'Sábado', hours: '8:00 - 19:00', available: true },
    { day: 'Domingo', hours: 'Cerrado', available: false }
  ];

  const specialServices = [
    {
      title: "Citas del Mismo Día",
      description: "Disponibilidad limitada para servicios express",
      icon: "Zap",
      time: "Hasta 18:00"
    },
    {
      title: "Consultas Virtuales",
      description: "Asesoramiento de estilo por videollamada",
      icon: "Video",
      time: "Lun-Vie 10:00-18:00"
    },
    {
      title: "Servicios VIP",
      description: "Atención exclusiva fuera del horario regular",
      icon: "Crown",
      time: "Previa cita"
    }
  ];

  const getCurrentStatus = () => {
    const now = new Date();
    const currentDay = now?.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now?.getHours();
    
    // Convert to Spanish day index (Monday = 0)
    const dayIndex = currentDay === 0 ? 6 : currentDay - 1;
    const todaySchedule = businessHours?.[dayIndex];
    
    if (!todaySchedule?.available) {
      return { isOpen: false, message: "Cerrado hoy" };
    }
    
    // Simple check for business hours (9-20 most days)
    if (currentHour >= 9 && currentHour < 20) {
      return { isOpen: true, message: "Abierto ahora" };
    }
    
    return { isOpen: false, message: "Cerrado ahora" };
  };

  const status = getCurrentStatus();

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Business Hours */}
          <div>
            <div className="mb-8">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
                Horarios de Atención
              </h2>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${status.isOpen ? 'bg-success' : 'bg-destructive'}`}></div>
                <span className={`font-body font-medium ${status.isOpen ? 'text-success' : 'text-destructive'}`}>
                  {status.message}
                </span>
              </div>
              <p className="font-body text-muted-foreground">
                Nuestro equipo está disponible para brindarte la mejor experiencia de barbería profesional.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 card-elevated">
              <div className="space-y-4">
                {businessHours?.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                    <span className="font-body font-medium text-foreground">
                      {schedule?.day}
                    </span>
                    <span className={`font-body ${schedule?.available ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {schedule?.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-2 text-accent mb-3">
                  <Icon name="Calendar" size={20} />
                  <span className="font-body font-medium">Reservas Online</span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Reserva tu cita las 24 horas del día a través de nuestra plataforma online.
                </p>
                <Button 
                  variant="outline" 
                  fullWidth
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Reservar Cita Online
                </Button>
              </div>
            </div>
          </div>

          {/* Special Services */}
          <div>
            <div className="mb-8">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
                Servicios Especiales
              </h2>
              <p className="font-body text-muted-foreground">
                Ofrecemos opciones flexibles para adaptarnos a tu horario y necesidades específicas.
              </p>
            </div>

            <div className="space-y-6">
              {specialServices?.map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 card-elevated">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name={service?.icon} size={24} color="var(--color-accent)" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-headline text-lg font-bold text-foreground mb-2">
                        {service?.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-3">
                        {service?.description}
                      </p>
                      <div className="flex items-center space-x-2 text-accent">
                        <Icon name="Clock" size={16} />
                        <span className="font-body text-sm font-medium">{service?.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-warning/10 border border-warning/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="AlertCircle" size={24} color="var(--color-warning)" />
                <h3 className="font-headline text-lg font-bold text-warning">
                  Horario Extendido
                </h3>
              </div>
              <p className="font-body text-muted-foreground mb-4">
                Para eventos especiales, bodas o servicios grupales, podemos abrir fuera del horario regular con cita previa.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-warning text-warning hover:bg-warning hover:text-warning-foreground"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Consultar Disponibilidad
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;