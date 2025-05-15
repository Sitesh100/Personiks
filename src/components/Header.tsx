'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

interface DropdownItem {
  name: string;
  href?: string;
  subDropdown?: SubDropdownItem[];
}

interface SubDropdownItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    name: 'Face & Body',
    href: '#',
    dropdown: [
      {
        name: 'Procedures For Face',
        subDropdown: [
          { name: 'Double Chin Removal', href: '/double-chin-correction' },
          { name: 'Buccal Fat Removal', href: '/buccal-fat-removal' },
          { name: 'Dimple Creation', href: '/dimple-creation' },
          { name: 'Chin Augmentation', href: '/chin-implant-augmentation' },
          {
            name: 'Eyelid / Under Eye Bags Correction',
            href: '/eyelid-surgery',
          },
          { name: 'Nose Shaping (Rhinoplasty)', href: '/rhinoplasty-surgery' },
          { name: 'Ear Shaping & Ear Lobe Repair', href: '/ear-shaping' },
          { name: 'Lip Correction', href: '/lip-correction' },
          { name: 'Face Fat Grafting', href: '/face-fat-grafting' },
        ],
      },
      {
        name: 'Body Liposuction',
        subDropdown: [
          { name: 'Liposuction at Personiks', href: '/general-liposuction' },
          { name: 'Axillary Breast Removal', href: '/axillary-breast-removal' },
          {
            name: 'Gynecomastia / Man Boobs / Chest Fat Removal',
            href: '/gynecomastia',
          },
          { name: 'Arm Liposuction', href: '/arm-liposuction-surgery' },
          { name: 'Tummy Liposuction & Tuck', href: '/tummy-liposuction' },
          { name: 'Mommy Makeover TRUSTED', href: '/mommy-makeover' },
          {
            name: 'Thigh or Calf Liposuction',
            href: '/thigh-calf-liposuction',
          },
          { name: 'HD Liposuction', href: '/hd-liposuction' },
          {
            name: 'Butt & Hips Liposuction or Butt Lift',
            href: '/butt-hips-liposuction',
          },
          {
            name: 'Vaginoplasty & Labiaplasty',
            href: '/vaginoplasty-labiaplasty',
          },
        ],
      },
    ],
  },
  {
    name: 'Instant Procedures',
    href: '#',
    dropdown: [
      { name: 'Lipoma Removal', href: '/lipoma-removal' },
      { name: 'Mole Removal', href: '/mole-removal' },
      { name: 'Corn Removal', href: '/corn-removal' },
      { name: 'Warts Removal', href: '/warts-removal' },
      { name: 'Acne Scar Treatment', href: '/acne-scar-treatment' },
      { name: 'Scar removal for past injury', href: '/scar-removal' },
      { name: 'Genital & Anal Warts', href: '/genital-anal-warts' },
      { name: 'Ear Lobe Repair', href: '/ear-lobe-repair' },
    ],
  },
  {
    name: 'Skin & Hair',
    href: '#',
    dropdown: [
      {
        name: 'Skin',
        subDropdown: [
          { name: 'Face Fat Grafting', href: '/face-fat-grafting' },
          { name: 'Unwanted Hair', href: '/unwanted-hair' },
          { name: 'Facial Rejuvenation', href: '/facial-rejuvenation' },
          { name: 'Acne Scars Removal', href: '/acne-scars-removal' },
          { name: 'Laser Skin Pigmentation', href: '/laser-pigmentation' },
          { name: 'Laser Skin Toning', href: '/laser-toning' },
          { name: 'Contour Thread Lift', href: '/contour-thread-lift' },
          { name: 'Chemical Peel', href: '/chemical-peel' },
          { name: 'Derma Roller in Hyderabad', href: '/derma-roller' },
        ],
      },
      {
        name: 'Hair',
        subDropdown: [{ name: 'Hair Transplant', href: '/hair-transplant' }],
      },
    ],
  },
  {
    name: 'Reconstructive Surgeries',
    href: '#',
    dropdown: [
      { name: 'Burns', href: '/treatment-for-burns-and-contractures' },
      { name: 'Pilonidal Sinus Treatment', href: '/pilonidal-sinus' },
    ],
  },
  {
    name: 'Obesity',
    href: '#',
    dropdown: [{ name: 'Surgical', href: '/surgical' }],
  },
];

export default function Header() {
  const [logoError, setLogoError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<number | null>(
    null
  );
  const pathname = usePathname();

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Helper function to check if current path matches any dropdown item
  const isActiveDropdown = (item: NavItem) => {
    return item.dropdown?.some((dropdownItem) => {
      if ('href' in dropdownItem) {
        return dropdownItem.href === pathname;
      } else if (dropdownItem.subDropdown) {
        return dropdownItem.subDropdown.some(
          (subItem) => subItem.href === pathname
        );
      }
      return false;
    });
  };

  return (
    <header className="sticky z-50 w-full flex justify-center pt-6">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between w-[95%] max-w-[1308px] md:h-[90px] h-[70px]
          bg-[#FDF3EB] rounded-[40px] shadow-md px-6 md:px-10 transition-all duration-300 ${
            isScrolled ? 'shadow-lg bg-opacity-95' : ''
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center gap-1">
          {!logoError ? (
            <Image
              src="/assets/logo.png"
              alt="Personiks Logo"
              width={72}
              height={72}
              className="object-contain"
              onError={() => setLogoError(true)}
              priority
            />
          ) : (
            <span className="font-serif text-2xl font-bold text-[#BFA14A]">
              Personiks
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item, index) => (
            <li key={item.name} className="relative dropdown-container">
              {item.dropdown ? (
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className={`text-lg font-medium transition-colors relative flex items-center gap-1 ${
                    isActiveDropdown(item)
                      ? 'text-[#BFA14A]'
                      : 'text-gray-700 hover:text-[#BFA14A]'
                  }`}
                >
                  {item.name}
                  <svg
                    className={`w-4 h-4 transform ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`text-lg font-medium transition-colors relative
                    after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]
                    after:bg-[#BFA14A] after:transition-all after:duration-300
                    hover:after:w-full ${
                      pathname === item.href
                        ? 'text-[#BFA14A]'
                        : 'text-gray-700 hover:text-[#BFA14A]'
                    }`}
                >
                  {item.name}
                </Link>
              )}
              {item.dropdown && activeDropdown === index && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-[#FDF3EB]
                    rounded-lg shadow-lg py-2 z-50"
                >
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <li
                      key={dropdownItem.name}
                      className="relative dropdown-container"
                    >
                      {dropdownItem.subDropdown ? (
                        <button
                          onClick={() =>
                            setActiveSubDropdown(
                              activeSubDropdown === dropdownIndex
                                ? null
                                : dropdownIndex
                            )
                          }
                          className={`w-full text-left px-4 py-2 transition-colors
                            flex items-center justify-between ${
                              dropdownItem.subDropdown.some(
                                (subItem) => subItem.href === pathname
                              )
                                ? 'text-[#BFA14A] bg-[#F9E8D9]'
                                : 'text-gray-700 hover:text-[#BFA14A] hover:bg-[#F9E8D9]'
                            }`}
                        >
                          {dropdownItem.name}
                          <svg
                            className={`w-4 h-4 transform ${
                              activeSubDropdown === dropdownIndex
                                ? 'rotate-90'
                                : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={dropdownItem.href || '#'}
                          className={`block px-4 py-2 transition-colors ${
                            pathname === dropdownItem.href
                              ? 'text-[#BFA14A] bg-[#F9E8D9]'
                              : 'text-gray-700 hover:text-[#BFA14A] hover:bg-[#F9E8D9]'
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      )}
                      {dropdownItem.subDropdown &&
                        activeSubDropdown === dropdownIndex && (
                          <motion.ul
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-full top-0 ml-2 w-64
                              bg-[#FDF3EB] rounded-lg shadow-lg py-2 z-50"
                          >
                            {dropdownItem.subDropdown.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  className={`block px-4 py-2 transition-colors ${
                                    pathname === subItem.href
                                      ? 'text-[#BFA14A] bg-[#F9E8D9]'
                                      : 'text-gray-700 hover:text-[#BFA14A] hover:bg-[#F9E8D9]'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop) */}
        <Link
          href="/about"
          className="hidden lg:flex items-center justify-center h-12 px-8
            rounded-full bg-[#E3B63A] text-black font-medium text-base
            hover:shadow-lg transition-all"
        >
          About Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <div className="relative w-8 h-6 flex flex-col justify-between">
            <span
              className={`w-full h-1 bg-[#BFA14A] rounded-full transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`w-full h-1 bg-[#BFA14A] rounded-full transition-all ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-full h-1 bg-[#BFA14A] rounded-full transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
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
              className="absolute top-[105%] left-0 w-full bg-[#FDF3EB]
                rounded-3xl shadow-lg py-6 flex flex-col items-center lg:hidden z-50"
            >
              {navItems.map((item, index) => (
                <div key={item.name} className="w-full">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === index ? null : index
                          )
                        }
                        className={`w-full text-left py-3 px-6 text-lg font-medium
                          transition-colors flex items-center justify-between ${
                            isActiveDropdown(item)
                              ? 'text-[#BFA14A]'
                              : 'text-gray-700 hover:text-[#BFA14A]'
                          }`}
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transform ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {activeDropdown === index && (
                        <div className="pl-6">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <div key={dropdownItem.name}>
                              {dropdownItem.subDropdown ? (
                                <>
                                  <button
                                    onClick={() =>
                                      setActiveSubDropdown(
                                        activeSubDropdown === dropdownIndex
                                          ? null
                                          : dropdownIndex
                                      )
                                    }
                                    className={`w-full text-left py-2 px-4 transition-colors
                                      flex items-center justify-between ${
                                        dropdownItem.subDropdown.some(
                                          (subItem) => subItem.href === pathname
                                        )
                                          ? 'text-[#BFA14A]'
                                          : 'text-gray-700 hover:text-[#BFA14A]'
                                      }`}
                                  >
                                    {dropdownItem.name}
                                    <svg
                                      className={`w-4 h-4 transform ${
                                        activeSubDropdown === dropdownIndex
                                          ? 'rotate-90'
                                          : ''
                                      }`}
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </button>
                                  {activeSubDropdown === dropdownIndex && (
                                    <div className="pl-4">
                                      {dropdownItem.subDropdown.map(
                                        (subItem) => (
                                          <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            className={`block py-2 px-4 transition-colors ${
                                              pathname === subItem.href
                                                ? 'text-[#BFA14A]'
                                                : 'text-gray-700 hover:text-[#BFA14A]'
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            {subItem.name}
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={dropdownItem.href || '#'}
                                  className={`block py-2 px-4 transition-colors ${
                                    pathname === dropdownItem.href
                                      ? 'text-[#BFA14A]'
                                      : 'text-gray-700 hover:text-[#BFA14A]'
                                  }`}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-3 px-6 text-lg font-medium
                        transition-colors ${
                          pathname === item.href
                            ? 'text-[#BFA14A]'
                            : 'text-gray-700 hover:text-[#BFA14A]'
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/about"
                className="mt-4 flex items-center justify-center h-12 px-8
                  rounded-full bg-[#E3B63A] text-black font-medium text-base
                  hover:shadow-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
