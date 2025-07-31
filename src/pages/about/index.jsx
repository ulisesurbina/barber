import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import PhilosophySection from './components/PhilosophySection';
import MasterBarbersSection from './components/MasterBarbersSection';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import CommunitySection from './components/CommunitySection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - BarberCraft Studio | Master Craftsmen & Heritage</title>
        <meta 
          name="description" 
          content="Discover the story behind BarberCraft Studio - where traditional barbering artistry meets contemporary style. Meet our master barbers and learn about our commitment to excellence." 
        />
        <meta name="keywords" content="about barbershop, master barbers, traditional barbering, grooming artistry, barbering heritage, professional barbers" />
        <meta property="og:title" content="About BarberCraft Studio - Master Craftsmen & Heritage" />
        <meta property="og:description" content="Learn about our journey from traditional barbering to modern craftsmanship. Meet our certified master barbers and discover our philosophy." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TimelineSection />
          <PhilosophySection />
          <MasterBarbersSection />
          <CraftsmanshipSection />
          <CommunitySection />
          <TestimonialsSection />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default AboutPage;