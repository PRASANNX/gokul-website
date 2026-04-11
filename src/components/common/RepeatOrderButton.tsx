"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  items: any[];
}

export default function RepeatOrderButton({ items }: Props) {
  const { addItem } = useCart();
  const router = useRouter();
  const { messages } = useLanguage();

  const handleRepeat = () => {
    items.forEach(item => {
      // Re-map items to cart structure
      addItem({
        id: item.id,
        productId: item.id, // Assuming id matches productId
        productName: { en: item.name, hi: item.name }, // This is a limitation, but good enough for repeat
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
