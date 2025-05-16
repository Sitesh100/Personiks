import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const LaserSkinToning = () => {
  const title = 'Lazer Skin Toning';
  const subtitle = 'by skin specialist in Hyderabad';

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
    coloredTitle: 'Skin Laser Toning',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The cost of laser skin toning in Hyderabad can vary depending on the type of laser used, the number of sessions required, the location of the treatment center, and other factors. On average, the cost of laser skin toning in Hyderabad can range from Rs. 3,000 to Rs. 15,000 per session.',
    ],
  };

  const faqs = [
    {
      question: 'What is laser skin toning?',
      answer:
        'Laser skin toning is a non-invasive cosmetic procedure that uses laser technology to improve the appearance of skin texture, tone, and pigmentation.',
    },
    {
      question: 'How does laser skin toning work?',
      answer:
        'Laser skin toning works by using a laser to heat the dermis layer of the skin, stimulating collagen production and causing the skin to tighten. The laser is also used to target and break down pigmentation, reducing the appearance of dark spots and discoloration.',
    },
    {
      question: 'Is laser skin toning safe?',
      answer:
        'Yes, laser skin toning is generally considered safe when performed by a qualified and experienced professional. However, as with any medical procedure, there is a risk of side effects such as redness, swelling, and skin irritation.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2023/02/Skin-Toning-.jpg';

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

export default LaserSkinToning;
