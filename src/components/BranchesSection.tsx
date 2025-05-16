import Image from 'next/image';

const branches = [
  {
    name: 'Personiks Manikonda',
    img: '/assets/branch1.png',
  },
  {
    name: 'Personiks Nallagandla',
    img: '/assets/branch2.png',
  },
  {
    name: 'Personiks Punjagutta',
    img: '/assets/branch3.png',
  },
];

const BranchesSection = () => {
  return (
    <section className="bg-[#111111] text-white py-8 md:py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[85rem] mx-auto">
        {/* Title */}

        <div className="relative inline-block mb-5">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#f0d078] to-[#D9AC47]">
            Our Branches
          </h2>
          <div className="h-1 w-1/3 bg-gradient-to-r from-[#D9AC47] to-transparent mt-2 rounded-full animate-pulse"></div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 font-light max-w-3xl leading-relaxed">
          Find our trusted clinics across convenient locations near you.
        </p>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden w-full max-w-[500px] mx-auto relative group aspect-[3/2]"
            >
              <Image
                src={branch.img}
                alt={branch.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-transparent backdrop-blur-sm text-center bg-opacity-40 p-2 sm:p-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-black">
                  {branch.name}
                </h3>
              </div>
              {/* Top-right icons */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex flex-col gap-2">
                <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center">
                  📍
                </button>
                <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black text-xs font-bold flex items-center justify-center">
                  📞
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* Disable hover effects on touch devices */
        @media (hover: none) {
          .group:hover .group-hover\\:scale-105 {
            transform: scale(1);
          }
        }

        /* Adjust typography for smaller screens */
        @media (max-width: 640px) {
          h2 {
            font-size: calc(8vw + 1rem); /* Scales with viewport */
          }
          h3 {
            font-size: 1.25rem;
          }
        }

        /* Ensure images maintain aspect ratio */
        .aspect-[3/2] {
          position: relative;
          aspect-ratio: 3 / 2;
        }
      `}</style>
    </section>
  );
};

export default BranchesSection;
