"use client";

import { useState } from "react";
import { products } from "@/data/products";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid";
import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const [selected, setSelected] = useState("all");

  const filtered =
    selected === "all"
      ? products
      : products.filter((p) => p.categorySlug === selected);

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-brand-border/5">
        <div className="container-wide">
          <div className="mb-8 opacity-50">
            <Breadcrumb items={[{ label: "Shop All" }]} />
          </div>
          
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="display-title mb-6">
                Fresh from Indore
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-relaxed font-medium">
                Handcrafted with pure ghee and legacy recipes. Explore our curated range of authentic namkeen, sweets, and celebration packs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="sticky top-[100px] z-30 bg-[#FAF9F6]/80 backdrop-blur-md py-6 border-b border-brand-border/5">
        <div className="container-wide">
          <CategoryFilter selected={selected} onChange={setSelected} />
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="section-spacing pt-12 md:pt-16">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-10 md:mb-16">
             <span className="font-sans text-[11px] font-bold text-brand-dark/30 uppercase tracking-[0.2em]">
               Showing {filtered.length} Signature items
             </span>
          </div>

          <ProductGrid products={filtered} />
        </div>
      </section>
    </main>
  );
}

