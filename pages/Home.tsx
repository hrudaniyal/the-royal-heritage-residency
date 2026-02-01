import React from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import RoomCard from '../components/RoomCard';
import Button from '../components/Button';
import { ROOMS } from '../constants';
import { Coffee, Wifi, Car, Utensils, ShieldCheck, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const featuredRooms = ROOMS.filter(room => room.featured);

  const amenities = [
    { icon: <Coffee size={32} />, title: "Premium Cafe", desc: "24/7 artisan coffee and snacks" },
    { icon: <Wifi size={32} />, title: "High-Speed Wifi", desc: "Seamless connectivity everywhere" },
    { icon: <Car size={32} />, title: "Free Parking", desc: "Secure underground parking" },
    { icon: <Utensils size={32} />, title: "Fine Dining", desc: "Authentic Indian cuisine" },
    { icon: <ShieldCheck size={32} />, title: "24/7 Security", desc: "Your safety is our priority" },
    { icon: <Clock size={32} />, title: "Room Service", desc: "Round the clock service" },
  ];

  return (
    <>
      <Hero 
        title="Experience Royal Elegance" 
        subtitle="Welcome to Bangalore"
        backgroundImage="https://img.freepik.com/free-photo/modern-luxurious-bedroom-elegant-comfortable-design-generated-by-ai_188544-29281.jpg?t=st=1769966279~exp=1769969879~hmac=47422f3362cc380d221c4120f260d5b7c960480f0cbc6492ad4c74c9afb8b84c&w=1060"
        showButton={true}
        height="full"
      />

      {/* Intro Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle title="A Sanctuary in the City" subtitle="About Us" center />
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Nestled in the vibrant heart of Indiranagar, The Royal Heritage Residency blends 
              colonial charm with modern Indian luxury. Whether you are traveling for business 
              or leisure, our meticulously designed rooms and world-class hospitality ensure 
              an unforgettable stay.
            </p>
            <Button to="/about" variant="text">Read Our Story &rarr;</Button>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Featured Accommodations" subtitle="Luxury Living" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/rooms" variant="outline">View All Rooms</Button>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="World Class Amenities" subtitle="Our Services" light center />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {amenities.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-xs text-stone-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[url('https://picsum.photos/id/28/1920/600')] bg-cover bg-fixed bg-center relative">
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Plan Your Unforgettable Stay Today
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book directly through our website to receive the best rates and exclusive welcome amenities upon arrival.
          </p>
          <Button to="/book" variant="primary" className="bg-orange-700 text-primary hover:bg-stone-100">
            Book Your Stay Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;