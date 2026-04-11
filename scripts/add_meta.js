const fs = require("fs");
const en = JSON.parse(fs.readFileSync("src/messages/en.json", "utf8"));
const hi = JSON.parse(fs.readFileSync("src/messages/hi.json", "utf8"));
const meta = {
  home: { title: "Gokul Namkeen", description: "Authentic Indore snacks and sweets." },
  about: { title: "About Us", description: "Our authentic Indore heritage story." },
  contact: { title: "Contact", description: "Get in touch with Gokul Namkeen." },
  faq: { title: "FAQ", description: "Frequently asked questions." },
  products: { title: "All Products", description: "Shop the finest premium namkeen and sweets." },
  bulkOrders: { title: "Bulk Orders", description: "Order Gokul snacks in wholesale for events." },
  giftPacks: { title: "Gift Packs", description: "Celebrate with the Gokul collection of hampers." },
  categories: { title: "Categories", description: "Shop our collections." }
};
const metahi = {
  home: { title: "गोकुल नमकीन", description: "प्रामाणिक इंदौर स्नैक्स और मिठाइयाँ।" },
  about: { title: "हमारे बारे में", description: "हमारी प्रामाणिक इंदौर विरासत की कहानी।" },
  contact: { title: "संपर्क करें", description: "गोकुल नमकीन से संपर्क करें।" },
  faq: { title: "सामान्य प्रश्न", description: "अक्सर पूछे जाने वाले प्रश्न।" },
  products: { title: "सभी उत्पाद", description: "प्रीमियम नमकीन और मिठाई की विस्तृत श्रृंखला।" },
  bulkOrders: { title: "थोक आदेश", description: "घटनाओं के लिए थोक में गोकुल स्नैक्स का आदेश दें।" },
  giftPacks: { title: "उपहार पैक", description: "गिफ्ट के गोकुल संग्रह के साथ जश्न मनाएं।" },
  categories: { title: "श्रेणियाँ", description: "हमारी शुद्ध श्रेणियां देखें।" }
};
en.metadata = meta; hi.metadata = metahi;
fs.writeFileSync("src/messages/en.json", JSON.stringify(en, null, 2));
fs.writeFileSync("src/messages/hi.json", JSON.stringify(hi, null, 2));
