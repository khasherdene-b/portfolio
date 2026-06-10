"use client";

import type { ComponentProps } from "react";
import { GithubIcon } from "@/shared/components/icons";
import { personalInfo } from "@/shared/lib/config";
import { cn } from "@/shared/lib/utils";
import { useRotatingEmoji } from "../hooks/use-rotating-emoji";

export function Footer({ className, ...props }: ComponentProps<"footer">) {
  const emoji = useRotatingEmoji();
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "flex flex-col gap-3 border-t border-border pt-5 pb-6 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      <div className="flex items-center">
        <span className="flex items-center gap-1.5">
          <span aria-hidden>{emoji}</span>
          <time className="font-mono" dateTime={String(year)}>
            {year}
          </time>
          <span className="text-border">·</span>
          <span>
            he<span className="text-border">/</span>him
          </span>
        </span>
        <a
          href={personalInfo.social.github}
          rel="noreferrer noopener"
          target="_blank"
          className="ml-auto flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <GithubIcon />
          <span>khasherdene-b</span>
        </a>
      </div>

      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
        <span>Developed by Khash-Erdene</span>
        <span className="flex items-center gap-1.5">
          <span className="size-1 rounded-full bg-primary animate-blink" />
          <span>Art1val~</span>
        </span>
      </div>
    </footer>
  );
}
