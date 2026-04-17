import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';
import { useState } from 'react';

export function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80" 
          alt="Carousel Hotel Luxury Room" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            Extended Stay Accommodation
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Comfort & Convenience in the <span className="text-gold italic">Heart of Lusaka</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-2 font-medium">
            Premium extended stay accommodation at Carousel Hotel
          </p>
          <p className="text-lg text-gold-light mb-10">
            Rooms from K1,007 per night
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-primary font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-gold/20"
            >
              <Calendar className="w-5 h-5" />
              Check Availability & Book
            </button>
            <a 
              href="tel:0570227447"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call 057 0227447
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
