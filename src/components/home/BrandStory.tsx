"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="bg-white section-spacing overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* ── IMAGE CONTENT ── */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/3] bg-[#F9F7F4] overflow-hidden flex items-center justify-center p-8"
            >
              <div className="flex flex-col items-center opacity-10 scale-150">
                 <div className="w-[100px] h-[100px] border border-brand-dark rotate-45 mb-4" />
                 <span className="font-sans text-[8px] font-bold tracking-[0.4em] uppercase text-brand-dark">Heritage Visual</span>
              </div>
            </motion.div>
            
            {/* Soft commercial accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-saffron/20 hidden md:block" />
          </div>

          {/* ── TEXT CONTENT ── */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <span className="eyebrow">Our Indore Heritage</span>
            <h2 className="section-title mb-8">A Legacy of Taste Since 2000</h2>

            <div className="space-y-6 font-sans text-[16px] text-brand-dark/70 leading-[1.7] mb-10 font-medium">
              <p>
                Gokul ke Shahi Namkeen was born in the heart of Indore. What started as a small family kitchen in 2000 has grown into one of the city&apos;s most trusted destinations for authentic namkeen and traditional sweets.
              </p>
              <p>
                Every batch is made with pure desi cow ghee, honoring the recipes passed down through generations. We believe in quality you can taste and traditions you can trust.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Family-run for 20+ years",
                "FSSAI certified master kitchen",
                "Authentic Indori recipes",
                "Pan-India doorstep delivery"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-sans text-[13px] text-brand-dark font-bold uppercase tracking-tight">
                  <div className="w-1.5 h-1.5 bg-brand-crimson rotate-45 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <Link 
              href="/about" 
              className="btn-commerce btn-secondary !py-3.5 !px-10"
            >
              Our Full Story
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

