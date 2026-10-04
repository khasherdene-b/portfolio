@AGENTS.md

# Portfolio — Khash-Erdene

## Stack

- **Next.js 16** (App Router, `reactCompiler: true`) — React 19, TypeScript 5
- **Tailwind CSS 4** — design tokens via CSS vars in `globals.css`
- **Framer Motion 12** — animations
- **next-themes** — dark/light (`defaultTheme="dark"`)
- **Biome** — linting + formatting (`pnpm lint` / `pnpm format`)
- **Import alias** — `@/*` → `src/*`. Always use absolute imports.

## Architecture: Vertical Slice

Features live in `src/features/<name>/`. Shared code lives in `src/shared/`.

Rule: one feature uses it → inside that feature. Two+ features use it → `shared/`.
e
```
src/
├── app/                      # layout, page, providers (theme + MotionConfig), globals.css,
│                             # sitemap.ts, robots.ts
├── features/
│   ├── hero/                 # HeroSection (server), Portrait, RotatingRole, HeroSocials,
│   │                         # Magnetic, hero.data.ts (rotating phrases)
│   ├── bento/                # BentoGrid (server), cards, bento-layout.data.ts
│   ├── projects/             # ProjectsSection, ProjectRow, projects.data.ts
│   ├── command-menu/         # ⌘K palette (native <dialog>), useCommandItems
│   ├── navigation/           # Header (sticky), Nav, SectionNav, Footer, useScrolled
│   └── theme/                # ThemeProvider, ThemeSwitcher
└── shared/
    ├── components/
    │   ├── ui/               # aurora, grain, spotlight, marquee, status-pill, card-base,
    │   │                     # badge, reveal, section-heading,
    │   │                     # scroll-progress, page-spotlight
    │   └── icons/            # brand-icons, social-icons (colour tiles), brand-glyphs (mono)
    ├── hooks/                # use-mounted, use-mongolia-time, use-active-section
    └── lib/                  # config.ts (PersonalInfo, SiteConfig, SECTIONS), utils.ts
```

## Adding a Bento Card

1. Create `src/features/bento/components/cards/<name>-card.tsx`
2. Export from `src/features/bento/components/cards/index.ts`
3. Add one entry to `src/features/bento/data/bento-layout.data.ts`

`BentoGrid` never changes — it renders from the data config (Open/Closed Principle).

## Adding a Project

Add one entry to `src/features/projects/data/projects.data.ts` (newest first).

## Adding a Page Section

1. Render a `<section id="…" className="scroll-mt-24">` with a `SectionHeading`.
2. Add `{ id, label }` to `SECTIONS` in `shared/lib/config.ts` — the header nav and ⌘K menu pick it up automatically.

## Component Rules

- Max 200 lines per file. Split if larger.
- Server Components by default. Add `"use client"` only for state/effects/browser APIs.
  Keep client code in small leaf islands (e.g. `Reveal`, `Magnetic`) and pass server-rendered children into them.
- Content that must not differ between server and first client render (theme, time, platform) must be gated behind `useMounted` to avoid hydration mismatches.
- Respect reduced motion: framer is wrapped in `MotionConfig reducedMotion="user"`; CSS animations are neutralised in `globals.css`.
- All bento cards must use `CardBase` from `shared/components/ui/card-base.tsx` as their outer wrapper.
- Framer Motion: `ease` must be typed `as const` when using cubic-bezier arrays to satisfy TS.

## Styling

- Tailwind CSS 4 — dark mode is defined with `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css`; prefer the CSS-var tokens (they switch automatically) over `dark:` overrides
- Design tokens are CSS vars in `globals.css` — never hardcode colors
- Use `cn()` from `shared/lib/utils` for conditional class merging
- Key animation classes: `text-shimmer`, `animate-float`, `animate-aurora`, `animate-marquee`, `stagger`
- Card appearance: always goes through `card-luxe` CSS class (via `CardBase`)

## Config

`shared/lib/config.ts` exports typed `PersonalInfo`. Access social links via `personalInfo.social.github`, `personalInfo.social.linkedin`, etc. — not flat `personalInfo.github`.

## Lint / Format

```bash
pnpm lint        # Biome check (zero errors required before commit)
pnpm format      # Biome format
```
