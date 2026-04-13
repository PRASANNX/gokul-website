"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function CategoryGrid() {
  const { messages, lang } = useLanguage();

  return (
    <section className="bg-white py-20 md:py-24 border-t border-brand-border/10">
      <div className="container-wide">
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[600px]"
          >
            <span className="eyebrow !text-brand-crimson">{messages.categories.eyebrow}</span>
            <h2 className="section-title !text-[36px] md:!text-[48px] tracking-tight">{messages.categories.title}</h2>
            <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/85 font-medium mt-4 leading-relaxed">
              {messages.categories.subtitle}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/products" 
              className="group font-sans text-[13px] font-black text-brand-dark hover:text-brand-crimson transition-all flex items-center gap-3 uppercase tracking-widest border-b-2 border-brand-dark/10 pb-1"
            >
              {messages.categories.viewAll}
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
            </Link>
          </motion.div>
        </div>

        {/* ── VISUAL CATEGORY GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {categories.slice(0, 8).map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/products/category/${cat.slug}`}
                className="group block relative overflow-hidden rounded-[8px] bg-brand-cream aspect-[4/5] md:aspect-[3/4] border border-brand-border/10 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Actual Category Image */}
                {cat.image && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={cat.image}
                      alt={cat.name[lang]}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    />
                  </div>
                )}

                {/* Visual Placeholder fallback/overlay for high-end feel */}
                <div className="absolute inset-0 flex items-center justify-center p-12 overflow-hidden z-0">
                  {/* Rotating Diamond Frame */}
                  <div className="absolute inset-0 border-[0.5px] border-brand-dark/5 rotate-45 scale-[1.4] group-hover:rotate-90 transition-transform duration-1000 ease-out" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/20 to-transparent flex flex-col justify-end p-8 transition-all duration-700">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="font-sans text-[22px] md:text-[28px] font-black text-white uppercase tracking-tight mb-3">
                       {cat.name[lang]}
                    </h3>
                    
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <span className="text-[12px] font-black text-brand-crimson uppercase tracking-[0.2em] bg-brand-crimson/10 px-3 py-1 rounded-sm">
                        {cat.productCount} {messages.categories.varieties}
                      </span>
                      <div className="h-px w-6 bg-brand-crimson/30" />
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-brand-crimson/20" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
