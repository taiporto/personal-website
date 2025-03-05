'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface TranslationContextProps {
  t: (key: string) => string;
  translations: { [key: string]: any };
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider: React.FC<{ lang: string, children: ReactNode }> = ({lang, children }) => {
  const translations = require(`../../../dictionaries/${lang}.json`);

  const t = (key: string) => {
    let translation: string | Record<string, string> = translations;

    const accessKeys = key.split('.');
    while (accessKeys.length > 0 && translation) {
      if (typeof translation === "string") break;

      if (typeof translation === "object" && !translation?.[accessKeys[0]]) {
        console.error("Invalid key");
        return key;
      }
      translation = translation?.[accessKeys.shift() as string];
    }

    if (typeof translation === "object") {
      console.error("Invalid key");
      return key;
    }

    return translation;
  };

  return (
    <TranslationContext.Provider value={{ t, translations }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};