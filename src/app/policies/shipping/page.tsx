"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";

export default function ShippingPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 border-b border-brand-border/5">
        <div className="container-wide">
          <div className="mb-0 opacity-50">
            <Breadcrumb items={[{ label: "Support" }, { label: "Shipping Policy" }]} />
          </div>
          
          <div className="max-w-[700px] mt-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="display-title mb-6">
                Shipping <br />
                <span className="text-brand-crimson">Policy</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-relaxed font-medium">
                How we ensure your fresh snacks reach you safely across Indore and PAN-India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="section-spacing pt-16 md:pt-24">
        <div className="container-wide max-w-[800px] mx-auto">
          <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-brand-dark/80 leading-[1.8] font-medium">
            <p>At Gokul Namkeen, we take immense pride in the freshness of our products. Our shipping policies are designed to ensure that the crunch and taste of Indore reach your doorstep in the shortest possible time.</p>
            
            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">Local Delivery (Indore)</h2>
              <p>For our patrons in Indore, we offer specialized local delivery. Orders placed before 12:00 PM are typically processed and delivered on the same business day. We maintain our own delivery team to ensure careful handling of fragile sweets and namkeen.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">PAN-India Shipping</h2>
              <p>We partner with premier courier services to deliver across India. National shipments typically arrive within 3–5 business days. Once your order is dispatched, you will receive tracking details via WhatsApp. Shipping fees are calculated based on weight and destination to provide you with the most economical rates.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">Quality Packaging</h2>
              <p>Every item is vacuum-packed in food-grade, airtight material to preserve shelf life and prevent moisture. For national shipping, we use reinforced corrugated boxes to prevent any breakage during transit.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">Damaged Shipments</h2>
              <p>In the rare event that your order arrives in an unsatisfactory condition, please notify us within 24 hours of delivery. Share a photograph of the packaging and product on our official WhatsApp number, and we will initiate a resolution immediately.</p>
            </div>

            <div className="pt-12 border-t border-brand-border/10">
               <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest">Last updated: April 2024</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

