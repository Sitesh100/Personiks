'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PaymentDetails() {
  // State to track which video is being played in fullscreen modal (if any)
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Video data with custom thumbnails
  const testimonialVideos = [
    {
      id: '9i_icdxEaRw',
      title: 'Dr. Kinnera Reddy S V Reviews',
      thumbnail: '/assets/Testimonal1.png',
    },
    {
      id: 'KDvHI2RG2fg',
      title: 'Dr. Mohsina Subair Review',
      thumbnail: '/assets/Testimonal2.png',
    },
    {
      id: 'vG1MeRGYPgk',
      title: 'Dr. Saju Narayanan Reviews',
      thumbnail: '/assets/Testimonal3.png',
    },
    {
      id: 'Wpo24qz66lA',
      title: 'Dr. Siddharthkumar M Sakhiya Reviews',
      thumbnail: '/assets/Testimonal4.png',
    },
  ];

  // Function to open video modal
  const openVideoModal = (videoId: string) => {
    setActiveVideo(videoId);
  };

  // Function to close video modal
  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Payment Details */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-amber-400 text-3xl font-semibold text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            PAYMENT DETAILS
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* QR Code */}
            <motion.div
              className="bg-white p-4 rounded-md"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src="/assets/PaymentQR.png"
                alt="Payment QR Code"
                width={200}
                height={200}
                className="w-48 h-48"
              />
              <div className="text-center text-xs mt-1 text-black">
                SCAN & PAY WITH ANY UPI APP
              </div>
            </motion.div>

            {/* Account Details */}
            <motion.div
              className="text-white space-y-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <span className="font-medium">Account no:</span> 50200031219232
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <span className="font-medium">Ifsc:</span> Hdfc0000045
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <span className="font-medium">Name:</span> Specterr health care
                solutions LLP
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Workshop Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.h2
            className="text-amber-400 text-3xl font-semibold text-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            WORKSHOP TESTIMONIALS
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {testimonialVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className="aspect-video rounded-md overflow-hidden relative cursor-pointer group"
                onClick={() => openVideoModal(video.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.9 + index * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Custom Video Thumbnail */}
                <div className="relative w-full h-full">
                  <Image
                    src={video.thumbnail || '/placeholder.svg'}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40"
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center"
                    whileHover={{ scale: 1.15 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Video Title */}
                <div className="absolute bottom-0 left-0 right-0 text-white text-sm bg-gradient-to-t from-black to-transparent p-3">
                  {video.title}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Modal with AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeVideoModal}
                className="absolute -top-10 right-0 text-white hover:text-amber-400"
                whileHover={{ scale: 1.1, color: '#fbbf24' }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close</span>
              </motion.button>

              {/* YouTube Embed */}
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
