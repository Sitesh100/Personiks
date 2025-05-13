import Image from "next/image";

const featureCards = [
  {
    title: "Trusted Expertise",
    description: "Performed by experienced and board-certified surgeons",
    icon: "/assets/trust.png",
  },
  {
    title: "End-to-End Care",
    description: "Support before, during, and after your procedure",
    icon: "/assets/HeartHand.png",
  },
  {
    title: "High Patient Satisfaction",
    description: "Consistently rated highly by real patients",
    icon: "/assets/patient.png",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#111111] text-white w-full px-16 py-[60px]">
      <div className="max-w-[1439px] mx-auto flex flex-col gap-[57px]">
        {/* Header */}
        <h2 className="text-[60px] mb-5">
          Why choose <span className="text-[#D1A846]">Personiks</span>?
        </h2>

        {/* Cards */}
        <div className="flex justify-between gap-4">
          {featureCards.map((item, index) => (
            <div
              key={index}
              className="bg-black border border-white rounded-lg w-[400px] h-[180px] px-6 py-8 text-center relative group"
            >
              <div className="flex justify-center mb-4 absolute w-[105px] h-[80px] top-[-30px] left-1/2 transform -translate-x-1/2">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-[25px] mt-8">{item.title}</h3>
              <p className="text-[18px] text-[#EAEAEA]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="w-full h-full overflow-hidden text-black font-medium text-[16px]">
          <div className="flex justify-between items-center p-4">
            <div className="w-full h-[620px] relative">
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
