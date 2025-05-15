import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const EarlobeRepair = () => {
  const title =
    'Tighten your Vagina and Correct Urine Leakage after delivery and reduce protruding labia';
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
    coloredTitle: 'Vaginoplasty & labiaplasty Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Arm Liposuction or Arm Tuck Surgery Cost in India varies from 1 lakh to 2.5 lakhs based on your aesthetic goals and surgery package you need',
      'If you need Arm tuck in addition to Arm Liposuction the cost will be higher, because Arm Tuck also involves skin excision to tighten the skin ',
      'Personiks has affordable arm liposuction and arm tuck price packages that combine arms liposuction with arm tuck and bra bulge removal for your shirt or blouses to fit perfectly',
      'The quotation given at Personiks has no hidden costs',
    ],
  };

  const faqs = [
    {
      question: 'What is Vaginoplasty?',
      answer:
        'Vaginoplasty is a surgical procedure aimed at tightening the vaginal muscles and tissues that may become loose due to childbirth or aging. It helps improve vaginal tone, strength, and overall function.',
    },
    {
      question: 'What is Labiaplasty?',
      answer:
        'Labiaplasty is a cosmetic surgery that reshapes or reduces the size of the labia minora or labia majora. It is performed for aesthetic reasons, comfort, or to correct asymmetry or irritation caused by enlarged labia.',
    },
    {
      question: 'How long do Vaginoplasty and Labiaplasty surgeries take?',
      answer:
        'Vaginoplasty typically takes about 1 to 2 hours, and labiaplasty takes around 45 minutes to 1 hour. Both can be performed as outpatient procedures under local anesthesia with sedation or general anesthesia.',
    },
    {
      question: 'Is the recovery painful after these surgeries?',
      answer:
        'Some discomfort, swelling, and mild pain are expected, especially in the first few days. Pain is manageable with prescribed medications, and most patients resume light activities within a week.',
    },
    {
      question: 'When can I resume normal activities, including intimacy?',
      answer:
        'Most patients can return to non-strenuous work in about 5 to 7 days. Intimate activity should be avoided for 6 to 8 weeks or until cleared by the surgeon to ensure proper healing.',
    },
    {
      question: 'Are the results permanent?',
      answer:
        'Yes, the results are long-lasting. However, factors like aging, future childbirth, or hormonal changes may affect the outcomes over time.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/01/vaginoplasty.png.webp';
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
