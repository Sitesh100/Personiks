import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const ChinImplant = () => {
  const title = 'Chin implant / extension / augmentation';
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
    coloredTitle: 'Chin Augmentation Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The Chin Implant Surgery cost and double chin removal cost in India, depends on your aesthetic goals',
      'Personiks has affordable packages that combine buccal fat pad removal with chin liposuction or neck liposuction',
      'The cost for Chin Implants is 70K and upwards depending on the combination of procedures',
      'The quotation given at Personiks has no hidden costs',
    ],
  };

  const faqs = [
    {
      question: 'Consultation',
      answer:
        'Consult with a Board Certified Cosmetic SurgeonGet a personalized treatment plan e.g. combine chin augmentation with double chin liposuction and buccal fat removal in the treatment plan Get an transparent chin implant cost estimate, or customized plastic surgery cost estimate',
    },
    {
      question: 'Surgery',
      answer:
        'Get a jaw x-ray for measurements for chin implantComplete the surgeon prescribed pre-surgical viral screen blood test .The chin implant is inserted surgically by a board certified plastic surgeon In less than 60 minutes you can have a sharp jawline ',
    },
    {
      question: 'Back to Routine',
      answer:
        'You can get back to work the very next day Chin Implant is like correcting a weak or small chin in matter of minutes Followup appointment after 5 days to check healing',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/10/Hair-Transplant-2.jpg';

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

export default ChinImplant;
