import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const Gallery: React.FC = () => {
  // Using picsum images to simulate a gallery
  const images = [
    { src: 'https://picsum.photos/id/42/600/400', class: 'md:col-span-2 md:row-span-2' }, // Large
    { src: 'https://picsum.photos/id/15/600/400', class: 'md:col-span-1 md:row-span-1' },
    { src: 'https://picsum.photos/id/16/600/400', class: 'md:col-span-1 md:row-span-1' },
    { src: 'https://picsum.photos/id/24/600/400', class: 'md:col-span-1 md:row-span-2' }, // Tall
    { src: 'https://picsum.photos/id/28/600/400', class: 'md:col-span-1 md:row-span-1' },
    { src: 'https://picsum.photos/id/29/600/400', class: 'md:col-span-1 md:row-span-1' },
    { src: 'https://picsum.photos/id/48/600/400', class: 'md:col-span-2 md:row-span-1' }, // Wide
  ];

  return (
    <>
      <Hero 
        title="Photo Gallery" 
        subtitle="A Visual Journey"
        backgroundImage="https://picsum.photos/id/50/1920/800"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Interiors & Exteriors" subtitle="Glimpse the Heritage" center />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {images.map((img, idx) => (
              <div key={idx} className={`relative group overflow-hidden ${img.class}`}>
                <img 
                  src={img.src} 
                  alt={`Gallery image ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;