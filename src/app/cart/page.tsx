"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { bLang } from "@/lib/language-utils";
import { useLanguage } from "@/context/LanguageContext";
import { getCartCheckoutUrl } from "@/lib/whatsapp";
import BilingualSEO from "@/components/common/BilingualSEO";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function CartPage() {
  const { items, cartTotal, updateQuantity, removeItem, clearCart } = useCart();
  const { lang, messages } = useLanguage();

  if (items.length === 0) {
    return (
      <main className="bg-[#FAF9F6] min-h-screen pt-32 pb-20">
        <BilingualSEO pageKey="home" /> {/* Or fallback to home meta */}
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center py-20 bg-white border border-brand-border/10">
            <svg className="w-16 h-16 mx-auto mb-6 text-brand-dark/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="display-title mb-4">Your Cart is Empty</h2>
            <p className="font-sans text-[16px] text-brand-dark/85 mb-8">Browse our collections and add something delicious to your cart.</p>
            <Link href="/products" className="btn-commerce btn-primary !py-4 !px-8">
              Shop Now
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <BilingualSEO pageKey="home" />

      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 border-b border-brand-border/5">
        <div className="container-wide">
          <Breadcrumb items={[{ label: "Cart" }]} />
          <h1 className="display-title mt-6">Your Cart</h1>
        </div>
      </section>

      {/* ── CART CONTENT ── */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* ITEMS LIST */}
            <div className="w-full lg:w-2/3 bg-white border border-brand-border/10">
              <div className="hidden md:grid grid-cols-12 gap-4 border-b border-brand-border/10 p-6 bg-[#FAF9F6] font-sans text-[10px] font-bold text-brand-dark/70 uppercase tracking-widest">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="divide-y divide-brand-border/10">
                {items.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 items-center">
                    
                    {/* Details */}
                    <div className="col-span-1 md:col-span-5 flex items-center gap-4">
                      <Link href={`/products/${item.productSlug}`} className="shrink-0 w-20 h-20 bg-[#FAF9F6] flex items-center justify-center p-2 group">
                        <svg className="w-6 h-6 text-brand-dark/50 group-hover:text-brand-crimson transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </Link>
                      <div>
                        <Link href={`/products/${item.productSlug}`} className="font-sans text-[16px] font-bold text-brand-dark hover:text-brand-crimson transition-colors uppercase block mb-1">
                          {bLang(item.productName, lang)}
                        </Link>
                        <div className="font-sans text-[11px] font-bold text-brand-dark/70 uppercase tracking-widest">
                          Pack: {item.selectedWeight}
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="md:hidden mt-2 text-[11px] font-bold text-brand-crimson uppercase tracking-widest hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="hidden md:block col-span-2 text-center font-sans text-[16px] font-bold text-brand-dark lining-nums">
                      {formatPrice(item.price)}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 md:col-span-3 flex justify-center">
                      <div className="flex items-center border border-brand-border/20 p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center text-brand-dark hover:bg-brand-border/5 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"/></svg>
                        </button>
                        <span className="w-10 text-center font-sans text-[15px] font-bold text-brand-dark lining-nums select-none">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center text-brand-dark hover:bg-brand-border/5 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                        </button>
                      </div>
                    </div>

                    {/* Total & Remove */}
                    <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-4">
                      <div className="md:hidden font-sans text-[11px] font-bold text-brand-dark/70 uppercase tracking-widest">Total:</div>
                      <div className="font-sans text-[16px] md:text-[18px] font-black text-brand-dark lining-nums">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="hidden md:flex w-8 h-8 items-center justify-center text-brand-dark/50 hover:text-brand-crimson transition-colors ml-4"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/></svg>
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              {/* Cart Footer */}
              <div className="border-t border-brand-border/10 p-6 flex justify-between items-center bg-[#FAF9F6]">
                <button 
                  onClick={clearCart} 
                  className="font-sans text-[11px] font-bold text-brand-dark/70 hover:text-brand-dark uppercase tracking-widest transition-colors"
                >
                  Clear Cart
                </button>
                <Link href="/products" className="font-sans text-[11px] font-bold text-brand-crimson uppercase tracking-widest hover:underline">
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="w-full lg:w-1/3 bg-white border border-brand-border/10 p-8">
              <h2 className="card-title text-[20px] mb-8 uppercase tracking-tight">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between font-sans text-[15px] font-medium text-brand-dark/85">
                  <span>Subtotal ({items.length} items)</span>
                  <span className="text-brand-dark lining-nums">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between font-sans text-[15px] font-medium text-brand-dark/85 border-b border-brand-border/10 pb-4">
                  <span>Shipping</span>
                  <span className="text-brand-crimson text-[13px] font-bold uppercase tracking-widest">{messages.checkout.freeShippingLabel}</span>
                </div>
                
                <div className="flex justify-between font-sans text-[20px] font-black text-brand-dark pt-2">
                  <span>Total</span>
                  <span className="lining-nums">{formatPrice(cartTotal)}</span>
                </div>
              </div>

              <a 
                href={getCartCheckoutUrl(items, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-commerce btn-whatsapp w-full !py-5 flex items-center justify-center gap-3 mb-4 shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {messages.wholesale.orderWhatsapp}
              </a>

              <Link 
                href="/wholesale" 
                className="btn-commerce btn-whatsapp w-full flex items-center justify-center gap-2 mb-6 text-[11px] opacity-70 hover:opacity-100"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {messages.wholesale?.btnInquiry}
              </Link>

              <div className="mt-6 flex flex-col gap-3 font-sans text-[12px] font-medium text-brand-dark/50 bg-[#FAF9F6] p-4 border border-brand-border/10">
                <div className="flex items-start gap-2">
                  <span className="text-brand-crimson">•</span>
                  Secure ordering via WhatsApp 
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-crimson">•</span>
                  Payment details shared after confirmation
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-crimson">•</span>
                  Same day dispatch available for most orders
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
