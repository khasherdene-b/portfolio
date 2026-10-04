import { personalInfo } from "@/shared/lib/config";
import type { Project } from "../types";

const gh = (repo: string) => `${personalInfo.social.github}/${repo}`;

/** Curated, newest first. Add an entry here to list a new project. */
export const PROJECTS: Project[] = [
  {
    slug: "the-agentic-engineering-guide",
    name: "The Agentic Engineering Guide",
    description:
      "Claude Code command pipelines that take a task from spec → scope → implement → test → review, driven entirely by files in the repo.",
    year: 2026,
    tags: ["Claude Code", "AI tooling", "Workflow"],
    repo: gh("the-agentic-engineering-guide"),
  },
  {
    slug: "portfolio",
    name: "Portfolio v2",
    description:
      "This site. Server-first Next.js 16 with vertical-slice architecture, React Compiler, and a hand-tuned motion system.",
    year: 2026,
    tags: ["Next.js", "React 19", "Tailwind 4"],
    repo: gh("portfolio"),
    url: "https://khasherdene.vercel.app",
  },
  {
    slug: "dsa-refresher",
    name: "DSA Refresher",
    description:
      "Classic data structures and algorithms, re-implemented from scratch in TypeScript.",
    year: 2025,
    tags: ["TypeScript", "Algorithms"],
    repo: gh("dsa-refresher"),
  },
  {
    slug: "freecodecamp-task",
    name: "freeCodeCamp Certification",
    description:
      "Algorithm and data-structure tasks completed for the freeCodeCamp JavaScript certification.",
    year: 2023,
    tags: ["JavaScript", "Algorithms"],
    repo: gh("freecodecamp-task"),
  },
];
