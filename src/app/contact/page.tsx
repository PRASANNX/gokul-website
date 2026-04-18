"use client";

import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import BilingualSEO from "@/components/common/BilingualSEO";
import { useState } from "react";

export default function ContactPage() {
  const { messages } = useLanguage();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*New Website Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodedText}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
                  { title: messages.contact.phoneLabel + " 2", detail: SITE_CONFIG.phoneSecondary, label: "Phone 2", href: `tel:${SITE_CONFIG.phoneSecondary}` },
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
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson" 
                        placeholder="Enter your name" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson" 
                        placeholder="+91 XXXXX XXXXX" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson" 
                      placeholder="you@example.com" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Your Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5} 
                      className="bg-[#FAF9F6] border-none py-4 px-5 font-sans text-[15px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson resize-none" 
                      placeholder="Tell us how we can help..." 
                    />
                  </div>

                  <button type="submit" className="btn-commerce btn-primary !py-4 w-full flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Send Inquiry on WhatsApp
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
