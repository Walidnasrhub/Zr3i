import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isArabic: boolean;
  isEnglish: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.technology': 'Technology',
    'nav.impact': 'Impact',
    'nav.contact': 'Contact',

    // Home Page
    'home.hero.title': 'Pioneer Carbon Sequestration Developer in the MEA Region',
    'home.hero.subtitle': 'Transforming agricultural and land-use practices into measurable climate action and economic value.',
    'home.hero.cta': 'Discover Your Carbon Potential',
    
    'home.services.title': 'Our Services',
    'home.services.subtitle': 'Comprehensive solutions for carbon sequestration projects',
    'home.service1.title': 'For Project Developers',
    'home.service1.desc': 'Sustainable Land Management consulting, digital MRV, and carbon credit issuance.',
    'home.service2.title': 'For Carbon Buyers',
    'home.service2.desc': 'High-integrity carbon credits with full transparency and traceability.',
    'home.service3.title': 'Digital Platform',
    'home.service3.desc': 'Satellite imagery and AI-powered monitoring for precise carbon tracking.',

    'home.impact.title': 'Our Impact in the MEA Region',
    'home.impact.subtitle': 'Creating measurable climate and economic benefits',
    'home.impact.projects': 'Active Projects',
    'home.impact.credits': 'Carbon Credits Issued',
    'home.impact.area': 'Land Area Managed',
    'home.impact.farmers': 'Farmers Supported',

    // Landing Page
    'landing.title': 'Calculate Your Carbon Potential',
    'landing.subtitle': 'Discover how your land can generate verified carbon credits',
    'landing.form.name': 'Full Name',
    'landing.form.email': 'Email Address',
    'landing.form.phone': 'Phone Number',
    'landing.form.company': 'Company/Organization',
    'landing.form.area': 'Land Area (hectares)',
    'landing.form.location': 'Location',
    'landing.form.message': 'Tell us about your project',
    'landing.form.submit': 'Calculate Potential',

    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'End-to-end carbon sequestration solutions',
    'services.for_developers': 'For Project Developers',
    'services.for_buyers': 'For Carbon Buyers',

    // About Page
    'about.title': 'About Zr3i',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To pioneer carbon sequestration projects in the MEA region, transforming sustainable land management into verified, high-quality carbon credits.',
    'about.vision': 'Our Vision',
    'about.vision.text': 'A thriving MEA region where farmers and landowners benefit from carbon finance while building climate resilience.',

    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'d love to hear from you',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company',
    'contact.form.type': 'Inquiry Type',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',

    // Footer
    'footer.company': 'Zr3i',
    'footer.description': 'Pioneer carbon sequestration projects developer in the MEA region',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.copyright': '© 2025 Zr3i. All rights reserved.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.technology': 'التقنية',
    'nav.impact': 'الأثر',
    'nav.contact': 'اتصل بنا',

    // Home Page
    'home.hero.title': 'الشركة الرائدة في تطوير مشاريع عزل الكربون في منطقة الشرق الأوسط وشمال إفريقيا',
    'home.hero.subtitle': 'تحويل الممارسات الزراعية واستخدام الأراضي إلى عمل مناخي قابل للقياس وقيمة اقتصادية.',
    'home.hero.cta': 'اكتشف إمكاناتك الكربونية',
    
    'home.services.title': 'خدماتنا',
    'home.services.subtitle': 'حلول شاملة لمشاريع عزل الكربون',
    'home.service1.title': 'لمطوري المشاريع',
    'home.service1.desc': 'استشارات الإدارة المستدامة للأراضي والمراقبة الرقمية وإصدار أرصدة الكربون.',
    'home.service2.title': 'لمشتري الكربون',
    'home.service2.desc': 'أرصدة كربون عالية الجودة مع الشفافية الكاملة والتتبع.',
    'home.service3.title': 'المنصة الرقمية',
    'home.service3.desc': 'مراقبة مدعومة بالأقمار الصناعية والذكاء الاصطناعي لتتبع الكربون الدقيق.',

    'home.impact.title': 'أثرنا في منطقة الشرق الأوسط وشمال إفريقيا',
    'home.impact.subtitle': 'خلق فوائد مناخية واقتصادية قابلة للقياس',
    'home.impact.projects': 'المشاريع النشطة',
    'home.impact.credits': 'أرصدة الكربون الصادرة',
    'home.impact.area': 'منطقة الأراضي المُدارة',
    'home.impact.farmers': 'المزارعون المدعومون',

    // Landing Page
    'landing.title': 'احسب إمكاناتك الكربونية',
    'landing.subtitle': 'اكتشف كيف يمكن لأرضك أن تولد أرصدة كربون موثوقة',
    'landing.form.name': 'الاسم الكامل',
    'landing.form.email': 'عنوان البريد الإلكتروني',
    'landing.form.phone': 'رقم الهاتف',
    'landing.form.company': 'الشركة/المنظمة',
    'landing.form.area': 'مساحة الأرض (هكتار)',
    'landing.form.location': 'الموقع',
    'landing.form.message': 'أخبرنا عن مشروعك',
    'landing.form.submit': 'احسب الإمكانات',

    // Services Page
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول شاملة لعزل الكربون',
    'services.for_developers': 'لمطوري المشاريع',
    'services.for_buyers': 'لمشتري الكربون',

    // About Page
    'about.title': 'حول زرعي',
    'about.mission': 'رسالتنا',
    'about.mission.text': 'الريادة في مشاريع عزل الكربون في منطقة الشرق الأوسط وشمال إفريقيا، وتحويل الإدارة المستدامة للأراضي إلى أرصدة كربون موثوقة وعالية الجودة.',
    'about.vision': 'رؤيتنا',
    'about.vision.text': 'منطقة شرق أوسط وشمال أفريقيا مزدهرة حيث يستفيد المزارعون وملاك الأراضي من تمويل الكربون مع بناء القدرة على الصمود المناخي.',

    // Contact Page
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نود أن نسمع منك',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.company': 'الشركة',
    'contact.form.type': 'نوع الاستفسار',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.address': 'العنوان',

    // Footer
    'footer.company': 'زرعي',
    'footer.description': 'شركة رائدة في تطوير مشاريع عزل الكربون في منطقة الشرق الأوسط وشمال إفريقيا',
    'footer.links': 'روابط سريعة',
    'footer.contact': 'معلومات الاتصال',
    'footer.copyright': '© 2025 زرعي. جميع الحقوق محفوظة.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('language');
    if (saved === 'ar' || saved === 'en') return saved;
    // Check browser language
    const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    return browserLang;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    isArabic: language === 'ar',
    isEnglish: language === 'en',
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
