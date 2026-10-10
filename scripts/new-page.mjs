#!/usr/bin/env node

/**
 * Scaffold a new page with content file and route entry.
 * Usage: node scripts/new-page.mjs <page-name>
 * Example: node scripts/new-page.mjs about
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageName = process.argv[2];

if (!pageName) {
  console.error('Usage: node scripts/new-page.mjs <page-name>');
  process.exit(1);
}

const capitalizedName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
const kebabName = pageName.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');

// Create content file
const contentPath = path.join(__dirname, '..', 'src', 'content', `${kebabName}.ts`);
const contentTemplate = `import type { TODO } from './types';

export const ${kebabName}: TODO[] = [
  // Add your content here
];
`;

fs.writeFileSync(contentPath, contentTemplate);
console.log(`✓ Created content file: ${contentPath}`);

// Create page file
const pagePath = path.join(__dirname, '..', 'src', 'pages', `${capitalizedName}.tsx`);
const pageTemplate = `import { CaptionStrip, Section } from '../components/ui';
import { PageHeader } from '../components/sections';
import { Seo } from '../components/Seo';

export default function ${capitalizedName}() {
  return (
    <>
      <Seo title="${capitalizedName} — NOCTURN Studio" description="TODO: Add description" />
      <PageHeader
        title="Page"
        accentWord="title."
        description="TODO: Add description"
        caption={{ index: '01', label: '${capitalizedName.toUpperCase()}' }}
      />
      <Section className="p-4 lg:p-8">
        <div className="max-w-3xl">
          <p className="text-base text-[var(--color-text-muted)]">TODO: Add content</p>
        </div>
      </Section>
    </>
  );
}
`;

fs.writeFileSync(pagePath, pageTemplate);
console.log(`✓ Created page file: ${pagePath}`);

// Update barrel export
const barrelPath = path.join(__dirname, '..', 'src', 'content', 'index.ts');
let barrelContent = fs.readFileSync(barrelPath, 'utf-8');
const exportLine = `export { ${kebabName} } from './${kebabName}';\n`;
if (!barrelContent.includes(exportLine)) {
  barrelContent = barrelContent.replace(
    "// Re-export types",
    `${exportLine}\n// Re-export types`
  );
  fs.writeFileSync(barrelPath, barrelContent);
  console.log(`✓ Updated content barrel export`);
}

console.log(`\n✓ Page "${capitalizedName}" scaffolded successfully!`);
console.log(`\nNext steps:`);
console.log(`1. Add content to src/content/${kebabName}.ts`);
console.log(`2. Build your page in src/pages/${capitalizedName}.tsx`);
console.log(`3. Add route to src/config/routes.ts`);
console.log(`4. Import and add to src/App.tsx`);
