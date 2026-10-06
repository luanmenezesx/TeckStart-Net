import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Tooltip } from '../ui/Tooltip';
import { Cloud, Cpu, Zap, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FourPillarsSection: React.FC = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      id: 'cloud',
      title: t('solutions.cards.cloud.title'),
      desc: t('solutions.cards.cloud.description'),
      icon: Cloud,
      iconColor: 'text-brand-cyan',
      badge: '01',
      tooltipKey: 'tooltips.pillarCloud',
    },
    {
      id: 'versatility',
      title: t('solutions.cards.versatility.title'),
      desc: t('solutions.cards.versatility.description'),
      icon: Cpu,
      iconColor: 'text-brand-cyan',
      badge: '02',
      tooltipKey: 'tooltips.pillarVersatility',
    },
    {
      id: 'acceleration',
      title: t('solutions.cards.acceleration.title'),
      desc: t('solutions.cards.acceleration.description'),
      icon: Zap,
      iconColor: 'text-brand-cyan',
      badge: '03',
      tooltipKey: 'tooltips.pillarAcceleration',
    },
    {
      id: 'support',
      title: t('solutions.cards.support.title'),
      desc: t('solutions.cards.support.description'),
      icon: Headphones,
      iconColor: 'text-brand-cyan',
      badge: '04',
      tooltipKey: 'tooltips.pillarSupport',
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-brand-darkBg relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cyan text-xs font-bold uppercase tracking-widest shadow-glow-cyan/15">
            {t('solutions.tag')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
              {t('solutions.title')}
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Tooltip key={pillar.id} content={t(pillar.tooltipKey)} position="top" className="h-full w-full">
                <div
                  className="bg-brand-card/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-brand-border hover:border-brand-cyan hover:bg-brand-cardHover relative group transition-all duration-300 shadow-xl flex flex-col justify-between h-full w-full"
                >
                  <div className="space-y-4">
                    {/* Top Bar: Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-13 h-13 rounded-xl bg-brand-darkBg border border-brand-border flex items-center justify-center group-hover:scale-110 group-hover:border-brand-cyan transition-all duration-300 shadow-glow-cyan/20 p-3">
                        <Icon className={`w-7 h-7 ${pillar.iconColor}`} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 bg-brand-darkBg px-2.5 py-1 rounded-md border border-brand-border">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-6 mt-4 border-t border-brand-border/60">
                    <Link
                      to="/solutions"
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:text-white transition-colors group/link"
                    >
                      <span>{t('pillars.details')}</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>

                  {/* Subtle top hover line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Tooltip>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default FourPillarsSection;
