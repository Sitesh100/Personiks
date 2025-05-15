'use client';

import Image from 'next/image';

const FeaturedTreatments = () => {
  return (
    <section className="bg-[#111111] text-white py-12 px-16">
      <div className="w-full">
        {/* Header */}
        <h2 className="text-6xl mb-2 ">Popular Cosmetic Procedures</h2>
        <p className="text-gray-200 mb-8 text-[20px] font-light mt-2 w-[75%]">
          Our most sought-after treatments including Hymenoplasty,
          High-definition Liposuction, Rhinoplasty and Breast procedures in
          Hyderabad
        </p>

        {/* Cards */}
        <div className="flex md:flex-row flex-col gap-6 flex-wrap">
          <div className="relative w-full md:w-[calc(50%-12px)] h-80 overflow-hidden rounded text-right">
            {/* Image Background */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/assets/leftFeatureCard.png"
                alt="Liposuction"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-opacity-40"></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10 w-[55%] ml-[19vw]">
              <div>
                <h3 className="text-[40px] ml-300">Liposuction</h3>
                <p className="mt-2 text-gray-100 text-2xl">
                  Are you struggling to lose stubborn fat that won&apos;t budge
                  no matter how much you diet or exercise?
                </p>
              </div>
              <button className="cursor-pointer ml-48 rounded-full mt-4 px-5 py-2 bg-white text-black font-medium w-fit hover:bg-gray-200 transition-colors">
                Book now
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-[calc(50%-12px)] h-80 overflow-hidden rounded">
            {/* Image Background */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/assets/rightFeatureCard.png"
                alt="Liposuction"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-opacity-40"></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 pl-12 flex flex-col justify-between text-white z-10 w-[55%]">
              <div>
                <h3 className="text-[40px]">Rhinoplasty</h3>
                <p className="mt-2 text-gray-100 text-2xl">
                  Discover a refined look and easier breathing through
                  Rhinoplasty.
                </p>
              </div>
              <button className=" cursor-pointer mt-4 px-5 py-2 bg-white text-black rounded-full font-medium w-fit hover:bg-gray-200 transition-colors">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
