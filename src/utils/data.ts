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
  'pilonidal-sinus-treatment': {
    title: 'Pilonidal Sinus Treatment',
    subtitle: ' Essential Steps to a Pain-Free Life',

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
      coloredTitle: 'Pilonidal Sinus Treatment',
      title: 'Treatment Options at Personiks:',
      bulletPoints: [
        'ncision and Drainage: Provides immediate relief but doesn’t prevent recurrence.',
        'Laser Hair Removal: Addresses hair-related triggers, reducing the chances of recurrence.',
        'Excision and Flap Procedures: Surgical removal of the cyst and affected tissue, with reconstruction for lower recurrence rates.',
        'Seeking professional advice early is key to a smoother path to recovery, enhancing the quality of life for pilonidal sinus sufferers.',
      ],
    },

    faqs: [
      {
        question:
          'Is laser hair removal a permanent solution for pilonidal sinus?',
        answer:
          'While laser hair removal is not a cure for the sinus itself, it effectively reduces hair growth in the affected area, significantly lowering the risk of recurrence after treatment. It’s often recommended as a long-term preventive measure alongside surgical or drainage procedures.',
      },
      {
        question: ' How long is the recovery after excision and flap surgery?',
        answer:
          'Recovery time can vary based on the extent of the procedure and individual healing, but most patients can return to normal activities within 2–4 weeks. Proper wound care and follow-up with your surgeon are crucial to ensuring a smooth and infection-free recovery.',
      },
      {
        question: 'What causes a pilonidal sinus and who is most at risk?',
        answer:
          'A pilonidal sinus is often caused by loose hairs penetrating the skin, leading to infection and cyst formation. It commonly affects people who sit for long periods, have coarse body hair, or experience frequent friction in the lower back area. Young adults and men are generally more prone to this condition.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2023/10/pilonidal-sinus-repair-by-rhomboid-flap-e-1.png',
  },
  'chemical-peel': {
    title: 'Chemical Peel in Hyderabad',
    subtitle: 'by Best Dermatologist Centre in Hyderabad',

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
      coloredTitle: 'Chemical Peel Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The cost of a chemical peel in Hyderabad can vary depending on several factors, including the type of peel, the strength of the peel, the number of treatments required, and the location and reputation of the skincare professional or clinic performing the treatment.On average, the cost of a chemical peel in Hyderabad can range from INR 2,500 to INR 10,000 per session',
      ],
    },

    faqs: [
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
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2023/02/chemical-Peel.jpg',
  },
  'contour-thread-lift': {
    title: 'Contour Thread Lift',
    subtitle: 'Best Liposuction Centre in Hyderabad',

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
      coloredTitle: 'Contour Thread',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The cost of the Contour Thread procedure can vary depending on several factors, including the location, the experience and qualifications of the physician performing the procedure, the number of threads required, and the extent of the correction needed.but may typically range from INR 50,000 to INR 2,00,000 or more.',
      ],
    },

    faqs: [
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
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2023/02/Countor-thread-lift.jpg',
  },
  'derma-rollor': {
    title: 'Derma Rooller Treatment',
    subtitle: 'Best Dermatologist Centre in Hyderabad',

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
      coloredTitle: 'Derma Rollor',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'However, the cost of a derma roller in Hyderabad may vary depending on various factors such as the brand, quality, size, and the location where it is sold. Generally, the cost of a derma roller in Hyderabad can range from INR 300 to INR 2000. It is recommended to do some research, compare prices and quality from different sources before making a purchase. Additionally, it is important to make sure that the derma roller is from a trusted source and is sterile to avoid any potential risk of infection.',
      ],
    },

    faqs: [
      {
        question: 'What is a derma roller?',
        answer:
          'A derma roller is a handheld device that has a roller with small needles attached to it. It is used to create tiny punctures in the skin to stimulate the body’s natural healing response and improve skin texture and tone.',
      },
      {
        question: 'What are the benefits of using a derma roller?',
        answer:
          'Derma rollers can help to improve the appearance of acne scars, fine lines and wrinkles, hyperpigmentation, uneven skin texture, and stretch marks. They can also help to stimulate collagen production and improve overall skin health.',
      },
      {
        question: 'Is derma rolling painful?',
        answer:
          'Derma rolling can cause some discomfort, but it is typically not painful. The sensation can feel like a mild prickling or tingling sensation on the skin.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2023/02/derma-roller.jpg',
  },
  'facial-rejuvination': {
    title: 'Facial Rejuvination',
    subtitle: 'by skin specialist in Hyderabad',

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
      coloredTitle: 'Facial Rejuvenation',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The cost of facial rejuvenation in Hyderabad can vary depending on the specific treatment or combination of treatments that are recommended for your individual needs and goals. However, to give you an idea of the cost  typically range from INR 20,000 to INR 2,00,000 or more.',
      ],
    },

    faqs: [
      {
        question: 'What is facial rejuvenation, and how does it work?',
        answer:
          'Facial rejuvenation is a set of cosmetic procedures designed to restore a more youthful appearance to the face. It can involve a variety of non-surgical and surgical treatments, including Botox, dermal fillers, chemical peels, and facelifts. The goal of facial rejuvenation is to address specific concerns such as fine lines, wrinkles, and sagging skin to create a more youthful, refreshed appearance.',
      },
      {
        question:
          'What are the different types of facial rejuvenation treatments available?',
        answer:
          'There are many different types of facial rejuvenation treatments available, including non-surgical treatments like Botox, dermal fillers, chemical peels, and microdermabrasion, as well as surgical treatments like facelifts and brow lifts. The specific treatments used will depend on the individual’s needs and goals.',
      },
      {
        question: 'What are the benefits of facial rejuvenation?',
        answer:
          'Facial rejuvenation can provide a wide range of benefits, including a more youthful appearance, improved skin texture and tone, reduced fine lines and wrinkles, and increased self-confidence.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-28-at-5.16.26-PM.jpeg',
  },
  'laser-skin-pigmentation': {
    title: 'Laser Skin Pigmentation',
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
      coloredTitle: 'Laser Skin Pigmentation',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The cost of laser skin pigmentation treatment in Hyderabad can vary depending on various factors such as the size and location of the treatment area, the type of laser used, and the number of sessions required for optimal results. On average, the cost of laser skin pigmentation treatment in Hyderabad can range from Rs. 3,000 to Rs. 15,000 per session.',
      ],
    },

    faqs: [
      {
        question: 'What is laser skin pigmentation treatment?',
        answer:
          'Laser skin pigmentation treatment is a cosmetic procedure that uses laser technology to target and break down areas of excessive pigmentation in the skin.',
      },
      {
        question:
          'What types of pigmented lesions can be treated with laser skin pigmentation?',
        answer:
          'Laser skin pigmentation can be used to treat a range of pigmented lesions, such as sun spots, age spots, freckles, and some types of birthmarks.',
      },
      {
        question: 'How does laser skin pigmentation work?',
        answer:
          'The laser emits a focused beam of light that is absorbed by the melanin pigment in the skin, causing the pigmented cells to break apart and eventually be eliminated by the body’s natural processes.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2023/02/Pigmentation-1.jpg',
  },
  'laser-skin-toning': {
    title: 'Lazer Skin Toning',
    subtitle: 'by skin specialist in Hyderabad',

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
      coloredTitle: 'Skin Laser Toning',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The cost of laser skin toning in Hyderabad can vary depending on the type of laser used, the number of sessions required, the location of the treatment center, and other factors. On average, the cost of laser skin toning in Hyderabad can range from Rs. 3,000 to Rs. 15,000 per session.',
      ],
    },

    faqs: [
      {
        question: 'What is laser skin toning?',
        answer:
          'Laser skin toning is a non-invasive cosmetic procedure that uses laser technology to improve the appearance of skin texture, tone, and pigmentation.',
      },
      {
        question: 'How does laser skin toning work?',
        answer:
          'Laser skin toning works by using a laser to heat the dermis layer of the skin, stimulating collagen production and causing the skin to tighten. The laser is also used to target and break down pigmentation, reducing the appearance of dark spots and discoloration.',
      },
      {
        question: 'Is laser skin toning safe?',
        answer:
          'Yes, laser skin toning is generally considered safe when performed by a qualified and experienced professional. However, as with any medical procedure, there is a risk of side effects such as redness, swelling, and skin irritation.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2023/02/Skin-Toning-.jpg',
  },
  'unwanted-hair': {
    title: 'Laser Hair Removal',
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
      coloredTitle: 'Laser Hair Removal',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The Laser Hair Removal in Hyderabad cost depends on the body part that is targeted, as larger body parts take longer treatment time.',
        'For most people 6 sittings of laser hair reduction are enough to get complete benefit, hence purchasing a 6 sitting package can be more cost effective',
        'Personiks offers 40% discount on 6 sitting package, and if you need 1-2 session more to achieve the extra results, then you don’t have to pay extra, as we are focused on the outcomes ',
        'Best Laser Hair Removal / Reduction Treatment Services in Hyderabad.',
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
      'https://personiks.com/wp-content/uploads/2024/03/Under-Arms.webp',
  },
  'chin-implant-augmentation': {
    title: 'Chin implant / extension / augmentation',
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
      coloredTitle: 'Chin Augmentation Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The Chin Implant Surgery cost and double chin removal cost in India, depends on your aesthetic goals',
        'Personiks has affordable packages that combine buccal fat pad removal with chin liposuction or neck liposuction',
        'The cost for Chin Implants is 70K and upwards depending on the combination of procedures',
        'The quotation given at Personiks has no hidden costs',
      ],
    },

    faqs: [
      {
        question: 'Consultation',
        answer:
          'Consult with a Board Certified Cosmetic SurgeonGet a personalized treatment plan e.g. combine chin augmentation with double chin liposuction and buccal fat removal in the treatment plan Get an transparent chin implant cost estimate, or customized plastic surgery cost estimate',
      },
      {
        question: 'Surgery',
        answer:
          'Get a jaw x-ray for measurements for chin implantComplete the surgeon prescribed pre-surgical viral screen blood test .The chin implant is inserted surgically by a board certified plastic surgeon In less than 60 minutes you can have a sharp jawline ',
      },
      {
        question: 'Back to Routine',
        answer:
          'You can get back to work the very next day Chin Implant is like correcting a weak or small chin in matter of minutes Followup appointment after 5 days to check healing',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/10/Hair-Transplant-2.jpg',
  },
  'dimple-creation': {
    title: 'Get Deepika Padukone like dimples with dimple creation surgery',
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
      coloredTitle: 'Personiks',
      title: 'Dimple Creation Packages.',
      bulletPoints: [
        'The cost for this procedure is varies form 40K to 1 lakh, depending on whether you are doing only dimple creation, or are you combining it with buccal fat removal or Face Fat Grafting',
        'Our Board certified plastic surgeons offer more comprehensive options for enhancing your face beauty by combining different techniques to create an enhanced version of you. Dimple Creation in Hyderabad',
        'Dimple creation at Personiks ensures you get balanced dimples on both your cheeks',
      ],
    },

    faqs: [
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
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Dimple-Website-Icon-Before-and-After-2-1.jpg',
  },
  'ear-shaping': {
    title: 'Reshape or ears or correct ear deformity',
    subtitle: 'by Best Otoplasty Surgeon in Hyderabad',

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
      coloredTitle: 'Ear Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Prices can range based on technology and Treatment Method. Scars needing surgical excision with fillers or botox or fat grafting are more expensive than simple CO2 laser scar revision',
        'Scars removal costs are higher for larger areas, as longer procedure time or higher number of sittings would be needed',
        'A personalized treatment cost where multiple procedures are needed for the same scar, the cost of scar treatment increases',
        // Removed the empty item here
      ],
    },

    faqs: [
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
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Ear-Shaping-Website-Icon-Before-and-After-1-1.jpg',
  },
  'eyelid-surgery': {
    title: 'Treat under eye bags permanently',
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
      coloredTitle: 'Eyelid Blepharoplasty Treatment',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Eyelid surgery cost from Rs.1 lakh to 2 lakhs depending on whether you want both eyelids treatment, whether you need CO2 Laser in addition to blepharoplasty for treating eyebags, or whether you also need brow lift to correct droopy eyes',
        'Eyelid surgery cost is driven by the skill of the surgeon. Since it is a very delicate surgery it must be done by a Board Certified Surgeon. The surgeon cost is the most important component in this surgery',
        'Personiks also offers hassle free Zero Cost EMI for people who cannot bear the cost of blepharoplasty upfront',
      ],
    },

    faqs: [
      {
        question: 'Consultation',
        answer:
          'Consult with our Board Certified Cosmetic Surgeon Get a personalized treatment plan e.g. combine with brow lift and CO2 laser for younger looking eyes Get a Eyelid Surgery cost estimate, or customized plastic surgery cost estimate',
      },
      {
        question: 'Surgery',
        answer:
          'Complete the surgeon prescribed pre-surgical blood test Surgery is done under Local Anesthesia Eyelid Surgery is done only by our skilled board certified plastic surgeons Permanent solution for Puffy Eyes, Droopy Eyes or Ageing Eyes or Drooping Eyebrows with natural and youthful eyes',
      },
      {
        question: 'Back to Routine',
        answer:
          'You can get back to work after 5-7 days Blepharoplasty is a permanent solution for your Eye Bags problem Followup appointment after 5 days to check healing',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Eye-lid-Website-Icon-Before-and-After-1.jpg',
  },
  'face-fat-grafting': {
    title:
      'Rejuvenate your face, restore face volume and face contouring with best fat grafting center',
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
      coloredTitle: 'Facial Fat Grafting Procedure',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The cost in Hyderabad varies depending on the part of the face you want to target, as multiple parts increase the procedure time',
        'Fat grafting cost is driven by the procedure time, example lip fat grafting will be cheaper than fat grafting for face',
        'Please visit Breast Augmentation page, if you are interested in knowing more about breast fat grafting ',
        'Fat grafting may prove to be more cost effective in the long run as compared to fillers, as the fat left after absorption post the fat injection can stay long',
      ],
    },

    faqs: [
      {
        question: 'What is fat grafting, and how does it work?',
        answer:
          'Fat grafting, also known as fat transfer, is a cosmetic procedure that involves harvesting fat from one area of the body through liposuction and injecting it into another area, such as the face, to enhance volume and contours.',
      },
      {
        question: 'Is fat grafting a safe procedure?',
        answer:
          'Yes, fat grafting is considered safe when performed by a qualified and experienced plastic surgeon. Using the patient’s own fat reduces the risk of allergic reactions or rejection.',
      },
      {
        question: 'What areas of the face can be treated with fat grafting?',
        answer:
          'Fat grafting is commonly used to enhance volume in areas such as the cheeks, lips, temples, and chin, providing a natural and harmonious result.',
      },
      {
        question: 'How long do the results of fat grafting last?',
        answer:
          'While not all transferred fat may survive, a portion can become permanent. Results are long-lasting, and touch-up sessions can be performed if needed.',
      },
      {
        question:
          'What is the difference between fat grafting and dermal fillers?',
        answer:
          'Fat grafting uses the patient’s own fat, providing natural and longer-lasting results. Dermal fillers use synthetic substances and offer temporary enhancements.',
      },
      {
        question: 'Can fat grafting be combined with other procedures?',
        answer:
          'Yes, fat grafting can be combined with other facial procedures, such as facelift or rhinoplasty, for a more comprehensive enhancement tailored to individual goals.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Face-Fat-Website-Icon-Before-and-After-2-1-1.jpg',
  },
  'lip-correction': {
    title:
      'Reshape your lips, enhance your smile line and make your lips plumper and younger',
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
      coloredTitle: 'Lip Contouring and Lip Augmentation Procedure',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'The cost in Hyderabad varies depending on your treatment choice. While the lip fillers cost starts from Rs. 25K to 50K depending on the procedure choice, The procedures available are lip fillers, lip fat grafting and lip reduction',
        'Lip procedures can be combined with buccal fat removal, chin augmentation, or double chin removal for enhancing the lower face profile ',
        'Lip fillers are the most popular procedure choice, but many of our patients also opt for lip fat grafting hoping for longer term results, which may or may not happen',
        'Board certified plastic surgeons offer more options for lip related procedures. Discuss your esthetic goals clearly with the surgeon and get a price quotation accordingly',
      ],
    },

    faqs: [
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
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Lip-Correction-Website-Icon-Before-and-After-2-1.jpg',
  },
  'rhinoplasty-surgery': {
    title: 'Reshape your nose by Best Rhinoplasty Surgeon in Hyderabad',
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
      coloredTitle: 'Rhinoplasty Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Rhinoplasty cost in Hyderabad varies from Rs. 35K to 3 lakhs depending on the treatment plan. Liquid rhinoplasty is cheaper, but not a permanent result. Permanent results procedure like nasal implants, surgical rhinoplasty and septoplasty are costlier',
        'Surgical Rhinoplasty is a single sitting procedure but liquid rhinoplasty needs to be repeated after 6-12 months, hence the long term cost of liquid rhinoplasty might end up being higher',
        'Personiks also offers customized rhinoplasty procedures for defect correction which can be combined with sinus surgery, helping you to treat recurrent sinusitis as well as nose shaping',
        'Rhinoplasty can be combined with other procedures like chin augmentation or blepharoplasty for a more comprehensive facial enhancement. It is possible to combine these in a single sitting and also get cost benefit as a customized package',
      ],
    },

    faqs: [
      {
        question: 'What is the difference between open and closed rhinoplasty?',
        answer:
          'Open rhinoplasty involves an external incision, providing better visibility for complex procedures. Closed rhinoplasty is performed internally, leaving no visible external scars. At Personiks we prefer Closed Rhinoplasty to give a scarless result.',
      },
      {
        question: 'Can rhinoplasty improve breathing issues?',
        answer:
          'Yes, rhinoplasty can address breathing difficulties by incorporating functional adjustments, such as septoplasty, to correct a deviated septum or other structural issues that may impede airflow.',
      },
      {
        question: 'How long does it take to recover from rhinoplasty?',
        answer:
          'Initial recovery typically takes just 1-2 weeks, but complete healing may take more time with the final results becoming apparent as the nose settles into its new shape.',
      },
      {
        question: 'Are there non-surgical options for nose enhancement?',
        answer:
          'Open rhinoplasty involves an external incision, providing better visibility for complex procedures. Closed rhinoplasty is performed internally, leaving no visible external scars. At Personiks we prefer Closed Rhinoplasty to give a scarless result.',
      },
      {
        question: 'Will rhinoplasty change my voice?',
        answer:
          'No. Rhinoplasty does not impact vocal cords or alter one’s voice. Our surgeons take care to preserve the structural integrity of the nose to maintain normal nasal functions.',
      },
      {
        question: 'Can rhinoplasty change the size of nostrils?',
        answer:
          'Yes, rhinoplasty can alter the size and shape of nostrils. This can be achieved through techniques such as alar base reduction or adjustments to the nostril shape during surgery.',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Nose-Website-Icon-Before-and-After-1-1.jpg',
  },
  'vaginoplasty-labiaplasty': {
    title:
      'Tighten your Vagina and Correct Urine Leakage after delivery and reduce protruding labia',
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
      coloredTitle: 'Vaginoplasty & labiaplasty Surgery',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Arm Liposuction or Arm Tuck Surgery Cost in India varies from 1 lakh to 2.5 lakhs based on your aesthetic goals and surgery package you need',
        'If you need Arm tuck in addition to Arm Liposuction the cost will be higher, because Arm Tuck also involves skin excision to tighten the skin ',
        'Personiks has affordable arm liposuction and arm tuck price packages that combine arms liposuction with arm tuck and bra bulge removal for your shirt or blouses to fit perfectly',
        'The quotation given at Personiks has no hidden costs',
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
      'https://personiks.com/wp-content/uploads/2024/01/vaginoplasty.png.webp',
  },
  'butt-lift-and-hips-liposuction': {
    title: 'Butt Liposuction and Hip Liposuction Cost',
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
      coloredTitle: 'Butt Liposuction and Hip Liposuction',
      title: 'Cost in Hyderabad',
      bulletPoints: [
        'Butt Liposuction or Hips Liposuction Cost in India varies. Butt liposuction cost varies from 80K to 1.5 Lakhs. Brazilian Butt Lift costs approximately 1.25 to 1.5 lakhs',
        'If you need Thigh liposuction in addition to butt liposuction the cost will be higher',
        'Personiks has affordable buttock liposuction and hips liposuction price packages ',
        'TThe quotation given at Personiks has no hidden costs',
      ],
    },

    faqs: [
      {
        question: 'Consultation',
        answer:
          'Consult with a Board Certified Cosmetic Surgeon . Get a personalized treatment plan e.g. combine buttock & hips liposuction with, thigh liposuction, tummy 360 liposuction, or CO2 Lasers for stretch marks removal. Get an transparent buttock liposuction or hips liposuction cost or brazilian butt lift (BBL) cost surgery package cost estimate ',
      },
      {
        question: 'Surgery',
        answer:
          'Complete the surgeon prescribed pre-surgical blood test and other investigations .Buttocks fat removal or hips fat or Brazilian Butt Lift removal is done by our skilled board certified plastic surgeon. You will stay at the center for some time for observation with same day discharge',
      },
      {
        question: 'Back to Routine',
        answer:
          'The recovery time for butt liposuction or hips liposuction is 4 to 7 days. Followup appointment after 5-7 days to check healing .Personiks also provides ultrasonic massages for faster recovery as recommended by the surgeon .You can get back to your heavy workout or gym sessions after 20 to 30 days, until then you can do light activities',
      },
    ],

    beforeAfterImage:
      'https://personiks.com/wp-content/uploads/2024/02/Website-Icon-Before-and-After-1.jpg',
  },
};
export default pageData;
