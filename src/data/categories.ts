import { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "cat-namkeen",
    name: "नमकीन (Namkeen)",
    slug: "namkeen",
    description: "Authentic Indori sev and namkeen made with pure ingredients.",
    emoji: "🌶️",
    image: "/images/categories/namkeen.jpg",
    productCount: 12,
    featured: true,
  },
  {
    id: "cat-mixture",
    name: "मिक्सचर (Mixture)",
    slug: "mixture",
    description: "Perfectly balanced Khatta Meetha and spicy mixtures.",
    emoji: "🥘",
    image: "/images/categories/mixture.jpg",
    productCount: 10,
    featured: true,
  },
  {
    id: "cat-fariyali",
    name: "फरियाली (Fasting Snacks)",
    slug: "fariyali",
    description: "Pure fasting snacks including chips, ladoos, and mixtures.",
    emoji: "🪔",
    image: "/images/categories/fariyali.jpg",
    productCount: 16,
    featured: true,
  },
  {
    id: "cat-dal",
    name: "दाल एवं दाने (Dal & Dana)",
    slug: "dal",
    description: "Crispy fried dal and peanuts with signature masala.",
    emoji: "🫘",
    image: "/images/categories/dal.jpg",
    productCount: 16,
    featured: true,
  },
  {
    id: "cat-maida",
    name: "मैदा आइटम (Maida Items)",
    slug: "maida",
    description: "Traditional kachori, samosa, and mathri varieties.",
    emoji: "🥟",
    image: "/images/categories/maida.jpg",
    productCount: 12,
    featured: true,
  },
  {
    id: "cat-biscuits",
    name: "Biscuits & Chakli",
    slug: "biscuits",
    description: "Freshly baked cookies and crispy chakli in multiple flavours.",
    emoji: "🍪",
    image: "/images/categories/biscuits.jpg",
    productCount: 14,
    featured: true,
  },
  {
    id: "cat-other",
    name: "अन्य (Other Snacks)",
    slug: "other",
    description: "Soya sticks, boondi, papdi, and sweet delicacies.",
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
