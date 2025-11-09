import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrendingUp, Users, Leaf, Award } from 'lucide-react';

export function Impact() {
  const { t, isArabic } = useLanguage();

  const caseStudies = [
    {
      title: isArabic ? 'مشروع الدلتا - مصر' : 'Delta Project - Egypt',
      location: isArabic ? 'دلتا النيل، مصر' : 'Nile Delta, Egypt',
      description: isArabic
        ? 'مشروع رائد لعزل الكربون في دلتا النيل يشمل 5000 هكتار من الأراضي الزراعية.'
        : 'Pioneering carbon sequestration project in the Nile Delta covering 5,000 hectares of agricultural land.',
      metrics: [
        { label: isArabic ? 'الأرصدة الصادرة' : 'Credits Issued', value: '250K+' },
        { label: isArabic ? 'المزارعون المدعومون' : 'Farmers Supported', value: '2,500' },
        { label: isArabic ? 'الكربون المعزول' : 'Carbon Sequestered', value: '50K tons' },
      ],
      image: '/hero-carbon-farming.jpg',
    },
    {
      title: isArabic ? 'مشروع الجزيرة - السعودية' : 'Al-Jazirah Project - Saudi Arabia',
      location: isArabic ? 'منطقة الجزيرة، السعودية' : 'Al-Jazirah Region, Saudi Arabia',
      description: isArabic
        ? 'مشروع متقدم للزراعة المستدامة في المناطق القاحلة مع تحسين جودة التربة.'
        : 'Advanced sustainable agriculture project in arid regions with improved soil quality.',
      metrics: [
        { label: isArabic ? 'الأرصدة الصادرة' : 'Credits Issued', value: '180K+' },
        { label: isArabic ? 'المزارعون المدعومون' : 'Farmers Supported', value: '1,800' },
        { label: isArabic ? 'الكربون المعزول' : 'Carbon Sequestered', value: '35K tons' },
      ],
      image: '/mea-landscape.jpg',
    },
    {
      title: isArabic ? 'مشروع الواحة - المغرب' : 'Oasis Project - Morocco',
      location: isArabic ? 'منطقة الواحات، المغرب' : 'Oasis Region, Morocco',
      description: isArabic
        ? 'مشروع تجديد الواحات مع التركيز على الحفاظ على التنوع البيولوجي والمياه.'
        : 'Oasis restoration project focusing on biodiversity conservation and water management.',
      metrics: [
        { label: isArabic ? 'الأرصدة الصادرة' : 'Credits Issued', value: '150K+' },
        { label: isArabic ? 'المزارعون المدعومون' : 'Farmers Supported', value: '1,200' },
        { label: isArabic ? 'الكربون المعزول' : 'Carbon Sequestered', value: '28K tons' },
      ],
      image: '/carbon-sequestration-process.jpg',
    },
  ];

  const impacts = [
    {
      icon: TrendingUp,
      title: isArabic ? 'النمو الاقتصادي' : 'Economic Growth',
      value: '$50M+',
      description: isArabic
        ? 'إجمالي الدخل المولد للمزارعين والمجتمعات المحلية من خلال تمويل الكربون.'
        : 'Total income generated for farmers and local communities through carbon finance.',
    },
    {
      icon: Users,
      title: isArabic ? 'المزارعون المدعومون' : 'Farmers Empowered',
      value: '5K+',
      description: isArabic
        ? 'عدد المزارعين الذين استفادوا من برامجنا والذين حسنوا دخلهم وسبل عيشهم.'
        : 'Number of farmers benefiting from our programs and improving their livelihoods.',
    },
    {
      icon: Leaf,
      title: isArabic ? 'الأراضي المُدارة' : 'Land Managed',
      value: '50K+ ha',
      description: isArabic
        ? 'إجمالي مساحة الأراضي المُدارة بممارسات مستدامة وصديقة للبيئة.'
        : 'Total land area managed with sustainable and environmentally friendly practices.',
    },
    {
      icon: Award,
      title: isArabic ? 'الكربون المعزول' : 'Carbon Sequestered',
      value: '500K+ tons',
      description: isArabic
        ? 'إجمالي كمية الكربون المعزول والمخزن في التربة والنباتات.'
        : 'Total amount of carbon sequestered and stored in soil and vegetation.',
    },
  ];

  const cobenefits = [
    {
      title: isArabic ? 'تحسين جودة التربة' : 'Soil Quality Improvement',
      description: isArabic
        ? 'زيادة محتوى المادة العضوية والعناصر الغذائية في التربة.'
        : 'Increased organic matter and nutrient content in soil.',
    },
    {
      title: isArabic ? 'الأمن الغذائي' : 'Food Security',
      description: isArabic
        ? 'زيادة الإنتاجية الزراعية وتحسين الأمن الغذائي للمجتمعات المحلية.'
        : 'Increased agricultural productivity and improved food security.',
    },
    {
      title: isArabic ? 'الحفاظ على المياه' : 'Water Conservation',
      description: isArabic
        ? 'تحسين القدرة على الاحتفاظ بالمياه وتقليل استهلاك المياه.'
        : 'Improved water retention and reduced water consumption.',
    },
    {
      title: isArabic ? 'التنوع البيولوجي' : 'Biodiversity',
      description: isArabic
        ? 'زيادة التنوع البيولوجي والموارد الطبيعية في المناطق المشمولة.'
        : 'Increased biodiversity and natural resources in project areas.',
    },
    {
      title: isArabic ? 'فرص العمل' : 'Employment',
      description: isArabic
        ? 'خلق فرص عمل محلية في الزراعة والإدارة والمراقبة.'
        : 'Local employment opportunities in agriculture, management, and monitoring.',
    },
    {
      title: isArabic ? 'التمكين المجتمعي' : 'Community Empowerment',
      description: isArabic
        ? 'تمكين المجتمعات المحلية من خلال التدريب والتعليم والمشاركة.'
        : 'Community empowerment through training, education, and participation.',
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isArabic ? 'rtl' : 'ltr'}`}>
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('nav.impact')}
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            {isArabic
              ? 'اكتشف الأثر الإيجابي لمشاريعنا على المجتمعات والبيئة'
              : 'Discover the positive impact of our projects on communities and the environment'}
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, idx) => {
              const Icon = impact.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-green-700 mb-2">
                    {impact.value}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {impact.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {impact.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {isArabic ? 'دراسات الحالة' : 'Case Studies'}
          </h2>
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-auto">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {study.title}
                    </h3>
                    <p className="text-green-700 font-semibold mb-4">
                      📍 {study.location}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {study.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, midx) => (
                        <div key={midx} className="bg-green-50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-green-700">
                            {metric.value}
                          </div>
                          <p className="text-sm text-gray-600">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {isArabic ? 'الفوائد المشتركة' : 'Co-Benefits'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cobenefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'كن جزءاً من الحل' : 'Be Part of the Solution'}
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            {isArabic
              ? 'انضم إلينا في مهمتنا لتحويل الأراضي إلى أرصدة كربون موثوقة وخلق تأثير إيجابي.'
              : 'Join us in our mission to transform land into verified carbon credits and create positive impact.'}
          </p>
          <a href="/landing" className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            {isArabic ? 'ابدأ الآن' : 'Get Started'}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
