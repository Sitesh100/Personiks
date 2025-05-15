import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const Gynecomastia = () => {
  const title = 'Gynecomastia (Man Boob)';
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
    coloredTitle: 'Gynecomastia Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Gynecomastia Surgery Cost in India varies from 80,000 to 3 lakhs based on your aesthetic goals and surgery package you need',
      'Personiks has affordable gynecomastia removal price packages that combine gynecomastia with tummy 360 liposuction',
      'The quotation given at Personiks has no hidden costs',
    ],
  };

  const faqs = [
    {
      question: 'What is Gynecomastia?',
      answer:
        'Gynecomastia is a condition in which male breast tissue becomes enlarged due to hormonal imbalances, genetics, or certain medications. It can affect one or both sides and is often treated for cosmetic and psychological reasons.',
    },
    {
      question: 'How long does the Gynecomastia surgery take?',
      answer:
        'Gynecomastia surgery typically takes 1 to 2 hours, depending on the severity of the condition. It is usually performed under local anesthesia with sedation or general anesthesia, and most patients can go home the same day.',
    },
    {
      question: 'Is Gynecomastia surgery a permanent solution?',
      answer:
        'Yes, the results of gynecomastia surgery are permanent, especially when glandular tissue is removed. However, maintaining a stable weight and hormonal balance is important to prevent recurrence.',
    },
    {
      question: 'How long does it take to recover after Gynecomastia surgery?',
      answer:
        'Most patients resume normal activities within a week, although full recovery may take 4 to 6 weeks. Swelling and bruising gradually subside, and final results are visible within 2 to 3 months.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Gynacomastia-Website-Icon-Before-and-After-1.jpg';
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

export default Gynecomastia;
