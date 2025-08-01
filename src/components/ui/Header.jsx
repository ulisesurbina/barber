import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services', icon: 'Scissors' },
    { name: 'About', path: '/about', icon: 'Users' },
    { name: 'Location', path: '/location', icon: 'MapPin' },
    { name: 'Contact', path: '/contact', icon: 'Phone' }
  ];

  const secondaryItems = [
    { name: "Gentleman\'s Journal", path: '/gentleman-s-journal', icon: 'BookOpen' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-brand shadow-brand' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <Icon 
                  name="Scissors" 
                  size={20} 
                  color="white" 
                  className="transform group-hover:rotate-12 transition-transform duration-300" 
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-headline text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                The Good Style
              </h1>
              <p className="font-accent text-sm text-secondary -mt-1">Website</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative font-body font-medium transition-all duration-300 group ${
                  isActivePath(item?.path)
                    ? 'text-accent' :'text-foreground hover:text-accent'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </span>
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActivePath(item?.path) 
                      ? 'w-full' :'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors duration-300 font-body font-medium">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-brand opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-body transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      isActivePath(item?.path)
                        ? 'bg-accent/10 text-accent' :'text-foreground hover:bg-muted hover:text-accent'
                    }`}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 visible transform translate-y-0' 
              : 'opacity-0 invisible transform -translate-y-4'
          }`}
        >
          <nav className="px-4 py-6 space-y-4">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 p-3 rounded-lg font-body font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-accent/10 text-accent' :'text-foreground hover:bg-muted hover:text-accent'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            <div className="border-t border-border pt-4 mt-4">
              {secondaryItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 p-3 rounded-lg font-body font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-accent/10 text-accent' :'text-foreground hover:bg-muted hover:text-accent'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>
            
            <div className="border-t border-border pt-4 mt-4">
              <Button 
                variant="default" 
                fullWidth
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Reserva tu experiencia
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;