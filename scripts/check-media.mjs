#!/usr/bin/env node

/**
 * Check that all referenced media assets exist.
 * Fails the build if any are missing.
 * Usage: node scripts/check-media.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');

let errors = 0;

function check(filePath, description) {
  const fullPath = path.join(root, filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`  ✗ MISSING: ${filePath} (${description})`);
    errors++;
  } else {
    console.log(`  ✓ ${filePath}`);
  }
}

console.log('Checking media assets...\n');

// Core icons
console.log('Icons:');
check('public/favicon.svg', 'Main favicon');
check('public/favicon-32.svg', '32px favicon');
check('public/apple-touch-icon.svg', 'Apple touch icon');
check('public/icon-192.svg', '192px icon');
check('public/icon-512.svg', '512px icon');
check('public/og-default.svg', 'Default OG image');

// Project media
console.log('\nProject thumbnails:');
const projects = [
  'aurora-brand-film', 'synthwave-animation', 'flux-ai-pipeline',
  'meridian-documentary', 'vertex-motion', 'echo-ai-short',
  'prism-social', 'neon-title-sequence', 'terra-explainer',
];
for (const slug of projects) {
  check(`public/images/projects/${slug}/thumbnail.svg`, `${slug} thumbnail`);
  check(`public/images/projects/${slug}/poster.svg`, `${slug} poster`);
}

// Journal covers
console.log('\nJournal covers:');
const journals = ['ai-video-pipeline-guide', 'storytelling-with-ai', 'motion-design-system', 'color-grading-tips'];
for (const slug of journals) {
  check(`public/images/journal/${slug}-cover.svg`, `${slug} cover`);
}

// Tool icons
console.log('\nTool icons:');
const tools = ['runway', 'midjourney', 'comfyui', 'elevenlabs', 'blender', 'after-effects', 'davinci-resolve', 'cinema-4d'];
for (const slug of tools) {
  check(`public/images/tools/${slug}-icon.svg`, `${slug} icon`);
}

// Resource icons
console.log('\nResource icons:');
const resources = ['ai-video-prompt-guide', 'storyboard-template', 'color-grading-luts', 'project-brief-template'];
for (const slug of resources) {
  check(`public/images/resources/${slug}-icon.svg`, `${slug} icon`);
}

console.log('');
if (errors > 0) {
  console.error(`\n✗ ${errors} missing asset(s). Run "npm run media" and "npm run icons" to generate.`);
  process.exit(1);
} else {
  console.log('✓ All media assets present');
}
