import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const heroVideos = [
    {
      id: 1,
      src: "/assets/3998458-uhd_4096_2160_25fps.mp4",
      title: "Domina el trabajo con tijeras"
    },
    {
      id: 2,
      src: "/assets/3998516-uhd_4096_2160_25fps.mp4",
      title: "Precisión de Navaja Recta"
    },
    {
      id: 3,
      src: "/assets/4177957-hd_1920_1080_30fps.mp4",
      title: "Ritual de toalla caliente"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos?.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-auto w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {heroVideos?.map((video, index) => (
          <video
            key={video?.id}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideo ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video?.src} type="video/mp4" />
          </video>
        ))}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mt-[4rem] max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:mb-6 lg:mb-6 lg:mt-6"
            >
              <span className="inline-block md:px-0 lg:px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent font-body text-sm font-medium md:mb-0 lg:mb-4">
                <Icon name="Scissors" size={16} className="inline mr-2" />
                Artesanos del Aseo Masculino
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-headline text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Artesania
              <br />
              <span className="text-gradient-gold">en cada corte</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-body text-sm md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
            >
              Donde la barbería tradicional se fusiona con la sofisticación moderna. Experimente el ritual del cuidado personal como una forma de arte, creado por maestros barberos que entienden que un gran estilo es sinónimo de tradición e innovación.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="default" 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 md:text-sm lg:text-lg font-semibold"
                iconName="Calendar"
                iconPosition="left"
              >
                Reserva tu experiencia
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 md:text-sm lg:text-lg font-semibold backdrop-blur-sm"
                iconName="Play"
                iconPosition="left"
              >
                Mira nuestro trabajo
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex justify-center sm:justify-center md:justify-start lg:justify-start flex-wrap gap-8 mt-12 pt-8 border-t border-white/20"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-gray-300 font-body">Transformaciones mensuales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-gray-300 font-body">Retención de clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-gray-300 font-body">Años de experiencia</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Video Navigation Dots */}
      <div className="hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-3 z-20">
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20"> */}
        {heroVideos?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentVideo 
                ? 'bg-accent scale-125' :'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Switch to video ${index + 1}`}
          />
        ))}
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-8 text-white/60"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-body mb-2 rotate-90 origin-center">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon name="ChevronDown" size={20} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;