import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const ContourThreadLift = () => {
  const title = 'Contour Thread Lift';
  const subtitle = 'Best Liposuction Centre in Hyderabad';

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
    coloredTitle: 'Contour Thread',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The cost of the Contour Thread procedure can vary depending on several factors, including the location, the experience and qualifications of the physician performing the procedure, the number of threads required, and the extent of the correction needed.but may typically range from INR 50,000 to INR 2,00,000 or more.',
    ],
  };

  const faqs = [
    {
      question: 'What are contour threads?',
      answer:
        'Contour threads are a type of non-surgical cosmetic procedure that involves inserting thin, dissolvable threads into the skin to lift and tighten sagging areas.',
    },
    {
      question: 'How do contour threads work?',
      answer:
        'Contour threads work by physically lifting and supporting the skin. The threads are inserted under the skin and then pulled taut to lift the targeted areas. Over time, the threads dissolve and are absorbed by the body, leaving behind natural collagen production for long-lasting results.',
    },
    {
      question: 'What areas of the face can be treated with contour threads?',
      answer:
        'Contour threads can be used to lift and tighten various areas of the face, including the cheeks, jowls, eyebrows, and neck.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2023/02/Countor-thread-lift.jpg';

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

export default ContourThreadLift;
