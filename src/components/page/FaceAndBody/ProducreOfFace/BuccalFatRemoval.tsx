import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const BuccalFatRemoval = () => {
  const title = 'Buccal Fat Removal or Cheek Fat Removal';
  const subtitle = 'by Best Fat Removal Centre in Hyderabad';

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
    coloredTitle: 'Personiks Buccal / Cheek Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The Cheek Fat Removal Surgery cost and double chin removal cost in India, depends on your aesthetic goals',
      'Personiks has affordable packages that combine buccal fat pad removal with chin liposuction or neck liposuction',
      'The cost varies from 50,000 to 1.5 lakhs based on procedure combination and whether you want local or general anesthesia for the surgery',
      'The quotation given at Personiks has no hidden costs',
    ],
  };

  const faqs = [
    {
      question: 'What is buccal fat removal surgery?',
      answer:
        'Buccal fat removal surgery is a cosmetic procedure aimed at reducing the volume of fat pads in the cheeks to create a more sculpted facial appearance.',
    },
    {
      question:
        'Is cheek reduction surgery the same as buccal fat removal surgery?',
      answer:
        'Yes, both of the terms are same and are mostly used interchangeably. ',
    },
    {
      question: 'How does buccal fat removal surgery work?',
      answer:
        'During buccal fat removal surgery, the surgeon makes incisions inside the mouth to access and remove excess fat from the cheeks, resulting in a slimmer facial contour.',
    },
    {
      question: 'Is buccal fat removal surgery a major surgical procedure?',
      answer:
        'While buccal fat removal is considered a surgical procedure, it is typically performed on an outpatient basis under local anesthesia, and the recovery period is relatively short compared to more invasive surgeries.',
    },
    {
      question:
        'What are the potential benefits of buccal fat removal surgery?',
      answer:
        'Buccal fat removal surgery can help individuals achieve a more defined facial structure, reduce the appearance of chubby cheeks, and enhance facial symmetry. ',
    },
    {
      question: 'What can I expect during the post-surgery recovery period?',
      answer:
        'After the surgery you are discharged almost immediately. The surgeon may suggest you to wear compression band to help reduce the swelling. After buccal fat removal surgery, patients may experience temporary swelling, bruising, and discomfort, which typically subside within a few weeks. It’s essential to follow post-operative care instructions provided by your surgeon to promote healing.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-04-at-1.50.24-PM.jpeg';

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

export default BuccalFatRemoval;
