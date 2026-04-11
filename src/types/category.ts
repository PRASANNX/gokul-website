import { BilingualString } from "./product";

export interface Category {
  id: string;
  name: BilingualString;
  slug: string;
  description: BilingualString;
  image: string;
  productCount?: number;
  featured: boolean;
  emoji: string;
}
