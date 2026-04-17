import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export function Location() {
  return (
    <section className="py-24 bg-primary text-white" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold font-medium tracking-wider uppercase text-sm mb-3">Location Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">Central Lusaka Positioning</h3>
            
            <p className="text-gray-300 text-lg mb-8">
              Stay where the city connects. Carousel Hotel is strategically located inside the Carousel Shopping Centre at the corner of Lumumba and Kafue Road.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-gold shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Inside Carousel Shopping Centre</h4>
                  <p className="text-gray-400">Step out of your room directly into a world of shopping, dining, and essential services.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full text-gold shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Corner Lumumba & Kafue Road</h4>
                  <p className="text-gray-400">Easy access to major transport routes, making business commuting across Lusaka effortless.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-xl p-2 border border-slate-700 shadow-2xl h-[500px] overflow-hidden"
          >
             {/* A placeholder map - ideally an iframe to Google Maps, but using an image for now with a map pin */}
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center group cursor-pointer">
               <img 
                src="https://picsum.photos/seed/lusaka-map/800/600" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              
              {/* Map Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center animate-bounce">
                  <div className="bg-white text-primary font-bold px-4 py-2 rounded shadow-lg mb-2 text-sm">
                    Carousel Hotel
                  </div>
                  <MapPin className="w-12 h-12 text-blue-600 fill-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
