# Content Management Guide

This guide explains how to add and manage content in the NOCTURN Studio website.

## Table of Contents
- [Adding a Project](#adding-a-project)
- [Adding a Journal Post](#adding-a-journal-post)
- [Adding a Service](#adding-a-service)
- [Adding a Career](#adding-a-career)
- [Adding a Plan](#adding-a-plan)
- [Adding a Nav Item](#adding-a-nav-item)
- [Media Assets](#media-assets)

## Adding a Project

1. Open `src/content/projects.ts`
2. Add a new object to the `projects` array:

```typescript
{
  slug: 'your-project-slug',  // URL-friendly, lowercase, hyphens
  title: 'Project Title',
  category: ['FILM', 'BRAND'],  // From: FILM, ANIMATION, AI VIDEO, BRAND, AUTOMATION
  year: 2025,
  client: 'Client Name',
  role: 'Direction, Production',
  tools: ['After Effects', 'Blender'],
  summary: 'One-line summary',
  description: 'Full description paragraph',
  color: '#1a1a2e',  // Background color for placeholder
  featured: true,  // Show on homepage
  order: 10,  // Sort order
  brief: 'Project brief text',
  results: [
    { label: 'VIEWS', value: '1.2M' },
    { label: 'AWARDS', value: '2' },
  ],
  // Optional: real media
  thumbnail: '/images/projects/your-project/thumb.jpg',
  previewClip: '/videos/projects/your-project/preview.mp4',
  poster: '/images/projects/your-project/poster.jpg',
  placeholder: true,  // Remove when real media added
}
```

3. The project will automatically appear on `/work` and be accessible at `/work/your-project-slug`

## Adding a Journal Post

1. Open `src/content/journal.ts`
2. Add a new object:

```typescript
{
  slug: 'your-post-slug',
  title: 'Post Title',
  category: 'TUTORIAL',  // Or: AI VIDEO, BEHIND THE SCENES, PROCESS
  date: '2025-01-20',  // YYYY-MM-DD
  readTime: '5 min',
  excerpt: 'Short excerpt for listing',
  color: '#1a1a2e',  // Background for placeholder
  body: 'Full article content (plain text for now)',
  cover: '/images/journal/your-post/cover.jpg',  // Optional
  placeholder: true,
}
```

3. Accessible at `/journal/your-post-slug`

## Adding a Service

1. Open `src/content/services.ts`
2. Add a new object:

```typescript
{
  slug: 'your-service-slug',
  number: '07',  // Next available number
  title: 'Service Title',
  summary: 'One-line summary',
  bullets: ['Deliverable 1', 'Deliverable 2'],
  priceFrom: '€5,000',
  tags: ['TAG1', 'TAG2'],
  color: '#1a1a2e',
  process: [
    { step: '01', title: 'Step Title', desc: 'Step description' },
  ],
  relatedProjects: ['project-slug-1', 'project-slug-2'],
  placeholder: true,
}
```

3. Accessible at `/services/your-service-slug`

## Adding a Career

1. Open `src/content/careers.ts`
2. Add a new object:

```typescript
{
  slug: 'role-slug',
  title: 'Role Title',
  department: 'Creative',  // Or: Engineering, Production
  location: 'Berlin / Remote',
  type: 'Full-time',  // Or: Part-time, Contract, Freelance
  description: 'Role description',
  requirements: ['Requirement 1', 'Requirement 2'],
  benefits: ['Benefit 1', 'Benefit 2'],
  placeholder: true,
}
```

3. Accessible at `/careers/role-slug`

## Adding a Plan

1. Open `src/content/plans.ts`
2. Add a new object to the `plans` array:

```typescript
{
  name: 'Plan Name',
  tagline: 'Short tagline',
  priceProject: '€10,000',
  priceRetainer: '€6,000/mo',
  features: ['Feature 1', 'Feature 2'],
  highlighted: false,  // Show with accent border
  badge: 'POPULAR',  // Optional badge text
}
```

## Adding a Nav Item

1. Open `src/config/routes.ts`
2. Add a new route object:

```typescript
{
  path: '/your-page',
  label: 'YOUR PAGE',
  element: 'YourPage',
  showInNav: true,  // Show in top nav
  showInFooter: true,  // Show in footer
  seo: {
    title: 'Page Title — NOCTURN Studio',
    description: 'Page description for SEO',
  },
}
```

3. Create the page component in `src/pages/YourPage.tsx`
4. Import and add to `src/App.tsx` routes

## Media Assets

### Where to put files

- **Images**: `public/images/` (organized by type: projects/, journal/, team/)
- **Videos**: `public/videos/` (organized by type: projects/, reel/)
- **Logos**: `public/logos/`

### Image specifications

- **Project thumbnails**: 1280x720px, JPG or WebP, <200KB
- **Project posters**: 1920x1080px, JPG or WebP, <300KB
- **Journal covers**: 1200x630px, JPG or WebP, <200KB
- **Team portraits**: 1200x1500px (4:5), JPG or WebP, <300KB

### Video specifications

- **Preview clips**: 1280x720px, 4-6s loop, MP4 + WebM, <2MB each
- **Showreel**: 1920x1080px, 60-90s, MP4, <10MB
- **Project videos**: Host on Mux or Cloudflare Stream for HLS

### Using real media

When you add real media files:

1. Place files in the appropriate `public/` directory
2. Update the content file with the path:
   ```typescript
   thumbnail: '/images/projects/your-project/thumb.jpg',
   previewClip: '/videos/projects/your-project/preview.mp4',
   ```
3. Set `placeholder: false` or remove the field
4. The `MediaCell` component will automatically use the real media

### Placeholder content

All placeholder content has `placeholder: true` set. When replacing with real content:

1. Add real media files
2. Update content file paths
3. Set `placeholder: false` or remove the field
4. Build and verify

## Quick scaffold script

Use the scaffold script to create a new page:

```bash
node scripts/new-page.mjs your-page-name
```

This creates:
- `src/content/your-page-name.ts`
- `src/pages/YourPageName.tsx`

Then manually:
- Add route to `src/config/routes.ts`
- Import and add to `src/App.tsx`

## Regenerate sitemap

After adding pages, regenerate the sitemap:

```bash
node scripts/generate-sitemap.mjs
```

This updates `public/sitemap.xml` with all routes.
