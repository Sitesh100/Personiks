import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const WartsRemoval = () => {
  const title = 'Wart Removal';
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
    coloredTitle: 'Wart Removal Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Skin Tag Treatment cost can range from Rs. 3K to Rs. 25K and is driven by 3 factors',
      'Price can range from Rs. 3K to Rs. 25K based on the number of moles',
      'Warts removal costs are higher for larger warts requiring surgical excision. E.g. Verruca Removal from the face will be more expensive than small skin tags laser treatment ',
      'Laser treatment for warts is lower than surgical excision',
    ],
  };

  const faqs = [
    {
      question:
        'What are skin warts, and how do they differ from other skin conditions?',
      answer:
        'Skin warts, also known as skin tags, are small, benign growths that often appear on areas where skin rubs against skin or clothing. They are not cancerous and differ from other skin conditions in their appearance and texture',
    },
    {
      question:
        'Can skin warts be mistaken for moles, and how can I differentiate between them?',
      answer:
        'Skin warts and moles may appear similar, but they have distinct characteristics. Skin warts are typically small, soft, and may have a stalk, while moles are often larger, flat or raised, and may have pigment.',
    },
    {
      question: 'Are skin warts contagious, and how do they develop?',
      answer:
        'Some research suggests that people with human papillomavirus (HPV) may get more skin tags than others. However a clear association has not been established. That being said, skin warts are not  contagious. Factors such as friction, genetics, and hormonal changes can also play a role in the making of skin tags. ',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-16-at-12.17.55-PM-1.jpeg.webp';

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

export default WartsRemoval;
