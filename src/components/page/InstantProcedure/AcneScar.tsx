import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const AcneScar = () => {
  const title = 'Scar removal for past injury';
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
    coloredTitle: 'Scars or Keloid Removal Treatment',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Scars Treatment cost can range from Rs. 10K to Rs. 45K and is driven by 3 factors: ',
      'Prices can range based on technology and Treatment Method. Scars needing surgical excision with fillers or botox or fat grafting are more expensive than simple CO2 laser scar revision ',
      'Scars removal costs are higher for larger areas, as longer procedure time or higher number of sittings would be needed',
      'A personalized treatment cost where multiple procedures are needed for the same scar, the cost of scar treatment increases',
    ],
  };

  const faqs = [
    {
      question:
        'How are acnes scars formed? What does acne scar tissue consist of?',
      answer:
        'Acne scars develop as a result of the skin’s healing process after severe acne lesions. When the skin undergoes inflammation and tissue damage, the body attempts to repair itself, leading to the formation of scars. Severe forms of acne, including nodules and cysts, are more likely to cause scarring. These lesions penetrate deeper into the skin, affecting the surrounding tissue and collagen. Scar tissue is characterized by a different composition of collagen fibers compared to normal skin tissue. It often lacks the regular pattern and elasticity of healthy skin, resulting in a distinct texture and appearance.',
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
    {
      question: 'What role does collagen production play in acne scar removal?',
      answer:
        'Collagen production is crucial for skin health. Treatments that stimulate collagen help rebuild damaged tissue, reducing the visibility of scars and enhancing skin elasticity.',
    },
    {
      question:
        'What are the different types of scars that laser treatment can address?',
      answer:
        'Laser treatment is effective for multiple scar types, including hypertrophic scars, atrophic scars, and those with associated redness or pigmentation issues.',
    },
    {
      question: 'How does laser treatment for acne scars work?',
      answer:
        'Laser treatment for acne scars involves the use of focused light to stimulate collagen production, promoting skin rejuvenation and reducing the appearance of scars.',
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
