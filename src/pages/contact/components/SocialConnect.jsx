import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialConnect = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@barbercraftstudio",
      description: "Transformaciones diarias, técnicas de corte y contenido behind-the-scenes",
      followers: "12.5K",
      icon: "Instagram",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      url: "https://instagram.com/barbercraftstudio"
    },
    {
      name: "Facebook",
      handle: "BarberCraft Studio Madrid",
      description: "Comunidad, eventos especiales y testimonios de clientes satisfechos",
      followers: "8.2K",
      icon: "Facebook",
      color: "bg-blue-600",
      url: "https://facebook.com/barbercraftstudio"
    },
    {
      name: "TikTok",
      handle: "@barbercraftstudio",
      description: "Tutoriales rápidos, transformaciones y tendencias de estilo masculino",
      followers: "25.8K",
      icon: "Music",
      color: "bg-black",
      url: "https://tiktok.com/@barbercraftstudio"
    },
    {
      name: "YouTube",
      handle: "BarberCraft Studio",
      description: "Tutoriales completos, entrevistas y documentales de barbería tradicional",
      followers: "4.1K",
      icon: "Play",
      color: "bg-red-600",
      url: "https://youtube.com/barbercraftstudio"
    }
  ];

  const communityFeatures = [
    {
      title: "Galería de Transformaciones",
      description: "Comparte tu antes y después usando #BarberCraftTransformation",
      icon: "Camera",
      action: "Ver Galería"
    },
    {
      title: "Consejos Semanales",
      description: "Recibe tips de cuidado y estilo directamente de nuestros maestros barberos",
      icon: "Lightbulb",
      action: "Suscribirse"
    },
    {
      title: "Comunidad VIP",
      description: "Acceso exclusivo a ofertas, eventos privados y contenido premium",
      icon: "Crown",
      action: "Unirse"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Síguenos en Redes Sociales
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Únete a nuestra comunidad digital para inspiración diaria, consejos de expertos y las últimas tendencias en barbería.
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms?.map((platform, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 card-elevated group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${platform?.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={platform?.icon} size={28} color="white" />
                </div>
                
                <h3 className="font-headline text-lg font-bold text-foreground mb-2">
                  {platform?.name}
                </h3>
                
                <p className="font-body text-sm text-accent font-medium mb-3">
                  {platform?.handle}
                </p>
                
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {platform?.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Icon name="Users" size={16} color="var(--color-accent)" />
                  <span className="font-body text-sm font-medium text-accent">
                    {platform?.followers} seguidores
                  </span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  fullWidth
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:shadow-lg"
                  onClick={() => window.open(platform?.url, '_blank')}
                >
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Seguir
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Features */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
              Únete a Nuestra Comunidad
            </h3>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Más que redes sociales, somos una comunidad de hombres que valoran el estilo, la calidad y la tradición.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityFeatures?.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center card-elevated">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                  <Icon name={feature?.icon} size={24} color="var(--color-accent)" />
                </div>
                
                <h4 className="font-headline text-lg font-bold text-foreground mb-3">
                  {feature?.title}
                </h4>
                
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {feature?.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  {feature?.action}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <Icon name="Mail" size={48} color="var(--color-accent)" className="mx-auto mb-6" />
            
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-4">
              Newsletter Exclusivo
            </h3>
            
            <p className="font-body text-white/90 mb-8 leading-relaxed">
              Recibe consejos de barbería, ofertas especiales y las últimas tendencias directamente en tu email. Solo contenido de valor, sin spam.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent font-body"
              />
              <Button 
                variant="default"
                className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap"
              >
                <Icon name="Send" size={18} className="mr-2" />
                Suscribirse
              </Button>
            </div>
            
            <p className="font-body text-xs text-white/60 mt-4">
              Puedes cancelar tu suscripción en cualquier momento. Respetamos tu privacidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;