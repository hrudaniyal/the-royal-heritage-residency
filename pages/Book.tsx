import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { ROOMS } from '../constants';
import { BookingFormData } from '../types';

const Book: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: 1
  });

  // Pre-select room if query param exists
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roomParam = params.get('room');
    if (roomParam) {
      setFormData(prev => ({ ...prev, roomType: roomParam }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Data Submitted:", formData);
    alert(`Thank you, ${formData.fullName}! Your booking request for ${formData.roomType} has been received. We will contact you at ${formData.phone} shortly.`);
  };

  return (
    <>
      <Hero 
        title="Book Your Stay" 
        subtitle="Reservations"
        backgroundImage="https://picsum.photos/id/48/1920/800"
      />

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden rounded-sm">
            
            <div className="bg-primary text-white p-6 text-center">
              <h2 className="text-2xl font-serif">Secure Reservation</h2>
              <p className="text-white/80 text-sm">Best Rate Guarantee</p>
            </div>

            <div className="p-8 md:p-12">
              <SectionTitle title="Guest Details" subtitle="Fill the form" />
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Personal Info */}
                <div className="md:col-span-2">
                   <h3 className="text-lg font-bold text-stone-700 border-b border-stone-200 pb-2 mb-4">Contact Information</h3>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-stone-200 bg-stone-50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-stone-200 bg-stone-50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    placeholder="+91 99999 99999"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-stone-200 bg-stone-50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                    placeholder="email@address.com"
                  />
                </div>

                {/* Booking Info */}
                <div className="md:col-span-2 mt-4">
                   <h3 className="text-lg font-bold text-stone-700 border-b border-stone-200 pb-2 mb-4">Stay Details</h3>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Check-in Date</label>
                  <input 
                    type="date" 
                    name="checkIn" 
                    value={formData.checkIn} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-stone-200 bg-stone-50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Check-out Date</label>
                  <input 
                    type="date" 
                    name="checkOut" 
                    value={formData.checkOut} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-stone-200 bg-stone-50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Room Type</label>
                  <select 
                    name="roomType" 
                    value={formData.roomType} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-stone-200 bg-stone-50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                  >
                    <option value="" disabled>Select a room</option>
                    {ROOMS.map(room => (
                      <option key={room.id} value={room.id}>
                        {room.name} (₹{room.price}/night)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Guests</label>
                  <select 
                    name="guests" 
                    value={formData.guests} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-stone-200 bg-stone-50 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2 mt-8">
                  <Button type="submit" variant="primary" className="w-full text-lg py-4">
                    Confirm Booking
                  </Button>
                  <p className="text-xs text-stone-500 text-center mt-4">
                    * No payment required today. Pay at property.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;