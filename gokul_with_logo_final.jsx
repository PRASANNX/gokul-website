import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, X, ChevronLeft, ChevronRight, ZoomIn, Phone, Instagram, MapPin } from "lucide-react";

const TOTAL_CATALOG_PAGES = 11;

export default function GokulFinalWebsite() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // ★★★ YOUR ACTUAL GOKUL LOGO - INTEGRATED ★★★
  // Logo is now set to use your ImgBB link!
  // If you get the direct link (https://i.ibb.co/...), replace below:
  const GOKUL_LOGO_DIRECT = "https://i.ibb.co/tpfhhyyy/Untitled-Design-236x214.png";

  const openViewer = (page) => {
    setCurrentPage(page);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
  };

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, TOTAL_CATALOG_PAGES));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  const generatePlaceholderImage = (page, isThumb = false) => {
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${isThumb ? 80 : 400}' height='${isThumb ? 120 : 600}'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFC107;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FF5722;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' font-size='${isThumb ? "28" : "72"}' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='bold'%3Eपृष्ठ ${page}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* ===== NAVIGATION ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 shadow-2xl border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* ★ YOUR GOKUL LOGO DISPLAYED HERE ★ */}
            <img 
              src={GOKUL_LOGO_DIRECT}
              alt="Gokul Logo"
              className="w-14 h-14 rounded-full shadow-lg object-cover border-2 border-white transform hover:scale-110 transition-transform"
              onError={(e) => {
                // Fallback if logo doesn't load
                e.target.style.display = 'none';
              }}
            />
            <div className="hidden sm:block">
              <div className="text-red-600 font-black text-sm">गोकुल के शाही नमकीन</div>
              <div className="text-red-500 text-xs font-bold">इंदौर का शाही स्वाद</div>
            </div>
          </div>
          
          <a
            href="https://wa.me/919301936812"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white font-black px-6 py-2 rounded-full hover:bg-red-700 transition-all shadow-lg transform hover:scale-110 text-sm"
          >
            🛒 ऑर्डर करें
          </a>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="absolute top-20 right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-red-400 rounded-full opacity-20 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* ★ LARGE GOKUL LOGO HERO ★ */}
            <motion.div
              className="w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-8 drop-shadow-2xl rounded-full overflow-hidden border-4 border-white"
              initial={{ scale: 0.8, opacity: 0, rotateZ: -15 }}
              animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            >
              <img 
                src={GOKUL_LOGO_DIRECT}
                alt="Gokul Logo"
                className="w-full h-full object-cover shadow-2xl"
                onError={(e) => {
                  e.target.parentElement.style.background = 'linear-gradient(to bottom right, #FBBF24, #FB923C, #EF4444)';
                }}
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4"
            >
              <span className="text-red-600">गोकुल के शाही</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 bg-clip-text">नमकीन एवं गजक</span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 border-4 border-red-600 rounded-full px-8 py-4 shadow-xl transform hover:scale-110 transition-transform">
                <p className="text-red-700 font-black text-xl">इंदौर का शाही स्वाद</p>
                <p className="text-red-600 text-sm mt-1 font-bold">★ 4.2 Stars • 180+ Reviews ★</p>
              </div>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto"
            >
              {[
                { icon: "🧈", title: "100% शुद्ध घी" },
                { icon: "👨‍🍳", title: "परम्परागत रेसिपी" },
                { icon: "✨", title: "ताज़ा बना हुआ" },
                { icon: "🎖️", title: "विश्वसनीय ब्रांड" },
              ].map((feature, i) => (
                <div key={i} className="bg-white border-2 border-yellow-400 rounded-xl p-3 shadow-lg">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <p className="font-black text-xs text-red-600">{feature.title}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a
                href="https://wa.me/919301936812?text=नमस्ते! मुझे आपके प्रीमियम नमकीन के बारे में जानना है।"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white font-black px-8 py-4 rounded-full shadow-2xl hover:shadow-2xl transition-all transform hover:scale-110 text-lg border-4 border-red-800"
              >
                🛒 अभी ऑर्डर करें
              </a>
              <a
                href="#products"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-700 font-black px-8 py-4 rounded-full shadow-2xl transition-all transform hover:scale-110 text-lg border-4 border-yellow-600"
              >
                👀 उत्पाद देखें
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="inline-block bg-red-600 text-white font-black px-6 py-3 rounded-full text-sm"
            >
              ✅ 100% शुद्ध घी • ✅ कोई प्रिज़र्वेटिव नहीं • ✅ रोज़ ताज़ा बना
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={32} className="text-red-600 font-black" />
          </motion.div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section id="products" className="py-20 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text mb-4">
              हमारे उत्पाद
            </h2>
            <p className="text-2xl font-bold text-red-600">
              100+ प्रकार की प्रीमियम नमकीन
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "नमकीन/Sev", emoji: "🌾", color: "from-yellow-300 to-orange-400" },
              { name: "मिक्सचर", emoji: "🥘", color: "from-yellow-400 to-red-400" },
              { name: "चकली", emoji: "🌀", color: "from-orange-400 to-red-500" },
              { name: "बिस्कुट", emoji: "🍪", color: "from-yellow-300 to-yellow-400" },
              { name: "शाही गजक", emoji: "👑", color: "from-red-500 to-orange-500" },
              { name: "मैदा आइटम", emoji: "🥐", color: "from-yellow-400 to-orange-500" },
              { name: "फरयाली", emoji: "🍌", color: "from-green-400 to-yellow-400" },
              { name: "दाल एवं दाने", emoji: "🥜", color: "from-amber-400 to-orange-500" },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all transform hover:scale-110 border-4 border-white cursor-pointer bg-gradient-to-br ${cat.color} p-6 text-white min-h-48 flex flex-col justify-between`}
              >
                <div className="text-5xl mb-2">{cat.emoji}</div>
                <div>
                  <h3 className="font-black text-xl mb-2">{cat.name}</h3>
                  <p className="text-sm opacity-90">प्रीमियम नमकीन</p>
                </div>
                <button
                  onClick={() => openViewer(1)}
                  className="mt-4 bg-white text-red-600 font-black py-2 px-4 rounded-full hover:scale-110 transition-transform text-sm shadow-lg"
                >
                  कैटलॉग देखें →
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://wa.me/919301936812?text=नमस्ते! मुझे अपने उत्पादों के बारे में जानना है।"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-black px-10 py-4 rounded-full shadow-2xl hover:shadow-2xl transition-all text-lg border-4 border-red-800 transform hover:scale-110"
            >
              🛒 व्हाट्सएप पर ऑर्डर करें
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-red-600 text-center mb-12"
          >
            ग्राहकों की राय ⭐
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "राज कुमार", text: "बेहतरीन क्वालिटी! हर त्यौहार पर यहीं से लेता हूँ।" },
              { name: "प्रिया शर्मा", text: "दिवाली के लिए सबसे अच्छी जगह। सबको बहुत पसंद आता है!" },
              { name: "विक्रम पटेल", text: "शुद्ध घी और प्राकृतिक स्वाद। बेहद परम्परागत है।" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl p-6 shadow-2xl border-4 border-red-600 transform hover:scale-105 transition-transform"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-red-700 font-black text-lg mb-4">"{t.text}"</p>
                <p className="text-red-800 font-black">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATALOG SECTION ===== */}
      <section id="catalog" className="py-20 md:py-32 bg-gradient-to-b from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-yellow-300 text-center mb-4"
          >
            पूरा कैटलॉग देखें
          </motion.h2>
          <p className="text-center text-yellow-100 text-lg font-bold mb-12">
            11 पेज का विस्तृत कैटलॉग
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
            {Array.from({ length: TOTAL_CATALOG_PAGES }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: page * 0.05 }}
                onClick={() => openViewer(page)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-110 border-4 border-yellow-300 transform"
              >
                <img
                  src={generatePlaceholderImage(page, true)}
                  alt={`Page ${page}`}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-yellow-300 text-sm py-2 text-center font-black">
                  पृष्ठ {page}
                </div>
              </motion.button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openViewer(1)}
              className="bg-yellow-400 text-red-700 font-black px-8 py-4 rounded-full shadow-2xl hover:scale-110 transition-all text-lg border-4 border-yellow-500"
            >
              📖 कैटलॉग खोलें
            </button>
            <a
              href="https://YOUR_CATALOG_PDF_URL_HERE"
              download="Gokul_Catalog.pdf"
              className="border-4 border-yellow-300 text-yellow-300 font-black px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-red-700 transition-all text-lg"
            >
              📥 PDF डाउनलोड करें
            </a>
          </div>
        </div>

        {/* Fullscreen Catalog Viewer */}
        <AnimatePresence>
          {viewerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col"
            >
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b-4 border-yellow-400 bg-gradient-to-r from-red-600 to-orange-600">
                <span className="text-yellow-300 text-lg font-black">
                  कैटलॉग — पृष्ठ {currentPage} / {TOTAL_CATALOG_PAGES}
                </span>
                <button onClick={closeViewer} className="text-yellow-300 hover:text-red-300 transition-colors">
                  <X size={32} />
                </button>
              </div>

              <div className="flex-1 flex items-center justify-center px-4 py-6 relative">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="absolute left-6 z-10 bg-red-600 hover:bg-red-700 text-yellow-300 p-4 rounded-full transition disabled:opacity-20 text-2xl font-black"
                >
                  ◀
                </button>

                <motion.img
                  key={currentPage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={generatePlaceholderImage(currentPage, false)}
                  alt={`Page ${currentPage}`}
                  className="max-h-[75vh] w-auto max-w-full rounded-lg shadow-2xl border-4 border-yellow-400"
                />

                <button
                  onClick={nextPage}
                  disabled={currentPage === TOTAL_CATALOG_PAGES}
                  className="absolute right-6 z-10 bg-red-600 hover:bg-red-700 text-yellow-300 p-4 rounded-full transition disabled:opacity-20 text-2xl font-black"
                >
                  ▶
                </button>
              </div>

              <div className="border-t-4 border-yellow-400 px-4 py-3 overflow-x-auto bg-red-700">
                <div className="flex gap-2 justify-center">
                  {Array.from({ length: TOTAL_CATALOG_PAGES }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`shrink-0 w-14 h-20 rounded-lg overflow-hidden border-4 transition transform hover:scale-110 ${
                        page === currentPage
                          ? "border-yellow-400 shadow-lg shadow-yellow-400"
                          : "border-gray-400 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={generatePlaceholderImage(page, true)} alt={`Page ${page}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-black text-red-600 text-center mb-12"
          >
            हमसे जुड़ें 📍
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-xl border-4 border-red-600 transform hover:scale-105 transition-transform">
                <p className="text-red-700 font-black text-lg mb-3">📍 पता</p>
                <p className="text-red-700 font-bold mb-3">542/7, नेहरू नगर, इंदौर, एम.पी. 452011</p>
                <a href="https://maps.google.com/?q=22.7360465,75.8828751" target="_blank" rel="noopener noreferrer" className="text-red-800 font-black hover:underline">
                  गूगल मैप्स में खोलें →
                </a>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-6 shadow-xl border-4 border-yellow-300 transform hover:scale-105 transition-transform">
                <p className="text-white font-black text-lg mb-3">📱 फोन</p>
                <a href="tel:+919301936812" className="text-white font-black text-xl hover:underline">+91 93019 36812</a>
                <p className="text-white/90 font-bold text-sm mt-2">7:30 AM - 11:00 PM</p>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-xl border-4 border-yellow-300 transform hover:scale-105 transition-transform">
                <p className="text-white font-black text-lg mb-3">💬 व्हाट्सएप</p>
                <a href="https://wa.me/919301936812" target="_blank" rel="noopener noreferrer" className="text-white font-black text-xl hover:underline">
                  सीधे चैट करें →
                </a>
                <p className="text-white/90 font-bold text-sm mt-2">तुरंत जवाब</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl border-4 border-red-600 h-96 bg-gray-300"
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9441849920047!2d75.8828751!3d22.7360465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd44a3cebcfd%3A0x58369cb919d9d516!2sGokul%20ke%20shahi%20namkeen!5e0!3m2!1sen!2sin!4v1234567890"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src={GOKUL_LOGO_DIRECT}
              alt="Gokul Logo"
              className="w-12 h-12 rounded-lg shadow-lg object-cover"
            />
            <div>
              <div className="font-black text-lg">गोकुल के शाही नमकीन</div>
              <div className="text-yellow-300 text-xs font-bold">इंदौर का शाही स्वाद</div>
            </div>
          </div>
          
          <p className="font-bold mb-6 text-yellow-100">
            प्रीमियम नमकीन और शाही गजक | 542/7, नेहरू नगर, इंदौर
          </p>

          <div className="flex items-center justify-center gap-6 mb-6 text-2xl">
            <a href="https://www.instagram.com/gokul_ke_shahi_namkeen_" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
              📱
            </a>
            <a href="https://wa.me/919301936812" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
              💬
            </a>
            <a href="tel:+919301936812" className="hover:scale-125 transition-transform">
              📞
            </a>
          </div>

          <p className="text-yellow-100 text-sm font-bold">
            © 2024 गोकुल के शाही नमकीन एवं शाही गजक। सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </footer>
    </div>
  );
}
