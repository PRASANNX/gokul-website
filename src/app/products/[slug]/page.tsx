"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGrid from "@/components/products/ProductGrid";
import { motion } from "framer-motion";
import { use } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/lib/constants";
import { bLang } from "@/lib/language-utils";
import BilingualSEO from "@/components/common/BilingualSEO";
import { getSingleProductCheckoutUrl, getWholesaleCheckoutUrl } from "@/lib/whatsapp";
import { useState } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: Props) {
  const { slug } = use(params);
  const { messages, lang } = useLanguage();
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // States
  const [selectedWeight, setSelectedWeight] = useState(product.weightOptions[0]);
  const [quantity, setQuantity] = useState(1);

  const related = getRelatedProducts(product, 4);

  return (
    <main className="bg-white min-h-screen">
      <BilingualSEO pageKey="products" />
      
      {/* ── BREADCRUMB ── */}
      <section className="pt-24 pb-6 md:pt-32">
        <div className="container-wide">
          <div className="opacity-40">
            <Breadcrumb
              items={[
                { label: messages.breadcrumb.shop, href: "/products" },
                { label: bLang(product.category, lang), href: `/products/category/${product.categorySlug}` },
                { label: bLang(product.name, lang) },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── PRODUCT CORE ── */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">
            
            {/* Visual Column */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square bg-white border border-brand-border/10 overflow-hidden flex items-center justify-center lg:sticky lg:top-32"
            >
              {/* Product Image */}
              {product.images[0] && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={product.images[0]}
                    alt={bLang(product.name, lang)}
                    fill
                    priority
                    className="object-contain p-4 md:p-8"
                  />
                </div>
              )}

              {/* Refined Heritage Visual overlay (subtle) */}
              <div className="absolute inset-0 z-10 flex items-center justify-center p-8 pointer-events-none opacity-5 hover:opacity-10 transition-opacity">
                <div className="relative w-full h-full border border-brand-dark/5 rotate-45 flex items-center justify-center">
                  <div className="w-full h-px bg-brand-dark/5 absolute" />
                  <div className="h-full w-px bg-brand-dark/5 absolute" />
                </div>
              </div>

              {product.bestseller && (
                <div className="absolute top-0 right-0 bg-brand-crimson text-brand-dark font-sans text-[11px] font-black tracking-[0.2em] uppercase px-6 py-3 shadow-sm z-20">
                  {messages.product.bestseller}
                </div>
              )}
            </motion.div>

            {/* Content Column */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* 1. Title */}
                <h1 className="font-sans text-[32px] md:text-[46px] lg:text-[54px] font-black text-brand-dark leading-[1.1] tracking-tight mb-4 uppercase">
                  {bLang(product.name, lang)}
                </h1>

                {/* 2. Price Block */}
                <div className="flex items-end gap-4 mb-6">
                  <span className="font-sans text-[28px] md:text-[34px] font-black text-brand-crimson lining-nums tracking-tighter leading-none">
                    {formatPrice(selectedWeight.price)}
                  </span>
                  <span className="text-[14px] font-black text-brand-dark/40 uppercase tracking-widest bg-brand-cream px-2 py-1 rounded-[2px] leading-none mb-1">
                    {selectedWeight.weight}
                  </span>
                </div>

                {/* 3. Short Description */}
                <p className="font-sans text-[16px] md:text-[17px] text-brand-dark/70 leading-relaxed font-medium mb-10 max-w-[500px]">
                  {bLang(product.description, lang)}
                </p>

                {/* 5. Selectors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {/* Pack Size */}
                  <div>
                    <label className="text-[11px] font-black text-brand-dark uppercase tracking-widest mb-4 block opacity-40">
                      {messages.product.selectPackSize}
                    </label>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {product.weightOptions.map((opt) => {
                        const isSelected = selectedWeight.weight === opt.weight;
                        return (
                          <button
                            key={opt.weight}
                            onClick={() => setSelectedWeight(opt)}
                            className={`px-4 md:px-6 py-3 border-2 font-sans text-[13px] md:text-[14px] font-black tracking-tight transition-all rounded-[4px] min-w-[80px] ${
                              isSelected 
                                ? "border-brand-dark bg-brand-dark text-brand-cream shadow-md -translate-y-[1px]" 
                                : "border-brand-border/20 bg-white text-brand-dark hover:border-brand-dark/50 hover:-translate-y-[1px]"
                            }`}
                          >
                            {opt.weight}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="text-[11px] font-black text-brand-dark uppercase tracking-widest mb-4 block opacity-40">
                      Select Quantity
                    </label>
                    <div className="flex items-center bg-brand-cream/30 w-fit rounded-[4px] p-1 border border-brand-border/20">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-12 flex items-center justify-center text-brand-dark/70 hover:bg-white hover:text-brand-dark hover:shadow-sm rounded-sm transition-all"
                        aria-label={messages.product.decreaseQty}
                        title={messages.product.decreaseQty}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4"/></svg>
                      </button>
                      <span className="w-16 text-center font-sans text-[18px] font-black text-brand-dark lining-nums select-none">
                        {quantity}
                      </span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-12 flex items-center justify-center text-brand-dark/70 hover:bg-white hover:text-brand-dark hover:shadow-sm rounded-sm transition-all"
                        aria-label={messages.product.increaseQty}
                        title={messages.product.increaseQty}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/></svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 6. Action Block (HIERARCHY) */}
                <div className="space-y-4 max-w-[420px]">
                  {/* Primary WhatsApp Action */}
                  <div className="grid grid-cols-1 gap-3">
                    <a 
                      href={getSingleProductCheckoutUrl(product.name, selectedWeight.weight, selectedWeight.price, quantity, lang)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-commerce btn-whatsapp !py-5 w-full !text-[15px] !tracking-[0.1em] shadow-xl hover:-translate-y-1 transition-transform flex items-center justify-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      Buy on WhatsApp
                    </a>
                  </div>

                  {/* Wholesale Separated */}
                  <div className="mt-2 pt-4 border-t border-brand-border/10">
                    <a 
                      href={getWholesaleCheckoutUrl(product.name, lang)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[11px] font-black uppercase tracking-widest text-brand-dark/50 hover:text-brand-crimson transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                      Business Inquiry & Wholesale Price
                    </a>
                  </div>
                </div>

                <div className="subtle-divider mt-12 mb-8" />

                {/* 7. Specs Accordion/List */}
                <div className="space-y-8">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black text-brand-dark uppercase tracking-widest mb-3 opacity-40">
                      {messages.product.ingredients}
                    </span>
                    <p className="font-sans text-[15px] text-brand-dark/85 font-medium leading-relaxed">
                      {product.ingredients}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-brand-dark uppercase tracking-widest mb-3 opacity-40">
                        {messages.product.shelfLife}
                      </span>
                      <span className="font-sans text-[15px] font-black text-brand-dark">{product.shelfLife}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-brand-dark uppercase tracking-widest mb-3 opacity-40">
                        {messages.product.dietary}
                      </span>
                      <div className="flex gap-2 flex-wrap">
                        {product.tags.map(tag => (
                          <span key={tag} className="text-[11px] font-black text-brand-dark/70 bg-brand-cream/50 px-3 py-1 rounded-[2px] border border-brand-border/10">{tag}</span>
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
        <section className="section-spacing bg-brand-cream/30 border-t border-brand-border/10">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-12 md:mb-16">
               <h2 className="section-title !text-[28px] md:!text-[36px] tracking-tight uppercase">{messages.product.relatedTitle}</h2>
               <Link href="/products" className="font-sans text-[12px] font-black uppercase tracking-widest text-brand-crimson underline underline-offset-8 decoration-brand-crimson/20 hover:decoration-brand-crimson transition-all">{messages.common.viewAll}</Link>
            </div>
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </main>
  );
}
