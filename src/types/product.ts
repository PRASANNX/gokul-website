export interface WeightOption {
  weight: string;
  price: number;
  originalPrice?: number;
}

// Bilingual string — slug is always derived from the English name
export interface BilingualString {
  en: string;
  hi: string;
}

export interface Product {
  id: string;
  name: BilingualString;
  slug: string;          // always English-based, never changes
  category: BilingualString;
  categorySlug: string;
  shortDescription: BilingualString;
  description: BilingualString;
  images: string[];
  weightOptions: WeightOption[];
  ingredients: string;
  shelfLife: string;
  featured?: boolean;
  bestseller: boolean;
  tags: string[];
  availability: "in-stock" | "out-of-stock" | "limited";
  rating?: number;
  reviewCount?: number;
}
