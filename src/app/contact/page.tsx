"use client";

import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import BilingualSEO from "@/components/common/BilingualSEO";

export default function ContactPage() {
  const { messages } = useLanguage();

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <BilingualSEO pageKey="contact" />
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="container-wide">
          <div className="mb-8 opacity-50">
            <Breadcrumb items={[{ label: messages.nav.contact }]} />
          </div>
          
          <div className="max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="display-title mb-8">
                {messages.contact.title}
              </h1>
              <p className="font-sans text-[18px] md:text-[20px] text-brand-dark/70 leading-relaxed font-medium">
                {messages.contact.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="section-spacing pt-0">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            
            {/* Contact Details */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {[
                  { title: messages.contact.addressLabel, detail: SITE_CONFIG.address, label: "Address" },
                  { title: messages.contact.phoneLabel, detail: SITE_CONFIG.phone, label: "Phone", href: `tel:${SITE_CONFIG.phone}` },
                  { title: messages.contact.emailLabel, detail: SITE_CONFIG.email, label: "Email", href: `mailto:${SITE_CONFIG.email}` },
                ].map((c, i) => (
                  <motion.div 
                    key={c.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col"
                  >
                    <span className="text-[10px] font-bold text-brand-crimson uppercase tracking-[0.2em] mb-3">
                      {c.label}
                    </span>
                    <h3 className="card-title mb-3 uppercase tracking-tight">
                      {c.title}
                    </h3>
                    {c.href ? (
                      <a href={c.href} className="font-sans text-[16px] md:text-[18px] text-brand-dark font-bold hover:text-brand-crimson transition-colors lining-nums">
                        {c.detail}
                      </a>
                    ) : (
                      <p className="font-sans text-[16px] text-brand-dark/70 leading-relaxed font-medium">
                        {c.detail}
                      </p>
                    )}
                  </motion.div>
                ))}

                <div className="pt-8 border-t border-brand-border/10">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-commerce btn-whatsapp w-full sm:w-auto"
                  >
                    {messages.contact.whatsappLabel}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 md:p-12 border border-brand-border/10 rounded-sm"
              >
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Full Name</label>
                      <input type="text" className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Phone Number</label>
                      <input type="tel" className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Email Address</label>
                    <input type="email" className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson" placeholder="you@example.com" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Your Message</label>
                    <textarea rows={5} className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson resize-none" placeholder="Tell us how we can help..." />
                  </div>

                  <button type="submit" className="btn-commerce btn-primary !py-4 w-full">
                    Send Inquiry
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
