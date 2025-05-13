"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Modified nav items to use section IDs instead of different pages
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Treatments", href: "#treatments" },
  { name: "Instant Procedures", href: "#featured-treatments" },
  { name: "Testimonials", href: "#client-experiences" },
  { name: "About Us", href: "#why-choose" },
];

export default function Header() {
  const [logoError, setLogoError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Close mobile menu if open
      if (isMenuOpen) setIsMenuOpen(false);

      // Calculate header height (approximate with padding)
      const headerHeight = 110; // 90px height + padding

      // Calculate the position to scroll to (accounting for header)
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      // Scroll smoothly to the target
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-4 z-50 w-full flex justify-center pt-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between w-[95%] max-w-[1308px] h-[90px] bg-[#FDF3EB] rounded-[40px] shadow-md px-6 md:px-10 relative z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg bg-opacity-95" : ""
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex flex-col items-center gap-1"
          onClick={(e) => handleSmoothScroll(e, "#hero")}
        >
          {!logoError ? (
            <Image
              src="/assets/log.png"
              alt="Personiks Cosmetic Surgery Logo"
              width={72}
              height={72}
              className="object-contain w-[60px] h-[60px] md:w-[72px] md:h-[72px]"
              onError={() => setLogoError(true)}
              priority
            />
          ) : (
            <span className="font-serif text-2xl font-bold text-[#BFA14A]">
              Personiks
            </span>
          )}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-lg font-medium text-gray-700 hover:text-[#BFA14A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#BFA14A] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, "#contact")}
          className="hidden lg:flex items-center justify-center h-12 px-8 rounded-full bg-[#E3B63A] text-black font-medium text-base hover:shadow-lg transition-all"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="relative w-8 h-6 flex flex-col justify-between">
            <span
              className={`w-full h-1 bg-[#BFA14A] rounded-full transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`w-full h-1 bg-[#BFA14A] rounded-full transition-all ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-full h-1 bg-[#BFA14A] rounded-full transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[105%] left-0 w-full bg-[#FDF3EB] rounded-3xl shadow-lg py-6 flex flex-col items-center lg:hidden z-50"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-6 text-lg font-medium text-gray-700 hover:text-[#BFA14A] transition-colors"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.name}
                </a>
              ))}

              {/* Contact Button (Mobile) */}
              <a
                href="#contact"
                className="mt-4 flex items-center justify-center h-12 px-8 rounded-full bg-[#E3B63A] text-black font-medium text-base hover:shadow-lg transition-all"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                Contact Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
