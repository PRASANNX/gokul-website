"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title: "Best Namkeen in Town",
    body: "The Ratlami sev is absolutely incredible. Gives the authentic taste of Indore that I have been missing since I moved to Bangalore. Pure ghee fragrance hits right out of the packet.",
    name: "Rahul Verma",
    location: "Bangalore",
    initial: "R"
  },
  {
    id: 2,
    title: "Fresh and Crisp",
    body: "Ordered their Fariyali Mixture during Navratri. Excellent quality and zero oily aftertaste. You can genuinely taste that they don't compromise on ingredients.",
    name: "Sneha Patel",
    location: "Mumbai",
    initial: "S"
  },
  {
    id: 3,
    title: "A Family Favorite",
    body: "Their sweet kaju biscuits and khatta meetha mixture have been a staple in our home for evening tea. Shipping was surprisingly fast and everything arrived intact.",
    name: "Aditya Sharma",
    location: "Delhi",
    initial: "A"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white section-spacing">
      <div className="container-wide">
        
        {/* ── HEADER ── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mx-auto shadow-none">Customer Voices</span>
            <h2 className="section-title mb-4">What Our Families Say</h2>
            <p className="font-sans text-[16px] text-[#555] font-medium max-w-[600px] mx-auto leading-relaxed">
              Real reviews from families across India who trust Gokul Namkeen for daily snacking and festive gifting.
            </p>
          </motion.div>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#FAF9F6] p-10 flex flex-col h-full border border-brand-border/10 rounded-sm"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className="w-3.5 h-3.5 text-brand-crimson" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <h3 className="card-title mb-4 leading-snug tracking-tight uppercase">
                {testimonial.title}
              </h3>
              <p className="font-sans text-[15px] text-brand-dark/70 leading-[1.7] mb-10 flex-1 italic">
                &ldquo;{testimonial.body}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-crimson text-white flex items-center justify-center font-sans text-[14px] font-bold">
                  {testimonial.initial}
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[13px] font-bold text-brand-dark leading-tight">
                    {testimonial.name}
                  </span>
                  <span className="font-sans text-[11px] text-brand-dark/30 uppercase tracking-[0.15em] font-bold mt-1">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

