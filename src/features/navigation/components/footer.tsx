"use client";

import { ArrowUp } from "lucide-react";
import type { ComponentProps } from "react";
import { GithubIcon } from "@/shared/components/icons";
import { personalInfo, siteConfig } from "@/shared/lib/config";
import { cn } from "@/shared/lib/utils";
import { useRotatingEmoji } from "../hooks/use-rotating-emoji";

export function Footer({ className, ...props }: ComponentProps<"footer">) {
  const { emoji, next } = useRotatingEmoji();
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "flex flex-col gap-4 border-t border-border pt-6 pb-8 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={next}
            onMouseEnter={next}
            aria-label="Shuffle emoji"
            className="rounded-sm transition-transform hover:scale-125"
          >
            <span aria-hidden>{emoji}</span>
          </button>
          <span>
            © <time dateTime={String(year)}>{year}</time> {personalInfo.name}
          </span>
          <span aria-hidden className="text-border">
            ·
          </span>
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
          <GithubIcon aria-hidden />
          <span>khasherdene-b</span>
        </a>
      </div>

      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">
        <span className="flex items-center gap-1.5">
          <span
            aria-hidden
            className="size-1 rounded-full bg-primary animate-blink"
          />
          v{siteConfig.version} · Art1val~
        </span>
        <a
          href="#top"
          className="group flex items-center gap-1 transition-colors hover:text-primary"
        >
          Back to top
          <ArrowUp
            aria-hidden
            className="size-3 transition-transform group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </footer>
  );
}
