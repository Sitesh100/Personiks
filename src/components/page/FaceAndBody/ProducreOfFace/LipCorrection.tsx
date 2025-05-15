import DropDownPage from '@/components/DropDownPages/DropDownPages';
import React from 'react';

const LipCorrection = () => {
  const title =
    'Reshape your lips, enhance your smile line and make your lips plumper and younger';
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
    coloredTitle: 'Lip Contouring and Lip Augmentation Procedure',
    title: 'Cost in Hyderabad',
    bulletPoints: [
      'The cost in Hyderabad varies depending on your treatment choice. While the lip fillers cost starts from Rs. 25K to 50K depending on the procedure choice, The procedures available are lip fillers, lip fat grafting and lip reduction',
      'Lip procedures can be combined with buccal fat removal, chin augmentation, or double chin removal for enhancing the lower face profile ',
      'Lip fillers are the most popular procedure choice, but many of our patients also opt for lip fat grafting hoping for longer term results, which may or may not happen',
      'Board certified plastic surgeons offer more options for lip related procedures. Discuss your esthetic goals clearly with the surgeon and get a price quotation accordingly',
    ],
  };

  const faqs = [
    {
      question: 'Are lip fillers safe, and how long do the results last?',
      answer:
        'Lip fillers, when administered by a qualified professional, are generally safe. Results are temporary and can last several months, with individual variations. Hyaluronic acid fillers, in particular, are reversible.',
    },
    {
      question:
        'What is lip fat grafting, and how does it differ from fillers?',
      answer:
        'Lip fat grafting involves using the patient’s own fat, harvested through liposuction, to augment the lips. It provides a more natural option with potentially permanent results compared to temporary fillers.',
    },
    {
      question: 'Can lip fillers look natural, and how is it achieved?',
      answer:
        'Yes, lip fillers can achieve natural-looking results when administered by an experienced professional. The key is to maintain proportion and balance, avoiding overfilling for a more subtle enhancement.',
    },
    {
      question: 'What is the downtime for lip filler injections?',
      answer:
        'Lip filler injections typically have minimal downtime. Patients may experience temporary swelling or bruising, but they can usually resume normal activities immediately after the procedure.',
    },
    {
      question:
        'What is lip reduction, and how does it differ from lip augmentation?',
      answer:
        'Lip reduction, or cheiloplasty, is a cosmetic procedure aimed at decreasing the size of the lips. Unlike lip augmentation, which adds volume, lip reduction focuses on achieving a more proportionate and balanced lip appearance.',
    },
    {
      question: 'Who is a good candidate for lip reduction?',
      answer:
        'Good candidates for lip reduction are individuals who feel their lips are excessively large or disproportionate to their facial features. The procedure is tailored to address specific concerns about lip size.',
    },
  ];

  const beforeAfterImage =
    'https://personiks.com/wp-content/uploads/2024/02/Lip-Correction-Website-Icon-Before-and-After-2-1.jpg';

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

export default LipCorrection;
