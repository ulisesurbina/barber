import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const MasterBarbersSection = () => {
  const [selectedBarber, setSelectedBarber] = useState(0);

  const masterBarbers = [
    {
      id: 1,
      name: "Marcus Rodriguez",
      title: "Master Barber & Founder",
      experience: "15+ Years",
      specialties: ["Classic Cuts", "Beard Sculpting", "Hot Towel Shaves"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Every cut tells a story. My job is to make sure it\'s a story of confidence and style.",
      background: "Trained at the prestigious London Barbering Academy and mentored under master craftsmen in Italy. Marcus brings old-world techniques to modern styling.",
      certifications: ["Master Barber Certification", "Advanced Shaving Techniques", "Beard Care Specialist"],
      philosophy: "Precision in every detail, excellence in every service."
    },
    {
      id: 2,
      name: "James Thompson",
      title: "Senior Barber",
      experience: "12+ Years",
      specialties: ["Modern Fades", "Texture Styling", "Color Treatments"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Style is personal expression. I help clients discover their unique look and own it with confidence.",
      background: "James specializes in contemporary cuts and innovative styling techniques. His artistic background brings creativity to traditional barbering.",
      certifications: ["Advanced Cutting Techniques", "Color Theory Specialist", "Men\'s Grooming Expert"],
      philosophy: "Innovation through tradition, creativity through craft."
    },
    {
      id: 3,
      name: "Antonio Silva",
      title: "Traditional Barber",
      experience: "20+ Years",
      specialties: ["Straight Razor Shaves", "Mustache Styling", "Traditional Cuts"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "The art of barbering is passed down through generations. I'm honored to carry on this tradition.",
      background: "Third-generation barber with roots in traditional European barbering. Antonio maintains the authentic techniques of classic grooming.",
      certifications: ["Traditional Barbering Master", "Straight Razor Specialist", "Heritage Techniques"],
      philosophy: "Honoring the past while serving the present."
    },
    {
      id: 4,
      name: "David Chen",
      title: "Styling Specialist",
      experience: "8+ Years",
      specialties: ["Asian Hair Techniques", "Precision Cuts", "Styling Consultation"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Understanding hair texture and face shape is the foundation of great styling.",
      background: "David brings expertise in diverse hair types and cutting-edge techniques. His analytical approach ensures perfect results for every client.",
      certifications: ["Precision Cutting Expert", "Hair Analysis Specialist", "Modern Styling Techniques"],
      philosophy: "Science meets artistry in perfect harmony."
    }
  ];

  const currentBarber = masterBarbers?.[selectedBarber];

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
            <span className="font-accent text-accent text-lg">Meet Our Team</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Master Craftsmen
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of master barbers brings decades of combined experience, 
            each with unique specialties and unwavering commitment to excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Barber Selection */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {masterBarbers?.map((barber, index) => (
                <motion.div
                  key={barber?.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedBarber(index)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedBarber === index
                      ? 'bg-accent/10 border-2 border-accent shadow-brand'
                      : 'bg-card hover:bg-muted/50 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 overflow-hidden rounded-full">
                        <Image
                          src={barber?.image}
                          alt={`${barber?.name} - ${barber?.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {selectedBarber === index && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                          <Icon name="Check" size={14} color="white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-headline text-lg font-bold text-primary">
                        {barber?.name}
                      </h3>
                      <p className="font-body text-sm text-secondary">{barber?.title}</p>
                      <p className="font-body text-xs text-accent font-medium">{barber?.experience}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Selected Barber Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedBarber}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl shadow-brand"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={currentBarber?.image}
                      alt={`${currentBarber?.name} - Master Barber at The Good Style`}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-xl shadow-brand">
                    <Icon name="Scissors" size={24} color="var(--color-primary)" />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                      {currentBarber?.name}
                    </h3>
                    <p className="font-body text-lg text-secondary font-medium mb-1">
                      {currentBarber?.title}
                    </p>
                    <p className="font-body text-accent font-semibold">
                      {currentBarber?.experience} Experience
                    </p>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-xl border-l-4 border-accent">
                    <Icon name="Quote" size={20} color="var(--color-accent)" className="mb-2" />
                    <p className="font-body italic text-primary leading-relaxed">
                      "{currentBarber?.quote}"
                    </p>
                  </div>

                  <div>
                    <h4 className="font-headline text-lg font-bold text-primary mb-3">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentBarber?.specialties?.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full font-body text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-headline text-lg font-bold text-primary mb-3">
                      Philosophy
                    </h4>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {currentBarber?.philosophy}
                    </p>
                  </div>
                </div>
              </div>

              {/* Background & Certifications */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-headline text-lg font-bold text-primary mb-3">
                      Background
                    </h4>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {currentBarber?.background}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-bold text-primary mb-3">
                      Certifications
                    </h4>
                    <ul className="space-y-2">
                      {currentBarber?.certifications?.map((cert, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Icon name="Award" size={16} color="var(--color-accent)" />
                          <span className="font-body text-sm text-muted-foreground">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterBarbersSection;