import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const LipomaRemoval = () => {

  const title = 'Lipoma Removal';
  const subtitle = 'by Best Liposuction Centre in Hyderabad';

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
    coloredTitle: 'Lipoma Removal',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The cost of Lipoma removal procedure ranges from Rs. 10K to Rs. 30K based on 2 factors',
      'Number of Lipomas (Single lipoma or multiple lipoma removal)',
      'Technology you want (Surgical lipoma excision, laser lipoma removal)',
      'Anesthesia: Local or General',

    ],
  };

  const faqs = [
    {

      question:
        'What is a lipoma, and how does it differ from other skin conditions?',
      answer:
        'A lipoma is a benign, soft tissue tumor composed of fat cells, namely primordial (baby) fat cells. Unlike other skin conditions, lipomas are non-cancerous growths and typically present as slow-growing, painless lumps under the skin.',
    },
    {
      question:
        'How common are lipomas, and who is more prone to developing them?',
      answer:
        'Lipomas are relatively common, with a prevalence that increases with age. While they can occur in individuals of any age, they are more frequently observed in adults and grow very slowly. There are no clear risk factors or predisposition. At Personiks we see at least one case for lipoma every day. ',
    },
    {
      question:
        'What are the common locations for lipomas to develop on the body?',
      answer:
        'Lipomas can develop anywhere on the body but are often found on the upper arms, thighs, neck, and torso. Their location can vary, and they are typically located just beneath the skin. If they are located in exposed areas, that is when most of the clients at Personiks want to get rid of them. We have also seen Multiple lipomas, where we have seen cases of more than 40-50 lipomas. In this case, even if the lipoma is not in exposed area, clients want them removed as they are embarrassing and can make intimate partner relationships psychologically uncomfortable. ',

    },
  ];

  const beforeAfterImage =

    'https://personiks.com/wp-content/uploads/2024/02/Lipoma-Removal-Website-Icon-Before-and-After-1.jpg';

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

export default LipomaRemoval;
