import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const CornRemoval = () => {
  const title = 'Corn Removal';

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
    coloredTitle: 'Corn removal',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Corn Removal Cost varies from Rs. 10K to 30K depending on the following factors',
      'Number of corns to be removed',
      'Depth of the corn, as deeper corns need longer procedure removal',
    ],
  };

  const faqs = [
    {
      question: 'What is Vaginoplasty?',
      answer:
        'Vaginoplasty is a surgical procedure aimed at tightening the vaginal muscles and tissues that may become loose due to childbirth or aging. It helps improve vaginal tone, strength, and overall function.',
    },
    {
      question: 'What is Labiaplasty?',
      answer:
        'Labiaplasty is a cosmetic surgery that reshapes or reduces the size of the labia minora or labia majora. It is performed for aesthetic reasons, comfort, or to correct asymmetry or irritation caused by enlarged labia.',
    },
    {
      question: 'How long do Vaginoplasty and Labiaplasty surgeries take?',
      answer:
        'Vaginoplasty typically takes about 1 to 2 hours, and labiaplasty takes around 45 minutes to 1 hour. Both can be performed as outpatient procedures under local anesthesia with sedation or general anesthesia.',
    },
    {
      question: 'Is the recovery painful after these surgeries?',
      answer:
        'Some discomfort, swelling, and mild pain are expected, especially in the first few days. Pain is manageable with prescribed medications, and most patients resume light activities within a week.',
    },
    {
      question: 'When can I resume normal activities, including intimacy?',
      answer:
        'Most patients can return to non-strenuous work in about 5 to 7 days. Intimate activity should be avoided for 6 to 8 weeks or until cleared by the surgeon to ensure proper healing.',
    },
    {
      question: 'Are the results permanent?',
      answer:
        'Yes, the results are long-lasting. However, factors like aging, future childbirth, or hormonal changes may affect the outcomes over time.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-1.04.25-PM.jpeg.webp';

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

export default CornRemoval;
