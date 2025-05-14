import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const ArmLiposuction = () => {
  const title = 'Arm Liposuction or Tuck';
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
    coloredTitle: 'Arm Liposuction or Arm Tuck Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Arm Liposuction or Arm Tuck Surgery Cost in India varies from 1 lakh to 2.5 lakhs based on your aesthetic goals and surgery package you need',
      'If you need Arm tuck in addition to Arm Liposuction the cost will be higher, because Arm Tuck also involves skin excision to tighten the skin ',
      'Personiks has affordable arm liposuction and arm tuck price packages that combine arms liposuction with arm tuck and bra bulge removal for your shirt or blouses to fit perfectly',
    ],
  };

  const faqs = [
    {
      question: 'How long does a Hair treatment procedure take?',
      answer:
        'Hair treatment can be done in 1 day or 2 days, depending on the number of follicles to be grafted. Each dau sitting hours can extend up to 8 hours. In some cases 3rd day may also be needed if the client has lack of time or is unable to sit for long hours',
    },
    {
      question: 'Is Hair treatment a Permanent Solution for Hair loss?',
      answer:
        'Yes, a hair treatment provides a permanent solution as the transplanted hair follicles are resistant to balding. In fact some research has shown that transplanted hair are also resistant to hormonal changes',
    },
    {
      question: 'How long does it take to see results after a Beard treatment?',
      answer:
        'The immediate post op results for beard treatment is similar to hair transplant. The details are in the FAQ above',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Arm-Liposuction-Website-Icon-Before-and-After-2.jpg';

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

export default ArmLiposuction;
