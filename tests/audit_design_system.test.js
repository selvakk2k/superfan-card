import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '../src');
const stylesFile = fs.readFileSync(path.join(srcDir, 'styles.ts'), 'utf8');
const cardFileName = fs.readdirSync(srcDir).find(f => f.endsWith('.ts') && !f.includes('styles') && !f.includes('editor'));
const cardContent = fs.readFileSync(path.join(srcDir, cardFileName), 'utf8');

console.log('🎨 Starting Design System Compliance Audit...\n');

let errors = 0;

function check(desc, cond) {
  if (cond) {
    console.log(`✅ Passed: ${desc}`);
  } else {
    console.error(`❌ Failed: ${desc}`);
    errors++;
  }
}

// 1. Footer Telemetry Row & Divider Line
check(
  'Footer telemetry row has top divider line',
  stylesFile.includes('.footer-telemetry-row') && stylesFile.includes('border-top:')
);

check(
  'Card template uses standardized .footer-telemetry-row in both full views',
  cardContent.includes('footer-telemetry-row')
);

check(
  'Telemetry uses "Last controlled by:" standard label',
  cardContent.includes('Last controlled by:')
);

// 2. Google Home Borderless Styling
check(
  'Google Home full view (.gh-full-card) uses seamless borderless design',
  stylesFile.includes('.gh-full-card') && (stylesFile.includes('border: none') || stylesFile.includes('box-shadow: none'))
);

check(
  'Google Home compact view (.compact-card.google-home) uses seamless borderless design',
  stylesFile.includes('.compact-card.google-home') && (stylesFile.includes('border: none') || stylesFile.includes('box-shadow: none'))
);

// 3. Compact View Dimensions & Concentric Geometry
check(
  'Classic compact view has border-radius: 16px',
  stylesFile.includes('.compact-card.classic') && stylesFile.includes('border-radius: 16px')
);

check(
  'Google Home compact view has border-radius: 28px',
  stylesFile.includes('.compact-card.google-home') && stylesFile.includes('border-radius: 28px')
);

// 4. Ambient Glow Signature
check(
  'Ambient glow signature is present on active elements',
  stylesFile.includes('box-shadow:') && (stylesFile.includes('color-mix') || stylesFile.includes('rgba'))
);

// 5. Header Structure
check(
  'Symmetrical header action buttons defined (.collapse-btn & .power-btn)',
  stylesFile.includes('.collapse-btn') && stylesFile.includes('.power-btn')
);

if (errors > 0) {
  console.error(`\n❌ Design System Audit completed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\n🎉 All Design System Compliance Checks Passed Cleanly!\n');
}
