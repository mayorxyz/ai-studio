# NOCTURN Studio

AI/Video Media Studio website built with React 18, TypeScript, Vite 6, Tailwind CSS 4, React Router 6, and Framer Motion.

## Overview

NOCTURN is a blueprint-dark themed website for an AI-assisted video, animation, and automation studio. The design system features frame lines, caption strips, mono labels, and a single accent color (#00ff88).

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Routing**: React Router 6
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout with nav, frame, rail, footer
│   ├── Seo.tsx             # SEO meta tags component
│   ├── ui/                 # Reusable UI components
│   │   └── index.tsx       # CaptionStrip, Section, MediaCell, Tag, Button, Ticker, Counter, Accordion
│   └── sections/           # Reusable section components
│       └── index.tsx       # PageHeader, CTASection, FeatureGrid, StatsRow, LogoStrip, TestimonialSlider, HeroSection, ManifestoText
├── config/
│   ├── routes.ts           # Route configuration
│   └── site.ts             # Site-wide configuration
├── content/                # Content data files
│   ├── types.ts            # TypeScript interfaces
│   ├── studio.ts           # Studio info
│   ├── projects.ts         # Project portfolio
│   ├── services.ts         # Service offerings
│   ├── plans.ts            # Pricing plans
│   ├── team.ts             # Team members
│   ├── testimonials.ts     # Client testimonials
│   ├── process.ts          # Process steps
│   ├── journal.ts          # Blog posts
│   ├── clients.ts          # Client logos
│   ├── faq.ts              # FAQ items
│   ├── careers.ts          # Job openings
│   ├── legal.ts            # Privacy & terms
│   └── index.ts            # Barrel export
├── pages/                  # Page components
│   ├── Home.tsx
│   ├── Work.tsx
│   ├── CaseStudy.tsx
│   ├── Services.tsx
│   ├── ServiceDetail.tsx
│   ├── Process.tsx
│   ├── Studio.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   ├── Journal.tsx
│   ├── JournalPost.tsx
│   ├── Reel.tsx
│   ├── Clients.tsx
│   ├── Careers.tsx
│   ├── CareerDetail.tsx
│   ├── Faq.tsx
│   ├── Privacy.tsx
│   ├── Terms.tsx
│   ├── ThankYou.tsx
│   └── NotFound.tsx
├── App.tsx                 # Main app with routing
├── main.tsx                # Entry point
└── index.css               # Global styles with design tokens

public/                     # Static assets
├── robots.txt
├── _redirects
└── sitemap.xml (generated)

scripts/                    # Utility scripts
├── new-page.mjs            # Scaffold new pages
└── generate-sitemap.mjs    # Generate sitemap

docs/
└── CONTENT.md              # Content management guide
```

## Pages

- `/` — Home with hero, featured work, services, process, testimonials
- `/work` — Filterable project library
- `/work/:slug` — Project case study
- `/services` — Service overview
- `/services/:slug` — Service detail
- `/process` — 5-step workflow
- `/studio` — Team, values, timeline, press
- `/pricing` — 4 pricing tiers with toggle
- `/contact` — Contact form + info
- `/journal` — Blog listing with filters
- `/journal/:slug` — Blog post detail
- `/reel` — Showreel player
- `/clients` — Client logos + testimonials + metrics
- `/careers` — Open roles listing
- `/careers/:slug` — Role detail
- `/faq` — Searchable FAQ
- `/privacy` — Privacy policy
- `/terms` — Terms of service
- `/thank-you` — Form submission success
- `404` — Not found page

## Design System

### Colors
- Background: `#0a0a0a`
- Surface: `#111111`
- Line: `#222222`
- Text: `#ffffff`
- Text Muted: `#888888`
- Accent: `#00ff88`

### Typography
- Headlines: Inter (heavy, wide)
- Accent words: Playfair Display (italic serif)
- Labels: JetBrains Mono (uppercase, tracked)

### Layout
- 44px left gutter with frame line
- 28px right rail with ruler ticks
- 48px fixed top nav
- Caption strips between sections (NN / NAME format)
- Crosshair marks at intersections

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

## Content Management

See [docs/CONTENT.md](docs/CONTENT.md) for detailed instructions on:
- Adding projects, services, journal posts, careers
- Managing media assets
- Updating navigation
- Using the scaffold script

### Quick Start: Add a Project

1. Open `src/content/projects.ts`
2. Add new project object with slug, title, category, etc.
3. Add media files to `public/images/projects/` and `public/videos/projects/`
4. Update content with media paths
5. Set `placeholder: false`

### Scaffold New Page

```bash
node scripts/new-page.mjs your-page-name
```

Creates content file and page component template.

### Generate Sitemap

```bash
node scripts/generate-sitemap.mjs
```

Updates `public/sitemap.xml` with all routes.

## Media Assets

### Image Specifications
- Project thumbnails: 1280x720px, <200KB
- Project posters: 1920x1080px, <300KB
- Journal covers: 1200x630px, <200KB
- Team portraits: 1200x1500px (4:5), <300KB

### Video Specifications
- Preview clips: 1280x720px, 4-6s loop, <2MB
- Showreel: 1920x1080px, 60-90s, <10MB

### Placeholder Content
All content currently uses `placeholder: true` with color-based backgrounds. Replace with real media by:
1. Adding files to `public/` directory
2. Updating content file with media paths
3. Setting `placeholder: false`

## Deployment

The site builds to static files in `dist/`:

```bash
npm run build
```

Deploy `dist/` to any static hosting:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

### SPA Routing
For SPA routing, use `public/_redirects`:
```
/*    /index.html   200
```

## Performance

- Lazy-loaded routes with React.lazy
- Optimized images (WebP/AVIF recommended)
- Minimal JS bundle (~119KB gzipped)
- CSS ~7KB gzipped
- No external dependencies except fonts

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states with accent color
- Reduced motion support
- Color contrast AA compliant

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## License

Proprietary. All rights reserved.

## Credits

Design system: Blueprint Dark template
Built with React, Vite, Tailwind CSS, Framer Motion
