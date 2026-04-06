const fs = require('fs');
const path = require('path');

const replacements = {
  'color-saffron': 'brand-saffron',
  'color-saffron-light': 'brand-saffron-light',
  'color-cocoa': 'brand-brown-deep',
  'color-crimson': 'brand-crimson',
  'color-cream': 'brand-cream',
  'color-ivory': 'brand-ivory',
  'color-border': 'brand-border',
  'color-text-dark': 'brand-dark',
  'color-text-body': 'brand-brown-mid',
  'color-text-muted': 'brand-brown-light',
  'color-text-faint': 'brand-brown-light',
  'eyebrow-tag': 'section-label',
  'badge-in-stock': 'badge-stock',
  'badge-limited': 'badge-stock',
  'badge-out-of-stock': 'badge-out',
  'card': 'card-product' // Wait, I should probably selectively replace "card" because of collision but let's see.
};

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // manual specific replacements
      content = content.replace(/\\beyebrow-tag\\b/g, 'section-label');
      content = content.replace(/\\bbadge-in-stock\\b/g, 'badge-stock');
      content = content.replace(/\\bbadge-limited\\b/g, 'badge-stock');
      content = content.replace(/\\bbadge-out\\b/g, 'badge-out');
      
      for (const [oldT, newT] of Object.entries(replacements)) {
        if (oldT === 'card' || oldT.startsWith('eyebrow') || oldT.startsWith('badge')) continue;
        content = content.split(oldT).join(newT);
      }
      
      // Fix specific "card" occurrences 
      // replace className="card p-8" -> className="card-feature p-8" in About / Home / etc.
      // this is tricky so doing regex:
      content = content.replace(/className="card ([^"]+)"/g, 'className="card-feature $1"');
      content = content.replace(/\\bcard\\b/g, 'card-product'); // Any remaining exact 'card'
      
      // Cleanup `card-product-feature` if any
      content = content.replace(/card-product-feature/g, 'card-feature');
      content = content.replace(/card-product-product/g, 'card-product');

      fs.writeFileSync(fullPath, content);
      console.log('Updated ' + fullPath);
    }
  }
}

processDir('./src');
console.log('Done');
