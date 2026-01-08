export type Language = 'pl' | 'en';

export const SUPPORTED_LANGUAGES: Language[] = ['pl', 'en'];
export const DEFAULT_LANGUAGE: Language = 'en';

export const detectLanguage = (): Language => {
    try {
        // 1. Check local storage
        const saved = localStorage.getItem('sysflow_lang');
        if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
            return saved as Language;
        }

        // 2. Check browser language
        const browserLang = navigator.language?.split('-')[0].toLowerCase();
        if (browserLang === 'pl') {
            return 'pl';
        }

        // 3. Default
        return DEFAULT_LANGUAGE;
    } catch (e) {
        return DEFAULT_LANGUAGE;
    }
};

export const setLanguagePreference = (lang: Language) => {
    localStorage.setItem('sysflow_lang', lang);
};
