"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { motion } from "framer-motion";

export default function CategoryGrid() {
  return (
    <section className="bg-white section-spacing border-t border-brand-border/20">
      <div className="container-wide">
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Explore Our Ranges</span>
            <h2 className="section-title">Shop by Category</h2>
            <p className="font-sans text-[16px] text-[#555] font-medium max-w-[520px] mt-4">
              From Indore&apos;s famous Ratlami Sev to traditional handmade sweets, browse our signature categories.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/products" 
              className="group font-sans text-[14px] font-bold text-brand-crimson hover:text-brand-dark transition-colors flex items-center gap-2 uppercase tracking-widest"
            >
              View All Products
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-x-10 md:gap-y-16">
          {categories.slice(0, 8).map((cat, i) => {
            let displayTitle = cat.name;
            if (cat.name.includes("(")) {
              displayTitle = cat.name.split("(")[0].trim() + " " + cat.name.split("(")[1].replace(")", "").trim();
            }

            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  href={`/products/category/${cat.slug}`}
                  className="group block"
                >
                  {/* Clean Visual Block */}
                  <div className="relative w-full aspect-[4/5] bg-[#F9F7F4] mb-6 overflow-hidden flex items-center justify-center">
                    {/* Placeholder for Category Photography */}
                    <div className="flex flex-col items-center justify-center opacity-10 group-hover:opacity-25 transition-opacity duration-500 scale-125">
                      <div className="w-[60px] h-0.5 bg-brand-dark mb-4" />
                      <span className="font-sans text-[8px] font-bold tracking-[0.4em] uppercase text-brand-dark">Category Photo</span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-brand-crimson/0 group-hover:bg-brand-crimson/5 transition-colors duration-500" />
                  </div>
                  
                  {/* Text Block */}
                  <div className="flex flex-col">
                    <h3 className="card-title mb-1 group-hover:text-brand-crimson transition-colors uppercase tracking-tight">
                      {displayTitle}
                    </h3>
                    <span className="font-sans text-[12px] text-brand-dark/40 font-bold uppercase tracking-widest">
                      {cat.productCount} Varieties
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

