import { cn } from "@/shared/lib/utils";

interface EqualizerProps {
  className?: string;
  bars?: number;
  playing?: boolean;
}

export function Equalizer({
  className,
  bars = 4,
  playing = true,
}: EqualizerProps) {
  return (
    <div aria-hidden className={cn("flex h-3 items-end gap-[3px]", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] rounded-sm bg-primary"
          style={{
            height: "100%",
            transformOrigin: "bottom",
            animation: playing
              ? `equalize ${0.8 + (i % 3) * 0.25}s ease-in-out ${i * 0.08}s infinite`
              : undefined,
          }}
        />
      ))}
    </div>
  );
}
