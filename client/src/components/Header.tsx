import React, { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, t, isArabic } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.services', href: '/services' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.technology', href: '/technology' },
    { key: 'nav.impact', href: '/impact' },
    { key: 'nav.contact', href: '/contact' },
  ];

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 ${isArabic ? 'rtl' : 'ltr'}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-xl text-green-700">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white text-sm">
              Z
            </div>
            <span>{isArabic ? 'زرعي' : 'Zr3i'}</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.key} href={item.href}>
              <a className="text-gray-700 hover:text-green-700 transition-colors font-medium">
                {t(item.key)}
              </a>
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t border-gray-200 bg-white ${isArabic ? 'rtl' : 'ltr'}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href}>
                <a
                  className="text-gray-700 hover:text-green-700 transition-colors font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
