import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BeforeAfterSlider = ({ transformations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const nextTransformation = () => {
    setCurrentIndex((prev) => 
      prev === transformations?.length - 1 ? 0 : prev + 1
    );
    setSliderPosition(50);
  };

  const prevTransformation = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? transformations?.length - 1 : prev - 1
    );
    setSliderPosition(50);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e) => {
    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = e?.clientX - rect?.left;
    const percentage = Math.max(0, Math.min(100, (x / rect?.width) * 100));
    setSliderPosition(percentage);
  };

  const currentTransformation = transformations?.[currentIndex];

  return (
    <div className="bg-card rounded-xl shadow-brand border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Shuffle" size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-foreground">
                Transformaciones de Clientes
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Vea resultados reales de nuestros barberos expertos
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={prevTransformation}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              disabled={transformations?.length <= 1}
            >
              <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
            </button>
            <span className="font-body text-sm text-muted-foreground px-2">
              {currentIndex + 1} / {transformations?.length}
            </span>
            <button
              onClick={nextTransformation}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              disabled={transformations?.length <= 1}
            >
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Before/After Slider */}
        <div 
          className="relative aspect-video rounded-lg overflow-hidden cursor-ew-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Before Image */}
          <div className="absolute inset-0">
            <Image
              src={currentTransformation?.before}
              alt="Before transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="font-body text-sm font-medium text-foreground">
                Before
              </span>
            </div>
          </div>

          {/* After Image */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={currentTransformation?.after}
              alt="After transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="font-body text-sm font-medium text-foreground">
                After
              </span>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Move" size={16} className="text-accent-foreground" />
            </div>
          </div>

          {/* Drag Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="font-body text-xs text-muted-foreground">
              Drag to compare
            </span>
          </div>
        </div>

        {/* Transformation Details */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-headline text-lg font-semibold text-foreground mb-2">
                {currentTransformation?.title}
              </h4>
              <p className="text-muted-foreground font-body text-sm mb-3">
                {currentTransformation?.description}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Scissors" size={16} className="text-accent" />
                  <span className="font-body text-muted-foreground">
                    Service: {currentTransformation?.service}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="User" size={16} className="text-accent" />
                  <span className="font-body text-muted-foreground">
                    Barber: {currentTransformation?.barber}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <span className="font-body text-muted-foreground">
                    Duration: {currentTransformation?.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        {transformations?.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {transformations?.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-accent' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;