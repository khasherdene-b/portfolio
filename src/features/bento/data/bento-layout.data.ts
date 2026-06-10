import {
  AnimeCard,
  BooksCard,
  ExperienceCard,
  GithubCard,
  LocationCard,
  MusicCard,
  NowCard,
  SocialLinksCard,
  StacksCard,
} from "../components/cards";
import type { GridLayout } from "../types";

export const BENTO_LAYOUT: GridLayout = [
  // Row 1: GitHub + Now — equal halves
  {
    cols: 2,
    cells: [
      { id: "github", component: GithubCard },
      { id: "now", component: NowCard },
    ],
  },
  // Row 2: Music (2/3) + Anime (1/3)
  {
    cols: 3,
    cells: [
      { id: "music", component: MusicCard, colSpan: 2 },
      { id: "anime", component: AnimeCard },
    ],
  },
  // Row 3: [Social + Experience stacked] + Location — equal halves
  {
    cols: 2,
    cells: [
      {
        id: "social-experience",
        children: [
          { id: "social", component: SocialLinksCard },
          { id: "experience", component: ExperienceCard },
        ],
      },
      { id: "location", component: LocationCard },
    ],
  },
  // Row 4: Stacks + Books — equal halves
  {
    cols: 2,
    cells: [
      { id: "stacks", component: StacksCard },
      { id: "books", component: BooksCard },
    ],
  },
];
