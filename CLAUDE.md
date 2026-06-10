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

```
src/
├── app/                      # layout.tsx, page.tsx, globals.css
├── features/
│   ├── hero/                 # HeroSection, WordFadeBio, MagneticCTA, useMagnetic
│   ├── bento/                # BentoGrid, all cards, bento-layout.data.ts, useMusicPlayer
│   ├── navigation/           # Header, Nav, Footer, useRotatingEmoji
│   └── theme/                # ThemeProvider, ThemeSwitcher
└── shared/
    ├── components/
    │   ├── ui/               # aurora, grain, spotlight, marquee, equalizer, status-pill,
    │   │                     # card-base, glow-border, badge, scroll-progress, page-spotlight
    │   └── icons/            # brand-icons.tsx, social-icons.tsx, index.ts
    ├── hooks/                # use-mounted, use-mongolia-time
    └── lib/                  # config.ts (typed PersonalInfo/SiteConfig), utils.ts
```

## Adding a Bento Card

1. Create `src/features/bento/components/cards/<name>-card.tsx`
2. Export from `src/features/bento/components/cards/index.ts`
3. Add one entry to `src/features/bento/data/bento-layout.data.ts`

`BentoGrid` never changes — it renders from the data config (Open/Closed Principle).

## Component Rules

- Max 200 lines per file. Split if larger.
- Server Components by default. Add `"use client"` only for state/effects/browser APIs.
- All bento cards must use `CardBase` from `shared/components/ui/card-base.tsx` as their outer wrapper.
- Framer Motion: `ease` must be typed `as const` when using cubic-bezier arrays to satisfy TS.

## Styling

- Tailwind CSS 4 — use `@variant dark (&:is(.dark *))` for dark mode overrides (NOT `dark:` prefix)
- Design tokens are CSS vars in `globals.css` — never hardcode colors
- Use `cn()` from `shared/lib/utils` for conditional class merging
- Key animation classes: `text-shimmer`, `animate-float`, `animate-aurora`, `animate-marquee`, `eq-bar`
- Card appearance: always goes through `card-luxe` CSS class (via `CardBase`)

## Config

`shared/lib/config.ts` exports typed `PersonalInfo`. Access social links via `personalInfo.social.email`, `personalInfo.social.github`, etc. — not flat `personalInfo.email`.

## Lint / Format

```bash
pnpm lint        # Biome check (zero errors required before commit)
pnpm format      # Biome format
```
