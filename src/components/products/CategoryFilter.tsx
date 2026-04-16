"use client";

import { categories } from "@/data/categories";
import { useLanguage } from "@/context/LanguageContext";

interface CategoryFilterProps {
  selected: string;
  onChange: (slug: string) => void;
}

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  const { messages, lang } = useLanguage();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Scrollable Container */}
      <div className="flex items-center gap-3 md:gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-6 -mb-6">
        <button
          onClick={() => onChange("all")}
          className={`shrink-0 snap-start px-7 py-4 rounded-full font-sans text-[14px] md:text-[15px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${
            selected === "all"
              ? "bg-brand-crimson border-brand-dark text-brand-dark shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] -translate-y-[2px]"
              : "bg-white border-brand-border/20 text-brand-dark/70 hover:border-brand-dark/50 hover:text-brand-dark hover:-translate-y-[1px]"
          }`}
        >
          {messages.products.filterAll}
        </button>

        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => onChange(category.slug)}
            className={`shrink-0 snap-start px-7 py-4 rounded-full font-sans text-[14px] md:text-[15px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${
              selected === category.slug
                ? "bg-brand-crimson border-brand-dark text-brand-dark shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] -translate-y-[2px]"
                : "bg-white border-brand-border/20 text-brand-dark/70 hover:border-brand-dark/50 hover:text-brand-dark hover:-translate-y-[1px]"
            }`}
          >
            {category.name[lang]}
          </button>
        ))}
      </div>
      
      {/* Subtle fade edges for overflow */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FAF9F6] to-transparent pointer-events-none" />
    </div>
  );
}
