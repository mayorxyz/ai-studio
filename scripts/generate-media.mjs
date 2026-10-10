#!/usr/bin/env node

/**
 * Generate deterministic placeholder SVG images for all content entries.
 * Style: dark bg, accent glow, grid overlay, crosshairs, mono caption.
 * Usage: node scripts/generate-media.mjs [--force]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');
const force = process.argv.includes('--force');

// Simple hash function for deterministic seed
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function generateSVG({ width, height, color, caption, tag, seed }) {
  const h = hash(seed || caption);
  const glowX = (h % 60) + 20;
  const glowY = (h % 60) + 20;
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#0a0a0a"/>
  <defs>
    <radialGradient id="glow" cx="${glowX}%" cy="${glowY}%" r="50%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:${color};stop-opacity:0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222222" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>
  <rect width="${width}" height="${height}" fill="url(#grid)" opacity="0.3"/>
  <!-- Corner crosshairs -->
  <line x1="20" y1="20" x2="40" y2="20" stroke="#555" stroke-width="1"/>
  <line x1="20" y1="20" x2="20" y2="40" stroke="#555" stroke-width="1"/>
  <line x1="${width - 20}" y1="20" x2="${width - 40}" y2="20" stroke="#555" stroke-width="1"/>
  <line x1="${width - 20}" y1="20" x2="${width - 20}" y2="40" stroke="#555" stroke-width="1"/>
  <line x1="20" y1="${height - 20}" x2="40" y2="${height - 20}" stroke="#555" stroke-width="1"/>
  <line x1="20" y1="${height - 20}" x2="20" y2="${height - 40}" stroke="#555" stroke-width="1"/>
  <line x1="${width - 20}" y1="${height - 20}" x2="${width - 40}" y2="${height - 20}" stroke="#555" stroke-width="1"/>
  <line x1="${width - 20}" y1="${height - 20}" x2="${width - 20}" y2="${height - 40}" stroke="#555" stroke-width="1"/>
  ${tag ? `<rect x="20" y="20" width="${tag.length * 8 + 16}" height="20" fill="#00ff88" opacity="0.9"/>
  <text x="28" y="34" font-family="monospace" font-size="10" fill="#0a0a0a" letter-spacing="1">${tag}</text>` : ''}
  ${caption ? `<text x="20" y="${height - 20}" font-family="monospace" font-size="10" fill="#555555" letter-spacing="1">${caption}</text>` : ''}
</svg>`;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeFile(filePath, content) {
  if (fs.existsSync(filePath) && !force) {
    console.log(`  skip ${path.relative(root, filePath)}`);
    return;
  }
  fs.writeFileSync(filePath, content);
  console.log(`  ✓ ${path.relative(root, filePath)}`);
}

// Import content (we'll inline the data to avoid TS compilation issues)
const projects = [
  { slug: 'aurora-brand-film', color: '#1a1a2e', category: 'FILM' },
  { slug: 'synthwave-animation', color: '#2d1b4e', category: 'ANIMATION' },
  { slug: 'flux-ai-pipeline', color: '#0d2137', category: 'AI VIDEO' },
  { slug: 'meridian-documentary', color: '#1a2e1a', category: 'FILM' },
  { slug: 'vertex-motion', color: '#1e1e3a', category: 'ANIMATION' },
  { slug: 'echo-ai-short', color: '#2a1a1a', category: 'AI VIDEO' },
  { slug: 'prism-social', color: '#1a2e2e', category: 'BRAND' },
  { slug: 'neon-title-sequence', color: '#2e1a2e', category: 'ANIMATION' },
  { slug: 'terra-explainer', color: '#1a2e1e', category: 'AI VIDEO' },
];

const journalPosts = [
  { slug: 'ai-video-pipeline-guide', color: '#0d2137' },
  { slug: 'storytelling-with-ai', color: '#2a1a1a' },
  { slug: 'motion-design-system', color: '#1e1e3a' },
  { slug: 'color-grading-tips', color: '#1a2e1a' },
];

const tools = [
  { slug: 'runway', color: '#0d2137' },
  { slug: 'midjourney', color: '#2d1b4e' },
  { slug: 'comfyui', color: '#1a2e1a' },
  { slug: 'elevenlabs', color: '#2a1a1a' },
  { slug: 'blender', color: '#1e1e3a' },
  { slug: 'after-effects', color: '#1a1a2e' },
  { slug: 'davinci-resolve', color: '#1a2e2e' },
  { slug: 'cinema-4d', color: '#2e1a2e' },
];

const resources = [
  { slug: 'ai-video-prompt-guide', color: '#0d2137' },
  { slug: 'storyboard-template', color: '#1a1a2e' },
  { slug: 'color-grading-luts', color: '#1a2e1a' },
  { slug: 'project-brief-template', color: '#2d1b4e' },
];

console.log('Generating placeholder media...\n');

// Project thumbnails and posters
const projectsDir = path.join(root, 'public', 'images', 'projects');
ensureDir(projectsDir);
for (const p of projects) {
  const dir = path.join(projectsDir, p.slug);
  ensureDir(dir);
  writeFile(
    path.join(dir, 'thumbnail.svg'),
    generateSVG({ width: 1280, height: 720, color: p.color, caption: `01 / ${p.slug.toUpperCase()}`, tag: p.category, seed: p.slug + '-thumb' })
  );
  writeFile(
    path.join(dir, 'poster.svg'),
    generateSVG({ width: 1920, height: 1080, color: p.color, caption: `01 / ${p.slug.toUpperCase()}`, tag: p.category, seed: p.slug + '-poster' })
  );
}

// Journal covers
const journalDir = path.join(root, 'public', 'images', 'journal');
ensureDir(journalDir);
for (const p of journalPosts) {
  writeFile(
    path.join(journalDir, `${p.slug}-cover.svg`),
    generateSVG({ width: 1200, height: 630, color: p.color, caption: `JOURNAL / ${p.slug.toUpperCase()}`, tag: 'ARTICLE', seed: p.slug })
  );
}

// Tool icons
const toolsDir = path.join(root, 'public', 'images', 'tools');
ensureDir(toolsDir);
for (const t of tools) {
  writeFile(
    path.join(toolsDir, `${t.slug}-icon.svg`),
    generateSVG({ width: 512, height: 512, color: t.color, caption: t.slug.toUpperCase(), tag: 'TOOL', seed: t.slug })
  );
}

// Resource icons
const resourcesDir = path.join(root, 'public', 'images', 'resources');
ensureDir(resourcesDir);
for (const r of resources) {
  writeFile(
    path.join(resourcesDir, `${r.slug}-icon.svg`),
    generateSVG({ width: 512, height: 512, color: r.color, caption: r.slug.toUpperCase(), tag: 'RESOURCE', seed: r.slug })
  );
}

// OG default
writeFile(
  path.join(root, 'public', 'images', 'og-default.svg'),
  generateSVG({ width: 1200, height: 630, color: '#00ff88', caption: 'NOCTURN STUDIO', tag: 'AI FILM · ANIMATION · AUTOMATION', seed: 'og-default' })
);

console.log('\n✓ Media generation complete');
