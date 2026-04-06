# Deep Interview Spec: Personal Portfolio Website

## Metadata
- Interview ID: personal-website-2026-04-06
- Rounds: 6
- Final Ambiguity Score: 10.7%
- Type: greenfield
- Generated: 2026-04-06
- Threshold: 15% (--deep mode)
- Status: PASSED

## Clarity Breakdown
| Dimension | Score | Weight | Weighted |
|-----------|-------|--------|----------|
| Goal Clarity | 0.92 | 40% | 0.368 |
| Constraint Clarity | 0.88 | 30% | 0.264 |
| Success Criteria | 0.87 | 30% | 0.261 |
| **Total Clarity** | | | **0.893** |
| **Ambiguity** | | | **10.7%** |

## Goal
Build a personal portfolio website for Christopher Richter that makes recruiters and potential employers think "I want to meet this person" — leading with a stunning animated hero experience, showcasing personality and projects, and serving as a hosting platform for BeerpongApp compliance pages and future project docs.

## Constraints
- **Framework:** Next.js (React)
- **Animations:** Framer Motion (scroll-triggered, cinematic fade/slide effects)
- **Hosting:** Vercel (free tier, custom domain support)
- **Owner:** Christopher Richter (GitHub: `rurfy`, email: chrissy.richter2710@gmail.com)
- **Primary project to showcase:** BeerpongApp (Flutter + Firebase mobile app, co-developed with Throribus)
- **Compliance docs to host:** BeerpongApp privacy-policy, data-deletion, terms-of-service (existing plain HTML files at `../BeerpongApp/docs/`)
- **Site must be coded by hand** — no visual builders

## Non-Goals
- Blog or CMS content management
- Backend / database functionality at launch
- Skills bar charts or resume PDF download (not mentioned)
- Dark/hacker aesthetic or 3D/WebGL (considered and not chosen)
- Building a new Flutter or app project (BeerpongApp already exists)

## Acceptance Criteria
- [ ] Hero section loads with a stunning animated intro — name + tagline visible within 2 seconds, content animates in smoothly
- [ ] Scroll-triggered animations: each section (About, Projects, Contact) fades/slides into view as user scrolls
- [ ] About Me section includes personality-forward bio text and optionally a photo
- [ ] Projects section displays at minimum the BeerpongApp with: name, description, tech stack (Flutter + Firebase), and link
- [ ] Contact section has working links to GitHub (github.com/rurfy), email, and optionally LinkedIn
- [ ] BeerpongApp compliance pages served at clean routes: `/beerpong/privacy-policy`, `/beerpong/data-deletion`, `/beerpong/terms-of-service`
- [ ] Site deploys successfully to Vercel from the `/Users/c.richter/projects/personal-website` repo
- [ ] Site is responsive (mobile + desktop)
- [ ] Performance: Lighthouse score ≥ 80 on mobile despite animations

## Assumptions Exposed & Resolved
| Assumption | Challenge | Resolution |
|------------|-----------|------------|
| "Cool and flashy" = complex visuals | Asked what visual direction resonates | Smooth scroll animations (Framer Motion), NOT dark/hacker or 3D |
| More content = better impression | Contrarian: what if a recruiter has 15 seconds? | Confirmed: stunning visual is the hook, not information density |
| Site needs many sections | Simplifier: what's the minimum? | 4 sections: Hero, About Me, Projects, Contact — no extras at launch |
| Autoresearch flag applies | N/A | `--autoresearch` does not apply to website builds; treated as `--deep` |

## Technical Context
**Personal website directory:** `/Users/c.richter/projects/personal-website`
- Completely empty (greenfield) — only `.claude/` OMC metadata present

**BeerpongApp docs:** `/Users/c.richter/projects/BeerpongApp/docs/`
- `index.html` — redirects to privacy-policy
- `privacy-policy.html` — covers Firebase Auth, Firestore, Sentry, data rights
- `data-deletion.html` — in-app deletion flow + manual email request
- `terms-of-service.html` — app usage, IAP policy, IP ownership (Christopher Richter)
- All plain HTML, no framework — will be copied/integrated into Next.js pages or served as static assets

**Recommended integration strategy for compliance docs:**
- Create Next.js pages at `app/beerpong/privacy-policy/page.tsx`, etc.
- OR place the HTML files in `public/beerpong/` for zero-effort static serving
- The `public/` approach is simpler and keeps them as-is; Next.js pages allow styling consistency

## Ontology (Key Entities)
| Entity | Type | Fields | Relationships |
|--------|------|--------|---------------|
| PersonalWebsite | core domain | sections, framework, url, domain | hosts Projects, CompliancePages |
| Recruiter | external | role, attention span (15s) | visits PersonalWebsite |
| Projects | supporting | name, description, tech stack, url, screenshot | displayed on PersonalWebsite |
| BeerpongApp | core domain | stack (Flutter+Firebase), collaborator (Throribus), store presence | is a Project; has CompliancePages |
| CompliancePages | supporting | privacy-policy, data-deletion, terms-of-service, html source | hosted on PersonalWebsite under /beerpong/ |

## Ontology Convergence
| Round | Entity Count | New | Changed | Stable | Stability Ratio |
|-------|-------------|-----|---------|--------|----------------|
| 1 | 4 | 4 | - | - | N/A |
| 2 | 5 | 1 | 0 | 4 | 80% |
| 3 | 5 | 0 | 0 | 5 | 100% |
| 4 | 5 | 0 | 0 | 5 | 100% |
| 5 | 5 | 0 | 0 | 5 | 100% |
| 6 | 5 | 0 | 0 | 5 | 100% |

Domain model fully converged at Round 3 and held stable through completion.

## Interview Transcript
<details>
<summary>Full Q&A (6 rounds)</summary>

### Round 1
**Q:** When a recruiter or potential employer visits your finished website, what's the single most important thing you want them to walk away thinking or feeling?
**A:** "I want to meet this person"
**Ambiguity:** 55% (Goal: 0.65, Constraints: 0.25, Criteria: 0.40)

### Round 2
**Q:** How do you want to build this site — do you want to write actual code, or use a visual/low-code tool?
**A:** Code it myself (React / Next.js / Astro / SvelteKit, deployed to Vercel or GitHub Pages)
**Ambiguity:** 42% (Goal: 0.70, Constraints: 0.55, Criteria: 0.45)

### Round 3
**Q:** When you say "cool and flashy" — which visual direction resonates most with you?
**A:** Smooth animations & scroll effects (Framer Motion / GSAP, content fades up on scroll)
**Ambiguity:** 31% (Goal: 0.75, Constraints: 0.65, Criteria: 0.65)

### Round 4 (Contrarian Mode)
**Q:** A recruiter has 15 seconds on your site before deciding to close or stay. What's the ONE thing they must see in that window?
**A:** A stunning visual that stops them — the design itself is the hook
**Ambiguity:** 24.5% (Goal: 0.80, Constraints: 0.70, Criteria: 0.75) — contrarian challenge confirmed assumption

### Round 5
**Q:** Which framework do you want to use?
**A:** Next.js (React, Vercel deployment, Framer Motion, file-based routing)
**Ambiguity:** 19% (Goal: 0.82, Constraints: 0.84, Criteria: 0.77)

### Round 6 (Simplifier Mode)
**Q:** Which sections does the site NEED to have at launch?
**A:** Hero / Landing, About Me, Projects, Contact (all 4)
**Ambiguity:** 10.7% (Goal: 0.92, Constraints: 0.88, Criteria: 0.87) — THRESHOLD MET

</details>
