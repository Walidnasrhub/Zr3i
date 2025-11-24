import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import { Leaf, Award, Sprout } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { language, t, dir } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src="/hero-date-palms.jpg"
          alt="Date Palm Plantation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className={`relative container mx-auto px-4 h-full flex flex-col justify-center ${language === 'ar' ? 'items-end' : 'items-start'}`}>
          <div className={`max-w-2xl text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.hero.headline')}
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {t('home.hero.subheading')}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                {t('home.hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {t('home.whyZr3i')}
          </h2>

          <div className={`grid md:grid-cols-3 gap-8`}>
            {/* Feature 1: Carbon Sequestration */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`flex items-center gap-3 mb-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <Leaf className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <CardTitle>{t('home.features.carbonSequestration.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('home.features.carbonSequestration.description')}
                </p>
              </CardContent>
            </Card>

            {/* Feature 2: Verified Credits */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`flex items-center gap-3 mb-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <CardTitle>{t('home.features.verifiedCredits.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('home.features.verifiedCredits.description')}
                </p>
              </CardContent>
            </Card>

            {/* Feature 3: Restoration */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`flex items-center gap-3 mb-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <Sprout className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <CardTitle>{t('home.features.restoration.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t('home.features.restoration.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className={`grid md:grid-cols-4 gap-8 text-center`}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground">
                {t('home.impactStats.planted')}
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2,000+</div>
              <p className="text-muted-foreground">
                {t('home.impactStats.sequestered')}
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500K+</div>
              <p className="text-muted-foreground">
                {t('home.impactStats.credits')}
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5,000+</div>
              <p className="text-muted-foreground">
                {t('home.impactStats.restored')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('home.ctaSection.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('home.ctaSection.subtitle')}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {t('home.ctaSection.button')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
