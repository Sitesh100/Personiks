import Image from "next/image";

const branches = [
  {
    name: "Personiks Manikonda",
    img: "/assets/branch1.png",
  },
  {
    name: "Personiks Nallagandla",
    img: "/assets/branch2.png",
  },
  {
    name: "Personiks Punjagutta",
    img: "/assets/branch3.png",
  },
];

const BranchesSection = () => {
  return (
    <section className="bg-[#111111] text-white py-12 px-16 ">
      <div className="w-full ">
        {/* Title */}
        <h2 className="text-[60px] ">
          <span className="text-white">Our </span>
          <span className="text-[#D9AC47]">Branches</span>
        </h2>
        <p className="text-lg text-[#EAEAEA] ">
          Find our trusted clinics across convenient locations near you.
        </p>

        {/* Branch Cards */}
        <div className="flex gap-4 mt-8 flex-nowrap">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden w-[450px] h-[286px] relative group"
            >
              <Image
                src={branch.img}
                alt={branch.name}
                width={420}
                height={300}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-transparent backdrop-blur-sm text-center bg-opacity-40 p-2">
                <h3 className="text-[30px] font-semibold text-black">
                  {branch.name}
                </h3>
              </div>
              {/* Top-right icons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-8 h-8 rounded-full bg-white text-black text-xs font-bold">
                  📍
                </button>
                <button className="w-8 h-8 rounded-full bg-white text-black text-sm font-bold">
                  📞
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
