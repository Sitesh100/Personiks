import Image, { StaticImageData } from "next/image";

type TestimonialCardProps = {
  name: string;
  service: string;
  image?: StaticImageData | string; // Accept both StaticImageData and string
  quote: string;
  stars: number;
};

export default function TestimonialCard({
  name,
  service,
  image,
  quote,
  stars,
}: TestimonialCardProps) {
  return (
    <div
      className="bg-[#FFF8EE] rounded-[20px] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
      style={{
        width: "413px",
        height: "256px",
        padding: "20px",
      }}
    >
      {/* Upper box: headline/service left, image right */}
      <div className="flex w-full gap-3 mb-4">
        <div
          className="flex flex-col justify-between flex-shrink-0"
          style={{ width: "193px" }}
        >
          <h3
            className="font-outfit font-medium text-black mb-2 truncate"
            style={{
              fontSize: "30px",
              lineHeight: "100%",
              letterSpacing: "-0.02em",
              height: "38px",
            }}
          >
            {name}
          </h3>
          <div
            className="font-outfit font-light text-[#444] flex items-center"
            style={{
              fontSize: "16px",
              lineHeight: "100%",
              height: "18px",
            }}
          >
            <span className="text-[#777]">Service-</span>
            <span className="ml-1 font-normal truncate">{service}</span>
          </div>
        </div>

        {image ? (
          <div
            className="flex-shrink-0"
            style={{ width: "165px", height: "114px" }}
          >
            <Image
              src={image}
              alt={name}
              width={165}
              height={114}
              className="rounded-[20px] object-cover shadow-sm"
              style={{
                width: "165px",
                height: "114px",
              }}
            />
          </div>
        ) : (
          <div
            className="flex-shrink-0 bg-[#F5E8D4] rounded-[20px] flex items-center justify-center"
            style={{
              width: "165px",
              height: "114px",
            }}
          >
            <span className="font-outfit font-medium text-[#E3B63A] text-3xl">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Star box */}
      <div
        className="flex items-center bg-white border border-[#E3B63A]/20 self-start"
        style={{
          width: "109px",
          height: "25px",
          borderRadius: "20px",
          padding: "3px 7px",
          marginBottom: "12px",
          borderWidth: "0.2px",
        }}
      >
        <div className="flex items-center gap-[3px]">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width={16}
              height={14}
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="10,1 12.59,6.92 19,7.64 14,12.26 15.18,18.54 10,15.27 4.82,18.54 6,12.26 1,7.64 7.41,6.92"
                fill={i < stars ? "#E3B63A" : "#E5E7EB"}
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div
        className="font-outfit font-light text-black flex-grow overflow-hidden"
        style={{
          fontSize: "18px",
          lineHeight: "130%",
          letterSpacing: "0.01em",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        <span className="text-[#E3B63A] text-2xl font-medium">&ldquo;</span>
        {quote}
        <span className="text-[#E3B63A] text-2xl font-medium">&rdquo;</span>
      </div>
    </div>
  );
}
