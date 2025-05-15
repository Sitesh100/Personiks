import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const EarShaping = () => {
  const title = 'Reshape or ears or correct ear deformity';
  const subtitle = 'by Best Otoplasty Surgeon in Hyderabad';

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
    coloredTitle: 'Ear Surgery',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'Prices can range based on technology and Treatment Method. Scars needing surgical excision with fillers or botox or fat grafting are more expensive than simple CO2 laser scar revision',
      'Scars removal costs are higher for larger areas, as longer procedure time or higher number of sittings would be needed',
      'A personalized treatment cost where multiple procedures are needed for the same scar, the cost of scar treatment increases',
      // Removed the empty item here
    ],
  };

  const faqs = [
    {
      question: 'Who is a good candidate for otoplasty?',
      answer:
        'Good candidates for otoplasty are individuals with concerns about the shape, size, or position of their ears. The procedure is suitable for both children as young as 10 years, teens and adults. There is no age limit for ear shaping as long as you are healthy for the procedure to be done',
    },
    {
      question: 'Is otoplasty a painful procedure?',
      answer:
        'Not exactly, because the discomfort is typically well-managed with pain medications',
    },
    {
      question: 'What is the recovery time for otoplasty?',
      answer:
        'The recovery is fairly simple. You are discharged on the same day after the procedure. The doctor will give you pain killer medications and antibiotics that will help you manage the discomfort. There is no need for bed rest and you can resume light work the next day, and full activities within 5-7 days.',
    },
    {
      question: 'How do I choose the right otoplasty surgeon?',
      answer:
        'Look for a board-certified plastic surgeon with experience in otoplasty. Research their qualifications, view before-and-after photos, and schedule a consultation to discuss your goals.',
    },
    {
      question: 'Does insurance cover the cost of otoplasty?',
      answer:
        'In most cases, otoplasty is considered a cosmetic procedure, and insurance may not cover it. However, this can vary, especially if the ear shape has functional problems. If the procedure seems medically necessary to our Surgeon, Personiks can support with insurance reimbursement documents',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Ear-Shaping-Website-Icon-Before-and-After-1-1.jpg';

  return (
    <div>
      {' '}
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

export default EarShaping;
