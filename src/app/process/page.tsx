"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import BilingualSEO from "@/components/common/BilingualSEO";
import Link from "next/link";

export default function ProcessPage() {
  const { messages, lang } = useLanguage();

  return (
    <main className="bg-[#FAF9F6]">
      <BilingualSEO pageKey="process" />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-[11px] md:text-[13px] font-black uppercase tracking-[0.4em] text-brand-crimson mb-6 block">
              Behind the Scenes
            </span>
            <h1 className="display-title text-brand-dark mb-8 !text-[48px] md:!text-[84px] lg:!text-[100px] leading-[0.9] tracking-tighter">
              The Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-crimson to-brand-dark">Shahi Namkeen</span>
            </h1>
            <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 max-w-2xl mx-auto leading-relaxed">
              Discover the traditional craftsmanship and dedication that goes into every batch of Gokul's heritage snacks. Handcrafted with purity, served with pride.
            </p>
          </motion.div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-brand-border/10 -z-0" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-brand-border/10 -z-0" />
      </section>

      {/* ── GALLERY SECTION ── */}
      <section className="pb-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            
            {/* LARGE FEATURE PHOTO (Placeholder 1) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 aspect-[16/10] relative overflow-hidden bg-brand-cream border border-brand-border/10 rounded-sm"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20 p-12">
                 <span className="font-sans text-[12px] font-black uppercase tracking-widest text-center">Hand-rolling the traditional way</span>
              </div>
              {/* Once images are uploaded, use Image component: */}
              {/* <Image src="/images/process/process-1.jpg" alt="Handcrafting" fill className="object-cover" /> */}
            </motion.div>

            {/* SIDE PHOTO (Placeholder 2) */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="md:col-span-4 aspect-square relative overflow-hidden bg-brand-cream border border-brand-border/10 rounded-sm"
            >
               <div className="absolute inset-0 flex items-center justify-center opacity-20 p-12">
                 <span className="font-sans text-[12px] font-black uppercase tracking-widest text-center">Quality Ingredients</span>
              </div>
            </motion.div>

            {/* SIDE PHOTO (Placeholder 3) */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="md:col-span-4 aspect-square relative overflow-hidden bg-brand-cream border border-brand-border/10 rounded-sm"
            >
               <div className="absolute inset-0 flex items-center justify-center opacity-20 p-12">
                 <span className="font-sans text-[12px] font-black uppercase tracking-widest text-center">Traditional Frying</span>
              </div>
            </motion.div>

            {/* LARGE FEATURE PHOTO (Placeholder 4) */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="md:col-span-8 aspect-[16/10] relative overflow-hidden bg-brand-cream border border-brand-border/10 rounded-sm"
            >
               <div className="absolute inset-0 flex items-center justify-center opacity-20 p-12">
                 <span className="font-sans text-[12px] font-black uppercase tracking-widest text-center">The Perfect Crunch</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ── */}
      <section className="py-32 bg-brand-dark text-white overflow-hidden relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="display-title text-white !text-[44px] md:!text-[60px] mb-8">Purity is <br /> our Promise.</h2>
                <div className="space-y-8">
                   <div className="flex gap-6">
                      <div className="w-12 h-12 shrink-0 border border-white/20 flex items-center justify-center text-[12px] font-black">01</div>
                      <div>
                         <h3 className="font-sans text-[14px] font-black uppercase tracking-widest mb-3 text-brand-crimson">Heritage Recipes</h3>
                         <p className="font-sans text-white/60 text-[15px] leading-relaxed">We use recipes passed down through generations, ensuring every bite carries the authentic taste of Indore's heritage.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-12 h-12 shrink-0 border border-white/20 flex items-center justify-center text-[12px] font-black">02</div>
                      <div>
                         <h3 className="font-sans text-[14px] font-black uppercase tracking-widest mb-3 text-brand-crimson">Handcrafted Batches</h3>
                         <p className="font-sans text-white/60 text-[15px] leading-relaxed">Small batches mean big flavor. Every piece is handled with care by our master craftsmen.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-12 h-12 shrink-0 border border-white/20 flex items-center justify-center text-[12px] font-black">03</div>
                      <div>
                         <h3 className="font-sans text-[14px] font-black uppercase tracking-widest mb-3 text-brand-crimson">Uncompromising Quality</h3>
                         <p className="font-sans text-white/60 text-[15px] leading-relaxed">Only the finest spices and 100% pure edible oils make it into our kitchen. No shortcuts, ever.</p>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="relative aspect-[4/5] md:aspect-square lg:aspect-auto h-full bg-[#1e1e1e] border border-white/5 overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center rotate-45">
                   <div className="border border-white w-[200%] h-[200%]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                   <p className="font-serif italic text-white/40 text-[24px]">"Making namkeen is not just a business; it's a legacy of flavor we share with the world."</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 text-center">
         <div className="container-wide">
            <h2 className="display-title !text-[36px] md:!text-[48px] mb-8 text-brand-dark">Experience the Crunch Personally.</h2>
            <Link href="/products" className="btn-commerce btn-primary !py-5 !px-12 !text-[14px] !tracking-[0.2em]">
               Shop the Heritage Collection
            </Link>
         </div>
      </section>
    </main>
  );
}
