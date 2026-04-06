export interface WeightOption {
  weight: string;
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
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
