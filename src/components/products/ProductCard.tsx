"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import StarRating from "@/components/common/StarRating";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const defaultWeight = product.weightOptions[0];

  return (
    <div className="flex flex-col group h-full transition-all duration-300">
      
      {/* ── IMAGE ── */}
      <Link 
        href={`/products/${product.slug}`} 
        className="block relative w-full aspect-square bg-[#FAF9F6] overflow-hidden mb-5 flex items-center justify-center group-hover:bg-[#F5F4F0] transition-colors"
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full opacity-10 group-hover:opacity-20 transition-opacity p-8">
           <svg className="w-10 h-10 mb-2 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
           </svg>
        </div>
        
        {product.bestseller && (
          <div className="absolute top-0 right-0 z-10 bg-brand-crimson text-white font-sans text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 translate-y-0">
            Bestseller
          </div>
        )}
      </Link>

      {/* ── CONTENT ── */}
      <div className="flex flex-col flex-1">
        
        <div className="flex items-center gap-1 mb-2">
           <StarRating rating={product.rating || 5.0} count={0} showCount={false} />
           {product.reviewCount && (
             <span className="text-[10px] font-sans text-brand-dark/30 font-bold lining-nums">
               ({product.reviewCount})
             </span>
           )}
        </div>

        <Link href={`/products/${product.slug}`} className="mb-2">
          <h3 className="card-title line-clamp-1 group-hover:text-brand-crimson transition-colors uppercase">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-5">
           <div className="font-sans text-[16px] font-bold text-brand-dark lining-nums">
             {formatPrice(defaultWeight.price)}
           </div>
           <div className="font-sans text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest bg-brand-border/10 px-2 py-0.5 rounded-sm">
             {defaultWeight.weight}
           </div>
        </div>

        <button className="btn-commerce btn-primary !py-2.5 !text-[12px] w-full mt-auto">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

