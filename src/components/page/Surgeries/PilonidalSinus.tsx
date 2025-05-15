import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const PilonidalSinus = () => {
  const title = 'Pilonidal Sinus Treatment';
  const subtitle = ' Essential Steps to a Pain-Free Life';

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
    coloredTitle: 'Pilonidal Sinus Treatment',
    title: 'Treatment Options at Personiks:',
    bulletPoints: [
      'ncision and Drainage: Provides immediate relief but doesn’t prevent recurrence.',
      'Laser Hair Removal: Addresses hair-related triggers, reducing the chances of recurrence.',
      'Excision and Flap Procedures: Surgical removal of the cyst and affected tissue, with reconstruction for lower recurrence rates.',
      'Seeking professional advice early is key to a smoother path to recovery, enhancing the quality of life for pilonidal sinus sufferers.',
    ],
  };

  const faqs = [
    {
      question:
        'Is laser hair removal a permanent solution for pilonidal sinus?',
      answer:
        'While laser hair removal is not a cure for the sinus itself, it effectively reduces hair growth in the affected area, significantly lowering the risk of recurrence after treatment. It’s often recommended as a long-term preventive measure alongside surgical or drainage procedures.',
    },
    {
      question: ' How long is the recovery after excision and flap surgery?',
      answer:
        'Recovery time can vary based on the extent of the procedure and individual healing, but most patients can return to normal activities within 2–4 weeks. Proper wound care and follow-up with your surgeon are crucial to ensuring a smooth and infection-free recovery.',
    },
    {
      question: 'What causes a pilonidal sinus and who is most at risk?',
      answer:
        'A pilonidal sinus is often caused by loose hairs penetrating the skin, leading to infection and cyst formation. It commonly affects people who sit for long periods, have coarse body hair, or experience frequent friction in the lower back area. Young adults and men are generally more prone to this condition.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2023/10/pilonidal-sinus-repair-by-rhomboid-flap-e-1.png';
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

export default PilonidalSinus;
