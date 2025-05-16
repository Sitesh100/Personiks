import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const UnwantedHair = () => {
  const title = 'Laser Hair Removal';
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
    coloredTitle: 'Laser Hair Removal',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The Laser Hair Removal in Hyderabad cost depends on the body part that is targeted, as larger body parts take longer treatment time.',
      'For most people 6 sittings of laser hair reduction are enough to get complete benefit, hence purchasing a 6 sitting package can be more cost effective',
      'Personiks offers 40% discount on 6 sitting package, and if you need 1-2 session more to achieve the extra results, then you don’t have to pay extra, as we are focused on the outcomes ',
      'Best Laser Hair Removal / Reduction Treatment Services in Hyderabad.',
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
    'https://personiks.com/wp-content/uploads/2024/03/Under-Arms.webp';

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

export default UnwantedHair;
