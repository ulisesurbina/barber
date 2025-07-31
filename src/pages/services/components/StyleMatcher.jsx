import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const StyleMatcher = ({ onStyleMatch }) => {
  const [preferences, setPreferences] = useState({
    faceShape: '',
    lifestyle: '',
    maintenance: '',
    hairType: ''
  });

  const [isOpen, setIsOpen] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const faceShapeOptions = [
    { value: 'oval', label: 'Oval' },
    { value: 'round', label: 'Round' },
    { value: 'square', label: 'Square' },
    { value: 'heart', label: 'Heart' },
    { value: 'diamond', label: 'Diamond' },
    { value: 'oblong', label: 'Oblong' }
  ];

  const lifestyleOptions = [
    { value: 'professional', label: 'Professional/Corporate' },
    { value: 'creative', label: 'Creative/Artistic' },
    { value: 'casual', label: 'Casual/Relaxed' },
    { value: 'active', label: 'Active/Sporty' },
    { value: 'trendy', label: 'Fashion-Forward' }
  ];

  const maintenanceOptions = [
    { value: 'low', label: 'Low Maintenance (Monthly visits)' },
    { value: 'medium', label: 'Medium Maintenance (Bi-weekly)' },
    { value: 'high', label: 'High Maintenance (Weekly styling)' }
  ];

  const hairTypeOptions = [
    { value: 'straight', label: 'Straight' },
    { value: 'wavy', label: 'Wavy' },
    { value: 'curly', label: 'Curly' },
    { value: 'coily', label: 'Coily' },
    { value: 'fine', label: 'Fine/Thin' },
    { value: 'thick', label: 'Thick/Coarse' }
  ];

  const styleRecommendations = {
    'oval-professional-low': {
      style: 'Classic Side Part',
      description: 'Timeless and professional, perfect for oval faces with minimal styling needs.',
      services: ['Classic Gentleman Cut', 'Executive Express']
    },
    'round-creative-medium': {
      style: 'Textured Quiff',
      description: 'Adds height and dimension, ideal for creative professionals.',
      services: ['Signature Style Cut', 'Modern Gentleman Package']
    },
    'square-active-low': {
      style: 'Military Fade',
      description: 'Clean, structured cut that complements strong jawlines.',
      services: ['Precision Fade', 'Executive Express']
    },
    'heart-trendy-high': {
      style: 'Pompadour',
      description: 'Bold style that balances wider foreheads with dramatic volume.',
      services: ['Signature Style Cut', 'Complete Gentleman Experience']
    }
  };

  const handlePreferenceChange = (field, value) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateRecommendations = () => {
    const key = `${preferences?.faceShape}-${preferences?.lifestyle}-${preferences?.maintenance}`;
    const recommendation = styleRecommendations?.[key] || {
      style: 'Consultation Recommended',
      description: 'Based on your unique preferences, we recommend a personal consultation to find your perfect style.',
      services: ['Style Consultation', 'Classic Gentleman Cut']
    };

    setRecommendations([recommendation]);
    onStyleMatch && onStyleMatch(recommendation);
  };

  const isFormComplete = preferences?.faceShape && preferences?.lifestyle && preferences?.maintenance && preferences?.hairType;

  return (
    <div className="bg-card rounded-xl shadow-brand border border-border overflow-hidden">
      <div 
        className="p-6 cursor-pointer hover:bg-muted/50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-foreground">
                Style Matcher
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                Find your perfect cut based on your features and lifestyle
              </p>
            </div>
          </div>
          <Icon 
            name={isOpen ? "ChevronUp" : "ChevronDown"} 
            size={20} 
            className="text-muted-foreground"
          />
        </div>
      </div>
      {isOpen && (
        <div className="p-6 border-t border-border space-y-6">
          {/* Preference Form */}
          <div className="grid md:grid-cols-2 gap-4">
            <Select
              label="Face Shape"
              placeholder="Select your face shape"
              options={faceShapeOptions}
              value={preferences?.faceShape}
              onChange={(value) => handlePreferenceChange('faceShape', value)}
              className="mb-4"
            />

            <Select
              label="Lifestyle"
              placeholder="Choose your lifestyle"
              options={lifestyleOptions}
              value={preferences?.lifestyle}
              onChange={(value) => handlePreferenceChange('lifestyle', value)}
              className="mb-4"
            />

            <Select
              label="Maintenance Preference"
              placeholder="How often do you style?"
              options={maintenanceOptions}
              value={preferences?.maintenance}
              onChange={(value) => handlePreferenceChange('maintenance', value)}
              className="mb-4"
            />

            <Select
              label="Hair Type"
              placeholder="Select your hair type"
              options={hairTypeOptions}
              value={preferences?.hairType}
              onChange={(value) => handlePreferenceChange('hairType', value)}
              className="mb-4"
            />
          </div>

          {/* Generate Button */}
          <Button
            variant="default"
            fullWidth
            disabled={!isFormComplete}
            onClick={generateRecommendations}
            className="bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50"
          >
            <Icon name="Wand2" size={16} className="mr-2" />
            Find My Perfect Style
          </Button>

          {/* Recommendations */}
          {recommendations?.length > 0 && (
            <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
              <div className="flex items-start space-x-3">
                <Icon name="Target" size={20} className="text-accent mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-headline text-lg font-semibold text-foreground mb-2">
                    Recommended Style: {recommendations?.[0]?.style}
                  </h4>
                  <p className="text-muted-foreground font-body text-sm mb-4">
                    {recommendations?.[0]?.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="font-body text-sm font-medium text-foreground">
                      Suggested Services:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {recommendations?.[0]?.services?.map((service, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StyleMatcher;