import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, isArabic } = useLanguage();

  return (
    <footer className={`bg-gray-900 text-white mt-20 ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                Z
              </div>
              <h3 className="font-bold text-lg">{isArabic ? 'زرعي' : 'Zr3i'}</h3>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.links')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-400 hover:text-green-400 transition-colors">
                    {t('nav.home')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-400 hover:text-green-400 transition-colors">
                    {t('nav.services')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-green-400 transition-colors">
                    {t('nav.about')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-green-400 transition-colors">
                    {t('nav.contact')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-green-400" />
                <a href="mailto:info@zr3i.com" className="text-gray-400 hover:text-green-400 transition-colors">
                  info@zr3i.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-green-400" />
                <a href="tel:00201006055320" className="text-gray-400 hover:text-green-400 transition-colors">
                  00201006055320
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-green-400" />
                <span className="text-gray-400">
                  {isArabic ? 'منطقة الشرق الأوسط وشمال إفريقيا' : 'MEA Region'}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">{isArabic ? 'ابقَ على اطلاع' : 'Stay Updated'}</h4>
            <p className="text-gray-400 text-sm mb-4">
              {isArabic ? 'اشترك للحصول على آخر الأخبار' : 'Subscribe for latest updates'}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={isArabic ? 'بريدك الإلكتروني' : 'Your email'}
                className="flex-1 px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition-colors text-sm font-medium"
              >
                {isArabic ? 'اشترك' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
              {isArabic ? 'شروط الخدمة' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
