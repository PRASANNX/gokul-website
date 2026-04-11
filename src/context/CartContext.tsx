"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { BilingualString } from "@/types/product";

export interface CartItem {
  id: string; // Composite of productId-selectedWeight
  productId: string;
  productSlug: string;
  productName: BilingualString;
  selectedWeight: string;
  price: number;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  cartCount: number;
  cartTotal: number;
  isClient: boolean;
  addToCart: (item: Omit<CartItem, "id">) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CART_STORAGE_KEY = "gokul_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // Ignore parse errors safely
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch {
        // Ignore quota errors safely
      }
    }
  }, [items, isClient]);

  const addToCart = useCallback((newItem: Omit<CartItem, "id">) => {
    const id = `${newItem.productId}-${newItem.selectedWeight}`;
    setItems((current) => {
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...current, { ...newItem, id }];
    });
  }, []);

  const updateQuantity = useCallback((id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        cartTotal,
        isClient,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}
