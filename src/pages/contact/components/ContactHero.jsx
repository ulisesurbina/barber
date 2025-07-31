import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent/50 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-lg rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
            <Icon name="MessageCircle" size={40} color="var(--color-accent)" />
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Conecta con Nosotros
          </h1>
          
          <p className="font-body text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Estamos aquí para responder tus preguntas, programar tu cita perfecta y ayudarte a descubrir tu mejor estilo. Tu satisfacción es nuestra prioridad.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} color="var(--color-accent)" />
              <span className="font-body">Respuesta en 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} color="var(--color-accent)" />
              <span className="font-body">Consulta Gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} color="var(--color-accent)" />
              <span className="font-body">Atención Personalizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;