import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollToContact } from '../../hooks/useScrollToContact';
import { Tooltip } from '../ui/Tooltip';
import { Sparkles, ArrowRight, BrainCircuit } from 'lucide-react';

export const IntelligenceCTASection: React.FC = () => {
  const { t } = useLanguage();
  const scrollToContact = useScrollToContact();

  return (
    <section className="py-20 bg-brand-darkBg relative overflow-hidden">
      {/* Background glow banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-brand-card/90 border border-brand-border p-8 sm:p-14 lg:p-16 shadow-2xl shadow-black/80">
          
          {/* Decorative background vectors */}
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -left-10 -top-10 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block pointer-events-none">
            <BrainCircuit className="w-64 h-64 text-brand-cyan" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            
            <Tooltip content={t('tooltips.intelligenceBanner')} position="top">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-border text-brand-cyan text-xs font-bold uppercase tracking-widest cursor-default">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>{t('intelligence.tag')}</span>
              </div>
            </Tooltip>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
                {t('intelligence.title')}
              </span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed">
              {t('intelligence.description')}
            </p>

            <div className="pt-4">
              <Tooltip content={t('tooltips.getStarted')} position="top">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-3 px-9 py-4.5 rounded-xl bg-brand-gradient text-white font-extrabold text-base shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{t('intelligence.cta')}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Tooltip>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default IntelligenceCTASection;
