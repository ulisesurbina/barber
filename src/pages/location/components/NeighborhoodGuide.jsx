import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const NeighborhoodGuide = () => {
  const nearbyBusinesses = [
    {
      name: "Café Central",
      type: "Coffee & Pastries",
      distance: "50m",
      rating: 4.8,
      description: "Historic café serving traditional Spanish coffee and pastries since 1887",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      perks: "10% discount for The Good Style clients",
      hours: "7:00 AM - 10:00 PM",
      icon: "Coffee"
    },
    {
      name: "Restaurante El Clásico",
      type: "Traditional Spanish Cuisine",
      distance: "80m",
      rating: 4.6,
      description: "Authentic Spanish restaurant featuring traditional tapas and regional specialties",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      perks: "Free appetizer with grooming service receipt",
      hours: "12:00 PM - 12:00 AM",
      icon: "UtensilsCrossed"
    },
    {
      name: "Librería Cervantes",
      type: "Bookstore & Cultural Space",
      distance: "120m",
      rating: 4.7,
      description: "Independent bookstore with rare finds and cultural events",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      perks: "Book recommendations from our barbers",
      hours: "10:00 AM - 9:00 PM",
      icon: "BookOpen"
    },
    {
      name: "Galería Arte Moderno",
      type: "Contemporary Art Gallery",
      distance: "150m",
      rating: 4.5,
      description: "Rotating exhibitions of contemporary Spanish and international artists",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      perks: "Exhibition opening invitations",
      hours: "11:00 AM - 8:00 PM",
      icon: "Palette"
    }
  ];

  const districtHighlights = [
    {
      title: "Cultural Heritage",
      description: "Located in Madrid's historic cultural district, surrounded by museums, galleries, and architectural landmarks",
      icon: "Building",
      color: "text-purple-600"
    },
    {
      title: "Dining Scene",
      description: "From traditional tapas bars to modern fusion restaurants, the neighborhood offers diverse culinary experiences",
      icon: "UtensilsCrossed",
      color: "text-orange-600"
    },
    {
      title: "Shopping District",
      description: "Boutique shops, vintage stores, and artisan workshops create a unique shopping experience",
      icon: "ShoppingBag",
      color: "text-green-600"
    },
    {
      title: "Transport Hub",
      description: "Excellent connectivity with multiple metro lines, bus routes, and bike-sharing stations",
      icon: "Bus",
      color: "text-blue-600"
    }
  ];

  const weatherConsiderations = [
    {
      season: "Spring (Mar-May)",
      temperature: "15-22°C",
      recommendation: "Perfect for outdoor styling and beard maintenance",
      icon: "Sun",
      color: "text-green-500"
    },
    {
      season: "Summer (Jun-Aug)",
      temperature: "25-35°C",
      recommendation: "Shorter cuts and cooling treatments recommended",
      icon: "Sun",
      color: "text-yellow-500"
    },
    {
      season: "Autumn (Sep-Nov)",
      temperature: "12-20°C",
      recommendation: "Ideal time for beard growth and styling consultations",
      icon: "Cloud",
      color: "text-orange-500"
    },
    {
      season: "Winter (Dec-Feb)",
      temperature: "5-12°C",
      recommendation: "Moisturizing treatments and protective styling",
      icon: "CloudSnow",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Explore the Neighborhood
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover what makes our location special - from local partnerships to cultural attractions
          </p>
        </div>

        {/* District Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {districtHighlights?.map((highlight, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${highlight?.color}`}>
                <Icon name={highlight?.icon} size={24} />
              </div>
              <h3 className="font-headline text-lg font-semibold text-primary mb-2">
                {highlight?.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nearby Businesses */}
        <div className="mb-12">
          <h3 className="font-headline text-2xl font-semibold text-primary mb-8 text-center">
            Local Partners & Recommendations
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {nearbyBusinesses?.map((business, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={business?.image}
                    alt={business?.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} color="var(--color-accent)" />
                      <span className="text-sm font-medium text-primary">{business?.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-accent/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">{business?.distance} away</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={business?.icon} size={16} color="var(--color-accent)" />
                    </div>
                    <div>
                      <h4 className="font-headline text-lg font-semibold text-primary">
                        {business?.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">{business?.type}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {business?.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-accent/5 rounded-lg p-3 border border-accent/20">
                      <div className="flex items-center space-x-2 mb-1">
                        <Icon name="Gift" size={14} color="var(--color-accent)" />
                        <span className="text-accent font-medium text-sm">Client Perk</span>
                      </div>
                      <p className="text-foreground text-sm">{business?.perks}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} color="var(--color-muted-foreground)" />
                        <span className="text-muted-foreground">{business?.hours}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Icon name="ExternalLink" size={14} className="mr-1" />
                        Visit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Considerations */}
        <div className="bg-card rounded-xl p-8 shadow-lg">
          <h3 className="font-headline text-2xl font-semibold text-primary mb-6 text-center flex items-center justify-center">
            <Icon name="CloudSun" size={24} className="mr-3 text-accent" />
            Seasonal Styling Guide
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherConsiderations?.map((season, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center ${season?.color}`}>
                  <Icon name={season?.icon} size={28} />
                </div>
                <h4 className="font-headline text-lg font-semibold text-primary mb-2">
                  {season?.season}
                </h4>
                <p className="text-muted-foreground text-sm mb-3">{season?.temperature}</p>
                <p className="text-foreground text-sm leading-relaxed">
                  {season?.recommendation}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              variant="default" 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Seasonal Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodGuide;