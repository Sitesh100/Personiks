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
  'corn-removal': {
    title: 'Corn Removal',

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
      coloredTitle: 'Corn removal',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Corn Removal Cost varies from Rs. 10K to 30K depending on the following factors',
        'Number of corns to be removed',
        'Depth of the corn, as deeper corns need longer procedure removal',
      ],
    },

    faqs: [
      {
        question: 'What is Vaginoplasty?',
        answer:
          'Vaginoplasty is a surgical procedure aimed at tightening the vaginal muscles and tissues that may become loose due to childbirth or aging. It helps improve vaginal tone, strength, and overall function.',
      },
      {
        question: 'What is Labiaplasty?',
        answer:
          'Labiaplasty is a cosmetic surgery that reshapes or reduces the size of the labia minora or labia majora. It is performed for aesthetic reasons, comfort, or to correct asymmetry or irritation caused by enlarged labia.',
      },
      {
        question: 'How long do Vaginoplasty and Labiaplasty surgeries take?',
        answer:
          'Vaginoplasty typically takes about 1 to 2 hours, and labiaplasty takes around 45 minutes to 1 hour. Both can be performed as outpatient procedures under local anesthesia with sedation or general anesthesia.',
      },
      {
        question: 'Is the recovery painful after these surgeries?',
        answer:
          'Some discomfort, swelling, and mild pain are expected, especially in the first few days. Pain is manageable with prescribed medications, and most patients resume light activities within a week.',
      },
      {
        question: 'When can I resume normal activities, including intimacy?',
        answer:
          'Most patients can return to non-strenuous work in about 5 to 7 days. Intimate activity should be avoided for 6 to 8 weeks or until cleared by the surgeon to ensure proper healing.',
      },
      {
        question: 'Are the results permanent?',
        answer:
          'Yes, the results are long-lasting. However, factors like aging, future childbirth, or hormonal changes may affect the outcomes over time.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-1.04.25-PM.jpeg.webp',
  },
  'earlobe-repair-surgery': {
    title: 'Ear Lobe Treatment',
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
      coloredTitle: 'Ear Lobe Treatment',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Ear Lobe Treatment cost can range from Rs. 15K to Rs. 20K and is driven by only one factor, whether you need earlobe reconstruction for one or both ear lobes',
      ],
    },

    faqs: [
      {
        question:
          'Is the cost of earlobe repair surgery inclusive of all components of the procedure?',
        answer:
          'Yes, the cost typically includes all components of the earlobe repair procedure, encompassing the surgical technique employed, post-surgery care, and follow-up consultations.',
      },
      {
        question: 'What are the components of earlobe repair surgery?',
        answer:
          'Earlobe repair surgery involves several components, including precise incisions, removal of excess tissue, suturing, and careful reconstruction to restore a natural and aesthetically pleasing appearance.',
      },
      {
        question: 'Is earlobe repair surgery a painful procedure?',
        answer:
          'The procedure is performed under local anesthesia to minimize discomfort. Patients may experience mild discomfort during the initial healing period, which is manageable with prescribed pain medications.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Ear-Lobe-Website-Icon-Before-and-After-2-1.jpg',
  },
  'genital-warts-treatment': {
    title: 'Genital Warts Treatment',
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
      coloredTitle: 'Genital Warts Treatment',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Genital Warts Treatment cost can range from Rs. 25K to Rs. 50K and is driven by 3 factors',
        'Price can range from Rs. 3K to Rs. 25K based on the number of warts ',
        'Warts removal costs are higher for larger warts requiring surgical excision E.g. large condyloma removal will be more expensive than small warts needing only laser genital warts treatment ',
        'Laser treatment for genital warts is lower than surgical excision',
      ],
    },

    faqs: [
      {
        question: 'What are anal and genital warts?',
        answer:
          'Anal and genital warts are growths caused by the human papillomavirus (HPV). They can appear around the genital and anal areas, often manifesting as small, flesh-colored bumps or clusters.',
      },
      {
        question: 'Are anal and genital warts transmissible (contagious)?',
        answer:
          'These warts are typically transmitted through direct skin-to-skin contact with an infected person, often during sexual activity. HPV is highly contagious, and even individuals with no visible warts can spread the virus.',
      },
      {
        question: 'What are the symptoms of anal and genital warts?',
        answer:
          'Symptoms include the presence of small, raised growths in the genital or anal region. Itching, discomfort, or bleeding during intercourse may also occur. But overall genital and anal warts are benign and harmless, and are not known to be linked to any sexual functional problems. ',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/10/Hair-Transplant-2.jpg',
  },
  'lipoma-removal': {
    title: 'Lipoma Removal',
    subtitle: 'by Best Liposuction Centre in Hyderabad',

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
      coloredTitle: 'Lipoma Removal',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The cost of Lipoma removal procedure ranges from Rs. 10K to Rs. 30K based on 2 factors',
        'Number of Lipomas (Single lipoma or multiple lipoma removal)',
        'Technology you want (Surgical lipoma excision, laser lipoma removal)',
        'Anesthesia: Local or General',
      ],
    },

    faqs: [
      {
        question:
          'What is a lipoma, and how does it differ from other skin conditions?',
        answer:
          'A lipoma is a benign, soft tissue tumor composed of fat cells, namely primordial (baby) fat cells. Unlike other skin conditions, lipomas are non-cancerous growths and typically present as slow-growing, painless lumps under the skin.',
      },
      {
        question:
          'How common are lipomas, and who is more prone to developing them?',
        answer:
          'Lipomas are relatively common, with a prevalence that increases with age. While they can occur in individuals of any age, they are more frequently observed in adults and grow very slowly. There are no clear risk factors or predisposition. At Personiks we see at least one case for lipoma every day. ',
      },
      {
        question:
          'What are the common locations for lipomas to develop on the body?',
        answer:
          'Lipomas can develop anywhere on the body but are often found on the upper arms, thighs, neck, and torso. Their location can vary, and they are typically located just beneath the skin. If they are located in exposed areas, that is when most of the clients at Personiks want to get rid of them. We have also seen Multiple lipomas, where we have seen cases of more than 40-50 lipomas. In this case, even if the lipoma is not in exposed area, clients want them removed as they are embarrassing and can make intimate partner relationships psychologically uncomfortable. ',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Lipoma-Removal-Website-Icon-Before-and-After-1.jpg',
  },
  'mole-removal': {
    title: 'Mole Removal',
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
      coloredTitle: 'Mole Removal Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Beauty mark removal cost or mole removal cost is driven by 3 factors',
        'Price can range from Rs. 3K to Rs. 15K based on the size of the moles',
        'Mole removal cost can range from 3K to 50K based on the number of moles',
        'Laser treatment for moles on face cost lower than surgical excision',
      ],
    },

    faqs: [
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
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Mole-Removal-Website-Icon-Before-and-After-1.jpg',
  },
  'scar-removal-for-past-injury': {
    title: 'Scar revision treatment at Personiks',
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
      coloredTitle: 'Scars or Keloid Removal Treatment',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Scars Treatment cost can range from Rs. 10K to Rs. 45K and is driven by 3 factors',
        'Prices can range based on technology and Treatment Method. Scars needing surgical excision with fillers or botox or fat grafting are more expensive than simple CO2 laser scar revision ',
        'Scars removal costs are higher for larger areas, as longer procedure time or higher number of sittings would be needed',
        'A personalized treatment cost where multiple procedures are needed for the same scar, the cost of scar treatment increases',
      ],
    },

    faqs: [
      {
        question: 'What is CO2 laser treatment for scar removal?',
        answer:
          'CO2 laser treatment is a precise and effective method for scar removal. It uses focused light to vaporize damaged skin, stimulating collagen production and promoting smoother, rejuvenated skin.',
      },
      {
        question: 'How does scar excision contribute to scar treatment?',
        answer:
          'Scar excision involves surgically removing a scar and then closing the incision with meticulous care. This technique is suitable for certain types of scars and is often combined with other procedures for comprehensive results.',
      },
      {
        question:
          'Is this personalized scar treatment approach suitable for all patients?',
        answer:
          'Our personalized approach allows us to tailor treatments to each patient’s unique needs. During a consultation, our experienced surgeons will assess your scars and recommend a customized plan for optimal results.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/03/Scar-Website-Icon-Before-and-After-1.jpg',
  },
  'warts-removal': {
    title: 'Wart Removal',
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
      coloredTitle: 'Wart Removal Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Skin Tag Treatment cost can range from Rs. 3K to Rs. 25K and is driven by 3 factors',
        'Price can range from Rs. 3K to Rs. 25K based on the number of moles',
        'Warts removal costs are higher for larger warts requiring surgical excision. E.g. Verruca Removal from the face will be more expensive than small skin tags laser treatment ',
        'Laser treatment for warts is lower than surgical excision',
      ],
    },

    faqs: [
      {
        question:
          'What are skin warts, and how do they differ from other skin conditions?',
        answer:
          'Skin warts, also known as skin tags, are small, benign growths that often appear on areas where skin rubs against skin or clothing. They are not cancerous and differ from other skin conditions in their appearance and texture',
      },
      {
        question:
          'Can skin warts be mistaken for moles, and how can I differentiate between them?',
        answer:
          'Skin warts and moles may appear similar, but they have distinct characteristics. Skin warts are typically small, soft, and may have a stalk, while moles are often larger, flat or raised, and may have pigment.',
      },
      {
        question: 'Are skin warts contagious, and how do they develop?',
        answer:
          'Some research suggests that people with human papillomavirus (HPV) may get more skin tags than others. However a clear association has not been established. That being said, skin warts are not  contagious. Factors such as friction, genetics, and hormonal changes can also play a role in the making of skin tags. ',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-16-at-12.17.55-PM-1.jpeg.webp',
  },
  'acne-scar-treatment': {
    title: 'Scar removal for past injury',

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
      coloredTitle: 'Scars or Keloid Removal Treatment',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Scars Treatment cost can range from Rs. 10K to Rs. 45K and is driven by 3 factors',
        'Prices can range based on technology and Treatment Method. Scars needing surgical excision with fillers or botox or fat grafting are more expensive than simple CO2 laser scar revision',

        'Scars removal costs are higher for larger areas, as longer procedure time or higher number of sittings would be needed',
        'A personalized treatment cost where multiple procedures are needed for the same scar, the cost of scar treatment increases',
      ],
    },

    faqs: [
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
        question:
          'What role does collagen production play in acne scar removal?',
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
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/03/Scar-Website-Icon-Before-and-After-2.jpg',
  },
  'hair-transplant': {
    title: 'Hair Treatment',
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
      coloredTitle: 'Hair treatment',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'While many people give hair treatment pricing based on the number of hair follicles, at Personiks we believe this is not a transparent way of hair treatment pricing. No one will actually count the number of grafts done',
        'The cost for hair treatment varies from 1.5 to 2.5 lakhs',
        'At Personiks we have a more transparent hair treatment costing, based on the gender and the number of days needed to give you a natural looking hair treatment',
        'Female hair treatment cost is higher, because women will not want to shave their head for hair treatment. Therefore the effort and time taken to place each graft without harming nearby hair follicles becomes much higher. Hence the hair treatment cost for women is higher than men',
      ],
    },

    faqs: [
      {
        question: 'How long does a Hair treatment procedure take?',
        answer:
          'Hair treatment can be done in 1 day or 2 days, depending on the number of follicles to be grafted. Each dau sitting hours can extend up to 8 hours. In some cases 3rd day may also be needed if the client has lack of time or is unable to sit for long hours',
      },
      {
        question: 'Is Hair treatment a Permanent Solution for Hair loss?',
        answer:
          'Yes, a hair treatment provides a permanent solution as the transplanted hair follicles are resistant to balding. In fact some research has shown that transplanted hair are also resistant to hormonal changes',
      },
      {
        question:
          'How long does it take to see results after a Beard treatment?',
        answer:
          'The immediate post op results for beard treatment is similar to hair transplant. The details are in the FAQ above',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/10/Hair-Transplant-2.jpg',
  },
  'obesity-surgical': {
    title: 'About Bariatric surgery',
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
      coloredTitle: 'About Bariatric surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'This procedure alters your stomach’s capacity, limiting the calories you can consume and absorb. Additionally, it can reduce the hunger signals your digestive system sends to your brain. Bariatric weight loss hyderabad',
        'Bariatric surgery helps treat and prevent metabolic diseases related to obesity, such as fatty liver disease and diabetes.',
      ],
    },

    faqs: [
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
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/06/Gastric-Bypass.jpg',
  },
  'arm-liposuction-surgery': {
    title: 'Arm Liposuction or Tuck',
    subtitle: 'by Best Liposuction Centre in Hyderabad',

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
      coloredTitle: 'Arm Liposuction or Arm Tuck Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Arm Liposuction or Arm Tuck Surgery Cost in India varies from 1 lakh to 2.5 lakhs based on your aesthetic goals and surgery package you need',
        'If you need Arm tuck in addition to Arm Liposuction the cost will be higher, because Arm Tuck also involves skin excision to tighten the skin ',
        'Personiks has affordable arm liposuction and arm tuck price packages that combine arms liposuction with arm tuck and bra bulge removal for your shirt or blouses to fit perfectly',
      ],
    },

    faqs: [
      {
        question: 'How long does a Hair treatment procedure take?',
        answer:
          'Hair treatment can be done in 1 day or 2 days, depending on the number of follicles to be grafted. Each dau sitting hours can extend up to 8 hours. In some cases 3rd day may also be needed if the client has lack of time or is unable to sit for long hours',
      },
      {
        question: 'Is Hair treatment a Permanent Solution for Hair loss?',
        answer:
          'Yes, a hair treatment provides a permanent solution as the transplanted hair follicles are resistant to balding. In fact some research has shown that transplanted hair are also resistant to hormonal changes',
      },
      {
        question:
          'How long does it take to see results after a Beard treatment?',
        answer:
          'The immediate post op results for beard treatment is similar to hair transplant. The details are in the FAQ above',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Arm-Liposuction-Website-Icon-Before-and-After-2.jpg',
  },
  'axillary-breast-removal': {
    title: 'Axillary Breast Removal at Personiks',
    subtitle: 'by Best Plastic Surgeon in Hyderabad',

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
      coloredTitle: 'Axillary Breast Removal Treatment',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Axillary Breast Removal in Hyderabad cost in Hyderabad varies from 35K to 1.2 Lakhs based on the anesthesia you opt for',
        'Axillary breast removal under Local Anesthesia is cheaper as compared to General Anesthesia',
        'Similarly single side axillary breast removal is cheaper than double side removal',
        'You can combine axillary breast removal with other procedures such as chest wall contouring or axillary fat removal for women or breast lift',
        'The quotation given at Personiks has no hidden costs',
      ],
    },
    faqs: [
      {
        question: 'What is Axillary Breast tissue?',
        answer:
          'Axillary breast tissue refers to extra breast tissue present in the underarm (armpit) area. It is a common condition and can cause discomfort, swelling, or cosmetic concerns, especially during hormonal changes or weight gain.',
      },
      {
        question: 'How long does the Axillary Breast Removal procedure take?',
        answer:
          'The procedure typically takes 1 to 2 hours and is done under local or general anesthesia. Most patients can return home the same day and resume light activities within a few days.',
      },
      {
        question: 'Is Axillary Breast Removal permanent?',
        answer:
          'Yes, once the accessory breast tissue is surgically removed, it does not grow back. However, maintaining a healthy lifestyle helps in sustaining the results and preventing fat accumulation in the area.',
      },
      {
        question:
          'How long does it take to recover after Axillary Breast Removal?',
        answer:
          'Initial recovery takes about 1 week, with most swelling and bruising subsiding in 2–3 weeks. Final results are visible within 1 to 2 months after complete healing.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Auxillary-Breast-Website-Before-and-After-1-1.jpg',
  },
  'hd-liposuction-treatment': {
    title: 'liposculpture',
    subtitle: 'by Best Liposuction Centre in Hyderabad',
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
      coloredTitle: 'liposculpture',
      title: 'for a body to flaunt',
      bulletPoints: [
        'Body sculpting and etching, defining contours and muscles',
        '100% Safe Procedure ',
        'Suitable for people who are lean or have achieved weight loss',
      ],
    },

    faqs: [
      {
        question: 'Is liposuction a weight loss procedure?',
        answer:
          'Liposuction is a body sculpting procedure, and not a weight loss procedure. However, liposuction enables customers to feel more positively about their bodies early on in the process. This motivates them to stick to their diet & exercise.',
      },
      {
        question: 'Is liposuction safe procedure?',
        answer:
          'The safety risk of Liposuction is less than 1%. Whereas the fatality risk of road traffic accident in India is 11%. Hence for an analogy we say that Liposuction is safer than crossing a road.',
      },
      {
        question: 'How long does it take to recover from liposuction?',
        answer:
          'Recovery from liposuction is surprisingly fast and it is a day care procedure. More than 95% of the patients get discharged the same day, 4 hours after the surgery.',
      },
      {
        question: 'Will there be any scars after liposuction?',
        answer:
          'Liposuction incisions are small and typically heal well, resulting in minimal scarring that fades over time.',
      },
      {
        question: 'How long do the results of liposuction last?',
        answer:
          'The results of liposuction are long-lasting, but it is important for patients to maintain a healthy lifestyle to prevent the return of excess fat.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2023/11/male-AFTER-PNG.png',
  },
  'general-liposuction': {
    title: 'Healthy way to lose weight in target body parts - Liposuction',
    subtitle: 'Sculpt them with Best Liposuction Centre in Hyderabad',

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
      coloredTitle: 'Liposuction',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Liposuction cost in India ranges from ₹70,000 to ₹2.5 lakhs depending on the number of areas treated and the technique used (traditional, laser, or VASER).',
        'Personiks offers customized and affordable liposuction packages, which can be combined with procedures like tummy tuck or body contouring.',
        'All quotations at Personiks are transparent and inclusive, with no hidden charges.',
      ],
    },

    faqs: [
      {
        question: 'What is Liposuction?',
        answer:
          'Liposuction is a cosmetic procedure used to remove stubborn fat deposits from specific areas of the body such as the abdomen, thighs, arms, hips, and chin. It helps in improving body contour but is not a weight-loss solution.',
      },
      {
        question: 'How long does the Liposuction procedure take?',
        answer:
          'The duration depends on the number of areas being treated. Typically, liposuction takes 1 to 3 hours. It is usually done under local or general anesthesia, and patients can often return home the same day.',
      },
      {
        question: 'Is Liposuction a permanent solution for fat removal?',
        answer:
          'Yes, liposuction permanently removes fat cells from the treated areas. However, to maintain results, a healthy diet and regular exercise are essential to prevent weight gain in untreated areas.',
      },
      {
        question: 'What is the recovery time after Liposuction?',
        answer:
          'Most patients can resume light activities within 3 to 5 days. Swelling and bruising may last for a few weeks, and final results are usually visible after 2 to 3 months once the body has fully healed.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Liposuction-Website-Icon-Before-and-After-3.jpg',
  },
  gynecomastia: {
    title: 'Gynecomastia (Man Boob)',
    subtitle: 'by Best Liposuction Centre in Hyderabad',

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
      coloredTitle: 'Gynecomastia Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Gynecomastia Surgery Cost in India varies from 80,000 to 3 lakhs based on your aesthetic goals and surgery package you need',
        'Personiks has affordable gynecomastia removal price packages that combine gynecomastia with tummy 360 liposuction',
        'The quotation given at Personiks has no hidden costs',
      ],
    },

    faqs: [
      {
        question: 'What is Gynecomastia?',
        answer:
          'Gynecomastia is a condition in which male breast tissue becomes enlarged due to hormonal imbalances, genetics, or certain medications. It can affect one or both sides and is often treated for cosmetic and psychological reasons.',
      },
      {
        question: 'How long does the Gynecomastia surgery take?',
        answer:
          'Gynecomastia surgery typically takes 1 to 2 hours, depending on the severity of the condition. It is usually performed under local anesthesia with sedation or general anesthesia, and most patients can go home the same day.',
      },
      {
        question: 'Is Gynecomastia surgery a permanent solution?',
        answer:
          'Yes, the results of gynecomastia surgery are permanent, especially when glandular tissue is removed. However, maintaining a stable weight and hormonal balance is important to prevent recurrence.',
      },
      {
        question:
          'How long does it take to recover after Gynecomastia surgery?',
        answer:
          'Most patients resume normal activities within a week, although full recovery may take 4 to 6 weeks. Swelling and bruising gradually subside, and final results are visible within 2 to 3 months.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Gynacomastia-Website-Icon-Before-and-After-1.jpg',
  },
  'mommy-make-over-surgery': {
    title: 'Mommy Makeover Surgery',
    subtitle: 'by Best Liposuction Centre in Hyderabad',
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
      coloredTitle: 'Mommy Makeover Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Mommy Makeover Package costs starts from 2.5 Lakhs to 5 Lakhs, based on procedures you choose in your package',
        'Personiks is amongst the few centers where surgical drainless procedure is performed that reduces downtime',
        'The quotation given at Personiks has no hidden costs',
      ],
    },

    faqs: [
      {
        question: 'How long does an Arm Liposuction procedure take?',
        answer:
          'Arm liposuction is usually completed in a single day. The procedure typically lasts between 1 to 3 hours depending on the amount of fat to be removed and the technique used. Patients can usually return home the same day after the procedure.',
      },
      {
        question: 'Is Arm Liposuction a Permanent Solution for Fat Removal?',
        answer:
          'Yes, arm liposuction permanently removes fat cells from the treated areas. However, it is important to maintain a healthy lifestyle, as weight gain after the procedure can cause the remaining fat cells to expand.',
      },
      {
        question: 'How long does it take to see results after Arm Liposuction?',
        answer:
          'Initial changes can be seen within 1 to 2 weeks as swelling begins to subside. The final results are visible after about 2 to 3 months, once the arms have fully healed and the contour settles.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/01/mommy-Makerover-2.jpeg',
  },

  'thigh-liposuction-and-calf-liposuction': {
    title: 'Thigh Liposuction and Calf Liposuction Removal',
    subtitle: 'by Best Liposuction Centre in Hyderabad',

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
      coloredTitle: 'Calf Liposuction or Thigh Liposuction',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Thigh Liposuction or Calf Liposuction Cost in India varies. Calf liposuction cost varies from 1.25 lakhs to 2 lakhs, while thigh liposuction cost varies from 1.2 lakhs to 2 lakhs',
        'If you need Thigh tuck in addition to thigh Liposuction the cost will be higher, because thigh tuck also involves skin excision to tighten the skin ',
        'Personiks has affordable thigh liposuction and calf liposuction price packages. The surgeon might combine multiple procedures for your aesthetic goals ',
        'The quotation given at Personiks has no hidden costs',
      ],
    },

    faqs: [
      {
        question: 'Consultation',
        answer:
          'Consult with a Board Certified Cosmetic Surgeon Get a personalized treatment plan e.g. combine thigh Liposuction with butt and hips liposuction, tummy 360 liposuction, or CO2 Lasers for stretch marks removal Get an transparent thigh liposuction and calf liposuction cost or customized surgery package cost estimate ',
      },
      {
        question: 'Surgery',
        answer:
          'Complete the surgeon prescribed pre-surgical blood test and other investigations Thigh fat removal or calf fat removal is done by our skilled board certified plastic surgeon You will stay at the center for some time for observation with same day discharge',
      },
      {
        question: 'Back to Routine',
        answer:
          'The recovery time for thigh liposuction or calf liposuction is 4 to 7 days Compression garment can help is faster healing  Followup appointment after 5-7 days to check healing Personiks also provides ultrasonic massages for faster recovery as recommended by the surgeon You can get back to your heavy workout or gym sessions after 20 to 30 days, until then you can do light activities',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-01-23-at-11.08.35-AM.jpeg.webp',
  },

  'tummy-tuck-surgery': {
    title: 'Tummy Liposuction and Tummy Tuck Removal',
    subtitle: 'by Best Liposuction Centre in Hyderabad',

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
      coloredTitle: 'Tummy Liposuction or Tummy Tuck Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Belly Fat reduction with Liposuction or Tummy Tuck Surgery Cost in India varies from 80,000 to 1 lakh based on your aesthetic goals and surgery package you need',
        'If you need Tummy tuck in addition to Tummy Liposuction the cost will be higher, because Tummy Tuck also involves skin excision to tighten the skin ',
        'Personiks has affordable Laser liposuction, Vaser Liposuction and tummy tuck price packages. Personiks also offers Tummy 360 degree, which removes tummy fat reduction, bra rolls removal and love handles removal',
        'The quotation given at Personiks has no hidden costs',
      ],
    },
    faqs: [
      {
        question: 'What is Tummy Tuck Surgery?',
        answer:
          'Tummy Tuck, or Abdominoplasty, is a cosmetic surgery that removes excess skin and fat from the abdominal area and tightens the underlying muscles. It’s ideal for individuals with loose or sagging skin due to weight loss or pregnancy.',
      },
      {
        question: 'How long does a Tummy Tuck procedure take?',
        answer:
          'The surgery usually takes about 2 to 4 hours, depending on the extent of correction needed. It is performed under general anesthesia and may require an overnight hospital stay for monitoring.',
      },
      {
        question: 'Is Tummy Tuck a weight loss procedure?',
        answer:
          'No, a tummy tuck is not meant for weight loss. It is best suited for patients who are near their ideal weight but struggle with excess skin, stretched muscles, or localized fat deposits that don’t respond to diet and exercise.',
      },
      {
        question: 'What is the recovery time after a Tummy Tuck?',
        answer:
          'Initial recovery typically takes 2 to 3 weeks. Most patients can return to light activities after this period. Full healing and final results are seen in 2 to 3 months, depending on individual healing rates and post-op care.',
      },
      {
        question: 'Are the results of a Tummy Tuck permanent?',
        answer:
          'Yes, the results are long-lasting when combined with a healthy lifestyle. However, future pregnancies or significant weight changes can affect the outcome and may require revision surgery.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Tummy-Tuck-Icon-Before-and-After-1.jpg',
  },
  'treatment-for-burns-and-contractures': {
    title: 'Effective Burns Treatment',
    subtitle: ' Plastic Surgery Options for Burn Relief and Scar Management',

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
      coloredTitle: 'Burns Treatment',
      title: 'Plastic Surgery Options for Burn Relief and Scar Management',
      bulletPoints: [
        'Silver dressings are essential in the early stages of burn treatment. These dressings are armed with potent antibacterial properties, reducing the risk of infection, alleviating pain, and accelerating wound healing. ',
        'For severe, deep burns that extend beyond the superficial skin layers, skin grafting is a vital surgical solution. This procedure involves harvesting healthy skin from one area (the donor site) and transplanting it onto the burn wound.',
        'Collagen dressings play a significant role in later-stage burn treatment, focusing on scar management and aesthetic improvement.',
        'Contractures occur when scar tissue tightens and restricts movement. Effective management involves various techniques, such as physical therapy to improve flexibility and surgical procedures to release tight scar tissue.',
      ],
    },

    faqs: [
      {
        question: 'How long does a Hair treatment procedure take?',
        answer:
          'Hair treatment can be done in 1 day or 2 days, depending on the number of follicles to be grafted. Each dau sitting hours can extend up to 8 hours. In some cases 3rd day may also be needed if the client has lack of time or is unable to sit for long hours',
      },
      {
        question: 'Is Hair treatment a Permanent Solution for Hair loss?',
        answer:
          'Yes, a hair treatment provides a permanent solution as the transplanted hair follicles are resistant to balding. In fact some research has shown that transplanted hair are also resistant to hormonal changes',
      },
      {
        question:
          'How long does it take to see results after a Beard treatment?',
        answer:
          'The immediate post op results for beard treatment is similar to hair transplant. The details are in the FAQ above',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2023/10/Burns-Skin-Grafting-1.jpg',
  },
};

export default pageData;
