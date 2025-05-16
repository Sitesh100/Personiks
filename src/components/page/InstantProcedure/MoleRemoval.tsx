import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const MoleRemoval = () => {

  const title = 'Mole Removal';
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
    coloredTitle: 'Mole Removal Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Beauty mark removal cost or mole removal cost is driven by 3 factors',
      'Price can range from Rs. 3K to Rs. 15K based on the size of the moles',
      'Mole removal cost can range from 3K to 50K based on the number of moles',
      'Laser treatment for moles on face cost lower than surgical excision',

    ],
  };

  const faqs = [
    {

      question: 'What is a mole, and when should I consider mole removal?',
      answer:
        'As per NCI, moles is a benign (not cancer) growth on the skin that is formed by a cluster of melanocytes (cells that make your skin pigment melanin, which gives color to skin and eyes). A mole is usually dark and may be raised from the skin. Also called nevus. Most people have 10 to 45 moles that appear during childhood and the teenage years. How these moles look may change over time. ',
    },
    {
      question: 'Are there any potential health risks associated with Moles?',
      answer:
        'Moles are often benign and particularly non-hazardous in Indian Skin tone. Darker skin tones have much lesser risk for a skin cancer type. However, in some cases, especially when the mole changes in size, shape, or color can indicate potential health risks. In such cases it is important to consult with an expert doctor',
    },
    {
      question: 'What is the process of mole removal with CO2 lasers?',
      answer:
        'CO2 laser mole removal involves using a focused beam of light to vaporize the mole tissue. This precise and non-invasive method is suitable for smaller moles, often with no or minimal scarring. It can easily be used for moles on the face due to its non-scarring outcome.',

    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Mole-Removal-Website-Icon-Before-and-After-1.jpg';


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

export default MoleRemoval;
