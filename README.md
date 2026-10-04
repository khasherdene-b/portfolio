![Portfolio preview](public/assets/og-image.png)

# Khash-Erdene — Portfolio v2.0

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (Turbopack, React Compiler enabled)
- **UI:** React 19, Tailwind CSS 4 (PostCSS, no config file), `next-themes` for dark mode
- **Motion:** Framer Motion
- **Icons:** Lucide React
- **Tooling:** TypeScript, Biome (formatter + linter)

## Getting Started

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Scripts

| Command       | Description                  |
| ------------- | ---------------------------- |
| `pnpm dev`    | Start the development server |
| `pnpm build`  | Build for production         |
| `pnpm start`  | Run the production build     |
| `pnpm lint`   | Lint with Biome              |
| `pnpm format` | Format code with Biome       |

## Project Structure

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

## Links

- **GitHub:** [@khasherdene-b](https://github.com/khasherdene-b)
- **LinkedIn:** [in/khasherdene0](https://www.linkedin.com/in/khasherdene.bo)
- **Instagram:** [@khasherdene28\_](https://instagram.com/khasherdene.bo)
