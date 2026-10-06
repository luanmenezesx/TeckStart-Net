import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Tooltip } from '../ui/Tooltip';
import { Award, Briefcase, Database } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      number: t('metrics.m1.number'),
      label: t('metrics.m1.label'),
      desc: t('metrics.m1.description'),
      icon: Award,
      accentColor: 'from-white via-brand-cyan to-brand-blue',
      iconBg: 'bg-brand-blue/15 text-brand-cyan border-brand-border shadow-glow-cyan/20',
      tooltipKey: 'tooltips.metricYears',
    },
    {
      number: t('metrics.m2.number'),
      label: t('metrics.m2.label'),
      desc: t('metrics.m2.description'),
      icon: Briefcase,
      accentColor: 'from-brand-cyan via-white to-brand-deep',
      iconBg: 'bg-brand-deep/30 text-brand-cyan border-brand-border shadow-glow-blue/20',
      tooltipKey: 'tooltips.metricInitiatives',
    },
    {
      number: t('metrics.m3.number'),
      label: t('metrics.m3.label'),
      desc: t('metrics.m3.description'),
      icon: Database,
      accentColor: 'from-white via-brand-cyan to-brand-cyan',
      iconBg: 'bg-brand-cardHover text-brand-cyan border-brand-border shadow-glow-cyan/20',
      tooltipKey: 'tooltips.metricData',
    },
  ];

  return (
    <section className="py-24 bg-brand-darkBg border-y border-brand-border relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cyan text-xs font-bold uppercase tracking-widest shadow-glow-cyan/15">
            {t('metrics.tag')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
              {t('metrics.title')}
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            {t('metrics.subtitle')}
          </p>
        </div>

        {/* 3 Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <Tooltip key={index} content={t(item.tooltipKey)} position="top" className="h-full w-full">
                <div
                  className="bg-brand-card/85 backdrop-blur-md rounded-2xl p-8 sm:p-9 border border-brand-border hover:bg-brand-cardHover hover:border-brand-cyan relative overflow-hidden group transition-all duration-300 shadow-xl h-full w-full cursor-default"
                >
                  {/* Top icon */}
                  <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Big Metric Number */}
                  <div className={`text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${item.accentColor} mb-3`}>
                    {item.number}
                  </div>

                  {/* Label */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {item.label}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Subtle bottom border highlight */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Tooltip>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default MetricsSection;
