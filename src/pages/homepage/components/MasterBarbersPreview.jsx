import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const MasterBarbersPreview = () => {
  const masterBarbers = [
    {
      id: 1,
      name: "Marcus Rodriguez",
      title: "Master Barber & Owner",
      experience: "12 years",
      specialty: "Classic Cuts & Straight Razor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      rating: 4.9,
      completedCuts: "2,500+",
      signature: "The Gentleman\'s Classic",
      bio: `Marcus brings old-world craftsmanship to modern styling. Trained in traditional European techniques, he specializes in precision cuts and straight razor shaves that have made him a legend in the industry.`,
      certifications: ["Master Barber License", "Straight Razor Certified", "European Techniques"],
      socialProof: "Featured in GQ Magazine 2023",
      availability: "Mon-Fri, Sat AM"
    },
    {
      id: 2,
      name: "James Thompson",
      title: "Senior Barber",
      experience: "8 years",
      specialty: "Beard Sculpting & Modern Styles",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      rating: 4.8,
      completedCuts: "1,800+",
      signature: "The Executive Edge",
      bio: `James is an artist when it comes to beard sculpting and contemporary cuts. His eye for detail and understanding of facial structure creates looks that enhance natural features and boost confidence.`,
      certifications: ["Advanced Beard Styling", "Modern Cut Techniques", "Color Specialist"],
      socialProof: "Instagram: 15K followers",
      availability: "Tue-Sat"
    },
    {
      id: 3,
      name: "Antonio Silva",
      title: "Master Craftsman",
      experience: "15 years",
      specialty: "Gentleman\'s Grooming & Hot Towel",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
      rating: 5.0,
      completedCuts: "3,200+",
      signature: "The Royal Treatment",
      bio: `Antonio represents the pinnacle of barbering artistry. His hot towel treatments and grooming rituals are legendary, creating an experience that transcends a simple haircut into a luxury lifestyle moment.`,
      certifications: ["Master Craftsman", "Hot Towel Specialist", "Luxury Grooming Expert"],
      socialProof: "Client retention rate: 98%",
      availability: "Wed-Sun"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Icon name="Users" size={20} className="text-accent mr-2" />
            <span className="text-accent font-body font-medium">Meet the Masters</span>
          </div>
          
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-6">
            Master <span className="text-gradient-gold">Barbers</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of master craftsmen brings decades of combined experience, each with their own 
            signature techniques and specialties that define The Good Style experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {masterBarbers?.map((barber, index) => (
            <motion.div
              key={barber?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl overflow-hidden card-elevated"
            >
              {/* Profile Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={barber?.avatar}
                  alt={barber?.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={16} className="text-white fill-current" />
                    <span className="text-white text-sm font-bold">{barber?.rating}</span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">{barber?.experience}</span>
                </div>

                {/* Availability */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between text-white text-sm">
                      <span>Available:</span>
                      <span className="font-medium">{barber?.availability}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-headline text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                    {barber?.name}
                  </h3>
                  <p className="text-accent font-medium text-sm">{barber?.title}</p>
                  <p className="text-muted-foreground text-sm">{barber?.specialty}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{barber?.completedCuts}</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{barber?.rating}/5</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>

                {/* Signature Service */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Icon name="Award" size={16} className="text-accent mr-2" />
                    <span className="text-sm font-medium text-primary">Signature Service</span>
                  </div>
                  <p className="text-sm text-accent font-medium">{barber?.signature}</p>
                </div>

                {/* Bio */}
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {barber?.bio}
                </p>

                {/* Certifications */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {barber?.certifications?.slice(0, 2)?.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                    {barber?.certifications?.length > 2 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{barber?.certifications?.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Social Proof */}
                <div className="mb-6">
                  <div className="flex items-center text-xs text-success">
                    <Icon name="TrendingUp" size={14} className="mr-1" />
                    {barber?.socialProof}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                    variant="default"
                    fullWidth
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    Book with {barber?.name?.split(' ')?.[0]}
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-sm"
                    iconName="User"
                    iconPosition="left"
                  >
                    View Full Profile
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              Conoce a tu pareja perfecta
            </h3>
            <p className="font-body text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Cada uno de nuestros maestros barberos aporta una experiencia y personalidad únicas. Descubre quién se adapta perfectamente a tu estilo y reserva tu consulta hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  iconName="Users"
                  iconPosition="left"
                >
                  Conozca a todos nuestros barberos
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Programar consulta
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterBarbersPreview;