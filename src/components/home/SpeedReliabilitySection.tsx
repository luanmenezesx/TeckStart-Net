import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Tooltip } from '../ui/Tooltip';
import { Zap, ShieldCheck, Gauge, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SpeedReliabilitySection: React.FC = () => {
  const { t } = useLanguage();

  const checklist = [
    { key: 'check1', text: t('speed.check1'), tooltipKey: 'tooltips.check1' },
    { key: 'check2', text: t('speed.check2'), tooltipKey: 'tooltips.check2' },
    { key: 'check3', text: t('speed.check3'), tooltipKey: 'tooltips.check3' },
    { key: 'check4', text: t('speed.check4'), tooltipKey: 'tooltips.check4' },
  ];

  return (
    <section className="py-24 bg-brand-darkBg relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Infographic */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-brand-card/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-brand-border shadow-2xl hover:border-brand-cyan transition-all duration-300 relative">
              <div className="space-y-4">
                
                {/* Feature Box 1: Speed */}
                <Tooltip content={t('tooltips.speedLatency')} position="right" className="w-full">
                  <div className="w-full bg-brand-darkBg/90 rounded-xl p-4.5 border border-brand-border flex items-start gap-4 hover:border-brand-cyan transition-colors cursor-default">
                    <div className="w-11 h-11 rounded-lg bg-brand-blue/20 border border-brand-border flex items-center justify-center text-brand-cyan shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {t('speed.badgeLatency')}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {t('speed.badgeLatencyDesc')}
                      </p>
                    </div>
                  </div>
                </Tooltip>

                {/* Feature Box 2: Reliability */}
                <Tooltip content={t('tooltips.speedPrecision')} position="right" className="w-full">
                  <div className="w-full bg-brand-darkBg/90 rounded-xl p-4.5 border border-brand-border flex items-start gap-4 hover:border-brand-cyan transition-colors cursor-default">
                    <div className="w-11 h-11 rounded-lg bg-brand-deep/30 border border-brand-border flex items-center justify-center text-brand-cyan shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {t('speed.badgePrecision')}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {t('speed.badgePrecisionDesc')}
                      </p>
                    </div>
                  </div>
                </Tooltip>

                {/* Feature Box 3: Operational Cadence */}
                <Tooltip content={t('tooltips.speedRework')} position="right" className="w-full">
                  <div className="w-full bg-brand-darkBg/90 rounded-xl p-4.5 border border-brand-border flex items-start gap-4 hover:border-brand-cyan transition-colors cursor-default">
                    <div className="w-11 h-11 rounded-lg bg-brand-cardHover border border-brand-border flex items-center justify-center text-brand-cyan shrink-0">
                      <Gauge className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {t('speed.badgeRework')}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {t('speed.badgeReworkDesc')}
                      </p>
                    </div>
                  </div>
                </Tooltip>

              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7 space-y-7 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cyan text-xs font-bold uppercase tracking-widest shadow-glow-cyan/15">
              {t('speed.tag')}
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
                {t('speed.title')}
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed">
              <p>
                {t('speed.p1')}
              </p>
              <p>
                {t('speed.p2')}
              </p>
            </div>

            {/* Checklist Grid with individual tooltips */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {checklist.map((item) => (
                <Tooltip key={item.key} content={t(item.tooltipKey)} position="top">
                  <div className="flex items-center gap-3 bg-brand-card/60 border border-brand-border hover:border-brand-cyan p-3 rounded-xl transition-colors cursor-default">
                    <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-slate-200">
                      {item.text}
                    </span>
                  </div>
                </Tooltip>
              ))}
            </div>

            <div className="pt-3">
              <Tooltip content={t('tooltips.learnMore')} position="top">
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-base shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>{t('speed.cta')}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Tooltip>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default SpeedReliabilitySection;
