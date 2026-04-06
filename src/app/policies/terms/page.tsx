"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 border-b border-brand-border/5">
        <div className="container-wide">
          <div className="mb-0 opacity-50">
            <Breadcrumb items={[{ label: "Support" }, { label: "Terms of Use" }]} />
          </div>
          
          <div className="max-w-[700px] mt-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="display-title mb-6">
                Terms of <br />
                <span className="text-brand-crimson">Use</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-relaxed font-medium">
                The guidelines and agreements for interacting with the Gokul Namkeen brand and digital platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="section-spacing pt-16 md:pt-24">
        <div className="container-wide max-w-[800px] mx-auto">
          <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-brand-dark/80 leading-[1.8] font-medium">
            <p>By accessing the Gokul Namkeen website and placing orders through our channels, you acknowledge and agree to the following terms and conditions. These terms ensure a respectful and transparent relationship between our heritage brand and our valued customers.</p>
            
            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">Digital Platforms</h2>
              <p>This website is designed to showcase our Indore heritage and facilitate commerce. You agree to use this platform only for lawful purposes. Any attempt to disrupt the service, scrape data without permission, or impersonate the brand is strictly prohibited.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">Orders & Fulfillment</h2>
              <p>Gokul Namkeen specializes in fresh production. All orders are processed with manual oversight to ensure quality. Prices listed on the website are indicative and may vary based on seasonal availability and bulk requirements. Final pricing and payment instructions will be provided at the point of order confirmation.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">Returns & Refunds</h2>
              <p>Due to the perishable nature of our artisanal snacks and sweets, we generally do not accept returns. However, your satisfaction is our priority. If you receive an incorrect or damaged item, please contact us within 24 hours of delivery for a resolution.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">Intellectual Property</h2>
              <p>The Gokul Namkeen name, logo, original photography, and heritage content are the intellectual property of our family business. Unauthorized use of our brand assets for commercial purposes is not permitted without explicit written consent.</p>
            </div>

            <div className="pt-12 border-t border-brand-border/10">
               <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest">Last updated: April 2024</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

