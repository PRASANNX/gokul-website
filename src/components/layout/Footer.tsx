import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { categories } from "@/data/categories";

export default function Footer() {
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
              Authentic handcrafted namkeen & sweets from Indore — made with pure ghee since 2000.
            </p>

            {/* Social Social */}
            <div className="flex items-center gap-4 mt-8">
              {[
                { label: "Instagram", href: SITE_CONFIG.social.instagram },
                { label: "Facebook", href: SITE_CONFIG.social.facebook }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 hover:border-brand-crimson hover:bg-brand-crimson flex items-center justify-center transition-all duration-300"
                >
                   <span className="sr-only">{social.label}</span>
                   <div className="w-1.5 h-1.5 bg-current rotate-45" />
                </a>
              ))}
            </div>
          </div>

          {/* ── QUICK LINKS ── */}
          <div>
            <h4 className="font-sans text-[12px] font-bold tracking-[0.2em] text-white uppercase mb-8">
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="font-sans text-[14px] text-white/40 hover:text-white transition-colors font-medium hover:pl-1 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="font-sans text-[14px] text-white/40 hover:text-white transition-colors font-medium hover:pl-1 transition-all">
                  FAQ & Help
                </Link>
              </li>
            </ul>
          </div>

          {/* ── CATEGORIES ── */}
          <div>
            <h4 className="font-sans text-[12px] font-bold tracking-[0.2em] text-white uppercase mb-8">
              Categories
            </h4>
            <ul className="flex flex-col gap-4">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={`/products/category/${cat.slug}`} 
                    className="font-sans text-[14px] text-white/40 hover:text-white transition-colors font-medium hover:pl-1 transition-all"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT ── */}
          <div>
            <h4 className="font-sans text-[12px] font-bold tracking-[0.2em] text-white uppercase mb-8">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Office</span>
                <span className="font-sans text-[14px] text-white/60 leading-relaxed font-medium">
                  {SITE_CONFIG.address}
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Direct</span>
                <a href={`tel:${SITE_CONFIG.phone}`} className="font-sans text-[16px] text-white font-bold hover:text-brand-crimson transition-colors lining-nums">
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[12px] text-white/20 font-bold tracking-wide uppercase">
            © {new Date().getFullYear()} Gokul ke Shahi Namkeen INDORE
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="font-sans text-[11px] text-white/20 hover:text-white uppercase font-bold tracking-widest">Privacy Policy</Link>
            <Link href="/terms" className="font-sans text-[11px] text-white/20 hover:text-white uppercase font-bold tracking-widest">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

