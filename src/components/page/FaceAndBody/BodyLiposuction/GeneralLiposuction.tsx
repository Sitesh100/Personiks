import DropDownPage from '@/components/DropDownPage/DropDownPage';
import React from 'react';

const GeneralLiposuction = () => {
  const title = 'Healthy way to lose weight in target body parts - Liposuction';
  const subtitle = 'Sculpt them with Best Liposuction Centre in Hyderabad';

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
    coloredTitle: 'Liposuction',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Liposuction cost in India ranges from ₹70,000 to ₹2.5 lakhs depending on the number of areas treated and the technique used (traditional, laser, or VASER).',
      'Personiks offers customized and affordable liposuction packages, which can be combined with procedures like tummy tuck or body contouring.',
      'All quotations at Personiks are transparent and inclusive, with no hidden charges.',
    ],
  };

  const faqs = [
    {
      question: 'What is Liposuction?',
      answer:
        'Liposuction is a cosmetic procedure used to remove stubborn fat deposits from specific areas of the body such as the abdomen, thighs, arms, hips, and chin. It helps in improving body contour but is not a weight-loss solution.',
    },
    {
      question: 'How long does the Liposuction procedure take?',
      answer:
        'The duration depends on the number of areas being treated. Typically, liposuction takes 1 to 3 hours. It is usually done under local or general anesthesia, and patients can often return home the same day.',
    },
    {
      question: 'Is Liposuction a permanent solution for fat removal?',
      answer:
        'Yes, liposuction permanently removes fat cells from the treated areas. However, to maintain results, a healthy diet and regular exercise are essential to prevent weight gain in untreated areas.',
    },
    {
      question: 'What is the recovery time after Liposuction?',
      answer:
        'Most patients can resume light activities within 3 to 5 days. Swelling and bruising may last for a few weeks, and final results are usually visible after 2 to 3 months once the body has fully healed.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Liposuction-Website-Icon-Before-and-After-3.jpg';
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

export default GeneralLiposuction;
