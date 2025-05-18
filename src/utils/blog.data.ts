// utils/blog.data.ts
import { BlogDataMap } from '@/types/blog';
import { ReactNode } from 'react';

export const blogData: BlogDataMap = {
  'advance-prp-treatment-hair-loss': {
    title: 'Advanced PRP Treatment for Hair Loss',
    subtitle: 'Restore Your Hair Naturally with Cutting-Edge Therapy',
    image: 'https://personiks.com/wp-content/uploads/2025/02/download.jpg',
    publishedDate: 'May 15, 2024',
    readTime: '10 min read',
    keywords: [
      'PRP Treatment',
      'Hair Regrowth',
      'Non-Surgical Solution',
      'Hyderabad',
    ],
    heroDescription: [
      'Discover the revolutionary PRP therapy that stimulates natural hair growth without surgery or harsh medications.',
      'Our advanced treatment protocol at Personiks Hospital combines medical expertise with state-of-the-art technology for optimal results.',
    ],
    whatIsThis: {
      title: 'What is PRP Treatment for Hair Loss?',
      description: [
        "Platelet-Rich Plasma (PRP) therapy is a non-surgical treatment that uses your body's own healing properties to stimulate hair follicles and promote regrowth.",
        'The procedure involves drawing a small amount of your blood, processing it to concentrate the platelets, and injecting this plasma into your scalp. These platelets release growth factors that awaken dormant hair follicles and strengthen existing ones.',
      ],
    },
    benefits: [
      {
        title: 'Natural Regrowth',
        description:
          'Uses your own blood components to stimulate hair growth without synthetic drugs',
        icon: '🌿' as unknown as ReactNode,
      },
      {
        title: 'Minimal Downtime',
        description: 'Return to normal activities immediately after treatment',
        icon: '⏱️' as unknown as ReactNode,
      },
      {
        title: 'Safe Procedure',
        description: 'No risk of allergic reactions or side effects',
        icon: '🛡️' as unknown as ReactNode,
      },
      {
        title: 'Visible Results',
        description: 'Noticeable improvement in hair density within 3-6 months',
        icon: '✨' as unknown as ReactNode,
      },
    ],
    whyChooseUs: {
      description: [
        'At Personiks Hospital, we combine medical expertise with cutting-edge technology to deliver exceptional PRP results. Our customized treatment plans address your specific pattern of hair loss for optimal outcomes.',
        'We use advanced centrifugation techniques to prepare the highest quality PRP, ensuring maximum growth factor concentration for better results.',
      ],
      author: {
        name: 'Dr. Gun Kumar Venula',
        title: 'Hair Restoration Specialist',
        avatar: '/images/dr-venula.jpg',
      },
      quote:
        'Our patient-centric approach ensures each PRP treatment is tailored to your unique hair loss pattern for optimal results.',
    },
    procedure: {
      steps: [
        {
          title: 'Initial Consultation',
          description: [
            'Comprehensive evaluation of your hair loss pattern and scalp health',
            'Discussion of medical history and treatment expectations',
          ],
        },
        {
          title: 'Blood Draw & Processing',
          description: [
            'Small blood sample collected (similar to routine blood test)',
            'Special centrifugation to separate and concentrate platelets',
          ],
        },
        {
          title: 'PRP Injection',
          description: [
            'Precise microinjections into targeted areas of the scalp',
            'Virtually painless procedure with topical anesthesia',
          ],
        },
        {
          title: 'Post-Treatment Care',
          description: [
            'Detailed aftercare instructions provided',
            'Scheduling of follow-up sessions for optimal results',
          ],
        },
      ],
    },
    suitableFor: {
      title: 'Ideal Candidates for PRP Therapy',
      description: [
        'Men and women experiencing early-stage hair thinning',
        'Patients with androgenetic alopecia (pattern baldness)',
        'Those seeking to improve results after hair transplant',
        'Individuals preferring non-surgical hair restoration',
      ],
    },
    testimonials: [
      {
        name: 'Rajesh K.',
        content:
          'After just 3 sessions at Personiks, my hair thinning has significantly improved. The team is professional and the results speak for themselves!',
        role: 'Patient',
      },
      {
        name: 'Priya M.',
        content:
          'I was skeptical about PRP but Dr. Venula explained everything clearly. Six months later, my hair is thicker than it has been in years. Worth every penny!',
        role: 'Patient',
      },
    ],
    cta: {
      title: 'Ready to Restore Your Hair?',
      description:
        'Schedule your consultation today and take the first step toward thicker, healthier hair.',
      buttonText: 'Book Consultation',
    },
  },
  'transform-your-look-with-advanced-skin-hair-treatments-at-personiks': {
    title: 'Transform Your Look with Advanced Skin & Hair Treatments',
    subtitle: 'Comprehensive Aesthetic Solutions in Hyderabad',
    image:
      'https://personiks.com/wp-content/uploads/2024/09/blog-4-featured-image-1.jpg',
    publishedDate: 'June 1, 2024',
    readTime: '12 min read',
    keywords: [
      'Skin Rejuvenation',
      'Hair Treatments',
      'Aesthetic Procedures',
      'Hyderabad',
    ],
    heroDescription: [
      'At Personiks, we offer a complete range of cosmetic dermatology services to address all your skin and hair concerns.',
      'From advanced laser therapies to customized facial treatments, our expert team helps you achieve radiant, youthful skin and healthy, voluminous hair.',
    ],
    whatIsThis: {
      title: 'Comprehensive Aesthetic Care',
      description: [
        'Our clinic combines medical expertise with artistic vision to deliver natural-looking aesthetic enhancements.',
        'We use only FDA-approved technologies and evidence-based protocols to ensure safe, effective treatments with minimal downtime.',
      ],
    },
    benefits: [
      {
        title: 'Personalized Plans',
        description: 'Customized treatment combinations for your unique needs',
        icon: '📝' as unknown as ReactNode,
      },
      {
        title: 'Advanced Technology',
        description: 'State-of-the-art equipment for superior results',
        icon: '💎' as unknown as ReactNode,
      },
      {
        title: 'Expert Team',
        description: 'Board-certified dermatologists and aesthetic specialists',
        icon: '👨‍⚕️' as unknown as ReactNode,
      },
      {
        title: 'Natural Results',
        description: 'Enhance your features without looking "overdone"',
        icon: '🌺' as unknown as ReactNode,
      },
    ],
    whyChooseUs: {
      description: [
        "Personiks Hospital stands out for its holistic approach to aesthetic medicine. We don't just treat symptoms - we address the underlying causes of skin and hair concerns for lasting results.",
        'Our facility maintains the highest standards of sterilization and patient safety, with all procedures performed by qualified medical professionals.',
      ],
      author: {
        name: 'Dr. Ananya Reddy',
        title: 'Cosmetic Dermatologist',
        avatar: '/images/dr-reddy.jpg',
      },
      quote:
        'Beautiful skin and hair begin with expert care. We combine science and artistry to help you look and feel your best.',
    },
    procedure: {
      steps: [
        {
          title: 'Comprehensive Evaluation',
          description: [
            'Detailed analysis of skin/hair condition and concerns',
            'Discussion of treatment options and expected outcomes',
          ],
        },
        {
          title: 'Customized Treatment Plan',
          description: [
            'Tailored combination of procedures for optimal results',
            'Clear timeline with expected milestones',
          ],
        },
        {
          title: 'Treatment Sessions',
          description: [
            'Performed by experienced specialists',
            'Minimal discomfort with advanced techniques',
          ],
        },
        {
          title: 'Maintenance Program',
          description: [
            'Personalized aftercare regimen',
            'Follow-up appointments to maintain results',
          ],
        },
      ],
    },
    suitableFor: {
      title: 'Services We Offer',
      description: [
        'Hair: PRP therapy, hair transplants, scalp treatments',
        'Face: Botox, fillers, thread lifts, laser resurfacing',
        'Skin: Acne treatment, pigmentation correction, anti-aging',
        'Body: Fat reduction, cellulite treatment, skin tightening',
      ],
    },
    testimonials: [
      {
        name: 'Neha S.',
        content:
          'The facial rejuvenation treatments at Personiks gave me back my confidence. My skin looks 10 years younger!',
        role: 'Patient',
      },
      {
        name: 'Arjun V.',
        content:
          'Finally found a clinic that understands male hair loss. The PRP+laser combination worked wonders for me.',
        role: 'Patient',
      },
    ],
    cta: {
      title: 'Begin Your Transformation',
      description:
        'Contact us today to schedule a consultation with our aesthetic specialists.',
      buttonText: 'Get Started',
    },
  },
  'laser-liposuction-at-personiks-achieve-a-sculpted-body-with-precision': {
    title:
      'Laser Liposuction at Personiks: Achieve a Sculpted Body with Precision',
    subtitle: 'Advanced Fat Removal with Skin Tightening Benefits',
    image:
      'https://personiks.com/wp-content/uploads/2025/03/Liposuction-laser.png',
    publishedDate: 'June 10, 2024',
    readTime: '8 min read',
    keywords: [
      'Laser Liposuction Hyderabad',
      'Fat Removal Surgery',
      'Body Contouring',
      'Minimally Invasive Procedure',
    ],
    heroDescription: [
      'Struggling with stubborn fat that refuses to go away despite regular exercise and healthy diet?',
      'Our advanced laser liposuction procedure removes unwanted fat and contours your body with precision, offering long-lasting results with minimal downtime.',
    ],
    whatIsThis: {
      title: 'What is Laser Liposuction?',
      description: [
        'Laser Liposuction (laser-assisted lipolysis) is a cutting-edge fat removal procedure that uses laser energy to liquefy fat cells before removal.',
        'Unlike traditional liposuction, this technique ensures smoother results, tighter skin, and quicker recovery. The laser stimulates collagen production, leading to natural skin tightening in treated areas.',
      ],
    },
    benefits: [
      {
        title: 'Minimally Invasive',
        description:
          'Small incisions mean less scarring and reduced recovery time',
        icon: '🩹' as unknown as ReactNode,
      },
      {
        title: 'Skin Tightening',
        description: 'Laser stimulates collagen for improved elasticity',
        icon: '✨' as unknown as ReactNode,
      },
      {
        title: 'Precise Contouring',
        description: 'Targets stubborn fat in specific areas with accuracy',
        icon: '🎯' as unknown as ReactNode,
      },
      {
        title: 'Quick Recovery',
        description: 'Most patients resume normal activities within days',
        icon: '⏱️' as unknown as ReactNode,
      },
    ],
    whyChooseUs: {
      description: [
        "Personiks offers Hyderabad's most advanced laser liposuction performed by board-certified cosmetic surgeons. Our proprietary technique combines fat removal with skin tightening for superior aesthetic results.",
        'We use only FDA-approved laser systems and maintain the highest safety standards in our state-of-the-art surgical facility.',
      ],
      author: {
        name: 'Dr. Sanjay Reddy',
        title: 'Cosmetic Surgeon',
        avatar: '/images/dr-reddy.jpg',
      },
      quote:
        'Laser liposuction represents the evolution of body contouring - combining effective fat removal with natural skin tightening for optimal results.',
    },
    procedure: {
      steps: [
        {
          title: 'Consultation',
          description: [
            'Comprehensive evaluation of your areas of concern and skin quality',
            'Discussion of expectations and customized treatment plan',
          ],
        },
        {
          title: 'Preparation',
          description: [
            'Local anesthesia administration for comfort',
            'Marking of treatment areas for precision',
          ],
        },
        {
          title: 'Laser Application',
          description: [
            'Tiny incisions (2-3mm) for laser fiber insertion',
            'Laser energy liquefies fat cells and stimulates collagen',
          ],
        },
        {
          title: 'Fat Removal & Recovery',
          description: [
            'Gentle suction removes liquefied fat',
            'Compression garment applied for optimal healing',
          ],
        },
      ],
    },
    suitableFor: {
      title: 'Ideal Candidates for Laser Liposuction',
      description: [
        'Adults within 20-30% of their ideal weight',
        'Those with good skin elasticity',
        'People with localized fat deposits resistant to diet/exercise',
        'Non-smokers in good general health',
      ],
    },
    testimonials: [
      {
        name: 'Ananya K.',
        content:
          "After having twins, I couldn't lose my belly fat no matter what. Laser lipo at Personiks gave me back my pre-pregnancy shape with barely any scars!",
        role: 'Patient',
      },
      {
        name: 'Rahul M.',
        content:
          'The chin lipo completely transformed my profile. The skin tightening effect was remarkable - no sagging at all. Worth every rupee!',
        role: 'Patient',
      },
    ],
    cta: {
      title: 'Ready for Your Body Transformation?',
      description:
        'Schedule a consultation with our cosmetic surgeons to discuss your body contouring goals.',
      buttonText: 'Book Appointment',
    },
  },
};
