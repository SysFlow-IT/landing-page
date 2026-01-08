import React, { createContext, useContext } from 'react';
import * as PL from '../constants/pl';
import * as EN from '../constants/en';
import { Language } from '../utils/language';

type ContentType = typeof PL;

interface LanguageContextType {
    language: Language;
    content: ContentType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{
    language: Language;
    children: React.ReactNode
}> = ({ language, children }) => {
    const content = language === 'pl' ? PL : EN;

    return (
        <LanguageContext.Provider value={{ language, content }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useContent must be used within a LanguageProvider');
    }
    return context;
};
