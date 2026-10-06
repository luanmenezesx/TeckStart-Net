import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollToContact } from '../../hooks/useScrollToContact';
import { Tooltip } from '../ui/Tooltip';
import { ArrowRight, Sparkles, Activity, ShieldCheck, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const scrollToContact = useScrollToContact();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-darkBg">
      {/* Background Radial Glow & Ambient Lighting */}
      <div className="absolute inset-0 bg-glow-radial pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Pill Badge with Tooltip */}
            <Tooltip content={t('tooltips.heroBadge')} position="top">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-card border border-brand-border text-brand-cyan text-sm font-semibold backdrop-blur-md shadow-glow-cyan/20 animate-fade-in cursor-default hover:border-brand-cyan transition-colors">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>{t('hero.badge')}</span>
              </div>
            </Tooltip>

            {/* Main Headline with Gradient */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
              {t('hero.titlePrefix')}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
                {t('hero.titleHighlight')}
              </span>{' '}
              {t('hero.titleSuffix')}
            </h1>

            {/* Subtitle - Increased size for high readability */}
            <p className="text-slate-300 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            {/* Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Tooltip content={t('tooltips.getStarted')} position="top">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-brand-gradient text-white font-extrabold text-base shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{t('hero.ctaPrimary')}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Tooltip>

              <Tooltip content={t('tooltips.learnMore')} position="top">
                <Link
                  to="/solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-card/85 hover:bg-brand-cardHover border border-brand-border hover:border-brand-cyan text-slate-200 hover:text-white font-bold text-base transition-all duration-300"
                >
                  <span>{t('hero.ctaSecondary')}</span>
                </Link>
              </Tooltip>
            </div>

            {/* Trust Highlights with Individual Tooltips */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-lg mx-auto lg:mx-0 border-t border-brand-border">
              <Tooltip content={t('tooltips.trustSecurity')} position="top">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-brand-card/60 transition-colors cursor-default">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{t('hero.trustSecurity')}</span>
                </div>
              </Tooltip>

              <Tooltip content={t('tooltips.trustCloud')} position="top">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-brand-card/60 transition-colors cursor-default">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{t('hero.trustCloud')}</span>
                </div>
              </Tooltip>

              <Tooltip content={t('tooltips.trustB2B')} position="top">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-brand-card/60 transition-colors cursor-default">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{t('hero.trustB2B')}</span>
                </div>
              </Tooltip>
            </div>

          </div>

          {/* Right Column: Interactive Data Intelligence Simulation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Tooltip on header */}
              <div className="bg-brand-card/90 backdrop-blur-md rounded-2xl p-7 border border-brand-border hover:border-brand-cyan shadow-2xl shadow-black/70 relative overflow-hidden transition-all duration-300">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-brand-border pb-4 mb-5">
                  <Tooltip content={t('tooltips.liveStream')} position="top">
                    <div className="flex items-center gap-2.5 cursor-default">
                      <div className="w-3.5 h-3.5 rounded-full bg-brand-cyan shadow-glow-cyan animate-pulse"></div>
                      <span className="text-sm font-bold text-slate-200 tracking-wide">
                        {t('hero.cardLiveStream')}
                      </span>
                    </div>
                  </Tooltip>
                  <span className="text-xs text-brand-cyan font-mono font-bold bg-brand-blue/20 px-3 py-1 rounded-full border border-brand-border">
                    {t('hero.cardLiveStatus')}
                  </span>
                </div>

                {/* Simulated Metrics Card */}
                <div className="space-y-4">
                  <Tooltip content={t('tooltips.growthMetric')} position="top" className="w-full">
                    <div className="w-full bg-brand-darkBg/95 rounded-xl p-4 border border-brand-border hover:border-brand-cyan transition-colors cursor-default">
                      <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                        <span className="font-medium">{t('hero.cardFinancialIntelligence')}</span>
                        <span className="text-brand-cyan flex items-center gap-1 font-bold">
                          <TrendingUp className="w-4 h-4" />
                          {t('hero.cardGrowthMetric')}
                        </span>
                      </div>
                      {/* Simulated Wave Visual Bars */}
                      <div className="h-20 flex items-end gap-1.5 pt-2">
                        {[40, 65, 45, 80, 55, 90, 70, 95, 85, 100, 75, 92, 88].map((val, idx) => (
                          <div
                            key={idx}
                            className="flex-1 bg-gradient-to-t from-brand-blue/40 to-brand-cyan rounded-t-sm transition-all duration-500 hover:from-brand-blue hover:to-white"
                            style={{ height: `${val}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </Tooltip>

                  {/* Grid of Micro stats */}
                  <div className="grid grid-cols-2 gap-3.5">
                    <Tooltip content={t('tooltips.latency')} position="top">
                      <div className="bg-brand-darkBg/80 rounded-xl p-4 border border-brand-border hover:border-brand-cyan transition-colors cursor-default">
                        <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold mb-1">
                          <Activity className="w-4 h-4 text-brand-cyan" />
                          <span>{t('hero.latencyLabel')}</span>
                        </div>
                        <div className="text-xl font-extrabold text-white">&lt; 12ms</div>
                      </div>
                    </Tooltip>

                    <Tooltip content={t('tooltips.accuracy')} position="top">
                      <div className="bg-brand-darkBg/80 rounded-xl p-4 border border-brand-border hover:border-brand-cyan transition-colors cursor-default">
                        <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold mb-1">
                          <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                          <span>{t('hero.cardAccuracy')}</span>
                        </div>
                        <div className="text-xl font-extrabold text-brand-cyan">
                          {t('hero.cardAccuracyValue')}
                        </div>
                      </div>
                    </Tooltip>
                  </div>

                  {/* Connected Nodes Visual */}
                  <Tooltip content={t('tooltips.pipeline')} position="bottom" className="w-full">
                    <div className="w-full p-3.5 rounded-xl bg-brand-blue/15 border border-brand-border hover:border-brand-cyan transition-colors flex items-center justify-between text-sm cursor-default">
                      <div className="flex items-center gap-2 text-slate-200 font-medium">
                        <Layers className="w-4 h-4 text-brand-cyan" />
                        <span>{t('hero.pipelineActive')}</span>
                      </div>
                      <span className="text-brand-cyan font-mono text-xs font-bold">{t('hero.synced')}</span>
                    </div>
                  </Tooltip>
                </div>

              </div>

              {/* Decorative Floaters with Tooltip */}
              <div className="hidden sm:block absolute -top-4 -right-4">
                <Tooltip content={t('tooltips.aiEngine')} position="left">
                  <div className="bg-brand-card border border-brand-cyan/40 rounded-xl p-3.5 shadow-glow-blue backdrop-blur-md cursor-default hover:scale-105 transition-transform">
                    <div className="text-xs font-bold text-brand-cyan flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping"></div>
                      {t('hero.aiEngine')}
                    </div>
                  </div>
                </Tooltip>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default HeroSection;
