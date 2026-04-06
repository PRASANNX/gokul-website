"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 border-b border-brand-border/5">
        <div className="container-wide">
          <div className="mb-0 opacity-50">
            <Breadcrumb items={[ { label: "Support" }, { label: "Privacy Policy" }]} />
          </div>
          
          <div className="max-w-[700px] mt-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="display-title mb-6">
                Privacy <br />
                <span className="text-brand-crimson">Policy</span>
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] text-brand-dark/70 leading-relaxed font-medium">
                Our commitment to protecting your personal information and ensuring a secure shopping experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="section-spacing pt-16 md:pt-24">
        <div className="container-wide max-w-[800px] mx-auto">
          <div className="space-y-12 font-sans text-[16px] md:text-[17px] text-brand-dark/80 leading-[1.8] font-medium">
            <p>At Gokul Namkeen, we respect your privacy as much as we value our recipes. This policy describes why we collect your information and how we protect it throughout your interaction with our brand.</p>
            
            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">Information Collection</h2>
              <p>We only collect information necessary to fulfill your orders and provide a personalized experience. This includes your name, delivery address, phone number, and preference for specific Indore snacks. Most of our direct commerce happens via WhatsApp, where your communication is protected by end-to-end encryption.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">How We Use Data</h2>
              <p>Your information is used exclusively for order fulfillment, answering your inquiries, and clarifying delivery details. We do not participate in predatory data practices and will never sell your information to third-party marketing firms.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">Security Protocols</h2>
              <p>We implement standard security measures to protect your offline and online information. Order records are stored on secure servers and access is limited strictly to staff members involved in logistics and customer support.</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-crimson">Your Rights</h2>
              <p>You have the right to request the deletion of your personal data from our records at any time. Simply reach out to our team via the contact details provided on our website, and we will honor your request within 48 hours.</p>
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

