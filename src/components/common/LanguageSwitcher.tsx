"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang, isClient } = useLanguage();

  // Render a stable placeholder during SSR / before hydration to avoid layout shift
  if (!isClient) {
    return (
      <div className="flex items-center gap-0 text-[11px] font-bold uppercase tracking-widest opacity-0 pointer-events-none select-none">
        <span className="px-2.5 py-1">EN</span>
        <span className="text-brand-dark/50">|</span>
        <span className="px-2.5 py-1">हिंदी</span>
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-0 text-[11px] font-bold uppercase tracking-widest"
      role="group"
      aria-label="Language selector"
    >
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2.5 py-1 transition-colors duration-200 rounded-sm ${
          lang === "en"
            ? "text-brand-crimson"
            : "text-brand-dark/70 hover:text-brand-dark"
        }`}
      >
        EN
      </button>

      <span className="text-brand-dark/50 select-none">|</span>

      <button
        onClick={() => setLang("hi")}
        aria-pressed={lang === "hi"}
        className={`px-2.5 py-1 transition-colors duration-200 rounded-sm font-sans normal-case tracking-normal text-[13px] ${
          lang === "hi"
            ? "text-brand-crimson"
            : "text-brand-dark/70 hover:text-brand-dark"
        }`}
      >
        हिंदी
      </button>
    </div>
  );
}
