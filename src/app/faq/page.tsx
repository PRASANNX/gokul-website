"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import BilingualSEO from "@/components/common/BilingualSEO";

const faqs = [
  {
    q: "What kind of ingredients do you use?",
    a: "We use only the highest quality, premium ingredients sourced daily. Our recipes are completely free from refined oils, dalda, and hydrogenated fats, ensuring a rich and authentic taste.",
  },
  {
    q: "Do you add preservatives or artificial colours?",
    a: "No. We use no artificial preservatives, colours, or flavour enhancers of any kind. Our products are as natural as home-cooked food.",
  },
  {
    q: "How long do your products stay fresh?",
    a: "Namkeen items stay fresh for 25–45 days when stored in a cool, dry place in an airtight container. Sweets like ladoo and barfi are best consumed within 7–15 days.",
  },
  {
    q: "Do you ship outside Indore?",
    a: "Yes! We ship PAN-India. For orders outside Indore, please WhatsApp us with your location and required products for shipping charges and timeline.",
  },
  {
    q: "Can I place a bulk order for an event or wedding?",
    a: "Yes, we specialise in bulk orders. Visit our Bulk Orders page and fill in your requirements, or simply WhatsApp us to discuss quantities, pricing, and delivery.",
  },
  {
    q: "How do I place an order?",
    a: "The easiest way is to click the 'Order on WhatsApp' button on any product page or contact us directly at the number listed. We process orders daily.",
  },
];

export default function FAQPage() {
  const { messages } = useLanguage();

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <BilingualSEO pageKey="faq" />
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 border-b border-brand-border/5">
        <div className="container-wide">
          <div className="mb-0 opacity-50">
            <Breadcrumb items={[{ label: messages.nav.support }, { label: messages.faq.title }]} />
          </div>
          
          <div className="max-w-[700px] mt-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="display-title mb-6">
                {messages.faq.title}
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-relaxed font-medium">
                {messages.faq.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="section-spacing pt-16 md:pt-24">
        <div className="container-wide max-w-[900px] mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <details className="group bg-white border border-brand-border/10 rounded-sm overflow-hidden transition-all duration-300">
                  <summary className="flex items-center justify-between gap-6 p-6 md:p-8 cursor-pointer list-none">
                    <span className="font-sans text-[16px] md:text-[18px] font-extrabold text-brand-dark group-hover:text-brand-crimson transition-colors uppercase tracking-tight">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-brand-border/10 flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform duration-500">
                       <svg className="w-4 h-4 text-brand-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                       </svg>
                    </div>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 pt-0 font-sans text-[15px] md:text-[16px] text-brand-dark/85 font-medium leading-[1.8] max-w-[700px]">
                    {faq.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
