"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { messages } = useLanguage();

  return (
    <section className="w-full bg-brand-dark section-spacing relative overflow-hidden">
      {/* Subtle branding layer */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center scale-150">
        <div className="w-[800px] h-[800px] border border-white rotate-45 rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-title !text-white mb-8">
              {messages.cta.title} <br className="hidden md:block" /> {messages.cta.titleLine2}
            </h2>

            <p className="font-sans text-[16px] md:text-[19px] text-white/70 leading-[1.6] mb-12 font-medium max-w-[640px] mx-auto">
              {messages.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
              <Link 
                href="/products" 
                className="btn-commerce btn-primary !bg-white !text-brand-dark hover:!bg-[#F5F5F5] w-full sm:w-auto"
              >
                {messages.cta.btnShop}
              </Link>
              
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-commerce btn-whatsapp w-full sm:w-auto"
              >
                {messages.cta.btnWhatsapp}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {[messages.cta.trust1, messages.cta.trust2, messages.cta.trust3].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-brand-crimson rotate-45" />
                  <span className="font-sans text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
