import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, HOTEL_PHONE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
              ROYAL HERITAGE
            </span>
            <span className={`text-[10px] uppercase tracking-widest ${scrolled ? 'text-accent' : 'text-stone-200'}`}>
              Residency
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              link.isButton ? (
                 <Link 
                  key={link.name}
                  to={link.path}
                  className="bg-accent hover:bg-orange-600 text-white px-5 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors ${
                    scrolled ? 'text-stone-700' : 'text-white/90'
                  } ${location.pathname === link.path ? 'text-accent border-b-2 border-accent' : ''}`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={scrolled ? 'text-stone-800' : 'text-white'} size={28} />
            ) : (
              <Menu className={scrolled ? 'text-stone-800' : 'text-white'} size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-900/95 z-40 transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', height: '100vh' }}
      >
        <button 
            className="absolute top-6 right-6 text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
        </button>

        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-2xl font-serif text-white hover:text-accent ${link.isButton ? 'border border-white px-8 py-3' : ''}`}
          >
            {link.name}
          </Link>
        ))}
        
        <div className="mt-8 flex flex-col items-center text-stone-400">
           <Phone size={20} className="mb-2 text-accent" />
           <p>{HOTEL_PHONE}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;