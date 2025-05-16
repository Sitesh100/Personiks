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
      question: 'How is a corn diagnosed and assessed?',
      answer:
        'Clinical examination by a doctor is enough in 70% of the cases. However, in many cases our plastic surgeon also asks or an X-ray of the foot to see the depth of the corn. Corns can sometimes extend beyond the superficial layers of skin, reaching down to involve underlying structures, including the bone. Hence determining the extent of the corn is an important part for ensuring proper excision (corn removal).',
    },
    {
      question:
        'When should I consider corn removal, and is it a painful process?',
      answer:
        'Consider corn removal if you experience pain, discomfort, or difficulty walking due to a corn.The removal process is typically performed under local anesthesia to minimize pain and discomfort. With proper care during the corn removal procedure and after care, helps in quick and painless recovery',
    },
    {
      question:
        'Can I use over-the-counter products for corn removal, or should I seek professional help?',
      answer:
        'A very popular topical product called corn caps are available over the counter. These products typically contain Salicylic Acid that tries to chemically soothe the skin and tries to remove the corn. However, this will not work who have deep and recurrent corns. Most important factor to remember is perhaps what you are seeing is not a corn. ',
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
