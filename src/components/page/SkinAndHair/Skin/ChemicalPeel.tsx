import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const ChemicalPeel = () => {
  const title = 'Chemical Peel in Hyderabad';
  const subtitle = 'by Best Dermatologist Centre in Hyderabad';

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
    coloredTitle: 'Chemical Peel Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The cost of a chemical peel in Hyderabad can vary depending on several factors, including the type of peel, the strength of the peel, the number of treatments required, and the location and reputation of the skincare professional or clinic performing the treatment.On average, the cost of a chemical peel in Hyderabad can range from INR 2,500 to INR 10,000 per session',
    ],
  };

  const faqs = [
    {
      question: 'What is double chin removal treatment?',
      answer:
        'A chemical peel is a cosmetic treatment that involves the application of a chemical solution to the skin to exfoliate and remove the top layer of damaged skin. This can improve the appearance of the skin, reduce fine lines and wrinkles, and treat acne and other skin concerns.',
    },
    {
      question: 'What types of chemical peels are available?',
      answer:
        'There are several types of chemical peels, including superficial, medium, and deep peels. The type of peel used will depend on the patient’s skin concerns and skin type.',
    },
    {
      question: 'Is a chemical peel painful?',
      answer:
        'Patients may experience some discomfort during a chemical peel, such as a tingling or burning sensation, but this typically subsides once the chemical solution is removed. If a deeper peel is being performed, a numbing cream may be applied to the skin to reduce discomfort.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2023/02/chemical-Peel.jpg';

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

export default ChemicalPeel;
