"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import BilingualSEO from "@/components/common/BilingualSEO";

export default function AboutPage() {
  const { messages } = useLanguage();

  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <BilingualSEO pageKey="about" />

      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="container-wide">
          <div className="mb-8 opacity-50">
            <Breadcrumb items={[{ label: messages.nav.about }]} />
          </div>

          <div className="max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow shadow-none mb-6">{messages.about.eyebrow}</span>
              <h1 className="display-title mb-8">
                {messages.about.title}
              </h1>
              <p className="font-sans text-[18px] md:text-[20px] text-brand-dark/70 leading-relaxed font-medium max-w-[700px]">
                {messages.about.subtitle}
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
              <div className="relative aspect-[4/3] bg-[#FAF9F6] overflow-hidden">
                <Image
                  src="/images/banners/IMG_9716.jpg"
                  alt="Gokul Heritage Shop"
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/5" />
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-brand-saffron/20" />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="section-title mb-4">{messages.brandStory.title}</h2>
              <p className="font-sans text-[12px] font-black uppercase tracking-[0.2em] text-brand-dark/40 mb-8 flex items-center gap-2">
                <span className="w-4 h-px bg-brand-dark/30" />
                {messages.about.founder}
              </p>
              <div className="space-y-6 font-sans text-[16px] text-brand-dark/70 leading-[1.8] font-medium mb-12">
                <p>{messages.brandStory.para1}</p>
                <p>{messages.brandStory.para2}</p>
              </div>

              <Link
                href="/process"
                className="btn-commerce btn-primary !py-5 !px-12 !text-[13px] !tracking-[0.2em] shadow-xl"
              >
                {messages.about.storyCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ── */}
      <section className="section-spacing bg-[#FAF9F6]">
        <div className="container-wide">
          <div className="text-center mb-16 md:mb-24">
            <span className="eyebrow mx-auto shadow-none">{messages.whyChooseUs.eyebrow}</span>
            <h2 className="section-title">{messages.whyChooseUs.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { title: messages.whyChooseUs.features.ghee.title, desc: messages.whyChooseUs.features.ghee.desc },
              { title: messages.whyChooseUs.features.preservatives.title, desc: messages.whyChooseUs.features.preservatives.desc },
              { title: messages.whyChooseUs.features.fresh.title, desc: messages.whyChooseUs.features.fresh.desc },
              { title: messages.whyChooseUs.features.shipping.title, desc: messages.whyChooseUs.features.shipping.desc },
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
                <p className="font-sans text-[14px] text-brand-dark/85 font-medium leading-relaxed max-w-[240px]">
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
