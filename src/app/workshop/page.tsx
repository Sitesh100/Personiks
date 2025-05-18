import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Calendar, MapPin, Users, Clock } from 'lucide-react';
import WorkshopForm from '@/components/workshop/WorkshopForm';
import PaymentDetails from '@/components/workshop/PaymentDetails';
import MeetOurTrainer from '@/components/workshop/MeetOurTrainer';

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-black to-zinc-900 min-h-screen">
      {/* Header with sticky navigation */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8 lg:gap-16">
            <Link
              href="/"
              className="relative hover:opacity-80 transition-opacity"
            >
              <Image
                src="/assets/logo.png"
                alt="Personiks"
                width={120}
                height={48}
                className="h-auto"
              />
            </Link>
            <div className="h-8 border-r border-zinc-700 hidden md:block"></div>
            <Image
              src="/assets/image 40.png"
              alt="Cocoona Aesthetics Academy"
              width={200}
              height={64}
              className="h-auto hidden md:block"
            />
          </div>
          <Link
            href="#register"
            className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-4 py-2 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-amber-400/20 hidden md:block"
          >
            Register Now
          </Link>
        </div>
      </header>

      {/* Hero Section with Background */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background pattern/gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-amber-400 text-lg md:text-xl tracking-wider mb-2 animate-fade-in-up">
              6TH EDITION
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-light mb-2 animate-fade-in-up animation-delay-150">
              Advanced Breast & Body
            </h2>
            <h1 className="text-amber-400 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-300">
              CONTOURING WORKSHOP
            </h1>
            <p className="text-white text-xl md:text-2xl font-light mb-8 animate-fade-in-up animation-delay-450">
              Live Hands-on Program
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-fade-in-up animation-delay-600">
              <Link
                href="#register"
                className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-lg py-3 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-amber-400/20 flex items-center justify-center gap-2"
              >
                <Users size={18} />
                Register Now
              </Link>
              <Link
                href="#details"
                className="bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 font-medium text-lg py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2"
              >
                <Clock size={18} />
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section - Full Width Below Hero */}
      <section className="w-full md:h-[85vh] h-[50vh] relative z-10 overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/IjccRlGSK5M"
          title="Workshop Promo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>

      {/* Workshop Key Info Cards */}
      <section className="py-12 relative z-10" id="details">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* What? */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-800 hover:border-amber-400/30 transition-all shadow-xl shadow-black/50 hover:shadow-amber-400/5">
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-400/10 p-3 rounded-full mb-4">
                  <Calendar className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-white text-xl mb-2">What?</h3>
                <p className="text-amber-400 text-2xl font-semibold">
                  6th edition
                </p>
              </div>
            </div>

            {/* When? */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-800 hover:border-amber-400/30 transition-all shadow-xl shadow-black/50 hover:shadow-amber-400/5">
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-400/10 p-3 rounded-full mb-4">
                  <Calendar className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-white text-xl mb-2">When?</h3>
                <p className="text-amber-400 text-2xl font-semibold">
                  7th & 8th August 2025
                </p>
              </div>
            </div>

            {/* Where? */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-zinc-800 hover:border-amber-400/30 transition-all shadow-xl shadow-black/50 hover:shadow-amber-400/5">
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-400/10 p-3 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-white text-xl mb-2">Where?</h3>
                <p className="text-amber-400 text-2xl font-semibold">
                  Nallagandla, Hyderabad
                </p>
              </div>
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
        </div>
      </section>

      {/* Meet our trainer section */}
      <MeetOurTrainer />

      {/* Live Classes Section with improved styling */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-white text-3xl font-semibold mb-3">
              LIVE CLASSES
            </h2>
            <p className="text-zinc-400 mb-10">
              Get hands-on experience with these advanced procedures
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'HD Tummy Liposuction',
                'Tummy Tuck',
                'Thigh/Arm Liposuction',
                'Breast Reduction',
                'Mastopexy/Breast Lift',
                'Double Chin & Face Lipo',
                'Facial & Neck Tightening Laser Endo Lift',
                'Waist Shaping by RIB Re-Modeling',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 flex items-center justify-center hover:border-amber-400/50 hover:bg-zinc-800/80 transition-all"
                >
                  <span className="text-amber-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section with visual improvements */}
      <section className="py-16 bg-zinc-900/50" id="eligibility">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block p-2 bg-amber-400/10 rounded-lg mb-4">
                <Users className="h-6 w-6 text-amber-400" />
              </div>
              <h2 className="text-white text-3xl font-semibold mb-3">
                ELIGIBILITY
              </h2>
              <p className="text-amber-400 text-2xl md:text-3xl font-medium">
                DNB/M.Ch. Plastic Surgeons
              </p>
            </div>

            {/* Register button with animation */}
            <div className="flex justify-center mb-16">
              <Link
                href="#register"
                className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-xl py-4 px-12 rounded-full transition-all hover:shadow-lg hover:shadow-amber-400/20 animate-pulse-subtle"
              >
                Register now!
              </Link>
            </div>

            {/* Limited seats notice with better styling */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-amber-400/20 rounded-xl py-6 px-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-amber-400 mr-3" />
                  <span className="text-white">Limited seats available</span>
                </div>
                <div className="hidden md:block h-8 w-px bg-zinc-700"></div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-amber-400 mr-3" />
                  <span className="text-white">Hurry up!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section with improved UI */}
      <section id="register" className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl font-semibold mb-3">
              REGISTER FOR THE WORKSHOP
            </h2>
            <p className="text-zinc-400">
              Secure your spot in this exclusive training event
            </p>
          </div>
          <WorkshopForm />
        </div>
      </section>

      <PaymentDetails />

      {/* Footer with improved design */}
      <footer className="py-16 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Venue */}
            <div className="text-center mb-12">
              <h2 className="text-amber-400 text-3xl font-semibold mb-6">
                VENUE
              </h2>
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
                <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <p className="text-white text-lg mb-4 leading-relaxed">
                  3rd Floor, SSS Navtej Road, Above Reliance Trends Store,
                  Opposite To Aparna Neo Mall, Huda Layout, Gopanpalle,
                  Nallagandla, Hyderabad, Telangana 500019
                </p>
                <a
                  href="https://maps.google.com/?q=Nallagandla,Hyderabad,Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>View on Google Maps</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center mb-12">
              <h3 className="text-amber-400 text-2xl font-medium mb-8">
                For more details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="tel:+919989266612"
                  className="flex items-center justify-center text-white hover:text-amber-400 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 hover:border-amber-400/30 transition-all"
                >
                  <Phone className="h-5 w-5 mr-3 text-amber-400" />
                  <span>+91 99892 66612</span>
                </a>

                <a
                  href="mailto:personikscosmetic@gmail.com"
                  className="flex items-center justify-center text-white hover:text-amber-400 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 hover:border-amber-400/30 transition-all"
                >
                  <Mail className="h-5 w-5 mr-3 text-amber-400" />
                  <span>personikscosmetic@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="flex justify-center space-x-6 mb-8">
                {/* Social Media Icons */}
                {['facebook', 'instagram', 'twitter', 'linkedin'].map(
                  (social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="text-zinc-500 hover:text-amber-400 transition-colors"
                      aria-label={social}
                    >
                      <div className="w-10 h-10 flex items-center justify-center border border-zinc-800 rounded-full hover:border-amber-400/30 transition-all">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {social === 'facebook' && (
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          )}
                          {social === 'instagram' && (
                            <path d="M16 8a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          )}
                          {social === 'twitter' && (
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          )}
                          {social === 'linkedin' && (
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                          )}
                        </svg>
                      </div>
                    </a>
                  )
                )}
              </div>

              <div className="text-zinc-500 text-sm">
                © {new Date().getFullYear()} Personiks & Cocoona Aesthetics
                Academy. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
