import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Leaf, Zap, BarChart3, Users } from 'lucide-react';

export default function Home() {
  const { t, isArabic } = useLanguage();

  const services = [
    {
      icon: Leaf,
      titleKey: 'home.service1.title',
      descKey: 'home.service1.desc',
    },
    {
      icon: BarChart3,
      titleKey: 'home.service2.title',
      descKey: 'home.service2.desc',
    },
    {
      icon: Zap,
      titleKey: 'home.service3.title',
      descKey: 'home.service3.desc',
    },
  ];

  const impacts = [
    { label: 'home.impact.projects', value: '25+' },
    { label: 'home.impact.credits', value: '500K+' },
    { label: 'home.impact.area', value: '50K+ ha' },
    { label: 'home.impact.farmers', value: '5K+' },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isArabic ? 'rtl' : 'ltr'}`}>
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 md:py-32 text-white"
        style={{
          backgroundImage: 'url(/hero-carbon-farming.jpg)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <Link href="/landing">
            <a>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                {t('home.hero.cta')}
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t('home.services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600">
                    {t(service.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t('home.impact.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.impact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map((impact, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-green-700 mb-2">
                  {impact.value}
                </div>
                <p className="text-gray-600">
                  {t(impact.label)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isArabic ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            {isArabic
              ? 'انضم إلى مئات المشاريع التي تحول الأراضي إلى أرصدة كربون موثوقة.'
              : 'Join hundreds of projects transforming land into verified carbon credits.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/landing">
              <a>
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                  {isArabic ? 'احسب الإمكانات' : 'Calculate Potential'}
                </Button>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-green-600"
                >
                  {t('nav.contact')}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
