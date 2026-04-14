"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/common/StarRating";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { getWholesaleCheckoutUrl } from "@/lib/whatsapp";
import { bLang } from "@/lib/language-utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { messages, lang } = useLanguage();
  const { addToCart } = useCart();
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
  };

  return (
    <div className="flex flex-col group h-full bg-white transition-all duration-300 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)] border border-transparent hover:border-brand-border/20 rounded-sm overflow-hidden">
      
      {/* ── IMAGE ── */}
      <Link 
        href={`/products/${product.slug}`} 
        className="block relative w-full aspect-square bg-brand-cream/30 overflow-hidden flex items-center justify-center transition-colors"
      >
        {/* Product Image */}
        {product.images[0] && (
          <Image
            src={product.images[0]}
            alt={bLang(product.name, lang)}
            fill
            className="object-cover p-2 transition-transform duration-700 group-hover:scale-110"
          />
        )}

        {/* Decorative Overlay */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-dark/5" />
        
        {product.bestseller && (
          <div className="absolute top-0 right-0 z-20 bg-brand-crimson text-brand-dark font-sans text-[11px] font-black tracking-[0.2em] uppercase px-4 py-2 shadow-sm">
            {messages.product.bestseller}
          </div>
        )}
      </Link>

      {/* ── CONTENT ── */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        
        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating || 5.0} count={0} showCount={false} />
          {product.reviewCount && (
            <span className="text-[12px] font-sans text-brand-dark/40 font-bold lining-nums">
              ({product.reviewCount})
            </span>
          )}
        </div>

        <Link href={`/products/${product.slug}`} className="mb-2 block">
          <h3 className="card-title line-clamp-2 group-hover:text-brand-crimson transition-colors uppercase tracking-tight min-h-[48px]">
            {bLang(product.name, lang)}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-8 mt-auto">
          <div className="font-sans text-[16px] sm:text-[18px] md:text-[20px] font-black text-brand-dark lining-nums tracking-tight">
            {formatPrice(defaultWeight.price)}
          </div>
          <div className="font-sans text-[10px] sm:text-[11px] font-black text-brand-dark/40 uppercase tracking-widest bg-brand-cream px-2 py-1 rounded-[2px] border border-brand-border/10">
            {defaultWeight.weight}
          </div>
        </div>

        <button 
          onClick={handleAddToCart}
          className="btn-commerce btn-primary !py-3 !text-[13px] !tracking-[0.1em] w-full"
        >
          {messages.product.addToCart}
        </button>
        
        <a 
          href={getWholesaleCheckoutUrl(product.name, lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center text-[12px] uppercase tracking-widest font-black text-brand-dark/70 hover:text-brand-crimson transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-current"
        >
          {messages.wholesale?.btnInquiry}
        </a>
      </div>
    </div>
  );
}
