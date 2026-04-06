"use client";

import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="container-wide">
          <div className="mb-8 opacity-50">
            <Breadcrumb items={[{ label: "About Us" }]} />
          </div>
          
          <div className="max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow shadow-none mb-6">Our Indore Heritage</span>
              <h1 className="display-title mb-8">
                Born in Indore, <br className="hidden md:block" />
                <span className="text-brand-crimson">Loved Across India</span>
              </h1>
              <p className="font-sans text-[18px] md:text-[20px] text-brand-dark/70 leading-relaxed font-medium max-w-[700px]">
                Since {SITE_CONFIG.established}, Gokul Namkeen has been crafting authentic snacks and sweets the old-fashioned way — by hand, in small batches, with uncompromising quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] bg-[#FAF9F6] overflow-hidden flex items-center justify-center p-12 lg:p-20">
                <div className="relative z-10 w-full h-full border border-brand-dark/5 opacity-20 flex flex-col items-center justify-center">
                   <div className="w-1/2 h-1/2 border border-brand-dark rotate-45" />
                   <span className="mt-8 font-sans text-[10px] font-bold tracking-[0.4em] uppercase text-brand-dark">Heritage Archive</span>
                </div>
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-brand-saffron/20" />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="section-title mb-8">It started with one recipe and one dream.</h2>
              <div className="space-y-6 font-sans text-[16px] text-brand-dark/70 leading-[1.8] font-medium">
                <p>
                  Our founder began selling freshly made namkeen from a small stall in Nehru Nagar, Indore. The taste was unlike anything available — cleaner, purer, more authentic.
                </p>
                <p>
                  Word spread quickly. Neighbours became regulars. Regulars became advocates. And soon, people were calling from across the city — and then across the country — to get their favourite Gokul snacks delivered home.
                </p>
                <p>
                  Today we have grown, but our commitment has never wavered. The same recipes. The same ghee. The same hands. Just more love, more reach, and more happy families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ── */}
      <section className="section-spacing bg-[#FAF9F6]">
        <div className="container-wide">
          <div className="text-center mb-16 md:mb-24">
            <span className="eyebrow mx-auto shadow-none">The Gokul Way</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { title: "Pure Ingredients", desc: "Only pure desi ghee, never refined oil or dalda." },
              { title: "No Preservatives", desc: "No artificial colours or flavour enhancers. Pure food, pure taste." },
              { title: "Daily Fresh", desc: "Every product is made fresh the morning of the day it is sold." },
              { title: "Family First", desc: "We cook like we're feeding our own family — with care and love." },
            ].map((v, i) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-1.5 h-1.5 bg-brand-crimson rotate-45 mb-6" />
                <h3 className="card-title mb-4 uppercase tracking-tight">{v.title}</h3>
                <p className="font-sans text-[14px] text-brand-dark/60 font-medium leading-relaxed max-w-[240px]">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

