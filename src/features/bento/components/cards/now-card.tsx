"use client";

import { Clock, Sparkles } from "lucide-react";
import { Spotlight } from "@/shared/components/ui/spotlight";
import { useMongoliaTime } from "@/shared/hooks/use-mongolia-time";

export function NowCard() {
  const time = useMongoliaTime();

  return (
    <Spotlight className="card-luxe relative flex h-full min-h-36 w-full flex-col justify-between overflow-hidden rounded-2xl p-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Now
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Learner
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Late-night Playwright · Supabase · Drizzle
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70">
            Building{" "}
            <span className="text-foreground/80 font-medium">portfolio v2</span>
          </p>
        </div>
        <span className="relative flex size-2.5 shrink-0 mt-1">
          <span
            className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60"
            style={{ boxShadow: "0 0 0 4px var(--primary-glow)" }}
          />
          <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
        </span>
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3.5 text-primary/80" />
          <span className="font-mono tabular-nums tracking-wider text-foreground">
            {time ?? "--:--:--"}
          </span>
          <span className="text-muted-foreground/70">UB</span>
        </div>
        <span className="rounded-full border border-gold/30 bg-gold/5 px-2 py-0.5 font-mono text-[10px] text-gold tracking-wider">
          v2026
        </span>
      </div>
    </Spotlight>
  );
}
