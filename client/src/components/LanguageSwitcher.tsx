import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';


export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'ar' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ar')}
        className="min-w-12"
      >
        {t('language.arabic')}
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="min-w-12"
      >
        {t('language.english')}
      </Button>
    </div>
  );
}
