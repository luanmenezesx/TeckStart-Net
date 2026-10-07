import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollToContact } from '../../hooks/useScrollToContact';
import { Tooltip } from '../ui/Tooltip';
import { ExternalLink, Menu, X, Globe, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const scrollToContact = useScrollToContact();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open to prevent overlapping
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  const navLinks = [
    { name: t('nav.home'), path: '/', isExternal: false, tooltipKey: 'tooltips.navHome' },
    { name: t('nav.solutions'), path: '/solutions', isExternal: false, tooltipKey: 'tooltips.navSolutions' },
    { name: t('nav.vision'), path: '/vision', isExternal: false, tooltipKey: 'tooltips.navVision' },
    { name: t('nav.blog'), path: '/blog', isExternal: false, tooltipKey: 'tooltips.navBlog' },
    { 
      name: t('nav.pay'), 
      path: 'https://teckstart-pay.vercel.app/', 
      isExternal: true,
      tooltipKey: 'tooltips.navPay'
    },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleMobileCta = (e: React.MouseEvent) => {
    handleNavClick();
    scrollToContact(e);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#070A12] border-b border-brand-border shadow-lg shadow-black/70 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Tooltip */}
          <Tooltip content={t('tooltips.logo')} position="bottom">
            <Link 
              to="/" 
              className="group cursor-pointer focus:outline-none"
              onClick={handleNavClick}
            >
              <Logo size="md" />
            </Link>
          </Tooltip>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-brand-card/70 border border-brand-border px-4 py-2 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = !link.isExternal && location.pathname === link.path;

              if (link.isExternal) {
                return (
                  <Tooltip key={link.name} content={t(link.tooltipKey)} position="bottom">
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold tracking-wide text-brand-cyan hover:text-white hover:bg-brand-blue/20 rounded-full transition-all duration-200"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  </Tooltip>
                );
              }

              return (
                <Tooltip key={link.name} content={t(link.tooltipKey)} position="bottom">
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-semibold tracking-wide rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-blue/25 text-brand-cyan border border-brand-border shadow-glow-cyan/25'
                        : 'text-slate-300 hover:text-brand-cyan hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </Tooltip>
              );
            })}
          </nav>

          {/* Header Actions: Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-brand-card/90 border border-brand-border rounded-full p-1 text-xs backdrop-blur-md">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-2 mr-1" />
              <Tooltip content={t('tooltips.langPT')} position="bottom">
                <button
                  type="button"
                  onClick={() => setLanguage('pt')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    language === 'pt'
                      ? 'bg-brand-gradient text-white font-bold shadow-glow-blue'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  PT
                </button>
              </Tooltip>
              <Tooltip content={t('tooltips.langEN')} position="bottom">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    language === 'en'
                      ? 'bg-brand-gradient text-white font-bold shadow-glow-blue'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </Tooltip>
            </div>

            {/* Primary CTA Button */}
            <Tooltip content={t('tooltips.getStarted')} position="bottom">
              <button
                type="button"
                onClick={scrollToContact}
                className="bg-brand-gradient text-white font-bold text-sm tracking-wide px-6 py-2.5 rounded-full shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {t('nav.getStarted')}
              </button>
            </Tooltip>
          </div>

          {/* Mobile Menu Trigger & Language on Mobile */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Quick Language Toggle */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cyan active:scale-95 transition-transform"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-slate-200 hover:text-white active:scale-95 transition-transform"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-cyan" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Full-Screen Opaque Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#070A12] z-50 overflow-y-auto px-5 py-6 flex flex-col justify-between border-t border-brand-border/60 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isActive = !link.isExternal && location.pathname === link.path;

              if (link.isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleNavClick}
                    className="flex items-center justify-between px-5 py-4 rounded-xl bg-brand-card border border-brand-border text-brand-cyan font-bold text-base shadow-sm active:scale-[0.98] transition-transform"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between px-5 py-4 rounded-xl text-base font-bold transition-all active:scale-[0.98] ${
                    isActive
                      ? 'bg-brand-blue/25 text-brand-cyan border border-brand-cyan/40 shadow-glow-cyan/20'
                      : 'text-slate-200 bg-brand-card/85 border border-brand-border/60 hover:bg-brand-card hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </Link>
              );
            })}
          </div>

          <div className="pt-6 mt-6 border-t border-brand-border/80 flex flex-col gap-4">
            {/* Language toggle inside mobile menu */}
            <div className="flex items-center justify-between bg-brand-card/90 border border-brand-border p-3 rounded-xl">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-cyan" />
                <span>{language === 'pt' ? 'Idioma Selecionado' : 'Selected Language'}</span>
              </span>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setLanguage('pt')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    language === 'pt'
                      ? 'bg-brand-gradient text-white shadow-glow-blue'
                      : 'text-slate-400 bg-brand-darkBg border border-brand-border'
                  }`}
                >
                  PT
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    language === 'en'
                      ? 'bg-brand-gradient text-white shadow-glow-blue'
                      : 'text-slate-400 bg-brand-darkBg border border-brand-border'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={handleMobileCta}
              className="w-full py-4 rounded-xl bg-brand-gradient font-extrabold text-white text-base shadow-glow-blue hover:shadow-glow-cyan text-center cursor-pointer active:scale-[0.98] transition-transform"
            >
              {t('nav.getStarted')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
