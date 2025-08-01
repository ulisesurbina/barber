import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const philosophyPrinciples = [
    {
      icon: "Scissors",
      title: "Artisan Craftsmanship",
      description: "Every cut is a masterpiece, executed with precision tools and decades of refined technique."
    },
    {
      icon: "Heart",
      title: "Personal Transformation",
      description: "We believe grooming is more than appearance - it\'s about building confidence and self-expression."
    },
    {
      icon: "Users",
      title: "Community Connection",
      description: "Creating a sanctuary where modern gentlemen gather, share stories, and build lasting relationships."
    },
    {
      icon: "Crown",
      title: "Excellence Standard",
      description: "Uncompromising commitment to quality in every service, product, and client interaction."
    }
  ];

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
                <span className="font-accent text-accent text-lg">Our Philosophy</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                The Art of Masculine Grooming
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                At The Good Style, we believe that grooming is a ritual of transformation. 
                Each visit is an investment in personal excellence, where traditional techniques 
                meet contemporary style to create an experience that transcends the ordinary.
              </p>
            </div>

            <div className="space-y-6">
              {philosophyPrinciples?.map((principle, index) => (
                <motion.div
                  key={principle?.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
                    <Icon name={principle?.icon} size={20} color="var(--color-accent)" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {principle?.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {principle?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary/5 p-6 rounded-xl border-l-4 border-accent"
            >
              <blockquote className="font-body text-lg italic text-primary leading-relaxed">
                "We don't just cut hair - we craft confidence, sculpt style, and create an experience 
                that honors the timeless tradition of barbering while embracing modern innovation."
              </blockquote>
              <cite className="font-body text-sm text-secondary font-medium mt-3 block">
                - Marcus Rodriguez, Master Barber & Founder
              </cite>
            </motion.div>
          </motion.div>

          {/* Images */}
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
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Vintage barber tools showcasing traditional craftsmanship"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Premium grooming products and beard care essentials"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Master barber demonstrating precision cutting technique"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Elegant barbershop interior with vintage leather chairs"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-brand max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <Icon name="Quote" size={24} color="var(--color-primary)" />
                <p className="font-body text-sm font-medium text-primary">
                  "Tradition meets innovation in every service"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;