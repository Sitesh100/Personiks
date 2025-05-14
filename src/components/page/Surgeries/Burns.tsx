import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const Burns = () => {
  const title = 'Effective Burns Treatment';
  const subtitle =
    ' Plastic Surgery Options for Burn Relief and Scar Management';

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
    coloredTitle: 'Burns Treatment',
    title: 'Plastic Surgery Options for Burn Relief and Scar Management',
    bulletPoints: [
      'Silver dressings are essential in the early stages of burn treatment. These dressings are armed with potent antibacterial properties, reducing the risk of infection, alleviating pain, and accelerating wound healing. They work well for first and second-degree burns, providing immediate relief.',
      'For severe, deep burns that extend beyond the superficial skin layers, skin grafting is a vital surgical solution. This procedure involves harvesting healthy skin from one area (the donor site) and transplanting it onto the burn wound. Skin grafting covers and protects the injured area, promoting healing, and minimizing scarring.',
      'Collagen dressings play a significant role in later-stage burn treatment, focusing on scar management and aesthetic improvement. Collagen, a natural protein, aids in tissue repair and regeneration. These dressings facilitate the body’s innate healing process, leading to better cosmetic results and reducing the risk of contractures.',
      'Contractures occur when scar tissue tightens and restricts movement. Effective management involves various techniques, such as physical therapy to improve flexibility and surgical procedures to release tight scar tissue. Plastic surgeons perform Z-plasty or skin grafts to release contractures and restore function. Early intervention and consistent follow-up are vital for preventing long-term disability and ensuring the best possible outcome for patients with burn contractures.',
    ],
  };

  const faqs = [
    {
      question: 'How long does a Hair treatment procedure take?',
      answer:
        'Hair treatment can be done in 1 day or 2 days, depending on the number of follicles to be grafted. Each dau sitting hours can extend up to 8 hours. In some cases 3rd day may also be needed if the client has lack of time or is unable to sit for long hours',
    },
    {
      question: 'Is Hair treatment a Permanent Solution for Hair loss?',
      answer:
        'Yes, a hair treatment provides a permanent solution as the transplanted hair follicles are resistant to balding. In fact some research has shown that transplanted hair are also resistant to hormonal changes',
    },
    {
      question: 'How long does it take to see results after a Beard treatment?',
      answer:
        'The immediate post op results for beard treatment is similar to hair transplant. The details are in the FAQ above',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2023/10/Burns-Skin-Grafting-1.jpg';

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

export default Burns;
