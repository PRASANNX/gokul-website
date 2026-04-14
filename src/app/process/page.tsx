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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            
            {/* PHOTO 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative aspect-[9/16] overflow-hidden bg-brand-cream border border-brand-border/10 rounded-sm group"
            >
              <Image 
                src="/images/process/process-1.png" 
                alt="Traditional Dough Preparation" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 z-10">
                 <span className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-white bg-brand-crimson px-3 py-1">Authentic</span>
              </div>
            </motion.div>

            {/* PHOTO 2 */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="relative aspect-[9/16] overflow-hidden bg-brand-cream border border-brand-border/10 rounded-sm group"
            >
               <Image 
                 src="/images/process/process-2.png" 
                 alt="Artisanal Shaping" 
                 fill 
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* PHOTO 3 */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="relative aspect-[9/16] overflow-hidden bg-brand-cream border border-brand-border/10 rounded-sm group"
            >
               <Image 
                 src="/images/process/process-3.png" 
                 alt="Frying Process" 
                 fill 
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* PHOTO 4 */}
            <motion.div 
               whileHover={{ y: -10 }}
               className="relative aspect-[9/16] overflow-hidden bg-brand-cream border border-brand-border/10 rounded-sm group"
            >
               <Image 
                 src="/images/process/process-4.png" 
                 alt="The Final Batch" 
                 fill 
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="pb-32">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="font-sans text-[11px] font-black uppercase tracking-[0.3em] text-brand-crimson mb-4 block">Process in Motion</span>
            <h2 className="display-title !text-[32px] md:!text-[42px] text-brand-dark uppercase">Craftsmanship <br /> in Action</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-[1000px] mx-auto">
             {/* VIDEO 1 */}
             <div className="relative aspect-[9/16] bg-brand-dark rounded-xl shadow-2xl overflow-hidden border-8 border-white">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/_R_OXOTkZUc" 
                  title="Gokul Namkeen Process 1" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
             </div>

             {/* VIDEO 2 */}
             <div className="relative aspect-[9/16] bg-brand-dark rounded-xl shadow-2xl overflow-hidden border-8 border-white">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Eo-RBbRrZxc" 
                  title="Gokul Namkeen Process 2" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
             </div>
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
