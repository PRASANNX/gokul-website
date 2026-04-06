import { Product } from "@/types/product";
import { slugify } from "@/lib/utils";

const generateBaseProduct = (
  name: string,
  categorySlug: string,
  categoryName: string,
  bestseller: boolean = false,
  customDesc?: string
): Product => ({
  id: slugify(name),
  name,
  slug: slugify(name),
  category: categoryName,
  categorySlug,
  shortDescription: customDesc || `Enjoy the authentic taste of Gokul's ${name}. Made fresh daily.`,
  description: `Gokul ke Shahi Namkeen brings you the finest ${name}, prepared with traditional recipes and 100% pure ingredients. Handcrafted in Indore for that perfect crunch and flavour.`,
  ingredients: "Gram flour, Edible Oil, Spices, Condiments, Salt",
  shelfLife: "30-45 Days",
  images: [`/images/products/${slugify(name)}.jpg`],
  bestseller,
  availability: "in-stock",
  tags: [categorySlug, "Indore Special", "Fresh"],
  weightOptions: [
    { weight: "250g", price: 120 },
    { weight: "500g", price: 230 },
    { weight: "1kg", price: 450 },
  ],
  rating: bestseller ? 4.9 : 4.6,
  reviewCount: bestseller ? 124 : 45,
});

export const products: Product[] = [
  // ── NAMKEEN ──
  generateBaseProduct("Ratlami Sev", "namkeen", "नमकीन", true, "Famous Indore-style spicy sev, thick and full of traditional spices."),
  generateBaseProduct("Lagli Sev", "namkeen", "नमकीन", true, "Crispy and light, perfect for everyday snacking."),
  generateBaseProduct("Ujjaini Sev", "namkeen", "नमकीन", false, "Medium spicy sev with a unique Ujjaini flavour profile."),
  generateBaseProduct("Aloo Bhujiya", "namkeen", "नमकीन", false, "Classic crispy potato and gram flour strings."),
  generateBaseProduct("Lahsun Sev", "namkeen", "नमकीन", true, "Garlic flavoured sev, a beloved Indore classic."),

  // ── MIXTURE ──
  generateBaseProduct("Khatta Meetha Mixture", "mixture", "मिक्सचर", true, "Sweet and tangy classic mix with peanuts and peas."),
  generateBaseProduct("Charkha Mixture", "mixture", "मिक्सचर", false, "Spicy traditional mixture for tea time."),
  generateBaseProduct("Gokul Mix", "mixture", "मिक्सचर", true, "Our signature house blend of premium namkeens."),
  generateBaseProduct("Makka Mixture", "mixture", "मिक्सचर", false, "Corn-based crispy mixture with a delightful crunch."),

  // ── FARIYALI ──
  generateBaseProduct("Rajgira Gud Ladoo", "fariyali", "फरियाली", true, "Perfect sweet for fasting, made with amaranth and jaggery."),
  generateBaseProduct("Meetha Aloo Fariyali", "fariyali", "फरियाली", false, "Sweet potato sticks perfect for vrat/upvas."),
  generateBaseProduct("Kali Mirch Chips Patli", "fariyali", "फरियाली", false, "Thin potato chips seasoned with black pepper and sendha namak."),
  generateBaseProduct("Sabudana Meetha Fariyali", "fariyali", "फरियाली", true, "Sweet and crunchy sago mixture."),

  // ── DAL & DANA ──
  generateBaseProduct("Dal Moti Meethi", "dal", "दाल एवं दाने", false, "Sweet coated pulses."),
  generateBaseProduct("Kabuli Chana", "dal", "दाल एवं दाने", false, "Crispy fried chickpeas with chatpata masala."),
  generateBaseProduct("Chana Dal Pudina", "dal", "दाल एवं दाने", true, "Mint-flavoured fried chana dal."),
  generateBaseProduct("Moong Mogar", "dal", "दाल एवं दाने", true, "Classic salted fried moong dal."),

  // ── MAIDA ──
  generateBaseProduct("Mini Kachori", "maida", "मैदा आइटम", true, "Bite-sized crispy kachoris with a spicy dry filling."),
  generateBaseProduct("Bhakar Badi", "maida", "मैदा आइटम", true, "Sweet, spicy, and tangy rolled snacks."),
  generateBaseProduct("Mathri Sada", "maida", "मैदा आइटम", false, "Classic flaky savory biscuits."),

  // ── BISCUITS ──
  generateBaseProduct("Kaju Biscuit", "biscuits", "Biscuits & Chakli", true, "Rich, buttery cashew cookies."),
  generateBaseProduct("Methi Masala Chakli", "biscuits", "Biscuits & Chakli", true, "Crispy spiral snacks flavoured with fenugreek."),
  generateBaseProduct("Chocolate Coconut Biscuit", "biscuits", "Biscuits & Chakli", false, "A delightful fusion of chocolate and coconut."),

  // ── OTHER ──
  generateBaseProduct("Chana Jor Garam", "other", "अन्य", true, "Flat roasted gram with tangy spices."),
  generateBaseProduct("Soya Stick", "other", "अन्य", false, "Crunchy soya-based snacks."),
  generateBaseProduct("Shahi Sohan Papddi", "other", "अन्य", true, "Flaky, melt-in-the-mouth traditional sweet."),
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.bestseller).slice(0, 8);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}
