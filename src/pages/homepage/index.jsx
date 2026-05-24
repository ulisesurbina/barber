import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LiveBookingWidget from './components/LiveBookingWidget';
import OurCraftSection from './components/OurCraftSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import MasterBarbersPreview from './components/MasterBarbersPreview';
import InstagramFeed from './components/InstagramFeed';
import PerformanceMetrics from './components/PerformanceMetrics';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>The Good Style | Barbería & Estilo</title>
        <meta name="description" content="Cortes, barbería y cuidado personal con atención profesional y estilos personalizados. Reserva tu cita en The Good Style." />
        <meta name="keywords" content="barbería, cortes de cabello, barber shop, fade, corte moderno, perfilado de barba, estilo masculino, barbería en México" />
        <meta property="og:title" content="The Good Style" />
        <meta property="og:description" content="Estilo, detalle y atención personalizada en cada servicio. Reserva tu servicio hoy." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <LiveBookingWidget />
          <OurCraftSection />
          <TestimonialCarousel />
          <MasterBarbersPreview />
          <PerformanceMetrics />
          <InstagramFeed />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
                    <img
                      src="/assets/images/logo.png"
                      alt="The Good Style Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold">The Good Style</h3>
                    <p className="font-accent text-accent">Barbería & Estilo</p>
                  </div>
                </div>
                <p className="text-gray-300 font-body leading-relaxed max-w-md mb-6">
                  Un espacio dedicado al estilo, la atención personalizada y el cuidado personal. Trabajamos cada servicio con detalle para ofrecer una experiencia cómoda, profesional y adaptada a cada cliente.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/genoveva_canales" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/tuyyospqs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-headline text-lg font-semibold mb-4">Secciones</h4>
                <ul className="space-y-2 font-body">
                  <li><a href="/services"onClick={(e) => e.preventDefault()}  className="text-gray-300 opacity-50 cursor-not-allowed">Servicios</a></li>
                  <li><a href="/about" className="text-gray-300 opacity-50 cursor-not-allowed">Sobre Nosotros</a></li>
                  <li><a href="/location" className="text-gray-300 opacity-50 cursor-not-allowed">Ubicación</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-accent transition-colors">Contacto</a></li>
                  {/* <li><a href="/gentleman-s-journal" className="text-gray-300 hover:text-accent transition-colors">Gentleman's Journal</a></li> */}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-headline text-lg font-semibold mb-4">Contáctanos</h4>
                <div className="space-y-3 font-body text-gray-300">
                  <div>
                    <p>Manzana 28</p>
                    <p>Geovillas de San Isidro</p>
                    <p>La Paz, EDOMEX C.P. 56516</p>
                  </div>
                  <div>
                    <p className="text-accent font-medium">(+52) 55-1232-7063</p>
                    <p>gcfcanales@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-medium">Horarios:</p>
                    <p>Lunes a Viernes: 12PM - 11:30PM</p>
                    <p>Sábado y Domingo: 12PM - 11:30PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 font-body text-sm">
                © {new Date()?.getFullYear()} The Good Style. Todos los derechos reservados.
              </p>
              {/* <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">Aviso de privacidad</a>
                <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">Términos y condiciones</a>
              </div> */}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;