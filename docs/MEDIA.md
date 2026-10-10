# Media Audit

This document tracks all media assets required for the NOCTURN Studio website.

## Status Legend
- ⬜ Missing — no file exists
- 🟡 Placeholder — using color/gradient fallback
- 🟢 Ready — real asset in place

## Projects

| File | Slug | Field | Required Size | Status |
|------|------|-------|---------------|--------|
| thumbnail | aurora-brand-film | thumbnail | 1280x720 | ⬜ |
| poster | aurora-brand-film | poster | 1920x1080 | ⬜ |
| preview clip | aurora-brand-film | previewClip | 1280x720, 4-6s | ⬜ |
| thumbnail | synthwave-animation | thumbnail | 1280x720 | ⬜ |
| poster | synthwave-animation | poster | 1920x1080 | ⬜ |
| preview clip | synthwave-animation | previewClip | 1280x720, 4-6s | ⬜ |
| thumbnail | flux-ai-pipeline | thumbnail | 1280x720 | ⬜ |
| poster | flux-ai-pipeline | poster | 1920x1080 | ⬜ |
| preview clip | flux-ai-pipeline | previewClip | 1280x720, 4-6s | ⬜ |
| thumbnail | meridian-documentary | thumbnail | 1280x720 | ⬜ |
| poster | meridian-documentary | poster | 1920x1080 | ⬜ |
| preview clip | meridian-documentary | previewClip | 1280x720, 4-6s | ⬜ |
| thumbnail | vertex-motion | thumbnail | 1280x720 | ⬜ |
| poster | vertex-motion | poster | 1920x1080 | ⬜ |
| preview clip | vertex-motion | previewClip | 1280x720, 4-6s | ⬜ |
| thumbnail | echo-ai-short | thumbnail | 1280x720 | ⬜ |
| poster | echo-ai-short | poster | 1920x1080 | ⬜ |
| preview clip | echo-ai-short | previewClip | 1280x720, 4-6s | ⬜ |
| thumbnail | prism-social | thumbnail | 1280x720 | ⬜ |
| poster | prism-social | poster | 1920x1080 | ⬜ |
| preview clip | prism-social | previewClip | 1280x720, 4-6s | ⬜ |
| thumbnail | neon-title-sequence | thumbnail | 1280x720 | ⬜ |
| poster | neon-title-sequence | poster | 1920x1080 | ⬜ |
| preview clip | neon-title-sequence | previewClip | 1280x720, 4-6s | ⬜ |
| thumbnail | terra-explainer | thumbnail | 1280x720 | ⬜ |
| poster | terra-explainer | poster | 1920x1080 | ⬜ |
| preview clip | terra-explainer | previewClip | 1280x720, 4-6s | ⬜ |

## Journal Posts

| File | Slug | Field | Required Size | Status |
|------|------|-------|---------------|--------|
| cover | ai-video-pipeline-guide | cover | 1200x630 | ⬜ |
| cover | storytelling-with-ai | cover | 1200x630 | ⬜ |
| cover | motion-design-system | cover | 1200x630 | ⬜ |
| cover | color-grading-tips | cover | 1200x630 | ⬜ |

## Team

| File | Slug | Field | Required Size | Status |
|------|------|-------|---------------|--------|
| portrait | alex-chen | portrait | 1200x1500 (4:5) | ⬜ |
| portrait | maya-torres | portrait | 1200x1500 (4:5) | ⬜ |
| portrait | jonas-weber | portrait | 1200x1500 (4:5) | ⬜ |
| portrait | priya-sharma | portrait | 1200x1500 (4:5) | ⬜ |
| portrait | luca-rossi | portrait | 1200x1500 (4:5) | ⬜ |
| portrait | sara-kim | portrait | 1200x1500 (4:5) | ⬜ |

## Tools

| File | Slug | Field | Required Size | Status |
|------|------|-------|---------------|--------|
| icon | runway | icon | 512x512 | ⬜ |
| icon | midjourney | icon | 512x512 | ⬜ |
| icon | comfyui | icon | 512x512 | ⬜ |
| icon | elevenlabs | icon | 512x512 | ⬜ |
| icon | blender | icon | 512x512 | ⬜ |
| icon | after-effects | icon | 512x512 | ⬜ |
| icon | davinci-resolve | icon | 512x512 | ⬜ |
| icon | cinema-4d | icon | 512x512 | ⬜ |

## Resources

| File | Slug | Field | Required Size | Status |
|------|------|-------|---------------|--------|
| icon | ai-video-prompt-guide | icon | 512x512 | ⬜ |
| icon | storyboard-template | icon | 512x512 | ⬜ |
| icon | color-grading-luts | icon | 512x512 | ⬜ |
| icon | project-brief-template | icon | 512x512 | ⬜ |

## Partners / Client Logos

| File | Slug | Field | Required Size | Status |
|------|------|-------|---------------|--------|
| logo | bronze-tier | logo | 400x160 | ⬜ |
| logo | silver-tier | logo | 400x160 | ⬜ |
| logo | gold-tier | logo | 400x160 | ⬜ |

## System

| File | Slug | Field | Required Size | Status |
|------|------|-------|---------------|--------|
| og-default | system | og:image | 1200x630 | ⬜ |
| favicon | system | favicon.svg | 32x32 | 🟡 |
| apple-touch-icon | system | apple-touch-icon | 180x180 | ⬜ |

## Notes

- All project thumbnails use color-based gradients as placeholders
- Team portraits use initial-based avatars
- Tool and resource icons use colored squares with letter marks
- Run `node scripts/generate-media.mjs` to generate placeholder SVGs
- Run `node scripts/generate-icons.mjs` to generate favicon set
- Run `node scripts/check-media.mjs` to verify all referenced assets exist
