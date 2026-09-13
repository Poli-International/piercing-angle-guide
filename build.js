import fs from 'fs';
import path from 'path';

// Production Build and Verification Suite for Poli International
console.log('--- Starting Poli International Production Verification ---');

// 1. Verify existence of canonical files
const requiredFiles = [
  'index.html',
  'embed.html',
  'css/style.css',
  'js/i18n.js',
  'js/i18n/en.js',
  'js/i18n/de.js',
  'js/i18n/es.js',
  'js/i18n/fr.js',
  'js/i18n/it.js',
  'js/i18n/pt.js',
  'js/i18n/nl.js',
  'js/piercing-data.js',
  'js/jewelry-options.js',
  'js/anatomy-3d-model.js',
  'js/modules/storage-manager.js',
  'js/modules/calculator.js',
  'js/modules/ui-controller.js',
  'js/visualizer.js',
  'js/common.js',
  'js/piercing-guide.js',
  'images/Poli-International-Co.webp'
];

let hasErrors = false;

requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`[ERROR] Required file missing: ${file}`);
    hasErrors = true;
  }
});

// 2. Ban 13: File Size Verification (Max 512 KiB = 524,288 bytes)
function checkFileSizes(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') continue;
    if (entry.isDirectory()) {
      checkFileSizes(fullPath);
    } else {
      const stats = fs.statSync(fullPath);
      if (stats.size > 524288) {
        console.error(`[ERROR] File exceeds 512 KiB limit (Ban 13): ${fullPath} (${stats.size} bytes)`);
        hasErrors = true;
      }
    }
  }
}
checkFileSizes('.');

// 3. Ban 6: Verify Zero External Resources in Browser Code
const browserFiles = ['index.html', 'embed.html', 'css/style.css'];
function collectJsFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectJsFiles(fullPath);
    } else if (entry.name.endsWith('.js')) {
      browserFiles.push(fullPath);
    }
  }
}
collectJsFiles('js');

// Links to Poli International pages and the public repo are navigation, not loaded resources.
const bannedTokens = ['http://', 'https://', 'cdn', 'unpkg', 'unsplash'];
browserFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8').replace(/https:\/\/(poliinternational\.com|github\.com\/Poli-International)[^"'\s<)]*/g, '');
  bannedTokens.forEach(token => {
    const regex = new RegExp(token, 'i');
    if (regex.test(content)) {
      console.error(`[ERROR] External resource token '${token}' found in ${file} (Ban 6)`);
      hasErrors = true;
    }
  });
});

// 4. Ban 9: Verify Zero Color Literals in Style Attributes
['index.html', 'embed.html'].forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const styleColorRegex = /style=["'][^"']*(#[0-9a-fA-F]{3,6}|rgb\([^)]+\)|rgba\([^)]+\))[^"']*["']/gi;
  const matches = content.match(styleColorRegex);
  if (matches) {
    console.error(`[ERROR] Hardcoded color literals in style attribute in ${file} (Ban 9):`, matches);
    hasErrors = true;
  }
});

// 5. Ban 8: Verify Key Parity Across All 7 Languages
const languages = ['en', 'de', 'es', 'fr', 'it', 'pt', 'nl'];
const keySets = {};
languages.forEach(lang => {
  const content = fs.readFileSync(`js/i18n/${lang}.js`, 'utf8');
  const keys = new Set();
  const keyRegex = /"([^"]+)"\s*:/g;
  let match;
  while ((match = keyRegex.exec(content)) !== null) {
    keys.add(match[1]);
  }
  keySets[lang] = keys;
});

const enKeys = keySets['en'];
languages.forEach(lang => {
  if (lang === 'en') return;
  const missingFromLang = [...enKeys].filter(k => !keySets[lang].has(k));
  const extraInLang = [...keySets[lang]].filter(k => !enKeys.has(k));
  if (missingFromLang.length > 0) {
    console.error(`[ERROR] ${lang} missing ${missingFromLang.length} keys present in English`);
    hasErrors = true;
  }
  if (extraInLang.length > 0) {
    console.error(`[ERROR] ${lang} has ${extraInLang.length} extra keys not in English`);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.error('[BUILD FAILED] Compliance checks failed.');
  process.exit(1);
}

console.log('✓ All required canonical files present.');
console.log('✓ Ban 13 passed: All files strictly under 512 KiB.');
console.log('✓ Ban 6 passed: Zero external resource URLs in browser code.');
console.log('✓ Ban 9 passed: Zero color literals in style attributes.');
console.log(`✓ Ban 8 passed: Perfect 100% key parity across all 7 languages (${enKeys.size} keys each).`);
console.log('Build completed successfully: single canonical root distribution verified.');

