## Landing Page: Intentional Training Notes

A single-route marketing page at `/` for the BJJ intentional training app. Dark, focused, architectural — "train with purpose."

### Design tokens (src/styles.css)

Replace the default oklch tokens with the Midnight Indigo palette:
- `--background` deep near-black `#0a0a1a`
- `--foreground` near-white
- `--card` / muted surface `#141432`
- `--primary` electric indigo `#4f46e5` (CTAs, accents)
- `--secondary` `#1e1e5a`
- `--border` low-opacity white
- Set base radius to a smaller, more architectural value (e.g. `0.5rem`)
- Add Google Fonts link for **Urbanist** (headings) and **Epilogue** (body) in `__root.tsx` `head().links`
- Define `--font-heading: "Urbanist"` and `--font-body: "Epilogue"`, apply body font globally, heading font to `h1–h6`

### Page sections (single route: `src/routes/index.tsx`)

1. **Nav bar** — small wordmark left ("ITN" or full name in Urbanist), single "Join waitlist" link right. Minimal — no link cluster.

2. **Split-screen hero** (50/50 on desktop, stacked on mobile)
   - Left: eyebrow ("For jiu-jitsu practitioners"), H1 "Train with purpose, not just attendance.", short subhead pulled from the PRD problem statement, primary CTA "Join the waitlist" + secondary "See how it works" anchor.
   - Right: a styled mock of the Goal screen (a "Leg locks" goal card with 3 tasks, completion counts, and one expanded reflection). Built in pure JSX/Tailwind — no real screenshots needed.

3. **Features (3 cards)** — Plan, Reflect, Timeline. Each: small icon (lucide-react), short title, one-sentence description. Dense, restrained — no fade-ins on every element.

4. **How it works (3 steps)** — numbered steps: 1) Set a goal, 2) Plan the week, 3) Reflect after class. Horizontal on desktop, stacked on mobile.

5. **App preview mockups** — 2–3 stylized device frames showing Goal list, Plan-training sheet, and Task timeline with a reflection. Built as Tailwind cards inside a phone-shaped frame (no real images). Arranged in an offset/overlapping composition.

6. **FAQ** — 4–5 items using existing shadcn `Accordion`: "Is it free?", "When does it launch?", "iOS/Android?", "Will my data sync?", "Is there a web version?".

7. **Waitlist signup** — email input + "Join waitlist" button (form posts nowhere yet — local state success toast via `sonner`). Small reassurance line below.

8. **Footer** — wordmark, copyright, single tagline. No multi-column link grid.

### SEO

Set route-specific `head()` on `index.tsx`: title `"Intentional Training Notes — Train BJJ with purpose"`, description from PRD problem statement, og:title / og:description matching.

### Technical notes

- Single route, no backend. Email form is client-side only with a success state.
- Use existing shadcn `Button`, `Input`, `Accordion`, `sonner` Toaster (mount in `__root.tsx`).
- No images generated — all mockups are JSX/Tailwind compositions.
- Keep motion minimal: subtle hover transitions on CTAs and cards only. No scroll-triggered fade-ins on every element.
- Mobile-first responsive; split-screen hero stacks at `md` breakpoint.

### Files touched

- `src/styles.css` — replace color tokens, add font variables
- `src/routes/__root.tsx` — add Google Fonts `<link>` entries, mount `<Toaster />`
- `src/routes/index.tsx` — replace placeholder with full landing page (or split into `src/components/landing/*.tsx` if it grows past ~300 lines)
