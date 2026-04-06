"use client";

import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";

const giftPacks = [
  {
    name: "Classic Hamper",
    contents: ["Indori Sev 200g", "Shahi Mixture 250g", "Rawa Ladoo 6 pcs"],
    price: "₹499",
    tag: "Signature",
  },
  {
    name: "Family Heritage",
    contents: ["Kaju Katli 250g", "Besan Barfi 250g", "Indori Sev 500g", "Shahi Mixture 500g"],
    price: "₹999",
    tag: "Popular",
  },
  {
    name: "Royal Celebration",
    contents: ["Kaju Katli 500g", "Rawa Ladoo 12 pcs", "Shahi Mixture 1kg", "Indori Sev 1kg", "Premium Dry Fruits"],
    price: "₹1,999",
    tag: "Deluxe",
  },
  {
    name: "Corporate Suite",
    contents: ["Curated selection", "Custom brand sleeve", "Minimum 25 boxes", "Pan-India delivery"],
    price: "Custom",
    tag: "Wholesale",
  },
];

export default function GiftPacksPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="container-wide">
          <div className="mb-0 opacity-50">
            <Breadcrumb items={[{ label: "Celebrate" }, { label: "Gift Packs" }]} />
          </div>
          
          <div className="max-w-[800px] mt-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow shadow-none mb-6">Indore&apos;s Gifting Heritage</span>
              <h1 className="display-title mb-8">
                Celebrate with <br className="hidden md:block" />
                <span className="text-brand-crimson">The Gokul Collection</span>
              </h1>
              <p className="font-sans text-[18px] md:text-[20px] text-brand-dark/70 leading-relaxed font-medium">
                Beautifully curated hampers featuring our finest, freshest namkeen and sweets. Perfect for festivals, weddings, and corporate gifting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GIFT CARDS ── */}
      <section className="section-spacing pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {giftPacks.map((pack, i) => (
              <motion.div
                key={pack.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-brand-border/10 p-8 md:p-10 flex flex-col hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-10">
                   <span className="text-[9px] font-black text-brand-crimson uppercase tracking-[0.2em]">
                     {pack.tag}
                   </span>
                   <div className="w-1.5 h-1.5 bg-brand-crimson rotate-45" />
                </div>
                
                <h3 className="card-title text-[20px] md:text-[24px] mb-8 uppercase tracking-tight group-hover:text-brand-crimson transition-colors">
                  {pack.name}
                </h3>
                
                <ul className="space-y-4 mb-12 flex-1">
                  {pack.contents.map((item) => (
                    <li key={item} className="font-sans text-[13px] font-medium text-brand-dark/60 flex items-center gap-3">
                      <span className="w-1 h-1 bg-brand-dark/20 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-8 border-t border-brand-border/10 mb-8">
                  <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest">
                    Estimate
                  </span>
                  <span className="font-sans text-[18px] font-extrabold text-brand-dark">
                    {pack.price}
                  </span>
                </div>
                
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in the ${pack.name} gift hamper.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-commerce btn-primary !py-4 w-full !text-[12px]"
                >
                  Request Quote
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM CTA ── */}
      <section className="section-spacing bg-brand-dark text-white text-center overflow-hidden relative">
         <div className="container-wide relative z-10 py-12 md:py-20">
            <span className="text-brand-crimson font-sans text-[11px] font-black uppercase tracking-[0.3em] mb-6 block">Bespoke Gifting</span>
            <h2 className="display-title text-white mb-8">Looking for Custom Gifting?</h2>
            <p className="font-sans text-[16px] md:text-[18px] text-white/60 mb-12 max-w-[600px] mx-auto font-medium leading-relaxed">
               We create entirely bespoke hampers for weddings and corporate milestones. Personalised sleeves, custom assortments, and premium boxes available.
            </p>
            <a
               href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hi! I'd like to discuss a custom gifting order.")}`}
               target="_blank"
               rel="noopener noreferrer"
               className="btn-commerce btn-primary !py-4 !px-12 !bg-white !text-brand-dark hover:!bg-[#FAF9F6] transition-colors"
            >
               Discuss Custom Requirements
            </a>
         </div>
         {/* Decorative accent */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-crimson/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </main>
  );
}

