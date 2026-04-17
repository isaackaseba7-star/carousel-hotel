import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { Location } from './components/Location';
import { SocialProof } from './components/SocialProof';
import { Gallery } from './components/Gallery';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>(undefined);

  const handleBookClick = (roomName?: string) => {
    setSelectedRoom(roomName || 'Standard Room');
    setIsBookingModalOpen(true);
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navigation onBookClick={() => handleBookClick()} />
      
      <main>
        <Hero onBookClick={() => handleBookClick()} />
        <TrustSection />
        <About />
        <Rooms onBookClick={handleBookClick} />
        <Amenities />
        <Location />
        <SocialProof />
        <Gallery />
        <CTA onBookClick={() => handleBookClick()} />
      </main>

      <Footer />
      
      <WhatsAppButton />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        initialRoom={selectedRoom}
      />
    </div>
  );
}
