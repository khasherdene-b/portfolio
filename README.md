![Portfolio preview](public/assets/og-image.png)

# Khash-Erdene — Portfolio

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

## Contact

- **Email:** [khasherdene.day@gmail.com](mailto:khasherdene.day@gmail.com)
- **GitHub:** [@khasherdene-b](https://github.com/khasherdene-b)
- **LinkedIn:** [in/khasherdene0](https://www.linkedin.com/in/khasherdene0)
- **Instagram:** [@khasherdene28\_](https://instagram.com/khasherdene28_)
