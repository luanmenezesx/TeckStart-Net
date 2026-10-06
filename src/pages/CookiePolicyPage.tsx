import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookiePolicyPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-brand-darkBg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('cookiePage.backHome')}</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-brand-cyan text-xs font-bold uppercase tracking-widest">
            <Cookie className="w-3.5 h-3.5" />
            <span>{t('common.legal')}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
              {t('cookiePage.title')}
            </span>
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            {t('cookiePage.lastUpdated')}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-brand-card/85 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-brand-border space-y-8 text-sm text-slate-300 leading-relaxed shadow-xl">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">
              {t('cookiePage.section1Title')}
            </h2>
            <p className="text-slate-400">
              {t('cookiePage.section1Text')}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">
              {t('cookiePage.section2Title')}
            </h2>
            <p className="text-slate-400">
              {t('cookiePage.section2Text')}
            </p>
          </section>

          <div className="pt-6 border-t border-brand-border text-xs text-slate-400">
            {t('cookiePage.footerText')}
          </div>
        </div>

      </div>
    </div>
  );
};
export default CookiePolicyPage;
