import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LocationHero = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-accent rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/20 rounded-lg rotate-12"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
              <Icon name="MapPin" size={16} color="var(--color-accent)" />
              <span className="text-accent font-body font-medium text-sm">Visit Our Studio</span>
            </div>
            
            <h1 className="font-headline text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Way to
              <span className="text-gradient-gold block">Excellence</span>
            </h1>
            
            <p className="text-white/90 text-lg lg:text-xl font-body mb-8 max-w-xl">
              Located in the heart of the city's cultural district, The Good Style is more than a destination—it's a neighborhood cornerstone where tradition meets modern sophistication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="default" 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                iconName="Navigation"
                iconPosition="left"
              >
                Get Directions
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Phone"
                iconPosition="left"
              >
                Call Studio
              </Button>
            </div>
          </div>

          {/* Studio Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="The Good Style"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-body font-medium text-primary">Open Now</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">Closes at 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent rounded-full p-4 shadow-lg">
              <Icon name="Scissors" size={24} color="white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
              <Icon name="Star" size={20} color="var(--color-accent)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHero;