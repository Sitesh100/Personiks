'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/Herosection';
import ServicesSection from '@/components/ServicesSection';
import TreatmentsSection from '@/components/TreatmentsSection';
import BranchesSection from '@/components/BranchesSection';
import FeaturedTreatments from '@/components/FeaturedTreatments';
import WhyChoose from '@/components/WhyChoose';
import ClientExperiences from '@/components/ClientExperiences';
import FaqSection from '@/components/FaqSection';
import Modal from '@/components/Modal';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
// import Header from '@/components/Header';
export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // Handler to open the booking modal
  const handleBookNow = () => setShowModal(true);

  // Handler to close the booking modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="w-full overflow-hidden ">
        {/* <Header /> */}
        {/* Pass the handler ONLY to HeroSection */}
        <HeroSection onBookNow={handleBookNow} />

        {/* Other sections as usual */}
        <ServicesSection />
        <TreatmentsSection />
        <BranchesSection />
        <FeaturedTreatments />
        <WhyChoose />
        <ClientExperiences />
        <FaqSection />
        <Footer />
      </div>

      {/* Booking Modal (visible only when showModal is true) */}
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold text-center mb-6 font-outfit text-[#181818]">
          Book an Appointment
        </h2>
        <BookingForm onSubmit={handleCloseModal} />
      </Modal>
    </>
  );
}
