import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Tooltip } from '../ui/Tooltip';
import { Mail, MapPin, Phone, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darkBg border-t border-brand-border relative overflow-hidden">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-blue/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Company Brand */}
          <div className="space-y-4">
            <Tooltip content={t('tooltips.logo')} position="top">
              <Link to="/" className="inline-block group focus:outline-none">
                <Logo size="md" />
              </Link>
            </Tooltip>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>
            <div className="pt-2">
              <Tooltip content={t('tooltips.navPay')} position="top">
                <a
                  href="https://teckstart-pay.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:text-white bg-brand-card hover:bg-brand-cardHover border border-brand-border px-3.5 py-2 rounded-lg transition-all shadow-sm"
                >
                  <span>{t('footer.externalNote')}</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-cyan" />
                </a>
              </Tooltip>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-glow-cyan"></span>
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Tooltip content={t('tooltips.navHome')} position="right">
                  <Link to="/" className="hover:text-brand-cyan transition-colors">
                    {t('nav.home')}
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip content={t('tooltips.navSolutions')} position="right">
                  <Link to="/solutions" className="hover:text-brand-cyan transition-colors">
                    {t('nav.solutions')}
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip content={t('tooltips.navVision')} position="right">
                  <Link to="/vision" className="hover:text-brand-cyan transition-colors">
                    {t('nav.vision')}
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip content={t('tooltips.navBlog')} position="right">
                  <Link to="/blog" className="hover:text-brand-cyan transition-colors">
                    {t('nav.blog')}
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip content={t('tooltips.navPay')} position="right">
                  <a 
                    href="https://teckstart-pay.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-brand-cyan hover:text-white transition-colors"
                  >
                    <span>{t('nav.pay')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Governance */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Tooltip content={t('tooltips.privacyLink')} position="right">
                  <Link to="/politica-de-privacidade" className="hover:text-brand-cyan transition-colors">
                    {t('footer.privacy')}
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip content={t('tooltips.cookiesLink')} position="right">
                  <Link to="/politica-de-cookies" className="hover:text-brand-cyan transition-colors">
                    {t('footer.cookies')}
                  </Link>
                </Tooltip>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact Data */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t('contact.info.company')}
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <Tooltip content={t('tooltips.contactAddress')} position="left">
                  <span className="leading-snug cursor-default">{t('contact.info.address')}</span>
                </Tooltip>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <Tooltip content={t('tooltips.contactEmailLink')} position="left">
                  <a href={`mailto:${t('contact.info.email')}`} className="hover:text-brand-cyan transition-colors">
                    {t('contact.info.email')}
                  </a>
                </Tooltip>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <Tooltip content={t('tooltips.contactPhoneLink')} position="left">
                  <a href="tel:+17862103268" className="hover:text-brand-cyan transition-colors">
                    {t('contact.info.phone')}
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {currentYear} {t('contact.info.company')}. {t('footer.allRights')}
          </div>
          <div className="flex items-center gap-6">
            <Tooltip content={t('tooltips.privacyLink')} position="top">
              <Link to="/politica-de-privacidade" className="hover:text-slate-200 transition-colors">
                {t('footer.privacy')}
              </Link>
            </Tooltip>
            <Tooltip content={t('tooltips.cookiesLink')} position="top">
              <Link to="/politica-de-cookies" className="hover:text-slate-200 transition-colors">
                {t('footer.cookies')}
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
