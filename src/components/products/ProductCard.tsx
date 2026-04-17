"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/common/StarRating";
import { useLanguage } from "@/context/LanguageContext";
import { getWholesaleCheckoutUrl, getSingleProductCheckoutUrl } from "@/lib/whatsapp";
import { bLang } from "@/lib/language-utils";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { messages, lang } = useLanguage();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const defaultWeight = product.weightOptions[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      productId: product.id,
      productSlug: product.slug,
      productName: product.name,
      selectedWeight: defaultWeight.weight,
      price: defaultWeight.price,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col group h-full bg-white transition-all duration-300 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)] border border-transparent hover:border-brand-border/20 rounded-sm overflow-hidden">
      
      {/* ── IMAGE ── */}
      <Link 
        href={`/products/${product.slug}`} 
        className="block relative w-full aspect-square bg-brand-cream/20 overflow-hidden flex items-center justify-center transition-colors border-b border-brand-border/10"
      >
        {/* Product Image */}
        {product.images[0] && (
          <Image
            src={product.images[0]}
            alt={bLang(product.name, lang)}
            fill
            className="object-contain p-2 md:p-3 transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Decorative Overlay */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-dark/5" />
        
        {product.bestseller && (
          <div className="absolute top-0 right-0 z-20 bg-brand-crimson text-brand-dark font-sans text-[10px] md:text-[11px] font-black tracking-[0.2em] uppercase px-3 md:px-4 py-2 shadow-sm">
            {messages.product.bestseller}
          </div>
        )}
      </Link>

      {/* ── CONTENT ── */}
      <div className="flex flex-col flex-1 p-4 md:p-5">
        
        <div className="flex items-center gap-1.5 mb-2.5">
          <StarRating rating={product.rating || 5.0} count={0} showCount={false} />
          {product.reviewCount && (
            <span className="text-[11px] font-sans text-brand-dark/40 font-bold lining-nums">
              ({product.reviewCount})
            </span>
          )}
        </div>

        <Link href={`/products/${product.slug}`} className="mb-2 block">
          <h3 className="card-title line-clamp-2 group-hover:text-brand-crimson transition-colors uppercase tracking-tight min-h-[44px] md:min-h-[48px] !text-[13px] md:!text-[15px]">
            {bLang(product.name, lang)}
          </h3>
        </Link>
        
        <div className="flex flex-wrap items-center justify-between mb-5 mt-auto gap-2">
          <div className="font-sans text-[18px] md:text-[22px] font-black text-brand-dark lining-nums tracking-tighter">
            {formatPrice(defaultWeight.price)}
          </div>
          <div className="font-sans text-[10px] md:text-[11px] font-black text-brand-dark/50 uppercase tracking-widest border-b-2 border-brand-cream leading-tight pb-0.5">
            {defaultWeight.weight}
          </div>
        </div>

        <div className="flex gap-2 w-full mt-3">
          <button 
            onClick={handleAddToCart}
            className="flex-1 btn-commerce btn-primary !py-2.5 !px-0 bg-brand-crimson text-white hover:bg-brand-dark hover:text-white flex items-center justify-center transition-all duration-300 relative overflow-hidden"
          >
            <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${added ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} text-[#4ade80] gap-1 font-black text-[12px]`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              {messages.product.added}
            </span>
            <span className={`flex items-center justify-center gap-2 transition-all duration-300 ${added ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'} w-full tracking-[0.1em] text-[11px] md:text-[12px]`}>
              <svg className="w-4 h-4 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              {messages.product.addToCart}
            </span>
          </button>
          
          <a 
            href={getSingleProductCheckoutUrl(product.name, defaultWeight.weight, defaultWeight.price, 1, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-commerce btn-whatsapp flex items-center justify-center gap-2 !py-2.5 !px-0 !text-[11px] md:!text-[12px] !tracking-[0.05em]"
            title={messages.product.orderWhatsapp}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            <span className="hidden md:block">Buy</span>
          </a>
        </div>
        
        <a 
          href={getWholesaleCheckoutUrl(product.name, lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block text-center text-[10px] md:text-[11px] uppercase tracking-widest font-black text-brand-dark/50 hover:text-brand-crimson transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-current"
        >
          {messages.wholesale?.btnInquiry}
        </a>
      </div>
    </div>
  );
}
