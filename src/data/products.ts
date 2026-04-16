import { Product } from "@/types/product";
import { slugify } from "@/lib/utils";

// ─── Category name maps ────────────────────────────────────────────────────────

const CAT_NAMES: Record<string, { en: string; hi: string }> = {
  namkeen:  { en: "Namkeen",          hi: "नमकीन" },
  mixture:  { en: "Mixture",          hi: "मिक्सचर" },
  fariyali: { en: "Fasting Snacks",   hi: "फरियाली" },
  dal:      { en: "Dal & Dana",       hi: "दाल एवं दाने" },
  maida:    { en: "Maida Items",      hi: "मैदा आइटम" },
  biscuits: { en: "Biscuits & Chakli",hi: "बिस्किट और चकली" },
  other:    { en: "Other Snacks",     hi: "अन्य स्नैक्स" },
};

// ─── Helper ────────────────────────────────────────────────────────────────────

const generateBaseProduct = (
  nameEn: string,
  nameHi: string,
  categorySlug: string,
  bestseller: boolean = false,
  descEn?: string,
  descHi?: string
): Product => {
  const cat = CAT_NAMES[categorySlug];
  return {
    id: slugify(nameEn),
    name: { en: nameEn, hi: nameHi },
    slug: slugify(nameEn),                          // always English slug
    category: cat,
    categorySlug,
    shortDescription: {
      en: descEn || `Enjoy the authentic taste of Gokul's ${nameEn}. Made fresh daily.`,
      hi: descHi || `गोकुल के ${nameHi} का प्रामाणिक स्वाद लें। रोज़ाना ताज़ा बना।`,
    },
    description: {
      en: `Gokul ke Shahi Namkeen brings you the finest ${nameEn}, prepared with traditional recipes and 100% pure ingredients. Handcrafted in Indore for that perfect crunch and flavour.`,
      hi: `गोकुल के शाही नमकीन आपके लिए सबसे बेहतरीन ${nameHi} लाते हैं, जो पारंपरिक रेसिपी और 100% शुद्ध सामग्री से बना है। इंदौर में हस्तनिर्मित — एकदम सही कुरकुरापन और स्वाद।`,
    },
    ingredients: "Gram flour, Edible Oil, Spices, Condiments, Salt",
    shelfLife: "30-45 Days",
    images: [`/images/products/${slugify(nameEn)}.jpg`],
    bestseller,
    availability: "in-stock",
    tags: [categorySlug, "Indore Special", "Fresh"],
    weightOptions: [
      { weight: "250g", price: 120 },
      { weight: "500g", price: 230 },
      { weight: "1kg",  price: 450 },
    ],
    rating: bestseller ? 4.9 : 4.6,
    reviewCount: bestseller ? 124 : 45,
  };
};

// ─── Products ─────────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ── NAMKEEN ──
  generateBaseProduct("Ratlami Sev",         "रतलामी सेव",          "namkeen", true,  "Famous Indore-style spicy sev, thick and full of traditional spices.", "प्रसिद्ध इंदौर-शैली का मसालेदार मोटा सेव — पारंपरिक मसालों से भरपूर।"),
  generateBaseProduct("Laung Sev",           "लौंग सेव",            "namkeen", true,  "Crispy and light, perfect for everyday snacking.", "कुरकुरा और हल्का — रोज़ के स्नैकिंग के लिए एकदम सही।"),
  generateBaseProduct("Doodhiya Sev",        "दूधिया सेव",          "namkeen", false, "A lighter sev variety with a mild and comforting flavour.", "हल्के और आरामदायक स्वाद वाली सेव की किस्म।"),
  generateBaseProduct("Rajasthani Kadak Sev","राजस्थानी कड़क सेव",  "namkeen", false, "Bold, crunchy sev with a classic Rajasthani-style bite.", "क्लासिक राजस्थानी अंदाज़ में बोल्ड और कुरकुरा सेव।"),
  generateBaseProduct("Ujjaini Sev",         "उज्जैनी सेव",         "namkeen", false, "Medium spicy sev with a unique Ujjaini flavour profile.", "मध्यम मसालेदार सेव — अनोखे उज्जैनी स्वाद के साथ।"),
  generateBaseProduct("Aloo Bhujiya",        "आलू भुजिया",          "namkeen", true,  "Classic crispy potato and gram flour strings.", "क्लासिक कुरकुरा आलू और बेसन की भुजिया।"),
  generateBaseProduct("Lahsun Sev",          "लहसुन सेव",           "namkeen", true,  "Garlic flavoured sev, a beloved Indore classic.", "लहसुन के स्वाद वाला सेव — इंदौर का प्रिय क्लासिक।"),
  generateBaseProduct("Tamatar Sev",         "टमाटर सेव",           "namkeen", false, "Tangy tomato-flavoured sev with a chatpata twist.", "चटपटे अंदाज़ में तीखी टमाटर-स्वाद वाली सेव।"),
  generateBaseProduct("Soya Sev",            "सोया सेव",            "namkeen", false, "Crispy sev variation with a rich soya-based texture.", "सोया-आधारित बनावट के साथ कुरकुरी सेव।"),
  generateBaseProduct("Kashmiri Sev",        "कश्मीरी सेव",         "namkeen", false, "A spiced sev with a richer masala profile.", "समृद्ध मसाला प्रोफाइल के साथ एक मसालेदार सेव।"),
  generateBaseProduct("Zero Number Fiki",    "जीरो नंबर फीकी",      "namkeen", false, "Very fine, mild sev ideal for light snacking.", "बेहद महीन, हल्की सेव — लाइट स्नैकिंग के लिए।"),
  generateBaseProduct("Palak Sev",           "पालक सेव",            "namkeen", false, "Spinach-flavoured sev with a savoury herbal note.", "पालक के स्वाद वाली सेव — स्वादिष्ट हर्बल नोट के साथ।"),

  // ── MIXTURE ──
  generateBaseProduct("Khatta Meetha Mixture", "खट्टा मीठा मिक्सचर", "mixture", true,  "Sweet and tangy classic mix with peanuts and peas.", "मूंगफली और मटर के साथ मीठा और तीखा क्लासिक मिक्स।"),
  generateBaseProduct("Charkha Mixture",       "चरखा मिक्सचर",       "mixture", true,  "Spicy traditional mixture for tea time.", "चाय के समय के लिए मसालेदार पारंपरिक मिक्सचर।"),
  generateBaseProduct("Gokul Mix",             "गोकुल मिक्स",         "mixture", true,  "Our signature house blend of premium namkeens.", "हमारा सिग्नेचर हाउस ब्लेंड — प्रीमियम नमकीन का मिश्रण।"),
  generateBaseProduct("Madrasi Mixture",       "मद्रासी मिक्सचर",    "mixture", false, "South-style spicy mixture packed with crunch and flavour.", "दक्षिण शैली का मसालेदार मिक्सचर — कुरकुरापन और स्वाद से भरपूर।"),
  generateBaseProduct("Mogar Mixture",         "मोगर मिक्सचर",       "mixture", false, "A crunchy mix featuring dal and traditional spices.", "दाल और पारंपरिक मसालों के साथ कुरकुरा मिक्सचर।"),
  generateBaseProduct("Gujarati Mixture",      "गुजराती मिक्सचर",    "mixture", false, "A sweeter and lighter mixture inspired by Gujarati taste.", "गुजराती स्वाद से प्रेरित मीठा और हल्का मिक्सचर।"),
  generateBaseProduct("Gujarati Papad Mixture","गुजराती पापड़ मिक्सचर","mixture", false, "Crunchy papad-based mixture with a Gujarati-style flavour profile.", "गुजराती शैली के स्वाद के साथ पापड़-आधारित मिक्सचर।"),
  generateBaseProduct("Makka Mixture",         "मक्का मिक्सचर",      "mixture", false, "Corn-based crispy mixture with a delightful crunch.", "मक्के-आधारित कुरकुरा मिक्सचर।"),

  // ── FARIYALI ──
  generateBaseProduct("Meetha Aloo Fariyali",      "मीठा आलू फरियाली",       "fariyali", false, "Sweet potato sticks perfect for vrat/upvas.", "व्रत/उपवास के लिए एकदम सही मीठे आलू की स्टिक।"),
  generateBaseProduct("Dhaniya Papdi",             "धनिया पापड़ी",           "fariyali", false, "Fasting-friendly crispy papdi flavoured with coriander.", "उपवास के लिए धनिया के स्वाद वाली कुरकुरी पापड़ी।"),
  generateBaseProduct("Dhaniya Papdi Moti",        "धनिया पापड़ी मोटी",      "fariyali", false, "Thicker version of coriander papdi for more crunch.", "अधिक कुरकुराहट के लिए धनिया पापड़ी का मोटा संस्करण।"),
  generateBaseProduct("Patli Chatpata Aloo Fariyali","पतली चटपटी आलू फरियाली", "fariyali", false, "Thin fasting chips with a spicy and tangy flavour.", "मसालेदार और चटपटे स्वाद वाली पतली उपवास चिप्स।"),
  generateBaseProduct("Charkhi Papdi",             "चरखी पापड़ी",            "fariyali", false, "Crispy spiral papdi ideal for vrat snacking.", "व्रत स्नैकिंग के लिए कुरकुरी सर्पिल पापड़ी।"),
  generateBaseProduct("Moti Lal Mirch Chips",      "मोटी लाल मिर्च चिप्स",  "fariyali", false, "Thick-cut chips seasoned with bold red chilli.", "बोल्ड लाल मिर्च के साथ मोटी कटी चिप्स।"),
  generateBaseProduct("Sabudana Meetha Fariyali",  "साबूदाना मीठा फरियाली", "fariyali", true,  "Sweet and crunchy sago mixture.", "मीठा और कुरकुरा साबूदाना मिक्सचर।"),
  generateBaseProduct("Uncle Chips",               "अंकल चिप्स",             "fariyali", false, "Classic-style fasting chips with simple seasoning.", "सादे मसाले के साथ क्लासिक उपवास चिप्स।"),
  generateBaseProduct("Kali Mirch Chips Patli",    "काली मिर्च चिप्स पतली", "fariyali", true,  "Thin potato chips seasoned with black pepper and sendha namak.", "काली मिर्च और सेंधा नमक के साथ पतली आलू चिप्स।"),
  generateBaseProduct("Lal Mirch Chips Patli",     "लाल मिर्च चिप्स पतली",  "fariyali", false, "Thin potato chips with a spicy red chilli kick.", "मसालेदार लाल मिर्च के साथ पतली आलू चिप्स।"),
  generateBaseProduct("Rajgira Gud Ladoo",         "राजगिरा गुड़ लड्डू",     "fariyali", true,  "Perfect sweet for fasting, made with amaranth and jaggery.", "एमरेंथ और गुड़ से बना उपवास के लिए एकदम सही मिठाई।"),
  generateBaseProduct("Tamatar Aloo Chips",        "टमाटर आलू चिप्स",       "fariyali", false, "Tomato-flavoured potato chips with a tangy taste.", "तीखे स्वाद वाली टमाटर-स्वाद आलू चिप्स।"),
  generateBaseProduct("Salted Chips Patli",        "नमकीन पतली चिप्स",      "fariyali", false, "Lightly salted thin potato chips for pure snacking.", "शुद्ध स्नैकिंग के लिए हल्की नमकीन पतली आलू चिप्स।"),
  generateBaseProduct("Salted Chips Moti",         "नमकीन मोटी चिप्स",      "fariyali", false, "Extra thick salted chips with a satisfying crunch.", "संतोषजनक कुरकुराहट के साथ अतिरिक्त मोटी नमकीन चिप्स।"),
  generateBaseProduct("Rajgira Shakar Ladoo",      "राजगिरा शकर लड्डू",     "fariyali", false, "Fasting ladoos made with rajgira and sugar.", "राजगिरा और चीनी से बने उपवास के लड्डू।"),
  generateBaseProduct("Kela Chips",                "केला चिप्स",             "fariyali", false, "Crispy banana chips, a vrat-time favourite.", "कुरकुरी केला चिप्स — व्रत के समय की पसंद।"),
  generateBaseProduct("Kali Mirch South Kela Chips","काली मिर्च साउथ केला चिप्स","fariyali", false, "South-style banana chips with black pepper seasoning.", "काली मिर्च के साथ दक्षिण-शैली की केला चिप्स।"),
  generateBaseProduct("Rajgira Patti",             "राजगिरा पट्टी",          "fariyali", false, "Crunchy rajgira brittle ideal for fasting snacks.", "उपवास के स्नैक के लिए एकदम सही कुरकुरी राजगिरा पट्टी।"),

  // ── DAL & DANA ──
  generateBaseProduct("Dal Mot Meethi",              "दाल मोट मीठी",              "dal", false, "Sweet-coated dal snack with a crunchy finish.", "मीठी परत वाला दाल स्नैक — कुरकुरी समाप्ति के साथ।"),
  generateBaseProduct("Tasty Dana",                 "टेस्टी दाना",               "dal", false, "Chatpata fried dana made for everyday munching.", "रोज़ाना मुँह चलाने के लिए चटपटा तला दाना।"),
  generateBaseProduct("Chana Dal",                  "चना दाल",                   "dal", false, "Classic fried chana dal with simple seasoning.", "सादे मसाले के साथ क्लासिक तली चना दाल।"),
  generateBaseProduct("Charkhi Dalmot",             "चरखी दालमोट",               "dal", false, "A crunchy dal-based namkeen with traditional flavour.", "पारंपरिक स्वाद के साथ कुरकुरा दाल-आधारित नमकीन।"),
  generateBaseProduct("Charkhi Gujarati Tasty Dana","चरखी गुजराती टेस्टी दाना", "dal", false, "Gujarati-style tasty dana with a savoury-sweet balance.", "नमकीन-मीठे संतुलन के साथ गुजराती-शैली का टेस्टी दाना।"),
  generateBaseProduct("Chana Dal Pudina",           "चना दाल पुदीना",            "dal", true,  "Mint-flavoured fried chana dal.", "पुदीने के स्वाद वाली तली चना दाल।"),
  generateBaseProduct("Moong Mogar",                "मूंग मोगर",                 "dal", true,  "Classic salted fried moong dal.", "क्लासिक नमकीन तली मूंग दाल।"),
  generateBaseProduct("Kali Mirch Dana",            "काली मिर्च दाना",           "dal", false, "Crisp dana with black pepper seasoning.", "काली मिर्च के साथ कुरकुरा दाना।"),
  generateBaseProduct("Kabuli Chana",               "काबुली चना",                "dal", true,  "Crispy fried chickpeas with chatpata masala.", "चटपटे मसाले के साथ कुरकुरे तले काबुली चने।"),
  generateBaseProduct("Hing Chana",                 "हींग चना",                  "dal", false, "Fried chana flavoured with hing and spices.", "हींग और मसालों से बना तला चना।"),
  generateBaseProduct("Tala Dana",                  "तला दाना",                  "dal", false, "Deep-fried dana snack with satisfying crunch.", "संतोषजनक कुरकुराहट के साथ गहरे तले दाना।"),
  generateBaseProduct("Masala Matar",               "मसाला मटर",                 "dal", false, "Spiced fried peas, great for tea-time snacking.", "मसालेदार तले मटर — चाय के समय के लिए बढ़िया।"),
  generateBaseProduct("Lal Mirch Dana",             "लाल मिर्च दाना",            "dal", false, "Dana snack flavoured with bold red chilli.", "बोल्ड लाल मिर्च के स्वाद वाला दाना।"),
  generateBaseProduct("Salted Peanut",              "नमकीन मूंगफली",             "dal", false, "Classic salted peanuts with a crisp bite.", "कुरकुरे स्वाद के साथ क्लासिक नमकीन मूंगफली।"),
  generateBaseProduct("Salted Chana",               "नमकीन चना",                 "dal", false, "Salted roasted chana with a simple savoury taste.", "साधारण नमकीन स्वाद के साथ भुना नमकीन चना।"),

  // ── MAIDA ITEMS ──
  generateBaseProduct("Mini Kachori",           "मिनी कचोरी",          "maida", true,  "Bite-sized crispy kachoris with a spicy dry filling.", "मसालेदार सूखे भरावन के साथ बाइट-साइज़ कुरकुरी कचोरी।"),
  generateBaseProduct("Chhoti Bhakar Badi",     "छोटी भाकर बड़ी",     "maida", false, "Smaller version of the classic bhakar badi with sweet-spicy filling.", "मीठे-मसालेदार भरावन के साथ क्लासिक भाकर बड़ी का छोटा संस्करण।"),
  generateBaseProduct("Shakkarpare",            "शक्करपारे",           "maida", false, "Traditional crispy sweet bites loved across generations.", "पीढ़ियों से पसंद की जाने वाली पारंपरिक कुरकुरी मिठाई।"),
  generateBaseProduct("Mini Samosa",            "मिनी समोसा",          "maida", false, "Mini crispy samosas perfect for tea-time snacking.", "चाय के समय के लिए एकदम सही मिनी कुरकुरे समोसे।"),
  generateBaseProduct("Bhakar Badi",            "भाकर बड़ी",           "maida", true,  "Sweet, spicy, and tangy rolled snacks.", "मीठे, मसालेदार और तीखे रोल्ड स्नैक्स।"),
  generateBaseProduct("Saloni",                 "सलोनी",               "maida", false, "Crisp savoury snack with a classic homemade taste.", "क्लासिक घरेलू स्वाद के साथ कुरकुरा नमकीन स्नैक।"),
  generateBaseProduct("Mathri Sada",            "मठरी सादा",           "maida", false, "Classic flaky savory biscuits.", "क्लासिक परतदार नमकीन बिस्किट।"),
  generateBaseProduct("Chatpati Chawal Phali",  "चटपटी चावल फली",     "maida", false, "Crunchy rice sticks with a tangy masala coating.", "तीखी मसाला कोटिंग के साथ कुरकुरी चावल फली।"),
  generateBaseProduct("Kali Mirch Kaju Phali",  "काली मिर्च काजू फली","maida", false, "Peppery phali snack with a rich crunchy bite.", "समृद्ध कुरकुरे स्वाद के साथ काली मिर्च की काजू फली।"),
  generateBaseProduct("Chawal Phali",           "चावल फली",            "maida", false, "Classic crispy chawal phali snack for tea-time.", "चाय के समय के लिए क्लासिक कुरकुरी चावल फली।"),

  // ── BISCUITS & CHAKLI ──
  generateBaseProduct("Khari",                  "खारी",                  "biscuits", false, "Light, flaky khari with a crisp buttery texture.", "हल्की, परतदार खारी — कुरकुरी बटरी बनावट के साथ।"),
  generateBaseProduct("Chocolate Coconut Biscuit","चॉकलेट नारियल बिस्किट","biscuits", false, "A delightful fusion of chocolate and coconut.", "चॉकलेट और नारियल का एक आनंददायक संयोजन।"),
  generateBaseProduct("Ajwain Biscuit",         "अजवाइन बिस्किट",       "biscuits", false, "Savoury biscuits flavoured with aromatic ajwain.", "सुगंधित अजवाइन के स्वाद वाले नमकीन बिस्किट।"),
  generateBaseProduct("Orange Nan Khatai",      "ऑरेंज नान खटाई",       "biscuits", false, "Soft, crumbly nan khatai with a citrusy note.", "खट्टे नोट के साथ मुलायम और टूटने वाली नान खटाई।"),
  generateBaseProduct("Nan Khatai",             "नान खटाई",             "biscuits", false, "Traditional Indian shortbread cookie, soft and crumbly.", "पारंपरिक भारतीय शॉर्टब्रेड कुकी — मुलायम और टूटने वाली।"),
  generateBaseProduct("Double Cracker",         "डबल क्रैकर",             "biscuits", false, "Extra crisp cracker-style biscuits for light snacking.", "हल्के स्नैकिंग के लिए अतिरिक्त कुरकुरे क्रैकर-स्टाइल बिस्किट।"),
  generateBaseProduct("Double Decker",          "डबल डेकर",             "biscuits", false, "Layered crispy biscuits with a unique texture.", "अनोखी बनावट के साथ परतदार कुरकुरे बिस्किट।"),
  generateBaseProduct("Choco Chips Biscuit",    "चॉको चिप्स बिस्किट",   "biscuits", false, "Crunchy biscuits loaded with chocolate chip flavour.", "चॉकलेट चिप के स्वाद से भरे कुरकुरे बिस्किट।"),
  generateBaseProduct("Jeera Biscuit",          "जीरा बिस्किट",          "biscuits", false, "Classic cumin biscuits with a light savoury crunch.", "हल्के नमकीन कुरकुरेपन के साथ क्लासिक जीरा बिस्किट।"),
  generateBaseProduct("Kaju Biscuit",           "काजू बिस्किट",          "biscuits", true,  "Rich, buttery cashew cookies.", "समृद्ध और बटरी काजू कुकीज़।"),
  generateBaseProduct("Chhote Kaju Biscuit",    "छोटे काजू बिस्किट",    "biscuits", false, "Smaller cashew biscuits with the same rich flavour.", "उसी समृद्ध स्वाद के साथ छोटे काजू बिस्किट।"),
  generateBaseProduct("Fruit Biscuit",          "फ्रूट बिस्किट",         "biscuits", false, "Classic fruit biscuits with a sweet bakery-style taste.", "मीठे बेकरी-शैली के स्वाद के साथ क्लासिक फ्रूट बिस्किट।"),
  generateBaseProduct("Methi Masala Chakli",    "मेथी मसाला चकली",      "biscuits", true,  "Crispy spiral snacks flavoured with fenugreek.", "मेथी के स्वाद वाली कुरकुरी सर्पिल चकली।"),
  generateBaseProduct("Butter Chakli",          "बटर चकली",              "biscuits", false, "Smooth buttery chakli with a rich savoury finish.", "समृद्ध नमकीन खत्म के साथ स्मूथ बटरी चकली।"),
  generateBaseProduct("Masala Chakli",          "मसाला चकली",            "biscuits", false, "Spiced chakli with a bold crunchy flavour.", "बोल्ड कुरकुरे स्वाद के साथ मसालेदार चकली।"),
  generateBaseProduct("Lahsun Chakli",          "लहसुन चकली",            "biscuits", false, "Garlic-flavoured chakli for spice lovers.", "मसाला प्रेमियों के लिए लहसुन के स्वाद की चकली।"),
  generateBaseProduct("Soft Chakli",            "सॉफ्ट चकली",            "biscuits", false, "A softer variation of chakli with gentle seasoning.", "हल्के मसाले के साथ चकली का एक नरम संस्करण।"),

  // ── OTHER ──
  generateBaseProduct("Besan Papdi Fiki",   "बेसन पापड़ी फीकी",   "other", false, "Mild besan papdi with a light, simple flavour.", "हल्के, सादे स्वाद के साथ बेसन पापड़ी।"),
  generateBaseProduct("Soya Stick",         "सोया स्टिक",         "other", false, "Crunchy soya-based snacks.", "कुरकुरे सोया-आधारित स्नैक्स।"),
  generateBaseProduct("Charkhi Boondi",     "चरखी बूंदी",         "other", false, "Crunchy boondi-style snack with a traditional flavour.", "पारंपरिक स्वाद के साथ कुरकुरा बूंदी-शैली का स्नैक।"),
  generateBaseProduct("Soya Chips",         "सोया चिप्स",         "other", false, "Crispy soya chips with a savoury bite.", "नमकीन स्वाद के साथ कुरकुरी सोया चिप्स।"),
  generateBaseProduct("Fiki Boondi",        "फीकी बूंदी",         "other", false, "Plain boondi with a mild and versatile taste.", "हल्के और बहुुउद्देशीय स्वाद के साथ सादी बूंदी।"),
  generateBaseProduct("Bhavnagari Gathiya", "भावनगरी गाठिया",     "other", false, "Classic Bhavnagari-style thick gathiya.", "क्लासिक भावनगरी-शैली की मोटी गाठिया।"),
  generateBaseProduct("Rasbhari",           "रसभरी",              "other", false, "A sweet traditional treat with nostalgic flavour.", "नॉस्टेल्जिक स्वाद के साथ एक मीठी पारंपरिक मिठाई।"),
  generateBaseProduct("Lahsun Parmal",      "लहसुन परमल",         "other", false, "Garlic-flavoured parmal with a light crisp texture.", "हल्की कुरकुरी बनावट के साथ लहसुन परमल।"),
  generateBaseProduct("Star Gadiya",        "स्टार गड़िया",       "other", false, "Crunchy traditional snack with a playful shape.", "एक मज़ेदार आकार के साथ कुरकुरा पारंपरिक स्नैक।"),
  generateBaseProduct("Rajgira Gud Patti Round",   "राजगिरा गुड़ पट्टी गोल", "other", false, "Round rajgira brittle with the same classic taste.", "उसी क्लासिक स्वाद के साथ गोल राजगिरा पट्टी।"),
  generateBaseProduct("Rajgira Gud Patti Square",  "राजगिरा गुड़ पट्टी चौकोर", "other", false, "Square-cut rajgira brittle for easy snacking.", "आसान स्नैकिंग के लिए चौकोर कटी राजगिरा पट्टी।"),
  generateBaseProduct("Salted Parmal",             "नमकीन परमल",         "other", false, "Light salted parmal ideal for everyday munching.", "रोज़ाना मुँह चलाने के लिए हल्का नमकीन परमल।"),
  generateBaseProduct("Agra Petha",         "आगरा पेठा",          "other", false, "Classic Agra petha with a soft sweet bite.", "मुलायम मीठे स्वाद के साथ क्लासिक आगरा पेठा।"),
  generateBaseProduct("Gud Patti Round",   "गुड़ पट्टी गोल",     "other", false, "Round jaggery brittle for a classic sweet crunch.", "क्लासिक मीठे कुरकुराहट के लिए गोल गुड़ पट्टी।"),
  generateBaseProduct("Gud Patti Square",  "गुड़ पट्टी चौकोर",   "other", false, "Square-cut jaggery brittle for a perfectly balanced bite.", "एकदम संतुलित स्वाद के लिए चौकोर कटी गुड़ पट्टी।"),
  generateBaseProduct("Chana Jor Garam",   "चना जोर गरम",        "other", true,  "Flat roasted gram with tangy spices.", "तीखे मसालों के साथ चपटे भुने चने।"),
  generateBaseProduct("Shahi Sohan Papdi", "शाही सोहन पापड़ी",   "other", true,  "Flaky, melt-in-the-mouth traditional sweet.", "परतदार, मुँह में पिघलने वाली पारंपरिक मिठाई।"),
];

// ─── Query helpers ─────────────────────────────────────────────────────────────

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
