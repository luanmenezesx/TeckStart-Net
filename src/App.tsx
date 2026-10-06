import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { PageWrapper } from './components/layout/PageWrapper';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { VisionPage } from './pages/VisionPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/design-for-decisions" element={<BlogPostPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/politica-de-cookies" element={<CookiePolicyPage />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageWrapper>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
