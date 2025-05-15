import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const DoubleChin = () => {
  const title = 'Double Chin Removal';
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
    coloredTitle: 'Personiks Facialt',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The double chin surgery cost and cheek fat removal cost in India, depends on your aesthetic goals',
      'Personiks has affordable packages that combine buccal fat pad removal with chin liposuction or neck liposuction if you want overall face fat removal',
      'The cost varies from 70,000 to 1.5 lakhs based on procedure combination and whether you want local or general anesthesia for the surgery',
      'The pricing given at Personiks has no hidden costs. Double Chin Treatment in Hyderabad',
    ],
  };

  const faqs = [
    {
      question: 'What is double chin removal treatment?',
      answer:
        'Double chin removal treatment involves procedures aimed at reducing excess fat under the chin to improve facial contour and definition.',
    },
    {
      question: 'How does double chin removal treatment work?',
      answer:
        'Various techniques such as liposuction, injectable treatments, and non-invasive procedures like CoolSculpting target the fat cells under the chin to reduce the appearance of a double chin.',
    },
    {
      question: 'What are the benefits of reducing a double chin?',
      answer:
        'Reducing a double chin can enhance facial appearance, restore youthful contours, and boost self-confidence. Many people are not really fat overall, but have a double chin. When these people take selfies where only their face is highlighted, it appears they are fat due to double chin. ',
    },
    {
      question:
        'What factors contribute to the development of fat in the chin area?',
      answer:
        'Fat accumulation under the chin can result from genetics, aging, weight gain, and poor lifestyle habits such as a sedentary lifestyle and unhealthy dietary choices. But lifestyle related changes are usually associated with overall weight gain and not just double chin. So if you are someone who is not overweight and has a double chin, or always had one, then genetics is the most likely factor. ',
    },
    {
      question:
        'Is double chin removal treatment performed under local anesthesia?',
      answer:
        'Yes, double chin treatments are performed mostly under local anesthesia, ensuring minimal discomfort during the procedure.',
    },
    {
      question: 'How much does double chin removal treatment cost?',
      answer:
        'The cost of double chin removal treatment starts from Rs. 70K and can increase if in addition to liposuction, a more customized approach is needed. Example addition of defining of jowls, or submental lipectomy. It’s best to consult with our cosmetic surgeon for an accurate assessment and cost estimate. ',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-5.16.26-PM.jpeg';

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

export default DoubleChin;
