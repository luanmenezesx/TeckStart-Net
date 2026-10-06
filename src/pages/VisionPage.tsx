import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Tooltip } from '../components/ui/Tooltip';
import { ArrowLeft, Target, Shield, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisionPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-brand-darkBg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Tooltip content={t('tooltips.navHome')} position="right">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>{t('visionPage.backHome')}</span>
            </Link>
          </Tooltip>
        </div>

        {/* Vision Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cyan text-xs font-bold uppercase tracking-widest shadow-glow-cyan/15">
            {t('nav.vision')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
              {t('visionPage.title')}
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            {t('visionPage.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          <div className="lg:col-span-7 bg-brand-card/85 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-brand-border space-y-6 shadow-xl">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-xl bg-brand-darkBg border border-brand-border flex items-center justify-center text-brand-cyan shadow-glow-cyan/20 p-3">
                <Award className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {t('visionPage.experienceTitle')}
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {t('visionPage.experienceDesc')}
            </p>

            <div className="space-y-4 pt-2">
              <Tooltip content={t('tooltips.trustSecurity')} position="top" className="w-full">
                <div className="flex items-start gap-3 bg-brand-darkBg/80 p-3.5 rounded-xl border border-brand-border hover:border-brand-cyan transition-colors w-full cursor-default">
                  <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white">{t('visionPage.point1Title')}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{t('visionPage.point1Text')}</p>
                  </div>
                </div>
              </Tooltip>

              <Tooltip content={t('tooltips.speedRework')} position="top" className="w-full">
                <div className="flex items-start gap-3 bg-brand-darkBg/80 p-3.5 rounded-xl border border-brand-border hover:border-brand-cyan transition-colors w-full cursor-default">
                  <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white">{t('visionPage.point2Title')}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{t('visionPage.point2Text')}</p>
                  </div>
                </div>
              </Tooltip>

              <Tooltip content={t('tooltips.navPay')} position="top" className="w-full">
                <div className="flex items-start gap-3 bg-brand-darkBg/80 p-3.5 rounded-xl border border-brand-border hover:border-brand-cyan transition-colors w-full cursor-default">
                  <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white">{t('visionPage.point3Title')}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{t('visionPage.point3Text')}</p>
                  </div>
                </div>
              </Tooltip>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-card/85 backdrop-blur-md rounded-2xl p-8 border border-brand-border space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/20 border border-brand-border flex items-center justify-center text-brand-cyan">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t('visionPage.missionTitle')}
                </h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t('visionPage.missionDesc')}
              </p>
            </div>

            <div className="bg-brand-card/85 backdrop-blur-md rounded-2xl p-8 border border-brand-border space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-deep/30 border border-brand-border flex items-center justify-center text-brand-cyan">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t('visionPage.ethicsTitle')}
                </h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t('visionPage.ethicsDesc')}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
export default VisionPage;
