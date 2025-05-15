import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const MommyMakeOver = () => {
  const title = 'Mommy Makeover Surgery';
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
    coloredTitle: 'Mommy Makeover Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Mommy Makeover Package costs starts from 2.5 Lakhs to 5 Lakhs, based on procedures you choose in your package',
      'Personiks is amongst the few centers where surgical drainless procedure is performed that reduces downtime',
      'The quotation given at Personiks has no hidden costs',
    ],
  };

  const faqs = [
    {
      question: 'How long does an Arm Liposuction procedure take?',
      answer:
        'Arm liposuction is usually completed in a single day. The procedure typically lasts between 1 to 3 hours depending on the amount of fat to be removed and the technique used. Patients can usually return home the same day after the procedure.',
    },
    {
      question: 'Is Arm Liposuction a Permanent Solution for Fat Removal?',
      answer:
        'Yes, arm liposuction permanently removes fat cells from the treated areas. However, it is important to maintain a healthy lifestyle, as weight gain after the procedure can cause the remaining fat cells to expand.',
    },
    {
      question: 'How long does it take to see results after Arm Liposuction?',
      answer:
        'Initial changes can be seen within 1 to 2 weeks as swelling begins to subside. The final results are visible after about 2 to 3 months, once the arms have fully healed and the contour settles.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/01/mommy-Makerover-2.jpeg';
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

export default MommyMakeOver;
