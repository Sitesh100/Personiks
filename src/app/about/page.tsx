'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const highlightImages = [
  '/assets/highlight1.png',
  '/assets/highlight2.png',
  '/assets/highlight3.png',
  '/assets/highlight4.png',
  '/assets/highlight5.png',
  '/assets/highlight6.png',
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSlides = () => {
      const w = window.innerWidth;
      if (w < 768) setSlidesToShow(1);
      else if (w < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const maxIndex = Math.max(0, highlightImages.length - slidesToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide();
    if (touchEnd - touchStart > 75) prevSlide();
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    const slider = sliderRef.current;
    const pause = () => clearInterval(interval);
    const resume = () => setInterval(nextSlide, 5000);
    if (slider) {
      slider.addEventListener('mouseenter', pause);
      slider.addEventListener('mouseleave', resume);
    }
    return () => {
      clearInterval(interval);
      if (slider) {
        slider.removeEventListener('mouseenter', pause);
        slider.removeEventListener('mouseleave', resume);
      }
    };
  }, [nextSlide]);

  const slideWidth = 400;
  const slideGap = 24;

  return (
    <div className="bg-black min-h-screen text-white relative">
      <Header />

      {/* 1) HERO SECTION */}
      <section className="px-6 lg:px-20 py-16">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-transparent"
            style={{ width: '65%', zIndex: 1 }}
          />
          <div className="relative flex flex-col lg:flex-row items-center z-10">
            <div className="flex-1 p-8 lg:p-12 space-y-6 text-white z-10">
              <h1 className="text-4xl lg:text-5xl font-bold">
                Dr. Guru Karna Vemula
              </h1>
              <p className="text-base lg:text-lg leading-relaxed">
                Dr. Guru Karna Vemula is a highly respected Plastic and Cosmetic
                Surgeon known for his expertise, precision, and patient-centric
                approach. As the Director of Personiks Cosmetic and Plastic
                Surgery Center, he specializes in advanced procedures—including
                facial rejuvenation, body contouring, and hair restoration. With
                a strong commitment to innovation and excellence, Dr. Vemula
                continuously refines his techniques to deliver natural-looking,
                transformative results. His compassionate care and dedication to
                patient well-being have earned him widespread recognition,
                making him a trusted name in the field of plastic and cosmetic
                surgery.
              </p>
              <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                <Link
                  href="/contact"
                  className="font-outfit bg-gradient-to-r from-black to-[#2A2A2A] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg"
                >
                  Book now
                </Link>
                <div className="flex gap-3">
                  <a
                    href="tel:+919876543210"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                  >
                    <Image
                      src="/assets/call.png"
                      width={28}
                      height={28}
                      alt="Call"
                    />
                  </a>
                  <Link
                    href="/chat"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                  >
                    <Image
                      src="/assets/chat.png"
                      width={28}
                      height={28}
                      alt="Chat"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full h-64 lg:h-[500px]">
              <Image
                src="/assets/old desk doctor.png"
                alt="Dr. Guru Karna Vemula"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2) CREDENTIAL CARDS */}
      <section className="bg-[#FDF3EB] py-16 px-6 lg:px-20 border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'MBBS, MRCS, DNB, MCh',
              text: 'Body contouring | Facial aesthetics | Reconstructive surgery',
              icon: '/assets/Group 13.png',
            },
            {
              title: 'Expertise & Areas of Interest',
              text: 'Facial rejuvenation | Body contouring | Hair restoration',
              icon: '/assets/Frame 67.png',
            },
            {
              title: 'Experience',
              text: '20+ Years of Experience',
              icon: '/assets/trust.png',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative border-2 border-black rounded-xl pt-20 pb-6 px-6 text-center shadow-md"
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 flex items-center justify-center z-10">
                <div className="bg-[#FDF3EB] p-3 rounded-lg">
                  <Image
                    src={item.icon}
                    width={64}
                    height={64}
                    alt={item.title}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mt-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3) SURGEON HIGHLIGHT */}
      <section className="bg-black text-black py-20 px-6 lg:px-20">
        <div className="bg-[#FFF9F5] max-w-6xl mx-auto flex flex-col lg:flex-row items-center rounded-2xl p-8 lg:p-12 overflow-hidden">
          <div className="lg:w-3/5 space-y-6 pr-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">
              Best Plastic Surgeon in Hyderabad
            </h2>
            <p className="font-outfit text-base leading-relaxed text-black">
              Dr. Guru Karna Vemula is one of the best Plastic and Cosmetic
              Surgeons in Hyderabad, renowned for his expertise in body
              contouring, facial aesthetics, and advanced reconstructive
              procedures. As the Director of Personiks Cosmetic and Plastic
              Surgery Center, he has dedicated his career to transforming lives
              through cutting-edge surgical techniques and personalized patient
              care.
            </p>
            <p className="font-outfit text-base leading-relaxed text-black">
              In 2018, he established Personiks Cosmetic and Plastic Surgery
              Center in Hyderabad, a leading facility known for its high success
              rates in aesthetic and reconstructive procedures. With over 20+
              years of experience, Dr. Guru Karna Vemula has performed more than
              400 aesthetic surgeries annually, specializing in laser
              liposuction, fat grafting, and complex reconstructive surgeries.
            </p>
          </div>
          <div className="lg:w-2/5 relative h-full flex items-end justify-center self-stretch">
            <div className="relative h-full w-full flex items-end justify-center">
              {/* Yellow circle background */}
              <div
                className="rounded-full absolute right-0"
                style={{
                  width: '100%',
                  height: '65%',
                  top: '0',
                  zIndex: 0,
                }}
              ></div>
              {/* Doctor image */}
              <Image
                src="/assets/old doctor.png"
                alt="Dr. Vemula"
                width={350}
                height={500}
                className="object-contain relative z-10"
                style={{
                  marginBottom: '0',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4) HIGHLIGHTS CAROUSEL */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-outfit text-2xl font-semibold text-white">
              Highlights
            </h3>
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#E3B63A] to-[#FFD669] text-black shadow-lg hover:scale-110 transition-all"
                aria-label="Previous slides"
              >
                ‹
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#E3B63A] to-[#FFD669] text-black shadow-lg hover:scale-110 transition-all"
                aria-label="Next slides"
              >
                ›
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
                  currentIndex * (slideWidth + slideGap)
                }px)`,
                gap: `${slideGap}px`,
              }}
            >
              {highlightImages.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg border-2 border-[#E3B63A]/20"
                  style={{ width: `${slideWidth}px`, height: '300px' }}
                >
                  <Image
                    src={src}
                    alt={`Highlight ${idx + 1}`}
                    width={slideWidth}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5) FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
        <Link
          href="/chat"
          className="w-16 h-16 bg-gradient-to-r from-[#E3B63A] to-[#FFD669] rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all"
        >
          <Image src="/assets/bot.png" width={40} height={40} alt="Chat Bot" />
        </Link>
        <a
          href="tel:+1234567890"
          className="w-16 h-16 bg-gradient-to-r from-[#E3B63A] to-[#FFD669] rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all"
        >
          <Image src="/assets/call.png" width={40} height={40} alt="Call Us" />
        </a>
      </div>
      <Footer />
    </div>
  );
}
