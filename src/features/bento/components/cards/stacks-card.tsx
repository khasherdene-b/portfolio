import type { ComponentType, SVGProps } from "react";
import {
  CssIcon,
  HtmlIcon,
  IconGit,
  IconNextJS,
  IconNodeJS,
  IconPrisma,
  IconReactJS,
  IconTailwindcss,
  IconTypescript,
  JavaLightIcon,
  JavascriptIcon,
  MongodbIcon,
  NestjsIcon,
  OracleIcon,
  PlaywrightIcon,
  SkillIconsDocker,
  SpringLightIcon,
} from "@/shared/components/icons";
import { CardBase } from "@/shared/components/ui/card-base";
import { Marquee } from "@/shared/components/ui/marquee";

type Tech = [name: string, Icon: ComponentType<SVGProps<SVGSVGElement>>];

const FRONTEND: Tech[] = [
  ["TypeScript", IconTypescript],
  ["JavaScript", JavascriptIcon],
  ["Next.js", IconNextJS],
  ["React", IconReactJS],
  ["Tailwind CSS", IconTailwindcss],
  ["HTML", HtmlIcon],
  ["CSS", CssIcon],
  ["Playwright", PlaywrightIcon],
];

const BACKEND: Tech[] = [
  ["NestJS", NestjsIcon],
  ["Node.js", IconNodeJS],
  ["Java", JavaLightIcon],
  ["Spring", SpringLightIcon],
  ["Prisma", IconPrisma],
  ["Oracle", OracleIcon],
  ["MongoDB", MongodbIcon],
  ["Docker", SkillIconsDocker],
  ["Git", IconGit],
];

function TechRow({
  items,
  reverse,
}: Readonly<{ items: Tech[]; reverse?: boolean }>) {
  return (
    <Marquee reverse={reverse} pauseOnHover fade>
      {items.map(([name, Icon]) => (
        <span key={name} title={name} className="flex items-center">
          <Icon width="36" height="36" aria-hidden />
        </span>
      ))}
    </Marquee>
  );
}

export function StacksCard() {
  const all = [...FRONTEND, ...BACKEND].map(([name]) => name).join(", ");

  return (
    <CardBase
      interactive={false}
      className="relative flex h-full min-h-32 flex-col justify-center gap-3 rounded-2xl pt-7 pb-4 [--gap:2.5rem]"
    >
      <span className="absolute left-4 top-3 z-20 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Toolbox
      </span>
      <p className="sr-only">Technologies I work with: {all}.</p>
      <div aria-hidden className="space-y-3">
        <TechRow items={FRONTEND} />
        <TechRow items={BACKEND} reverse />
      </div>
    </CardBase>
  );
}
