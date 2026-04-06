"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── SEARCH-READY HEADER ── */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm border-brand-border/10 py-2.5" 
            : "bg-white border-transparent py-4"
        }`}
      >
        {/* Sub-Promo (Optional, but commercial) */}
        {!isScrolled && (
          <div className="w-full bg-brand-dark text-white text-center py-2 text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/5">
             Indore&apos;s Shahi Heritage delivered across India
          </div>
        )}

        <div className="container-wide">
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="/" className="shrink-0 transition-transform hover:scale-[1.01]">
              <div className="relative w-[100px] h-[65px] md:w-[130px] md:h-[80px]">
                <Image
                  src="/images/logo.png"
                  alt="Gokul"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-12">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[12px] font-bold text-brand-dark/80 hover:text-brand-crimson transition-colors tracking-widest uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-6 md:gap-10">
              <div className="hidden lg:flex flex-col items-end">
                 <span className="text-[9px] font-bold text-brand-dark/30 tracking-[0.1em] uppercase mb-1">Support</span>
                 <a href={`tel:${SITE_CONFIG.phone}`} className="font-sans text-[14px] font-black text-brand-dark lining-nums hover:text-brand-crimson transition-colors">
                   {SITE_CONFIG.phone}
                 </a>
              </div>

              <Link 
                href="/products" 
                className="btn-commerce btn-primary !py-3 !px-8 !text-[12px] hidden md:inline-flex"
              >
                Order Online
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label="Menu"
              >
                <div className={`h-[2px] bg-brand-dark transition-all duration-300 ${mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                <div className={`h-[2px] bg-brand-dark transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-4 self-end mr-2"}`} />
                <div className={`h-[2px] bg-brand-dark transition-all duration-300 ${mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      {/* Spacer to prevent layout shift from fixed header */}
      <div className="h-[140px] md:h-[160px]" />
    </>
  );
}


