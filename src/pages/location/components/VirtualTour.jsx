import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VirtualTour = () => {
  const [activeView, setActiveView] = useState(0);

  const tourViews = [
    {
      id: 0,
      title: "Studio Entrance",
      description: "Welcome to BarberCraft Studio - where tradition meets modern sophistication",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      highlights: ["Vintage signage", "Welcoming atmosphere", "Street-level access"]
    },
    {
      id: 1,
      title: "Main Cutting Floor",
      description: "Our spacious main floor featuring authentic vintage barber chairs and exposed brick walls",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      highlights: ["6 vintage barber chairs", "Exposed brick walls", "Natural lighting"]
    },
    {
      id: 2,
      title: "Premium Suite",
      description: "Private grooming suite for VIP services and consultations",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      highlights: ["Private consultation area", "Premium services", "Luxury amenities"]
    },
    {
      id: 3,
      title: "Waiting Lounge",
      description: "Comfortable seating area with complimentary refreshments and reading materials",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      highlights: ["Comfortable seating", "Complimentary coffee", "Reading materials"]
    },
    {
      id: 4,
      title: "Product Showcase",
      description: "Curated selection of premium grooming products and accessories",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      highlights: ["Premium products", "Expert recommendations", "Take-home care"]
    }
  ];

  const studioFeatures = [
    {
      icon: "Accessibility",
      title: "Wheelchair Accessible",
      description: "Ground floor location with wide doorways and accessible facilities"
    },
    {
      icon: "Wifi",
      title: "Free WiFi",
      description: "High-speed internet available throughout the studio"
    },
    {
      icon: "Coffee",
      title: "Complimentary Refreshments",
      description: "Premium coffee, tea, and light refreshments while you wait"
    },
    {
      icon: "Car",
      title: "Validated Parking",
      description: "Discounted parking rates at nearby Plaza Mayor garage"
    },
    {
      icon: "CreditCard",
      title: "Multiple Payment Options",
      description: "Cash, cards, and digital payments accepted"
    },
    {
      icon: "Shield",
      title: "Health & Safety",
      description: "Strict hygiene protocols and sanitization procedures"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Virtual Studio Tour
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our authentic barbershop atmosphere before your visit
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Tour View */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              {/* Tour Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={tourViews?.[activeView]?.image}
                  alt={tourViews?.[activeView]?.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Tour Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="font-headline text-xl font-semibold text-primary mb-2">
                        {tourViews?.[activeView]?.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {tourViews?.[activeView]?.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tourViews?.[activeView]?.highlights?.map((highlight, index) => (
                          <span 
                            key={index}
                            className="inline-block bg-accent/20 text-accent text-xs px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setActiveView(activeView > 0 ? activeView - 1 : tourViews?.length - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <Icon name="ChevronLeft" size={20} color="var(--color-primary)" />
                </button>
                <button
                  onClick={() => setActiveView(activeView < tourViews?.length - 1 ? activeView + 1 : 0)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <Icon name="ChevronRight" size={20} color="var(--color-primary)" />
                </button>
              </div>

              {/* Tour Thumbnails */}
              <div className="p-6">
                <div className="flex space-x-3 overflow-x-auto pb-2">
                  {tourViews?.map((view, index) => (
                    <button
                      key={view?.id}
                      onClick={() => setActiveView(index)}
                      className={`flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-200 ${
                        activeView === index 
                          ? 'ring-2 ring-accent scale-105' :'hover:scale-105 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={view?.image}
                        alt={view?.title}
                        className="w-20 h-16 object-cover"
                      />
                      {activeView === index && (
                        <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                          <Icon name="Play" size={16} color="white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tour Actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Your Visit
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Phone"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Share2"
                iconPosition="left"
              >
                Share Tour
              </Button>
            </div>
          </div>

          {/* Studio Features */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="font-headline text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Star" size={20} className="mr-2 text-accent" />
                Studio Features
              </h3>
              
              <div className="space-y-4">
                {studioFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={feature?.icon} size={18} color="var(--color-accent)" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-sm mb-1">
                        {feature?.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visit Planning */}
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl p-6 border border-accent/20">
              <h3 className="font-headline text-lg font-semibold text-primary mb-4 flex items-center">
                <Icon name="Clock" size={18} className="mr-2 text-accent" />
                Plan Your Visit
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={14} color="var(--color-accent)" />
                  <span className="text-muted-foreground">Best times:</span>
                  <span className="text-foreground font-medium">Weekday mornings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} color="var(--color-accent)" />
                  <span className="text-muted-foreground">Average visit:</span>
                  <span className="text-foreground font-medium">45-60 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={14} color="var(--color-accent)" />
                  <span className="text-muted-foreground">Booking:</span>
                  <span className="text-foreground font-medium">Recommended</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} color="var(--color-accent)" />
                  <span className="text-muted-foreground">First visit:</span>
                  <span className="text-foreground font-medium">Arrive 10 min early</span>
                </div>
              </div>

              <Button 
                variant="default" 
                size="sm" 
                fullWidth 
                className="mt-4 bg-accent text-accent-foreground"
                iconName="Info"
                iconPosition="left"
              >
                First Visit Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;