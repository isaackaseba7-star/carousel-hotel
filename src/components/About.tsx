import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-24 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/carousel-lobby/800/1000" 
                alt="Carousel Hotel Lobby" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-gold/10 rounded-lg -z-0"></div>
            <div className="absolute -top-6 -left-6 w-1/2 aspect-square border-2 border-gold/20 rounded-lg -z-0"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold font-medium tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              Your Professional Haven in Lusaka
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Centrally located at the vibrant intersection of Lumumba and Kafue Road, 
                Carousel Hotel offers unparalleled access to Lusaka's key commercial districts.
              </p>
              <p>
                Whether you're visiting for a quick business assignment or planning an 
                extended stay, our premium accommodations are designed to provide the ultimate 
                balance of comfort, convenience, and security.
              </p>
              <p>
                Positioned conveniently within the Carousel Shopping Centre, you have immediate access 
                to retail stores, banking services, and transportation routes right at your doorstep.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-primary font-bold">10+</span>
                <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Years of Service</span>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-primary font-bold">24/7</span>
                <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Security & Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
