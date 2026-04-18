"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { categories } from "@/data/categories";
import { useLanguage } from "@/context/LanguageContext";
import { bLang } from "@/lib/language-utils";

export default function Footer() {
  const { messages, lang } = useLanguage();

  const navLinks = [
    { label: messages.nav.home,     href: "/" },
    { label: messages.nav.products, href: "/products" },
    { label: messages.nav.about,    href: "/about" },
    { label: messages.nav.contact,  href: "/contact" },
    { label: messages.nav.faq,      href: "/faq" },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container-wide">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* ── BRAND ── */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6 inline-block" aria-label="Home">
              <div className="relative w-[110px] h-[75px]">
                <Image
                  src="/images/logo.png"
                  alt="Gokul ke Shahi Namkeen"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            
            <p className="font-sans text-[14px] text-white/50 leading-[1.7] max-w-[260px] font-medium italic">
              {messages.footer.tagline}
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              {[
                { 
                  label: "Instagram", 
                  href: SITE_CONFIG.social.instagram,
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
                { 
                  label: "YouTube",   
                  href: SITE_CONFIG.social.youtube,
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  )
                },
                { 
                  label: "Facebook",  
                  href: SITE_CONFIG.social.facebook,
                  icon: (
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  )
                }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 hover:border-brand-crimson hover:bg-brand-crimson flex items-center justify-center transition-all duration-300"
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── QUICK LINKS ── */}
          <div>
            <h4 className="font-sans text-[14px] font-bold tracking-[0.2em] text-white uppercase mb-8">
              {messages.footer.explore}
            </h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="font-sans text-[14px] text-white/40 hover:text-white transition-colors font-medium hover:pl-1 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CATEGORIES ── */}
          <div>
            <h4 className="font-sans text-[14px] font-bold tracking-[0.2em] text-white uppercase mb-8">
              {messages.footer.categories}
            </h4>
            <ul className="flex flex-col gap-4">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={`/products/category/${cat.slug}`} 
                    className="font-sans text-[14px] text-white/40 hover:text-white transition-colors font-medium hover:pl-1 transition-all"
                  >
                    {bLang(cat.name, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT ── */}
          <div>
            <h4 className="font-sans text-[14px] font-bold tracking-[0.2em] text-white uppercase mb-8">
              {messages.footer.contactUs}
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex flex-col gap-1">
                <span className="text-[14px] text-white/30 uppercase font-bold tracking-widest">{messages.footer.office}</span>
                <span className="font-sans text-[14px] text-white/60 leading-relaxed font-medium">
                  {SITE_CONFIG.address}
                </span>
              </li>
              <li className="flex flex-col gap-3">
                <span className="text-[14px] text-white/30 uppercase font-bold tracking-widest">{messages.footer.direct}</span>
                <div className="flex flex-col gap-2">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="font-sans text-[16px] text-white font-bold hover:text-brand-crimson transition-colors lining-nums">
                    {SITE_CONFIG.phone}
                  </a>
                  <a href={`tel:${SITE_CONFIG.phoneSecondary}`} className="font-sans text-[16px] text-white font-bold hover:text-brand-crimson transition-colors lining-nums">
                    {SITE_CONFIG.phoneSecondary}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[14px] text-white/20 font-bold tracking-wide uppercase">
            © {new Date().getFullYear()} {messages.footer.copyright}
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="font-sans text-[11px] text-white/20 hover:text-white uppercase font-bold tracking-widest">{messages.footer.privacy}</Link>
            <Link href="/terms"   className="font-sans text-[11px] text-white/20 hover:text-white uppercase font-bold tracking-widest">{messages.footer.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
