import React from 'react';
import logoImg from '../../assets/logo.png';
import { useLanguage } from '../../context/LanguageContext';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showSubtitle = true 
}) => {
  const { t } = useLanguage();
  const iconDimensions = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Rocket Logo Icon */}
      <div className={`relative ${iconDimensions} rounded-xl overflow-hidden bg-black border border-brand-border shadow-glow-blue group-hover:shadow-glow-cyan group-hover:border-brand-cyan transition-all duration-300 flex items-center justify-center p-0.5 shrink-0`}>
        <img 
          src={logoImg} 
          alt="Teckstart Logo" 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Typography: Metallic Gradient Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black ${titleSize} tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan drop-shadow-sm`}>
            TECKSTART
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-glow-cyan inline-block animate-pulse"></span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] uppercase tracking-widest text-brand-cyan font-bold -mt-0.5 drop-shadow-[0_0_6px_rgba(0,210,255,0.4)]">
            {t('nav.financialSolutions')}
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
