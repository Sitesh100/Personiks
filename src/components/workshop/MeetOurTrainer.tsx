'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MeetOurTrainer() {
  return (
    <section className="py-10 bg-black overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header with Animation */}
        <motion.div
          className="bg-zinc-900/80 py-4 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            Meet Our Trainers
          </h2>
        </motion.div>

        {/* Trainers Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dr. Sanjay Parashar */}
          <TrainerCard
            name="Dr. Sanjay Parashar"
            title="Consultant Plastic Surgeon & Educator"
            location="Cocoona Clinic, Dubai"
            imageSrc="/assets/Person1.png"
            delay={0.1}
          />

          {/* Dr. Venkat Ramakrishnan */}
          <TrainerCard
            name="Dr. Venkat Ramakrishnan"
            title="Senior Consultant - Plastic & Reconstructive Surgeon"
            subtitle="MBBS, MS, FRACS, FRCS."
            imageSrc="/assets/Person2.png"
            delay={0.3}
          />

          {/* Dr. Guru Karna Vemula */}
          <TrainerCard
            name="Dr. Guru Karna Vemula"
            title="MD (Personiks) Senior Cosmetic & Plastic Surgeon"
            subtitle="MRCS(UK), DNB, M.CH(PGI-Chandigarh)"
            imageSrc="/assets/Person3.png"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}

interface TrainerCardProps {
  name: string;
  title: string;
  subtitle?: string;
  location?: string;
  imageSrc: string;
  delay: number;
}

function TrainerCard({
  name,
  title,
  subtitle,
  location,
  imageSrc,
  delay,
}: TrainerCardProps) {
  return (
    <motion.div
      className="border border-amber-400/30 rounded-lg p-4 flex flex-row items-center gap-4 relative"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)',
        borderColor: 'rgba(251, 191, 36, 0.5)',
      }}
    >
      <div className="flex flex-col flex-1">
        <motion.h3
          className="text-amber-400 text-3xl font-semibold mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {name}
        </motion.h3>
        <motion.p
          className="text-white text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          {title}
          {subtitle && (
            <>
              <br />
              {subtitle}
            </>
          )}
          {location && (
            <>
              <br />
              {location}
            </>
          )}
        </motion.p>
      </div>
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={imageSrc || '/placeholder.svg'}
          alt={name}
          width={150}
          height={150}
          className="rounded-md"
        />
      </motion.div>
    </motion.div>
  );
}
