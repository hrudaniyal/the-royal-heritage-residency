import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import RoomCard from '../components/RoomCard';
import { ROOMS } from '../constants';

const Rooms: React.FC = () => {
  return (
    <>
      <Hero 
        title="Our Accommodations" 
        subtitle="Stay in Comfort"
        backgroundImage="https://picsum.photos/id/12/1920/800"
      />

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Select Your Space" 
            subtitle="Designed for Relaxation" 
          />
          
          <p className="max-w-2xl text-stone-600 mb-12">
            Each of our rooms is a blend of comfort and style, equipped with modern amenities to make your stay in Bangalore truly restful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;