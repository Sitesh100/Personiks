'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const services = [
  { title: 'Liposuction', img: '/assets/Liposuction.png' },
  { title: 'Rhinoplasty', img: '/assets/Rhinoplasty.png' },
  { title: 'Gynecomastia', img: '/assets/Gynecomastia.png' },
  { title: 'Fat Grafting', img: '/assets/FatGrafting.png' },
  { title: 'Tummy tuck & Liposuction', img: '/assets/TummyTuck.png' },
  { title: 'Mole & Wart Removal', img: '/assets/MoleRemoval.png' },
  { title: 'Hair transplant & PRP', img: '/assets/HairTransplant.png' },
  { title: 'Skin Treatment', img: '/assets/SkinTreatment.png' },
  { title: 'Eye bag Correction', img: '/assets/EyeBag.png' },
];

const ServicesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle window resize and set mobile state
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 640);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const updateArrowVisibility = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  const handleScroll = useCallback(() => {
    updateArrowVisibility();
    setIsPaused(true);

    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  }, [updateArrowVisibility]);

  // Auto-scroll effect
  useEffect(() => {
    if (!scrollContainerRef.current || isPaused) return;

    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = scrollContainer.scrollLeft;
    const scrollSpeed = 1;

    const autoScroll = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        scrollContainer.scrollLeft = scrollAmount;

        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        }

        updateArrowVisibility();
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, [isPaused, updateArrowVisibility]);

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    setIsPaused(true);

    const container = scrollContainerRef.current;
    const itemWidth = isMobile ? 200 : 290; // Adjust item width for mobile
    const visibleItems = Math.floor(container.clientWidth / itemWidth);
    const scrollDistance = visibleItems * itemWidth;

    container.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth',
    });

    setTimeout(() => {
      updateArrowVisibility();
    }, 500);
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    setIsPaused(true);

    const container = scrollContainerRef.current;
    const itemWidth = isMobile ? 200 : 290; // Adjust item width for mobile
    const visibleItems = Math.floor(container.clientWidth / itemWidth);
    const scrollDistance = visibleItems * itemWidth;

    container.scrollBy({
      left: scrollDistance,
      behavior: 'smooth',
    });

    setTimeout(() => {
      updateArrowVisibility();
    }, 500);
  };

  useEffect(() => {
    updateArrowVisibility();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll, updateArrowVisibility]);

  return (
    <section className="bg-[#111111] text-white pt-8 md:pt-16 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-sans">
          <span className="text-white">Our </span>
          <span className="text-[#D9AC47]">Specialized Services</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-light mt-2 text-[#EAEAEA] max-w-3xl">
          Comprehensive cosmetic and medical treatments including Hymenoplasty,
          Urinary Incontinence solutions, Breast Augmentation, and advanced Skin
          Care
        </p>

        <div className="mt-6 md:mt-10 bg-[#fef5ef] py-4 md:py-6 w-full relative">
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-opacity-90 transition-all"
              aria-label="Scroll left"
            >
              &lt;
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
            className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-8 px-4 md:px-10 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center gap-3 w-[180px] sm:w-[200px] md:w-[250px]"
              >
                <div className="w-full h-[180px] sm:h-[200px] md:h-[250px] flex items-center justify-center p-1">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={290}
                    height={290}
                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-4 md:mt-6 font-semibold text-center text-black text-lg sm:text-xl md:text-2xl">
                  {service.title}
                </p>
              </div>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-opacity-90 transition-all"
              aria-label="Scroll right"
            >
              &gt;
            </button>
          )}
        </div>
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

export default ServicesSection;
