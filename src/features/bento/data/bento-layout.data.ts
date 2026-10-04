import {
  ExperienceCard,
  GithubCard,
  LocationCard,
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
  // Row 2: [Social + Experience stacked] + Location — equal halves
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
  // Row 3: Stack — full width so the marquee has room to breathe
  {
    cols: 1,
    cells: [{ id: "stacks", component: StacksCard }],
  },
];
