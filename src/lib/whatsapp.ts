import { formatPrice } from "@/lib/utils";
import { bLang } from "@/lib/language-utils";
import { SITE_CONFIG } from "@/lib/constants";
import { BilingualString } from "@/types/product";

export function generateWhatsAppSingleProductMessage(
  productName: BilingualString,
  weight: string,
  price: number,
  quantity: number,
  lang: "en" | "hi"
): string {
  const lineTotal = price * quantity;
  const header = lang === "hi" ? "🛒 सिंगल प्रोडक्ट ऑर्डर" : "🛒 Single Product Order";
  const greeting = lang === "hi" ? "नमस्ते!" : "Hello!";
  const intro = lang === "hi" ? "मैं निम्नलिखित ऑर्डर करना चाहता हूँ:" : "I would like to place the following order:";
  const totalLabel = lang === "hi" ? "कुल राशि" : "Total Amount";
  const footer = lang === "hi" 
    ? "कृपया उपलब्धता और डिलीवरी की जानकारी दें।" 
    : "Please confirm availability and delivery details.";

  const itemName = bLang(productName, lang);
  
  let message = `${header}\n\n${greeting}\n\n${intro}\n\n`;
  message += `${itemName} – ${weight} × ${quantity} – ${formatPrice(lineTotal)}\n\n`;
  message += `----------------------\n`;
  message += `${totalLabel}: ${formatPrice(lineTotal)}\n`;
  const paymentLabel = lang === "hi" ? "💳 भुगतान" : "💳 Payment";
  const paymentVal = lang === "hi" ? "व्हाट्सएप पर पुष्टि करें" : "Confirm on WhatsApp";
  message += `${paymentLabel}: ${paymentVal}\n`;
  message += `----------------------\n\n`;
  message += footer;

  return encodeURIComponent(message);
}



export function getSingleProductCheckoutUrl(
  productName: BilingualString,
  weight: string,
  price: number,
  quantity: number,
  lang: "en" | "hi"
): string {
  const encoded = generateWhatsAppSingleProductMessage(productName, weight, price, quantity, lang);
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encoded}`;
}

export function generateWhatsAppWholesaleMessage(
  productName: BilingualString,
  lang: "en" | "hi"
): string {
  const name = bLang(productName, lang);
  
  if (lang === "hi") {
    let message = "नमस्ते,\n";
    message += `मुझे ${name} का थोक रेट चाहिए।\n`;
    message += "मात्रा: \n";
    message += "शहर: \n";
    message += "कृपया कार्टन रेट और उपलब्धता बताएं।";
    return encodeURIComponent(message);
  }

  let message = "Hello,\n";
  message += `I need wholesale rate for ${name}.\n`;
  message += "Approx quantity: \n";
  message += "City: \n";
  message += "Please share carton price and availability.";
  return encodeURIComponent(message);
}

export function getWholesaleCheckoutUrl(
  productName: BilingualString,
  lang: "en" | "hi"
): string {
  const encoded = generateWhatsAppWholesaleMessage(productName, lang);
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encoded}`;
}
