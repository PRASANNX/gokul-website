"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface BilingualSEOProps {
  pageKey: string;
}

export default function BilingualSEO({ pageKey }: BilingualSEOProps) {
  const { messages } = useLanguage();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const metaObj = (messages as any).metadata;
    if (!metaObj) return;

    const meta = metaObj[pageKey];
    if (meta) {
      document.title = `${meta.title} | Gokul Namkeen`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", meta.description);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", `${meta.title} | Gokul Namkeen`);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", meta.description);
    }
  }, [messages, pageKey]);

  return null;
}
