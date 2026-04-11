"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { getProductBySlug } from "@/data/products";
import { slugify } from "@/lib/utils";


interface Props {
  items: any[];
}

export default function RepeatOrderButton({ items }: Props) {
  const { addToCart } = useCart();
  const router = useRouter();
  const { messages } = useLanguage();

  const handleRepeat = () => {
    items.forEach(item => {
      // 1. Try to derive base slug from item ID (id is usually slug-weight)
      const parts = item.id.split("-");
      parts.pop(); // Remove weight
      const derivedSlug = parts.join("-");
      
      // 2. Try to fetch official product for better data
      const officialProduct = getProductBySlug(derivedSlug);

      // 3. Map to cart structure
      addToCart({
        productId: officialProduct?.id || derivedSlug,
        productSlug: officialProduct?.slug || derivedSlug,
        productName: officialProduct?.name || { en: item.name, hi: item.name },
        selectedWeight: item.weight,
        price: item.price,
        quantity: item.quantity
      });
    });
    router.push("/cart");
  };

  return (
    <button 
      onClick={handleRepeat}
      className="btn-commerce btn-secondary flex-1 !py-5 border-brand-dark/10 hover:border-brand-dark/30 transition-all uppercase tracking-widest text-[11px] font-black"
    >
      {messages.orderSuccess.repeatOrder || "Repeat Order"}
    </button>
  );
}
