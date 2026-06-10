import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/utils";

type BadgeVariant = "default" | "gold" | "outline" | "primary";

interface BadgeProps extends ComponentProps<"span"> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-border/50 bg-card text-muted-foreground",
  gold: "border-gold/30 bg-gold/5 text-gold",
  outline: "border-primary/25 bg-transparent text-primary",
  primary: "border-primary/25 bg-primary/8 text-primary",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-wider",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
