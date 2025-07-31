import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ServiceComparison = ({ services, onBookPackage }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleServiceToggle = (serviceId) => {
    setSelectedServices(prev => {
      if (prev?.includes(serviceId)) {
        return prev?.filter(id => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  };

  const calculateTotal = () => {
    const selectedServiceData = services?.filter(service => 
      selectedServices?.includes(service?.id)
    );
    
    const totalPrice = selectedServiceData?.reduce((sum, service) => {
      return sum + parseFloat(service?.price?.replace('€', '')?.replace(',', '.'));
    }, 0);
    
    const totalDuration = selectedServiceData?.reduce((sum, service) => {
      const duration = parseInt(service?.duration?.split(' ')?.[0]);
      return sum + duration;
    }, 0);

    // Apply package discount if multiple services selected
    const discount = selectedServices?.length > 1 ? 0.1 : 0;
    const discountedPrice = totalPrice * (1 - discount);

    return {
      originalPrice: totalPrice,
      finalPrice: discountedPrice,
      discount: discount,
      duration: totalDuration,
      savings: totalPrice - discountedPrice
    };
  };

  const totals = calculateTotal();

  return (
    <div className="bg-card rounded-xl shadow-brand border border-border overflow-hidden">
      <div 
        className="p-6 cursor-pointer hover:bg-muted/50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Calculator" size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-foreground">
                Build Your Package
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Combine services and save with package pricing
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {selectedServices?.length > 0 && (
              <div className="text-right">
                <p className="font-body text-sm font-medium text-foreground">
                  {selectedServices?.length} service{selectedServices?.length !== 1 ? 's' : ''}
                </p>
                <p className="font-body text-xs text-accent">
                  {totals?.finalPrice?.toFixed(2)?.replace('.', ',')} €
                </p>
              </div>
            )}
            <Icon 
              name={isOpen ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className="text-muted-foreground"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="p-6 border-t border-border space-y-6">
          {/* Service Selection */}
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-foreground">
              Select Services
            </h4>
            
            <div className="space-y-3">
              {services?.map((service) => (
                <div
                  key={service?.id}
                  className={`p-4 rounded-lg border transition-all duration-200 ${
                    selectedServices?.includes(service?.id)
                      ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      checked={selectedServices?.includes(service?.id)}
                      onChange={() => handleServiceToggle(service?.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="font-body font-medium text-foreground">
                          {service?.name}
                        </h5>
                        <div className="text-right">
                          <p className="font-body text-sm font-medium text-foreground">
                            {service?.price}
                          </p>
                          <p className="font-body text-xs text-muted-foreground">
                            {service?.duration}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground font-body text-sm mt-1">
                        {service?.shortDescription || service?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Package Summary */}
          {selectedServices?.length > 0 && (
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <h4 className="font-headline text-lg font-semibold text-foreground mb-4">
                Package Summary
              </h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-muted-foreground">
                    Total Duration:
                  </span>
                  <span className="font-body text-sm font-medium text-foreground">
                    {totals?.duration} minutes
                  </span>
                </div>
                
                {totals?.discount > 0 && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-sm text-muted-foreground">
                        Original Price:
                      </span>
                      <span className="font-body text-sm text-muted-foreground line-through">
                        {totals?.originalPrice?.toFixed(2)?.replace('.', ',')} €
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-body text-sm text-success">
                        Package Discount (10%):
                      </span>
                      <span className="font-body text-sm text-success">
                        -{totals?.savings?.toFixed(2)?.replace('.', ',')} €
                      </span>
                    </div>
                  </>
                )}
                
                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <span className="font-body font-semibold text-foreground">
                    Total Price:
                  </span>
                  <span className="font-headline text-xl font-bold text-accent">
                    {totals?.finalPrice?.toFixed(2)?.replace('.', ',')} €
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Book Package Button */}
          {selectedServices?.length > 0 && (
            <Button
              variant="default"
              fullWidth
              onClick={() => onBookPackage(selectedServices, totals)}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Book Custom Package
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceComparison;