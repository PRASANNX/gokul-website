"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import BilingualSEO from "@/components/common/BilingualSEO";
import Breadcrumb from "@/components/common/Breadcrumb";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";

export default function TrackOrderPage() {
  const { messages } = useLanguage();
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/track-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, phone })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to track");
      
      setResult(data);
    } catch (err: any) {
      setError(messages.trackOrder.noOrder);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <BilingualSEO pageKey="home" />

      <section className="pt-32 pb-12 border-b border-brand-border/5">
        <div className="container-wide">
          <Breadcrumb items={[{ label: messages.trackOrder.title }]} />
          <h1 className="display-title mt-6 !text-[32px] md:!text-[48px]">{messages.trackOrder.title}</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide max-w-xl mx-auto">
          <div className="bg-white border border-brand-border/10 p-8 md:p-12 shadow-sm">
            <p className="font-sans text-brand-dark/85 mb-8 font-medium">{messages.trackOrder.subtitle}</p>
            
            <form onSubmit={handleTrack} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-brand-dark/70 uppercase tracking-widest">{messages.trackOrder.orderIdLabel}</label>
                <input 
                  type="text" 
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="border border-brand-border/20 bg-[#FAF9F6] p-4 text-[14px] focus:outline-none focus:border-brand-crimson transition-colors w-full uppercase" 
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-brand-dark/70 uppercase tracking-widest">{messages.trackOrder.phoneLabel}</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border border-brand-border/20 bg-[#FAF9F6] p-4 text-[14px] focus:outline-none focus:border-brand-crimson transition-colors w-full" 
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-commerce btn-primary w-full !py-4 disabled:opacity-50"
              >
                {loading ? "..." : messages.trackOrder.btnTrack}
              </button>
            </form>

            {error && (
              <div className="mt-8 p-4 bg-brand-crimson/5 border border-brand-crimson/10 text-brand-crimson text-[12px] font-bold text-center">
                {error}
              </div>
            )}

            {result && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 pt-12 border-t border-brand-border/10 space-y-6"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest">{messages.trackOrder.status}</span>
                  <span className="font-sans text-[14px] font-black text-brand-crimson uppercase tracking-widest bg-brand-crimson/5 px-3 py-1">
                    {result.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest">Customer</span>
                  <span className="font-sans text-[14px] font-bold text-brand-dark">{result.customerName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest">Total</span>
                  <span className="font-sans text-[18px] font-black text-brand-dark">{formatPrice(result.total)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest">Ordered On</span>
                  <span className="font-sans text-[13px] text-brand-dark/85">{new Date(result.timestamp).toLocaleDateString()}</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
