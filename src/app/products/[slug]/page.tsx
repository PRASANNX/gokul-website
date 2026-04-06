"use client";

import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGrid from "@/components/products/ProductGrid";
import { motion } from "framer-motion";
import { use } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: Props) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      
      {/* ── BREADCRUMB & HEADER ── */}
      <section className="pt-32 pb-8 md:pt-40">
        <div className="container-wide">
          <div className="mb-0 opacity-50">
            <Breadcrumb
              items={[
                { label: "Shop", href: "/products" },
                { label: product.category, href: `/products/category/${product.categorySlug}` },
                { label: product.name },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── PRODUCT CORE ── */}
      <section className="pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Visual Column */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square bg-white flex items-center justify-center p-12 md:p-24 overflow-hidden"
              >
                <div className="relative z-10 w-full h-full opacity-5 flex flex-col items-center justify-center border border-brand-dark">
                   <div className="w-1/3 h-1/3 border border-brand-dark rotate-45" />
                </div>
                <div className="absolute top-0 right-0 bg-brand-crimson text-white font-sans text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-2.5">
                   Refined {product.category}
                </div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                   <span className="eyebrow shadow-none m-0 uppercase tracking-[0.2em]">{product.category}</span>
                   {product.bestseller && (
                     <span className="text-[10px] font-bold text-brand-crimson uppercase tracking-widest bg-brand-crimson/5 px-3 py-1">
                        Bestseller
                     </span>
                   )}
                </div>

                <h1 className="display-title mb-6 !text-[32px] md:!text-[48px]">
                  {product.name}
                </h1>

                <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-relaxed font-medium mb-10">
                  {product.description}
                </p>

                {/* Pack Size Selector */}
                <div className="mb-12">
                  <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest mb-6 block">Select Pack Size</span>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {product.weightOptions.map((opt) => (
                      <button
                        key={opt.weight}
                        className="group flex flex-col items-center justify-center py-5 border border-brand-border/20 bg-white hover:border-brand-crimson transition-all duration-300"
                      >
                        <span className="text-[11px] font-bold text-brand-dark/40 uppercase mb-2 group-hover:text-brand-crimson transition-colors">
                          {opt.weight}
                        </span>
                        <span className="font-sans text-[16px] font-bold text-brand-dark lining-nums">
                          {formatPrice(opt.price)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="flex flex-col gap-4 mb-14">
                   <button className="btn-commerce btn-primary !py-5 w-full !text-[14px]">
                      Add to Shopping Cart
                   </button>
                   <a 
                     href={`https://wa.me/91${product.name}?text=${encodeURIComponent(`Hi, I'd like to order ${product.name}`)}`}
                     className="btn-commerce border border-brand-border/20 w-full flex items-center justify-center gap-2 hover:bg-white transition-colors"
                   >
                     Order via WhatsApp
                   </a>
                </div>

                {/* Specs */}
                <div className="space-y-6 pt-10 border-t border-brand-border/10">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] mb-2">Ingredients</span>
                      <p className="font-sans text-[14px] text-brand-dark font-medium leading-relaxed">
                        {product.ingredients}
                      </p>
                   </div>
                   <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col">
                         <span className="text-[9px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] mb-1">Shelf Life</span>
                         <span className="font-sans text-[14px] font-bold text-brand-dark">{product.shelfLife}</span>
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[9px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] mb-1">Dietary</span>
                         <div className="flex gap-2">
                           {product.tags.map(tag => (
                             <span key={tag} className="text-[10px] font-bold text-brand-dark/60">{tag}</span>
                           ))}
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <section className="section-spacing bg-white">
          <div className="container-wide">
            <h2 className="section-title mb-12 md:mb-20">You Might Also Like</h2>
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </main>
  );
}

