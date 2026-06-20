# SCCS NWI v2 — Premium Agency Redesign Plan

> **For Hermes:** Build this plan task-by-task. Each task is a complete unit with verification.

**Goal:** Redesign sccsnwi.com to match the premium quality of pixlerconstruction.com and allcityjanitorialservice.com, incorporating video hero background, review carousel, client logo marquee, before/after gallery, and GSAP motion.

**Architecture:** Next.js 16 App Router + Tailwind v4 + GSAP ScrollTrigger + Motion (for review carousel). All existing 96 pages preserved, SEO redirects intact. New homepage is the focus.

**Design reference sites:** pixlerconstruction.com, allcityjanitorialservice.com

---

## Design Read

**Reading this as:** local restoration service landing for distressed homeowners/property managers, with a premium-agency language (Pixler/All City style), leaning toward Tailwind v4 + Anton-style display font + GSAP scroll motion + dark navy + gold accent.

**Dials:**
- DESIGN_VARIANCE: 7 (slightly asymmetric, editorial feel)
- MOTION_INTENSITY: 8 (GSAP pinning, scroll-triggered reveals, marquee, carousel)
- VISUAL_DENSITY: 3 (airy, cinematic chapter spacing)

**Palette:** Navy (#0a1f44) + Gold (#f5b800) + White — matching the Pixler aesthetic which feels more premium and construction-appropriate than the previous orange. Keep safety-orange as an emergency-only accent.

**Type:** Bebas Neue / Anton-style display (headings) + Inter (body) + Geist Mono (data/numbers)

---

## Page Sections (Homepage v2)

### 1. Hero: Full-bleed video + logo overlay
- Autoplay, muted, looped video background (placeholder: dark gradient + radial wash)
- Centered SCCS NWI logo overlay
- "Specialty Cleaning & Construction Services" subtitle
- Two CTAs: "24/7 Emergency" (gold) + "Free Inspection" (outline)
- Dark overlay with grid pattern for depth

### 2. Trusted By Marquee (client logos + certs)
- Horizontal auto-scrolling marquee
- Content: IICRC Certified, Licensed & Insured, EPA Lead-Safe, 5.0 Google Rating
- If real client logos exist, add those too

### 3. Who We Are (asymmetric split)
- Left: kicker "Who We Are" + headline + body copy
- Right: large project image with "On The Job" tag overlay

### 4. Before & After (image pair)
- Side by side: same angle, different day
- "Before" label / "After" label
- Placeholder: dark gradient cards with text labels

### 5. Services Grid (3 cards, hover physics)
- Water Damage, Fire Damage, Mold Remediation
- Card hover: scale + shadow lift
- "Learn more" arrow on hover

### 6. Project Gallery Rail (horizontal scroll)
- Full-width horizontal scroll of project photos
- Auto-scrolling or scroll-driven
- Placeholder: 8-10 gradient cards

### 7. Review Carousel (star ratings, full text, modals)
- Google reviews from real data: 5.0★, 73+ reviews
- Card design: avatar initial, name, time, stars, review text
- "Read More" modal for long reviews
- Prev/Next arrows
- "See All Google Reviews" link

### 8. FAQ Accordion
- Common questions about water, fire, mold
- Expandable with +/- icon animation

### 9. Contact / CTA
- "Think you have damage?" headline
- Phone numbers prominent
- Contact form (name, phone, email, service dropdown, message)
- "Free inspection. No pressure."

### 10. Footer
- Logo, tagline, nav links, service links, contact info
- "Built by..." credit

---

## Tech Stack Changes

| Before (v1) | After (v2) |
|---|---|
| Motion only | GSAP ScrollTrigger + Motion |
| Safety orange accent | Navy + Gold (Pixler-style) |
| Floating glass nav | Transparent overlay nav (video hero) |
| EmergencyCTA pill | Sticky call FAB (expandable) |
| Inline SVG icons | Keep inline SVGs |
| Geist fonts | Bebas Neue (display) + Inter (body) via next/font |

**New npm packages:**
- `gsap` (for ScrollTrigger, marquee, gallery rail)
- No additional icon packages needed

---

## Assets Needed From User (after build)

| Asset | Status |
|---|---|
| Hero video (15-30s restoration footage) | Placeholder (CSS gradient) |
| Before/After photos (10-15 pairs) | Placeholder (gradient cards) |
| Project photos for gallery | Placeholder (gradient cards) |
| Client/partner logos for marquee | Trust badges instead |

---

## SEO Preservation

All 82 existing redirects preserved in vercel.json.
All 96 existing pages remain intact.
Homepage is the only page being redesigned.
Other pages get minor visual updates to match new palette.

---

## Task List

### Phase 1: Setup
1. Install GSAP + update package.json
2. Update globals.css with new navy+gold palette
3. Update layout.tsx for transparent header
4. Copy logo to public/

### Phase 2: Hero Section
5. Build VideoHero component (video placeholder + logo overlay + CTAs)
6. Add grid pattern overlay + radial wash

### Phase 3: Social Proof
7. Build TrustMarquee component (auto-scrolling logos/badges)
8. Build BeforeAfter component (image pair)
9. Build ReviewCarousel component (cards, stars, modals, nav)

### Phase 4: Content Sections
10. Build WhoWeAre section (split layout)
11. Build ServicesGrid section (hover physics)
12. Build ProjectGallery component (horizontal scroll rail)
13. Build FAQ accordion component
14. Build Contact section (form + phone)

### Phase 5: Shell
15. Rebuild Navbar (transparent, overlay style)
16. Rebuild Footer (updated palette)
17. Build StickyCallFab (expandable floating call button)
18. Rebuild Homepage (compose all sections)
19. Update other pages with new palette

### Phase 6: Motion
20. Add GSAP ScrollTrigger animations
21. Add scroll reveals (fade-up, stagger)
22. Add marquee auto-scroll

### Phase 7: Deploy
23. Build and verify
24. Deploy to Vercel
