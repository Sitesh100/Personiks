import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const EyelidSurgery = () => {
  const title = 'Treat under eye bags permanently';
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
    coloredTitle: 'Eyelid Blepharoplasty Treatment',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Eyelid surgery cost from Rs.1 lakh to 2 lakhs depending on whether you want both eyelids treatment, whether you need CO2 Laser in addition to blepharoplasty for treating eyebags, or whether you also need brow lift to correct droopy eyes',
      'Eyelid surgery cost is driven by the skill of the surgeon. Since it is a very delicate surgery it must be done by a Board Certified Surgeon. The surgeon cost is the most important component in this surgery',
      'Personiks also offers hassle free Zero Cost EMI for people who cannot bear the cost of blepharoplasty upfront',
    ],
  };

  const faqs = [
    {
      question: 'Consultation',
      answer:
        'Consult with our Board Certified Cosmetic Surgeon Get a personalized treatment plan e.g. combine with brow lift and CO2 laser for younger looking eyes Get a Eyelid Surgery cost estimate, or customized plastic surgery cost estimate',
    },
    {
      question: 'Surgery',
      answer:
        'Complete the surgeon prescribed pre-surgical blood test Surgery is done under Local Anesthesia Eyelid Surgery is done only by our skilled board certified plastic surgeons Permanent solution for Puffy Eyes, Droopy Eyes or Ageing Eyes or Drooping Eyebrows with natural and youthful eyes',
    },
    {
      question: 'Back to Routine',
      answer:
        'You can get back to work after 5-7 days Blepharoplasty is a permanent solution for your Eye Bags problem Followup appointment after 5 days to check healing',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Eye-lid-Website-Icon-Before-and-After-1.jpg';

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

export default EyelidSurgery;
