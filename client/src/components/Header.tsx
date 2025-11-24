import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';


export function Header() {
  const { language, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <img src="/logo.png" alt="Zr3i" className="h-8 w-8" />
          <span>Zr3i</span>
        </Link>

        {/* Navigation */}
        <nav className={`hidden md:flex gap-8 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.home')}
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.services')}
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.about')}
          </Link>
          <Link href="/technology" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.technology')}
          </Link>
          <Link href="/impact" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.impact')}
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Language Switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
