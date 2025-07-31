import React from 'react';
import Header from '../../components/ui/Header';
import LocationHero from './components/LocationHero';
import StudioDetails from './components/StudioDetails';
import InteractiveMap from './components/InteractiveMap';
import VirtualTour from './components/VirtualTour';
import NeighborhoodGuide from './components/NeighborhoodGuide';

const LocationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <LocationHero />
        <StudioDetails />
        <InteractiveMap />
        <VirtualTour />
        <NeighborhoodGuide />
      </main>
    </div>
  );
};

export default LocationPage;