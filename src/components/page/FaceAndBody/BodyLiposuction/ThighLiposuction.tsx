
import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const ThighLiposuction = () => {
  const title = 'Thigh Liposuction and Calf Liposuction Removal';
  const subtitle = 'by Best Liposuction Centre in Hyderabad';

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
    coloredTitle: 'Calf Liposuction or Thigh Liposuction',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Thigh Liposuction or Calf Liposuction Cost in India varies. Calf liposuction cost varies from 1.25 lakhs to 2 lakhs, while thigh liposuction cost varies from 1.2 lakhs to 2 lakhs',
      'If you need Thigh tuck in addition to thigh Liposuction the cost will be higher, because thigh tuck also involves skin excision to tighten the skin ',
      'Personiks has affordable thigh liposuction and calf liposuction price packages. The surgeon might combine multiple procedures for your aesthetic goals ',
      'The quotation given at Personiks has no hidden costs',
    ],
  };

  const faqs = [
    {
      question: 'Consultation',
      answer:
        'Consult with a Board Certified Cosmetic Surgeon Get a personalized treatment plan e.g. combine thigh Liposuction with butt and hips liposuction, tummy 360 liposuction, or CO2 Lasers for stretch marks removal Get an transparent thigh liposuction and calf liposuction cost or customized surgery package cost estimate ',
    },
    {
      question: 'Surgery',
      answer:
        'Complete the surgeon prescribed pre-surgical blood test and other investigations Thigh fat removal or calf fat removal is done by our skilled board certified plastic surgeon You will stay at the center for some time for observation with same day discharge',
    },
    {
      question: 'Back to Routine',
      answer:
        'The recovery time for thigh liposuction or calf liposuction is 4 to 7 days Compression garment can help is faster healing  Followup appointment after 5-7 days to check healing Personiks also provides ultrasonic massages for faster recovery as recommended by the surgeon You can get back to your heavy workout or gym sessions after 20 to 30 days, until then you can do light activities',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-01-23-at-11.08.35-AM.jpeg.webp';
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

export default ThighLiposuction;
