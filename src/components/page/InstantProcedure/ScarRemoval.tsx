import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const ScarRemoval = () => {

  const title = 'Scar revision treatment at Personiks';
  const subtitle = 'by Best Cosmetic Surgeon in Hyderabad';

  const features = [
    { img: '/assets/natural-icon.png', title: 'Immediate and Natural Results' },
    {
      img: '/assets/patient-icon.png',
      title: 'Painless and Scarless Procedure',
    },
    { img: '/assets/advance-tech.png', title: 'Most Advanced Technologies' },
    { img: '/assets/doctor-icon.png', title: 'Board Certified Surgeons' },
  ];

  const procedureInfo = {
    coloredTitle: 'Scars or Keloid Removal Treatment',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Scars Treatment cost can range from Rs. 10K to Rs. 45K and is driven by 3 factors',
      'Prices can range based on technology and Treatment Method. Scars needing surgical excision with fillers or botox or fat grafting are more expensive than simple CO2 laser scar revision ',
      'Scars removal costs are higher for larger areas, as longer procedure time or higher number of sittings would be needed',
      'A personalized treatment cost where multiple procedures are needed for the same scar, the cost of scar treatment increases',

    ],
  };

  const faqs = [
    {

      question: 'What is CO2 laser treatment for scar removal?',
      answer:
        'CO2 laser treatment is a precise and effective method for scar removal. It uses focused light to vaporize damaged skin, stimulating collagen production and promoting smoother, rejuvenated skin.',
    },
    {
      question: 'How does scar excision contribute to scar treatment?',
      answer:
        'Scar excision involves surgically removing a scar and then closing the incision with meticulous care. This technique is suitable for certain types of scars and is often combined with other procedures for comprehensive results.',
    },
    {
      question:
        'Is this personalized scar treatment approach suitable for all patients?',
      answer:
        'Our personalized approach allows us to tailor treatments to each patient’s unique needs. During a consultation, our experienced surgeons will assess your scars and recommend a customized plan for optimal results.',

    },
  ];

  const beforeAfterImage =

    'https://personiks.com/wp-content/uploads/2024/03/Scar-Website-Icon-Before-and-After-1.jpg';


  return (
    <div>
      <DropDownPage
        title={title}
        subtitle={subtitle}
        features={features}
        procedureInfo={procedureInfo}
        faqs={faqs}
        beforeAfterImage={beforeAfterImage}
      />
    </div>
  );
};

export default ScarRemoval;
