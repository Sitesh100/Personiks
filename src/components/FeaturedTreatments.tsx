'use client';

import Image from 'next/image';

const treatments = [
  {
    title: 'Liposuction',
    description:
      "Are you struggling to lose stubborn fat that won't budge no matter how much you diet or exercise?",
    img: '/assets/featuretreatment1.png',
  },
  {
    title: 'Rhinoplasty',
    description:
      'Discover a refined look and easier breathing through Rhinoplasty.',
    img: '/assets/featuretreatment2.png',
  },
];

const FeaturedTreatments = () => {
  return (
    <section className="bg-[#111111] text-white py-12 px-16">
      <div className="w-full">
        {/* Header */}
        <h2 className="text-[60px] mb-2">Featured treatments</h2>
        <p className="text-[#EAEAEA] mb-8 text-[16px] max-w-3xl">
          Discover our most advanced procedures, carefully selected for
          effectiveness and patient satisfaction.
        </p>

        {/* Cards */}
        <div className="flex gap-[24px]">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="flex bg-white text-black overflow-hidden w-[680px] h-[350px]"
            >
              <div className="w-1/2 relative">
                <Image
                  src={treatment.img}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-1/2 bg-[#F2C94C] p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold">{treatment.title}</h3>
                  <p className="text-sm mt-2">{treatment.description}</p>
                </div>
                <button className="mt-4 px-4 py-2 bg-white text-black rounded-md font-medium w-fit">
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
