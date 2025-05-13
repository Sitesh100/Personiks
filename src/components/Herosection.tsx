// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import Header from "@/components/Header";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen min-h-[700px] bg-cover bg-center text-white overflow-hidden">
//       {/* Background Image with overlay */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/assets/Video.png"
//           alt="background"
//           fill
//           className="object-cover"
//           priority
//         />
//         {/* Dark overlay for better text contrast */}
//         <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
//       </div>

//       {/* Header Overlay */}
//       <div className="absolute top-0 left-0 right-0 w-full z-20">
//         <Header />
//       </div>

//       {/* Hero Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
//       >
//         <h1 className="font-outfit text-[#E3B63A] text-[48px] md:text-[50px] leading-tight mb-4">
//           LipoSculpt<sup className="text-[20px] align-super">™</sup>
//         </h1>
//         <p className="font-outfit text-white text-[24px] md:text-[35px] leading-tight mb-10 max-w-2xl">
//           Experience Top-Rated Cosmetic Surgery in Hyderabad
//         </p>

//         <div className="flex flex-col sm:flex-row gap-5 mb-8">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="font-outfit font-medium text-lg md:text-xl h-[56px] px-8 md:px-10 rounded-2xl bg-[#E3B63A] text-black shadow-lg hover:bg-opacity-90 transition"
//           >
//             Book Consultation
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="font-outfit font-medium text-lg md:text-xl h-[56px] px-8 md:px-10 rounded-2xl border-2 border-[#E3B63A] text-[#E3B63A] bg-transparent hover:bg-[#E3B63A] hover:text-black transition"
//           >
//             Explore Services
//           </motion.button>
//         </div>

//         <p className="mt-2 text-lg font-outfit font-normal text-white">
//           Access your account –{" "}
//           <span className="underline cursor-pointer hover:text-[#E3B63A] transition-colors">
//             Login
//           </span>{" "}
//           or{" "}
//           <span className="underline cursor-pointer hover:text-[#E3B63A] transition-colors">
//             Register
//           </span>
//         </p>
//       </motion.div>

//       {/* Floating Buttons - Bottom Left */}
//       <div className="absolute bottom-8 left-8 flex items-center gap-4 z-20">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="font-outfit text-base bg-[#E3B63A] text-black px-6 py-3 rounded-2xl shadow-lg h-[44px] hover:shadow-xl transition-all"
//         >
//           Book Now
//         </motion.button>

//         <div className="flex gap-3">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-12 h-12 rounded-full border-2 border-[#E3B63A] flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-all"
//           >
//             <Image
//               src="/assets/whatsapp.png"
//               alt="WhatsApp"
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-12 h-12 rounded-full border-2 border-[#E3B63A] flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-all"
//           >
//             <Image
//               src="/assets/chat.png"
//               alt="Chat"
//               width={24}
//               height={24}
//               className="object-contain"
//             />
//           </motion.button>
//         </div>
//       </div>

//       {/* Floating Buttons - Bottom Right */}
//       <div className="absolute bottom-8 right-8 flex flex-col items-center gap-4 z-20">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
//         >
//           <Image
//             src="/assets/bot.png"
//             alt="Bot"
//             width={72}
//             height={72}
//             className="object-contain"
//           />
//         </motion.button>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
//         >
//           <Image
//             src="/assets/call.png"
//             alt="Call"
//             width={72}
//             height={72}
//             className="object-contain"
//           />
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import background from "../../public/image/Video.png";
// import Header from "@/components/ui/Header";
// import bot from "../../public/image/bot.png";
// import call from "../../public/image/call.png";
// import whatsapp from "../../public/image/whatsapp.png"; 
// import chat from "../../public/image/chat.png";
// import Link from "next/link";

interface HeroSectionProps {
  onBookNow: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookNow }) => {
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-cover bg-center text-white overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Video.png"
          alt="background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      </div>

      {/* Header Overlay */}
      {/* <div className="absolute top-0 left-0 right-0 w-full z-20">
        <Header />
      </div> */}

      {/* Hero Content */}
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
          Access your account –{" "}
          <span className="underline cursor-pointer hover:text-[#E3B63A] transition-colors">
            Login
          </span>{" "}
          or{" "}
          <span className="underline cursor-pointer hover:text-[#E3B63A] transition-colors">
            Register
          </span>
        </p>
      </motion.div>

      {/* Floating Buttons - Bottom Left */}
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

      {/* Floating Buttons - Bottom Right */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-4 z-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
        >
          <Image
            src="/assets/bot.png"
            alt="Bot"
            width={72}
            height={72}
            className="object-contain"
          />
        </motion.button>
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
