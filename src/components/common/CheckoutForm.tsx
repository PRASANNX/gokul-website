"use client";

import React, { useState } from "react";
import { UserContactDetails } from "@/lib/whatsapp";

interface CheckoutFormProps {
  onSubmit: (details: UserContactDetails) => void;
  onCancel: () => void;
  submitLabel?: string;
}

export default function CheckoutForm({ onSubmit, onCancel, submitLabel = "Confirm & Send to WhatsApp" }: CheckoutFormProps) {
  const [data, setData] = useState<UserContactDetails>({
    name: "",
    phone: "",
    location: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4 border-t border-brand-border/10">
      <div className="flex flex-col gap-2 text-left">
        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Your Name</label>
        <input 
          type="text" 
          name="name"
          value={data.name}
          onChange={handleInputChange}
          required
          placeholder="e.g. Rahul Sharma"
          className="bg-[#FAF9F6] border-none py-3 px-4 font-sans text-[14px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson"
        />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Phone Number</label>
        <input 
          type="tel" 
          name="phone"
          value={data.phone}
          onChange={handleInputChange}
          required
          placeholder="+91 98765 43210"
          className="bg-[#FAF9F6] border-none py-3 px-4 font-sans text-[14px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson"
        />
      </div>
      <div className="flex flex-col gap-2 text-left">
        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/70">Delivery City / Area</label>
        <input 
          type="text" 
          name="location"
          value={data.location}
          onChange={handleInputChange}
          required
          placeholder="e.g. Vijay Nagar, Indore"
          className="bg-[#FAF9F6] border-none py-3 px-4 font-sans text-[14px] font-bold text-brand-dark focus:ring-1 focus:ring-brand-crimson"
        />
      </div>
      <button 
        type="submit"
        className="btn-commerce btn-whatsapp w-full !py-4 flex items-center justify-center gap-2 mt-4 shadow-lg hover:-translate-y-0.5 transition-all"
      >
        {submitLabel}
      </button>
      <button 
        type="button"
        onClick={onCancel}
        className="w-full text-[11px] font-bold uppercase tracking-widest text-brand-dark/50 hover:text-brand-crimson transition-colors"
      >
        Back
      </button>
    </form>
  );
}
