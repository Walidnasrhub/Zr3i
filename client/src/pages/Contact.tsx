import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { trpc } from '@/lib/trpc';
import { Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';

export function Contact() {
  const { t, isArabic } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'general',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      company: formData.company || undefined,
      inquiryType: formData.inquiryType,
      message: formData.message,
    });
  };

  return (
    <div className={`min-h-screen flex flex-col ${isArabic ? 'rtl' : 'ltr'}`}>
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-6 h-6 text-green-700" />
                    <h3 className="font-semibold text-gray-900">{t('contact.email')}</h3>
                  </div>
                  <a href="mailto:info@zr3i.com" className="text-green-700 hover:text-green-600 font-medium">
                    info@zr3i.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-6 h-6 text-green-700" />
                    <h3 className="font-semibold text-gray-900">{t('contact.phone')}</h3>
                  </div>
                  <a href="tel:+201006055320" className="text-green-700 hover:text-green-600 font-medium">
                    +2 01006055320
                  </a>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-green-700" />
                    <h3 className="font-semibold text-gray-900">{t('contact.address')}</h3>
                  </div>
                  <p className="text-gray-600">
                    {isArabic ? 'منطقة الشرق الأوسط وشمال إفريقيا' : 'MEA Region'}
                  </p>
                </div>

                {/* Office Hours */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {isArabic ? 'ساعات العمل' : 'Office Hours'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {isArabic ? 'السبت - الخميس' : 'Saturday - Thursday'}<br />
                    {isArabic ? '9:00 صباحاً - 6:00 مساءً' : '9:00 AM - 6:00 PM'}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-green-900">
                        {isArabic ? 'تم الإرسال بنجاح!' : 'Message Sent Successfully!'}
                      </h3>
                      <p className="text-green-800 text-sm">
                        {isArabic
                          ? 'شكراً لتواصلك معنا. سنرد على رسالتك في أقرب وقت ممكن.'
                          : 'Thank you for contacting us. We will respond to your message as soon as possible.'}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      placeholder={isArabic ? 'أدخل اسمك' : 'Enter your name'}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      placeholder={isArabic ? 'اسم الشركة' : 'Company name'}
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.type')} *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    >
                      <option value="general">{isArabic ? 'استفسار عام' : 'General Inquiry'}</option>
                      <option value="project_developer">{isArabic ? 'مطور مشروع' : 'Project Developer'}</option>
                      <option value="carbon_buyer">{isArabic ? 'مشتري كربون' : 'Carbon Buyer'}</option>
                      <option value="partnership">{isArabic ? 'شراكة' : 'Partnership'}</option>
                      <option value="other">{isArabic ? 'أخرى' : 'Other'}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                      placeholder={isArabic ? 'اكتب رسالتك هنا' : 'Write your message here'}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {isArabic ? 'جاري الإرسال...' : 'Sending...'}
                      </>
                    ) : (
                      t('contact.form.submit')
                    )}
                  </Button>

                  {submitMutation.isError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-sm">
                        {isArabic ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
