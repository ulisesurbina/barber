import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceCard from './components/ServiceCard';
import StyleMatcher from './components/StyleMatcher';
import ServiceComparison from './components/ServiceComparison';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: 'Grid3X3' },
    { id: 'cuts', name: 'Classic Cuts', icon: 'Scissors' },
    { id: 'shaves', name: 'Signature Shaves', icon: 'Zap' },
    { id: 'beard', name: 'Beard Services', icon: 'User' },
    { id: 'packages', name: 'Grooming Packages', icon: 'Package' }
  ];

  const services = [
    {
      id: 1,
      category: 'cuts',
      name: 'Classic Gentleman Cut',
      price: '45,00 €',
      duration: '45 min',
      icon: 'Scissors',
      description: 'Timeless precision cutting with traditional techniques, styled to perfection for the modern gentleman.',
      includes: [
        'Consultation and style assessment',
        'Precision scissor cut',
        'Hot towel treatment',
        'Styling with premium products',
        'Finishing touches and detailing'
      ],
      bestFor: [
        'Professional environments',
        'Classic style preferences',
        'Low maintenance routines',
        'First-time clients'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=600&fit=crop'
      ],
      recommendedBarbers: [
        {
          name: 'Miguel Santos',
          specialty: 'Classic Cuts',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Carlos Rodriguez',
          specialty: 'Traditional Styling',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        }
      ]
    },
    {
      id: 2,
      category: 'cuts',
      name: 'Executive Express',
      price: '35,00 €',
      duration: '30 min',
      icon: 'Zap',
      description: 'Quick, professional cut designed for busy executives who demand quality without compromise.',
      includes: [
        'Express consultation',
        'Precision cut',
        'Quick styling',
        'Professional finish'
      ],
      bestFor: [
        'Busy professionals',
        'Regular maintenance',
        'Consistent style',
        'Time-conscious clients'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=800&h=600&fit=crop'
      ],
      recommendedBarbers: [
        {
          name: 'Diego Martinez',
          specialty: 'Express Services',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
        }
      ]
    },
    {
      id: 3,
      category: 'shaves',
      name: 'Traditional Hot Towel Shave',
      price: '40,00 €',
      duration: '50 min',
      icon: 'Zap',
      description: 'Luxurious traditional shave experience with hot towels, premium oils, and straight razor precision.',
      includes: [
        'Pre-shave oil application',
        'Multiple hot towel treatments',
        'Straight razor shave',
        'Post-shave balm',
        'Face massage'
      ],
      bestFor: [
        'Special occasions',
        'Relaxation seekers',
        'Traditional experience lovers',
        'Sensitive skin care'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop'
      ],
      recommendedBarbers: [
        {
          name: 'Antonio Ruiz',
          specialty: 'Traditional Shaves',
          avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face'
        }
      ]
    },
    {
      id: 4,
      category: 'beard',
      name: 'Beard Sculpting & Trim',
      price: '30,00 €',
      duration: '35 min',
      icon: 'User',
      description: 'Expert beard shaping and trimming to enhance your facial structure and personal style.',
      includes: [
        'Beard consultation',
        'Precision trimming',
        'Shape sculpting',
        'Beard oil treatment',
        'Styling guidance'
      ],
      bestFor: [
        'Beard maintenance',
        'Shape enhancement',
        'Professional grooming',
        'Style experimentation'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
      ],
      recommendedBarbers: [
        {
          name: 'Luis Garcia',
          specialty: 'Beard Specialist',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face'
        }
      ]
    },
    {
      id: 5,
      category: 'packages',
      name: 'Complete Gentleman Experience',
      price: '85,00 €',
      duration: '90 min',
      icon: 'Package',
      description: 'The ultimate grooming experience combining precision cut, traditional shave, and premium styling.',
      includes: [
        'Style consultation',
        'Precision cut',
        'Hot towel shave',
        'Beard trim and styling',
        'Scalp massage',
        'Premium product styling',
        'Grooming advice'
      ],
      bestFor: [
        'Special occasions',
        'Complete makeovers',
        'Luxury experience',
        'Gift recipients'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop'
      ],
      recommendedBarbers: [
        {
          name: 'Miguel Santos',
          specialty: 'Complete Services',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        },
        {
          name: 'Antonio Ruiz',
          specialty: 'Luxury Experiences',
          avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face'
        }
      ]
    },
    {
      id: 6,
      category: 'packages',
      name: 'Modern Gentleman Package',
      price: '65,00 €',
      duration: '60 min',
      icon: 'Package',
      description: 'Contemporary styling package perfect for the modern professional seeking refined grooming.',
      includes: [
        'Style consultation',
        'Modern precision cut',
        'Beard trim',
        'Styling with contemporary products',
        'Maintenance advice'
      ],
      bestFor: [
        'Modern professionals',
        'Style updates',
        'Regular maintenance',
        'Contemporary looks'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=800&h=600&fit=crop'
      ],
      recommendedBarbers: [
        {
          name: 'Diego Martinez',
          specialty: 'Modern Styles',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
        }
      ]
    }
  ];

  const transformations = [
    {
      id: 1,
      title: 'Executive Transformation',
      description: 'Professional makeover for corporate leadership role, combining classic cut with modern styling.',
      before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face',
      after: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop&crop=face',
      service: 'Complete Gentleman Experience',
      barber: 'Miguel Santos',
      duration: '90 min'
    },
    {
      id: 2,
      title: 'Modern Style Update',
      description: 'Contemporary cut and beard sculpting for a fresh, professional appearance.',
      before: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop&crop=face',
      after: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop&crop=face',
      service: 'Modern Gentleman Package',
      barber: 'Diego Martinez',
      duration: '60 min'
    },
    {
      id: 3,
      title: 'Classic Gentleman Revival',
      description: 'Traditional barbering techniques bringing timeless elegance to modern styling.',
      before: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop&crop=face',
      after: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=800&h=600&fit=crop&crop=face',
      service: 'Classic Gentleman Cut',
      barber: 'Carlos Rodriguez',
      duration: '45 min'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services?.filter(service => service?.category === selectedCategory);

  const handleBookService = (service) => {
    setBookingModal({ isOpen: true, service });
  };

  const handleBookPackage = (selectedServiceIds, totals) => {
    const selectedServices = services?.filter(service => 
      selectedServiceIds?.includes(service?.id)
    );
    setBookingModal({ 
      isOpen: true, 
      service: { 
        name: 'Custom Package', 
        services: selectedServices,
        totals 
      } 
    });
  };

  const handleStyleMatch = (recommendation) => {
    console.log('Style recommendation:', recommendation);
  };

  const closeBookingModal = () => {
    setBookingModal({ isOpen: false, service: null });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services - BarberCraft Studio | Premium Grooming Services</title>
        <meta name="description" content="Discover our premium barbering services including classic cuts, signature shaves, beard services, and grooming packages. Expert craftsmanship meets modern style." />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Servicios de
              <span className="text-gradient-gold block">Barbería Premium</span>
            </h1>
            <p className="font-body text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Descubre nuestros servicios de barbería artesanal donde la tradición se encuentra con la innovación. 
              Cada corte es una obra de arte, cada afeitado una experiencia de lujo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Reservar Cita
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora nuestra gama completa de servicios de barbería premium, 
              diseñados para el caballero moderno que aprecia la calidad y el estilo.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setSelectedCategory(category?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-body font-medium transition-all duration-300 ${
                  selectedCategory === category?.id
                    ? 'bg-accent text-accent-foreground shadow-brand'
                    : 'bg-card text-foreground hover:bg-accent/10 hover:text-accent border border-border'
                }`}
              >
                <Icon name={category?.icon} size={20} />
                <span>{category?.name}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {filteredServices?.map((service) => (
              <ServiceCard
                key={service?.id}
                service={service}
                onBookService={handleBookService}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Interactive Tools Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Herramientas Interactivas
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Utiliza nuestras herramientas especializadas para encontrar el estilo perfecto 
              y crear paquetes personalizados que se adapten a tus necesidades.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <StyleMatcher onStyleMatch={handleStyleMatch} />
            <ServiceComparison 
              services={services} 
              onBookPackage={handleBookPackage} 
            />
          </div>
        </div>
      </section>
      {/* Transformations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transformaciones Reales
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre el poder transformador de nuestros servicios a través de 
              casos reales de nuestros clientes satisfechos.
            </p>
          </div>

          <BeforeAfterSlider transformations={transformations} />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para tu Transformación?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8">
            Reserva tu cita hoy y experimenta la diferencia de la barbería artesanal. 
            Nuestros maestros barberos están listos para crear tu look perfecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Reservar Ahora
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>
      {/* Booking Modal */}
      {bookingModal?.isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl shadow-brand border border-border max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="font-headline text-xl font-bold text-foreground">
                  Reservar Servicio
                </h3>
                <button
                  onClick={closeBookingModal}
                  className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
                >
                  <Icon name="X" size={20} className="text-muted-foreground" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <Icon name="Calendar" size={48} className="text-accent mx-auto mb-4" />
                <h4 className="font-headline text-lg font-semibold text-foreground mb-2">
                  {bookingModal?.service?.name}
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Para completar tu reserva, por favor llámanos o visita nuestro estudio.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="Phone" size={16} className="text-accent" />
                    <span className="font-body text-sm font-medium text-foreground">
                      Teléfono
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground ml-7">
                    +34 912 345 678
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <span className="font-body text-sm font-medium text-foreground">
                      Dirección
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground ml-7">
                    Calle Gran Vía, 123<br />
                    28013 Madrid, España
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="Clock" size={16} className="text-accent" />
                    <span className="font-body text-sm font-medium text-foreground">
                      Horario
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground ml-7">
                    Lun-Vie: 9:00 - 20:00<br />
                    Sáb: 9:00 - 18:00<br />
                    Dom: Cerrado
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  variant="default"
                  fullWidth
                  onClick={closeBookingModal}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Entendido
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Scissors" size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold">BarberCraft</h3>
                  <p className="font-accent text-sm text-accent -mt-1">Studio</p>
                </div>
              </div>
              <p className="text-white/80 font-body text-sm mb-4">
                Donde la tradición se encuentra con la innovación. 
                Experimentamos la barbería como un arte, creando estilos únicos para el caballero moderno.
              </p>
            </div>
            
            <div>
              <h4 className="font-headline text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 font-body text-sm text-white/80">
                <li>Cortes Clásicos</li>
                <li>Afeitados Tradicionales</li>
                <li>Cuidado de Barba</li>
                <li>Paquetes Premium</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-headline text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 font-body text-sm text-white/80">
                <li>+34 912 345 678</li>
                <li>info@barbercraftstudio.es</li>
                <li>Calle Gran Vía, 123</li>
                <li>28013 Madrid, España</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="font-body text-sm text-white/60">
              © {new Date()?.getFullYear()} BarberCraft Studio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;