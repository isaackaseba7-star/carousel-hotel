import { motion } from 'motion/react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';

export function CTA({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white text-center">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://picsum.photos/seed/carousel-pattern/1920/1080" 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-8">
            ✓ Free Cancellation Available
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            Book Your Stay at Carousel Hotel Today
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Experience premium comfort and unmatched convenience. 
            Limited rooms left at K1,007 per night. Free breakfast included.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onBookClick}
              className="px-8 py-4 bg-gold hover:bg-gold-light text-primary font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </button>
            <a 
              href="tel:0570227447"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a 
              href="https://wa.me/260570227447?text=Hello,%20I%E2%80%99d%20like%20to%20book%20a%20room%20at%20Carousel%20Hotel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20b858] text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
