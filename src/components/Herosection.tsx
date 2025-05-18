'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from './Header';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { YouTubeProps } from 'react-youtube'; // Import YouTubeProps
import Link from 'next/link';

interface HeroSectionProps {
  onBookNow: () => void;
}

// Dynamically import YouTube component with SSR disabled
const YouTube = dynamic(() => import('react-youtube'), { ssr: false });

const HeroSection: React.FC<HeroSectionProps> = ({ onBookNow }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.setPlaybackRate(1);
    event.target.playVideo();
    setIsVideoReady(true);
  };

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
      loop: 1,
      playlist: '_RS-88PviJQ',
      showinfo: 0,
      rel: 0,
    },
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] bg-cover bg-center text-white overflow-hidden">
      <Header />
      <div className="absolute inset-0 z-0">
        {!isVideoReady && (
          <Image
            src="/assets/Video.png"
            alt="background"
            fill
            className="object-cover w-full h-full"
            priority
          />
        )}
        {isMounted && (
          <YouTube
            videoId="_RS-88PviJQ"
            opts={opts}
            onReady={onPlayerReady}
            className="absolute inset-0 w-full h-full overflow-hidden"
            iframeClassName="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] min-w-[150vw] min-h-[150vh] -translate-x-1/2 -translate-y-1/2"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1 className="font-outfit text-[#E3B63A] text-[48px] md:text-[50px] leading-tight mb-4">
          LipoSculpt<sup className="text-[20px] align-super">™</sup>
        </h1>
        <p className="font-outfit text-white text-[24px] md:text-[35px] leading-tight mb-10 max-w-2xl">
          Experience Top-Rated Cosmetic Surgery in Hyderabad
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-outfit font-medium text-lg md:text-xl h-[56px] px-8 md:px-10 rounded-2xl bg-[#E3B63A] text-black shadow-lg hover:bg-opacity-90 transition"
            onClick={onBookNow}
          >
            Book Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-outfit font-medium text-lg md:text-xl h-[56px] px-8 md:px-10 rounded-2xl border-2 border-[#E3B63A] text-[#E3B63A] bg-transparent hover:bg-[#E3B63A] hover:text-black transition"
          >
            Explore Services
          </motion.button>
        </div>

        <p className="mt-2 text-lg font-outfit font-normal text-white">
          Access your account –{' '}
          <Link href={'/login'}>
            <span className="underline cursor-pointer hover:text-[#E3B63A] transition-colors">
              Login
            </span>
          </Link>{' '}
          or{' '}
          <Link href={'/register'}>
            <span className="underline cursor-pointer hover:text-[#E3B63A] transition-colors">
              Register
            </span>
          </Link>
        </p>
      </motion.div>

      <div className="absolute bottom-8 left-8 flex items-center gap-4 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="font-outfit text-base bg-[#E3B63A] text-black px-6 py-3 rounded-2xl shadow-lg h-[44px] hover:shadow-xl transition-all"
        >
          Book Now
        </motion.button>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full border-2 border-[#E3B63A] flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-all"
          >
            <Image
              src="/assets/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
              className="object-contain"
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full border-2 border-[#E3B63A] flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-all"
          >
            <Image
              src="/assets/chat.png"
              alt="Chat"
              width={24}
              height={24}
              className="object-contain"
            />
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-4 z-20">
        <Link href="/workshop">
          {' '}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" flex items-center justify-center hover:shadow-xl transition-all"
          >
            <Image
              src="/assets/workshop.png"
              alt="Bot"
              width={72}
              height={72}
              className="object-contain text-[#E3B63A] "
            />
          </motion.button>
          <p className="text-[#E3B63A] font-semibold">Workshop</p>
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
        >
          <Image
            src="/assets/call.png"
            alt="Call"
            width={72}
            height={72}
            className="object-contain"
          />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
