import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollToContact } from '../hooks/useScrollToContact';
import { Tooltip } from '../components/ui/Tooltip';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, MessageCircle, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DashboardGraphic } from '../components/blog/DashboardGraphic';

export const BlogPostPage: React.FC = () => {
  const { t } = useLanguage();
  const scrollToContact = useScrollToContact();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = (platform: 'linkedin' | 'twitter' | 'whatsapp') => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(t('blogPage.postMain.title'));
    
    let shareUrl = '';
    if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    } else if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-28 pb-20 bg-brand-darkBg min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation & Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Tooltip content={t('blogPage.backToAll')} position="right">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>{t('blogPage.backToAll')}</span>
            </Link>
          </Tooltip>

          <span className="text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-brand-card border border-brand-border text-brand-cyan">
            {t('blogPage.postMain.categoryTag')}
          </span>
        </div>

        {/* Article Header */}
        <header className="space-y-6 mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
              {t('blogPage.postMain.title')}
            </span>
          </h1>

          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 pb-6 border-b border-brand-border font-mono">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-cyan" />
              <span>{t('blogPage.postMain.date')}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-cyan" />
              <span>{t('blogPage.postMain.readTime')}</span>
            </div>
            <span>•</span>
            <span className="text-brand-cyan font-semibold">
              {t('blogPage.postMain.category')}
            </span>
          </div>
        </header>

        {/* Article Content - High readability with increased font sizes */}
        <article className="space-y-8 text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
          
          {/* Paragraph 1 */}
          <p className="border-l-4 border-brand-cyan pl-5 py-2 text-white font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed bg-brand-card/40 rounded-r-xl">
            {t('blogPage.postMain.p1')}
          </p>

          {/* Paragraph 2 */}
          <p className="text-slate-300">
            {t('blogPage.postMain.p2')}
          </p>

          {/* Central Visual: High-Definition Dashboard Mockup Graphic */}
          <div className="my-12">
            <DashboardGraphic variant="full" />
            <p className="text-center text-xs text-slate-400 mt-3 font-mono">
              Fig 1.1 • Interface executiva com hierarquia visual e filtros dinâmicos de baixa sobrecarga cognitiva.
            </p>
          </div>

          {/* Paragraph 3 */}
          <p className="text-slate-300">
            {t('blogPage.postMain.p3')}
          </p>

        </article>

        {/* Social Sharing Bar */}
        <div className="mt-14 pt-8 border-t border-brand-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-wider">
              <Share2 className="w-4 h-4 text-brand-cyan" />
              <span>{t('blogPage.share')}</span>
            </div>

            <div className="flex items-center gap-3">
              <Tooltip content={t('tooltips.shareLinkedin')} position="top">
                <button
                  type="button"
                  onClick={() => handleShare('linkedin')}
                  className="p-3 rounded-xl bg-brand-card hover:bg-brand-cardHover border border-brand-border text-slate-300 hover:text-brand-cyan transition-all cursor-pointer"
                  title="LinkedIn"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              </Tooltip>

              <Tooltip content={t('tooltips.shareTwitter')} position="top">
                <button
                  type="button"
                  onClick={() => handleShare('twitter')}
                  className="p-3 rounded-xl bg-brand-card hover:bg-brand-cardHover border border-brand-border text-slate-300 hover:text-brand-cyan transition-all cursor-pointer"
                  title="X / Twitter"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
              </Tooltip>

              <Tooltip content={t('tooltips.shareWhatsapp')} position="top">
                <button
                  type="button"
                  onClick={() => handleShare('whatsapp')}
                  className="p-3 rounded-xl bg-brand-card hover:bg-brand-cardHover border border-brand-border text-slate-300 hover:text-emerald-400 transition-all cursor-pointer"
                  title="WhatsApp"
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </Tooltip>

              <Tooltip content={t('tooltips.copyLink')} position="top">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-brand-card hover:bg-brand-cardHover border border-brand-border text-xs font-bold text-slate-200 hover:text-brand-cyan transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">{t('blogPage.copied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t('blogPage.copyLink')}</span>
                    </>
                  )}
                </button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 relative rounded-2xl overflow-hidden bg-brand-card/90 border border-brand-border p-8 sm:p-12 shadow-glow-blue/20">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/15 border border-brand-border text-brand-cyan text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>{t('blogPage.featuredTag')}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              {t('blogPage.ctaTitle')}
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {t('blogPage.ctaSubtitle')}
            </p>

            <div className="pt-2">
              <Tooltip content={t('tooltips.getStarted')} position="top">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-gradient text-white font-extrabold text-base shadow-glow-blue hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>{t('blogPage.ctaButton')}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default BlogPostPage;
