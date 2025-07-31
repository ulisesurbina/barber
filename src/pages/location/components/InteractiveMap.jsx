import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = () => {
  const [activeTab, setActiveTab] = useState('map');

  const mapTabs = [
    { id: 'map', label: 'Map View', icon: 'Map' },
    { id: 'satellite', label: 'Satellite', icon: 'Satellite' },
    { id: 'transit', label: 'Transit', icon: 'Bus' }
  ];

  const nearbyLandmarks = [
    {
      name: "Metro Tribunal",
      type: "transport",
      distance: "2 min walk",
      icon: "Train",
      color: "text-blue-600"
    },
    {
      name: "Café Central",
      type: "dining",
      distance: "50m",
      icon: "Coffee",
      color: "text-amber-600"
    },
    {
      name: "Parking Plaza Mayor",
      type: "parking",
      distance: "100m",
      icon: "Car",
      color: "text-green-600"
    },
    {
      name: "Farmacia San Martín",
      type: "services",
      distance: "75m",
      icon: "Plus",
      color: "text-red-600"
    },
    {
      name: "Banco Santander",
      type: "services",
      distance: "120m",
      icon: "Building",
      color: "text-purple-600"
    },
    {
      name: "Restaurante El Clasico",
      type: "dining",
      distance: "80m",
      icon: "UtensilsCrossed",
      color: "text-orange-600"
    }
  ];

  const transportOptions = [
    {
      type: "Metro",
      lines: ["Línea 1", "Línea 10"],
      station: "Tribunal",
      walkTime: "2 min",
      icon: "Train"
    },
    {
      type: "Bus",
      lines: ["3", "40", "149"],
      station: "Gran Vía - Red de San Luis",
      walkTime: "3 min",
      icon: "Bus"
    },
    {
      type: "Taxi",
      lines: ["Available 24/7"],
      station: "Direct pickup",
      walkTime: "0 min",
      icon: "Car"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Find Us Easily
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Located in Madrid's vibrant cultural district with excellent transport links and nearby amenities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              {/* Map Controls */}
              <div className="bg-white border-b border-border p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-headline text-xl font-semibold text-primary">
                    Interactive Map
                  </h3>
                  <div className="flex items-center space-x-2">
                    {mapTabs?.map((tab) => (
                      <button
                        key={tab?.id}
                        onClick={() => setActiveTab(tab?.id)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          activeTab === tab?.id
                            ? 'bg-accent text-accent-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        <Icon name={tab?.icon} size={16} />
                        <span className="hidden sm:inline">{tab?.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm" iconName="Navigation" iconPosition="left">
                    Get Directions
                  </Button>
                  <Button variant="outline" size="sm" iconName="Share2" iconPosition="left">
                    Share Location
                  </Button>
                  <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                    Save Map
                  </Button>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="relative h-96 bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="BarberCraft Studio Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=40.4168,-3.7038&z=16&output=embed"
                  className="border-0"
                />
                
                {/* Map Overlay Info */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="font-body font-medium text-primary text-sm">BarberCraft Studio</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">456 Artisan Boulevard</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Information */}
          <div className="space-y-6">
            {/* Nearby Landmarks */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="font-headline text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="MapPin" size={20} className="mr-2 text-accent" />
                Nearby Landmarks
              </h3>
              
              <div className="space-y-3">
                {nearbyLandmarks?.map((landmark, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                    <div className={`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${landmark?.color}`}>
                      <Icon name={landmark?.icon} size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="font-body font-medium text-foreground text-sm">{landmark?.name}</p>
                      <p className="text-muted-foreground text-xs">{landmark?.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="font-headline text-xl font-semibold text-primary mb-4 flex items-center">
                <Icon name="Bus" size={20} className="mr-2 text-accent" />
                Transportation
              </h3>
              
              <div className="space-y-4">
                {transportOptions?.map((transport, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name={transport?.icon} size={16} color="var(--color-accent)" />
                      </div>
                      <div>
                        <p className="font-body font-semibold text-foreground text-sm">{transport?.type}</p>
                        <p className="text-muted-foreground text-xs">{transport?.walkTime} walk</p>
                      </div>
                    </div>
                    <div className="ml-11">
                      <p className="text-xs text-muted-foreground mb-1">{transport?.station}</p>
                      <div className="flex flex-wrap gap-1">
                        {transport?.lines?.map((line, lineIndex) => (
                          <span 
                            key={lineIndex}
                            className="inline-block bg-accent/20 text-accent text-xs px-2 py-1 rounded"
                          >
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking Information */}
            <div className="bg-gradient-to-br from-accent/5 to-secondary/5 rounded-xl p-6 border border-accent/20">
              <h3 className="font-headline text-lg font-semibold text-primary mb-3 flex items-center">
                <Icon name="Car" size={18} className="mr-2 text-accent" />
                Parking Options
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Street Parking</span>
                  <span className="text-foreground font-medium">€1.20/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plaza Mayor Garage</span>
                  <span className="text-foreground font-medium">€2.50/hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Validated Parking</span>
                  <span className="text-accent font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;