import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      title: "Business Executive",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "BarberCraft Studio transformed not just my appearance, but my confidence. The attention to detail and craftsmanship is unmatched. Every visit feels like a premium experience.",
      rating: 5,
      service: "Executive Grooming Package",
      transformation: "Confidence & Style"
    },
    {
      id: 2,
      name: "James Thompson",
      title: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "The master barbers here understand that grooming is an art form. They don't just cut hair - they craft a look that perfectly matches your personality and lifestyle.",
      rating: 5,
      service: "Signature Cut & Style",
      transformation: "Personal Expression"
    },
    {
      id: 3,
      name: "David Chen",
      title: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "I've been to many barbershops, but BarberCraft Studio sets the gold standard. The traditional techniques combined with modern style knowledge create exceptional results every time.",
      rating: 5,
      service: "Modern Classic Cut",
      transformation: "Professional Image"
    },
    {
      id: 4,
      name: "Antonio Silva",
      title: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "The hot towel shave experience is incredible - it\'s like stepping back in time to when grooming was a ritual. The attention to detail and luxury feel make it worth every penny.",
      rating: 5,
      service: "Traditional Hot Towel Shave",
      transformation: "Luxury Experience"
    },
    {
      id: 5,
      name: "Robert Johnson",
      title: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "What sets BarberCraft apart is their understanding that each client is unique. They take time to understand your lifestyle and create a look that works for you personally.",
      rating: 5,
      service: "Consultation & Styling",
      transformation: "Personalized Look"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentClient = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary">
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
            <span className="font-accent text-accent text-lg">Client Stories</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-4">
            Transformation Stories
          </h2>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
            Discover how our craftsmanship has transformed confidence and style for our valued clients.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                {/* Client Image */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="w-full h-full overflow-hidden rounded-full border-4 border-accent">
                    <Image
                      src={currentClient?.image}
                      alt={`${currentClient?.name} - Satisfied client at BarberCraft Studio`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={16} color="var(--color-primary)" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(currentClient?.rating)]?.map((_, index) => (
                    <Icon
                      key={index}
                      name="Star"
                      size={20}
                      color="var(--color-accent)"
                      className="fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-xl lg:text-2xl text-white leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{currentClient?.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="space-y-2 mb-8">
                  <h3 className="font-headline text-xl font-bold text-white">
                    {currentClient?.name}
                  </h3>
                  <p className="font-body text-accent font-medium">
                    {currentClient?.title}
                  </p>
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full">
                    <Icon name="Scissors" size={16} color="var(--color-accent)" />
                    <span className="font-body text-sm text-white font-medium">
                      {currentClient?.service}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-accent/20 rounded-full">
                    <Icon name="TrendingUp" size={16} color="var(--color-accent)" />
                    <span className="font-body text-sm text-accent font-medium">
                      {currentClient?.transformation}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <Icon name="ChevronLeft" size={20} color="white" />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-accent scale-125' :'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <Icon name="ChevronRight" size={20} color="white" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={28} color="var(--color-accent)" />
              </div>
              <p className="font-headline text-3xl font-bold text-white mb-2">2000+</p>
              <p className="font-body text-white/80">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={28} color="var(--color-accent)" />
              </div>
              <p className="font-headline text-3xl font-bold text-white mb-2">4.9</p>
              <p className="font-body text-white/80">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Repeat" size={28} color="var(--color-accent)" />
              </div>
              <p className="font-headline text-3xl font-bold text-white mb-2">95%</p>
              <p className="font-body text-white/80">Return Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;