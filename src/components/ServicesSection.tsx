import Image from "next/image";

const services = [
  { title: "Liposuction", img: "/assets/Liposuction.png" },
  { title: "Rhinoplasty", img: "/assets/Rhinoplasty.png" },
  { title: "Gynecomastia", img: "/assets/Gynecomastia.png" },
  { title: "Fat Grafting", img: "/assets/FatGrafting.png" },
  { title: "Tummy tuck & Liposuction", img: "/assets/Tummy.png" },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#111111] text-white pt-16 ">
      <div className="w-full">
        {/* Heading */}
        <h2 className="text-4xl md:text-[60px] font-sans ml-16">
          <span className="text-white">Our </span>
          <span className="text-[#D9AC47]">Services</span>
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-lg text-[#EAEAEA] ml-16">
          Explore a range of specialized procedures tailored to your needs.
        </p>

        {/* Services Grid */}
        <div className="mt-10 bg-[#fef5ef] py-6 w-full px-10">
          <div className="flex flex-nowrap justify-center gap-8 px-10">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="rounded-full overflow-hidden w-[250px] h-[250px] bg-black flex items-center justify-center p-1">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={290}
                    height={290}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="mt-6 font-semibold text-center text-black text-2xl">
                  {service.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
