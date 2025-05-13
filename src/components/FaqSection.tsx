'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How long is the recovery time for these procedures?',
    answer:
      'Recovery time varies by procedure but typically ranges from 1-2 weeks for most treatments. Our specialists will provide personalized recovery guidelines during your consultation.',
  },
  {
    question: 'Can I book an appointment online?',
    answer:
      'Yes! You can easily book appointments through our website or by calling our clinic directly. We offer flexible scheduling options to accommodate your needs.',
  },
  {
    question: 'Are the treatments safe?',
    answer:
      'All our treatments are performed by certified professionals using FDA-approved techniques and equipment. Safety is our top priority in every procedure.',
  },
  {
    question: 'What treatments does Personiks offer?',
    answer:
      'We specialize in cosmetic and medical treatments including hair restoration, laser procedures, skin rejuvenation, and body contouring. Visit our services page for a complete list.',
  },
  {
    question: 'Where is Personiks located?',
    answer:
      'Our clinic is conveniently located in the heart of the city at 123 Wellness Avenue. Free parking and accessible public transport options are available.',
  },
  {
    question: 'Is consultation required before any procedure?',
    answer:
      'Yes, a consultation is mandatory for all procedures. This allows us to assess your needs, explain the process, and create a customized treatment plan.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FDF3EB] w-full py-16 px-6 md:px-[60px] text-black">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[60px] font-medium mb-8 md:mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-[#1E1E1E] text-white rounded-xl p-6 md:p-8 space-y-2"
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
                className="flex items-center justify-between py-4 cursor-pointer"
                onClick={() => toggle(index)}
                // whileHover={{ backgroundColor: "#2a2a2a" }}
              >
                <p className="text-base md:text-lg font-medium">
                  {index + 1}. {item.question}
                </p>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5" />
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
                    <p className="text-sm md:text-base text-[#CCCCCC] pb-4 pl-2">
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
  );
};

export default FaqSection;
