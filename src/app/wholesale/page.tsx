"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import BilingualSEO from "@/components/common/BilingualSEO";
import Breadcrumb from "@/components/common/Breadcrumb";
import { SITE_CONFIG } from "@/lib/constants";

export default function WholesalePage() {
  const { messages, lang } = useLanguage();
  const wholesaleMessages = messages.wholesale;

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", city: "", message: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Construct WhatsApp Message
    const text = `*New Business/Wholesale Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*City:* ${formData.city}\n*Requirement:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodedText}`;
    
    // Open WhatsApp & Show Success
    window.open(whatsappUrl, '_blank');
    setFormStatus("success");
  };

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <BilingualSEO pageKey="home" />

      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 border-b border-brand-border/5">
        <div className="container-wide">
          <Breadcrumb items={[{ label: wholesaleMessages.pageTitle }]} />
          <h1 className="display-title mt-6 tracking-tighter">{wholesaleMessages.pageTitle}</h1>
          <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 mt-4 max-w-2xl font-medium leading-relaxed">
            {wholesaleMessages.pageSubtitle}
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* INQUIRY FORM */}
            <div className="bg-white border border-brand-border/10 p-8 md:p-12 shadow-sm">
              <h2 className="card-title text-[22px] mb-8 uppercase tracking-tight">
                {wholesaleMessages.businessFormTitle}
              </h2>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-100 p-8 text-center rounded-sm">
                  <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-sans text-[18px] font-bold text-brand-dark mb-2">Inquiry Received</h3>
                  <p className="font-sans text-[14px] text-brand-dark/85 font-medium">We will contact you on WhatsApp shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-bold text-brand-dark/70 uppercase tracking-widest leading-none">{lang === "hi" ? "आपका नाम" : "Name"}</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border border-brand-border/20 bg-[#FAF9F6] p-4 text-[14px] font-sans focus:outline-none focus:border-brand-crimson transition-colors" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[10px] font-bold text-brand-dark/70 uppercase tracking-widest leading-none">{lang === "hi" ? "फोन नंबर" : "Phone"}</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border border-brand-border/20 bg-[#FAF9F6] p-4 text-[14px] font-sans focus:outline-none focus:border-brand-crimson transition-colors" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="city" className="text-[10px] font-bold text-brand-dark/70 uppercase tracking-widest leading-none">{lang === "hi" ? "शहर" : "City"}</label>
                      <input 
                        type="text" 
                        id="city" 
                        required 
                        value={formData.city}
                        onChange={handleInputChange}
                        className="border border-brand-border/20 bg-[#FAF9F6] p-4 text-[14px] font-sans focus:outline-none focus:border-brand-crimson transition-colors" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-bold text-brand-dark/70 uppercase tracking-widest leading-none">{lang === "hi" ? "आपकी जरूरत (Quantity/Items)" : "Message (Quantity/Items)"}</label>
                    <textarea 
                      id="message" 
                      rows={3} 
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border border-brand-border/20 bg-[#FAF9F6] p-4 text-[14px] font-sans focus:outline-none focus:border-brand-crimson transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" disabled={formStatus === "submitting"} className="btn-commerce btn-primary w-full !py-5 shadow-md active:scale-[0.98] transition-all">
                    {formStatus === "submitting" ? "..." : wholesaleMessages.businessFormTitle}
                  </button>
                </form>
              )}

              <div className="mt-12 pt-10 border-t border-brand-border/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a 
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(lang === "hi" ? "नमस्ते, मुझे थोक रेट चाहिए।" : "Hello, I need wholesale rates.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-commerce btn-whatsapp flex items-center justify-center gap-3 !py-5 shadow-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                    {wholesaleMessages.btnCartonRate}
                  </a>
                  <a 
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="btn-commerce btn-secondary flex items-center justify-center gap-3 !py-5 border-brand-dark/10 shadow-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {wholesaleMessages.btnCall}
                  </a>
                </div>
              </div>
            </div>

            {/* TRUST & MOQ INFO */}
            <div className="space-y-12">
              
              <div>
                <h2 className="card-title text-[24px] mb-8 uppercase tracking-tight">{wholesaleMessages.trustTitle}</h2>
                <ul className="space-y-4">
                  {[
                    wholesaleMessages.trustDesc1,
                    wholesaleMessages.trustDesc2,
                    wholesaleMessages.trustDesc3
                  ].map((desc, i) => (
                    <li key={i} className="flex items-start gap-4 p-6 bg-white border border-brand-border/10 shadow-sm">
                      <svg className="w-6 h-6 text-brand-crimson shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-sans text-[16px] font-bold text-brand-dark uppercase tracking-tight">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="card-title text-[24px] mb-6 uppercase tracking-tight">{wholesaleMessages.moqTitle}</h2>
                <div className="bg-brand-crimson/5 border-l-4 border-brand-crimson p-8 shadow-sm">
                  <p className="font-sans text-[16px] text-brand-dark/70 font-medium leading-relaxed">
                    {wholesaleMessages.moqDesc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
