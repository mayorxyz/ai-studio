#!/usr/bin/env node

/**
 * Generate sitemap.xml from routes config.
 * Run before build: node scripts/generate-sitemap.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://nocturn.studio';

// Import routes (you'd need to compile TS first or use a TS loader)
// For now, we'll hardcode the routes
const routes = [
  '/',
  '/work',
  '/services',
  '/process',
  '/studio',
  '/pricing',
  '/contact',
  '/journal',
  '/reel',
  '/clients',
  '/careers',
  '/faq',
  '/privacy',
  '/terms',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
console.log(`✓ Generated sitemap.xml with ${routes.length} URLs`);
