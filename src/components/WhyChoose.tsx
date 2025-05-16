import Image from 'next/image';

// ComparisonTable component included directly in the same file
const ComparisonTable = () => {
  const tableData = [
    {
      category: 'Expertise',
      otherClinics: 'General Practitioners',
      personiks: 'Certified Cosmetic Surgeons',
    },
    {
      category: 'Technology',
      otherClinics: 'Traditional Equipment',
      personiks: 'Advanced FDA Tech',
    },
    {
      category: 'Safety Protocols',
      otherClinics: 'Basic Hygiene',
      personiks: 'International Safety Standards',
    },
    {
      category: 'Care Approach',
      otherClinics: 'Procedure Only',
      personiks: 'End-to-End Personalised Care',
    },
    {
      category: 'Patient Reviews',
      otherClinics: 'Mixed Feedback',
      personiks: '4.9★ Average on Google',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto font-sans rounded-lg overflow-hidden shadow-lg">
      {/* Header */}
      <div
        className="grid grid-cols-3 text-black font-semibold"
        style={{
          background: '#D4AF37',
        }}
      >
        <div className="p-6 text-2xl">Overall Points</div>
        <div className="p-6 text-2xl text-center">Other Clinics</div>
        <div className="p-6 text-2xl text-center">Personiks</div>
      </div>

      {/* Spacer */}
      <div className="h-8 bg-[#FFF8EE]"></div>

      {/* Table rows */}
      {tableData.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-3 text-black mb-2"
          style={{
            background: '#D4AF37',
          }}
        >
          <div className="p-6 text-xl font-medium flex items-center">
            {row.category}
          </div>
          <div className="p-6 text-xl flex items-center justify-center relative">
            {/* Divider line */}
            <div className="absolute left-0 top-4 bottom-4 w-px bg-black opacity-20"></div>
            {row.otherClinics}
            {/* Divider line */}
            <div className="absolute right-0 top-4 bottom-4 w-px bg-black opacity-20"></div>
          </div>
          <div className="p-6 text-xl flex items-center justify-center">
            {row.personiks}
          </div>
        </div>
      ))}
    </div>
  );
};

const featureCards = [
  {
    title: 'Trusted Expertise',
    description: 'Performed by experienced and board-certified surgeons',
    icon: '/assets/trust.png',
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
    <section className="bg-[#111111] text-white w-full md:px-16 py-[60px]">
      <div className="max-w-[1439px] mx-auto flex flex-col gap-[57px]">
        {/* Header */}
        <h2 className="text-[60px] mb-5">
          Why choose <span className="text-[#D1A846]">Personiks</span>?
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {featureCards.map((item, index) => (
            <div
              key={index}
              className="bg-black border border-white rounded-lg w-full md:w-[400px] h-[180px] px-6 py-8 text-center relative group"
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

        {/* Comparison Table - replacing the image with our ComparisonTable component */}
        <div className="w-full py-8">
          <ComparisonTable />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
