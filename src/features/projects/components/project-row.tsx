import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/shared/components/ui/badge";
import type { Project } from "../types";

interface ProjectRowProps {
  project: Project;
}

export function ProjectRow({ project }: Readonly<ProjectRowProps>) {
  const { name, description, year, tags, repo, url } = project;
  const href = url ?? repo;

  return (
    <li className="group relative">
      <article className="relative grid grid-cols-[3.25rem_1fr_auto] gap-x-4 rounded-xl px-3 py-4 transition-colors duration-300 group-hover:bg-muted/60 sm:px-4">
        <span className="pt-0.5 font-mono text-xs tabular-nums text-muted-foreground">
          {year}
        </span>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold tracking-tight">
            {/* Stretched link: the whole row is the hit target. */}
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm transition-colors after:absolute after:inset-0 after:rounded-xl after:content-[''] group-hover:text-primary"
            >
              {name}
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </h3>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <ArrowUpRight
          aria-hidden
          className="mt-0.5 size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        />
      </article>

      {url && (
        <Link
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 -mt-2 mb-2 ml-20 inline-block font-mono text-[11px] text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline sm:ml-[5.25rem]"
        >
          source ↗<span className="sr-only"> for {name}</span>
        </Link>
      )}
    </li>
  );
}
