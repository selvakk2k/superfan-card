import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const stylesFilePath = path.join(__dirname, '../src/styles.ts');
const cssContent = fs.readFileSync(stylesFilePath, 'utf8');

console.log('🔍 Starting Superfan Card Button Hover & CSS Audit...\n');

const interactiveSelectors = [
  '.power-btn',
  '.speed-btn',
  '.pill-btn',
  '.gh-power-btn',
  '.gh-pill',
  '.compact-icon-btn',
  '.compact-action-btn'
];

let errors = 0;

interactiveSelectors.forEach(selector => {
  const hoverRegex = new RegExp(`${selector.replace('.', '\\.')}(:hover|\\.disabled)`, 'i');
  if (hoverRegex.test(cssContent)) {
    console.log(`✅ Passed: ${selector} has valid hover/interactive CSS rules.`);
  } else {
    console.error(`❌ Failed: ${selector} is missing a :hover CSS rule.`);
    errors++;
  }
});

// Verify ha-card has overflow: hidden
if (/ha-card\s*\{[^}]*overflow:\s*hidden/i.test(cssContent)) {
  console.log('✅ Passed: ha-card has overflow: hidden set.');
} else {
  console.error('❌ Failed: ha-card is missing overflow: hidden.');
  errors++;
}

// Verify --sf-surface-hover uses color-mix
if (/--sf-surface-hover:\s*color-mix/i.test(cssContent)) {
  console.log('✅ Passed: --sf-surface-hover uses color-mix for safe theme contrast on hover.');
} else {
  console.error('❌ Failed: --sf-surface-hover does not use color-mix.');
  errors++;
}

if (errors > 0) {
  console.error(`\n❌ Audit completed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\n🎉 All button hover & CSS checks passed cleanly!');
}
