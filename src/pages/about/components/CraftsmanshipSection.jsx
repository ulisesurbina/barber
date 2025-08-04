import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CraftsmanshipSection = () => {
  const craftsmanshipStandards = [
    {
      icon: "Target",
      title: "Excelencia en Precisión",
      description: "Cada corte medido a la perfección utilizando técnicas tradicionales perfeccionadas durante generaciones.",
      metrics: "Precisión de ±1 mm"
    },
    {
      icon: "Wrench",
      title: "Herramientas Premium",
      description: "Tijeras forjadas a mano de Japón, navajas de afeitar de Alemania y cepillos de Inglaterra.",
      metrics: "Calidad profesional"
    },
    {
      icon: "Watch",
      title: "Inversión de Tiempo",
      description: "Servicios sin prisas: cada cita recibe la atención y el tiempo que merece.",
      metrics: "45-90 minutos"
    },
    {
      icon: "Shield",
      title: "Control de Calidad",
      description: "Múltiples controles de calidad garantizan que cada cliente quede completamente satisfecho con su experiencia.",
      metrics: "100 % de satisfacción"
    }
  ];

  const toolsShowcase = [
    {
      name: "Tijeras de acero japonesas",
      description: "Herramientas de corte de precisión forjadas a mano",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Colección de navajas de afeitar",
      description: "Artesanía tradicional alemana",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Cepillos de cerdas naturales",
      description: "Cepillos de pelo de tejón inglés",
      image: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
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
            <span className="font-accent text-accent text-lg">Nuestros estándares</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Estándares de The Good Styles
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro compromiso con la excelencia se refleja en cada aspecto de nuestro servicio, desde las herramientas que utilizamos hasta las técnicas que empleamos.
          </p>
        </motion.div>

        {/* Standards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {craftsmanshipStandards?.map((standard, index) => (
            <motion.div
              key={standard?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-2xl shadow-brand hover:shadow-lg transition-all duration-300 card-elevated text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={standard?.icon} size={28} color="var(--color-accent)" />
              </div>
              <h3 className="font-headline text-lg font-bold text-primary mb-2">
                {standard?.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">
                {standard?.description}
              </p>
              <div className="px-3 py-1 bg-accent/10 rounded-full inline-block">
                <span className="font-body text-xs font-semibold text-accent">
                  {standard?.metrics}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-0.5 bg-accent"></div>
                <span className="font-accent text-accent text-lg">Herramientas Premium</span>
              </div>
              <h3 className="font-headline text-3xl font-bold text-primary">
                Arsenal del Maestro
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Invertimos en las mejores herramientas de todo el mundo porque los resultados excepcionales requieren equipos excepcionales. Cada herramienta es cuidadosamente seleccionada, mantenida y perfeccionada por nuestros artesanos.
              </p>
            </div>

            <div className="space-y-6">
              {toolsShowcase?.map((tool, index) => (
                <motion.div
                  key={tool?.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-card rounded-xl hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                    <Image
                      src={tool?.image}
                      alt={tool?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-bold text-primary">
                      {tool?.name}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {tool?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-accent">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={80} color="var(--color-accent)" className="mt-0.5" />
                <div>
                  <p className="font-body text-primary font-medium mb-2">
                    Excelencia en mantenimiento de herramientas
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Nuestras herramientas se afilan profesionalmente semanalmente, se desinfectan entre cada uso y se reemplazan a la primera señal de desgaste para garantizar un rendimiento constante.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Professional barber tools arranged on vintage leather"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Master barber demonstrating precision technique"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Hand-forged Japanese scissors close-up detail"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Traditional straight razor collection display"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Quality Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 bg-accent p-6 rounded-xl shadow-brand"
            >
              <div className="text-center">
                <Icon name="Award" size={32} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="font-headline text-sm font-bold text-primary">Calidad</p>
                <p className="font-headline text-sm font-bold text-primary">Premium</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;