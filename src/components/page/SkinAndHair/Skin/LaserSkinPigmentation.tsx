import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const LaserSkinPigmentation = () => {
  const title = 'Laser Skin Pigmentation';
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
    coloredTitle: 'Laser Skin Pigmentation',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The cost of laser skin pigmentation treatment in Hyderabad can vary depending on various factors such as the size and location of the treatment area, the type of laser used, and the number of sessions required for optimal results. On average, the cost of laser skin pigmentation treatment in Hyderabad can range from Rs. 3,000 to Rs. 15,000 per session.',
    ],
  };

  const faqs = [
    {
      question: 'What is laser skin pigmentation treatment?',
      answer:
        'Laser skin pigmentation treatment is a cosmetic procedure that uses laser technology to target and break down areas of excessive pigmentation in the skin.',
    },
    {
      question:
        'What types of pigmented lesions can be treated with laser skin pigmentation?',
      answer:
        'Laser skin pigmentation can be used to treat a range of pigmented lesions, such as sun spots, age spots, freckles, and some types of birthmarks.',
    },
    {
      question: 'How does laser skin pigmentation work?',
      answer:
        'The laser emits a focused beam of light that is absorbed by the melanin pigment in the skin, causing the pigmented cells to break apart and eventually be eliminated by the body’s natural processes.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2023/02/Pigmentation-1.jpg';

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

export default LaserSkinPigmentation;
