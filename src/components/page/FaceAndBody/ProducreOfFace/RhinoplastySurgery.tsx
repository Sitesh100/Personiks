import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const RhinoplastySurgery = () => {
  const title = 'Reshape your nose by Best Rhinoplasty Surgeon in Hyderabad';
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
    coloredTitle: 'Rhinoplasty Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Rhinoplasty cost in Hyderabad varies from Rs. 35K to 3 lakhs depending on the treatment plan. Liquid rhinoplasty is cheaper, but not a permanent result. Permanent results procedure like nasal implants, surgical rhinoplasty and septoplasty are costlier',
      'Surgical Rhinoplasty is a single sitting procedure but liquid rhinoplasty needs to be repeated after 6-12 months, hence the long term cost of liquid rhinoplasty might end up being higher',
      'Personiks also offers customized rhinoplasty procedures for defect correction which can be combined with sinus surgery, helping you to treat recurrent sinusitis as well as nose shaping',
      'Rhinoplasty can be combined with other procedures like chin augmentation or blepharoplasty for a more comprehensive facial enhancement. It is possible to combine these in a single sitting and also get cost benefit as a customized package',
    ],
  };

  const faqs = [
    {
      question: 'What is the difference between open and closed rhinoplasty?',
      answer:
        'Open rhinoplasty involves an external incision, providing better visibility for complex procedures. Closed rhinoplasty is performed internally, leaving no visible external scars. At Personiks we prefer Closed Rhinoplasty to give a scarless result.',
    },
    {
      question: 'Can rhinoplasty improve breathing issues?',
      answer:
        'Yes, rhinoplasty can address breathing difficulties by incorporating functional adjustments, such as septoplasty, to correct a deviated septum or other structural issues that may impede airflow.',
    },
    {
      question: 'How long does it take to recover from rhinoplasty?',
      answer:
        'Initial recovery typically takes just 1-2 weeks, but complete healing may take more time with the final results becoming apparent as the nose settles into its new shape.',
    },
    {
      question: 'Are there non-surgical options for nose enhancement?',
      answer:
        'Open rhinoplasty involves an external incision, providing better visibility for complex procedures. Closed rhinoplasty is performed internally, leaving no visible external scars. At Personiks we prefer Closed Rhinoplasty to give a scarless result.',
    },
    {
      question: 'Will rhinoplasty change my voice?',
      answer:
        'No. Rhinoplasty does not impact vocal cords or alter one’s voice. Our surgeons take care to preserve the structural integrity of the nose to maintain normal nasal functions.',
    },
    {
      question: 'Can rhinoplasty change the size of nostrils?',
      answer:
        'Yes, rhinoplasty can alter the size and shape of nostrils. This can be achieved through techniques such as alar base reduction or adjustments to the nostril shape during surgery.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Nose-Website-Icon-Before-and-After-1-1.jpg';

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

export default RhinoplastySurgery;
