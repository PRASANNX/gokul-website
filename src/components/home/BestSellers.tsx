"use client";

import Link from "next/link";
import { getBestsellerProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { motion } from "framer-motion";

export default function BestSellers() {
  const products = getBestsellerProducts().slice(0, 4);

  return (
    <section className="bg-white section-spacing overflow-hidden">
      <div className="container-wide">
        
        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Customer Favorites</span>
            <h2 className="section-title">Our Best Sellers</h2>
            <p className="font-sans text-[16px] text-[#555] font-medium max-w-[500px] mt-4">
              The products our customers come back for again and again. Authentic, fresh, and Indori.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/products" 
              className="group font-sans text-[14px] font-bold text-brand-crimson hover:text-brand-dark transition-colors flex items-center gap-2 uppercase tracking-widest"
            >
              Shop All Namkeen
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
        </div>

        {/* ── PRODUCT GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-x-8 md:gap-y-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="h-full"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

