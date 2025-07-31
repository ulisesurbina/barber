import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const timelineData = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Founded with a vision to revive traditional barbering artistry in the modern world.",
      icon: "Scissors",
      milestone: "Studio Opening"
    },
    {
      year: "2019",
      title: "Master Training",
      description: "Our barbers completed advanced training at the International Barbering Academy in London.",
      icon: "GraduationCap",
      milestone: "Certification Achieved"
    },
    {
      year: "2020",
      title: "Community Recognition",
      description: "Awarded \'Best New Barbershop\' by the Local Business Association despite challenging times.",
      icon: "Award",
      milestone: "First Award"
    },
    {
      year: "2021",
      title: "Expansion & Innovation",
      description: "Introduced premium grooming services and launched our signature beard care product line.",
      icon: "TrendingUp",
      milestone: "Service Evolution"
    },
    {
      year: "2022",
      title: "Digital Transformation",
      description: "Launched online booking platform and virtual consultation services for modern convenience.",
      icon: "Smartphone",
      milestone: "Tech Integration"
    },
    {
      year: "2023",
      title: "Craftsmanship Excellence",
      description: "Recognized as \'Master Craftsmen\' by the National Barbering Guild for exceptional artistry.",
      icon: "Crown",
      milestone: "Master Status"
    },
    {
      year: "2024",
      title: "Community Impact",
      description: "Established grooming education program for underprivileged youth and local partnerships.",
      icon: "Heart",
      milestone: "Social Initiative"
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
            <span className="font-accent text-accent text-lg">Our Journey</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Evolution of Excellence
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to master craftsmanship - discover how we've transformed 
            the barbering experience through dedication, innovation, and unwavering commitment to quality.
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