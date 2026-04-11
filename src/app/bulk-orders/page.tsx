"use client";

import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";
import BilingualSEO from "@/components/common/BilingualSEO";

const steps = [
  { step: "01", title: "Contact Us", desc: "Share your requirements via WhatsApp—quantities, items, and event date." },
  { step: "02", title: "Get a Quote", desc: "We'll provide a custom quote with bulk pricing and delivery options." },
  { step: "03", title: "Fresh Preparation", desc: "Your order is prepared fresh specially for your dispatch date." },
  { step: "04", title: "Scheduled Delivery", desc: "Carefully packed in bulk cartons or individual gift boxes and delivered on time." },
];

export default function BulkOrdersPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <BilingualSEO pageKey="bulkOrders" />
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="container-wide">
          <div className="mb-0 opacity-50">
            <Breadcrumb items={[{ label: "Wholesale" }, { label: "Bulk Orders" }]} />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow shadow-none mb-6">Wholesale & Events</span>
              <h1 className="display-title mb-8">
                Ordering in Bulk? <br className="hidden md:block" />
                <span className="text-brand-crimson">We&apos;ve Got You Covered.</span>
              </h1>
              <p className="font-sans text-[18px] md:text-[20px] text-brand-dark/70 leading-relaxed font-medium mb-12">
                Whether it&apos;s a grand Indian wedding, corporate Diwali gifting, or retail restock, we scale our kitchen to meet your needs without ever compromising on quality.
              </p>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hi! I'd like to enquire about a bulk order.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-commerce btn-whatsapp !py-4 !px-10 !text-[14px]"
              >
                Discuss Bulk Order
              </a>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-px bg-brand-border/10">
              {[
                { label: "Weddings", sub: "Celebration Packs" },
                { label: "Corporate", sub: "Client Gifting" },
                { label: "Festivals", sub: "Seasonal Bulk" },
                { label: "Retail", sub: "Restock Supply" },
              ].map((item) => (
                <div key={item.label} className="bg-white p-8 md:p-12 flex flex-col justify-center gap-2 aspect-square group hover:bg-[#FAF9F6] transition-colors">
                  <span className="font-sans text-[12px] font-bold text-brand-dark/30 uppercase tracking-widest">{item.sub}</span>
                  <span className="card-title text-[20px] md:text-[24px] uppercase tracking-tight group-hover:text-brand-crimson transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-spacing bg-white border-y border-brand-border/5">
        <div className="container-wide">
          <div className="text-center mb-16 md:mb-24">
            <span className="eyebrow mx-auto shadow-none">The Process</span>
            <h2 className="section-title">How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border/10">
            {steps.map((s) => (
              <div key={s.step} className="bg-white p-8 md:p-12 transition-all hover:bg-[#FAF9F6]">
                <div className="text-[12px] font-black text-brand-crimson mb-8 tracking-[0.2em]">{s.step}</div>
                <h3 className="card-title mb-4 uppercase tracking-tight">{s.title}</h3>
                <p className="font-sans text-[14px] text-brand-dark/85 font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="section-spacing bg-[#FAF9F6]">
        <div className="container-wide">
          <div className="max-w-[800px] mx-auto text-center mb-16 md:mb-24">
             <h2 className="section-title">Send a Bulk Inquiry</h2>
             <p className="font-sans text-[16px] text-brand-dark/85 font-medium mt-4">
                Fill the details below and we will get back to you with a custom quote on WhatsApp.
             </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-14 border border-brand-border/10 rounded-sm"
            >
              <form className="space-y-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Your Name</label>
                  <input type="text" className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson" placeholder="Enter name" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Phone Number</label>
                    <input type="tel" className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">City</label>
                    <input type="text" className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson" placeholder="Enter city" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Your Requirement (Items / Quantity)</label>
                  <textarea rows={3} className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson resize-none" placeholder="e.g. 50kg Indori Sev for wedding on 25th Dec" />
                </div>

                <button type="submit" className="btn-commerce btn-primary !py-5 w-full uppercase tracking-widest">
                  Send Inquiry on WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

