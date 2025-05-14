import DropDownPage from '@/components/DropDownPage/DropDownPage';
import React from 'react';

const TummyTuck = () => {
  const title = 'Tummy Liposuction and Tummy Tuck Removal';
  const subtitle = 'by Best Liposuction Centre in Hyderabad';

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
    coloredTitle: 'Tummy Liposuction or Tummy Tuck Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Belly Fat reduction with Liposuction or Tummy Tuck Surgery Cost in India varies from 80,000 to 1 lakh based on your aesthetic goals and surgery package you need',
      'If you need Tummy tuck in addition to Tummy Liposuction the cost will be higher, because Tummy Tuck also involves skin excision to tighten the skin ',
      'Personiks has affordable Laser liposuction, Vaser Liposuction and tummy tuck price packages. Personiks also offers Tummy 360 degree, which removes tummy fat reduction, bra rolls removal and love handles removal',
      'The quotation given at Personiks has no hidden costs',
    ],
  };

  const faqs = [
    {
      question: 'What is Tummy Tuck Surgery?',
      answer:
        'Tummy Tuck, or Abdominoplasty, is a cosmetic surgery that removes excess skin and fat from the abdominal area and tightens the underlying muscles. It’s ideal for individuals with loose or sagging skin due to weight loss or pregnancy.',
    },
    {
      question: 'How long does a Tummy Tuck procedure take?',
      answer:
        'The surgery usually takes about 2 to 4 hours, depending on the extent of correction needed. It is performed under general anesthesia and may require an overnight hospital stay for monitoring.',
    },
    {
      question: 'Is Tummy Tuck a weight loss procedure?',
      answer:
        'No, a tummy tuck is not meant for weight loss. It is best suited for patients who are near their ideal weight but struggle with excess skin, stretched muscles, or localized fat deposits that don’t respond to diet and exercise.',
    },
    {
      question: 'What is the recovery time after a Tummy Tuck?',
      answer:
        'Initial recovery typically takes 2 to 3 weeks. Most patients can return to light activities after this period. Full healing and final results are seen in 2 to 3 months, depending on individual healing rates and post-op care.',
    },
    {
      question: 'Are the results of a Tummy Tuck permanent?',
      answer:
        'Yes, the results are long-lasting when combined with a healthy lifestyle. However, future pregnancies or significant weight changes can affect the outcome and may require revision surgery.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Tummy-Tuck-Icon-Before-and-After-1.jpg';
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

export default TummyTuck;
