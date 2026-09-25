import React, { createContext, useContext, useState, useEffect } from 'react';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, LanguageOption } from './languages';
import { translations, TranslationKeys } from './translations';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  currentLanguageMeta: LanguageOption;
  t: TranslationKeys;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'ble_selected_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
        return saved;
      }
    } catch {
      // Storage access blocked or unavailable
    }
    return DEFAULT_LANGUAGE;
  });

  const setLanguage = (lang: string) => {
    if (SUPPORTED_LANGUAGES.some((l) => l.code === lang)) {
      setCurrentLanguageState(lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Storage access blocked or unavailable
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const currentLanguageMeta =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  const t = translations[currentLanguage] || translations[DEFAULT_LANGUAGE];

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        currentLanguageMeta,
        t,
        languages: SUPPORTED_LANGUAGES,
      }}
    >
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
