import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const DermaRollor = () => {
  const title = 'Derma Rooller Treatment';
  const subtitle = 'Best Dermatologist Centre in Hyderabad';

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
    coloredTitle: 'Derma Rollor',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'However, the cost of a derma roller in Hyderabad may vary depending on various factors such as the brand, quality, size, and the location where it is sold. Generally, the cost of a derma roller in Hyderabad can range from INR 300 to INR 2000. It is recommended to do some research, compare prices and quality from different sources before making a purchase. Additionally, it is important to make sure that the derma roller is from a trusted source and is sterile to avoid any potential risk of infection.',
    ],
  };

  const faqs = [
    {
      question: 'What is a derma roller?',
      answer:
        'A derma roller is a handheld device that has a roller with small needles attached to it. It is used to create tiny punctures in the skin to stimulate the body’s natural healing response and improve skin texture and tone.',
    },
    {
      question: 'What are the benefits of using a derma roller?',
      answer:
        'Derma rollers can help to improve the appearance of acne scars, fine lines and wrinkles, hyperpigmentation, uneven skin texture, and stretch marks. They can also help to stimulate collagen production and improve overall skin health.',
    },
    {
      question: 'Is derma rolling painful?',
      answer:
        'Derma rolling can cause some discomfort, but it is typically not painful. The sensation can feel like a mild prickling or tingling sensation on the skin.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2023/02/derma-roller.jpg';

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

export default DermaRollor;
