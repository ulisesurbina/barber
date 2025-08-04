import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
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
                <span className="font-accent text-accent text-lg">Experimente la Excelencia</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                ¿Estás listo para transformar tu estilo?
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Únete a miles de clientes satisfechos que han descubierto la diferencia de The Good Style. Reserva tu cita hoy mismo y experimenta el arte del cuidado masculino.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Calendar" size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Reserva en línea fácil
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Agenda tu cita en solo unos clics
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Elige tu maestro barbero
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Seleccione de nuestro equipo de profesionales certificados
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Crown" size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-primary">
                    Experiencia Premium
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Disfrute de un cuidado personal de lujo en nuestro sofisticado estudio.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 btn-primary"
                iconName="Calendar"
                iconPosition="left"
              >
                Reserva tu experiencia
              </Button>
              <Link to="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  iconName="Scissors"
                  iconPosition="left"
                >
                  Ver servicios
                </Button>
              </Link>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-accent">
              <div className="flex items-start space-x-3">
                <Icon name="Gift" size={80} color="var(--color-accent)" className="mt-0.5" />
                <div>
                  <p className="font-body text-primary font-medium mb-2">
                    Especial para nuevos clientes
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Los nuevos clientes reciben un 20 % de descuento en su primer servicio premium.
                    Disfrute de nuestra artesanía con una tarifa de lanzamiento exclusiva.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Elegant The Good Style interior showcasing premium grooming experience"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -left-6 bg-accent p-6 rounded-xl shadow-brand"
            >
              <div className="text-center">
                <Icon name="Award" size={32} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="font-headline text-sm font-bold text-primary">Certificado</p>
                <p className="font-headline text-sm font-bold text-primary">Master</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-brand"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Star" size={24} color="var(--color-accent)" />
                </div>
                <div>
                  <p className="font-headline text-lg font-bold text-primary">4.9</p>
                  <p className="font-body text-xs text-muted-foreground">Clasificación</p>
                </div>
              </div>
            </motion.div>

            {/* Background Pattern */}
            <div className="absolute -z-10 top-10 right-10 w-32 h-32 border-2 border-accent/20 rounded-full"></div>
            <div className="absolute -z-10 bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-lg rotate-12"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;