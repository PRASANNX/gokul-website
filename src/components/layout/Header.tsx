"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { messages, lang } = useLanguage();

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
              
              <div className="flex items-center border-r border-brand-border/20 pr-3 sm:pr-4 mr-2">
                <LanguageSwitcher />
              </div>

              <div className="hidden lg:flex items-center gap-3">
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="font-sans text-[11px] font-black uppercase tracking-[0.15em] text-brand-dark border border-brand-dark/20 px-4 py-2.5 rounded-[4px] hover:border-brand-dark hover:bg-brand-cream/30 transition-all"
                >
                  Call Now
                </a>
                <a 
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-commerce btn-whatsapp !py-2.5 !px-5 !text-[11px] !tracking-[0.15em] shadow-md hover:-translate-y-0.5 transition-all !rounded-[4px] flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  {messages.product.orderWhatsapp}
                </a>
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
