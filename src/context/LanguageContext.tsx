"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from "react";

import enMessages from "../../messages/en.json";
import hiMessages from "../../messages/hi.json";

// ─── Phase 6: Deep Merge Helper ───────────────────────────────────────────────

function isObject(item: any): boolean {
  return item && typeof item === "object" && !Array.isArray(item);
}

function deepMerge(target: any, source: any): any {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = deepMerge(target[key], source[key]);
      } else {
        if (source[key] !== undefined && source[key] !== "") {
          output[key] = source[key];
        }
      }
    });
  }
  return output;
}

const safeHiMessages = deepMerge(enMessages, hiMessages);

// ─── Types ────────────────────────────────────────────────────────────────────

export type Language = "en" | "hi";
export type Messages = typeof enMessages;

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  messages: Messages;
  isClient: boolean;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  messages: enMessages,
  isClient: false,
});

const STORAGE_KEY = "gokul_lang";

// ─── Provider ─────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let stored = "en" as Language;
    try {
      const ls = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (ls === "en" || ls === "hi") {
        stored = ls;
      }
    } catch {
      // ignore
    }
    setLangState(stored);
    document.documentElement.lang = stored;
    document.cookie = `gokul_lang=${stored}; path=/; max-age=31536000`;
    setMounted(true);
  }, []);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    document.documentElement.lang = next;
    document.cookie = `gokul_lang=${next}; path=/; max-age=31536000`;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const messages = useMemo(() => (lang === "hi" ? safeHiMessages : enMessages), [lang]);

  const value = useMemo(
    () => ({ lang, setLang, messages, isClient: mounted }),
    [lang, setLang, messages, mounted]
  );

  // Phase 1: Wait until mounted to render the UI, avoiding flicker completely.
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col pointer-events-none select-none">
        {/* Simple Skeleton Header */}
        <div className="w-full h-[70px] md:h-[90px] bg-white border-b border-brand-border/10 flex items-center justify-between px-6 lg:px-12">
           <div className="w-[100px] h-[30px] bg-brand-dark/5 rounded-sm animate-pulse" />
           <div className="hidden lg:flex gap-8">
             <div className="w-[60px] h-[15px] bg-brand-dark/5 rounded-sm animate-pulse" />
             <div className="w-[60px] h-[15px] bg-brand-dark/5 rounded-sm animate-pulse" />
             <div className="w-[60px] h-[15px] bg-brand-dark/5 rounded-sm animate-pulse" />
           </div>
        </div>
        {/* Simple Skeleton Body */}
        <div className="flex-1 w-full flex items-center justify-center p-8">
           <div className="w-full max-w-[500px] flex flex-col items-center gap-6 opacity-50">
             <div className="w-1/2 h-[40px] bg-brand-dark/5 rounded-sm animate-pulse" />
             <div className="w-3/4 h-[20px] bg-brand-dark/5 rounded-sm animate-pulse" />
             <div className="w-2/3 h-[20px] bg-brand-dark/5 rounded-sm animate-pulse" />
             <div className="w-[150px] h-[50px] bg-brand-dark/5 rounded-sm animate-pulse mt-4" />
           </div>
        </div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
