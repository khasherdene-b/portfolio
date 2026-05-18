import { LogosVisualStudioCode } from "@/components/icons";
import { Code2 } from "lucide-react";

const START_YEAR = 2021;

export function ExperienceCard() {
  const years = new Date().getFullYear() - START_YEAR;

  return (
    <div className="card-luxe group relative flex h-16.5 flex-col items-center justify-center overflow-hidden rounded-xl">
      <LogosVisualStudioCode className="absolute -left-2 -top-2 size-16 -rotate-12 opacity-15 blur-[2px] transition-transform duration-700 group-hover:rotate-0" />
      <span className="absolute right-2 top-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
        since {START_YEAR}
      </span>
      <span className="font-mono text-2xl font-bold tracking-tight -rotate-1 text-foreground">
        <Code2 className="mr-1 inline-block size-4 align-middle text-primary" />
        <span className="text-shimmer">{years} yrs</span>
      </span>
      <span className="text-xs text-muted-foreground">coding experience</span>
    </div>
  );
}
