import React, { createContext, useContext, useState, useEffect } from 'react';
import ptDict from '../locales/pt.json';
import enDict from '../locales/en.json';

export type Language = 'pt' | 'en';

type Translations = typeof ptDict;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
  tArray: (path: string) => string[];
  tRaw: <T = any>(path: string) => T;
  dict: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('teckstart_lang') as Language;
    if (saved === 'pt' || saved === 'en') return saved;
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('teckstart_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  };

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const dict = language === 'pt' ? ptDict : enDict;

  const getNestedValue = (obj: any, path: string): any => {
    if (!obj || typeof obj !== 'object') return undefined;
    const keys = path.split('.');
    let current = obj;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return undefined;
      }
    }
    return current;
  };

  const t = (path: string): string => {
    const value = getNestedValue(dict, path);
    if (typeof value === 'string') return value;
    
    // Fallback to Portuguese
    const fallback = getNestedValue(ptDict, path);
    if (typeof fallback === 'string') return fallback;
    
    return path;
  };

  const tArray = (path: string): string[] => {
    const value = getNestedValue(dict, path);
    if (Array.isArray(value)) return value;

    const fallback = getNestedValue(ptDict, path);
    if (Array.isArray(fallback)) return fallback;

    return [];
  };

  const tRaw = <T = any>(path: string): T => {
    const value = getNestedValue(dict, path);
    if (value !== undefined) return value as T;
    return getNestedValue(ptDict, path) as T;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray, tRaw, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
