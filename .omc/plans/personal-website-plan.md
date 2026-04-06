# Implementation Plan: Christopher Richter Personal Portfolio

## Source
Spec: `.omc/specs/deep-interview-personal-website.md` (ambiguity: 10.7%)

## Stack
- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Fonts:** next/font (Google Fonts)

## RALPLAN-DR

### Principles
1. Visual impact within 2 seconds — hero must stop the scroll
2. Personality over information density — every section feels human
3. Performance-conscious animation — Lighthouse ≥ 80 on mobile
4. Simplicity at launch — 4 sections, ship it, extend later
5. Future-proof hosting — compliance page pattern works for any project

### Decision Drivers
1. Recruiter hook: stunning visual in first 15 seconds
2. BeerpongApp docs need clean, accessible URLs
3. Developer credibility: coded by hand, on GitHub

### Options Considered
- **Option A (Chosen):** Next.js App Router + Framer Motion + Tailwind CSS — modern, Vercel-native, scroll animations first-class; explicitly selected by owner in interview
- **Option B (Invalidated):** Next.js Pages Router — older pattern, no advantage over App Router for greenfield work
- **Option C (Invalidated):** Astro — strong candidate for static portfolios (smaller JS bundle, better Lighthouse baseline, partial hydration). Invalidated because: (1) Framer Motion is React-only, requiring GSAP as substitute with more setup friction; (2) owner explicitly chose Next.js; (3) future GitHub API integration is more natural in Next.js
- **Option D (Invalidated):** SvelteKit — clean syntax, good performance. Invalidated because: (1) Framer Motion is React-only, requires GSAP; (2) smaller ecosystem reduces available animation examples; (3) less job-market exposure for a portfolio meant to impress recruiters

---

## Implementation Phases

### Phase 1: Project Initialization
- `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir`
- Install: `npm install framer-motion lucide-react`
- Configure Tailwind theme: custom color palette, typography scale
- Set up next/font with Inter (body) + a display font (headings)
- Initialize git repo, add `.gitignore`

### Phase 2: Core Infrastructure
- `src/app/layout.tsx` — root layout, font vars, global meta tags
- `src/components/AnimatedSection.tsx` — reusable Framer Motion wrapper with `useInView` scroll trigger (fade up + slide); must call `useReducedMotion()` from Framer Motion and set all variant values to `{ opacity: 1, y: 0, x: 0 }` when true (instant render, no motion)
- `src/components/Navigation.tsx` — fixed top nav with section anchor links, smooth scroll behavior
- `src/lib/animations.ts` — shared animation variants (fadeUp, staggerChildren, slideIn)
- Tailwind config: design tokens (colors, spacing, fonts)

### Phase 3: Hero Section (`src/components/sections/Hero.tsx`)
- Fullscreen viewport height
- Animated name reveal: staggered letter/word fade-up
- Animated tagline/subtitle below name
- CTA button: "View my work" scrolls to Projects
- Background: soft animated gradient or floating blob shapes (CSS/Framer Motion)
- Scroll-down indicator: animated bouncing chevron

### Phase 4: About Me Section (`src/components/sections/About.tsx`)
- Two-column layout (text left, visual right) on desktop; stacked on mobile
- Personality-forward bio: warm, human, non-generic
- Photo/avatar placeholder (easy to swap in real photo)
- Scroll-triggered: text slides in from left, visual from right
- Optional: fun fact or interest tags

### Phase 5: Projects Section (`src/components/sections/Projects.tsx`)
- Responsive card grid (1 col mobile, 2-3 col desktop)
- `src/data/projects.ts` — projects data array (easy to add future projects)
- **BeerpongApp card:** name, short description, Flutter + Firebase tech badges, link to GitHub (github.com/rurfy), link to app/store
- Placeholder "Coming Soon" card for future projects
- Cards stagger-animate in on scroll
- Hover: scale up + shadow lift effect

### Phase 6: Contact Section (`src/components/sections/Contact.tsx`)
- Heading: "Let's talk" or similar warm CTA
- GitHub: github.com/rurfy
- Email: chrissy.richter2710@gmail.com (mailto: link)
- LinkedIn: placeholder slot (URL can be filled in later)
- Icons from `lucide-react` or SVG
- Full section fade-in on scroll

### Phase 7: BeerpongApp Compliance Pages
- Copy `../BeerpongApp/docs/*.html` into directory-style paths under `public/`:
  - `public/beerpong/privacy-policy/index.html`
  - `public/beerpong/data-deletion/index.html`
  - `public/beerpong/terms-of-service/index.html`
  - `public/beerpong/index.html` (existing redirect)
- This serves clean URLs without `.html` extension:
  - `/beerpong/privacy-policy`
  - `/beerpong/data-deletion`
  - `/beerpong/terms-of-service`
- No Next.js rewrites needed — static directory structure handles it natively
- **After copying, update relative links inside the HTML files:**
  - `index.html`: update both the `<meta http-equiv="refresh" content="0; url=privacy-policy.html">` (primary redirect) and `<a href="privacy-policy.html">` (fallback) to `./privacy-policy/`
  - `privacy-policy.html` footer links: update any `data-deletion.html` / `terms-of-service.html` refs to `../data-deletion/` / `../terms-of-service/`
  - Apply same relative-link fix to `data-deletion.html` and `terms-of-service.html`
- **Rationale:** Matches spec requirement for clean URLs; directory-style serving is native to static hosts; plain HTML kept intact apart from link fixes

### Phase 8: Polish & Performance
- `src/app/page.tsx` — composes all sections in order: Hero → About → Projects → Contact
- Responsive audit: test all breakpoints
- Animation audit: verify `prefers-reduced-motion` via `useReducedMotion()` in `AnimatedSection.tsx` (already specified in Phase 2)
- `next/image` for any images (optimized)
- Meta tags: title, description, og:image for social sharing
- **Lighthouse budget gate:** Run mobile Lighthouse audit. If score < 80, degrade animations in this priority order:
  1. Replace CSS/Framer Motion blob backgrounds with a static CSS gradient
  2. Simplify Hero name animation: remove staggered letters, use single word fade-up
  3. Reduce all scroll variants to opacity-only (remove `y`/`x` transforms)
  4. Increase animation `duration` to reduce JS work per frame

### Phase 9: Deployment
- Commit to git (initial commit)
- Deploy to Vercel: `npx vercel` or connect GitHub repo via Vercel dashboard
- Verify live URL + Lighthouse score ≥ 80 mobile
- Configure custom domain if available

---

## File Structure
```
src/
  app/
    layout.tsx          # Root layout, fonts, meta
    page.tsx            # Home page (all sections)
    globals.css         # Global styles + Tailwind base
  components/
    Navigation.tsx
    AnimatedSection.tsx
    sections/
      Hero.tsx
      About.tsx
      Projects.tsx
      Contact.tsx
  data/
    projects.ts         # Projects data array
  lib/
    animations.ts       # Shared Framer Motion variants
public/
  beerpong/
    index.html              # redirect (update href to ./privacy-policy/)
    privacy-policy/
      index.html
    data-deletion/
      index.html
    terms-of-service/
      index.html
```

---

## Acceptance Criteria
- [ ] Hero loads with stunning animated intro within 2 seconds; name + tagline visible immediately
- [ ] Scroll-triggered animations: each section fades/slides into view
- [ ] About Me has personality-forward bio and photo slot
- [ ] Projects shows BeerpongApp with name, description, tech badges, and GitHub link
- [ ] Contact has working GitHub, email, and LinkedIn placeholder links
- [ ] `/beerpong/privacy-policy`, `/beerpong/data-deletion`, `/beerpong/terms-of-service` are accessible (clean URLs, no `.html` extension)
- [ ] Site deploys to Vercel successfully
- [ ] Mobile responsive across all sections
- [ ] Lighthouse mobile score ≥ 80
- [ ] `prefers-reduced-motion` respected (animations disabled for accessibility)

---

## ADR: App Router over Pages Router

**Decision:** Use Next.js App Router (not Pages Router)

**Drivers:**
- App Router is the current Next.js standard (since v13.4, stable in v14)
- Better streaming and layout composition
- Vercel deploys both equally well

**Alternatives considered:**
- Pages Router: works fine but is the "old way" — no advantage here

**Why chosen:** No migration cost (greenfield), aligned with current ecosystem, better for future extensions (API routes, server components for GitHub integration later)

**Consequences:** Must use `'use client'` directive on Framer Motion components (client-side only). Minor boilerplate but straightforward.

**Follow-ups:**
- Consider adding GitHub API integration to auto-pull repos into the Projects section (post-launch)
- Consider adding a `/projects/[slug]` detail page once content grows
