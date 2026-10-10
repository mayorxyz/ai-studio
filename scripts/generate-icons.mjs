#!/usr/bin/env node

/**
 * Generate favicon and app icons as SVG.
 * Outputs: favicon.svg, favicon-32.svg, apple-touch-icon.svg, etc.
 * Usage: node scripts/generate-icons.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');

function faviconSVG(size) {
  const padding = size * 0.1;
  const frameSize = size - padding * 2;
  const crosshairSize = size * 0.15;
  const fontSize = size * 0.5;
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#0a0a0a"/>
  <rect x="${padding}" y="${padding}" width="${frameSize}" height="${frameSize}" fill="none" stroke="#00ff88" stroke-width="${size * 0.03}"/>
  <!-- Crosshair notch at top-right -->
  <line x1="${size - padding}" y1="${padding + crosshairSize / 2}" x2="${size - padding - crosshairSize}" y2="${padding + crosshairSize / 2}" stroke="#00ff88" stroke-width="${size * 0.02}"/>
  <line x1="${size - padding - crosshairSize / 2}" y1="${padding}" x2="${size - padding - crosshairSize / 2}" y2="${padding + crosshairSize}" stroke="#00ff88" stroke-width="${size * 0.02}"/>
  <!-- Letter N -->
  <text x="${size / 2}" y="${size / 2 + fontSize * 0.35}" font-family="Inter, sans-serif" font-size="${fontSize}" font-weight="700" fill="#00ff88" text-anchor="middle">N</text>
</svg>`;
}

function ogDefaultSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <defs>
    <radialGradient id="glow" cx="30%" cy="40%" r="60%">
      <stop offset="0%" style="stop-color:#00ff88;stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:#00ff88;stop-opacity:0"/>
    </radialGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#222222" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.3"/>
  <!-- Frame -->
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#222222" stroke-width="1"/>
  <!-- Logo -->
  <text x="600" y="280" font-family="Inter, sans-serif" font-size="120" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="8">NOCTURN</text>
  <text x="600" y="340" font-family="JetBrains Mono, monospace" font-size="18" fill="#888888" text-anchor="middle" letter-spacing="4">AI FILM · ANIMATION · AUTOMATION</text>
  <!-- Accent word -->
  <text x="600" y="420" font-family="Playfair Display, serif" font-size="48" font-style="italic" fill="#00ff88" text-anchor="middle">studio</text>
  <!-- Crosshairs -->
  <line x1="40" y1="40" x2="80" y2="40" stroke="#555" stroke-width="1"/>
  <line x1="40" y1="40" x2="40" y2="80" stroke="#555" stroke-width="1"/>
  <line x1="1160" y1="40" x2="1120" y2="40" stroke="#555" stroke-width="1"/>
  <line x1="1160" y1="40" x2="1160" y2="80" stroke="#555" stroke-width="1"/>
  <line x1="40" y1="590" x2="80" y2="590" stroke="#555" stroke-width="1"/>
  <line x1="40" y1="590" x2="40" y2="550" stroke="#555" stroke-width="1"/>
  <line x1="1160" y1="590" x2="1120" y2="590" stroke="#555" stroke-width="1"/>
  <line x1="1160" y1="590" x2="1160" y2="550" stroke="#555" stroke-width="1"/>
</svg>`;
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
  console.log(`  ✓ ${path.relative(root, filePath)}`);
}

console.log('Generating favicon and app icons...\n');

// Favicon SVG (main)
writeFile(path.join(publicDir, 'favicon.svg'), faviconSVG(32));

// Favicon 32
writeFile(path.join(publicDir, 'favicon-32.svg'), faviconSVG(32));

// Apple touch icon
writeFile(path.join(publicDir, 'apple-touch-icon.svg'), faviconSVG(180));

// Icon 192
writeFile(path.join(publicDir, 'icon-192.svg'), faviconSVG(192));

// Icon 512
writeFile(path.join(publicDir, 'icon-512.svg'), faviconSVG(512));

// Maskable 512
writeFile(path.join(publicDir, 'maskable-512.svg'), faviconSVG(512));

// OG default
writeFile(path.join(publicDir, 'og-default.svg'), ogDefaultSVG());

console.log('\n✓ Icon generation complete');
