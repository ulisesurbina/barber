import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LiveBookingWidget = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const masterBarbers = [
    {
      id: 1,
      name: "Genoveva Canales",
      specialty: "Peluquería moderna y tradicional con cortes estilo barber",
      experience: "+20 years",
      avatar: "/assets/images/genovevaperfil.png",
      rating: 4.9,
      nextAvailable: "Preguntar para agendar"
    }
    // {
    //   id: 2,
    //   name: "James Thompson",
    //   specialty: "Beard Sculpting & Modern Styles",
    //   experience: "8 years",
    //   avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    //   rating: 4.8,
    //   nextAvailable: "Hoy 4:15 PM"
    // },
    // {
    //   id: 3,
    //   name: "Antonio Silva",
    //   specialty: "Gentleman\'s Grooming & Hot Towel",
    //   experience: "15 years",
    //   avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    //   rating: 5.0,
    //   nextAvailable: "Mañana 10:00 AM"
    // }
  ];

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"
  ];

  useEffect(() => {
    // Simulate real-time availability
    const updateAvailability = () => {
      const available = timeSlots?.filter(() => Math.random() > 0.3);
      setAvailableSlots(available);
    };

    updateAvailability();
    const interval = setInterval(updateAvailability, 30000);
    return () => clearInterval(interval);
  }, [selectedDate, selectedBarber]);

  const formatDate = (date) => {
    return date?.toLocaleDateString('es-MX', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Reserva tu <span className="text-gradient-gold">Servicio</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Barberos expertos, atención personalizada y citas sin complicaciones.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Barber Selection */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 card-elevated"
            >
              <div className="flex items-center mb-6">
                <Icon name="Users" size={24} className="text-accent mr-3" />
                <h3 className="font-headline text-2xl font-semibold text-primary">
                  Elige tu Miss Barber
                </h3>
              </div>

              <div className="space-y-4">
                {masterBarbers?.map((barber) => (
                  <motion.div
                    key={barber?.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedBarber(barber)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedBarber?.id === barber?.id
                        ? 'bg-accent/10 border-2 border-accent' :'bg-muted hover:bg-muted/80 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Image
                          src={barber?.avatar}
                          alt={barber?.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 right-11 w-5 h-5 bg-success rounded-full border-2 border-white"></div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-body font-semibold text-primary">{barber?.name}</h4>
                          <div className="flex items-center">
                            <Icon name="Star" size={16} className="text-accent fill-current mr-1" />
                            <span className="text-sm font-medium text-accent">{barber?.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{barber?.specialty}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-secondary">{barber?.experience} experiencia</span>
                          <span className="text-xs text-success font-medium">{barber?.nextAvailable}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Time Slot Selection */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 card-elevated"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Icon name="Calendar" size={24} className="text-accent mr-3" />
                  <h3 className="font-headline text-2xl font-semibold text-primary">
                    Horarios disponibles
                  </h3>
                </div>
                <div className="flex items-center text-sm text-success">
                  <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
                    Sujetos a confirmación
                </div>
              </div>

              <div className="mb-6">
                <div className="text-lg font-semibold text-primary mb-2">
                  {formatDate(selectedDate)}
                </div>
                <div className="flex space-x-2">
                  {[0, 1, 2]?.map((offset) => {
                    const date = new Date();
                    date?.setDate(date?.getDate() + offset);
                    const isSelected = selectedDate?.toDateString() === date?.toDateString();
                    
                    return (
                      <button
                        key={offset}
                        onClick={() => setSelectedDate(date)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {offset === 0 ? 'Hoy' : offset === 1 ? 'Mañana' : date?.toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric' })}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {timeSlots?.map((slot) => {
                  const isAvailable = true;
                  const isSelected = selectedTime === slot;

                  return (
                    <motion.button
                      key={slot}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 border ${
                        isSelected
                          ? 'bg-accent text-accent-foreground border-accent scale-105'
                          : 'bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground border-accent/20'
                      }`}
                    >
                      {slot}
                    </motion.button>
                  );
                })}
              </div>

              <Button
                variant="default"
                size="lg"
                fullWidth
                disabled={!selectedBarber || !selectedTime}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => {
                  const message = `Hola, quisiera saber si ¿hay servicio disponible para el ${formatDate(selectedDate)} a las ${selectedTime} con ${selectedBarber?.name}?`;

                  window.open(
                    `https://wa.me/525512327063?text=${encodeURIComponent(message)}`,
                    '_blank'
                  );

                  setSelectedBarber(null);
                  setSelectedTime(null);
                  setSelectedDate(new Date());
                }}
              >
                {selectedBarber && selectedTime
                  ? 'Reservar cita por WhatsApp'
                  : 'Seleccione barbero y horario'}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveBookingWidget;