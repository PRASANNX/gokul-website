"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { messages } = useLanguage();

  const features = [
    {
      key: "ghee",
      title: messages.whyChooseUs.features.ghee.title,
      desc:  messages.whyChooseUs.features.ghee.desc,
      icon: (
        <svg className="w-10 h-10 text-brand-crimson mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2c-3.3 4.2-6 7.8-6 11 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.2-2.7-6.8-6-11zm0 15c-2.2 0-4-1.8-4-4 0-2.2 1.8-5 4-7.5 2.2 2.5 4 5.3 4 7.5 0 2.2-1.8 4-4 4z" />
        </svg>
      ),
    },
    {
      key: "preservatives",
      title: messages.whyChooseUs.features.preservatives.title,
      desc:  messages.whyChooseUs.features.preservatives.desc,
      icon: (
        <svg className="w-10 h-10 text-brand-crimson mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      key: "fresh",
      title: messages.whyChooseUs.features.fresh.title,
      desc:  messages.whyChooseUs.features.fresh.desc,
      icon: (
        <svg className="w-10 h-10 text-brand-crimson mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: "shipping",
      title: messages.whyChooseUs.features.shipping.title,
      desc:  messages.whyChooseUs.features.shipping.desc,
      icon: (
        <svg className="w-10 h-10 text-brand-crimson mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
  ];

  const stats = [
    { val: "20+",      label: messages.whyChooseUs.stats.years },
    { val: "500+",     label: messages.whyChooseUs.stats.products },
    { val: "10K+",     label: messages.whyChooseUs.stats.families },
    { val: "Pan-India",label: messages.whyChooseUs.stats.delivery },
  ];

  return (
    <section className="bg-brand-cream/20 section-spacing border-y border-brand-border/10">
      <div className="container-wide">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mx-auto">{messages.whyChooseUs.eyebrow}</span>
            <h2 className="section-title mb-4 !text-[36px] md:!text-[48px] tracking-tight">{messages.whyChooseUs.title}</h2>
            <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/85 font-medium max-w-[640px] mx-auto leading-relaxed">
              {messages.whyChooseUs.subtitle}
            </p>
          </motion.div>
        </div>

        {/* ── FEATURE GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white border border-brand-border/10 rounded-[4px] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 p-4 rounded-full bg-brand-crimson/5">
                {feature.icon}
              </div>
              <h3 className="card-title mb-3 uppercase tracking-tight text-[18px]">{feature.title}</h3>
              <p className="font-sans text-[14px] md:text-[15px] text-brand-dark/80 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── STATS STRIP ── */}
        <div className="mt-20 md:mt-24 pt-12 border-t border-brand-border/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="flex flex-col items-center"
              >
                <span className="font-sans text-[28px] md:text-[40px] font-black text-brand-dark leading-none mb-3 tracking-tighter lining-nums">
                  {stat.val}
                </span>
                <span className="font-sans text-[12px] font-black text-brand-dark/40 uppercase tracking-[0.2em] text-center px-4">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
