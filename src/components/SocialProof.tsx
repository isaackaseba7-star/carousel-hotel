import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    text: "Clean rooms and very convenient location right inside the shopping centre. Made my business trip much easier.",
    author: "James M.",
    type: "Business Traveler"
  },
  {
    text: "Perfect for business stays in Lusaka. The internet is fast, and the staff is very accommodating. Highly recommended for long stays.",
    author: "Sarah T.",
    type: "Extended Stay Guest"
  },
  {
    text: "Great value for money and good service. Access to transport routes from Lumumba Road is unbeatable.",
    author: "David L.",
    type: "Frequent Visitor"
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-medium tracking-wider uppercase text-sm mb-3">Guest Experiences</h2>
          <h3 className="text-4xl font-serif text-primary mb-6">What Our Guests Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/5" />
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-700 italic mb-8 mt-4 relative z-10">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-primary">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
