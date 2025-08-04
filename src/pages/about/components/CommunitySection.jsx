import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CommunitySection = () => {
  const communityInitiatives = [
    {
      icon: "GraduationCap",
      title: "Programa de Educación sobre el Cuidado Personal",
      description: "Talleres de aseo gratuitos para jóvenes desfavorecidos, enseñando confianza a través del autocuidado.",
      impact: "Más de 200 estudiantes capacitados",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "Handshake",
      title: "Asociaciones de Negocios Locales",
      description: "Colaborando con negocios locales para apoyar el crecimiento comunitario y el desarrollo económico.",
      impact: "Más de 15 asociaciones",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: "Heart",
      title: "Campañas de Caridad",
      description: "Eventos regulares de recaudación de fondos y campañas de donación que apoyan a organizaciones benéficas y causas locales.",
      impact: "Más de $25,000 recaudados",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Premio a la Excelencia Comunitaria",
      organization: "Cámara de Comercio de la Ciudad",
      description: "Reconocimiento por un servicio comunitario destacado y un impacto local."
    },
    {
      year: "2023",
      title: "Mejor Nuevo Negocio",
      organization: "Asociación de Negocios Locales",
      description: "Otorgado por la calidad excepcional del servicio y la satisfacción del cliente."
    },
    {
      year: "2023",
      title: "Certificación de Maestros Artesanos",
      organization: "Gremio Nacional de Barbería",
      description: "El nivel más alto de reconocimiento por la excelencia y el arte del barberismo."
    },
    {
      year: "2022",
      title: "Innovación en el Cuidado Personal",
      organization: "Alianza de Barberos Profesionales",
      description: "Reconocimiento por combinar técnicas tradicionales con innovación moderna."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Community Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="font-accent text-accent text-lg">Impacto en la Comunidad</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Más allá de la Silla
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Creemos en retribuir a la comunidad que nos apoya. Nuestras iniciativas se centran en la educación, la asociación y el impacto social positivo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {communityInitiatives?.map((initiative, index) => (
            <motion.div
              key={initiative?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl shadow-brand hover:shadow-lg transition-all duration-300 card-elevated overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={initiative?.image}
                  alt={initiative?.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center">
                    <Icon name={initiative?.icon} size={24} color="var(--color-primary)" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-headline text-xl font-bold text-primary mb-3">
                  {initiative?.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {initiative?.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-body text-sm font-semibold">
                    {initiative?.impact}
                  </span>
                  <Icon name="ArrowRight" size={20} color="var(--color-accent)" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards & Recognition */}
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
                <span className="font-accent text-accent text-lg">Reconocimiento</span>
              </div>
              <h3 className="font-headline text-3xl font-bold text-primary">
                Premios y Certificaciones
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Nuestro compromiso con la excelencia ha sido reconocido tanto por líderes de la industria como por organizaciones comunitarias.
              </p>
            </div>

            <div className="space-y-6">
              {awards?.map((award, index) => (
                <motion.div
                  key={`${award?.year}-${award?.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-card rounded-xl hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={20} color="var(--color-accent)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-headline text-lg font-bold text-primary">
                        {award?.title}
                      </h4>
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded font-body text-xs font-semibold">
                        {award?.year}
                      </span>
                    </div>
                    <p className="font-body text-sm text-secondary font-medium mb-1">
                      {award?.organization}
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {award?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
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
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Community workshop teaching grooming skills"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Charity event fundraising for local causes"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Local business partnership meeting"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Award ceremony recognition event"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Community Impact Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-brand"
            >
              <div className="text-center">
                <Icon name="Heart" size={32} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="font-headline text-sm font-bold text-primary">Premios &</p>
                <p className="font-headline text-sm font-bold text-primary">Certificados</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;