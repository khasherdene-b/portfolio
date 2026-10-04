import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/shared/components/icons";
import { personalInfo } from "@/shared/lib/config";
import { cn } from "@/shared/lib/utils";

interface SocialTile {
  name: string;
  href: string;
  caption: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Brand colours are the one place hardcoded colours are intentional. */
  base: string;
  glow: string;
}

const { linkedin, instagram, facebook } = personalInfo.social;

const TILES: SocialTile[] = [
  {
    name: "LinkedIn",
    href: linkedin,
    caption: "serious stuff",
    icon: LinkedinIcon,
    base: "bg-[#0a3d62]",
    glow: "bg-linear-to-br from-[#2867b2]/0 via-[#2867b2]/40 to-[#2867b2]/0 group-hover:opacity-100",
  },
  {
    name: "Instagram",
    href: instagram,
    caption: "for connection",
    icon: InstagramIcon,
    base: "bg-zinc-950",
    glow: "bg-[conic-gradient(from_180deg_at_50%_50%,#f59e0b_0deg,#ef4444_90deg,#ec4899_180deg,#8b5cf6_270deg,#f59e0b_360deg)] group-hover:opacity-30",
  },
  {
    name: "Facebook",
    href: facebook,
    caption: "old school",
    icon: FacebookIcon,
    base: "bg-[#1877F2]",
    glow: "bg-linear-to-br from-white/0 via-white/20 to-white/0 group-hover:opacity-100",
  },
];

export function SocialLinksCard() {
  return (
    <ul className="flex h-full gap-2">
      {TILES.map(({ name, href, caption, icon: Icon, base, glow }) => (
        <li key={name} className="flex-1">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} (opens in a new tab)`}
            className={cn(
              "group relative flex h-full min-h-18 w-full flex-col items-center justify-center gap-0.5 overflow-hidden rounded-xl text-white ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]",
              base,
            )}
          >
            <span
              aria-hidden
              className={cn(
                "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500",
                glow,
              )}
            />
            <Icon aria-hidden className="relative size-5" />
            <span className="relative -rotate-2 text-[11px] text-white/70 transition-colors group-hover:text-white">
              {caption}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
