# Architectural Portfolio Scaffold

This is a Next.js, TypeScript, and Tailwind CSS starter structure for a junior architectural designer portfolio. It focuses on page hierarchy, reusable layout systems, project data, and modular project detail content.

## Structure

- `app/page.tsx` - Home page with fixed navigation, full-screen hero, selected projects, archive link, about preview, and footer.
- `app/projects/page.tsx` - Project archive with category filters, grid view, index view, animated transitions, and hover preview.
- `app/projects/[slug]/page.tsx` - Reusable project detail template with metadata header, introduction, content modules, reading progress, image viewer, and previous/next navigation.
- `app/about/page.tsx` - About page structure for introduction, image, experience, education, skills, resume, and contact links.
- `app/contact/page.tsx` - Contact page structure with email, social links, location, and optional form.
- `lib/projects.ts` - Placeholder project data and project content module types.
- `components/` - Shared navigation, footer, image, archive, project card, scroll reveal, and content module components.

## Design System

- Editorial grid: 12-column responsive page grid with generous whitespace.
- Typography: restrained sans-serif body type with small monospaced metadata labels.
- Color: warm paper background, dark ink text, muted metadata, fine hairlines, and restrained accent tones.
- Imagery: large architectural placeholder imagery using optimized remote images.
- Motion: page fade, scroll reveal, animated filtering, light hover zoom, reading progress, and reduced-motion support.

## Running

Install dependencies, then start the local development server:

```bash
npm install
npm run dev
```
