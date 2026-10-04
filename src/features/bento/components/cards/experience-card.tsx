import { Code2 } from "lucide-react";
import { LogosVisualStudioCode } from "@/shared/components/icons";
import { CardBase } from "@/shared/components/ui/card-base";

const START_YEAR = 2021;

export function ExperienceCard() {
  const years = new Date().getFullYear() - START_YEAR;

  return (
    <CardBase className="group relative flex h-full min-h-18 flex-col items-center justify-center rounded-xl">
      <LogosVisualStudioCode
        aria-hidden
        className="absolute -left-2 -top-2 size-16 -rotate-12 opacity-15 blur-[2px] transition-transform duration-700 group-hover:rotate-0"
      />
      <span className="absolute right-2.5 top-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
        since {START_YEAR}
      </span>
      <p className="font-mono text-2xl font-bold tracking-tight text-foreground">
        <Code2
          aria-hidden
          className="mr-1 inline-block size-4 align-middle text-primary"
        />
        <span className="text-shimmer">{years}+ yrs</span>
      </p>
      <p className="text-xs text-muted-foreground">writing code</p>
    </CardBase>
  );
}
