import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { src: "https://picsum.photos/seed/carousel-room-1/800/600", alt: "Clean hotel rooms", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2" },
  { src: "https://picsum.photos/seed/carousel-exterior/600/600", alt: "Hotel exterior", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "https://picsum.photos/seed/biz-travel/600/600", alt: "Business traveler lifestyle", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "https://picsum.photos/seed/carousel-lobby-art/800/600", alt: "Local authenticity", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gold font-medium tracking-wider uppercase text-sm mb-3">A Glimpse Inside</h2>
          <h3 className="text-4xl font-serif text-primary">Gallery</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(img.src)}
              className={`${img.colSpan} ${img.rowSpan} rounded-xl overflow-hidden group cursor-pointer relative`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 p-3 rounded-full text-white">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 md:-top-12 text-white hover:text-gold transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged gallery view" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
