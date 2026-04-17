import { Wifi, Coffee, Car, Wind, BedDouble, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const amenities = [
  { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout the hotel' },
  { icon: Coffee, title: 'Free Breakfast', description: 'Start your day right with our complimentary setup' },
  { icon: Car, title: 'Free Parking', description: 'Secure on-site parking for all guests' },
  { icon: Wind, title: 'Air-Conditioned', description: 'Climate-controlled rooms for your comfort' },
  { icon: BedDouble, title: 'Comfortable Beds', description: 'Premium mattresses for a restful sleep' },
  { icon: Shield, title: 'Secure Location', description: '24/7 security inside Carousel Shopping Centre' },
];

export function Amenities() {
  return (
    <section className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-medium tracking-wider uppercase text-sm mb-3">Premium Facilities</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">Everything You Need</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div 
                key={amenity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex items-start gap-4"
              >
                <div className="bg-primary/5 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-gold transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">{amenity.title}</h4>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
