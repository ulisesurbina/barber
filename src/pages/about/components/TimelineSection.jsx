import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const timelineData = [
    {
      year: "2018",
      title: "El Comienzo",
      description: "Fundado con la visión de revivir el arte del barberismo tradicional en el mundo moderno.",
      icon: "Scissors",
      milestone: "Apertura del Estudio"
    },
    {
      year: "2019",
      title: "Entrenamiento Maestro",
      description: "Nuestros barberos completaron una formación avanzada en la Academia Internacional de Barbería en Londres.",
      icon: "GraduationCap",
      milestone: "Certificación Alcanzada"
    },
    {
      year: "2020",
      title: "Reconocimiento Comunitario",
      description: "Premiado como 'Mejor Nueva Barbería' por la Asociación de Negocios Local a pesar de los tiempos difíciles.",
      icon: "Award",
      milestone: "Primer premio"
    },
    {
      year: "2021",
      title: "Expansión e Innovación",
      description: "Introdujimos servicios de aseo premium y lanzamos nuestra línea de productos para el cuidado de la barba.",
      icon: "TrendingUp",
      milestone: "Evolución del Servicio"
    },
    {
      year: "2022",
      title: "Transformación Digital",
      description: "Lanzamos una plataforma de reservas en línea y servicios de consultas virtuales para mayor comodidad moderna.",
      icon: "Smartphone",
      milestone: "Integración Tecnológica"
    },
    {
      year: "2023",
      title: "Excelencia en la artesanía",
      description: "Reconocidos como 'Maestros Artesanos' por el Gremio Nacional de Barbería por su excepcional arte.",
      icon: "Crown",
      milestone: "Estado Maestro"
    },
    {
      year: "2024",
      title: "Impacto Comunitario",
      description: "Programa de educación en peluquería establecido para jóvenes desfavorecidos y asociaciones locales.",
      icon: "Heart",
      milestone: "Iniciativa Social"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="font-accent text-accent text-lg">Nuestro Viaje</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Evolución de la Excelencia
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde humildes comienzos hasta la maestría artesanal - descubre cómo hemos transformado la experiencia de barbería a través de la dedicación, la innovación y un compromiso inquebrantable con la calidad.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-accent via-secondary to-accent hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {timelineData?.map((item, index) => (
              <motion.div
                key={item?.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-card p-8 rounded-2xl shadow-brand hover:shadow-lg transition-all duration-300 card-elevated">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Icon name={item?.icon} size={24} color="var(--color-accent)" />
                      </div>
                      <div>
                        <p className="font-headline text-2xl font-bold text-accent">{item?.year}</p>
                        <p className="font-body text-sm text-secondary font-medium">{item?.milestone}</p>
                      </div>
                    </div>
                    <h3 className="font-headline text-xl font-bold text-primary mb-3">
                      {item?.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {item?.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-brand relative z-10">
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;