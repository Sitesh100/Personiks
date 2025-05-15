'use client';

import type React from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Header';
import Image from 'next/image';
import Footer from '../Footer';

interface FeatureCard {
  title: string;
}

interface ProcedureInfo {
  title: string;
  coloredTitle: string;
  bulletPoints: string[];
}

interface FaqItem {
  question: string;
  answer: string;
}

interface DropDownPageProps {
  title: string;
  subtitle: string;
  features: FeatureCard[];
  procedureInfo: ProcedureInfo;
  faqs: FaqItem[];
  beforeAfterImage?: string;
}

const DropDownPage: React.FC<DropDownPageProps> = ({
  title,
  subtitle,
  features,
  procedureInfo,
  faqs,
  beforeAfterImage = 'https://personiks.com/wp-content/uploads/2024/02/Dimple-Website-Icon-Before-and-After-1-1.jpg',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-6 sm:py-8 md:pb-12">
      <Header />
      <div className="space-y-8 sm:space-y-12 md:space-y-16 mt-10">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ffffff]">
              {title}
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-[#C69C6D]">
              {subtitle}
            </h2>
          </div>

          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 sm:p-2 shadow-md hidden sm:block">
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-[#C69C6D]" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-8 sm:px-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#F9F5F0] p-4 sm:p-6 rounded-lg flex flex-col items-center text-center h-full"
                >
                  <h3 className="text-[#C69C6D] text-base sm:text-lg font-medium">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 sm:p-2 shadow-md hidden sm:block">
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-[#C69C6D] transform rotate-180" />
            </button>
          </div>
        </div>

        <div className="bg-[#FAF5F0] py-8 sm:py-12 md:py-16 px-4 rounded-lg">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 sm:space-y-8 order-2 md:order-1">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  <span className="text-[#C69C6D]">
                    {procedureInfo.coloredTitle}
                  </span>{' '}
                  <span className="text-[#2A2A2A]">{procedureInfo.title}</span>
                </h2>
                <ul className="list-disc pl-5 space-y-2 sm:space-y-3 text-[#2A2A2A] text-sm sm:text-base">
                  {procedureInfo.bulletPoints.map((point, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: point }}
                    />
                  ))}
                </ul>
              </div>

              <div className="pt-2 sm:pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2A2A2A]">
                  Sample Results
                </h2>
                <h3 className="text-xl sm:text-2xl font-medium text-[#C69C6D]">
                  Client Outcomes
                </h3>
              </div>
              <div>
                <button className="bg-[#2A2A2A] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium hover:bg-[#1A1A1A] transition-colors text-sm sm:text-base w-full sm:w-auto">
                  Contact Us Today
                </button>
              </div>
            </div>

            <div className="relative order-1 md:order-2 mb-6 md:mb-0">
              <div className="relative flex justify-center">
                <div className="w-full max-w-[720px]">
                  <Image
                    src={beforeAfterImage}
                    alt="Before and After Procedure Results"
                    className="w-full h-auto rounded-lg"
                    width={720}
                    height={580}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#FDF3EB] w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-[60px] text-black rounded-lg">
          <div className="max-w-[1440px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-medium mb-4 sm:mb-8 md:mb-12"
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1E1E1E] text-white rounded-xl p-4 sm:p-6 md:p-8 space-y-2"
            >
              {faqs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-[#333] last:border-none overflow-hidden"
                >
                  <motion.div
                    className="flex items-center justify-between py-3 sm:py-4 cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    <p className="text-sm sm:text-base md:text-lg font-medium pr-2">
                      {index + 1}. {item.question}
                    </p>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                  </motion.div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm md:text-base text-[#CCCCCC] pb-3 sm:pb-4 pl-2">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DropDownPage;
