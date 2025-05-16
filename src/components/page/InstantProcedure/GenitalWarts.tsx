import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const GenitalWarts = () => {
  const title = 'Genital Warts Treatment';
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
    coloredTitle: 'Genital Warts Treatment',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Genital Warts Treatment cost can range from Rs. 25K to Rs. 50K and is driven by 3 factors',
      'Price can range from Rs. 3K to Rs. 25K based on the number of warts ',
      'Warts removal costs are higher for larger warts requiring surgical excision E.g. large condyloma removal will be more expensive than small warts needing only laser genital warts treatment ',
      'Laser treatment for genital warts is lower than surgical excision',
    ],
  };

  const faqs = [
    {
      question: 'What are anal and genital warts?',
      answer:
        'Anal and genital warts are growths caused by the human papillomavirus (HPV). They can appear around the genital and anal areas, often manifesting as small, flesh-colored bumps or clusters.',
    },
    {
      question: 'Are anal and genital warts transmissible (contagious)?',
      answer:
        'These warts are typically transmitted through direct skin-to-skin contact with an infected person, often during sexual activity. HPV is highly contagious, and even individuals with no visible warts can spread the virus.',
    },
    {
      question: 'What are the symptoms of anal and genital warts?',
      answer:
        'Symptoms include the presence of small, raised growths in the genital or anal region. Itching, discomfort, or bleeding during intercourse may also occur. But overall genital and anal warts are benign and harmless, and are not known to be linked to any sexual functional problems. ',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/10/Hair-Transplant-2.jpg';

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

export default GenitalWarts;
