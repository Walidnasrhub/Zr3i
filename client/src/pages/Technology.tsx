import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Satellite, BarChart3, Shield, Zap, Map, Database } from 'lucide-react';

export default function Technology() {
  const { t, isArabic } = useLanguage();

  const features = [
    {
      icon: Satellite,
      title: isArabic ? 'مراقبة الأقمار الصناعية' : 'Satellite Monitoring',
      description: isArabic
        ? 'استخدام الأقمار الصناعية عالية الدقة لمراقبة تغييرات الغطاء النباتي والكربون المخزن في التربة.'
        : 'High-resolution satellite imagery to monitor vegetation changes and soil carbon storage.',
    },
    {
      icon: BarChart3,
      title: isArabic ? 'تحليل الذكاء الاصطناعي' : 'AI-Powered Analysis',
      description: isArabic
        ? 'خوارزميات متقدمة للتنبؤ بمخزون الكربون وتقييم أداء المشروع بدقة عالية.'
        : 'Advanced algorithms for predicting carbon stocks and assessing project performance with high accuracy.',
    },
    {
      icon: Shield,
      title: isArabic ? 'التحقق والشفافية' : 'Verification & Transparency',
      description: isArabic
        ? 'عملية تحقق صارمة ومعايير دولية لضمان جودة ونزاهة أرصدة الكربون.'
        : 'Rigorous verification processes and international standards ensuring credit quality and integrity.',
    },
    {
      icon: Zap,
      title: isArabic ? 'التقارير الفورية' : 'Real-time Reporting',
      description: isArabic
        ? 'لوحات تحكم فورية توفر رؤية شاملة على أداء المشروع والتقدم المحرز.'
        : 'Real-time dashboards providing comprehensive visibility into project performance and progress.',
    },
    {
      icon: Map,
      title: isArabic ? 'خرائط جغرافية' : 'Geospatial Mapping',
      description: isArabic
        ? 'خرائط تفاعلية تعرض موقع المشاريع والبيانات المكانية والتأثير الإقليمي.'
        : 'Interactive maps displaying project locations, spatial data, and regional impact.',
    },
    {
      icon: Database,
      title: isArabic ? 'إدارة البيانات' : 'Data Management',
      description: isArabic
        ? 'نظام آمن وموثوق لتخزين وإدارة بيانات المشاريع والأرصدة الكربونية.'
        : 'Secure and reliable system for storing and managing project and carbon credit data.',
    },
  ];

  const workflow = [
    {
      step: 1,
      title: isArabic ? 'التقييم' : 'Assessment',
      description: isArabic
        ? 'تقييم شامل للأراضي والممارسات الحالية وإمكانية عزل الكربون.'
        : 'Comprehensive assessment of land, current practices, and carbon sequestration potential.',
    },
    {
      step: 2,
      title: isArabic ? 'المراقبة' : 'Monitoring',
      description: isArabic
        ? 'مراقبة مستمرة باستخدام الأقمار الصناعية والذكاء الاصطناعي لتتبع التغييرات.'
        : 'Continuous monitoring using satellites and AI to track changes over time.',
    },
    {
      step: 3,
      title: isArabic ? 'التحقق' : 'Verification',
      description: isArabic
        ? 'التحقق من البيانات وفقاً للمعايير الدولية وإصدار الأرصدة الموثوقة.'
        : 'Data verification according to international standards and credit issuance.',
    },
    {
      step: 4,
      title: isArabic ? 'التسويق' : 'Monetization',
      description: isArabic
        ? 'توصيل الأرصدة إلى المشترين والحصول على التمويل للمشاريع.'
        : 'Connecting credits to buyers and securing financing for projects.',
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isArabic ? 'rtl' : 'ltr'}`}>
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {isArabic ? 'تقنيتنا' : 'Our Technology'}
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            {isArabic
              ? 'منصة رقمية متقدمة للمراقبة والتحقق من مشاريع عزل الكربون'
              : 'Advanced digital platform for monitoring and verifying carbon sequestration projects'}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <img
            src="/carbon-sequestration-process.jpg"
            alt="Carbon Sequestration Process"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {isArabic ? 'المميزات الرئيسية' : 'Key Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MRV Workflow */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {isArabic ? 'عملية MRV' : 'MRV Process'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
                {idx < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-700 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {isArabic ? 'مكدس التكنولوجيا' : 'Technology Stack'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {isArabic ? 'البيانات والمراقبة' : 'Data & Monitoring'}
              </h3>
              <ul className="space-y-3">
                {[
                  isArabic ? 'بيانات الأقمار الصناعية عالية الدقة' : 'High-resolution satellite data',
                  isArabic ? 'نماذج الذكاء الاصطناعي المتقدمة' : 'Advanced AI models',
                  isArabic ? 'معالجة البيانات الضخمة' : 'Big data processing',
                  isArabic ? 'التحليلات الجغرافية المكانية' : 'Geospatial analytics',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {isArabic ? 'البنية التحتية والأمان' : 'Infrastructure & Security'}
              </h3>
              <ul className="space-y-3">
                {[
                  isArabic ? 'الحوسبة السحابية الآمنة' : 'Secure cloud infrastructure',
                  isArabic ? 'تشفير البيانات من الطرف إلى الطرف' : 'End-to-end encryption',
                  isArabic ? 'النسخ الاحتياطي والاسترجاع' : 'Backup & recovery',
                  isArabic ? 'الامتثال للمعايير الدولية' : 'International compliance',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-700 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'جاهز لاستخدام التكنولوجيا؟' : 'Ready to Use Our Technology?'}
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            {isArabic
              ? 'اكتشف كيف يمكن لمنصتنا أن تساعدك على تطوير مشاريع عزل الكربون بكفاءة.'
              : 'Discover how our platform can help you develop carbon sequestration projects efficiently.'}
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
