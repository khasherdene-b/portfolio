import type { ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

interface SectionHeadingProps {
  id: string;
  index: string;
  title: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  id,
  index,
  title,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-5 flex items-end justify-between gap-4", className)}>
      <h2
        id={id}
        className="flex items-baseline gap-3 text-lg font-semibold tracking-tight"
      >
        <span className="font-mono text-[11px] font-normal tracking-[0.2em] text-primary">
          {index}
        </span>
        {title}
      </h2>
      {action}
    </div>
  );
}
