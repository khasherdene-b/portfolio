"use client";

import { ArrowUp, FolderGit2, LayoutGrid, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/shared/components/icons";
import { useMounted } from "@/shared/hooks/use-mounted";
import { personalInfo, SECTIONS } from "@/shared/lib/config";
import type { CommandItem } from "../types";

const SECTION_ICONS: Record<string, CommandItem["icon"]> = {
  overview: LayoutGrid,
  work: FolderGit2,
};

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ block: "start" });
  history.replaceState(null, "", `#${id}`);
}

function openExternal(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

const host = (url: string) => new URL(url).host.replace(/^www\./, "");

export function useCommandItems(): CommandItem[] {
  const { resolvedTheme, setTheme } = useTheme();
  // The theme is only known on the client; keep SSR and first paint identical.
  const mounted = useMounted();
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
  const { github, linkedin, instagram, facebook } = personalInfo.social;

  const navigate: CommandItem[] = [
    {
      id: "top",
      label: "Back to top",
      group: "Navigate",
      icon: ArrowUp,
      keywords: "home hero start",
      perform: () => {
        window.scrollTo({ top: 0 });
        history.replaceState(null, "", location.pathname);
      },
    },
    ...SECTIONS.map<CommandItem>(({ id, label }) => ({
      id: `section-${id}`,
      label,
      group: "Navigate",
      icon: SECTION_ICONS[id] ?? LayoutGrid,
      keywords: "section jump go",
      perform: () => scrollToSection(id),
    })),
  ];

  const links: Array<[string, string, CommandItem["icon"], string]> = [
    ["GitHub", github, GithubIcon, "code repos source"],
    ["LinkedIn", linkedin, LinkedinIcon, "work career cv resume"],
    ["Instagram", instagram, InstagramIcon, "social photos"],
    ["Facebook", facebook, FacebookIcon, "social"],
  ];
  const connect = links.map<CommandItem>(([label, url, icon, keywords]) => ({
    id: `link-${label.toLowerCase()}`,
    label,
    group: "Connect",
    icon,
    keywords,
    hint: host(url),
    perform: () => openExternal(url),
  }));

  const actions: CommandItem[] = [
    {
      id: "toggle-theme",
      label: mounted ? `Switch to ${nextTheme} theme` : "Toggle theme",
      group: "Actions",
      icon: SunMoon,
      keywords: "theme dark light mode appearance",
      keepOpen: true,
      perform: () => setTheme(nextTheme),
    },
  ];

  return [...navigate, ...connect, ...actions];
}

/** Case-insensitive match where every query word must appear somewhere. */
export function filterCommands(items: CommandItem[], query: string) {
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return items;
  return items.filter((item) => {
    const haystack = `${item.label} ${item.keywords ?? ""}`.toLowerCase();
    return words.every((w) => haystack.includes(w));
  });
}
