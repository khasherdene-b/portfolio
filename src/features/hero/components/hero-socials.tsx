import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  FacebookGlyph,
  GithubGlyph,
  InstagramGlyph,
  LinkedinGlyph,
} from "@/shared/components/icons";
import { personalInfo } from "@/shared/lib/config";
import { Magnetic } from "./magnetic-cta";

const { linkedin, github, instagram, facebook } = personalInfo.social;

const ICON_LINKS: Array<
  [label: string, href: string, Icon: ComponentType<SVGProps<SVGSVGElement>>]
> = [
  ["GitHub", github, GithubGlyph],
  ["Instagram", instagram, InstagramGlyph],
  ["Facebook", facebook, FacebookGlyph],
];

const PILL =
  "group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-[background-color,border-color,color,box-shadow,translate]";

export function HeroSocials() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <Magnetic>
        <Link
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`${PILL} bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px] hover:shadow-primary/60`}
        >
          <LinkedinGlyph aria-hidden className="size-3.5" />
          Connect on LinkedIn
          <ArrowUpRight
            aria-hidden
            className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </Magnetic>

      <a
        href="#work"
        className={`${PILL} border border-border bg-card/40 text-foreground backdrop-blur-sm hover:border-primary/40 hover:text-primary`}
      >
        See my work
        <ArrowDown
          aria-hidden
          className="size-3.5 transition-transform group-hover:translate-y-0.5"
        />
      </a>

      <span aria-hidden className="mx-1 hidden h-5 w-px bg-border sm:block" />

      <ul className="flex items-center gap-1.5">
        {ICON_LINKS.map(([label, href, Icon]) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              title={label}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-card/40 text-muted-foreground backdrop-blur-sm transition-[color,border-color,translate] hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
            >
              <Icon aria-hidden className="size-3.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
