import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import WorkshopForm from '@/components/workshop/WorkshopForm';
import PaymentDetails from '@/components/workshop/PaymentDetails';
import MeetOurTrainer from '@/components/workshop/MeetOurTrainer';

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-32">
          <Link
            href="/"
            className="relative hover:opacity-80 transition-opacity"
          >
            <Image
              src="/assets/logo.png"
              alt="Personiks"
              width={150}
              height={60}
              className="h-auto"
            />
          </Link>
          <Image
            src="/assets/image 40.png"
            alt="Cocoona Aesthetics Academy"
            width={250}
            height={80}
            className="h-auto"
          />
        </div>
      </header>

      <section className="relative py-20 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-2xl md:text-3xl font-light mb-2">
            Advanced Breast & Body
          </h2>
          <h1 className="text-amber-400 text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            CONTOURING WORKSHOP
          </h1>
          <p className="text-white text-xl md:text-2xl font-light">
            Live Hands-on Program
          </p>
        </div>
      </section>

      <MeetOurTrainer />

      {/* Workshop Info Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* What? */}
            <div className="bg-zinc-900/80 rounded-lg p-6 text-center">
              <h3 className="text-white text-xl mb-2">What?</h3>
              <p className="text-amber-400 text-2xl font-semibold">
                6th edition
              </p>
            </div>

            {/* When? */}
            <div className="bg-zinc-900/80 rounded-lg p-6 text-center">
              <h3 className="text-white text-xl mb-2">When?</h3>
              <p className="text-amber-400 text-2xl font-semibold">
                7th & 8th August 2025
              </p>
            </div>

            {/* Where? */}
            <div className="bg-zinc-900/80 rounded-lg p-6 text-center">
              <h3 className="text-white text-xl mb-2">Where?</h3>
              <p className="text-amber-400 text-2xl font-semibold">
                Nallagandla, Hyderabad
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-12 mb-16 text-center max-w-4xl mx-auto">
            <p className="text-white text-lg leading-relaxed">
              Refine your skills in breast and body contouring with direct
              mentorship from top professionals. Participate in live case
              sessions and practical training in this cutting-edge workshop.
            </p>
          </div>

          {/* Live Classes */}
          <div className="text-center">
            <h2 className="text-white text-3xl font-semibold mb-8">
              LIVE CLASSES
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-transparent border border-amber-400 text-amber-400 px-5 py-2 rounded-full text-sm">
                HD Tummy Liposuction
              </span>
              <span className="bg-transparent border border-amber-400 text-amber-400 px-5 py-2 rounded-full text-sm">
                Tummy Tuck
              </span>
              <span className="bg-transparent border border-amber-400 text-amber-400 px-5 py-2 rounded-full text-sm">
                Thigh/Arm Liposuction
              </span>
              <span className="bg-transparent border border-amber-400 text-amber-400 px-5 py-2 rounded-full text-sm">
                Breast Reduction
              </span>
              <span className="bg-transparent border border-amber-400 text-amber-400 px-5 py-2 rounded-full text-sm">
                Mastopexy/Bl
              </span>
              <span className="bg-transparent border border-amber-400 text-amber-400 px-5 py-2 rounded-full text-sm">
                Double Chin & Face Lipo
              </span>
              <span className="bg-transparent border border-amber-400 text-amber-400 px-5 py-2 rounded-full text-sm">
                Facial & Neck Tightening Laser Endo Lift
              </span>
              <span className="bg-transparent border border-amber-400 text-amber-400 px-5 py-2 rounded-full text-sm">
                Waist Shaping by RIB Re-Modeling
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility and Registration Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Top divider */}
            <div className="border-t border-amber-400/30 mb-16"></div>

            {/* Eligibility */}
            <div className="text-center mb-10">
              <h2 className="text-white text-3xl font-semibold mb-3">
                ELIGIBILITY
              </h2>
              <p className="text-amber-400 text-2xl md:text-3xl font-medium">
                DNB/M.Ch. Plastic Surgeons
              </p>
            </div>

            {/* Register button */}
            <div className="flex justify-center mb-16">
              <Link
                href="/register"
                className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-xl py-4 px-12 rounded-full transition-colors"
              >
                Register now!
              </Link>
            </div>

            {/* Bottom divider */}
            <div className="border-t border-amber-400/30 mb-10"></div>

            {/* Limited seats notice */}
            <div className="border border-amber-400/30 rounded-full py-4 px-8 flex items-center justify-center space-x-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-white">Limited seats available</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white">Hurry up!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkshopForm />
      <PaymentDetails />

      {/* Footer with Venue and Contact Information */}
      <footer className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Venue */}
            <h2 className="text-amber-400 text-3xl font-semibold mb-6">
              VENUE
            </h2>
            <p className="text-white text-lg mb-16 leading-relaxed">
              3rd Floor, SSS Navtej Road, Above Reliance Trends Store, Opposite
              To Aparna Neo Mall, Huda Layout, Gopanpalle, Nallagandla,
              Hyderabad, Telangana 500019
            </p>

            {/* Contact Information */}
            <h3 className="text-amber-400 text-2xl font-medium mb-8">
              For more details
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <a
                href="tel:+919989266612"
                className="flex items-center text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2 text-amber-400" />
                <span>+91 99892 66612</span>
              </a>

              <span className="hidden md:inline text-amber-400">|</span>

              <a
                href="mailto:personikscosmetic@gmail.com"
                className="flex items-center text-white hover:text-amber-400 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2 text-amber-400" />
                <span>personikscosmetic@gmail.com</span>
              </a>
            </div>

            <div className="mt-16 text-zinc-500 text-sm">
              © {new Date().getFullYear()} Personiks & Cocoona Aesthetics
              Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
