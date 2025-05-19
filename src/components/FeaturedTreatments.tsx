'use client';

import Image from 'next/image';

const FeaturedTreatments = () => {
  return (
    <section className="bg-[#000000] text-white py-16 px-4 sm:px-6 lg:px-16">
      {/* <div className="max-w-7xl mx-auto"> */}
      {/* Header with animated underline */}
      <div className="relative inline-block mb-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#f0d078] to-[#D9AC47]">
          Popular Cosmetic Procedures
        </h2>
        <div className="h-1 w-1/3 bg-gradient-to-r from-[#D9AC47] to-transparent mt-2 rounded-full animate-pulse"></div>
      </div>

      <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 font-light max-w-3xl leading-relaxed">
        Our most sought-after treatments provided by board-certified surgeons
        with decades of experience in cosmetic and reconstructive procedures.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Liposuction Card */}
        <div className="relative w-full h-60 sm:h-80 rounded-md overflow-hidden shadow-lg group">
          {/* Image Background */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/assets/leftFeatureCard.png"
              alt="Liposuction"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Content */}
          <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-end items-end text-white z-10">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-right font-semibold text-shadow">
                Liposuction
              </h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-100 max-w-md text-right">
                Are you struggling to lose stubborn fat that won’t budge no
                matter how much you diet or exercise?
              </p>
            </div>
            <button className="mt-4 px-5 py-2 bg-gradient-to-r from-[#D9AC47] to-[#b38b2d] text-black rounded-full font-medium w-fit hover:bg-[#b38b2d] transition-all duration-300 text-sm sm:text-base">
              Book Now
            </button>
          </div>
        </div>

        {/* Rhinoplasty Card */}
        <div className="relative w-full h-60 sm:h-80 rounded-md overflow-hidden shadow-lg group">
          {/* Image Background */}
          <div className="absolute inset-0 w-full h-full ">
            <Image
              src="/assets/rightFeatureCard.png"
              alt="Rhinoplasty"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-md"></div>

          {/* Content */}
          <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-end text-white z-10">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-shadow">
                Rhinoplasty
              </h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-100 max-w-sm">
                Discover a refined look and easier breathing through
                Rhinoplasty.
              </p>
            </div>
            <button className="mt-4 px-5 py-2 bg-gradient-to-r from-[#D9AC47] to-[#b38b2d] text-black rounded-full font-medium w-fit hover:bg-[#b38b2d] transition-all duration-300 text-sm sm:text-base">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-shadow {
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        @media (hover: none) {
          .group-hover\\:translate-y-0 {
            transform: translateY(0);
          }
          .group-hover\\:opacity-100 {
            opacity: 1;
          }
          .group-hover\\:scale-110 {
            transform: scale(1);
          }
          button.transform.translate-y-8 {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedTreatments;
