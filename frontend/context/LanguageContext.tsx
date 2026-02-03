"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "@/types";

interface LanguageContextType {
    lang: Language;
    toggleLang: () => void;
    t: (en: string, ar: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>("en");

    const toggleLang = () => {
        setLang((prev) => (prev === "en" ? "ar" : "en"));
    };

    const t = (en: string, ar: string) => {
        return lang === "en" ? en : ar;
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            <div dir={lang === "ar" ? "rtl" : "ltr"} className={lang === "ar" ? "font-sans-ar" : "font-sans"}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
