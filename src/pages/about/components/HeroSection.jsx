import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/50 rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-accent/20 rounded-lg rotate-12"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-0.5 bg-accent"></div>
                <span className="font-accent text-accent text-lg">Our Story</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Crafting Excellence
                <span className="block text-accent">Since 2018</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="font-body text-lg text-white/90 leading-relaxed max-w-xl"
              >
                Where traditional barbering artistry meets contemporary style innovation. 
                We've transformed the grooming experience into a ritual of confidence and craftsmanship.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center space-x-3 text-white">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <p className="font-body font-semibold">5+ Years</p>
                  <p className="font-body text-sm text-white/70">Excellence</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <p className="font-body font-semibold">2000+</p>
                  <p className="font-body text-sm text-white/70">Satisfied Clients</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <Icon name="Scissors" size={20} color="var(--color-accent)" />
                </div>
                <div>
                  <p className="font-body font-semibold">Master</p>
                  <p className="font-body text-sm text-white/70">Craftsmen</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="BarberCraft Studio interior showcasing vintage barber chairs and premium tools"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-brand"
            >
              <div className="text-center">
                <p className="font-headline text-2xl font-bold text-primary">Est.</p>
                <p className="font-headline text-3xl font-bold text-primary">2018</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-brand"
            >
              <Icon name="Crown" size={32} color="var(--color-accent)" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;