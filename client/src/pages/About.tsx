import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Users, Target, Globe, Award } from 'lucide-react';

export default function About() {
  const { t, isArabic } = useLanguage();

  const values = [
    {
      icon: Target,
      title: isArabic ? 'التركيز' : 'Focus',
      description: isArabic
        ? 'التركيز على منطقة الشرق الأوسط وشمال إفريقيا وفهم احتياجاتها الفريدة.'
        : 'Focused on the MEA region and understanding its unique needs.',
    },
    {
      icon: Globe,
      title: isArabic ? 'الاستدامة' : 'Sustainability',
      description: isArabic
        ? 'الالتزام بالممارسات المستدامة والتأثير الإيجابي على البيئة.'
        : 'Committed to sustainable practices and positive environmental impact.',
    },
    {
      icon: Award,
      title: isArabic ? 'الجودة' : 'Quality',
      description: isArabic
        ? 'توفير أرصدة كربون عالية الجودة وموثوقة وموثقة بشكل جيد.'
        : 'Delivering high-quality, verified, and well-documented carbon credits.',
    },
    {
      icon: Users,
      title: isArabic ? 'التمكين' : 'Empowerment',
      description: isArabic
        ? 'تمكين المزارعين والمجتمعات المحلية من خلال تمويل الكربون.'
        : 'Empowering farmers and local communities through carbon finance.',
    },
  ];

  const teamMembers = [
    {
      name: isArabic ? 'وليد ناصر' : 'Walid Nasr',
      role: isArabic ? 'الرئيس التنفيذي والمؤسس' : 'CEO & Founder',
      bio: isArabic
        ? 'خبير في الزراعة الرقمية والتمويل المناخي مع أكثر من 15 سنة من الخبرة في المنطقة.'
        : 'Expert in digital agriculture and climate finance with 15+ years of regional experience.',
    },
    {
      name: isArabic ? 'فريق التطوير' : 'Development Team',
      role: isArabic ? 'مهندسون وعلماء بيانات' : 'Engineers & Data Scientists',
      bio: isArabic
        ? 'فريق متخصص في تطوير منصات الزراعة الرقمية والذكاء الاصطناعي.'
        : 'Specialized team developing digital agriculture platforms and AI solutions.',
    },
    {
      name: isArabic ? 'فريق المشاريع' : 'Project Team',
      role: isArabic ? 'مديرو مشاريع وخبراء MRV' : 'Project Managers & MRV Experts',
      bio: isArabic
        ? 'متخصصون في تطوير وإدارة مشاريع عزل الكربون والتحقق من الأثر.'
        : 'Specialists in developing and managing carbon sequestration projects and impact verification.',
    },
  ];

  const partnerships = [
    { name: 'FAO', description: isArabic ? 'منظمة الأغذية والزراعة' : 'Food and Agriculture Organization' },
    { name: 'Rabobank', description: isArabic ? 'البنك الزراعي العالمي' : 'Global Agricultural Bank' },
    { name: 'GACSA', description: isArabic ? 'التحالف العالمي للزراعة الذكية' : 'Global Alliance for Climate-Smart Agriculture' },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isArabic ? 'rtl' : 'ltr'}`}>
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('about.title')}
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            {isArabic
              ? 'نحن رائدون في تطوير مشاريع عزل الكربون في منطقة الشرق الأوسط وشمال إفريقيا'
              : 'We are pioneers in developing carbon sequestration projects in the MEA region'}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {t('about.mission')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {t('about.vision')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.vision.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {isArabic ? 'قيمنا الأساسية' : 'Our Core Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {isArabic ? 'فريقنا' : 'Our Team'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-green-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-green-700 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            {isArabic ? 'شراكاتنا' : 'Our Partnerships'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partner, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-green-700">
                  {partner.name}
                </h3>
                <p className="text-gray-600">
                  {partner.description}
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
            {isArabic ? 'هل تريد الانضمام إلينا؟' : 'Want to Join Us?'}
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            {isArabic
              ? 'تواصل معنا اليوم لاستكشاف فرص الشراكة والتعاون.'
              : 'Contact us today to explore partnership and collaboration opportunities.'}
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
