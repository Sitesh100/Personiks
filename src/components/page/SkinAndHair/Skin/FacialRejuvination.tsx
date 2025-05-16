import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const FacialRejuvination = () => {
  const title = 'Facial Rejuvination';
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
    coloredTitle: 'Facial Rejuvenation',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The cost of facial rejuvenation in Hyderabad can vary depending on the specific treatment or combination of treatments that are recommended for your individual needs and goals. However, to give you an idea of the cost  typically range from INR 20,000 to INR 2,00,000 or more.',
    ],
  };

  const faqs = [
    {
      question: 'What is facial rejuvenation, and how does it work?',
      answer:
        'Facial rejuvenation is a set of cosmetic procedures designed to restore a more youthful appearance to the face. It can involve a variety of non-surgical and surgical treatments, including Botox, dermal fillers, chemical peels, and facelifts. The goal of facial rejuvenation is to address specific concerns such as fine lines, wrinkles, and sagging skin to create a more youthful, refreshed appearance.',
    },
    {
      question:
        'What are the different types of facial rejuvenation treatments available?',
      answer:
        'There are many different types of facial rejuvenation treatments available, including non-surgical treatments like Botox, dermal fillers, chemical peels, and microdermabrasion, as well as surgical treatments like facelifts and brow lifts. The specific treatments used will depend on the individual’s needs and goals.',
    },
    {
      question: 'What are the benefits of facial rejuvenation?',
      answer:
        'Facial rejuvenation can provide a wide range of benefits, including a more youthful appearance, improved skin texture and tone, reduced fine lines and wrinkles, and increased self-confidence.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-5.16.26-PM.jpeg';

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

export default FacialRejuvination;
