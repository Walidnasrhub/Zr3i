import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle, Leaf, BarChart3, Zap } from 'lucide-react';

export default function Services() {
  const { t, isArabic } = useLanguage();

  const developerServices = [
    {
      icon: Leaf,
      title: isArabic ? 'استشارات الإدارة المستدامة للأراضي' : 'Sustainable Land Management Consulting',
      description: isArabic
        ? 'إرشادات شاملة حول أفضل الممارسات لزراعة الكربون وصحة التربة وكفاءة المياه.'
        : 'Comprehensive guidance on best practices for carbon farming, soil health, and water efficiency.',
      features: [
        isArabic ? 'تقييم الأراضي' : 'Land Assessment',
        isArabic ? 'خطط إدارة مخصصة' : 'Custom Management Plans',
        isArabic ? 'دعم التنفيذ' : 'Implementation Support',
      ],
    },
    {
      icon: BarChart3,
      title: isArabic ? 'المراقبة الرقمية والتحقق (MRV)' : 'Digital Monitoring & Verification (MRV)',
      description: isArabic
        ? 'استخدام الأقمار الصناعية والذكاء الاصطناعي لتتبع تغييرات مخزون الكربون وأداء المشروع.'
        : 'Using satellite imagery and AI to track carbon stock changes and project performance.',
      features: [
        isArabic ? 'مراقبة الأقمار الصناعية' : 'Satellite Monitoring',
        isArabic ? 'تحليل الذكاء الاصطناعي' : 'AI Analysis',
        isArabic ? 'تقارير شفافة' : 'Transparent Reporting',
      ],
    },
    {
      icon: Zap,
      title: isArabic ? 'إصدار أرصدة الكربون' : 'Carbon Credit Issuance',
      description: isArabic
        ? 'التنقل في المعايير الدولية لإصدار أرصدة موثوقة وعالية الجودة.'
        : 'Navigating international standards to issue verified, high-integrity credits.',
      features: [
        isArabic ? 'معايير التحقق' : 'Verification Standards',
        isArabic ? 'إدارة المحفظة' : 'Portfolio Management',
        isArabic ? 'الوصول إلى السوق' : 'Market Access',
      ],
    },
  ];

  const buyerServices = [
    {
      icon: Leaf,
      title: isArabic ? 'أرصدة كربون عالية الجودة' : 'High-Integrity Carbon Credits',
      description: isArabic
        ? 'الوصول إلى محفظة من أرصدة الكربون الموثوقة والمعتمدة من منطقة الشرق الأوسط وشمال إفريقيا.'
        : 'Access to a portfolio of verified, certified carbon credits from the MEA region.',
      features: [
        isArabic ? 'معايير عالية' : 'High Standards',
        isArabic ? 'تنوع المشاريع' : 'Project Diversity',
        isArabic ? 'أثر اجتماعي' : 'Social Impact',
      ],
    },
    {
      icon: BarChart3,
      title: isArabic ? 'استراتيجيات تعويض مخصصة' : 'Custom Offsetting Strategies',
      description: isArabic
        ? 'حلول مصممة خصيصاً لتلبية أهداف الحياد الكربوني للشركات مع تحقيق أثر إقليمي.'
        : 'Tailored solutions to meet corporate net-zero targets with regional impact.',
      features: [
        isArabic ? 'استشارات استراتيجية' : 'Strategic Consulting',
        isArabic ? 'إدارة المحفظة' : 'Portfolio Management',
        isArabic ? 'تقارير التأثير' : 'Impact Reporting',
      ],
    },
    {
      icon: Zap,
      title: isArabic ? 'الشفافية والتتبع' : 'Transparency & Traceability',
      description: isArabic
        ? 'رؤية كاملة على تأثير المشروع والموقع والفوائد المشتركة من خلال منصة زرعي.'
        : 'Full visibility into project impact, location, and co-benefits through the Zr3i platform.',
      features: [
        isArabic ? 'تتبع في الوقت الفعلي' : 'Real-time Tracking',
        isArabic ? 'خرائط الأقمار الصناعية' : 'Satellite Maps',
        isArabic ? 'شهادات التحقق' : 'Verification Certificates',
      ],
    },
  ];

  const ServiceCard = ({ icon: Icon, title, description, features }: any) => (
    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-green-700" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={`min-h-screen flex flex-col ${isArabic ? 'rtl' : 'ltr'}`}>
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('services.title')}
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* For Project Developers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {t('services.for_developers')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {developerServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* For Carbon Buyers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {t('services.for_buyers')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyerServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'هل تريد معرفة المزيد؟' : 'Want to Learn More?'}
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            {isArabic
              ? 'تواصل معنا اليوم للحصول على استشارة مجانية حول كيفية الاستفادة من خدماتنا.'
              : 'Contact us today for a free consultation on how our services can benefit you.'}
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            {isArabic ? 'تواصل معنا' : 'Get in Touch'}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
