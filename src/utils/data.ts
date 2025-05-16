interface Feature {
  img: string;
  title: string;
}

interface ProcedureInfo {
  coloredTitle: string;
  title: string;
  bulletPoints: string[];
}

interface Faq {
  question: string;
  answer: string;
}

interface PageData {
  title: string;
  subtitle: string;
  features: Feature[];
  procedureInfo: ProcedureInfo;
  faqs: Faq[];
  beforeAfterImage: string;
}

interface PageDataMap {
  [key: string]: PageData;
}

const pageData: PageDataMap = {
  'double-chin-correction': {
    title: 'Double Chin Removal',
    subtitle: 'by Best Cosmetic Surgeon in Hyderabad',
    features: [
      {
        img: '/assets/natural-icon.png',
        title: 'Immediate and Natural Results',
      },
      {
        img: '/assets/patient-icon.png',
        title: 'Painless and Scarless Procedure',
      },
      { img: '/assets/advance-tech.png', title: 'Most Advanced Technologies' },
      { img: '/assets/doctor-icon.png', title: 'Board Certified Surgeons' },
    ],
    procedureInfo: {
      coloredTitle: 'Personiks Facial',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The double chin surgery cost and cheek fat removal cost in India, depends on your aesthetic goals',
        'Personiks has affordable packages that combine buccal fat pad removal with chin liposuction or neck liposuction if you want overall face fat removal',
        'The cost varies from 70,000 to 1.5 lakhs based on procedure combination and whether you want local or general anesthesia for the surgery',
        'The pricing given at Personiks has no hidden costs. Double Chin Treatment in Hyderabad',
      ],
    },
    faqs: [
      {
        question: 'What is double chin removal treatment?',
        answer:
          'Double chin removal treatment involves procedures aimed at reducing excess fat under the chin to improve facial contour and definition.',
      },
      {
        question: 'How does double chin removal treatment work?',
        answer:
          'Various techniques such as liposuction, injectable treatments, and non-invasive procedures like CoolSculpting target the fat cells under the chin to reduce the appearance of a double chin.',
      },
      {
        question: 'What are the benefits of reducing a double chin?',
        answer:
          'Reducing a double chin can enhance facial appearance, restore youthful contours, and boost self-confidence. Many people are not really fat overall, but have a double chin. When these people take selfies where only their face is highlighted, it appears they are fat due to double chin.',
      },
      {
        question:
          'What factors contribute to the development of fat in the chin area?',
        answer:
          'Fat accumulation under the chin can result from genetics, aging, weight gain, and poor lifestyle habits such as a sedentary lifestyle and unhealthy dietary choices. But lifestyle related changes are usually associated with overall weight gain and not just double chin. So if you are someone who is not overweight and has a double chin, or always had one, then genetics is the most likely factor.',
      },
      {
        question:
          'Is double chin removal treatment performed under local anesthesia?',
        answer:
          'Yes, double chin treatments are performed mostly under local anesthesia, ensuring minimal discomfort during the procedure.',
      },
      {
        question: 'How much does double chin removal treatment cost?',
        answer:
          'The cost of double chin removal treatment starts from Rs. 70K and can increase if in addition to liposuction, a more customized approach is needed. Example addition of defining of jowls, or submental lipectomy. It’s best to consult with our cosmetic surgeon for an accurate assessment and cost estimate.',
      },
    ],
    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-5.16.26-PM.jpeg',
  },
  'buccal-fat-removal': {
    title: 'Buccal Fat Removal or Cheek Fat Removal',
    subtitle: 'by Best Fat Removal Centre in Hyderabad',
    features: [
      {
        img: '/assets/natural-icon.png',
        title: 'Immediate and Natural Results',
      },
      {
        img: '/assets/patient-icon.png',
        title: 'Painless and Scarless Procedure',
      },
      { img: '/assets/advance-tech.png', title: 'Most Advanced Technologies' },
      { img: '/assets/doctor-icon.png', title: 'Board Certified Surgeons' },
    ],
    procedureInfo: {
      coloredTitle: 'Personiks Buccal / Cheek Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The Cheek Fat Removal Surgery cost and double chin removal cost in India, depends on your aesthetic goals',
        'Personiks has affordable packages that combine buccal fat pad removal with chin liposuction or neck liposuction',
        'The cost varies from 50,000 to 1.5 lakhs based on procedure combination and whether you want local or general anesthesia for the surgery',
        'The quotation given at Personiks has no hidden costs',
      ],
    },
    faqs: [
      {
        question: 'What is buccal fat removal surgery?',
        answer:
          'Buccal fat removal surgery is a cosmetic procedure aimed at reducing the volume of fat pads in the cheeks to create a more sculpted facial appearance.',
      },
      {
        question:
          'Is cheek reduction surgery the same as buccal fat removal surgery?',
        answer:
          'Yes, both of the terms are same and are mostly used interchangeably.',
      },
      {
        question: 'How does buccal fat removal surgery work?',
        answer:
          'During buccal fat removal surgery, the surgeon makes incisions inside the mouth to access and remove excess fat from the cheeks, resulting in a slimmer facial contour.',
      },
      {
        question: 'Is buccal fat removal surgery a major surgical procedure?',
        answer:
          'While buccal fat removal is considered a surgical procedure, it is typically performed on an outpatient basis under local anesthesia, and the recovery period is relatively short compared to more invasive surgeries.',
      },
      {
        question:
          'What are the potential benefits of buccal fat removal surgery?',
        answer:
          'Buccal fat removal surgery can help individuals achieve a more defined facial structure, reduce the appearance of chubby cheeks, and enhance facial symmetry.',
      },
      {
        question: 'What can I expect during the post-surgery recovery period?',
        answer:
          'After the surgery you are discharged almost immediately. The surgeon may suggest you to wear compression band to help reduce the swelling. After buccal fat removal surgery, patients may experience temporary swelling, bruising, and discomfort, which typically subside within a few weeks. It’s essential to follow post-operative care instructions provided by your surgeon to promote healing.',
      },
    ],
    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-04-at-1.50.24-PM.jpeg',
  },
};

export default pageData;
