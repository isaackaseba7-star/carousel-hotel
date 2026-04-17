import { MapPin, Phone, Star, Building, CheckCircle, Wifi, Coffee, Car, Wind, BedDouble, Shield, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustSection() {
  return (
    <section className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-4"
          >
            <div className="flex items-center text-gold mb-2">
              {[...Array(4)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              <Star className="w-6 h-6 fill-current opacity-50" />
            </div>
            <h3 className="text-xl font-bold font-serif mb-1">4.4 / 5 Rating</h3>
            <p className="text-gray-400">Based on 70+ authentic reviews</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center p-4"
          >
            <Building className="w-10 h-10 text-gold mb-3" />
            <h3 className="text-xl font-bold font-serif mb-1">Prime Location</h3>
            <p className="text-gray-400">Inside Carousel Shopping Centre</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-4"
          >
            <CheckCircle className="w-10 h-10 text-gold mb-3" />
            <h3 className="text-xl font-bold font-serif mb-1">Extended Stays</h3>
            <p className="text-gray-400">Perfect for business & long stays</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
