"use client";

import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGrid from "@/components/products/ProductGrid";
import { motion } from "framer-motion";
import { use } from "react";

interface Props {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: Props) {
  const { category: categorySlug } = use(params);
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) notFound();

  const products = getProductsByCategory(categorySlug);

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 border-b border-brand-border/5">
        <div className="container-wide">
          <div className="mb-8 opacity-50">
            <Breadcrumb
              items={[
                { label: "Shop", href: "/products" },
                { label: cat.name },
              ]}
            />
          </div>
          
          <div className="max-w-[800px]">
             <motion.div
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
             >
               <span className="eyebrow shadow-none mb-6">Signature Collection</span>
               <h1 className="display-title mb-6">
                 {cat.name}
               </h1>
               <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-relaxed font-medium">
                 {cat.description}
               </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-10 md:mb-16">
             <span className="font-sans text-[11px] font-bold text-brand-dark/30 uppercase tracking-[0.2em]">
               {products.length} Products in this Category
             </span>
          </div>

          <ProductGrid 
            products={products} 
            emptyMessage={`No products found in ${cat.name} yet. Check back soon!`} 
          />
        </div>
      </section>
    </main>
  );
}

