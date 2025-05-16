import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const AcneScar = () => {
  const title = 'Scar removal for past injury';
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
    coloredTitle: 'Scars or Keloid Removal Treatment',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Scars Treatment cost can range from Rs. 10K to Rs. 45K and is driven by 3 factors',
      'Prices can range based on technology and Treatment Method. Scars needing surgical excision with fillers or botox or fat grafting are more expensive than simple CO2 laser scar revision',
      'Scars removal costs are higher for larger areas, as longer procedure time or higher number of sittings would be needed',
      'A personalized treatment cost where multiple procedures are needed for the same scar, the cost of scar treatment increases',
    ],
  };

  const faqs = [
    {
      question:
        'How are acnes scars formed? What does acne scar tissue consist of?',
      answer:
        'Acne scars develop as a result of the skin’s healing process after severe acne lesions. When the skin undergoes inflammation and tissue damage, the body attempts to repair itself, leading to the formation of scars. Severe forms of acne, including nodules and cysts, are more likely to cause scarring. These lesions penetrate deeper into the skin, affecting the surrounding tissue and collagen.',
    },
    {
      question:
        'What types of acne scars can be treated at Personiks Hyderabad?',
      answer:
        'Our center specializes in treating various types of acne scars, including icepick, rolling, and boxcar scars, using advanced techniques tailored to each individual’s needs. Our most popular and effective treatments are CO2 lasers and subcision with fat grafting. These 2 are combined with other techniques like botox or fillers.  Since we use the most effective treatment delivered by a cosmetic surgeon, the overall treatment cost is more efficient at Personiks. ',
    },
    {
      question:
        'Which types of acne scars are more effectively treated with CO2 laser?',
      answer:
        'CO2 laser is particularly effective for treating atrophic acne scars, including rolling scars and boxcar scars. Basically the scars where the epidermis (upper most of the skin) is not stuck to structures beneath due to scarring. The laser’s precision allows for targeted resurfacing, stimulating collagen production and significantly improving the appearance of these specific scar types.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/03/Scar-Website-Icon-Before-and-After-2.jpg';

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

export default AcneScar;
