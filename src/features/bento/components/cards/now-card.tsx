"use client";

import { Clock, Sparkles } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { CardBase } from "@/shared/components/ui/card-base";
import { useMongoliaTime } from "@/shared/hooks/use-mongolia-time";
import { siteConfig } from "@/shared/lib/config";

export function NowCard() {
  const time = useMongoliaTime();

  return (
    <CardBase className="relative flex h-full min-h-40 w-full flex-col justify-between rounded-2xl p-5">
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
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Now
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Learner
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Late-night Playwright · Supabase · Drizzle
          </p>
          <p className="mt-2 text-xs text-muted-foreground/80">
            Shipping{" "}
            <span className="font-medium text-foreground/80">
              portfolio v{siteConfig.version}
            </span>
          </p>
        </div>
        <span aria-hidden className="relative mt-1 flex size-2.5 shrink-0">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
        </span>
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3.5 text-primary/80" />
          <time
            className="font-mono tabular-nums tracking-wider text-foreground"
            suppressHydrationWarning
          >
            {time ?? "--:--:--"}
          </time>
          <span className="text-muted-foreground/70">UB time</span>
        </p>
        <Badge variant="gold">v{siteConfig.version}</Badge>
      </div>
    </CardBase>
  );
}
