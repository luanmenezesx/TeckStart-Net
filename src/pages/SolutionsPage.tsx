import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollToContact } from '../hooks/useScrollToContact';
import { Tooltip } from '../components/ui/Tooltip';
import { Cloud, Cpu, Zap, Headphones, ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SolutionsPage: React.FC = () => {
  const { t, tArray } = useLanguage();
  const scrollToContact = useScrollToContact();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutionsConfig = [
    {
      id: 'cloud',
      tag: '01',
      icon: Cloud,
      color: 'text-brand-cyan',
      tooltipKey: 'tooltips.pillarCloud',
    },
    {
      id: 'versatility',
      tag: '02',
      icon: Cpu,
      color: 'text-brand-cyan',
      tooltipKey: 'tooltips.pillarVersatility',
    },
    {
      id: 'acceleration',
      tag: '03',
      icon: Zap,
      color: 'text-brand-cyan',
      tooltipKey: 'tooltips.pillarAcceleration',
    },
    {
      id: 'support',
      tag: '04',
      icon: Headphones,
      color: 'text-brand-cyan',
      tooltipKey: 'tooltips.pillarSupport',
    },
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-brand-darkBg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <Tooltip content={t('tooltips.navHome')} position="right">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>{t('solutionsPage.backHome')}</span>
            </Link>
          </Tooltip>
        </div>

        {/* Page Title */}
        <div className="max-w-3xl space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cyan text-xs font-bold uppercase tracking-widest shadow-glow-cyan/15">
            {t('nav.solutions')}
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
              {t('solutionsPage.title')}
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-xl leading-relaxed">
            {t('solutionsPage.subtitle')}
          </p>
        </div>

        {/* Detailed Solutions Cards */}
        <div className="space-y-6 sm:space-y-8">
          {solutionsConfig.map((item) => {
            const Icon = item.icon;
            const title = t(`solutions.cards.${item.id}.title`);
            const desc = t(`solutions.cards.${item.id}.description`);
            const features = tArray(`solutions.cards.${item.id}.features`);
            const buttonText = t(`solutions.cards.${item.id}.button`) || t('solutions.ctaButton');

            return (
              <div
                key={item.id}
                className="bg-brand-card/85 backdrop-blur-md rounded-2xl p-5 sm:p-8 md:p-10 border border-brand-border hover:border-brand-cyan relative overflow-hidden transition-all duration-300 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3">
                      <Tooltip content={t(item.tooltipKey)} position="top">
                        <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-brand-darkBg border border-brand-border flex items-center justify-center ${item.color} shadow-glow-cyan/20 p-2.5 sm:p-3 shrink-0`}>
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                      </Tooltip>
                      <span className="text-xs font-mono font-bold text-slate-400 bg-brand-darkBg px-2.5 py-1 rounded-md border border-brand-border">
                        {item.tag}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      {title}
                    </h2>

                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                      {desc}
                    </p>

                    <div className="pt-2 sm:pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-base text-slate-300">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-start lg:justify-end pt-2 lg:pt-0">
                    <Tooltip content={t('tooltips.getStarted')} position="top" className="w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={scrollToContact}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-glow-blue hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
                      >
                        <span>{buttonText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
export default SolutionsPage;
