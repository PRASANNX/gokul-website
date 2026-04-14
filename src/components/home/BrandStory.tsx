"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function BrandStory() {
  const { messages } = useLanguage();

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
              className="relative w-full aspect-[4/3] bg-[#F9F7F4] overflow-hidden"
            >
              <Image 
                src="/images/process/process-1.png" 
                alt="Gokul Heritage Craftsmanship" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-brand-dark/10" />
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
            <span className="eyebrow">{messages.brandStory.eyebrow}</span>
            <h2 className="section-title mb-8 !text-[32px] md:!text-[44px] tracking-tight">{messages.brandStory.title}</h2>

            <div className="space-y-6 font-sans text-[16px] md:text-[17px] text-brand-dark/85 leading-relaxed mb-10 font-medium">
              <p>{messages.brandStory.para1}</p>
              <p>{messages.brandStory.para2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {messages.brandStory.points.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-3 font-sans text-[12px] font-black text-brand-dark uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-brand-crimson rotate-45 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="btn-commerce btn-primary !py-4 !px-10 !text-[13px] !tracking-[0.15em]"
              >
                {messages.brandStory.btnStory}
              </Link>
              <Link 
                href="/process" 
                className="btn-commerce btn-secondary !py-4 !px-10 !text-[13px] !tracking-[0.15em] border-brand-dark/15"
              >
                Watch Our Process
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
