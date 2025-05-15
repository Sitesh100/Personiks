import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const FaceFatGrafting = () => {
  const title =
    'Rejuvenate your face, restore face volume and face contouring with best fat grafting center';
  const subtitle = 'by Best Plastic Surgeon in Hyderabad';

  const features = [
    {
      title: 'Immediate and Natural Results',
    },
    {
      title: 'Painless and Scarless Procedure',
    },
    {
      title: 'Most Advanced Technologies',
    },
    {
      title: 'Board Certified Surgeons',
    },
  ];

  const procedureInfo = {
    coloredTitle: 'Facial Fat Grafting Procedure',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The cost in Hyderabad varies depending on the part of the face you want to target, as multiple parts increase the procedure time',
      'Fat grafting cost is driven by the procedure time, example lip fat grafting will be cheaper than fat grafting for face',
      'Please visit Breast Augmentation page, if you are interested in knowing more about breast fat grafting ',
      'Fat grafting may prove to be more cost effective in the long run as compared to fillers, as the fat left after absorption post the fat injection can stay long',
    ],
  };

  const faqs = [
    {
      question: 'What is fat grafting, and how does it work?',
      answer:
        'Fat grafting, also known as fat transfer, is a cosmetic procedure that involves harvesting fat from one area of the body through liposuction and injecting it into another area, such as the face, to enhance volume and contours.',
    },
    {
      question: 'Is fat grafting a safe procedure?',
      answer:
        'Yes, fat grafting is considered safe when performed by a qualified and experienced plastic surgeon. Using the patient’s own fat reduces the risk of allergic reactions or rejection.',
    },
    {
      question: 'What areas of the face can be treated with fat grafting?',
      answer:
        'Fat grafting is commonly used to enhance volume in areas such as the cheeks, lips, temples, and chin, providing a natural and harmonious result.',
    },
    {
      question: 'How long do the results of fat grafting last?',
      answer:
        'While not all transferred fat may survive, a portion can become permanent. Results are long-lasting, and touch-up sessions can be performed if needed.',
    },
    {
      question:
        'What is the difference between fat grafting and dermal fillers?',
      answer:
        'Fat grafting uses the patient’s own fat, providing natural and longer-lasting results. Dermal fillers use synthetic substances and offer temporary enhancements.',
    },
    {
      question: 'Can fat grafting be combined with other procedures?',
      answer:
        'Yes, fat grafting can be combined with other facial procedures, such as facelift or rhinoplasty, for a more comprehensive enhancement tailored to individual goals.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Face-Fat-Website-Icon-Before-and-After-2-1-1.jpg';

  return (
    <div>
      {' '}
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

export default FaceFatGrafting;
