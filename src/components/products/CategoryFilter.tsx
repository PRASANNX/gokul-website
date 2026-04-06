"use client";

import { categories } from "@/data/categories";

interface CategoryFilterProps {
  selected: string;
  onChange: (slug: string) => void;
}

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 md:gap-7">
      <button
        onClick={() => onChange("all")}
        className={`px-0 py-2 border-b-2 font-sans text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
          selected === "all"
            ? "border-brand-crimson text-brand-crimson"
            : "border-transparent text-brand-dark/40 hover:text-brand-dark"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => onChange(category.slug)}
          className={`px-0 py-2 border-b-2 font-sans text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
            selected === category.slug
              ? "border-brand-crimson text-brand-crimson"
              : "border-transparent text-brand-dark/40 hover:text-brand-dark"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

