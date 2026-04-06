"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import WhatsAppCTA from "@/components/common/WhatsAppCTA";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-full left-0 right-0 bg-white border-b border-brand-border overflow-hidden lg:hidden"
        >
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="py-4 px-6 text-[16px] font-medium text-brand-dark border-b border-[#F0E6D3] hover:bg-brand-cream hover:text-brand-saffron transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="p-6 bg-brand-cream/30">
              <WhatsAppCTA 
                label="Order on WhatsApp" 
                size="lg" 
                className="w-full justify-center !text-[15px]" 
              />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
