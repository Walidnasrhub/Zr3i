// Bilingual content and utilities for Arabic/English support

export type Language = 'ar' | 'en';

export const translations = {
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'عن الشركة',
      technology: 'التكنولوجيا',
      impact: 'التأثير',
      contact: 'اتصل بنا',
    },
    language: {
      arabic: 'العربية',
      english: 'الإنجليزية',
    },
    home: {
      title: 'Zr3i - عزل الكربون من أجل مستقبل مستدام',
      hero: {
        headline: 'حول الصحاري إلى مصارف الكربون',
        subheading: 'استفد من قوة أشجار النخيل لمكافحة تغير المناخ وإنتاج أرصدة كربونية معتمدة',
        cta: 'ابدأ الآن'
      },
      features: {
        carbonSequestration: {
          title: 'عزل الكربون',
          description: 'كل شجرة نخيل ناضجة تعزل 200 كجم من ثاني أكسيد الكربون سنويًا'
        },
        verifiedCredits: {
          title: 'أرصدة الكربون المعتمدة',
          description: 'مشاريعنا معتمدة بموجب معايير دولية (VCS، Gold Standard)'
        },
        restoration: {
          title: 'استعادة البيئة',
          description: 'مكافحة التصحر واستعادة التنوع البيولوجي في المناطق القاحلة'
        }
      },
      whyZr3i: 'لماذا Zr3i؟',
      impactStats: {
        planted: 'أشجار نخيل مزروعة',
        sequestered: 'طن CO2 معزول سنويًا',
        credits: 'أرصدة كربونية معتمدة',
        restored: 'هكتار أرض مستعادة'
      },
      ctaSection: {
        title: 'انضم إلى ثورة الكربون',
        subtitle: 'استثمر في أرصدة كربونية تحدث فرقًا حقيقيًا في مكافحة تغير المناخ',
        button: 'استكشف مشاريعنا'
      }
    },
    // Services Page
    services: {
      title: 'خدماتنا',
      carbonSequestration: {
        title: 'مشاريع عزل الكربون',
        description: 'نحن نطور وندير مزارع نخيل كبيرة الحجم مصممة خصيصًا لأقصى عزل للكربون',
      },
      carbonCredits: {
        title: 'توليد أرصدة الكربون والتحقق منها',
        description: 'تولد مشاريعنا أرصدة كربونية معتمدة بموجب معايير دولية',
      },
      trading: {
        title: 'تداول أرصدة الكربون والاستثمار',
        description: 'احصل على أرصدة كربونية عالية الجودة من مشاريعنا المعتمدة',
      },
      restoration: {
        title: 'استعادة البيئة',
        description: 'استعادة الأراضي المتدهورة ومنع التصحر',
      },
    },
    // About Page
    about: {
      title: 'حول Zr3i',
      mission: 'مهمتنا هي مكافحة تغير المناخ من خلال مشاريع عزل الكربون المبتكرة',
      vision: 'عالم يتم فيه تحويل الصحاري إلى نظم بيئية مزدهرة',
      description: 'Zr3i هي منصة رقمية رائدة متخصصة في الزراعة الذكية وعزل الكربون. نحن نجمع بين التكنولوجيا المتقدمة والعلم البيئي لتحويل الممارسات الزراعية التقليدية إلى حلول مستدامة.',
      impact: 'لقد ساعدنا المزارعين على زيادة إنتاجيتهم بنسبة 10% مع تحقيق زيادة في الربحية بنسبة 20-30%.',
    },
    // Contact Page
    contact: {
      title: 'اتصل بنا',
      email: 'info@zr3i.com',
      phone: '00201006055320',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        company: 'الشركة',
        inquiryType: 'نوع الاستفسار',
        message: 'الرسالة',
        submit: 'إرسال',
        success: 'تم إرسال رسالتك بنجاح',
        error: 'حدث خطأ، يرجى المحاولة مرة أخرى',
      },
    },
    // Technology Page
    technology: {
      title: 'تكنولوجيا Zr3i',
      description: 'منصة متقدمة تجمع بين الذكاء الاصطناعي والتعلم الآلي وأنظمة المعلومات الجغرافية',
      features: {
        ai: 'الذكاء الاصطناعي والتعلم الآلي',
        gis: 'أنظمة المعلومات الجغرافية',
        satellite: 'تحليل الصور الفضائية',
        monitoring: 'المراقبة في الوقت الفعلي',
      },
    },
    // Impact Page
    impact: {
      title: 'تأثيرنا',
      description: 'نحن نعمل على تحقيق تأثير بيئي واقتصادي إيجابي',
      stats: {
        farmers: 'آلاف المزارعين المستفيدين',
        yield: 'زيادة في الإنتاجية',
        profitability: 'زيادة في الربحية',
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      technology: 'Technology',
      impact: 'Impact',
      contact: 'Contact',
    },
    language: {
      arabic: 'Arabic',
      english: 'English',
    },
    home: {
      title: 'Zr3i - Carbon Sequestration for a Sustainable Future',
      hero: {
        headline: 'Transform Deserts into Carbon Sinks',
        subheading: 'Harness the power of date palm trees to combat climate change and generate verified carbon credits',
        cta: 'Get Started'
      },
      features: {
        carbonSequestration: {
          title: 'Carbon Sequestration',
          description: 'Each mature date palm tree sequesters 200 kg of CO2 annually'
        },
        verifiedCredits: {
          title: 'Verified Carbon Credits',
          description: 'Our projects are certified under international standards (VCS, Gold Standard)'
        },
        restoration: {
          title: 'Environmental Restoration',
          description: 'Combat desertification and restore biodiversity in arid regions'
        }
      },
      whyZr3i: 'Why Zr3i?',
      impactStats: {
        planted: 'Date Palms Planted',
        sequestered: 'Tonnes CO2 Sequestered',
        credits: 'Carbon Credits',
        restored: 'Hectares Restored'
      },
      ctaSection: {
        title: 'Join the Carbon Revolution',
        subtitle: 'Invest in carbon credits that make a real difference in fighting climate change',
        button: 'Explore Our Projects'
      }
    },
    // Services Page
    services: {
      title: 'Our Services',
      carbonSequestration: {
        title: 'Carbon Sequestration Projects',
        description: 'We develop and manage large-scale date palm plantations for maximum carbon sequestration',
      },
      carbonCredits: {
        title: 'Carbon Credit Generation & Verification',
        description: 'Our projects generate verified carbon credits certified under international standards',
      },
      trading: {
        title: 'Carbon Credit Trading & Investment',
        description: 'Access high-quality carbon credits from our verified projects',
      },
      restoration: {
        title: 'Environmental Restoration',
        description: 'Restore degraded lands and prevent desertification',
      },
    },
    // About Page
    about: {
      title: 'About Zr3i',
      mission: 'Our mission is to combat climate change through innovative carbon sequestration projects',
      vision: 'A world where deserts are transformed into thriving ecosystems',
      description: 'Zr3i is a leading digital agriculture platform specializing in smart farming and carbon sequestration. We combine advanced technology with environmental science to transform traditional farming practices into sustainable solutions.',
      impact: 'We have helped farmers increase their productivity by 10% while achieving profitability increases of 20-30%.',
    },
    // Contact Page
    contact: {
      title: 'Contact Us',
      email: 'info@zr3i.com',
      phone: '00201006055320',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        inquiryType: 'Inquiry Type',
        message: 'Message',
        submit: 'Submit',
        success: 'Your message has been sent successfully',
        error: 'An error occurred, please try again',
      },
    },
    // Technology Page
    technology: {
      title: 'Zr3i Technology',
      description: 'An advanced platform combining artificial intelligence, machine learning, and geographic information systems',
      features: {
        ai: 'Artificial Intelligence & Machine Learning',
        gis: 'Geographic Information Systems',
        satellite: 'Satellite Imagery Analysis',
        monitoring: 'Real-time Monitoring',
      },
    },
    // Impact Page
    impact: {
      title: 'Our Impact',
      description: 'We are committed to achieving positive environmental and economic impact',
      stats: {
        farmers: 'Thousands of Farmers Benefited',
        yield: 'Increase in Productivity',
        profitability: 'Increase in Profitability',
      },
    }
  },
};

export function getTranslation(lang: Language, path: string, defaultValue: string = ''): string {
  const keys = path.split('.');
  let value: any = translations[lang];
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return defaultValue;
    }
  }
  
  return typeof value === 'string' ? value : defaultValue;
}

export function isRTL(lang: Language): boolean {
  return lang === 'ar';
}

export function getDir(lang: Language): 'rtl' | 'ltr' {
  return isRTL(lang) ? 'rtl' : 'ltr';
}
