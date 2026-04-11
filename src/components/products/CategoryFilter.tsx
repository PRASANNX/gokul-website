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
      <div className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4 -mb-4">
        <button
          onClick={() => onChange("all")}
          className={`shrink-0 snap-start px-6 py-3.5 rounded-full font-sans text-[13px] md:text-[14px] font-black uppercase tracking-widest transition-all duration-300 border ${
            selected === "all"
              ? "bg-brand-crimson border-brand-crimson text-brand-dark shadow-md"
              : "bg-white border-brand-border/20 text-brand-dark/85 hover:border-brand-crimson/30"
          }`}
        >
          {messages.products.filterAll}
        </button>

        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => onChange(category.slug)}
            className={`shrink-0 snap-start px-6 py-3.5 rounded-full font-sans text-[13px] md:text-[14px] font-black uppercase tracking-widest transition-all duration-300 border ${
              selected === category.slug
                ? "bg-brand-crimson border-brand-crimson text-brand-dark shadow-md"
                : "bg-white border-brand-border/20 text-brand-dark/85 hover:border-brand-crimson/30"
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
