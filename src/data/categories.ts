import { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "cat-namkeen",
    name: { en: "Namkeen", hi: "नमकीन" },
    slug: "namkeen",
    description: {
      en: "Authentic Indori sev and namkeen made with pure ingredients.",
      hi: "शुद्ध सामग्री से बना प्रामाणिक इंदौरी सेव और नमकीन।",
    },
    emoji: "🌶️",
    image: "/images/categories/namkeen.jpg",
    productCount: 12,
    featured: true,
  },
  {
    id: "cat-mixture",
    name: { en: "Mixture", hi: "मिक्सचर" },
    slug: "mixture",
    description: {
      en: "Perfectly balanced Khatta Meetha and spicy mixtures.",
      hi: "एकदम संतुलित खट्टा मीठा और मसालेदार मिक्सचर।",
    },
    emoji: "🥘",
    image: "/images/categories/mixture.jpg",
    productCount: 10,
    featured: true,
  },
  {
    id: "cat-fariyali",
    name: { en: "Fasting Snacks", hi: "फरियाली" },
    slug: "fariyali",
    description: {
      en: "Pure fasting snacks including chips, ladoos, and mixtures.",
      hi: "चिप्स, लड्डू और मिक्सचर सहित शुद्ध व्रत के स्नैक्स।",
    },
    emoji: "🪔",
    image: "/images/categories/fariyali.jpg",
    productCount: 16,
    featured: true,
  },
  {
    id: "cat-dal",
    name: { en: "Dal & Dana", hi: "दाल एवं दाने" },
    slug: "dal",
    description: {
      en: "Crispy fried dal and peanuts with signature masala.",
      hi: "सिग्नेचर मसाले के साथ कुरकुरी तली हुई दाल और मूंगफली।",
    },
    emoji: "🫘",
    image: "/images/categories/dal.jpg",
    productCount: 16,
    featured: true,
  },
  {
    id: "cat-maida",
    name: { en: "Maida Items", hi: "मैदा आइटम" },
    slug: "maida",
    description: {
      en: "Traditional kachori, samosa, and mathri varieties.",
      hi: "पारंपरिक कचोरी, समोसा और मठरी की विभिन्न किस्में।",
    },
    emoji: "🥟",
    image: "/images/categories/maida.jpg",
    productCount: 12,
    featured: true,
  },
  {
    id: "cat-biscuits",
    name: { en: "Biscuits & Chakli", hi: "बिस्किट और चकली" },
    slug: "biscuits",
    description: {
      en: "Freshly baked cookies and crispy chakli in multiple flavours.",
      hi: "ताज़े बेक किए बिस्किट और कई स्वादों में कुरकुरी चकली।",
    },
    emoji: "🍪",
    image: "/images/categories/biscuits.jpg",
    productCount: 14,
    featured: true,
  },
  {
    id: "cat-other",
    name: { en: "Other Snacks", hi: "अन्य स्नैक्स" },
    slug: "other",
    description: {
      en: "Soya sticks, boondi, papdi, and sweet delicacies.",
      hi: "सोया स्टिक, बूंदी, पापड़ी और मीठी विशिष्टताएँ।",
    },
    emoji: "✨",
    image: "/images/categories/other.jpg",
    productCount: 16,
    featured: true,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedCategories(): Category[] {
  return categories.filter((c) => c.featured);
}
