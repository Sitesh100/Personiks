"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    name: "Nirvair Shah",
    service: "Hair transplant",
    image: "/assets/client1.png",
    quote:
      "The entire team made me feel comfortable and confident. The results exceeded my expectations!",
    stars: 4,
  },
  {
    name: "Nia Kapoor",
    service: "Laser hair removal",
    image: "/assets/client2.png",
    quote:
      "No more waxing hassles-my skin feels smooth and hair-free every day!",
    stars: 3,
  },
  {
    name: "Ayesha Singh",
    service: "Rhinoplasty",
    image: "/assets/client3.png",
    quote:
      "My nose looks natural and balanced. I feel so much more confident now.",
    stars: 5,
  },
  {
    name: "Aryav Kaur",
    service: "Fat Grafting",
    image: "/assets/client4.png",
    quote:
      "The results look so natural. My face feels fresher and more youthful.",
    stars: 4,
  },
];

export default function ClientExperiences() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<() => void>(() => {});

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardsToShow = useCallback(() => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  }, [windowWidth]);

  const getMaxSlides = useCallback(() => {
    return Math.max(0, testimonials.length - getCardsToShow());
  }, [getCardsToShow]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev >= getMaxSlides() ? 0 : prev + 1));
  }, [getMaxSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? getMaxSlides() : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(index, getMaxSlides()));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const cardWidth = 413; // Width of a single card
  const cardGap = 24; // Gap between cards

  useEffect(() => {
    autoPlayRef.current = nextSlide;

    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);

    const slider = sliderRef.current;
    const pauseAutoPlay = () => clearInterval(interval);
    const resumeAutoPlay = () => {
      clearInterval(interval);
      const newInterval = setInterval(play, 5000);
      return () => clearInterval(newInterval);
    };

    if (slider) {
      slider.addEventListener("mouseenter", pauseAutoPlay);
      slider.addEventListener("mouseleave", resumeAutoPlay);
    }

    return () => {
      clearInterval(interval);
      if (slider) {
        slider.removeEventListener("mouseenter", pauseAutoPlay);
        slider.removeEventListener("mouseleave", resumeAutoPlay);
      }
    };
  }, [nextSlide]);

  return (
    <section className="w-full flex flex-col items-center bg-[#171717] rounded-[20px] py-12 px-6 mt-14">
      <div className="w-full max-w-[1365px]">
        <div className="flex justify-between items-center mb-10">
          <h2
            className="font-outfit text-[42px] md:text-[60px] leading-[1.1] text-white"
            style={{ letterSpacing: 0 }}
          >
            Client Experiences
          </h2>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentSlide * (cardWidth + cardGap)
              }px)`,
              gap: `${cardGap}px`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${cardWidth}px`, height: "256px" }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8 md:mt-10 gap-2">
          {Array.from({ length: getMaxSlides() + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 h-2 bg-white rounded-full"
                  : "w-2 h-2 bg-white/40 rounded-full"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
