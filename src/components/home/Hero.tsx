"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-[140px] pb-16 md:pt-[180px] md:pb-24 overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* ── TEXT CONTENT ── */}
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow !mb-4">
                The Authentic Taste of Indore
              </span>
              
              <h1 className="display-title mb-6">
                Premium Namkeen <span className="text-brand-crimson">&amp;</span> <br className="hidden md:block" /> 
                Traditional Sweets
              </h1>

              <p className="font-sans text-[16px] md:text-[19px] text-[#444] leading-[1.6] max-w-[580px] mb-10 font-medium">
                Handcrafted in pure desi ghee since 2000. Our timeless recipes bring the true, unchanged flavor of Indore to your home.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link 
                  href="/products" 
                  className="btn-commerce btn-primary w-full sm:w-auto"
                >
                  Shop Collection
                </Link>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-commerce btn-secondary w-full sm:w-auto"
                >
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── VISUAL BLOCK ── */}
          <div className="w-full lg:w-2/5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[4/5] md:aspect-square bg-[#F8F6F2] rounded-sm overflow-hidden flex items-center justify-center border border-brand-border/30"
            >
              {/* Subtle brand pattern or logo watermark here in future */}
              <div className="flex flex-col items-center justify-center opacity-20 scale-150">
                 <div className="w-[120px] h-[80px] border-2 border-brand-dark rounded-full mb-2" />
                 <span className="font-sans text-[9px] font-bold tracking-[0.3em] uppercase text-brand-dark">
                   Visual Asset
                 </span>
              </div>
            </motion.div>
            
            {/* Soft decorative element to break the rigidness */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-crimson/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-saffron/5 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}

