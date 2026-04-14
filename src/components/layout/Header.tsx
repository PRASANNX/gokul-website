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
    { label: messages.nav.process,      href: "/process" },
    { label: messages.wholesale.pageTitle, href: "/wholesale" },
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
            <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-[12px] font-black text-brand-dark hover:text-brand-crimson transition-colors tracking-[0.18em] uppercase whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ACTIONS - Right */}
            <div className="flex items-center gap-4 md:gap-6">
              
              <div className="hidden sm:block border-r border-brand-border/20 pr-6 mr-2">
                <LanguageSwitcher />
              </div>

              {/* Cart Icon */}
              <Link 
                href="/cart" 
                className="relative group flex items-center justify-center w-11 h-11 bg-brand-cream/50 hover:bg-brand-crimson/10 transition-colors rounded-full border border-brand-border/10"
                aria-label={messages.common.cart}
              >
                <svg className="w-5.5 h-5.5 text-brand-dark group-hover:text-brand-crimson transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {isClient && cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-crimson text-brand-dark text-[10px] font-black flex items-center justify-center rounded-full shadow-sm animate-in zoom-in duration-300">
                    {cartCount}
                  </span>
                )}
              </Link>

              <div className="hidden lg:flex items-center gap-4">
                <Link 
                  href="/products" 
                  className="btn-commerce btn-primary !py-3.5 !px-8 !text-[12px] !tracking-[0.2em] shadow-lg hover:-translate-y-0.5 transition-all !rounded-[4px]"
                >
                  {messages.nav.orderOnline}
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group bg-brand-cream/50 rounded-full border border-brand-border/10"
                aria-label={messages.common.menu}
              >
                <div className={`h-[2px] bg-brand-dark transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-5"}`} />
                <div className={`h-[2px] bg-brand-dark transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-3 ml-auto"}`} />
                <div className={`h-[2px] bg-brand-dark transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      {/* Spacer to prevent layout shift from fixed header */}
      <div className={isScrolled ? "h-[105px] md:h-[115px]" : "h-[125px] md:h-[145px]"} />
    </>
  );
}
