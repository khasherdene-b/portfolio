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
import { Marquee } from "@/shared/components/ui/marquee";

const ICON_SIZE = { width: "40", height: "40" } as const;

export function StacksCard() {
  return (
    <div className="card-luxe relative flex h-full min-h-28 flex-col justify-center gap-3 overflow-hidden rounded-2xl pt-4 [--gap:2.5rem]">
      <span className="absolute left-3 top-2 z-20 font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground/70">
        Stack
      </span>
      <Marquee pauseOnHover fade>
        <IconTypescript {...ICON_SIZE} />
        <JavascriptIcon {...ICON_SIZE} />
        <IconNextJS {...ICON_SIZE} />
        <IconReactJS {...ICON_SIZE} />
        <IconTailwindcss {...ICON_SIZE} />
        <NestjsIcon {...ICON_SIZE} />
        <JavaLightIcon {...ICON_SIZE} />
        <PlaywrightIcon {...ICON_SIZE} />
      </Marquee>
      <Marquee reverse pauseOnHover fade>
        <IconPrisma {...ICON_SIZE} />
        <IconGit {...ICON_SIZE} />
        <IconNodeJS {...ICON_SIZE} />
        <HtmlIcon {...ICON_SIZE} />
        <CssIcon {...ICON_SIZE} />
        <OracleIcon {...ICON_SIZE} />
        <SkillIconsDocker {...ICON_SIZE} />
        <SpringLightIcon {...ICON_SIZE} />
        <MongodbIcon {...ICON_SIZE} />
      </Marquee>
    </div>
  );
}
