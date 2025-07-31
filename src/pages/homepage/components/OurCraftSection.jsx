import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const OurCraftSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const signatureServices = [
    {
      id: 1,
      title: "Classic Cut & Shave",
      description: "Traditional barbering at its finest with precision scissor work and straight razor mastery",
      beforeImage: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop",
      icon: "Scissors",
      duration: "45 min",
      price: "From $65",
      features: ["Hot towel treatment", "Straight razor finish", "Styling consultation", "Premium products"]
    },
    {
      id: 2,
      title: "Beard Sculpting",
      description: "Artistic beard shaping and grooming that complements your facial structure perfectly",
      beforeImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop",
      icon: "Zap",
      duration: "30 min",
      price: "From $45",
      features: ["Precision trimming", "Shape consultation", "Beard oil treatment", "Styling tips"]
    },
    {
      id: 3,
      title: "Gentleman\'s Grooming",
      description: "Complete grooming experience including facial treatments and premium styling",
      beforeImage: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop",
      icon: "Crown",
      duration: "75 min",
      price: "From $95",
      features: ["Full service cut", "Hot towel facial", "Eyebrow trim", "Luxury finish"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Icon name="Award" size={20} className="text-accent mr-2" />
            <span className="text-accent font-body font-medium">Signature Services</span>
          </div>
          
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-6">
            Our <span className="text-gradient-gold">Craft</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each service is a masterpiece of traditional technique and modern innovation, 
            delivered by artisans who understand that great grooming is both art and science.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureServices?.map((service, index) => (
            <motion.div
              key={service?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group bg-card rounded-2xl overflow-hidden card-elevated cursor-pointer"
            >
              {/* Image Container with Before/After Reveal */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service?.beforeImage}
                  alt={`${service?.title} before`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    hoveredService === service?.id ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                  }`}
                />
                <Image
                  src={service?.afterImage}
                  alt={`${service?.title} after`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    hoveredService === service?.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Service Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name={service?.icon} size={24} color="white" />
                  </div>
                </div>

                {/* Before/After Labels */}
                <div className="absolute bottom-4 right-4">
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                      hoveredService === service?.id 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-white/20 text-white backdrop-blur-sm'
                    }`}>
                      {hoveredService === service?.id ? 'After' : 'Before'}
                    </span>
                  </div>
                </div>

                {/* Hover Instruction */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredService === service?.id ? 0 : 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white text-sm font-medium">Hover to see transformation</span>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-headline text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {service?.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{service?.duration}</div>
                    <div className="text-lg font-bold text-accent">{service?.price}</div>
                  </div>
                </div>

                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {service?.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service?.features?.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Icon name="Check" size={16} className="text-accent mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Book This Service
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="font-body text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust BarberCraft Studio for their grooming needs. 
              Book your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                iconName="Calendar"
                iconPosition="left"
              >
                View All Services
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Phone"
                iconPosition="left"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCraftSection;