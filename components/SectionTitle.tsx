import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = false, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <span className={`block text-sm font-bold uppercase tracking-widest mb-2 ${light ? 'text-accent' : 'text-accent'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-serif font-bold ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className={`mt-4 w-24 h-1 bg-accent ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;