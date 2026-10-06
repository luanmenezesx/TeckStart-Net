import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-darkBg text-slate-100 overflow-x-hidden selection:bg-brand-cyan/30 selection:text-brand-cyan relative">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
