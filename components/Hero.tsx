import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showButton?: boolean;
  height?: 'full' | 'half';
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  showButton = false,
  height = 'half'
}) => {
  return (
    <div 
      className={`relative w-full ${height === 'full' ? 'h-screen' : 'h-[60vh] min-h-[400px]'} flex items-center justify-center bg-stone-900`}
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="block text-accent font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
          {subtitle}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight shadow-sm">
          {title}
        </h1>
        {showButton && (
          <div className="mt-8">
            <Button to="/rooms" variant="primary" className="text-lg px-8 py-4">
              Explore Rooms
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;