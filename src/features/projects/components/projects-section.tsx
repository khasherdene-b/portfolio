import Link from "next/link";
import { Reveal } from "@/shared/components/ui/reveal";
import { SectionHeading } from "@/shared/components/ui/section-heading";
import { personalInfo } from "@/shared/lib/config";
import { PROJECTS } from "../data/projects.data";
import { ProjectRow } from "./project-row";

export function ProjectsSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="mt-20 scroll-mt-24"
    >
      <SectionHeading
        id="work-heading"
        index="02"
        title="Selected work"
        action={
          <Link
            href={`${personalInfo.social.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            All repos ↗
          </Link>
        }
      />
      <Reveal>
        <ul className="divide-y divide-border/60">
          {PROJECTS.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
