import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { HOTEL_ADDRESS, HOTEL_EMAIL, HOTEL_PHONE } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message Sent!");
    alert("Thank you for your message. We will get back to you shortly.");
  };

  return (
    <>
      <Hero 
        title="Contact Us" 
        subtitle="Get in Touch"
        backgroundImage="https://picsum.photos/id/20/1920/800"
      />

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="bg-white p-10 shadow-lg">
              <SectionTitle title="Information" subtitle="Reach Out" />
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-accent mr-4 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Location</h4>
                    <p className="text-stone-600">{HOTEL_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-accent mr-4 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Phone</h4>
                    <p className="text-stone-600">{HOTEL_PHONE}</p>
                    <p className="text-stone-500 text-sm">Mon-Sun, 24 Hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-accent mr-4 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Email</h4>
                    <p className="text-stone-600">{HOTEL_EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-accent mr-4 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Check-in / Check-out</h4>
                    <p className="text-stone-600">Check-in: 2:00 PM</p>
                    <p className="text-stone-600">Check-out: 11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 shadow-lg">
              <SectionTitle title="Send a Message" subtitle="Inquiries" />
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 border border-stone-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent bg-stone-50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 border border-stone-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent bg-stone-50" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Message</label>
                  <textarea rows={4} required className="w-full px-4 py-3 border border-stone-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent bg-stone-50" placeholder="How can we help you?"></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

          </div>

          {/* Map Placeholder */}
          <div className="mt-12 w-full h-96 bg-stone-200 relative overflow-hidden shadow-inner">
             <div className="absolute inset-0 flex items-center justify-center bg-stone-300">
                <p className="text-stone-500 font-bold text-xl flex items-center">
                  <MapPin size={32} className="mr-2" />
                  Google Maps Integration Placeholder
                </p>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;