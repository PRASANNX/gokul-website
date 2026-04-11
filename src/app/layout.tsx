import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { SITE_CONFIG } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlobalWhatsApp from "@/components/common/GlobalWhatsApp";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

import { cookies } from "next/headers";
import enMessages from "../../messages/en.json";
import hiMessages from "../../messages/hi.json";

function isObject(item: any): boolean {
  return item && typeof item === "object" && !Array.isArray(item);
}

function deepMerge(target: any, source: any): any {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(output, { [key]: source[key] });
        else output[key] = deepMerge(target[key], source[key]);
      } else {
        if (source[key] !== undefined && source[key] !== "") {
          output[key] = source[key];
        }
      }
    });
  }
  return output;
}

const safeHiMessages = deepMerge(enMessages, hiMessages);

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = cookieStore.get("gokul_lang")?.value === "hi" ? "hi" : "en";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: any = lang === "hi" ? safeHiMessages : enMessages;
  
  const metaHome = messages?.metadata?.home;

  return {
    title: {
      template: `%s | ${SITE_CONFIG.name}`,
      default: metaHome?.title || `${SITE_CONFIG.name} - ${SITE_CONFIG.taglineEn}`,
    },
    description: metaHome?.description || SITE_CONFIG.description,
    keywords: ["Namkeen", "Indore", "Snacks", "Sweets", "Premium Namkeen", "Fariyali", "Best snacks in India"],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("gokul_lang")?.value === "hi" ? "hi" : "en";

  return (
    <html lang={lang} className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans antialiased bg-brand-cream text-brand-dark min-h-screen flex flex-col selection:bg-brand-saffron selection:text-white`}>
        <CartProvider>
          <LanguageProvider>
            <Header />
            
            <main className="flex-1 w-full relative">
              {children}
            </main>
            
            <Footer />
            
            <GlobalWhatsApp />
          </LanguageProvider>
        </CartProvider>
      </body>
    </html>
  );
}
