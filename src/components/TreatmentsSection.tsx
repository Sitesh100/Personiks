'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const treatments = [
  {
    title: 'Hair loss treatment',
    description:
      'Clinically proven expert solutions to restore fuller, healthier hair.',
    img: '/assets/Treatment1.png',
  },
  {
    title: 'Laser hair removal',
    description:
      'Long-lasting hair reduction with safe, advanced laser technology.',
    img: '/assets/Treatment2.png',
  },
  {
    title: 'Hair transplant',
    description:
      'Natural-looking hair restoration with minimally invasive techniques.',
    img: '/assets/Treatment3.png',
  },
  {
    title: 'Scalp treatment',
    description:
      'Specialized care for scalp health and hair follicle stimulation.',
    img: '/assets/Treatment4.png',
  },
];

const CARD_WIDTH = 320; // Smaller initial card width
const CARD_HEIGHT = 420; // Smaller initial card height
const CARD_GAP = 30; // Slightly reduced gap
const VISIBLE_CARDS = 3;

function TreatmentCard({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) {
  return (
    <div
      className="w-[320px] h-[420px] flex-shrink-0 relative group cursor-pointer hover:shadow-2xl"
      style={{ transition: 'all 0.3s ease' }}
    >
      <div
        className="absolute w-full h-full bg-[#FFF8EE] rounded-[20px] shadow-lg flex flex-col overflow-hidden group-hover:scale-125 group-hover:z-20"
        style={{ transition: 'all 0.3s ease' }}
      >
        {/* Image section */}
        <div className="relative w-full h-[180px] overflow-hidden">
          <Image
            src={img}
            alt={title}
            width={320}
            height={180}
            className="w-full h-full object-cover"
            priority={true}
          />
        </div>

        {/* Content section */}
        <div className="flex flex-col p-5 flex-grow">
          <h3 className="font-bold text-black text-[20px] mb-2 font-outfit">
            {title}
          </h3>
          <p className="text-black text-[15px] mb-5 font-outfit">
            {description}
          </p>
          <button className="bg-[#D4AF37] text-black rounded-[12px] font-semibold font-outfit px-6 py-2 text-[15px] mt-auto transition hover:brightness-95">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TreatmentsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [firstVisible, setFirstVisible] = useState(0);

  // Scroll to card at index
  const scrollToCard = (idx: number) => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    const scrollAmount = idx * (CARD_WIDTH + CARD_GAP);
    scrollElement.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  // Arrow click handlers
  const handleLeft = () => {
    if (firstVisible > 0) {
      const newIdx = firstVisible - 1;
      setFirstVisible(newIdx);
      scrollToCard(newIdx);
    }
  };

  const handleRight = () => {
    if (firstVisible < treatments.length - VISIBLE_CARDS) {
      const newIdx = firstVisible + 1;
      setFirstVisible(newIdx);
      scrollToCard(newIdx);
    }
  };

  // Keep state in sync with manual scroll (drag/trackpad)
  const handleScroll = () => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    const scrollLeft = scrollElement.scrollLeft;
    const idx = Math.round(scrollLeft / (CARD_WIDTH + CARD_GAP));
    setFirstVisible(idx);
  };

  // On mount, scroll to the first card
  useEffect(() => {
    scrollToCard(firstVisible);
    // eslint-disable-next-line
  }, []);

  return (
    <section
      className="bg-[#181818] flex flex-col items-center w-full py-20 px-4 relative overflow-hidden"
      style={{ minHeight: 600 }}
    >
      <div className="mx-auto text-center mb-12" style={{ maxWidth: 1200 }}>
        <h2 className="font-outfit font-normal text-[48px] leading-[110%]">
          <span className="text-white">Our </span>
          <span style={{ color: '#D4AF37' }}>Treatments</span>
        </h2>
        <p className="font-outfit text-[#EAEAEA] text-[20px] font-light mt-2 leading-[120%]">
          Clinically backed solutions delivered with expert care.
        </p>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto">
        {/* Left Arrow - Positioned closer to cards */}
        <button
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#181818] rounded-full flex justify-center items-center z-20 shadow-lg border border-[#E5E5E5] transition-all duration-300 ${
            firstVisible === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-110'
          }`}
          style={{ width: 46, height: 46, fontSize: 24 }}
          onClick={handleLeft}
          aria-label="Scroll left"
          disabled={firstVisible === 0}
        >
          &#8592;
        </button>

        {/* Card Container - Widened */}
        <div
          className="mx-auto flex justify-center"
          style={{ width: '100%', maxWidth: 1120, overflow: 'hidden' }}
        >
          {/* Cards Row */}
          <div
            ref={scrollRef}
            className="flex items-center justify-center gap-[32px] overflow-x-hidden scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              minHeight: CARD_HEIGHT,
              userSelect: 'none',
              msOverflowStyle: 'none' /* IE and Edge */,
              scrollbarWidth: 'none' /* Firefox */,
              padding:
                '20px 0 40px' /* Add padding to accommodate hover scaling */,
            }}
            onScroll={handleScroll}
          >
            {/* Hide scrollbar for Chrome, Safari and Opera */}
            <style jsx global>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {treatments.map((item, idx) => (
              <div
                key={idx}
                style={{
                  scrollSnapAlign: 'start',
                  opacity:
                    idx >= firstVisible && idx < firstVisible + VISIBLE_CARDS
                      ? 1
                      : 0.5,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <TreatmentCard
                  title={item.title}
                  description={item.description}
                  img={item.img}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow - Positioned closer to cards */}
        <button
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#181818] rounded-full flex justify-center items-center z-20 shadow-lg border border-[#E5E5E5] transition-all duration-300 ${
            firstVisible >= treatments.length - VISIBLE_CARDS
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-110'
          }`}
          style={{ width: 46, height: 46, fontSize: 24 }}
          onClick={handleRight}
          aria-label="Scroll right"
          disabled={firstVisible >= treatments.length - VISIBLE_CARDS}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
