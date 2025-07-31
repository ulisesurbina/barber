import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onBookService }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === service?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? service?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-card rounded-xl shadow-brand border border-border overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Service Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name={service?.icon} size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-foreground">
                {service?.name}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {service?.duration} • {service?.price}
              </p>
            </div>
          </div>
          <button
            onClick={toggleExpanded}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          >
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className="text-muted-foreground"
            />
          </button>
        </div>
        
        <p className="text-muted-foreground font-body mt-3 leading-relaxed">
          {service?.description}
        </p>
      </div>
      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6 space-y-6">
          {/* Gallery Section */}
          {service?.gallery && service?.gallery?.length > 0 && (
            <div className="space-y-4">
              <h4 className="font-headline text-lg font-semibold text-foreground">
                Style Gallery
              </h4>
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={service?.gallery?.[selectedImageIndex]}
                    alt={`${service?.name} style example ${selectedImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {service?.gallery?.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors duration-200"
                    >
                      <Icon name="ChevronLeft" size={16} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors duration-200"
                    >
                      <Icon name="ChevronRight" size={16} />
                    </button>
                    
                    <div className="flex justify-center mt-3 space-x-2">
                      {service?.gallery?.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            index === selectedImageIndex ? 'bg-accent' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* What's Included */}
            <div className="space-y-3">
              <h4 className="font-headline text-lg font-semibold text-foreground">
                What's Included
              </h4>
              <ul className="space-y-2">
                {service?.includes?.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-muted-foreground font-body text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best For */}
            <div className="space-y-3">
              <h4 className="font-headline text-lg font-semibold text-foreground">
                Perfect For
              </h4>
              <ul className="space-y-2">
                {service?.bestFor?.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="Star" size={16} className="text-accent flex-shrink-0" />
                    <span className="text-muted-foreground font-body text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Barbers */}
          {service?.recommendedBarbers && service?.recommendedBarbers?.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-headline text-lg font-semibold text-foreground">
                Recommended Barbers
              </h4>
              <div className="flex flex-wrap gap-3">
                {service?.recommendedBarbers?.map((barber, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-muted rounded-lg px-3 py-2">
                    <Image
                      src={barber?.avatar}
                      alt={barber?.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">
                        {barber?.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {barber?.specialty}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Book Service Button */}
          <div className="pt-4 border-t border-border">
            <Button
              variant="default"
              fullWidth
              onClick={() => onBookService(service)}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Book {service?.name}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;