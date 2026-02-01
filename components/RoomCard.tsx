import React from 'react';
import { Room } from '../types';
import Button from './Button';
import { Users, Wifi, Wind } from 'lucide-react';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="group bg-white rounded-none shadow-lg overflow-hidden border border-stone-100 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 font-serif">
          ₹{room.price.toLocaleString('en-IN')} <span className="text-xs font-sans opacity-80">/ night</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-stone-800">{room.name}</h3>
        </div>
        
        <p className="text-stone-600 mb-6 text-sm leading-relaxed flex-grow">
          {room.description}
        </p>
        
        <div className="flex items-center space-x-4 mb-6 text-stone-500 text-xs">
          <div className="flex items-center">
            <Users size={16} className="mr-1 text-accent" />
            <span>Up to {room.capacity}</span>
          </div>
          <div className="flex items-center">
            <Wifi size={16} className="mr-1 text-accent" />
            <span>Free Wifi</span>
          </div>
          <div className="flex items-center">
            <Wind size={16} className="mr-1 text-accent" />
            <span>AC</span>
          </div>
        </div>

        <Button to={`/book?room=${room.id}`} variant="outline" className="w-full">
          Book This Room
        </Button>
      </div>
    </div>
  );
};

export default RoomCard;