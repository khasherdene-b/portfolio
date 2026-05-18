import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

interface MarqueeProps extends ComponentProps<"div"> {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  fade?: boolean;
}

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  fade = false,
  className,
  ...props
}: Readonly<MarqueeProps>) {
  return (
    <div
      className={cn("relative flex overflow-hidden [--gap:1.5rem]", className)}
      {...props}
    >
      {fade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-card to-transparent" />
        </>
      )}
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-2 pr-2",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover &&
            "[animation-play-state:running] hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>

      <div
        aria-hidden
        className={cn(
          "flex w-max shrink-0 items-center gap-2 pr-2",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover &&
            "[animation-play-state:running] hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
