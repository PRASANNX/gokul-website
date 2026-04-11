"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { formatPrice } from "@/lib/utils";
import { bLang } from "@/lib/language-utils";
import { generateOrderId } from "@/lib/order-utils";
import { SITE_CONFIG } from "@/lib/constants";
import BilingualSEO from "@/components/common/BilingualSEO";
import Breadcrumb from "@/components/common/Breadcrumb";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const { items, cartTotal, isClient, clearCart } = useCart();
  const { lang, messages } = useLanguage();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    address: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"ONLINE" | "COD">("ONLINE");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Redirect if cart is empty
  useEffect(() => {
    if (mounted && isClient && items.length === 0) {
      router.replace("/products");
    }
  }, [items, isClient, mounted, router]);

  // Loading state to prevent hydration flicker
  if (!mounted || !isClient) {
    return (
      <div className="min-h-screen bg-white pt-32">
        <div className="container-wide">
          <div className="h-6 w-32 bg-brand-cream animate-pulse rounded-full mb-8" />
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 h-[500px] bg-brand-cream animate-pulse rounded-sm" />
            <div className="lg:col-span-4 h-64 bg-brand-cream animate-pulse rounded-sm" />
          </div>
        </div>
      </div>
    );
  }

  // Prevent rendering if cart is empty before redirect
  if (items.length === 0) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.phone || !formData.city || !formData.address || !formData.pincode) {
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      return false;
    }
    return true;
  };

  const saveOrder = async (orderId: string, razorpayData?: { paymentId: string, orderId: string, signature: string }) => {
    const orderData = {
      orderId,
      customer: formData,
      items: items.map(item => ({
        id: item.id,
        name: bLang(item.productName, lang),
        weight: item.selectedWeight,
        price: item.price,
        quantity: item.quantity,
        total: item.price * item.quantity
      })),
      total: cartTotal,
      paymentMethod,
      razorpayPaymentId: razorpayData?.paymentId,
      razorpayOrderId: razorpayData?.orderId,
      razorpaySignature: razorpayData?.signature,
      timestamp: new Date().toISOString()
    };

    const response = await fetch("/api/save-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to save order");
    }
    
    clearCart();
    router.push(`/order-success?orderId=${orderId}`);
  };

  const canPlaceOrder = cartTotal >= (SITE_CONFIG.minOrderValue || 0);
  const isCodAllowed = cartTotal <= (SITE_CONFIG.maxCodValue || 5000);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) return;
    setError("");

    if (!canPlaceOrder) {
      setError(`${messages.checkout.minOrderError}${SITE_CONFIG.minOrderValue}`);
      return;
    }

    if (paymentMethod === "COD" && !isCodAllowed) {
      setError(`${messages.checkout.maxCodError}${SITE_CONFIG.maxCodValue}`);
      return;
    }

    if (!validateForm()) {
      setError(messages.checkout.validationError);
      return;
    }

    setIsProcessing(true);

    try {
      const orderId = generateOrderId();

      if (paymentMethod === "COD") {
        await saveOrder(orderId);
      } else {
        const res = await fetch("/api/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: cartTotal,
            receipt: orderId
          })
        });

        const razorpayOrder = await res.json();
        if (razorpayOrder.error) throw new Error(razorpayOrder.error);

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
          amount: razorpayOrder.amount,
          currency: razorpayOrder.currency,
          name: SITE_CONFIG.name,
          description: "Premium Namkeen & Sweets",
          order_id: razorpayOrder.id,
          handler: async function (response: any) {
            try {
              await saveOrder(orderId, {
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature
              });
            } catch (err: any) {
              console.error("Success handler error:", err);
              setError(err.message || "Payment verified but order logging failed. Please contact support.");
              setIsProcessing(false);
            }
          },
          prefill: {
            name: formData.fullName,
            contact: formData.phone
          },
          theme: { color: "#FACC15" }, // Matching yellow brand
          modal: {
            ondismiss: function() {
              setIsProcessing(false);
            }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Payment system unavailable. Please try Cash on Delivery.");
      setIsProcessing(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <BilingualSEO pageKey="home" />
      
      {/* ── HEADER ── */}
      <section className="pt-24 pb-12 md:pb-16 bg-brand-cream/30 border-b border-brand-border/10">
        <div className="container-wide">
          <div className="opacity-40">
            <Breadcrumb items={[{ label: messages.checkout.title }]} />
          </div>
          <h1 className="display-title mt-6 !text-[36px] md:!text-[56px] tracking-tight">{messages.checkout.title}</h1>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container-wide">
          <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-12 gap-14 lg:gap-14 items-start">
            
            {/* LEFT: FORM ORGANIZATION */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-12">
              
              {/* 1. Customer Details Group */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-sans text-[14px] font-black">1</span>
                  <h2 className="card-title text-[18px] md:text-[22px] uppercase tracking-tight">{messages.checkout.customerDetails}</h2>
                </div>

                <div className="grid gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-black text-brand-dark/40 uppercase tracking-widest">{messages.checkout.fullName}</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required 
                      className="border border-brand-border/30 bg-brand-cream/20 p-4.5 text-[15px] font-sans focus:outline-none focus:border-brand-dark transition-all rounded-[4px]" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-black text-brand-dark/40 uppercase tracking-widest flex justify-between">
                         {messages.checkout.phone} 
                         <span className="text-[10px] lowercase font-medium italic opacity-50">(10 digits)</span>
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        maxLength={10}
                        placeholder="e.g. 9876543210"
                        required 
                        className="border border-brand-border/30 bg-brand-cream/20 p-4.5 text-[15px] font-sans focus:outline-none focus:border-brand-dark transition-all rounded-[4px] lining-nums" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-black text-brand-dark/40 uppercase tracking-widest">{messages.checkout.city}</label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City name"
                        required 
                        className="border border-brand-border/30 bg-brand-cream/20 p-4.5 text-[15px] font-sans focus:outline-none focus:border-brand-dark transition-all rounded-[4px]" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] font-black text-brand-dark/40 uppercase tracking-widest">{messages.checkout.address}</label>
                    <textarea 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House No, Street, Landmark..."
                      required 
                      rows={3}
                      className="border border-brand-border/30 bg-brand-cream/20 p-4.5 text-[15px] font-sans focus:outline-none focus:border-brand-dark transition-all rounded-[4px] resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2 max-w-[200px]">
                    <label className="text-[11px] font-black text-brand-dark/40 uppercase tracking-widest">{messages.checkout.pincode}</label>
                    <input 
                      type="text" 
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="6 digits"
                      maxLength={6}
                      required 
                      className="border border-brand-border/30 bg-brand-cream/20 p-4.5 text-[15px] font-sans focus:outline-none focus:border-brand-dark transition-all rounded-[4px] lining-nums" 
                    />
                  </div>
                </div>
              </div>

              {/* 2. Payment Method Group */}
              <div className="space-y-8 pt-12 border-t border-brand-border/10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-sans text-[14px] font-black">2</span>
                  <h2 className="card-title text-[18px] md:text-[22px] uppercase tracking-tight">{messages.checkout.paymentMethod}</h2>
                </div>

                <div className="grid gap-4">
                  <div
                    onClick={() => setPaymentMethod("ONLINE")}
                    className={`flex items-start gap-4 p-6 border-2 cursor-pointer transition-all rounded-[8px] ${paymentMethod === "ONLINE" ? "bg-brand-crimson/5 border-brand-dark shadow-lg translate-y-[-2px]" : "bg-white border-brand-border/20 opacity-60 hover:opacity-100 hover:border-brand-border/40"}`}
                  >
                    <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "ONLINE" ? "border-brand-dark" : "border-brand-border"}`}>
                      {paymentMethod === "ONLINE" && <div className="w-2.5 h-2.5 bg-brand-dark rounded-full" />}
                    </div>
                    <div className="flex-1">
                      <span className="font-sans text-[15px] font-black text-brand-dark uppercase tracking-tight block mb-1">{messages.checkout.onlinePayment}</span>
                      <p className="text-[12px] font-medium text-brand-dark/60">Pay securely via Cards, UPI, or Netbanking (Powered by Razorpay)</p>
                      <div className="flex gap-2 mt-4 opacity-30 grayscale group-hover:grayscale-0 transition-all">
                        <span className="text-[9px] border border-brand-dark px-2 py-0.5 rounded-sm font-black">VISA</span>
                        <span className="text-[9px] border border-brand-dark px-2 py-0.5 rounded-sm font-black">MASTERCARD</span>
                        <span className="text-[9px] border border-brand-dark px-2 py-0.5 rounded-sm font-black">UPI</span>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => {
                      if (isCodAllowed) setPaymentMethod("COD");
                    }}
                    className={`flex items-start gap-4 p-6 border-2 transition-all rounded-[8px] ${!isCodAllowed ? "opacity-30 cursor-not-allowed grayscale" : "cursor-pointer"} ${paymentMethod === "COD" ? "bg-white border-brand-dark shadow-lg translate-y-[-2px]" : "bg-white border-brand-border/20 opacity-60 hover:opacity-100 hover:border-brand-border/40"}`}
                  >
                    <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === "COD" ? "border-brand-dark" : "border-brand-border"}`}>
                      {paymentMethod === "COD" && <div className="w-2.5 h-2.5 bg-brand-dark rounded-full" />}
                    </div>
                    <div className="flex-1">
                      <span className="font-sans text-[15px] font-black text-brand-dark uppercase tracking-tight block mb-1">{messages.checkout.cod}</span>
                      <p className="text-[12px] font-medium text-brand-dark/60">Pay with cash upon delivery of your order</p>
                      {!isCodAllowed && <span className="text-[10px] text-brand-crimson font-black mt-2 uppercase tracking-wide inline-block bg-brand-crimson/5 px-2 py-1 rounded-sm">{messages.checkout.maxCodError}{formatPrice(SITE_CONFIG.maxCodValue)}</span>}
                    </div>
                  </div>
                </div>

                {/* Logistics Trust Info */}
                <div className="bg-brand-cream/40 p-5 rounded-sm border border-brand-border/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-[12px] font-black text-brand-dark uppercase tracking-widest">{SITE_CONFIG.deliveryTimeline}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-[12px] font-black text-brand-dark uppercase tracking-widest">Free Shipping (All India)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: ORDER SUMMARY (Sticky) */}
            <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-32">
              <div className="bg-white border-2 border-brand-dark p-8 md:p-10 shadow-2xl rounded-sm">
                <h2 className="card-title text-[18px] mb-8 uppercase tracking-widest border-b border-brand-dark pb-4">{messages.checkout.orderSummary}</h2>
                
                <div className="space-y-6 mb-10 max-h-[35vh] overflow-y-auto pr-3 no-scrollbar divide-y divide-brand-border/10">
                  {items.map((item) => (
                    <div key={item.id} className="pt-6 first:pt-0">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="font-sans text-[14px] font-black text-brand-dark uppercase tracking-tight leading-tight">
                            {bLang(item.productName, lang)}
                          </h4>
                          <span className="text-[11px] font-bold text-brand-dark/50 uppercase tracking-widest mt-1 block">
                            {item.selectedWeight} × {item.quantity}
                          </span>
                        </div>
                        <span className="font-sans text-[15px] font-black text-brand-dark lining-nums">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-8 border-t-2 border-brand-dark/5">
                  <div className="flex justify-between items-center text-[13px] font-bold text-brand-dark/60 uppercase">
                    <span>{messages.checkout.shipping}</span>
                    <span className="text-brand-crimson font-black tracking-widest">{messages.checkout.free}</span>
                  </div>
                  
                  <div className="flex justify-between items-end pt-6">
                    <span className="card-title !text-[18px] uppercase">{messages.orderSuccess.total}</span>
                    <div className="flex flex-col items-end">
                      <span className="font-sans text-[32px] md:text-[40px] font-black text-brand-dark lining-nums leading-none tracking-tighter">
                        {formatPrice(cartTotal)}
                      </span>
                      <span className="text-[10px] font-bold text-brand-dark/40 uppercase mt-2">Inclusive of all taxes</span>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="mt-8 p-4 bg-brand-crimson/5 border border-brand-crimson/20 text-brand-crimson text-[12px] font-black text-center uppercase tracking-widest animate-in fade-in slide-in-from-top-2 duration-300">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn-commerce btn-primary w-full !py-6 mt-10 text-[16px] !tracking-[0.2em] shadow-xl disabled:opacity-50 active:scale-[0.97] transition-all"
                >
                  {isProcessing ? messages.checkout.processing : messages.checkout.placeOrder}
                </button>

                {/* Trust Seals */}
                <div className="mt-10 grid grid-cols-2 gap-4 border-t border-brand-border/10 pt-8 opacity-40 grayscale group-hover:grayscale-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-full border border-brand-dark flex items-center justify-center mb-2">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Secure</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 rounded-full border border-brand-dark flex items-center justify-center mb-2">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">No Hidden Fees</span>
                  </div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
}
