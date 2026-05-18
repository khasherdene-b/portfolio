import { cn } from "@/lib/utils";

interface StatusPillProps {
  label?: string;
  className?: string;
}

export function StatusPill({
  label = "Available for work",
  className,
}: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-2.5 py-1 text-xs font-medium text-primary",
        className,
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
      </span>
      {label}
    </span>
  );
}
