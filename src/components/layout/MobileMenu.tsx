"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import WhatsAppCTA from "@/components/common/WhatsAppCTA";
import { useLanguage } from "@/context/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { messages } = useLanguage();

  const navLinks = [
    { label: messages.nav.home,     href: "/" },
    { label: messages.nav.products, href: "/products" },
    { label: messages.nav.process,  href: "/process" },
    { label: messages.nav.about,    href: "/about" },
    { label: messages.nav.contact,  href: "/contact" },
  ];

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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="py-4 px-6 text-[15px] font-bold text-brand-dark border-b border-brand-border/5 uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/wholesale"
              onClick={onClose}
              className="py-4 px-6 text-[15px] font-bold text-brand-crimson border-b border-brand-border/5 uppercase tracking-widest"
            >
              {messages.wholesale?.btnInquiry}
            </Link>
            <div className="p-6 space-y-4">
              <a 
                href={`tel:${SITE_CONFIG.phone}`}
                className="btn-commerce btn-secondary w-full justify-center gap-3 !py-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {messages.contact.phoneLabel}
              </a>
              <WhatsAppCTA 
                label={messages.hero.btnWhatsapp} 
                size="lg" 
                className="w-full justify-center !text-[14px]" 
              />
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
