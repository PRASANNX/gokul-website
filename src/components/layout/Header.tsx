"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { messages, lang } = useLanguage();
  const { cartCount, isClient } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: messages.nav.home,         href: "/" },
    { label: messages.nav.products,     href: "/products" },
    { label: messages.wholesale.pageTitle, href: "/wholesale" },
    { label: "Gift Packs",              href: "/gift-packs" },
    { label: messages.nav.about,        href: "/about" },
    { label: messages.nav.contact,      href: "/contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/98 backdrop-blur-md shadow-md py-1" 
            : "bg-white py-2"
        }`}
      >
        {/* Sub-Promo */}
        {!isScrolled && (
          <div className="w-full bg-brand-dark text-white text-center py-2 text-[11px] font-black tracking-[0.25em] uppercase border-b border-white/5">
            {messages.promo.banner}
          </div>
        )}

        <div className="container-wide">
          <div className="flex items-center justify-between gap-6 py-1">
            
            {/* LOGO */}
            <Link href="/" className="shrink-0 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <div className="relative w-[100px] h-[58px] sm:w-[110px] sm:h-[68px] md:w-[130px] md:h-[82px]">
                <Image
                  src="/images/logo.png"
                  alt="Gokul"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* NAV LINKS - Center */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group font-sans text-[12px] font-black text-brand-dark/90 hover:text-brand-crimson transition-colors tracking-[0.18em] uppercase whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-crimson transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* ACTIONS - Right */}
            <div className="flex items-center gap-3 md:gap-5">
              
              <div className="flex items-center border-r border-brand-border/20 pr-3 sm:pr-4">
                <LanguageSwitcher />
              </div>

              {/* Cart Icon */}
              <Link 
                href="/cart" 
                className="relative group flex items-center justify-center w-10 h-10 bg-brand-cream/50 hover:bg-brand-crimson/10 transition-colors rounded-full border border-brand-border/10 mr-1"
                aria-label={messages.common.cart}
              >
                <svg className="w-5 h-5 text-brand-dark group-hover:text-brand-crimson transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {isClient && cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-crimson text-brand-dark text-[10px] font-black flex items-center justify-center rounded-full shadow-sm animate-in zoom-in duration-300">
                    {cartCount}
                  </span>
                )}
              </Link>

              <div className="hidden lg:flex items-center gap-3">
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="font-sans text-[11px] font-black uppercase tracking-[0.15em] text-brand-dark border border-brand-dark/20 px-4 py-2.5 rounded-[4px] hover:border-brand-dark hover:bg-brand-cream/30 transition-all"
                >
                  Call Now
                </a>
                <Link 
                  href="/products" 
                  className="btn-commerce btn-primary !py-2.5 !px-6 !text-[11px] !tracking-[0.15em] shadow-md hover:-translate-y-0.5 transition-all !rounded-[4px]"
                >
                  {messages.nav.orderOnline}
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-[4.5px] group bg-brand-cream/50 active:bg-brand-crimson/10 rounded-full border border-brand-border/10 transition-colors"
                aria-label={messages.common.menu}
              >
                <div className={`h-[1.5px] bg-brand-dark transition-all duration-300 ease-in-out ${mobileMenuOpen ? "w-6 rotate-45 translate-y-[6px]" : "w-6"}`} />
                <div className={`h-[1.5px] bg-brand-dark transition-all duration-300 ease-in-out ${mobileMenuOpen ? "opacity-0 -translate-x-2" : "w-6"}`} />
                <div className={`h-[1.5px] bg-brand-dark transition-all duration-300 ease-in-out ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[6px]" : "w-6"}`} />
              </button>
            </div>
          </div>
        </div>

        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </header>

      {/* Spacer to prevent layout shift from fixed header */}
      <div className={isScrolled ? "h-[105px] md:h-[115px]" : "h-[125px] md:h-[145px]"} />
    </>
  );
}
