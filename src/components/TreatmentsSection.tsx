"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const treatments = [
  {
    title: "Hair loss treatment",
    description: "Clinically proven expert solutions to restore fuller, healthier hair.",
    img: "/assets/Treatment1.png", // Corrected path
    backTitle: "Hair loss Treatment",
    backText:
      "Our experts offer clinically backed, customized solutions to combat hair loss and restore natural hair growth - giving you fuller, healthier hair with lasting results.",
  },
  {
    title: "Laser hair removal",
    description: "Long-lasting hair reduction with safe, advanced laser technology.",
    img: "/assets/Treatment2.png", // Corrected path
    backTitle: "Laser hair removal",
    backText:
      "Experience smooth, hair-free skin with our safe and advanced laser technology - designed for long-lasting results and minimal discomfort.",
  },
  {
    title: "Hair transplant",
    description: "Natural-looking hair restoration with minimally invasive techniques.",
    img: "/assets/Treatment3.png", // Corrected path
    backTitle: "Hair transplant",
    backText:
      "Achieve fuller, natural-looking hair through our minimally invasive transplant techniques - ensuring effective, lasting restoration with expert care.",
  },
  {
    title: "Scalp treatment",
    description: "Specialized care for scalp health and hair follicle stimulation.",
    img: "/assets/Treatment4.png", // Corrected path
    backTitle: "Scalp treatment",
    backText:
      "Personalized scalp therapies to boost hair follicle health and support robust, natural hair growth for long-term results.",
  },
];

const CARD_WIDTH = 360;
const CARD_HEIGHT = 520;
const CARD_GAP = 36;
const VISIBLE_CARDS = 3;

function FlipCard({
  title,
  description,
  img,
  backTitle,
  backText,
}: {
  title: string;
  description: string;
  img: string;
  backTitle: string;
  backText: string;
}) {
  return (
    <div
      className="group [perspective:1200px] w-[360px] h-[520px] flex-shrink-0"
    >
      <div
        className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-[#FFF8EE] rounded-[20px] shadow-lg flex flex-col items-start transition-all duration-300 cursor-pointer [backface-visibility:hidden] px-6 py-6"
        >
          <Image
            src={img}
            alt={title}
            width={312}
            height={160}
            className="rounded-[16px] object-cover mb-6"
            style={{
              width: 312,
              height: 160,
              objectFit: "cover",
            }}
          />
          <h3
            className="font-bold text-black text-[22px] mb-2 font-sans"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {title}
          </h3>
          <p
            className="text-black text-[16px] mb-6 font-sans"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {description}
          </p>
          <button
            className="bg-[#D4AF37] text-black rounded-[12px] font-semibold font-sans px-8 py-2 text-[16px] mt-auto transition hover:brightness-95"
            style={{
              fontFamily: "Outfit, sans-serif",
              minHeight: 40,
              borderRadius: 12,
            }}
          >
            Book now
          </button>
        </div>
        {/* Back */}
        <div
          className="absolute w-full h-full bg-black rounded-[20px] shadow-lg flex flex-col items-start justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] px-6 py-6"
        >
          <h3
            className="font-bold text-white text-[20px] mb-5 font-sans"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {backTitle}
          </h3>
          <p
            className="text-white text-[15px] font-sans leading-[1.4]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {backText}
          </p>
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
      behavior: "smooth",
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
      style={{ minHeight: 650 }}
    >
      <div className="mx-auto" style={{ maxWidth: 1200, marginBottom: 32 }}>
        <h2 className="font-outfit font-normal text-[48px] leading-[110%]">
          <span className="text-white">Our </span>
          <span style={{ color: "#D4AF37" }}>Treatments</span>
        </h2>
        <p className="font-outfit text-[#EAEAEA] text-[20px] font-light mt-2 leading-[120%]">
          Clinically backed solutions delivered with expert care.
        </p>
      </div>

      <div
        className="relative w-full max-w-[1200px] mx-auto flex items-center"
        style={{ height: CARD_HEIGHT + 20, minWidth: 0 }}
      >
        {/* Left Arrow */}
        <button
          className={`absolute left-[-36px] top-1/2 -translate-y-1/2 bg-white text-[#181818] rounded-full flex justify-center items-center z-20 shadow-md border border-[#E5E5E5] transition-all duration-300 ${
            firstVisible === 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
          }`}
          style={{ width: 48, height: 48, fontSize: 28 }}
          onClick={handleLeft}
          aria-label="Scroll left"
          disabled={firstVisible === 0}
        >
          &#8592;
        </button>

        {/* Cards Row */}
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-auto scrollbar-hide w-full gap-[36px] px-2"
          style={{
            scrollBehavior: "smooth",
            height: CARD_HEIGHT + 20,
            userSelect: "none",
            minWidth: 0,
          }}
          onScroll={handleScroll}
        >
          {treatments.map((item, idx) => (
            <FlipCard
              key={idx}
              title={item.title}
              description={item.description}
              img={item.img}
              backTitle={item.backTitle}
              backText={item.backText}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className={`absolute right-[-36px] top-1/2 -translate-y-1/2 bg-white text-[#181818] rounded-full flex justify-center items-center z-20 shadow-md border border-[#E5E5E5] transition-all duration-300 ${
            firstVisible >= treatments.length - VISIBLE_CARDS
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-110"
          }`}
          style={{ width: 48, height: 48, fontSize: 28 }}
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
