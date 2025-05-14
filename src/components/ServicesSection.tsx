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

  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const updateArrowVisibility = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const handleScroll = useCallback(() => {
    updateArrowVisibility();
    setIsPaused(true);

    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  }, []);

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
  }, [isPaused]);

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    setIsPaused(true);

    const container = scrollContainerRef.current;
    const itemWidth = 290;
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
    const itemWidth = 290;
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
  }, [handleScroll]);

  return (
    <section className="bg-[#111111] text-white pt-16 relative">
      <div className="w-full">
        <h2 className="text-4xl md:text-[60px] font-sans ml-16">
          <span className="text-white">Our </span>
          <span className="text-[#D9AC47]">Specialized Services</span>
        </h2>

        <p className="w-[75%] text-[22px] font-light mt-2 text-[#EAEAEA] ml-16">
          Comprehensive cosmetic and medical treatments including Hymenoplasty,
          Urinary Incontinence solutions, Breast Augmentation, and advanced Skin
          Care
        </p>

        <div className="mt-10 bg-[#fef5ef] py-6 w-full px-10 relative">
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all"
              aria-label="Scroll left"
            >
              &lt;
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex overflow-x-auto scrollbar-hide gap-8 px-10 py-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center gap-3"
              >
                <div className="w-[250px] h-[250px] flex items-center justify-center p-1">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={290}
                    height={290}
                    className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="mt-6 font-semibold text-center text-black text-2xl">
                  {service.title}
                </p>
              </div>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-70 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all"
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
