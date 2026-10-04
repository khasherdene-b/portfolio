"use client";

import { CommandMenu } from "@/features/command-menu";
import { ThemeSwitcher } from "@/features/theme/components/switcher";
import { cn } from "@/shared/lib/utils";
import { useScrolled } from "../hooks/use-scrolled";
import { Nav } from "./nav";
import { SectionNav } from "./section-nav";

export function Header() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "sticky top-3 z-40 -mx-3 mt-3 flex items-center justify-between gap-2 rounded-2xl border px-3 py-2 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "border-border/70 bg-background/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent",
      )}
    >
      <Nav />
      <div className="flex items-center gap-1.5">
        <SectionNav className="mr-1 hidden md:block" />
        <CommandMenu />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
