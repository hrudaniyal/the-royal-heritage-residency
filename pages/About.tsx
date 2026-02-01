import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <>
      <Hero 
        title="Our Story" 
        subtitle="Tradition Meets Luxury"
        backgroundImage="https://picsum.photos/id/49/1920/800"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div>
              <SectionTitle title="Heritage & Hospitality" subtitle="Since 1998" />
              <div className="prose prose-stone text-stone-600">
                <p className="mb-4">
                  Founded over two decades ago, The Royal Heritage Residency started as a small family-run guesthouse 
                  intended to provide a warm, home-like environment for travelers visiting Bangalore. 
                </p>
                <p className="mb-4">
                  Over the years, we have evolved into a premier boutique hotel, expanding our facilities while 
                  maintaining the core values of traditional Indian hospitality ("Atithi Devo Bhava"). 
                  Our architecture reflects the rich colonial history of the region, blended seamlessly with modern aesthetics.
                </p>
                <p>
                  Today, we are proud to host guests from all over the world, offering them a quiet sanctuary amidst 
                  the bustling energy of the city.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                   <h3 className="text-4xl font-serif text-accent font-bold">25+</h3>
                   <p className="text-sm uppercase tracking-wider mt-2">Years of Service</p>
                </div>
                <div>
                   <h3 className="text-4xl font-serif text-accent font-bold">10k+</h3>
                   <p className="text-sm uppercase tracking-wider mt-2">Happy Guests</p>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative pl-8 pb-8">
              <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-stone-100 -z-10 rounded-tr-[50px]"></div>
              <img 
                src="https://picsum.photos/id/60/800/1000" 
                alt="Hotel Interior" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute bottom-12 left-0 bg-white p-6 shadow-lg max-w-xs border-l-4 border-accent hidden md:block">
                <p className="font-serif italic text-stone-700">"Service is not just a duty, it's a privilege to serve our guests."</p>
                <p className="text-xs font-bold mt-2 uppercase text-accent">- General Manager</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-stone-900 text-white">
         <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
            <p className="text-xl text-stone-300 font-light leading-relaxed">
              "To create memorable experiences by providing personalized service, elegant comfort, 
              and a taste of local culture, ensuring every guest feels like royalty."
            </p>
         </div>
      </section>
    </>
  );
};

export default About;