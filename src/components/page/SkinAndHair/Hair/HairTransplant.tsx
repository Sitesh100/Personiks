import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const Hairtransplant = () => {
  const title = 'Hair Treatment';
  const subtitle = 'by Best Cosmetic Surgeon in Hyderabad';

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
    coloredTitle: 'Hair treatment',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'While many people give hair treatment pricing based on the number of hair follicles, at Personiks we believe this is not a transparent way of hair treatment pricing. No one will actually count the number of grafts done',
      'The cost for hair treatment varies from 1.5 to 2.5 lakhs',
      'At Personiks we have a more transparent hair treatment costing, based on the gender and the number of days needed to give you a natural looking hair treatment',
      'Female hair treatment cost is higher, because women will not want to shave their head for hair treatment. Therefore the effort and time taken to place each graft without harming nearby hair follicles becomes much higher. Hence the hair treatment cost for women is higher than men',
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
    'https://personiks.com/wp-content/uploads/2024/10/Hair-Transplant-2.jpg';

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

export default Hairtransplant;
