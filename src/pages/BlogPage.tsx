import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Tooltip } from '../components/ui/Tooltip';
import { ArrowLeft, Calendar, Clock, ArrowRight, Sparkles, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DashboardGraphic } from '../components/blog/DashboardGraphic';

export const BlogPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const secondaryPosts = [
    {
      id: 'post2',
      category: t('blogPage.post2.category'),
      title: t('blogPage.post2.title'),
      date: t('blogPage.post2.date'),
      readTime: t('blogPage.post2.readTime'),
      excerpt: t('blogPage.post2.excerpt'),
      badgeColor: 'bg-brand-blue/20 text-brand-cyan border-brand-border shadow-glow-cyan/20',
      slug: '/blog/design-for-decisions',
    },
    {
      id: 'post3',
      category: t('blogPage.post3.category'),
      title: t('blogPage.post3.title'),
      date: t('blogPage.post3.date'),
      readTime: t('blogPage.post3.readTime'),
      excerpt: t('blogPage.post3.excerpt'),
      badgeColor: 'bg-brand-deep/30 text-brand-cyan border-brand-border shadow-glow-blue/20',
      slug: '/blog/design-for-decisions',
    },
  ];

  const linkedinArticlesUrl = 'https://www.linkedin.com/company/teckstartsolucions/posts/?feedView=all';

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
              <span>{t('blogPage.backHome')}</span>
            </Link>
          </Tooltip>
        </div>

        {/* Blog Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-border text-brand-cyan text-xs font-bold uppercase tracking-widest shadow-glow-cyan/15">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{t('blogPage.tag')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
              {t('blogPage.title')}
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            {t('blogPage.subtitle')}
          </p>
        </div>

        {/* Featured Main Article Card (Card Principal) */}
        <div className="mb-14 bg-brand-card/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-brand-border hover:border-brand-cyan transition-all duration-300 shadow-2xl group relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Article Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-blue/25 text-brand-cyan border border-brand-border">
                  {t('blogPage.postMain.category')}
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                  {t('blogPage.postMain.date')}
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                  {t('blogPage.postMain.readTime')}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-brand-cyan transition-colors leading-tight">
                <Link to="/blog/design-for-decisions">
                  {t('blogPage.postMain.title')}
                </Link>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed line-clamp-3">
                {t('blogPage.postMain.excerpt')}
              </p>

              <div className="pt-2">
                <Tooltip content={t('blogPage.readMore')} position="top">
                  <Link
                    to="/blog/design-for-decisions"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm uppercase tracking-wider shadow-glow-blue hover:shadow-glow-cyan transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{t('blogPage.readMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Tooltip>
              </div>
            </div>

            {/* Right: Dashboard Graphic Preview */}
            <div className="lg:col-span-6">
              <Link to="/blog/design-for-decisions" className="block focus:outline-none">
                <DashboardGraphic variant="featured" className="group-hover:scale-[1.01] transition-transform duration-300" />
              </Link>
            </div>

          </div>
        </div>

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {secondaryPosts.map((post) => (
            <article
              key={post.id}
              className="bg-brand-card/85 backdrop-blur-md rounded-2xl p-8 border border-brand-border flex flex-col justify-between group hover:border-brand-cyan hover:bg-brand-cardHover transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${post.badgeColor}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                    <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                  <Link to={post.slug}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                  {post.date}
                </span>

                <Tooltip content={t('blogPage.readMore')} position="top">
                  <Link
                    to={post.slug}
                    className="inline-flex items-center gap-1 text-sm font-bold text-brand-cyan hover:text-white transition-colors"
                  >
                    <span>{t('blogPage.readMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Tooltip>
              </div>
            </article>
          ))}
        </div>

        {/* See More Articles on LinkedIn CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-brand-card/90 border border-brand-border p-8 sm:p-12 shadow-2xl shadow-black/60 group hover:border-brand-cyan transition-all duration-300">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-[#00A0DC] text-xs font-bold uppercase tracking-wider">
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Pulse & Posts</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t('blogPage.seeMoreTitle')}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t('blogPage.seeMoreSubtitle')}
              </p>
            </div>

            <div className="shrink-0">
              <Tooltip content={t('tooltips.blogLinkedin')} position="top">
                <a
                  href={linkedinArticlesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0A66C2] via-[#0077B5] to-brand-cyan text-white font-extrabold text-base shadow-glow-blue hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Linkedin className="w-5 h-5 fill-white text-transparent" />
                  <span>{t('blogPage.seeMoreBtn')}</span>
                  <ExternalLink className="w-4 h-4 opacity-90" />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default BlogPage;
