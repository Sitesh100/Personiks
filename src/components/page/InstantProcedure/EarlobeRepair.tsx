import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const EarlobeRepair = () => {

  const title = 'Ear Lobe Treatment';
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
    coloredTitle: 'Ear Lobe Treatment',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Ear Lobe Treatment cost can range from Rs. 15K to Rs. 20K and is driven by only one factor, whether you need earlobe reconstruction for one or both ear lobes',

    ],
  };

  const faqs = [
    {

      question:
        'Is the cost of earlobe repair surgery inclusive of all components of the procedure?',
      answer:
        'Yes, the cost typically includes all components of the earlobe repair procedure, encompassing the surgical technique employed, post-surgery care, and follow-up consultations.',
    },
    {
      question: 'What are the components of earlobe repair surgery?',
      answer:
        'Earlobe repair surgery involves several components, including precise incisions, removal of excess tissue, suturing, and careful reconstruction to restore a natural and aesthetically pleasing appearance.',
    },
    {
      question: 'Is earlobe repair surgery a painful procedure?',
      answer:
        'The procedure is performed under local anesthesia to minimize discomfort. Patients may experience mild discomfort during the initial healing period, which is manageable with prescribed pain medications.',

    },
  ];

  const beforeAfterImage =

    'https://personiks.com/wp-content/uploads/2024/02/Ear-Lobe-Website-Icon-Before-and-After-2-1.jpg';


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

export default EarlobeRepair;
