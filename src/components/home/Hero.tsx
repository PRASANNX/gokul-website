"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { messages } = useLanguage();

  return (
    <section className="relative w-full bg-white pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* ── TEXT CONTENT ── */}
          <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow !mb-6 !text-brand-crimson">
                {messages.hero.eyebrow}
              </span>

              {/* Tagline — Primary Visual Hierarchy */}
              <div className="mb-8 flex flex-col items-center lg:items-start gap-3">
                <p className="font-sans text-[22px] md:text-[30px] lg:text-[34px] font-extrabold text-brand-dark leading-tight tracking-tight">
                  &ldquo;{messages.hero.tagline}&rdquo;
                </p>
              </div>
              
              <h1 className="display-title mb-6">
                {messages.hero.title} <span className="text-brand-crimson">{messages.hero.titleHighlight}</span> <br className="hidden lg:block" /> 
                {messages.hero.titleEnd}
              </h1>

              <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/85 leading-relaxed max-w-[540px] mb-10 font-medium">
                {messages.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link 
                  href="/products" 
                  className="btn-commerce btn-primary w-full sm:w-auto !py-4.5 !px-12 !text-[15px] !tracking-[0.15em] shadow-xl hover:-translate-y-1 transition-transform"
                >
                  {messages.hero.btnShop}
                </Link>
                <Link 
                  href="/wholesale" 
                  className="btn-commerce btn-secondary w-full sm:w-auto border-brand-dark/10 !py-4.5 !px-10 hover:border-brand-dark"
                >
                  {messages.wholesale.pageTitle}
                </Link>
              </div>
              
              <div className="mt-10 flex items-center justify-center lg:justify-start">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-sans text-[12px] font-black uppercase tracking-widest text-[#25D366] hover:text-[#1ebe5d] transition-colors"
                >
                  <div className="bg-[#25D366]/10 p-2 rounded-full group-hover:bg-[#25D366]/20 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  {messages.hero.btnWhatsapp}
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── VISUAL BLOCK ── */}
          <div className="w-full lg:w-[45%] relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square bg-white border border-brand-border/20 rounded-[8px] overflow-hidden flex items-center justify-center group shadow-2xl shadow-brand-dark/5"
            >
              <Image 
                src="/images/banners/hero-banner.JPG" 
                alt="Gokul Heritage Premium Namkeen" 
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Floating Decorative Elements - Corners */}
              <div className="absolute top-0 right-0 p-12 translate-x-2 -translate-y-2 z-10">
                 <div className="w-20 h-20 border-t-2 border-r-2 border-brand-crimson/80" />
              </div>
              <div className="absolute bottom-0 left-0 p-12 -translate-x-2 translate-y-2 z-10">
                 <div className="w-20 h-20 border-b-2 border-l-2 border-brand-crimson/80" />
              </div>
            </motion.div>

            {/* Founder Label - Below Photo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-col items-center lg:items-end text-right"
            >
              <span className="font-sans text-[16px] md:text-[20px] font-black uppercase tracking-[0.15em] text-brand-dark">
                {messages.hero.founder}
              </span>
              <div className="w-12 h-0.5 bg-brand-crimson mt-2" />
            </motion.div>
            
            {/* Ambient Background Accents */}
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-brand-crimson/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute -top-16 -left-16 w-80 h-80 bg-brand-gold/5 rounded-full blur-[120px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
