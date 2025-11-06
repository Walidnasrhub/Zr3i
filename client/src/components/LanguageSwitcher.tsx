import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Language } from '@/lib/i18n';

export function LanguageSwitcher() {
  const [language, setLanguageState] = useState<Language>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    localStorage.setItem('language', lang);
    
    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang, dir } }));
  };

  if (!mounted) {
    return (
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="min-w-12" disabled>
          العربية
        </Button>
        <Button variant="outline" size="sm" className="min-w-12" disabled>
          English
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'ar' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ar')}
        className="min-w-12"
      >
        العربية
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="min-w-12"
      >
        English
      </Button>
    </div>
  );
}
