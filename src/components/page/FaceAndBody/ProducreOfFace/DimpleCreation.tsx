import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const DimpleCreation = () => {
  const title =
    'Get Deepika Padukone like dimples with dimple creation surgery';
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
    coloredTitle: 'Personiks',
    title: 'Dimple Creation Packages.',
    bulletPoints: [
      'The cost for this procedure is varies form 40K to 1 lakh, depending on whether you are doing only dimple creation, or are you combining it with buccal fat removal or Face Fat Grafting',
      'Our Board certified plastic surgeons offer more comprehensive options for enhancing your face beauty by combining different techniques to create an enhanced version of you. Dimple Creation in Hyderabad',
      'Dimple creation at Personiks ensures you get balanced dimples on both your cheeks',
    ],
  };

  const faqs = [
    {
      question: 'What is dimple creation surgery, and how is it performed?',
      answer:
        'Dimple creation surgery is a cosmetic procedure where a small, natural-looking dimple is created on the cheeks. It is typically performed by making a small incision on the inside of the cheek, allowing for a quick and minimally invasive process.',
    },
    {
      question: 'Who is a suitable candidate for dimple creation surgery?',
      answer:
        'Dimple creation surgery is suitable for individuals looking to enhance their facial features with a charming dimple. Good candidates should be in good overall health and have realistic expectations about the procedure.',
    },
    {
      question: 'Is dimple creation surgery reversible?',
      answer:
        'TDimple creation surgery is considered permanent, as it involves creating a small connection between the skin and the cheek muscle. While it is technically not reversible, any concerns or adjustments can be discussed with the surgeon.',
    },
    {
      question: 'What is the recovery time after dimple creation surgery?',
      answer:
        'Recovery time is relatively short, with most individuals being able to resume normal activities within a few days. There may be mild swelling or discomfort initially, but these typically subside quickly.',
    },
    {
      question: 'Are the results of dimple creation surgery natural-looking?',
      answer:
        'Yes, when performed by a skilled and experienced surgeon, the results of dimple creation surgery are often natural-looking and harmonious with the individual’s facial features.',
    },
    {
      question:
        '   Can dimple creation surgery be combined with other cosmetic procedures?',
      answer:
        'Dimple creation surgery can be a standalone procedure or combined with other cosmetic surgeries if desired. This can be discussed during the consultation based on individual goals.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Dimple-Website-Icon-Before-and-After-2-1.jpg';

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

export default DimpleCreation;
