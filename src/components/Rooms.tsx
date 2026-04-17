import { MapPin, Phone, Star, BedDouble, Users, Check } from 'lucide-react';
import { motion } from 'motion/react';

const rooms = [
  {
    id: 'standard',
    name: 'Standard Room',
    price: 1007,
    image: 'https://picsum.photos/seed/standard-room/800/600',
    description: 'Perfect for the solo business traveler needing a comfortable and quiet space.',
    features: ['1 Queen Bed', 'Air Conditioning', 'Free Wi-Fi', 'Work Desk', 'En-suite Bathroom']
  },
  {
    id: 'twin',
    name: 'Twin Room',
    price: 1350,
    image: 'https://picsum.photos/seed/twin-room/800/600',
    description: 'Ideal for colleagues or friends traveling together, featuring two comfortable beds.',
    features: ['2 Single Beds', 'Air Conditioning', 'Free Wi-Fi', 'Seating Area', 'En-suite Bathroom']
  }
];

export function Rooms({ onBookClick }: { onBookClick: (roomName?: string) => void }) {
  return (
    <section className="py-24 bg-white" id="rooms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-medium tracking-wider uppercase text-sm mb-3">Our Accommodation</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">Designed for Short & Extended Stays</h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Clean, modern layouts that provide the space and comfort you need to recharge after a long day in Lusaka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {rooms.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded text-sm font-medium">
                  ZMW {room.price.toLocaleString()} / night
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-serif text-primary mb-2">{room.name}</h4>
                <p className="text-gray-600 mb-6 flex-grow">{room.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {room.features.map(feature => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => onBookClick(room.name)}
                  className="w-full bg-primary hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
