import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import BusinessHours from './components/BusinessHours';
import FAQ from './components/FAQ';
import SocialConnect from './components/SocialConnect';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - The Good Style Website</title>
        <meta name="description" content="Contacta con The Good Style Website. Múltiples formas de comunicación: teléfono, email, WhatsApp. Consultas gratuitas, horarios flexibles y atención personalizada en Madrid." />
        <meta name="keywords" content="contacto barbería Madrid, reservar cita barbero, consulta estilo masculino, barbería profesional Madrid, The Good Style Website contacto" />
        <meta property="og:title" content="Contacto - The Good Style Website" />
        <meta property="og:description" content="Múltiples canales de contacto para tu comodidad. Teléfono, email, WhatsApp y formulario web. Respuesta garantizada en 24h." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thegoodstyle.es/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <ContactHero />
          <ContactMethods />
          <ContactForm />
          <BusinessHours />
          <FAQ />
          <SocialConnect />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="font-headline text-xl font-bold mb-4">The Good Style</h3>
                <p className="font-body text-white/80 mb-4 leading-relaxed">
                  Donde la tradición se encuentra con la innovación. Más que una barbería, somos artesanos del estilo masculino.
                </p>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200">
                    <span className="text-sm font-bold">IG</span>
                  </button>
                  <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200">
                    <span className="text-sm font-bold">FB</span>
                  </button>
                  <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-200">
                    <span className="text-sm font-bold">TT</span>
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="font-headline font-bold mb-4">Contacto Rápido</h4>
                <div className="space-y-2 font-body text-white/80">
                  <p>+34 912 345 678</p>
                  <p>info@thegoodstyle.com</p>
                  <p>Calle Gran Vía 123, Madrid</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-headline font-bold mb-4">Horarios</h4>
                <div className="space-y-2 font-body text-white/80 text-sm">
                  <p>Lun-Vie: 9:00-20:00</p>
                  <p>Sábado: 8:00-19:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="font-body text-white/60 text-sm">
                © {new Date()?.getFullYear()} The Good Style. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;