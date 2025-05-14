import DropDownPage from '@/components/DropDownPage/DropDownPage';
import React from 'react';

const AxillaryBreast = () => {
  const title = 'Axillary Breast Removal at Personiks';
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
    coloredTitle: 'Axillary Breast Removal Treatment',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Axillary Breast Removal in Hyderabad cost in Hyderabad varies from 35K to 1.2 Lakhs based on the anesthesia you opt for',
      'Axillary breast removal under Local Anesthesia is cheaper as compared to General Anesthesia',
      'Similarly single side axillary breast removal is cheaper than double side removal',
      'You can combine axillary breast removal with other procedures such as chest wall contouring or axillary fat removal for women or breast lift',
      'The quotation given at Personiks has no hidden costs',
    ],
  };

  const faqs = [
    {
      question: 'What is Axillary Breast tissue?',
      answer:
        'Axillary breast tissue refers to extra breast tissue present in the underarm (armpit) area. It is a common condition and can cause discomfort, swelling, or cosmetic concerns, especially during hormonal changes or weight gain.',
    },
    {
      question: 'How long does the Axillary Breast Removal procedure take?',
      answer:
        'The procedure typically takes 1 to 2 hours and is done under local or general anesthesia. Most patients can return home the same day and resume light activities within a few days.',
    },
    {
      question: 'Is Axillary Breast Removal permanent?',
      answer:
        'Yes, once the accessory breast tissue is surgically removed, it does not grow back. However, maintaining a healthy lifestyle helps in sustaining the results and preventing fat accumulation in the area.',
    },
    {
      question:
        'How long does it take to recover after Axillary Breast Removal?',
      answer:
        'Initial recovery takes about 1 week, with most swelling and bruising subsiding in 2–3 weeks. Final results are visible within 1 to 2 months after complete healing.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Auxillary-Breast-Website-Before-and-After-1-1.jpg';
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

export default AxillaryBreast;
