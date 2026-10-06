import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Tooltip } from '../ui/Tooltip';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    
    // Simulate high reliability API submission
    setTimeout(() => {
      setStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contato" className="scroll-mt-24 py-24 bg-brand-darkBg relative overflow-hidden">
      {/* Anchor for backward compatibility */}
      <span id="contact" className="sr-only"></span>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cyan text-xs font-bold uppercase tracking-widest shadow-glow-cyan/15">
            {t('contact.tag')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Institutional Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-card/85 backdrop-blur-md rounded-2xl p-8 border border-brand-border space-y-6 shadow-xl">
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {t('contact.info.company')}
                </h3>
                <p className="text-sm text-brand-cyan font-semibold">
                  {t('contact.info.tagline')}
                </p>
              </div>

              <div className="space-y-5 pt-3 border-t border-brand-border">
                
                {/* Address */}
                <Tooltip content={t('tooltips.contactAddress')} position="right" className="w-full">
                  <div className="flex items-start gap-3.5 text-slate-300 w-full hover:bg-brand-darkBg/60 p-2.5 rounded-xl transition-colors cursor-default">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/15 border border-brand-border flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-slate-400 text-xs font-semibold">{t('contact.info.addressLabel')}</span>
                      <span className="font-medium text-slate-200 text-sm sm:text-base leading-snug">{t('contact.info.address')}</span>
                    </div>
                  </div>
                </Tooltip>

                {/* Email */}
                <Tooltip content={t('tooltips.contactEmailLink')} position="right" className="w-full">
                  <div className="flex items-start gap-3.5 text-slate-300 w-full hover:bg-brand-darkBg/60 p-2.5 rounded-xl transition-colors cursor-default">
                    <div className="w-9 h-9 rounded-lg bg-brand-deep/30 border border-brand-border flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-slate-400 text-xs font-semibold">{t('contact.info.emailLabel')}</span>
                      <a href={`mailto:${t('contact.info.email')}`} className="font-medium text-brand-cyan hover:underline text-sm sm:text-base">
                        {t('contact.info.email')}
                      </a>
                    </div>
                  </div>
                </Tooltip>

                {/* Phone */}
                <Tooltip content={t('tooltips.contactPhoneLink')} position="right" className="w-full">
                  <div className="flex items-start gap-3.5 text-slate-300 w-full hover:bg-brand-darkBg/60 p-2.5 rounded-xl transition-colors cursor-default">
                    <div className="w-9 h-9 rounded-lg bg-brand-cardHover border border-brand-border flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-slate-400 text-xs font-semibold">{t('contact.info.phoneLabel')}</span>
                      <a href="tel:+17862103268" className="font-medium text-slate-200 hover:text-brand-cyan text-sm sm:text-base">
                        {t('contact.info.phone')}
                      </a>
                    </div>
                  </div>
                </Tooltip>

                {/* Hours */}
                <Tooltip content={t('tooltips.contactHours')} position="right" className="w-full">
                  <div className="flex items-start gap-3.5 text-slate-300 w-full hover:bg-brand-darkBg/60 p-2.5 rounded-xl transition-colors cursor-default">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue/10 border border-brand-border flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-slate-400 text-xs font-semibold">{t('contact.info.hoursLabel')}</span>
                      <span className="font-medium text-slate-200 text-sm sm:text-base">{t('contact.info.hours')}</span>
                    </div>
                  </div>
                </Tooltip>

              </div>

            </div>
          </div>

          {/* Right: Functional Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-card/85 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-brand-border shadow-2xl">
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto shadow-glow-cyan">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {t('contact.form.successMessage')}
                  </h3>
                  <p className="text-slate-300 text-base max-w-md mx-auto">
                    {t('contact.form.success')}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 bg-brand-card border border-brand-border rounded-xl text-sm font-semibold text-brand-cyan hover:text-white transition-colors cursor-pointer"
                  >
                    {t('contact.form.sendAnother')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{t('contact.form.error')}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-slate-200">
                        {t('contact.form.nameLabel')} <span className="text-brand-cyan">*</span>
                      </label>
                      <Tooltip content={t('tooltips.contactName')} position="top" className="w-full">
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder={t('contact.form.namePlaceholder')}
                          className="w-full px-4 py-3 bg-brand-darkBg/90 border border-brand-border focus:border-brand-cyan rounded-xl text-white placeholder-slate-500 text-base focus:outline-none transition-colors"
                          required
                        />
                      </Tooltip>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-slate-200">
                        {t('contact.form.emailLabel')} <span className="text-brand-cyan">*</span>
                      </label>
                      <Tooltip content={t('tooltips.contactEmail')} position="top" className="w-full">
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder={t('contact.form.emailPlaceholder')}
                          className="w-full px-4 py-3 bg-brand-darkBg/90 border border-brand-border focus:border-brand-cyan rounded-xl text-white placeholder-slate-500 text-base focus:outline-none transition-colors"
                          required
                        />
                      </Tooltip>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-slate-200">
                      {t('contact.form.subjectLabel')}
                    </label>
                    <Tooltip content={t('tooltips.contactSubject')} position="top" className="w-full">
                      <input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder={t('contact.form.subjectPlaceholder')}
                        className="w-full px-4 py-3 bg-brand-darkBg/90 border border-brand-border focus:border-brand-cyan rounded-xl text-white placeholder-slate-500 text-base focus:outline-none transition-colors"
                      />
                    </Tooltip>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-sm font-semibold text-slate-200">
                      {t('contact.form.messageLabel')} <span className="text-brand-cyan">*</span>
                    </label>
                    <Tooltip content={t('tooltips.contactMessage')} position="top" className="w-full">
                      <textarea
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder={t('contact.form.messagePlaceholder')}
                        className="w-full px-4 py-3 bg-brand-darkBg/90 border border-brand-border focus:border-brand-cyan rounded-xl text-white placeholder-slate-500 text-base focus:outline-none transition-colors resize-none"
                        required
                      />
                    </Tooltip>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Tooltip content={t('tooltips.contactSubmit')} position="top">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-base shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                      >
                        {status === 'loading' ? (
                          <span>{t('contact.form.sending')}</span>
                        ) : (
                          <>
                            <span>{t('contact.form.submitButton')}</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </Tooltip>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default ContactSection;
