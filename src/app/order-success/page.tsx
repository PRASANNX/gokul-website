import React from "react";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { formatPrice } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import BilingualSEO from "@/components/common/BilingualSEO";
import { cookies } from "next/headers";
import enMessages from "../../../messages/en.json";
import hiMessages from "../../../messages/hi.json";
import RepeatOrderButton from "@/components/common/RepeatOrderButton";

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

async function getOrder(orderId: string) {
  try {
    const filePath = path.join(process.cwd(), "src/data/orders.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const orders = JSON.parse(fileContent);
    return orders.find((o: any) => o.orderId === orderId);
  } catch (e) {
    return null;
  }
}

interface Props {
  searchParams: Promise<{ orderId?: string }>;
}

export default async function OrderSuccessPage({ searchParams }: Props) {
  const { orderId } = await searchParams;
  const cookieStore = await cookies();
  const lang = cookieStore.get("gokul_lang")?.value === "hi" ? "hi" : "en";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: any = lang === "hi" ? safeHiMessages : enMessages;

  if (!orderId) {
    return (
      <main className="bg-[#FAF9F6] min-h-screen pt-40 px-5 text-center">
        <h1 className="display-title mb-8">Invalid Access</h1>
        <Link href="/" className="btn-commerce btn-primary">Back to Home</Link>
      </main>
    );
  }

  const order = await getOrder(orderId);

  if (!order) {
    return (
      <main className="bg-[#FAF9F6] min-h-screen pt-40 px-5 text-center">
        <h1 className="display-title mb-8">Order Not Found</h1>
        <Link href="/" className="btn-commerce btn-primary">Back to Home</Link>
      </main>
    );
  }

  const whatsappConfirmMsg = lang === "hi" 
    ? `नमस्ते, मैंने Order ID: ${order.orderId} का ऑर्डर किया है। कृपया पुष्टि करें।\n\nऑर्डर विवरण:\nकुल: ${formatPrice(order.total)}\nभुगतान: ${order.paymentMethod === "ONLINE" ? "ऑनलाइन" : "COD"}`
    : `Hello, I have placed Order ID: ${order.orderId}. Please confirm.\n\nOrder Details:\nTotal: ${formatPrice(order.total)}\nPayment: ${order.paymentMethod === "ONLINE" ? "Online" : "COD"}`;
  
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappConfirmMsg)}`;

  return (
    <main className="bg-[#FAF9F6] min-h-screen py-32 px-5">
      <BilingualSEO pageKey="home" />

      <div className="max-w-3xl mx-auto bg-white border border-brand-border/10 shadow-sm">
        <div className="p-8 md:p-14 text-center border-b border-brand-border/10">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="display-title mb-4 !text-[32px] md:!text-[48px] tracking-tight">{messages.orderSuccess.thankYou}</h1>
          <p className="font-sans text-[16px] text-brand-dark/85 font-medium">{messages.orderSuccess.message}</p>
        </div>

        <div className="p-8 md:p-14 space-y-12">
          {/* Order Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F6] p-5 border border-brand-border/5">
              <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest block mb-1">{messages.orderSuccess.orderId}</span>
              <span className="font-sans text-[15px] font-black text-brand-dark lining-nums">{order.orderId}</span>
            </div>
            <div className="bg-[#FAF9F6] p-5 border border-brand-border/5">
              <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest block mb-1">{messages.orderSuccess.paymentMethod}</span>
              <span className="font-sans text-[15px] font-bold text-brand-dark uppercase">
                {order.paymentMethod === "ONLINE" ? messages.checkout.onlinePayment : messages.checkout.cod}
              </span>
            </div>
            <div className="bg-[#FAF9F6] p-5 border border-brand-border/5">
              <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest block mb-1">Status</span>
              <span className={`font-sans text-[12px] font-black uppercase tracking-widest ${order.verificationStatus === "VERIFIED" ? "text-green-600" : "text-brand-crimson"}`}>
                {order.verificationStatus === "VERIFIED" ? "Payment Verified" : "Action Required"}
              </span>
            </div>
          </div>

          {/* Items Summary Table */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="card-title text-[18px] uppercase tracking-tight">{messages.orderSuccess.summary}</h2>
              <span className="font-sans text-[13px] font-bold text-brand-dark/70 uppercase tracking-widest">{order.items.length} {messages.orderSuccess.items || "Items"}</span>
            </div>
            <div className="border border-brand-border/10 divide-y divide-brand-border/10">
              {order.items.map((item: any, idx: number) => (
                <div key={idx} className="p-5 flex justify-between items-center bg-white hover:bg-[#FAF9F6] transition-colors">
                  <div className="flex-1">
                    <h4 className="font-sans text-[14px] font-bold text-brand-dark uppercase tracking-tight">{item.name}</h4>
                    <span className="text-[10px] font-bold text-brand-dark/70 uppercase tracking-widest mt-1 block">
                      {item.weight} × {item.quantity}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-sans text-[14px] font-bold text-brand-dark lining-nums">{formatPrice(item.total)}</span>
                  </div>
                </div>
              ))}
              
              <div className="p-6 bg-[#FAF9F6] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold uppercase text-brand-dark/70 tracking-widest">Subtotal</span>
                  <span className="text-[14px] font-bold text-brand-dark lining-nums">{formatPrice(order.total)}</span>
                </div>
                <div className="flex justify-between items-center text-brand-crimson">
                  <span className="text-[11px] font-black uppercase tracking-widest">{messages.checkout.shipping}</span>
                  <span className="text-[11px] font-black uppercase tracking-widest">{messages.checkout.free}</span>
                </div>
                <div className="pt-4 border-t border-brand-border/10 flex justify-between items-center">
                  <span className="card-title text-[16px] uppercase">{messages.orderSuccess.total}</span>
                  <span className="font-sans text-[24px] font-black text-brand-dark lining-nums">{formatPrice(order.total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Actions */}
          <div className="flex flex-col md:flex-row gap-4 pt-10 border-t border-brand-border/20">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-commerce btn-whatsapp flex-1 !py-5 gap-3 shadow-md hover:scale-[1.01] transition-all text-center flex justify-center items-center"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
              {messages.orderSuccess.whatsappConfirm}
            </a>
            <RepeatOrderButton items={order.items} />
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/products" 
              className="text-[11px] font-bold text-brand-dark/70 uppercase tracking-[0.2em] hover:text-brand-crimson transition-colors"
            >
              ← {messages.orderSuccess.continueShopping}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
