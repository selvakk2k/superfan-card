import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cardSourcePath = path.join(__dirname, '../src/superfan-card.ts');
const cardSource = fs.readFileSync(cardSourcePath, 'utf8');

console.log('🔍 Starting Superfan Card UI Text, Spelling & Capitalization Audit...\n');

let errors = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✅ Passed: ${message}`);
  } else {
    console.error(`❌ Failed: ${message}`);
    errors++;
  }
}

// 1. Audit Typo Dictionary
const commonTypos = [
  'temparature',
  'celcius',
  'horisontal',
  'verticle',
  'desription',
  'unsuccesful',
  'recieve',
  'untill',
  'blater',
  'controll'
];

let foundTypos = 0;
for (const typo of commonTypos) {
  const regex = new RegExp(`\\b${typo}\\b`, 'i');
  if (regex.test(cardSource)) {
    console.error(`❌ Typo detected: "${typo}" found in source.`);
    foundTypos++;
    errors++;
  }
}
if (foundTypos === 0) {
  console.log('✅ Passed: No common spelling typos detected in source.');
}

// 2. Audit Toast Messages for Sentence Case
const toastRegex = /_showToast\(\s*(['"`])(.*?)\1\s*\)/g;
let toastMatch;
let toastCount = 0;
let invalidToasts = 0;

while ((toastMatch = toastRegex.exec(cardSource)) !== null) {
  const toastText = toastMatch[2].trim();
  if (!toastText.startsWith('$')) {
    toastCount++;
    const firstChar = toastText.charAt(0);
    if (firstChar !== firstChar.toUpperCase()) {
      console.error(`❌ Toast string does not start with uppercase: "${toastText}"`);
      invalidToasts++;
      errors++;
    }
  }
}
assert(invalidToasts === 0, `All static toast messages (${toastCount} checked) start with a capital letter.`);

// 3. Audit Tooltip Titles for Capitalization
const titleRegex = /title=(['"`])(.*?)\1/g;
let titleMatch;
let titleCount = 0;
let invalidTitles = 0;

while ((titleMatch = titleRegex.exec(cardSource)) !== null) {
  const titleText = titleMatch[2].trim();
  if (titleText && !titleText.startsWith('$')) {
    titleCount++;
    const firstChar = titleText.charAt(0);
    if (firstChar !== firstChar.toUpperCase()) {
      console.error(`❌ Tooltip title does not start with uppercase: "${titleText}"`);
      invalidTitles++;
      errors++;
    }
  }
}
assert(invalidTitles === 0, `All static tooltip title attributes (${titleCount} checked) start with a capital letter.`);

// 4. Audit Visual Editor Section Titles
assert(cardSource.includes("title: 'Theming & Colors'"), 'Editor section title "Theming & Colors" is in Title Case.');

if (errors > 0) {
  console.error(`\n❌ UI Text Audit completed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\n🎉 All UI text, spelling, and capitalization checks passed cleanly!');
}
