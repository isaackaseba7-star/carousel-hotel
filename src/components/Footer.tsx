import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif text-white mb-4">Carousel Hotel</h2>
            <p className="mb-6 max-w-sm">
              Premium extended stay accommodation located in the heart of Lusaka. Designed for business professionals and travelers seeking comfort, security, and convenience.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Corner Lumumba & Kafue Road<br/>Carousel Shopping Centre<br/>Lusaka, Zambia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:0570227447" className="hover:text-gold transition-colors">057 0227447</a>
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-gold shrink-0" />
                 <a href="mailto:info@carouselhotel.com" className="hover:text-gold transition-colors">info@carouselhotel.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Policies</h3>
            <ul className="space-y-2">
              <li>Check-in: 2:00 PM</li>
              <li className="text-gold font-medium">Check-out: 11:00 AM</li>
              <li className="mt-4"><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Carousel Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
