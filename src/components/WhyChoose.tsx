import Image from 'next/image';

const featureCards = [
  {
    title: 'Trusted Expertise',
    description: 'Performed by experienced and board-certified surgeons',
    icon: '/assets/trust2.png',
  },
  {
    title: 'End-to-End Care',
    description: 'Support before, during, and after your procedure',
    icon: '/assets/HeartHand.png',
  },
  {
    title: 'High Patient Satisfaction',
    description: 'Consistently rated highly by real patients',
    icon: '/assets/patient.png',
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#111111] text-white w-full px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-[60px]">
      <div className="max-w-[1439px] mx-auto flex flex-col gap-8 md:gap-[57px]">
        {/* Header */}
        <div className="relative inline-block mb-2 md:mb-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#f0d078] to-[#D9AC47]">
            Why Choose Personiks
          </h2>
          <div className="h-1 w-1/3 bg-gradient-to-r from-[#D9AC47] to-transparent mt-2 rounded-full animate-pulse"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6 justify-items-center">
          {featureCards.map((item, index) => (
            <div
              key={index}
              className="bg-black border border-white rounded-lg w-full max-w-[400px] h-auto min-h-[180px] px-4 sm:px-6 py-8 text-center relative group"
            >
              <div className="flex justify-center mb-4 absolute w-[80px] sm:w-[105px] h-[60px] sm:h-[80px] top-[-25px] sm:top-[-30px] left-1/2 transform -translate-x-1/2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-xl sm:text-2xl md:text-[25px] mt-6 sm:mt-8">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg md:text-[18px] text-[#EAEAEA] mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="w-full h-full overflow-hidden text-black font-medium text-sm sm:text-base md:text-[16px] mt-6">
          <div className="flex justify-center items-center p-2 sm:p-4">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] relative">
              <Image
                src="/assets/table.png"
                alt="Comparison Table"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
