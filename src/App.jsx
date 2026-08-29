import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import AboutDoctor from './components/AboutDoctor';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewsCarousel from './components/ReviewsCarousel';
import LocationSection from './components/LocationSection';
import AppointmentCTA from './components/AppointmentCTA';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import MobileActionBar from './components/MobileActionBar';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleOpenAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] flex flex-col text-slate-800">
      {/* 1. Header / Navbar */}
      <Navbar onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 3. Trust & Social Proof Bar */}
        <TrustBar />

        {/* 4. About Malliga Health Care */}
        <AboutDoctor onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 5. Services / Areas of Care */}
        <Services onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 6. Why Choose Malliga Health Care */}
        <WhyChooseUs onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 7. Google Reviews Carousel */}
        <ReviewsCarousel />

        {/* 8. Location & Contact Section */}
        <LocationSection onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 9. Final Call-to-Action */}
        <AppointmentCTA onOpenAppointmentModal={handleOpenAppointmentModal} />
      </main>

      {/* 10. Footer */}
      <Footer onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* 11. Modal Dialog for Booking */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointmentModal}
      />

      {/* 12. Mobile Sticky Action Bar (visible only on mobile screens < 768px) */}
      <MobileActionBar onOpenAppointmentModal={handleOpenAppointmentModal} />
    </div>
  );
}
