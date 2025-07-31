import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      role: "Business Executive",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      beforeImage: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=300&h=400&fit=crop",
      rating: 5,
      quote: `The transformation was incredible. Marcus didn't just cut my hair, he understood my lifestyle and created a look that works perfectly for my professional image. The attention to detail and craftsmanship is unmatched.`,
      service: "Executive Grooming Package",
      date: "2 weeks ago",
      confidence: "Confidence boosted by 200%"
    },
    {
      id: 2,
      name: "David Rodriguez",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      beforeImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=300&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=300&h=400&fit=crop",
      rating: 5,
      quote: `James transformed my entire look with his beard sculpting expertise. The precision and artistry he brings to his work is phenomenal. I've never felt more confident about my appearance.`,
      service: "Beard Sculpting & Style",
      date: "1 month ago",
      confidence: "Style confidence through the roof"
    },
    {
      id: 3,
      name: "Robert Thompson",
      role: "Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      beforeImage: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=300&h=400&fit=crop",
      rating: 5,
      quote: `Antonio's gentleman's grooming service is an experience like no other. The hot towel treatment, precision cutting, and overall atmosphere make this my go-to place for important meetings and events.`,
      service: "Gentleman\'s Grooming Experience",
      date: "3 weeks ago",
      confidence: "Ready to conquer the world"
    },
    {
      id: 4,
      name: "Alex Martinez",
      role: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      beforeImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=300&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=300&h=400&fit=crop",
      rating: 5,
      quote: `The team at BarberCraft Studio doesn't just provide a service, they create an experience. Every visit leaves me feeling refreshed, confident, and ready to take on any challenge.`,
      service: "Classic Cut & Shave",
      date: "1 week ago",
      confidence: "Feeling like a new person"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const currentData = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Icon name="MessageCircle" size={20} className="text-accent mr-2" />
            <span className="text-accent font-body font-medium">Client Transformations</span>
          </div>
          
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-6">
            Confidence <span className="text-gradient-gold">Stories</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations, real confidence boosts. See how our master barbers have helped 
            clients discover their best selves.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Before/After Images */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <Image
                        src={currentData?.beforeImage}
                        alt={`${currentData?.name} before`}
                        className="w-full h-80 object-cover rounded-2xl"
                      />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-medium">Before</span>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={currentData?.afterImage}
                        alt={`${currentData?.name} after`}
                        className="w-full h-80 object-cover rounded-2xl"
                      />
                      <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-medium">After</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Transformation Arrow */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <Icon name="ArrowRight" size={24} color="white" />
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(currentData?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-body text-xl md:text-2xl text-primary leading-relaxed">
                    "{currentData?.quote}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={currentData?.avatar}
                      alt={currentData?.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-headline text-lg font-semibold text-primary">
                        {currentData?.name}
                      </h4>
                      <p className="text-muted-foreground">{currentData?.role}</p>
                    </div>
                  </div>

                  {/* Service & Confidence */}
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Icon name="Scissors" size={16} className="text-accent mr-2" />
                      <span className="text-muted-foreground">Service: </span>
                      <span className="text-primary font-medium ml-1">{currentData?.service}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="TrendingUp" size={16} className="text-success mr-2" />
                      <span className="text-success font-medium">{currentData?.confidence}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Clock" size={16} className="text-muted-foreground mr-2" />
                      <span className="text-muted-foreground">{currentData?.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-12">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="w-12 h-12 rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="w-12 h-12 rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-accent scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-muted-foreground hover:text-accent"
              >
                <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} className="mr-2" />
                {isAutoPlaying ? "Pause" : "Play"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;