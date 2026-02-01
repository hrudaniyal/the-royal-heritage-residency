import React from 'react';
import { Link } from 'react-router-dom';
import { HOTEL_NAME, HOTEL_ADDRESS, HOTEL_PHONE, HOTEL_EMAIL } from '../constants';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-wide">
              ROYAL HERITAGE
            </h3>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Experience the perfect blend of traditional Indian hospitality and modern luxury. 
              Your sanctuary in the heart of the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/rooms" className="hover:text-accent transition-colors">Accommodations</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Photo Gallery</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact & Location</Link></li>
              <li><Link to="/book" className="hover:text-accent transition-colors">Book a Stay</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-accent mt-1 mr-3 shrink-0" size={20} />
                <span>{HOTEL_ADDRESS}</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-accent mr-3 shrink-0" size={20} />
                <span>{HOTEL_PHONE}</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-accent mr-3 shrink-0" size={20} />
                <span>{HOTEL_EMAIL}</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} {HOTEL_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;