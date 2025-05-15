'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

// Treatments data from old code
const treatments = [
  {
    id: 1,
    title: 'Hair loss treatment',
    description:
      'Clinically proven expert solutions to restore fuller, healthier hair.',
    image: '/assets/Treatment1.png',
  },
  {
    id: 2,
    title: 'Laser hair removal',
    description:
      'Long-lasting hair reduction with safe, advanced laser technology.',
    image: '/assets/Treatment2.png',
  },
  {
    id: 3,
    title: 'Hair transplant',
    description:
      'Natural-looking hair restoration with minimally invasive techniques.',
    image: '/assets/Treatment3.png',
  },
  {
    id: 4,
    title: 'Scalp treatment',
    description:
      'Specialized care for scalp health and hair follicle stimulation.',
    image: '/assets/Treatment4.png',
  },
];

const TreatmentsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [firstVisible, setFirstVisible] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to a specific card
  const scrollToCard = useCallback(
    (index: number) => {
      if (!cardsContainerRef.current || !isMounted) return;

      const container = cardsContainerRef.current;
      const cardWidth =
        container.querySelector('.treatment-card')?.clientWidth || 0;
      const gap = 16; // Gap between cards in pixels

      const scrollPosition = index * (cardWidth + gap);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });

      setActiveIndex(index);
    },
    [isMounted]
  );

  // Update firstVisible when scrolling
  const handleScroll = useCallback(() => {
    if (!cardsContainerRef.current || !isMounted) return;

    const container = cardsContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth =
      container.querySelector('.treatment-card')?.clientWidth || 0;
    const gap = 16;

    const newFirstVisible = Math.round(scrollLeft / (cardWidth + gap));

    if (newFirstVisible !== firstVisible) {
      setFirstVisible(newFirstVisible);
      setActiveIndex(newFirstVisible);
    }
  }, [firstVisible, isMounted]);

  // Add scroll event listener
  useEffect(() => {
    setIsMounted(true);

    const container = cardsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  // Handle resize to adjust visible cards
  useEffect(() => {
    const handleResize = () => {
      if (!isMounted || !cardsContainerRef.current) return;
      scrollToCard(firstVisible);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [isMounted, firstVisible, scrollToCard]);

  // Determine how many cards to show based on screen size
  const getVisibleCards = () => {
    if (!isMounted) return 1;

    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 1; // Mobile
      if (width < 1024) return 2; // Tablet
      return 3; // Desktop
    }

    return 1; // Default for SSR
  };

  // Next button handler
  const handleNext = () => {
    const maxIndex = Math.max(0, treatments.length - getVisibleCards());
    const nextIndex = Math.min(activeIndex + 1, maxIndex);
    scrollToCard(nextIndex);
  };

  // Previous button handler
  const handlePrev = () => {
    const prevIndex = Math.max(0, activeIndex - 1);
    scrollToCard(prevIndex);
  };

  return (
    <section className="bg-[#181818] flex flex-col w-full py-16 px-4 relative overflow-hidden">
      <div className="mb-12 ml-16 ">
        <h2 className="font-outfit font-normal text-[36px] sm:text-[60px] leading-[110%]">
          <span className="text-white">Our </span>
          <span style={{ color: '#D4AF37' }}>Treatments</span>
        </h2>
        <p className="font-outfit text-[#EAEAEA] text-[18px] sm:text-[20px] font-light mt-2 leading-[120%]">
          Clinically backed solutions delivered with expert care.
        </p>
      </div>

      <div className="relative w-full max-w-[80rem] mx-auto">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`absolute left-0 sm:left-[-60px] top-1/2 -translate-y-1/2 bg-white/90 text-[#181818] rounded-full flex justify-center items-center z-20 shadow-lg border border-[#E5E5E5] transition-all duration-300 ${
            activeIndex === 0
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-110'
          }`}
          style={{ width: 48, height: 48, fontSize: 24 }}
          aria-label="Scroll left"
        >
          ←
        </button>

        <div
          ref={cardsContainerRef}
          className="flex gap-4 overflow-x-auto pb-8 snap-x scrollbar-hide"
          style={{ scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' }}
        >
          {treatments.map((treatment, index) => (
            <div
              key={treatment.id}
              className="treatment-card flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)] bg-gradient-to-br from-[#FFF8EE] to-[#F8E9D5] rounded-[20px] shadow-xl overflow-hidden snap-start group"
              style={{
                scrollSnapAlign: 'start',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div className="relative h-[160px] w-full overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-outfit font-bold text-black text-[22px] mb-3 tracking-tight">
                  {treatment.title}
                </h3>
                <p className="font-outfit text-gray-800 text-[16px] mb-5 leading-relaxed">
                  {treatment.description}
                </p>
                <button className="bg-gradient-to-r from-[#D4AF37] to-[#B8972E] text-black rounded-[12px] font-outfit font-semibold px-6 py-2 text-[16px] mt-auto transition hover:brightness-110 shadow-md">
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={activeIndex >= treatments.length - getVisibleCards()}
          className={`absolute right-0 sm:right-[-60px] top-1/2 -translate-y-1/2 bg-white/90 text-[#181818] rounded-full flex justify-center items-center z-20 shadow-lg border border-[#E5E5E5] transition-all duration-300 ${
            activeIndex >= treatments.length - getVisibleCards()
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-110'
          }`}
          style={{ width: 48, height: 48, fontSize: 24 }}
          aria-label="Scroll right"
        >
          →
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({
          length: Math.ceil(treatments.length / getVisibleCards()),
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i * getVisibleCards())}
            className={`w-3 h-3 rounded-full ${
              i === Math.floor(activeIndex / getVisibleCards())
                ? 'bg-[#D4AF37]'
                : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TreatmentsSection;
