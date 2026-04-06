"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Pure Desi Ghee",
    desc: "Handcrafted authenticity in every bite.",
    icon: (
      <svg className="w-10 h-10 text-brand-crimson mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2c-3.3 4.2-6 7.8-6 11 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.2-2.7-6.8-6-11zm0 15c-2.2 0-4-1.8-4-4 0-2.2 1.8-5 4-7.5 2.2 2.5 4 5.3 4 7.5 0 2.2-1.8 4-4 4z" />
      </svg>
    )
  },
  {
    title: "No Preservatives",
    desc: "100% natural ingredients, zero additives.",
    icon: (
      <svg className="w-10 h-10 text-brand-crimson mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Freshly Made",
    desc: "Batches prepared daily for peak freshness.",
    icon: (
      <svg className="w-10 h-10 text-brand-crimson mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Pan-India Shipping",
    desc: "Delivering Indori taste to your doorstep.",
    icon: (
      <svg className="w-10 h-10 text-brand-crimson mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FAF9F6] section-spacing">
      <div className="container-wide">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mx-auto shadow-none">The Gokul Promise</span>
            <h2 className="section-title mb-4">Why Customers Trust Us</h2>
            <p className="font-sans text-[16px] text-[#555] font-medium max-w-[600px] mx-auto leading-relaxed">
              For over two decades, we have been Indore&apos;s preferred choice for authentic snacking, centered on purity and traditional craftsmanship.
            </p>
          </motion.div>
        </div>

        {/* ── FEATURE GRID ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {feature.icon}
              <h3 className="card-title mb-2 uppercase tracking-tight">{feature.title}</h3>
              <p className="font-sans text-[14px] text-brand-dark/60 font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── STATS STRIP ── */}
        <div className="mt-20 md:mt-32 pt-12 border-t border-brand-border/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "20+", label: "Years of Legacy" },
              { val: "500+", label: "Product Varieties" },
              { val: "10K+", label: "Happy Households" },
              { val: "Pan-India", label: "Fast Delivery" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="flex flex-col items-center"
              >
                <span className="font-sans text-[24px] md:text-[32px] font-extrabold text-brand-dark leading-none mb-2">
                  {stat.val}
                </span>
                <span className="font-sans text-[11px] font-bold text-brand-dark/40 uppercase tracking-widest text-center">
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

