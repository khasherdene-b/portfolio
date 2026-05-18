![Portfolio preview](public/assets/og-image.png)

# Khash-Erdene — Portfolio

Personal portfolio site of **Khash-Erdene**, a software engineer and fullstack developer based in Ulaanbaatar, Mongolia. Built as a single-page bento-grid layout with a focus on refined motion, dark-first aesthetics, and performant rendering.

> Software engineer at Arigbank · turning ideas into refined, performant web experiences since 2021.

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

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm start` | Run the production build |
| `pnpm lint` | Lint with Biome |
| `pnpm format` | Format code with Biome |

## Project Structure

```
src/
  app/         layout.tsx, page.tsx, globals.css
  components/
    home/      intro + bento grid of cards
      cards/   github, anime, location, experience, social-links,
               music, books, stacks, now
    layout/    header, footer, nav
    theme/     theme provider & switcher
    ui/        aurora, grain, marquee, status-pill
    icons.tsx
  hooks/       use-mounted
  lib/         config, utils
public/
  assets/      images (me, og-image, books, music, anime, octocat)
```

## Contact

- **Email:** [khasherdene.day@gmail.com](mailto:khasherdene.day@gmail.com)
- **GitHub:** [@khasherdene-b](https://github.com/khasherdene-b)
- **LinkedIn:** [in/khasherdene0](https://www.linkedin.com/in/khasherdene0)
- **Instagram:** [@khasherdene28_](https://instagram.com/khasherdene28_)
