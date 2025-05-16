import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const Surgical = () => {
  const title = 'About Bariatric surgery';
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
    coloredTitle: 'About Bariatric surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'This procedure alters your stomach’s capacity, limiting the calories you can consume and absorb. Additionally, it can reduce the hunger signals your digestive system sends to your brain. Bariatric weight loss hyderabad',
      'Bariatric surgery helps treat and prevent metabolic diseases related to obesity, such as fatty liver disease and diabetes.',
    ],
  };

  const faqs = [
    {
      question: 'What is Gastric Sleeve Surgery?',
      answer:
        'Gastric Sleeve Surgery, also known as Sleeve Gastrectomy, is a weight-loss procedure that involves removing approximately 75-80% of the stomach, leaving a narrow, sleeve-shaped stomach about the size and shape of a banana. This significantly reduces the amount of food you can eat and helps you feel full sooner.',
    },
    {
      question: 'How does Gastric Sleeve Surgery aid in weight loss?',
      answer:
        'Gastric Sleeve Surgery aids in weight loss by limiting the amount of food you can consume and reducing the production of the hunger hormone ghrelin, which decreases appetite. The smaller stomach size promotes a feeling of fullness with less food, leading to reduced calorie intake and weight loss.',
    },
    {
      question: 'Who is a good candidate for Gastric Sleeve Surgery?',
      answer:
        'Good candidates for Gastric Sleeve Surgery typically include individuals with a Body Mass Index (BMI) of 40 or higher, or those with a BMI of 35-39.9 who have obesity-related health conditions such as type 2 diabetes, hypertension, or sleep apnea. Candidates should also be committed to making lifelong lifestyle changes, including diet and exercise.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/06/Gastric-Bypass.jpg';

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

export default Surgical;
