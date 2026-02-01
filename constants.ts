import { Room } from './types';

export const HOTEL_NAME = "The Royal Heritage Residency";
export const HOTEL_ADDRESS = "12, MG Road, Indiranagar, Bangalore, Karnataka 560038";
export const HOTEL_PHONE = "+91 80 1234 5678";
export const HOTEL_EMAIL = "reservations@royalheritage.in";

export const ROOMS: Room[] = [
  {
    id: 'deluxe-king',
    name: 'Royal Deluxe King',
    price: 4500,
    description: 'Experience luxury in our spacious King room featuring a city view, work desk, and premium bedding. Perfect for business travelers.',
    capacity: 2,
    image: 'https://picsum.photos/id/10/800/600', // Scenic nature/room placeholder
    amenities: ['King Bed', 'Free Wi-Fi', 'Breakfast Included', 'City View'],
    featured: true,
  },
  {
    id: 'executive-suite',
    name: 'Executive Heritage Suite',
    price: 7500,
    description: 'Our signature suite offers a separate living area, traditional decor, and exclusive access to the executive lounge.',
    capacity: 3,
    image: 'https://picsum.photos/id/14/800/600',
    amenities: ['King Bed', 'Living Area', 'Bathtub', 'Lounge Access'],
    featured: true,
  },
  {
    id: 'family-studio',
    name: 'Family Garden Studio',
    price: 6000,
    description: 'Designed for families, this room features two queen beds and direct access to our serenity gardens.',
    capacity: 4,
    image: 'https://picsum.photos/id/15/800/600',
    amenities: ['2 Queen Beds', 'Garden Access', 'Mini Fridge', 'Smart TV'],
    featured: false,
  },
  {
    id: 'standard-twin',
    name: 'Comfort Twin Room',
    price: 3500,
    description: 'Cozy and functional, ideal for short stays or solo travelers needing twin bedding configurations.',
    capacity: 2,
    image: 'https://picsum.photos/id/20/800/600',
    amenities: ['2 Single Beds', 'Work Desk', 'Coffee Maker', 'Shower'],
    featured: false,
  }
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Book Now', path: '/book', isButton: true },
];